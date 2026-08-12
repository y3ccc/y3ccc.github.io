import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "ma-yen-chen-ai-portfolio.y3ccc.chatgpt.site";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "馬彥宸｜財務風險 × 產業研究作品集",
    description: "企業破產風險預測、便利商店產業比較與 AI 協作專案。",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "馬彥宸｜財務風險 × 產業研究作品集",
      description: "把複雜資料轉成風險與決策依據。",
      url: "/",
      type: "website",
      locale: "zh_TW",
      images: [{ url: "/og.png", width: 1536, height: 1024, alt: "馬彥宸財務風險與產業研究作品集" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "馬彥宸｜財務風險 × 產業研究作品集",
      description: "把複雜資料轉成風險與決策依據。",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
