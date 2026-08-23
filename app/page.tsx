import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const figures = [
  {
    n: "6,819",
    t: "筆企業財務資料",
    s: "93 項變數、360 組候選。測試集先留好，選模時不偷看答案。",
    to: "/projects/bankruptcy-risk/",
    label: "企業破產風險預測",
  },
  {
    n: "#57882",
    t: "公開 Issue 與 PR",
    s: "GitHub 上任何人都能點開查證。PR 最終未被合併，我照實寫。",
    to: "/projects/hermes-line-media/",
    label: "Hermes LINE 媒體改善",
  },
  {
    n: "13",
    t: "個服務被我關掉",
    s: "死因全部記下來。只看還活著的東西會誤判。",
    to: "/projects/conversation-memory/",
    label: "每次開新對話，都在考我",
  },
];

const entries = [
  {
    href: "/projects/hermes-line-media/",
    core: true,
    title: "Hermes LINE 媒體改善",
    q: "圖片能用，為什麼語音卻消失？",
    role: "問題重現 · 驗收條件 · 回歸測試",
    tags: [["第三方可查核 · Issue + PR", "tag-3rd"]],
  },
  {
    href: "/projects/ai-assistant/",
    core: false,
    title: "AI 協作生活助理",
    q: "用 Discord 和 LINE 處理行事曆、郵件、日記與記帳。",
    role: "需求定義 · 工具取捨 · 測試驗收",
    tags: [["自我驗收", "tag-self"], ["持續運作中", "tag-self"]],
  },
  {
    href: "/projects/bankruptcy-risk/",
    core: true,
    title: "企業破產風險預測",
    q: "高 Accuracy，不代表抓得到高風險企業。",
    role: "驗證設計 · 指標取捨 · 限制說明",
    tags: [["11 頁整合技術報告", "tag-self"], ["已標明限制", "tag-open"]],
  },
  {
    href: "/projects/conversation-memory/",
    core: false,
    title: "每次開新對話，都在考我",
    q: "我不想再靠記憶找回自己的進度。",
    role: "問題定義 · 判準設計 · 缺口認定",
    tags: [["仍有未解問題", "tag-open"]],
  },
  {
    href: "/projects/equity-research/",
    core: true,
    title: "一次個股研究，以及它教我的事",
    q: "我用接近淨值的價格，買一家一直在賺錢的公司。",
    role: "論述推導 · 取捨說明 · 事後檢討",
    tags: [["已了結部位 · 2021–2025", "tag-self"], ["含自我檢討", "tag-open"]],
  },
  {
    href: "/projects/convenience-store/",
    core: false,
    title: "便利商店產業及財務分析",
    q: "疫情之後，便利商店受到什麼影響？",
    role: "5 人組長 · 資料整合 · 簡報定稿",
    tags: [["課程專題 · 2023", "tag-self"]],
  },
];

const tiers: [boolean, string][] = [
  [true, "建議先看 · 有公開紀錄、完整方法或實際使用結果"],
  [false, "其餘三個"],
];

const limits = [
  "實作由 AI 協助完成，我無法宣稱自己能獨立寫出這些程式。我負責問題定義、工具取捨、驗收設計與結果確認。",
  "破產風險模型只做過一次 holdout，沒有外部驗證，不能推論因果。",
  "Hermes 的 PR 最終沒有被合併，因為維護者已有涵蓋更廣的修正。",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="shell">
        <section className="hero">
          <span className="role">應徵 AI 應用 / 產業分析師</span>
          <h1>
            把問題拆清楚，
            <br />
            再用實際結果驗收。
          </h1>
          <p className="lede">
            我有財金背景，實作由 AI 協助完成；我負責定義問題、決定取捨並確認結果。
          </p>

          <div className="figures">
            {figures.map((f) => (
              <Link className="figure" href={f.to} key={f.n}>
                <span className="figure-n">{f.n}</span>
                <span className="figure-t">{f.t}</span>
                <span className="figure-s">{f.s}</span>
                <span className="figure-link">{f.label} →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="band" id="projects">
          <div className="band-head">
            <h2>六個專案，各自附上可查核的證據</h2>
          </div>

          {tiers.map(([core, label]) => (
            <div key={label}>
              <span className="tier-label">{label}</span>
              <div className="ledger">
                {entries.filter((e) => e.core === core).map((e) => (
                  <Link className="entry" href={e.href} key={e.href}>
                    <div className="entry-top">
                      <span className="entry-title">{e.title}</span>
                      <span className="rowlabel">{e.role}</span>
                    </div>
                    <p className="entry-q">{e.q}</p>
                    <div className="entry-meta">
                      {e.tags.map(([tag, cls]) => (
                        <span className={`tag ${cls}`} key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="band" id="limits">
          <div className="honest">
            <h2>案例限制</h2>
            <ul>
              {limits.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band" id="contact">
          <h2>聯絡</h2>
          <p>新竹、桃園與雙北皆可，對遠端工作有意願。</p>
          <a className="cta" href="/reports/ma-yen-chen-onepager.pdf" target="_blank" rel="noreferrer">
            下載一頁履歷 PDF ↗
          </a>
          <a className="cta cta-ghost" href="mailto:andrew920322@gmail.com">
            andrew920322@gmail.com
          </a>
          <a className="cta cta-ghost" href="https://github.com/y3ccc" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
