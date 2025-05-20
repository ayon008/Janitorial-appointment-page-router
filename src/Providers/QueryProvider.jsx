
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ChatProvider from "./ChatProvider";
const queryClient = new QueryClient()

const QueryProvider = ({ children }) => {
    const pathName = usePathname();
    console.log(pathName);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathName]);


    return (
        <ChatProvider>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ChatProvider>
    );
};

export default QueryProvider;