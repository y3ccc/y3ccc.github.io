import Link from "next/link";

export function SiteHeader({ project }: { project?: string }) {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="回到作品集首頁">
        <span className="brand-mark">M</span>
        <span>馬彥宸 / {project ?? "PORTFOLIO"}</span>
      </Link>
      <nav className="nav" aria-label="主要導覽">
        <Link href="/#projects">專案</Link>
        <Link href="/#about">關於我</Link>
        <a href="/reports/ma-yen-chen-ai-product-portfolio.pdf" target="_blank" rel="noreferrer">面試簡報</a>
        <a className="nav-contact" href="mailto:andrew920322@gmail.com">
          聯絡我 ↗
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <span>馬彥宸 / AI 產品應用 × 問題驗證 × 商業分析</span>
      <span>新竹・桃園・雙北皆可</span>
      <a href="https://github.com/y3ccc" target="_blank" rel="noreferrer">GitHub ↗</a>
    </footer>
  );
}
