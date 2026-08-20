import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL("https://y3ccc.github.io"),
    title: "馬彥宸｜AI 產品應用作品集",
    description: "六個附上可查核證據的案例：公開 Issue 與 PR、模型限制說明、服務停用判斷與個股研究檢討。",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "馬彥宸｜AI 產品應用作品集",
      description: "我做的不是寫出程式，是確認它真的有用。",
      url: "/",
      type: "website",
      locale: "zh_TW",
      images: [{ url: "/og-v5.png", width: 1200, height: 630, alt: "馬彥宸｜應徵 AI 應用 / 產業分析師。6,819 筆企業財務資料、公開 Issue 與 PR、13 個服務被我關掉。" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "馬彥宸｜AI 產品應用作品集",
      description: "我做的不是寫出程式，是確認它真的有用。",
      images: ["/og-v5.png"],
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
