import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mugenstudio.framer.website"),
  title: "Mugen Design Studio — Built Different",
  description:
    "Premium design studio template. Dark mode portfolio with retainer pricing, case studies CMS & conversion-focused layout.",
  icons: {
    icon: "/images/CFmoqu0qxF0u5YZ6ADWu3UG3c.png",
    apple: "/images/zhH4tM4hVUqlx0saiMz3PvxnLs.png",
  },
  openGraph: {
    title: "Mugen Design Studio Framer Template",
    description:
      "Premium design studio Framer template. Dark mode portfolio with retainer pricing, case studies CMS & conversion-focused layout.",
    images: ["/images/AkfwmbbK7reh203E7bgE8GE6w.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#141414] text-[#ffffff] font-sans selection:bg-white selection:text-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
