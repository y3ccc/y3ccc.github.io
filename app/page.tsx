import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export const metadata: Metadata = {
  title: "馬彥宸｜AI 產品應用作品集",
  description: "AI 生活助理、Hermes 產品改善，以及產業與風險分析作品。",
};

const strengths = [
  {
    number: "01",
    title: "需求判斷",
    text: "先確認使用者真正卡在哪裡，再決定是否需要 AI、需要哪種工具，以及什麼不該做。",
  },
  {
    number: "02",
    title: "測試驗收",
    text: "把模糊問題拆成可重現情境，檢查輸入、輸出與回歸影響，不把 AI 產出直接當答案。",
  },
  {
    number: "03",
    title: "產品取捨",
    text: "依實際使用、風險與維護成本保留有效功能；工具若讓流程更重，就停止投入並換方向。",
  },
];

export default function PortfolioHome() {
  return (
    <div className="site-shell portfolio-home">
      <SiteHeader />

      <main>
        <section className="portfolio-hero">
          <div className="portfolio-hero-copy">
            <p className="kicker">AI PRODUCT APPLICATION × PROBLEM VALIDATION</p>
            <h1>
              把真實需求轉成
              <span>可驗證的 AI 應用。</span>
            </h1>
            <p>
              我是馬彥宸，財務金融系畢業。我不把自己包裝成獨立工程師；我的價值是發現問題、
              定義使用情境、透過 AI 協作推進實作，並用真實操作確認結果是否真的改善流程。
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">查看產品案例 <span>↓</span></a>
              <a className="text-link" href="/reports/ma-yen-chen-ai-product-portfolio.pdf" target="_blank" rel="noreferrer">
                下載面試簡報 <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-product-canvas" aria-label="AI 生活助理使用情境示意">
            <div className="canvas-toolbar">
              <span><i /> PERSONAL AI WORKSPACE</span><span>使用情境示意</span>
            </div>
            <div className="canvas-chat">
              <div className="canvas-message canvas-user"><small>CONTROLLED TEST · 2026.08.17</small><p>建立一筆展示心得，並安排明天下午的檢查提醒。</p></div>
              <div className="canvas-message canvas-agent"><small>ASSISTANT · ACTUAL RESULT</small><p>筆記已建立；Calendar 因 OAuth 權限不足，未建立。</p></div>
            </div>
            <div className="canvas-route">
              <div><span>01</span><strong>展示筆記</strong><small>Markdown · 已驗證</small><b>✓</b></div>
              <div className="canvas-route-blocked"><span>02</span><strong>Calendar</strong><small>OAuth scope 不足</small><b>!</b></div>
            </div>
            <div className="canvas-proof"><span>真實測試</span><i>→</i><span>成功與失敗</span><i>→</i><strong>都被如實記錄</strong></div>
          </div>
        </section>

        <section className="quick-scan" aria-label="作品集三十秒摘要">
          <div><span>MY ROLE</span><strong>需求定義與驗收</strong><p>AI 協助技術實作，我負責情境、取捨與結果確認。</p></div>
          <div><span>WORKING METHOD</span><strong>從真實使用找問題</strong><p>先重現，再縮小範圍，最後用原始操作做回歸測試。</p></div>
          <div><span>PUBLIC PROOF</span><strong>Issue + Pull Request</strong><p>Hermes 改善案例附公開問題與修改紀錄。</p></div>
          <div><span>RESEARCH BASE</span><strong>財金 × 資料判讀</strong><p>以公開資料、模型指標與限制說明支撐分析。</p></div>
        </section>

        <section className="selected-projects section-rule" id="projects">
          <div className="section-heading portfolio-section-heading">
            <div>
              <p className="section-label">SELECTED PROJECTS / 從使用問題到產品證據</p>
              <h2>不從工具名稱開始，<br /><em>從使用者為什麼卡住開始。</em></h2>
            </div>
            <p>每個案例都標示我的角色、AI協作邊界、驗證方式與限制。</p>
          </div>

          <div className="project-showcase">
            <a className="project-tile project-tile-ai project-tile-featured" href="/projects/ai-assistant/">
              <div className="tile-top"><span>PROJECT 01 / AI PRODUCT</span><span>2026—持續運作</span></div>
              <div className="case-cover case-cover-assistant" aria-hidden="true">
                <div className="cover-window">
                  <div className="cover-window-head"><i /><i /><i /><span>AI LIFE ASSISTANT</span></div>
                  <div className="cover-conversation"><span>記錄心得，並建立明日提醒</span><strong>筆記完成；Calendar 權限不足，未建立</strong></div>
                  <div className="cover-destinations"><b>NOTE · PASS</b><b>CALENDAR · BLOCKED</b><b>REPORT · HONEST</b></div>
                </div>
                <div className="cover-caption"><span>01</span><p>CONTROLLED REQUEST</p><i>→</i><span>02</span><p>VERIFIED OUTCOMES</p></div>
              </div>
              <div className="tile-copy">
                <p>AI 協作生活助理 / 需求規劃 / 服務整合 / 產品取捨</p>
                <h3>把零散App收回一個聊天室，也把沒價值的工具拿掉。</h3>
                <span>查看完整產品案例 ↗</span>
              </div>
            </a>

            <a className="project-tile project-tile-hermes" href="/projects/hermes-line-media/">
              <div className="tile-top"><span>PROJECT 02 / PRODUCT IMPROVEMENT</span><span>PUBLIC EVIDENCE</span></div>
              <div className="case-cover case-cover-hermes" aria-hidden="true">
                <div className="media-pipeline"><div><span>IMAGE</span><b className="dot-pass" /> <strong>PASS</strong></div><div><span>VOICE</span><b className="dot-fail" /> <strong>DROP</strong></div><div><span>FILE</span><b className="dot-fail" /> <strong>DROP</strong></div></div>
                <div className="pipeline-arrow">↓ <small>重現 · 定位 · 修正 · 回歸測試</small></div>
                <div className="pipeline-result"><span>VOICE</span><strong>STT FLOW</strong><b>✓</b></div>
              </div>
              <div className="tile-copy">
                <p>Hermes LINE 媒體改善 / 問題重現 / 修正驗證 / Issue &amp; PR</p>
                <h3>從「語音不見了」走到可查核的產品回饋。</h3>
                <span>查看公開證據 ↗</span>
              </div>
            </a>

            <a className="project-tile project-tile-analysis" href="/projects/convenience-store/">
              <div className="tile-top"><span>PROJECT 03 / INDUSTRY RESEARCH</span><span>2023—2024</span></div>
              <div className="store-visual" aria-hidden="true">
                <div className="store-sign"><span>便利商店</span></div>
                <div className="market-bars">
                  <i><span>7-ELEVEN</span><b /></i><i><span>全家</span><b /></i><i><span>其他</span><b /></i>
                </div>
              </div>
              <div className="tile-copy">
                <p>產業研究 / 企業比較</p>
                <h3>疫情背景下，便利商店的營運模式如何吸收變化？</h3>
                <span>查看研究案例 ↗</span>
              </div>
            </a>

            <a className="project-tile project-tile-risk" href="/projects/bankruptcy-risk/">
              <div className="tile-top"><span>PROJECT 04 / RISK ANALYSIS</span><span>2026</span></div>
              <div className="risk-visual" aria-hidden="true">
                <div className="risk-question"><span>ACCURACY ≠ RISK DETECTION</span><strong>高準確率，<br />仍可能漏掉真正高風險企業。</strong></div>
                <div className="risk-mini-metrics"><div><b>6,819</b><span>企業樣本</span></div><div><b>93</b><span>財務變數</span></div><div><b>59.85%</b><span>Test Recall</span></div><div><b>45.18%</b><span>Test F1</span></div></div>
              </div>
              <div className="tile-copy"><p>財務風險 / 指標取捨</p><h3>如何避免被漂亮的Accuracy誤導？</h3><span>查看研究限制與完整報告 ↗</span></div>
            </a>
          </div>
        </section>

        <section className="about-section section-rule" id="about">
          <div className="section-label">ABOUT / 我能帶來什麼</div>
          <div className="about-layout">
            <div>
              <h2>不是替AI背書，<br /><em>而是替結果負責。</em></h2>
              <p>
                我希望從AI產品應用、產品企劃或使用成效分析切入。現階段不主張獨立開發能力，
                但能把模糊需求變成可測試情境，清楚說明判斷、證據與還沒解決的限制。
              </p>
            </div>
            <div className="strength-list">
              {strengths.map((item) => (
                <article key={item.number}><span>{item.number}</span><strong>{item.title}</strong><p>{item.text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="portfolio-contact">
          <p className="kicker">OPEN TO AI PRODUCT OPPORTUNITIES</p>
          <h2>AI產品應用、產品企劃<br /><em>或需要把問題轉成改善方案的工作。</em></h2>
          <p>新竹、桃園與雙北皆可｜電話 0900-187-817</p>
          <a className="button button-light" href="mailto:andrew920322@gmail.com">andrew920322@gmail.com <span>↗</span></a>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
