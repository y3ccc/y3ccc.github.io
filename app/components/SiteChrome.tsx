import Link from "next/link";

export function SiteHeader({ project }: { project?: string }) {
  return (
    <header className="topbar">
      <Link className="brand" href="/">
        馬彥宸{project ? ` / ${project}` : ""}
      </Link>
      <nav className="topnav" aria-label="主要導覽">
        <Link href="/#projects">專案</Link>
        <Link href="/#limits">工作邊界</Link>
        <a href="mailto:andrew920322@gmail.com">聯絡我</a>
      </nav>
    </header>
  );
}

export function CaseSummary({
  problem,
  decision,
  check,
  result,
  evidence,
  level,
}: {
  problem: string;
  decision: string;
  check: string;
  result: string;
  evidence: string;
  level: "third" | "self" | "open";
}) {
  const levelClass = { third: "tag-3rd", self: "tag-self", open: "tag-open" }[level];
  const rows: [string, string][] = [
    ["問題", problem],
    ["我的決定", decision],
    ["驗收方式", check],
    ["結果", result],
  ];
  return (
    <div className="summary">
      <div className="summary-head">
        <strong>30 秒摘要</strong>
        <span className={`tag ${levelClass}`}>{evidence}</span>
      </div>
      <dl className="summary-rows">
        {rows.map(([k, v]) => (
          <div className="summary-row" key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <span>馬彥宸 · 應徵 AI 應用 / 產業分析師</span>
      <span>新竹・桃園・雙北皆可</span>
      <a href="https://github.com/y3ccc" target="_blank" rel="noreferrer">
        GitHub ↗
      </a>
    </footer>
  );
}
