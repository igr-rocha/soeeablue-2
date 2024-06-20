import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <header className="max-w-6xl mx-auto mt-8 flex justify-between items-center">
          <img src="/soeeablue-logo.svg" alt="" />


          <ul className="flex items-center gap-9 font-sora font-bold text-xl ">
            <li className="text-soeeablue-green-500 hover:text-soeeablue-blue-500 transition-colors cursor-pointer">A SOEEABLUE</li>
            <li className="text-soeeablue-green-500 hover:text-soeeablue-blue-500 transition-colors cursor-pointer">SERVIÇOS</li>
            <li className="text-soeeablue-green-500 hover:text-soeeablue-blue-500 transition-colors cursor-pointer">AGENDAR</li>
            <li className="text-soeeablue-green-500 hover:text-soeeablue-blue-500 transition-colors cursor-pointer">CONTATE-NOS</li>
            <li className="cursor-pointer hover:text-soeeablue-green-500"><img src="/userIcon.svg" alt="" /></li>
          </ul>
        </header>

        {children}
      </body>
    </html>
  );
}
