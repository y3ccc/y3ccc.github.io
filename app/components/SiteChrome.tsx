import Link from "next/link";

export function SiteHeader({ project }: { project?: string }) {
  return (
    <header className="topbar">
      <Link className="brand" href="/">
        馬彥宸{project ? ` / ${project}` : ""}
      </Link>
      <nav className="topnav" aria-label="主要導覽">
        <Link href="/#projects">專案</Link>
        <Link href="/#limits">我不能宣稱的事</Link>
        <a href="mailto:andrew920322@gmail.com">andrew920322@gmail.com</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <span>馬彥宸 · 應徵 AI 產品應用 / 產品企劃</span>
      <span>新竹・桃園・雙北皆可</span>
      <a href="https://github.com/y3ccc" target="_blank" rel="noreferrer">
        GitHub ↗
      </a>
    </footer>
  );
}
