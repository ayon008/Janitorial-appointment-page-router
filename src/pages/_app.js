import { gilroy } from "@/components/fonts/Gilroy";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${gilroy.className}`}>
      <Component {...pageProps} />
    </main>
  )
}
