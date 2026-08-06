export function SiteHeader({ project }: { project?: string }) {
  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="回到作品集首頁">
        <span className="brand-mark">M</span>
        <span>馬彥宸 / {project ?? "PORTFOLIO"}</span>
      </a>
      <nav className="nav" aria-label="主要導覽">
        <a href="/#projects">專案</a>
        <a href="/#about">關於我</a>
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
      <span>馬彥宸 / 產業研究 × AI 應用企劃</span>
      <span>新竹・桃園・雙北皆可</span>
      <a href="mailto:andrew920322@gmail.com">andrew920322@gmail.com</a>
    </footer>
  );
}
