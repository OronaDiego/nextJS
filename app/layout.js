import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Slider from "./components/Slider.js";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web App",
  description: "E-commerce autoadministrable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthContextProvider>
          <CartContextProvider>
            <NavBar/>
            <Slider/>
              {children}
            <Footer/>
          </CartContextProvider>
        </AuthContextProvider>
        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
