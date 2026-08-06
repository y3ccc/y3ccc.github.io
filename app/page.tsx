import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "馬彥宸｜產業研究 × AI 應用企劃作品集",
  description: "馬彥宸的求職作品集：便利商店產業分析與 AI 協作生活助理。",
};

const strengths = [
  {
    number: "01",
    title: "研究與比較",
    text: "從公開資訊整理產業背景、企業策略與財務資料，建立一致的比較架構。",
  },
  {
    number: "02",
    title: "整合與表達",
    text: "把分散內容整理成圖表、簡報與可以討論的結論，並負責成果品質。",
  },
  {
    number: "03",
    title: "AI 應用判斷",
    text: "先確認需求、風險與維護成本，再透過 AI 協作導入、測試與調整流程。",
  },
];

export default function PortfolioHome() {
  return (
    <div className="site-shell portfolio-home">
      <SiteHeader />

      <main>
        <section className="portfolio-hero">
          <div className="portfolio-hero-copy">
            <p className="kicker">INDUSTRY RESEARCH × AI APPLICATION</p>
            <h1>
              把資訊整理成
              <span>可以做決定的依據。</span>
            </h1>
            <p>
              我是馬彥宸，財務金融系畢業。我的作品一邊從公開資料理解產業與企業，
              一邊從實際需求評估 AI 工具是否真的值得導入。
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">查看專案 <span>↓</span></a>
              <a className="text-link" href="mailto:andrew920322@gmail.com">聯絡我 <span>↗</span></a>
            </div>
          </div>

          <div className="portfolio-index" aria-label="作品索引">
            <div className="index-head"><span>SELECTED WORK</span><span>2023—2026</span></div>
            <a href="/projects/convenience-store">
              <span>01</span>
              <div><strong>便利商店產業與財務分析</strong><small>產業研究・企業比較・團隊整合</small></div>
              <b>↗</b>
            </a>
            <a href="/projects/ai-assistant">
              <span>02</span>
              <div><strong>AI 協作生活助理</strong><small>需求盤點・服務整合・測試驗收</small></div>
              <b>↗</b>
            </a>
          </div>
        </section>

        <section className="selected-projects section-rule" id="projects">
          <div className="section-heading portfolio-section-heading">
            <div>
              <p className="section-label">SELECTED PROJECTS / 兩個不同問題</p>
              <h2>研究產業，也研究工具<br /><em>是否真的解決問題。</em></h2>
            </div>
            <p>點進專案，查看問題、做法、成果與限制。</p>
          </div>

          <div className="project-showcase">
            <a className="project-tile project-tile-analysis" href="/projects/convenience-store">
              <div className="tile-top"><span>PROJECT 01</span><span>2023—2024</span></div>
              <div className="store-visual" aria-hidden="true">
                <div className="store-sign"><span>24</span><b>便利商店</b></div>
                <div className="market-bars">
                  <i><span>7-ELEVEN</span><b /></i>
                  <i><span>全家</span><b /></i>
                  <i><span>其他</span><b /></i>
                </div>
              </div>
              <div className="tile-copy">
                <p>產業研究 / 企業比較</p>
                <h3>疫情之後，便利商店受到什麼影響？</h3>
                <span>查看研究案例 ↗</span>
              </div>
            </a>

            <a className="project-tile project-tile-ai" href="/projects/ai-assistant">
              <div className="tile-top"><span>PROJECT 02</span><span>2026—持續運作</span></div>
              <div className="assistant-mini-flow" aria-hidden="true">
                <div>Discord / LINE</div><span>↓</span><div className="flow-accent">AI 協作層</div><span>↓</span>
                <div className="mini-services"><i>Calendar</i><i>Gmail</i><i>Obsidian</i></div>
              </div>
              <div className="tile-copy">
                <p>AI 應用 / 流程整合</p>
                <h3>把零散的日常，收回同一個入口。</h3>
                <span>查看應用案例 ↗</span>
              </div>
            </a>
          </div>
        </section>

        <section className="about-section section-rule" id="about">
          <div className="section-label">ABOUT / 我能帶來什麼</div>
          <div className="about-layout">
            <div>
              <h2>不急著裝懂，<br /><em>先把問題弄清楚。</em></h2>
              <p>
                我目前適合從產業研究、AI 應用企劃或商業分析助理開始。
                財金背景讓我能理解企業與數字；個人 server 經驗讓我知道，工具導入之後還要面對使用、維護與取捨。
              </p>
            </div>
            <div className="strength-list">
              {strengths.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span><strong>{item.title}</strong><p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-contact">
          <p className="kicker">OPEN TO OPPORTUNITIES</p>
          <h2>產業研究、AI 應用企劃<br /><em>或需要把資訊理清楚的工作。</em></h2>
          <p>應徵地點可配合新竹、桃園與雙北。</p>
          <a className="button button-light" href="mailto:andrew920322@gmail.com">andrew920322@gmail.com <span>↗</span></a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
