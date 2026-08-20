import type { Metadata } from "next";
import Link from "next/link";
import { CaseSummary, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "AI 協作生活助理｜馬彥宸作品集",
  description: "以 Discord／LINE 為入口，整合日常工具的 AI 協作生活助理專案。",
  openGraph: {
    title: "馬彥宸｜AI 協作生活助理",
    description: "重點不是把工具堆在一起，而是確認它們真的讓生活變簡單。含去識別化的驗收紀錄與權限邊界處理。",
    url: "/projects/ai-assistant/",
    type: "article",
    images: [{ url: "/og/ai-assistant.png", width: 1200, height: 630, alt: "馬彥宸｜AI 協作生活助理" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "馬彥宸｜AI 協作生活助理",
    description: "把零散的日常，收回同一個入口。",
    images: ["/og/ai-assistant.png"],
  },
};


const cases = [
  { title: "日記與消費，不再散落", input: "在 Discord／LINE 輸入心得、日記或消費。", output: "寫入 Obsidian，再由 GitHub 持續同步。", check: "檢查檔案、內容、日期與同步狀態。" },
  { title: "用對話處理行事曆與郵件", input: "要求建立行程、查詢行程或處理 Gmail。", output: "AI 呼叫對應服務完成操作。", check: "回到 Calendar／Gmail 確認實際結果。" },
  { title: "出問題時，先找原因再動手", input: "服務報錯、更新衝突或因電腦休眠中斷。", output: "AI 協助排查，確認原因後修復或調整。", check: "重新操作功能，確認服務恢復。" },
];

export default function AiAssistantProject() {
  return (
    <>
      <SiteHeader project="AI 協作生活助理" />
      <main className="shell">
        <Link className="backlink" href="/">← 回作品集</Link>
        <h1>把零散的日常，收回同一個入口。</h1>
        <p className="lede">我用 Discord／LINE 作為對話入口，整合行事曆、Gmail、日記、記帳與個人知識庫。重點不是把工具堆在一起，而是確認它們真的讓生活變簡單。</p>

        <CaseSummary
          problem="行事曆、信箱、日記、記帳與知識庫各自一個 App，每件小事都要先想起該開哪個。"
          decision="問題不是缺工具，是工具太分散。所以要問的不是「還能整合什麼」，而是「什麼該拿掉」。"
          check="用真實訊息實測，逐項核對檔案有沒有寫入、內容與日期對不對、同步狀態正不正常。"
          result="持續運作中。過程中辨識出 OAuth 權限不足並改以最小權限重新授權；效益抵不過維護成本的功能一律停用。"
          evidence="自我驗收 · 持續運作中"
          level="self"
        />

        <div className="figures">
          <div className="figure">
            <span className="figure-n">2</span>
            <span className="figure-t">對話入口</span>
            <span className="figure-s">Discord / LINE，自然語言輸入</span>
          </div>
          <div className="figure">
            <span className="figure-n">6+</span>
            <span className="figure-t">整合服務</span>
            <span className="figure-s">依需求分流</span>
          </div>
          <div className="figure">
            <span className="figure-n">05.2026</span>
            <span className="figure-t">開始運作</span>
            <span className="figure-s">持續運作</span>
          </div>
        </div>

        <section className="band" id="system">
          <div className="band-head"><h2>我不是缺少工具，是工具太分散。</h2></div>
          <p>行事曆、郵件、日記、消費紀錄與知識庫各自有自己的 App。當 AI agent 需要長時間運作，又遇到電腦休眠、服務衝突與過重工具，問題就從「想自動化」變成「要維護更多東西」。</p>
          <p>所以我把問題改寫成：<strong>什麼值得整合，什麼應該拿掉？</strong></p>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>改變的是入口，不是最終確認</h2>
            <span className="rowlabel">這是產品判斷，不是技術架構</span>
          </div>

          <figure className="flow">
            <svg viewBox="0 0 720 250" role="img" aria-label="從六個分散入口，收斂成一個對話入口，但結果仍回原始服務確認">
              <title>入口收斂前後對照</title>

              <text x="0" y="16" className="flow-s">之前</text>
              {["行事曆", "信箱", "日記", "記帳", "知識庫", "提醒"].map((s, i) => (
                <g key={s}>
                  <rect className="flow-box" x={i * 120} y="26" width="108" height="38" rx="4" />
                  <text x={i * 120 + 54} y="50" className="flow-t" textAnchor="middle">{s}</text>
                </g>
              ))}
              <text x="0" y="84" className="flow-s">每一件小事，都要先想起該開哪一個。</text>

              <path className="flow-arrow" d="M360 96 L360 122" markerEnd="url(#ar)" />
              <defs>
                <marker id="ar" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                  <path d="M0 0 L7 3.5 L0 7 z" fill="var(--ink-3)" />
                </marker>
              </defs>

              <rect className="flow-box-on" x="196" y="130" width="328" height="46" rx="4" />
              <text x="360" y="150" className="flow-t" textAnchor="middle">一個對話入口</text>
              <text x="360" y="167" className="flow-s" textAnchor="middle">
                「記下這筆消費，明天提醒我確認。」
              </text>

              <path className="flow-arrow" d="M360 182 L360 206" markerEnd="url(#ar)" />

              <rect className="flow-box" x="140" y="210" width="440" height="36" rx="4" />
              <text x="360" y="233" className="flow-t" textAnchor="middle">
                結果回到原始服務確認
              </text>
            </svg>
            <figcaption>
              操作變簡單了，但<strong>驗證沒有被簡化掉</strong>——寫進去對不對，還是回 Calendar 和筆記本身去看。
              整合入口不等於接管判斷，這是刻意留的界線。
            </figcaption>
          </figure>
        </section>

        <section className="band" id="evidence">
          <div className="band-head">
            <h2>不是遇到失敗就停下，而是修到能被驗證。</h2>
            <span className="rowlabel">2026.08.17｜獨立展示資料｜未讀取私人內容</span>
          </div>
          <p>「建立一筆作品集測試心得，並安排明天下午的作品集檢查提醒。」</p>
          <p><strong>只允許使用獨立 lab 展示資料</strong></p>
          <h3>Markdown 心得已建立</h3>
          <p>實際檢查檔案，日期、心得與狀態欄位皆存在。</p>
          <h3>事件建立並讀回成功</h3>
          <p>首次因 OAuth scope 不足而受阻；經使用者核准最小權限後，重新寫入並核對標題與時間。</p>
          <h3>作品集測試.md</h3>
          <p># 作品集展示測試</p>
          <p>日期：2026-08-17</p>
          <p>心得：今天完成 AI 產品作品集的證據規劃。</p>
          <p>狀態：待明日檢查</p>
          <a className="cta cta-ghost" href="/evidence/assistant-demo-note.md" target="_blank" rel="noreferrer">查看公開測試筆記 ↗</a>
          <a className="cta cta-ghost" href="/evidence/assistant-demo-verification.json" target="_blank" rel="noreferrer">查看結構化驗證紀錄 ↗</a>
          <p>我不只確認成功輸出，也檢查失敗原因與權限邊界。Calendar 首次失敗後，我先確認 token 只有 Gmail 唯讀權限，再由使用者核准 Gmail＋Calendar 的最小授權，最後建立事件並讀回驗證；AI 沒有擅自擴大憑證權限。</p>
        </section>

        <section className="band">
          <div className="band-head"><h2>真實使用案例</h2><p>每一個流程都有輸入、輸出與確認方式。</p></div>
          <div className="ledger">
            {cases.map((item) => (
              <article className="entry" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.input}</p>
                <p>{item.output}</p>
                <p>{item.check}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band">
          <div className="band-head"><h2>我負責把問題變成可驗收的流程。</h2></div>
          <p>AI 協作，不等於把決定交出去。</p>
          <p>程式與設定由 AI 協助產生；我負責定義問題、拆解需求、評估工具、核准修改，並用真實情境確認結果。</p>
          <h3>定義需求</h3><p>找出流程卡點與真正要解決的問題。</p>
          <h3>整合服務</h3><p>決定入口、資料目的地與服務責任。</p>
          <h3>測試驗收</h3><p>檢查內容、日期、檔案與同步。</p>
          <h3>取捨調整</h3><p>停用增加維護負擔的方案。</p>
        </section>

        <section className="band">
          <div className="band-head"><h2>功能不是越多越好，留下來才算有價值。</h2><p>以實際使用頻率、維護成本與資料風險作為判斷。</p></div>
          <h3>保留｜對話入口與知識庫同步</h3>
          <p>Discord／LINE、Calendar、Gmail與Obsidian持續被使用，能直接減少切換App的步驟。</p>
          <h3>調整｜媒體訊息處理</h3>
          <p>發現LINE語音與檔案無法正確進入流程後，重現問題、驗證修正並回饋上游專案。</p>
          <h3>停用｜過重的工具組合</h3>
          <p>Letta、n8n等工具並非不好，而是當時需求不足以抵銷學習與維護成本，因此不繼續堆疊。</p>
        </section>

        <section className="band">
          <h2>好的 AI 應用，應該讓人少操心一點。</h2>
          <p>這個專案讓我確認，自己想做的不只是工具整合，而是從問題出發，判斷什麼值得導入、如何驗收，以及什麼時候該停下來重新想。</p>
          <Link className="cta" href="/projects/hermes-line-media/">查看 Hermes 產品改善案例 →</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
