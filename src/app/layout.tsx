import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./index.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tigran Zakharyan",
  description: "Web developer's portfolio",
  keywords: ["Tigran Zakharyan"],
  authors: [{ name: "Tigran Zakharyan" }],
  robots: "index, follow",
  other: {
    "revisit-after": "15 days",
    "language": "English",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
