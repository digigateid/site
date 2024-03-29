// import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Navbar from "./navbar";
import Footer from "./footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>DigiGate</title>
        <meta name="description" content="perusahaan yang berdedikasi untuk menyediakan solusi jaringan terkini dengan produk utama DigiGate. kuatkan jaringan Anda dengan DigiGate." />
        <meta name="keywords" content="OLT, ONU, Router" />
        <meta name="author" content="DigiGate" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        {/* <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com/page" />
        <meta property="og:title" content="DigiGate" />
        <meta property="og:description" content="Generated by create next app" />
        <meta property="og:image" content="https://example.com/image.jpg" /> */}

        {/* Twitter */}
        {/* <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://example.com/page" />
        <meta property="twitter:title" content="DigiGate" />
        <meta property="twitter:description" content="Generated by create next app" />
        <meta property="twitter:image" content="https://example.com/image.jpg" /> */}
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
