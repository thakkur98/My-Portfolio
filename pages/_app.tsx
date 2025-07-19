import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/Component/Header/page";
import Footer from "@/Component/Footer/page";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Header/>
    <Component {...pageProps} />;
    <Footer/>
    </>
   
  )
  
}
