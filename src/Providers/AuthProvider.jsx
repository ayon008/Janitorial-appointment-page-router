
import { createContext, useEffect, useState } from "react";
import {
    getAuth,
} from "firebase/auth";

import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { app } from "@/js/firebase.init";
import useAxiosPublic from "@/hooks/useAxiosPublic";


// Create context for authentication
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const router = useRouter();

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(null); // Error state to manage issues

    const axiosPublic = useAxiosPublic();

    // Functions for authentication
    const signUp = async (email, password) => {
        const { createUserWithEmailAndPassword } = await import("firebase/auth");
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = async (email, password) => {
        const { signInWithEmailAndPassword } = await import("firebase/auth");
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = async (name) => {
        const { updateProfile } = await import("firebase/auth");
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    };

    const changePassword = async (email) => {
        if (!email) {
            setError("Email is required for password reset");
            return;
        }
        try {
            const { sendPasswordResetEmail } = await import("firebase/auth");
            await sendPasswordResetEmail(auth, email);
            console.log("Password reset email sent successfully.");
        } catch (error) {
            setError(`Password Reset Error: ${error.message}`);
        }
    };

    const verifyPassword = async (actionCode, newPassword) => {
        try {
            const { confirmPasswordReset } = await import("firebase/auth");
            await confirmPasswordReset(auth, actionCode, newPassword);
            console.log('Password reset successful');
        } catch (error) {
            setError(`Error resetting password: ${error.message}`);
        }
    };

    const logOut = async () => {
        const { signOut } = await import("firebase/auth");
        await signOut(auth);
        router.push('/');
        Cookies.remove('userToken');
        sessionStorage.removeItem('paymentLink');
    };

    useEffect(() => {
        let unsubscribe;
        const subscribe = async () => {
            const { onAuthStateChanged } = await import("firebase/auth");
            unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
                if (currentUser) {
                    setLoader(true);
                    try {
                        const response = await axiosPublic.post('/userEmail', {
                            email: currentUser.email,
                            userName: currentUser.displayName
                        });
                        const { token } = response?.data;
                        if (token) {
                            Cookies.set('userToken', token, { expires: 1 / 24 });
                            setUser(currentUser);
                        }
                    } catch (error) {
                        setError(`Error fetching user data: ${error.message}`);
                    }
                    setLoader(false);
                } else {
                    setUser(null);
                    setLoader(false);
                    Cookies.remove('userToken');
                }
            });
        };

        subscribe();
        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, [auth, axiosPublic]);


    // Expose authentication methods via context
    const authInfo = {
        signUp,
        signIn,
        logOut,
        updateUserProfile,
        loader,
        user,
        changePassword,
        verifyPassword,
        error,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
