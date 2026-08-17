import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "AI 協作生活助理｜馬彥宸作品集",
  description: "以 Discord／LINE 為入口，整合日常工具的 AI 協作生活助理專案。",
};

const integrations = ["Google Calendar", "Gmail", "Obsidian", "GitHub Sync", "提醒", "法律判決 MCP"];
const cases = [
  { number: "01", title: "日記與消費，不再散落", input: "在 Discord／LINE 輸入心得、日記或消費。", output: "寫入 Obsidian，再由 GitHub 持續同步。", check: "檢查檔案、內容、日期與同步狀態。" },
  { number: "02", title: "用對話處理行事曆與郵件", input: "要求建立行程、查詢行程或處理 Gmail。", output: "AI 呼叫對應服務完成操作。", check: "回到 Calendar／Gmail 確認實際結果。" },
  { number: "03", title: "出問題時，先找原因再動手", input: "服務報錯、更新衝突或因電腦休眠中斷。", output: "AI 協助排查，確認原因後修復或調整。", check: "重新操作功能，確認服務恢復。" },
];

export default function AiAssistantProject() {
  return (
    <div className="site-shell ai-project">
      <SiteHeader project="PROJECT 01" />
      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <Link className="back-link" href="/">← 返回作品集</Link>
            <p className="kicker">AI APPLICATION / 2026—持續運作</p>
            <h1><span className="headline-line headline-main">把零散的日常，</span><span className="headline-line headline-accent">收回同一個入口。</span></h1>
            <p className="hero-lede">我用 Discord／LINE 作為對話入口，整合行事曆、Gmail、日記、記帳與個人知識庫。重點不是把工具堆在一起，而是確認它們真的讓生活變簡單。</p>
            <div className="hero-facts"><div><strong>2</strong><span>對話入口</span></div><div><strong>6+</strong><span>整合服務</span></div><div><strong>05.2026</strong><span>開始運作</span></div></div>
          </div>
          <div className="hero-card" aria-label="專案流程示意">
            <div className="card-topline"><span>assistant-flow</span><span className="online"><i /> 持續運作</span></div>
            <div className="flow-stack">
              <div className="flow-node flow-entry"><span className="node-icon">↗</span><span><strong>Discord / LINE</strong><small>自然語言輸入</small></span></div>
              <div className="flow-line"><span>需求被拆解</span></div>
              <div className="flow-node flow-agent"><span className="node-icon">✦</span><span><strong>AI 協作層</strong><small>判斷需求・呼叫服務</small></span></div>
              <div className="flow-line"><span>依需求分流</span></div>
              <div className="service-grid"><span>Calendar</span><span>Gmail</span><span>Obsidian</span><span>提醒</span></div>
              <div className="sync-note"><span>Obsidian 知識庫</span><b>↔</b><span>GitHub 同步</span></div>
            </div>
          </div>
        </section>

        <section className="intro-section section-rule" id="system">
          <div className="section-label">01 / 為什麼做</div>
          <div className="intro-content"><h2>我不是缺少工具，<br /><em>是工具太分散。</em></h2><div className="intro-text"><p>行事曆、郵件、日記、消費紀錄與知識庫各自有自己的 App。當 AI agent 需要長時間運作，又遇到電腦休眠、服務衝突與過重工具，問題就從「想自動化」變成「要維護更多東西」。</p><p className="pull-quote">所以我把問題改寫成：<strong>什麼值得整合，什麼應該拿掉？</strong></p></div></div>
        </section>

        <section className="experience-section section-rule">
          <div className="section-label">02 / 使用體驗前後</div>
          <div className="experience-compare">
            <article className="experience-before">
              <div className="experience-label"><span>BEFORE</span><strong>入口分散</strong></div>
              <div className="scattered-apps" aria-label="原本需要切換多個應用程式的流程示意"><span>Calendar</span><span>Gmail</span><span>日記</span><span>記帳</span><span>知識庫</span><span>提醒</span></div>
              <p>每一件小事都要先想起該開哪個 App。</p>
            </article>
            <div className="compare-pivot"><span>產品判斷</span><b>→</b><small>整合入口，<br />不取代最終確認</small></div>
            <article className="experience-after">
              <div className="experience-label"><span>AFTER</span><strong>一個對話入口</strong></div>
              <div className="assistant-screen" aria-label="對話操作示意"><small>Discord / LINE</small><p>「記下這筆消費，明天提醒我確認。」</p><div><i /> 已分流到正確服務</div></div>
              <p>操作變簡單，但結果仍回到原始服務驗證。</p>
            </article>
          </div>
        </section>

        <section className="system-section section-rule">
          <div className="section-label">03 / 系統骨架</div>
          <div className="system-content"><div><h2>一個入口，<br /><em>多個真正會用到的服務。</em></h2><p className="muted-copy">我以個人 Linux／Docker 伺服器承載服務，讓 agent 不必依賴日常電腦持續開機。功能由實際需求決定，不由工具清單決定。</p></div><div className="system-map" aria-label="系統流程示意"><div className="map-entry"><span>INPUT</span><strong>Discord / LINE</strong><small>自然語言需求</small></div><b className="map-arrow">↓</b><div className="map-agent"><span>ORCHESTRATION</span><strong>AI 協作層</strong><small>拆解意圖 · 呼叫服務</small></div><b className="map-arrow">↓</b><div className="map-services">{integrations.map((item, index) => <span key={item}><i>{String(index + 1).padStart(2, "0")}</i>{item}</span>)}</div><div className="map-loop"><b>↺</b><span>回到原始服務確認結果</span></div></div></div>
        </section>

        <section className="proof-section section-rule" id="evidence">
          <div className="section-heading">
            <div><p className="section-label">04 / 真實驗證紀錄</p><h2>不是遇到失敗就停下，<br /><em>而是修到能被驗證。</em></h2></div>
            <p>2026.08.17｜獨立展示資料｜未讀取私人內容</p>
          </div>

          <div className="proof-stage">
            <div className="proof-request">
              <div className="proof-meta"><span>CONTROLLED TEST</span><span>PORTFOLIO-ASSISTANT-DEMO</span></div>
              <p>「建立一筆作品集測試心得，並安排明天下午的作品集檢查提醒。」</p>
              <div className="proof-guard"><span>PRIVACY GUARD</span><strong>只允許使用獨立 lab 展示資料</strong></div>
            </div>

            <div className="proof-results">
              <article className="proof-pass"><span>01 / NOTE</span><strong>Markdown 心得已建立</strong><p>實際檢查檔案，日期、心得與狀態欄位皆存在。</p><b>PASS</b></article>
              <article className="proof-pass"><span>02 / CALENDAR</span><strong>事件建立並讀回成功</strong><p>首次因 OAuth scope 不足而受阻；經使用者核准最小權限後，重新寫入並核對標題與時間。</p><b>PASS</b></article>
            </div>

            <div className="proof-artifact">
              <div className="artifact-head"><span>ACTUAL ARTIFACT / 作品集測試.md</span><b>VERIFIED ✓</b></div>
              <div className="artifact-body"><span># 作品集展示測試</span><p>日期：2026-08-17</p><p>心得：今天完成 AI 產品作品集的證據規劃。</p><p>狀態：待明日檢查</p></div>
              <div className="artifact-links">
                <a href="/evidence/assistant-demo-note.md" target="_blank" rel="noreferrer">查看公開測試筆記 ↗</a>
                <a href="/evidence/assistant-demo-verification.json" target="_blank" rel="noreferrer">查看結構化驗證紀錄 ↗</a>
              </div>
            </div>
          </div>

          <div className="proof-takeaway"><span>WHAT THIS PROVES</span><p>我不只確認成功輸出，也檢查失敗原因與權限邊界。Calendar 首次失敗後，我先確認 token 只有 Gmail 唯讀權限，再由使用者核准 Gmail＋Calendar 的最小授權，最後建立事件並讀回驗證；AI 沒有擅自擴大憑證權限。</p></div>
        </section>

        <section className="cases-section section-rule">
          <div className="section-heading"><div className="section-label">05 / 真實使用案例</div><p>每一個流程都有輸入、輸出與確認方式。</p></div>
          <div className="scenario-list">{cases.map(item => <article className="scenario-row" key={item.number}><div className="scenario-title"><span>{item.number}</span><h3>{item.title}</h3></div><div className="scenario-path"><div><span>INPUT</span><p>{item.input}</p></div><b>→</b><div><span>OUTPUT</span><p>{item.output}</p></div><b>→</b><div className="scenario-verify"><span>VERIFIED</span><p>{item.check}</p></div></div></article>)}</div>
        </section>

        <section className="role-section section-rule">
          <div className="section-label">06 / 我的角色</div>
          <div className="role-layout"><div className="role-statement"><p className="small-cap">AI 協作，不等於把決定交出去。</p><h2>我負責把問題<br /><em>變成可驗收的流程。</em></h2><p>程式與設定由 AI 協助產生；我負責定義問題、拆解需求、評估工具、核准修改，並用真實情境確認結果。</p></div><div className="role-list"><div><span>01</span><strong>定義需求</strong><p>找出流程卡點與真正要解決的問題。</p></div><div><span>02</span><strong>整合服務</strong><p>決定入口、資料目的地與服務責任。</p></div><div><span>03</span><strong>測試驗收</strong><p>檢查內容、日期、檔案與同步。</p></div><div><span>04</span><strong>取捨調整</strong><p>停用增加維護負擔的方案。</p></div></div></div>
        </section>

        <section className="principles-section section-rule">
          <div className="section-heading">
            <div><p className="section-label">07 / 產品取捨</p><h2>功能不是越多越好，<br /><em>留下來才算有價值。</em></h2></div>
            <p>以實際使用頻率、維護成本與資料風險作為判斷。</p>
          </div>
          <div className="decision-grid">
            <article><span>保留</span><h3>對話入口與知識庫同步</h3><p>Discord／LINE、Calendar、Gmail與Obsidian持續被使用，能直接減少切換App的步驟。</p></article>
            <article><span>調整</span><h3>媒體訊息處理</h3><p>發現LINE語音與檔案無法正確進入流程後，重現問題、驗證修正並回饋上游專案。</p></article>
            <article><span>停用</span><h3>過重的工具組合</h3><p>Letta、n8n等工具並非不好，而是當時需求不足以抵銷學習與維護成本，因此不繼續堆疊。</p></article>
          </div>
        </section>

        <section className="closing-section">
          <p className="kicker">PROJECT TAKEAWAY</p><h2>好的 AI 應用，<br /><em>應該讓人少操心一點。</em></h2><p>這個專案讓我確認，自己想做的不只是工具整合，而是從問題出發，判斷什麼值得導入、如何驗收，以及什麼時候該停下來重新想。</p>
          <a className="button button-light" href="/projects/hermes-line-media/">查看 Hermes 產品改善案例 <span>↗</span></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
