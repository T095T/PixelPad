import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "PixelPad",
  description:
    "Custom Design tool inspired by Figma using Fabrics.js and Liveblocks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200 antialiased`}>
        <Room>{children}</Room>
      </body>
    </html>
  );
}
