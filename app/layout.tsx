import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://y3ccc.github.io"),
    title: "馬彥宸｜投資研究作品集",
    description: "投資研究助理／初階研究員作品集，收錄個股研究、財務風險分析與產業分析。",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "馬彥宸｜投資研究作品集",
      description: "從財報與產業變化，建立可以被驗證的投資論點。",
      url: "/",
      type: "website",
      locale: "zh_TW",
      images: [{ url: "/og-investment-research.png", width: 1200, height: 630, alt: "馬彥宸投資研究作品集首頁，收錄鴻海個股研究、企業破產風險與便利商店產業分析。" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "馬彥宸｜投資研究作品集",
      description: "從財報與產業變化，建立可以被驗證的投資論點。",
      images: ["/og-investment-research.png"],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
