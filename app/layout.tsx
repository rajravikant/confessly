import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});




export const metadata: Metadata = {
  title: "Confessly",
  description: "A convenient way to share your thoughts and confessions anonymously.",
  openGraph: {
    title: "Confessly",
    description: "A convenient way to share your thoughts and confessions anonymously.",
    url: "https://confessly.vercel.app",
    siteName: "Confessly"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
