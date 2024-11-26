import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "./_ui/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><title>Sharks'Pear's</title></head>
      <body className={inter.className}>
        <div><Nav /></div>
        {children}
      </body>
    </html>
  );
}
