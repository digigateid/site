// import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Navbar from "./navbar";
import Footer from "./footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>DigiGate - Seamless connectivity</title>
        <meta name="title" content="DigiGate - Seamless connectivity" />
        <meta name="description" content="DigiGate.
        Produk Jaringan Komputer
        Unlocking Seamless Connectivity with Affordable High-Performance Networking Solutions. Produk utama kami, DigiGate, mencakup berbagai jenis perangkat jaringan, termasuk perangkat jaringan sumber terbuka, serta perangkat OLT dan ONU." />
        <meta name="keywords" content="OLT, ONU, Router" />
        <meta name="author" content="DigiGate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://metatags.io/" /> */}
        <meta property="og:title" content="DigiGate - Seamless connectivity" />
        <meta property="og:description" content="DigiGate.
        Produk Jaringan Komputer
        Unlocking Seamless Connectivity with Affordable High-Performance Networking Solutions. Produk utama kami, DigiGate, mencakup berbagai jenis perangkat jaringan, termasuk perangkat jaringan sumber terbuka, serta perangkat OLT dan ONU." />
        {/* <meta property="og:image" content="https://metatags.io/images/meta-tags.png" /> */}

        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta property="twitter:url" content="https://metatags.io/" /> */}
        <meta property="twitter:title" content="DigiGate - Seamless connectivity" />
        <meta property="twitter:description" content="DigiGate.
        Produk Jaringan Komputer
        Unlocking Seamless Connectivity with Affordable High-Performance Networking Solutions. Produk utama kami, DigiGate, mencakup berbagai jenis perangkat jaringan, termasuk perangkat jaringan sumber terbuka, serta perangkat OLT dan ONU." />
        {/* <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" /> */}

      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="bg-customGray-400">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  );
}
