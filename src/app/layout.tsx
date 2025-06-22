import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInitializer from './components/AOSInitializer';
import ReduxProvider from "@/store/ReduxProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio | Andrey Wilmsen",
  description: "Portfólio pessoal desenvolvido em Next.js para apresentar projetos e habilidades como desenvolvedor fullstack.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider >
          <AOSInitializer />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
