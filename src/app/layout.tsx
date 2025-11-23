import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { Providers } from "./providers";
import Header from "../components/Header";


export const metadata: Metadata = {
  title: "Isa Tlahuilxochitl - Professional Translation Services",
  description: "Professional translation and interpretation services in English, German, and Spanish.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={GeistSans.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
