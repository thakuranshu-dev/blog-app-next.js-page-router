import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
