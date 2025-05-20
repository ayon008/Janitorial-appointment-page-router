
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const GetData = (key, params) => {
    const axiosSecure = useAxiosSecure();
    const { isLoading, isError, error, data, refetch } = useQuery({
        queryKey: [key], // Include `uid` in queryKey to refetch if `uid` changes
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(params);
                const data = await response?.data;
                return data;
            } catch (err) {
                console.error("Error fetching user data:", err);
                throw err; // Rethrow the error to be caught by React Query
            }
        },
        enabled: !!key
    });
    return { isLoading, data, refetch };
};

export default GetData;