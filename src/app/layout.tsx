import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageTransition } from "@/components/PageTransition";
import { BottomBlur } from "@/components/BottomBlur";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

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
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://trifectatrends.com"),
  title: "TRIFECTA TRENDS — Built Different",
  description:
    "A full-service creative technology and digital product design studio. We craft distinctive digital experiences, brand architectures, and high-converting platforms.",
  icons: {
    icon: "/images/CFmoqu0qxF0u5YZ6ADWu3UG3c.png",
    apple: "/images/zhH4tM4hVUqlx0saiMz3PvxnLs.png",
  },
  openGraph: {
    title: "TRIFECTA TRENDS — Creative Technology & Design Studio",
    description:
      "A full-service creative technology and digital product design studio. We craft distinctive digital experiences, brand architectures, and high-converting platforms.",
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--page-bg)] text-[var(--text-primary)] font-sans selection:bg-white selection:text-black">
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
        {/* MUGEN-style cinematic progressive bottom blur & depth overlay */}
        <BottomBlur />
      </body>
    </html>
  );
}
