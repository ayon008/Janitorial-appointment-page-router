
import useAuth from "@/Hooks/useAuth";
import { useEffect, useState } from "react";
import GetData from "./GetData";

const GetUserData = () => {
    const { user } = useAuth();
    const [uid, setUid] = useState(null);
    useEffect(() => {
        const uid = user?.uid;
        setUid(uid);
    }, [user])
    const { isLoading, data, refetch } = GetData(uid, `user/${uid}`);;
    return { isLoading, data, refetch };
};

export default GetUserData;