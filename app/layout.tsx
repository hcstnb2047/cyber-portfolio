import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyber Portfolio | Full Stack Developer",
  description: "サイバーパンク風ポートフォリオサイト。Web開発、フロントエンド、バックエンド、インフラ技術を駆使した次世代エンジニアのポートフォリオ。",
  keywords: "ポートフォリオ, エンジニア, Web開発, React, Next.js, TypeScript, フルスタック",
  openGraph: {
    title: "Cyber Portfolio | Full Stack Developer",
    description: "次世代エンジニアのサイバーパンク風ポートフォリオサイト",
    type: "website",
    locale: "ja_JP",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://cyber-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Portfolio | Full Stack Developer",
    description: "次世代エンジニアのサイバーパンク風ポートフォリオサイト",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
