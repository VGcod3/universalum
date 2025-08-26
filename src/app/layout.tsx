import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/organisms";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Universalum - Комплексне проектування та будівництво",
  description:
    "Група компаній, що виконують інженерно-геологічні та геодезичні вишукування, проектування, будівельно-монтажні роботи",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${ubuntu.variable} antialiased`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
