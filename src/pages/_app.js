import { gilroy } from "@/components/fonts/Gilroy";
import Main from "@/components/Layout/Main";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${gilroy.className}`}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </main>
  )
}
