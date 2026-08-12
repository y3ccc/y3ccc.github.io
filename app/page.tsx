import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "馬彥宸｜財務風險 × 產業研究作品集",
  description: "馬彥宸的求職作品集：企業破產風險預測、便利商店產業比較與 AI 協作專案。",
};

const strengths = [
  {
    number: "01",
    title: "風險判讀",
    text: "不被表面 Accuracy 誤導，從資料分布、指標取捨與驗證設計辨識真正的風險訊號。",
  },
  {
    number: "02",
    title: "產業比較",
    text: "從公開資訊整理市場、企業策略與財務資料，建立一致且可核對的比較架構。",
  },
  {
    number: "03",
    title: "專案追蹤",
    text: "把需求拆成可驗收結果，持續追蹤異常、確認修正，並淘汰效益不足的方案。",
  },
];

export default function PortfolioHome() {
  return (
    <div className="site-shell portfolio-home">
      <SiteHeader />

      <main>
        <section className="portfolio-hero">
          <div className="portfolio-hero-copy">
            <p className="kicker">FINANCIAL RISK × INDUSTRY RESEARCH × AI APPLICATION</p>
            <h1>
              把複雜資料轉成
              <span>風險與決策依據。</span>
            </h1>
            <p>
              我是馬彥宸，財務金融系畢業。我的作品從企業風險、產業比較與實際專案出發，
              練習把資料整理成可以查核、可以討論，也知道限制在哪裡的判斷依據。
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">查看專案 <span>↓</span></a>
              <a className="text-link" href="mailto:andrew920322@gmail.com">聯絡我 <span>↗</span></a>
            </div>
          </div>

          <div className="portfolio-index" aria-label="作品索引">
            <div className="index-head"><span>SELECTED WORK</span><span>2023—2026</span></div>
            <a href="/projects/bankruptcy-risk">
              <span>01</span>
              <div><strong>企業破產風險預測</strong><small>風險判讀・驗證設計・財務指標</small></div>
              <b>↗</b>
            </a>
            <a href="/projects/convenience-store">
              <span>02</span>
              <div><strong>便利商店產業與財務分析</strong><small>產業研究・企業比較・團隊整合</small></div>
              <b>↗</b>
            </a>
            <a href="/projects/ai-assistant">
              <span>03</span>
              <div><strong>AI 協作生活助理</strong><small>需求盤點・服務整合・測試驗收</small></div>
              <b>↗</b>
            </a>
          </div>
        </section>

        <section className="selected-projects section-rule" id="projects">
          <div className="section-heading portfolio-section-heading">
            <div>
              <p className="section-label">SELECTED PROJECTS / 三種決策情境</p>
              <h2>先辨識風險，再理解產業<br /><em>與實際執行。</em></h2>
            </div>
            <p>點進專案，查看問題、方法、決策含義與限制。</p>
          </div>

          <div className="project-showcase">
            <a className="project-tile project-tile-risk" href="/projects/bankruptcy-risk">
              <div className="tile-top"><span>PROJECT 01</span><span>2026</span></div>
              <div className="risk-visual" aria-hidden="true">
                <div className="risk-question">
                  <span>ACCURACY ≠ RISK DETECTION</span>
                  <strong>高準確率，<br />仍可能漏掉真正高風險企業。</strong>
                </div>
                <div className="risk-mini-metrics">
                  <div><b>6,819</b><span>企業樣本</span></div>
                  <div><b>93</b><span>財務變數</span></div>
                  <div><b>360</b><span>CV 候選／資料版</span></div>
                  <div><b>59.85%</b><span>Recall 優先平均</span></div>
                </div>
              </div>
              <div className="tile-copy">
                <p>財務風險 / 模型驗證</p>
                <h3>如何避免被漂亮的 Accuracy 誤導？</h3>
                <span>查看專案與完整技術報告 ↗</span>
              </div>
            </a>

            <a className="project-tile project-tile-analysis" href="/projects/convenience-store">
              <div className="tile-top"><span>PROJECT 02</span><span>2023—2024</span></div>
              <div className="store-visual" aria-hidden="true">
                <div className="store-sign"><span>便利商店</span></div>
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
              <div className="tile-top"><span>PROJECT 03</span><span>2026—持續運作</span></div>
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
                我目前適合從企業風險分析、產業研究、策略投資支援或商業分析助理開始。
                財金背景讓我理解企業與數字；資料與專案作品則讓我練習驗證、追蹤與清楚標示限制。
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
          <h2>財務風險、產業研究<br /><em>或需要把資訊轉成判斷的工作。</em></h2>
          <p>應徵地點可配合新竹、桃園與雙北。</p>
          <a className="button button-light" href="mailto:andrew920322@gmail.com">andrew920322@gmail.com <span>↗</span></a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
