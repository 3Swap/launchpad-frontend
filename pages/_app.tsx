import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`flex justify-center bg-[#350870]  relative flex-col min-h-screen w-full gap-4`}
    >
      {/* <Image width={330} height={95} src="/light-gradient.svg" alt="light-gradient" /> */}

      <Header />

      <div className="flex-1 overflow-auto max-w-full">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}
