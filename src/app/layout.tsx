import type { Metadata } from "next";
import { PT_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  weight: ["400", "500"], // 300 isn't available for DM Sans in next/font/google default
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Sabeeh — MERN Stack Developer",
  description: "Mohammed Sabeeh — MERN Stack Developer and Web Developer. Fast, clean and accessible digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ptSans.variable} ${dmSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-body bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="grow pt-2">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
