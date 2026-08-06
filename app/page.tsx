import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "馬彥宸｜AI 協作生活助理",
  description:
    "以 Discord／LINE 為入口，整合日常工具的 AI 協作生活助理專案。",
};

const integrations = [
  "Google Calendar",
  "Gmail",
  "Obsidian",
  "GitHub Sync",
  "提醒",
  "法律判決 MCP",
];

const cases = [
  {
    number: "01",
    title: "日記與消費，不再散落",
    input: "在 Discord／LINE 輸入一段心得、日記或消費。",
    output: "內容寫入 Obsidian 個人知識庫，再由 GitHub 持續同步。",
    check: "檢查檔案、內容、日期與同步狀態。",
  },
  {
    number: "02",
    title: "用對話處理行事曆與郵件",
    input: "直接告訴 AI 要建立行程、查詢行程或處理 Gmail。",
    output: "AI 呼叫對應服務，完成行事曆或郵件操作。",
    check: "回到 Google Calendar／Gmail 確認實際結果。",
  },
  {
    number: "03",
    title: "出問題時，先找原因再動手",
    input: "服務報錯、更新衝突，或原本因電腦休眠而中斷。",
    output: "讓 AI 協助排查，確認原因後再執行修復或調整。",
    check: "重新操作功能，確認服務恢復且流程可用。",
  },
];

const principles = [
  {
    label: "需求",
    text: "先確認流程真正卡在哪裡，再決定是否需要 AI。",
  },
  {
    label: "風險",
    text: "需要人工判斷或涉及敏感資料的環節，保留人工確認。",
  },
  {
    label: "取捨",
    text: "工具不符合需求、維護成本過高，就調整或停用。",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="回到頁首">
          <span className="brand-mark">M</span>
          <span>馬彥宸 / PROJECT 01</span>
        </a>
        <nav className="nav" aria-label="主要導覽">
          <a href="#system">系統</a>
          <a href="#cases">案例</a>
          <a href="#role">我的角色</a>
          <a className="nav-contact" href="mailto:andrew920322@gmail.com">
            聯絡我 ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="kicker">AI 協作生活助理 / 2026—持續運作</p>
            <h1>
              <span className="headline-line headline-main">把零散的日常，</span>
              <span className="headline-line headline-accent">收回同一個入口。</span>
            </h1>
            <p className="hero-lede">
              我用 Discord／LINE 作為對話入口，整合行事曆、Gmail、日記、記帳與個人知識庫。
              這個專案的重點不是把工具堆在一起，而是確認它們真的讓生活變簡單。
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#system">
                看專案怎麼運作 <span>↓</span>
              </a>
              <a className="text-link" href="mailto:andrew920322@gmail.com">
                andrew920322@gmail.com <span>↗</span>
              </a>
            </div>
            <div className="hero-facts" aria-label="專案摘要">
              <div><strong>2</strong><span>對話入口</span></div>
              <div><strong>6+</strong><span>整合服務</span></div>
              <div><strong>05.2026</strong><span>開始運作</span></div>
            </div>
          </div>

          <div className="hero-card" aria-label="專案狀態與系統流程示意">
            <div className="card-topline">
              <span>assistant-flow</span>
              <span className="online"><i /> 持續運作</span>
            </div>
            <div className="flow-stack">
              <div className="flow-node flow-entry">
                <span className="node-icon">↗</span>
                <span>
                  <strong>Discord / LINE</strong>
                  <small>自然語言輸入</small>
                </span>
              </div>
              <div className="flow-line"><span>需求被拆解</span></div>
              <div className="flow-node flow-agent">
                <span className="node-icon">✦</span>
                <span>
                  <strong>AI 協作層</strong>
                  <small>判斷需求・呼叫服務</small>
                </span>
              </div>
              <div className="flow-line"><span>依需求分流</span></div>
              <div className="service-grid">
                <span>Calendar</span>
                <span>Gmail</span>
                <span>Obsidian</span>
                <span>提醒</span>
              </div>
              <div className="sync-note">
                <span>Obsidian 個人知識庫</span>
                <b>↔</b>
                <span>GitHub 同步</span>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-section section-rule" id="system">
          <div className="section-label">01 / 為什麼做</div>
          <div className="intro-content">
            <h2>我不是缺少工具，<br /><em>是工具太分散。</em></h2>
            <div className="intro-text">
              <p>
                行事曆、郵件、日記、消費紀錄與知識庫各自有自己的 App。當我想讓 AI agent 長時間運作，又遇到電腦休眠、服務衝突與過重工具，問題就從「想自動化」變成「要維護更多東西」。
              </p>
              <p className="pull-quote">所以我把問題改寫成：<strong>什麼值得整合，什麼應該拿掉？</strong></p>
            </div>
          </div>
        </section>

        <section className="system-section section-rule">
          <div className="section-label">02 / 系統骨架</div>
          <div className="system-content">
            <div>
              <h2>一個入口，<br /><em>多個真正會用到的服務。</em></h2>
              <p className="muted-copy">
                我以個人 Linux／Docker 伺服器承載服務，讓 agent 不必依賴日常使用的電腦持續開機。功能由實際需求決定，不由工具清單決定。
              </p>
            </div>
            <div className="integration-list" aria-label="整合服務">
              {integrations.map((item, index) => (
                <div className="integration-item" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                  <b>↗</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cases-section section-rule" id="cases">
          <div className="section-heading">
            <div className="section-label">03 / 真實使用案例</div>
            <p>每一個流程都有輸入、輸出與確認方式。</p>
          </div>
          <div className="case-grid">
            {cases.map((item) => (
              <article className="case-card" key={item.number}>
                <div className="case-number">{item.number}</div>
                <h3>{item.title}</h3>
                <div className="case-detail">
                  <span>輸入</span>
                  <p>{item.input}</p>
                </div>
                <div className="case-detail">
                  <span>輸出</span>
                  <p>{item.output}</p>
                </div>
                <div className="case-check">
                  <span>✓ 驗證</span>
                  <p>{item.check}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="role-section section-rule" id="role">
          <div className="section-label">04 / 我的角色</div>
          <div className="role-layout">
            <div className="role-statement">
              <p className="small-cap">AI 協作，不等於把決定交出去。</p>
              <h2>我負責把問題<br /><em>變成可驗收的流程。</em></h2>
              <p>
                程式與設定由 AI 協助產生；我負責定義問題、拆解需求、評估工具、核准修改，並用真實情境確認結果。
              </p>
            </div>
            <div className="role-list">
              <div><span>01</span><strong>定義需求</strong><p>先找出流程卡點與真正要解決的問題。</p></div>
              <div><span>02</span><strong>整合服務</strong><p>決定入口、資料目的地與每個服務的責任。</p></div>
              <div><span>03</span><strong>測試驗收</strong><p>用真實訊息檢查內容、日期、檔案與同步。</p></div>
              <div><span>04</span><strong>取捨調整</strong><p>保留有效功能，停用增加維護負擔的方案。</p></div>
            </div>
          </div>
        </section>

        <section className="principles-section section-rule">
          <div className="section-heading">
            <div className="section-label">05 / 導入判斷</div>
            <p>我不為了使用 AI 而使用 AI。</p>
          </div>
          <div className="principle-grid">
            {principles.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-section">
          <p className="kicker">PROJECT TAKEAWAY</p>
          <h2>
            好的 AI 應用，<br />
            <em>應該讓人少操心一點。</em>
          </h2>
          <p>
            這個專案讓我確認，自己想做的不只是工具整合，而是從實際問題出發，協助團隊判斷什麼值得導入、如何驗收，以及什麼時候該停下來重新想。
          </p>
          <a className="button button-light" href="mailto:andrew920322@gmail.com">
            和我聊聊這個專案 <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>馬彥宸 / 產業研究 × AI 應用企劃</span>
        <span>新竹・桃園・雙北皆可</span>
        <a href="mailto:andrew920322@gmail.com">andrew920322@gmail.com</a>
      </footer>
    </div>
  );
}
