import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const figures = [
  {
    n: "6,819",
    t: "筆企業財務資料",
    s: "93 項變數、360 組候選。重點不是分數高，是不讓自己作弊。",
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
    title: "Hermes LINE 媒體改善",
    q: "圖片能用，為什麼語音卻消失？",
    role: "問題重現 · 驗收條件 · 回歸測試",
    tags: [["第三方可查核 · Issue + PR", "tag-3rd"]],
  },
  {
    href: "/projects/ai-assistant/",
    title: "AI 協作生活助理",
    q: "把零散的日常，收回同一個入口。",
    role: "需求定義 · 工具取捨 · 測試驗收",
    tags: [["自我驗收", "tag-self"], ["持續運作中", "tag-self"]],
  },
  {
    href: "/projects/bankruptcy-risk/",
    title: "企業破產風險預測",
    q: "高 Accuracy，不代表抓得到高風險企業。",
    role: "驗證設計 · 指標取捨 · 限制說明",
    tags: [["7 頁技術報告", "tag-self"], ["已標明限制", "tag-open"]],
  },
  {
    href: "/projects/conversation-memory/",
    title: "每次開新對話，都在考我",
    q: "我不想再靠記憶找回自己的進度。",
    role: "問題定義 · 判準設計 · 缺口認定",
    tags: [["仍有未解問題", "tag-open"]],
  },
  {
    href: "/projects/equity-research/",
    title: "一次個股研究，以及它教我的事",
    q: "我用接近淨值的價格，買一家一直在賺錢的公司。",
    role: "論述推導 · 取捨說明 · 事後檢討",
    tags: [["已了結部位 · 2021–2025", "tag-self"], ["含自我檢討", "tag-open"]],
  },
  {
    href: "/projects/convenience-store/",
    title: "便利商店產業及財務分析",
    q: "疫情之後，便利商店受到什麼影響？",
    role: "5 人組長 · 資料整合 · 簡報定稿",
    tags: [["課程專題 · 2023", "tag-self"]],
  },
];

const limits = [
  "實作是 AI 協作產生的。我沒辦法宣稱自己能獨立寫出這些程式。",
  "破產風險模型只做過一次 holdout，沒有外部驗證，不能推論因果。",
  "Hermes 那個 PR 最終沒有被合併——維護者已有涵蓋更廣的修正。",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="shell">
        <section className="hero">
          <span className="role">應徵 AI 產品應用 / 產品企劃</span>
          <h1>
            我做的不是寫出程式，
            <br />
            是確認它真的有用。
          </h1>
          <p className="lede">
            財金背景。實作透過 AI 協作完成，我負責定義問題、決定取捨、驗收結果。
          </p>

          <div className="figures">
            {figures.map((f) => (
              <Link className="figure" href={f.to} key={f.n}>
                <span className="figure-n">{f.n}</span>
                <span className="figure-t">{f.t}</span>
                <span className="figure-s">{f.s}</span>
                <span className="figure-link">{f.label} ↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="band" id="projects">
          <div className="band-head">
            <h2>六個專案，各自附上可查核的證據</h2>
          </div>
          <div className="ledger">
            {entries.map((e) => (
              <Link className="entry" href={e.href} key={e.href}>
                <div className="entry-top">
                  <span className="entry-title">{e.title}</span>
                  <span className="rowlabel">{e.role}</span>
                </div>
                <p className="entry-q">{e.q}</p>
                <div className="entry-meta">
                  {e.tags.map(([label, cls]) => (
                    <span className={`tag ${cls}`} key={label}>
                      {label}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="band" id="limits">
          <div className="honest">
            <h2>我不能宣稱的事</h2>
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
          <a className="cta" href="mailto:andrew920322@gmail.com">
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
