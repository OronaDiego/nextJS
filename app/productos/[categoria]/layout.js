import { Geist, Geist_Mono } from "next/font/google";
import MenuNavigation from "@/app/components/MenuNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({ children, params }) {
  const { categoria} = await params;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MenuNavigation categoria={categoria} />
        {children}
      </body>
    </html>
  );
}
