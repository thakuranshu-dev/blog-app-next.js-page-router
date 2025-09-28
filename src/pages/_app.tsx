import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar,{HamburgerMenu} from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <header className="fixed w-screen h-8 p-1 pl-8 bg-gray-100">
        <div className="sm:inline-flex md:hidden ">
          <HamburgerMenu />
        </div>
        <div className="md:inline-flex w-full h-full sm:hidden">
          <Navbar />
        </div>
      </header>

      <main className="min-h-screen bg-transparent">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
