import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

// Role function to check admin privileges
export function role() {
    const token = Cookies.get("userToken");
    if (!token) return null; // Return null if token is missing
    try {
        const decoded = jwtDecode(token);
        return decoded?.isAdmin || false; // Return false if `isAdmin` is undefined
    } catch (error) {
        console.error("Error decoding token:", error);
        return false; // Handle invalid token gracefully
    }
}

// Sanity client setup
export const client = createClient({
    projectId: "x89ff5qy",
    dataset: "production",
    apiVersion: "2023-03-01", // https://www.sanity.io/docs/api-versioning
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Use environment variable for sensitive data
});

// Function to generate a client with a dynamic token
export function getClientWithToken(token) {
    return createClient({
        projectId: "x89ff5qy",
        dataset: "production",
        apiVersion: "2023-03-01",
        useCdn: false,
        token, // Dynamically passed token
    });
}

// Function to generate image URLs
const builder = imageUrlBuilder(client);
export function urlFor(source) {
    return builder.image(source);
}
