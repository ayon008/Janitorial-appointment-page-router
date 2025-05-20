import { gilroy } from "@/components/fonts/Gilroy";
import Main from "@/components/Layout/Main";
import AuthProvider from "@/Providers/AuthProvider";
import QueryProvider from "@/Providers/QueryProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${gilroy.className} overflow-hidden`}>
      <Main>
        <AuthProvider>
          <QueryProvider>
            <Component {...pageProps} />
          </QueryProvider>
        </AuthProvider>
      </Main>
    </main>
  )
}
