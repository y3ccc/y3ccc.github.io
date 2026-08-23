import type { Metadata } from "next";
import Link from "next/link";
import { CaseSummary, SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "AI 協作生活助理｜馬彥宸作品集",
  description: "以 Discord／LINE 為入口，整合日常工具的 AI 協作生活助理專案。",
  openGraph: {
    title: "馬彥宸｜AI 協作生活助理",
    description: "用 Discord／LINE 整合日常工具，並記錄去識別化驗收與 OAuth 權限處理。",
    url: "/projects/ai-assistant/",
    type: "article",
    images: [{ url: "/og/ai-assistant.png", width: 1200, height: 630, alt: "馬彥宸｜AI 協作生活助理" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "馬彥宸｜AI 協作生活助理",
    description: "用 Discord／LINE 處理行事曆、郵件、日記與記帳。",
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
        <h1>用一個對話入口，處理分散的日常工具。</h1>
        <p className="lede">我用 Discord／LINE 作為對話入口，整合行事曆、Gmail、日記、記帳與個人知識庫。每項功能都以實際使用頻率、維護成本與驗收結果決定是否保留。</p>

        <CaseSummary
          problem="行事曆、信箱、日記、記帳與知識庫各自一個 App，每件小事都要先想起該開哪個。"
          decision="先整合常用流程，再依使用頻率、維護成本與資料風險刪減功能。"
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
          <div className="band-head"><h2>原本的工具分散在不同入口</h2></div>
          <p>行事曆、郵件、日記、消費紀錄與知識庫各自有自己的 App。當 AI agent 需要長時間運作，又遇到電腦休眠、服務衝突與過重工具，問題就從「想自動化」變成「要維護更多東西」。</p>
          <p>所以我把問題改寫成：<strong>什麼值得整合，什麼應該拿掉？</strong></p>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>改變的是入口，不是最終確認</h2>
            <span className="rowlabel">這是產品判斷，不是技術架構</span>
          </div>

          <figure className="flow">
            <div className="flow-scroll">
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

              <rect className="flow-box" x="110" y="206" width="500" height="44" rx="4" />
              <text x="360" y="226" className="flow-t" textAnchor="middle">
                不信它說「好了」，回原本的 App 自己看
              </text>
              <text x="360" y="243" className="flow-s" textAnchor="middle">
                日期對不對、內容有沒有寫進去、同步狀態正不正常
              </text>
            </svg>
            </div>
            <figcaption>
              操作變簡單了，但<strong>驗證沒有被簡化掉</strong>。
              助理回報「已完成」後，我仍會回到 Calendar 和筆記核對日期與內容。
              整合入口不等於接管判斷，這條界線是刻意留的。
            </figcaption>
          </figure>
        </section>

        <section className="band" id="evidence">
          <div className="band-head">
            <h2>驗收紀錄包含成功，也保留失敗</h2>
            <span className="rowlabel">2026.08.17｜獨立展示資料｜未讀取私人內容</span>
          </div>
          <p>
            這是一次完整的驗收紀錄：一句話丟進去，然後<strong>逐項回原本的服務核對</strong>。
            其中一項第一次測試失敗，後續排查與重測也保留在紀錄中。
          </p>

          <div className="vlog">
            <div className="vlog-head">
              <strong>驗收紀錄</strong>
              <span className="tag tag-self">獨立 lab 展示資料 · 未讀取私人內容</span>
              <span className="rowlabel">2026-08-17</span>
            </div>

            <div className="vlog-in">
              <span className="rowlabel">我輸入的一句話</span>
              <p style={{ margin: "6px 0 0" }}>
                <q>建立一筆作品集測試心得，並安排明天下午的作品集檢查提醒。</q>
              </p>
            </div>

            <div className="vlog-step">
              <span className="ok">✓</span>
              <span className="vlog-k">筆記寫入</span>
              <div className="vlog-v">打開檔案本身核對：日期、心得、狀態三個欄位都在，內容與我輸入的一致。</div>
            </div>

            <div className="vlog-step">
              <span className="ok">✓</span>
              <span className="vlog-k">行事曆事件</span>
              <div className="vlog-v">
                <strong>第一次失敗。</strong>查出來是 OAuth 權限不足，當時的 token 只有 Gmail 唯讀。
                我回頭核准 Gmail ＋ Calendar 所需的最小授權，
                再重新寫入、並讀回核對標題與時間。
              </div>
            </div>

            <div className="vlog-art">
              <span className="rowlabel">實際產出的檔案</span>
              <pre>{`# 作品集展示測試

日期：2026-08-17
心得：今天完成 AI 產品作品集的證據規劃。
狀態：待明日檢查`}</pre>
              <div style={{ marginTop: 12 }}>
                <a className="cta cta-ghost" href="/evidence/assistant-demo-note.md" target="_blank" rel="noreferrer">
                  查看這個檔案 ↗
                </a>
                <a className="cta cta-ghost" href="/evidence/assistant-demo-verification.json" target="_blank" rel="noreferrer">
                  查看結構化驗證紀錄 ↗
                </a>
              </div>
            </div>
          </div>

          <p style={{ marginTop: 18 }}>
            這份紀錄保留了<strong>失敗發生時的處理過程</strong>：查原因、界定權限範圍、由人核准，再驗一次。
            AI 沒有擅自擴大憑證權限，這條界線是我守的。
          </p>
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
          <p>
            程式與設定由 AI 協助產生；需求、權限、驗收與功能取捨由我處理，頁面上也附了對應紀錄：
          </p>
          <div className="ledger">
            {[
              ["調整問題範圍", "原本想整理哪些工具可以自動化，後來改成先找出常用流程，再刪掉維護成本過高的功能。",
               "#system", "看那一段"],
              ["決定資料寫去哪", "入口收斂成一個，但最終確認留在原本的服務，不由助理接管。",
               "#system", "看流程圖"],
              ["用真實情境驗收", "行事曆那次第一步就失敗；我查出是權限不足，核准最小授權後重驗一次。",
               "#evidence", "看驗收紀錄"],
              ["停止低效益功能", "Letta、n8n 的維護成本高於當時的使用效益，因此停止使用。",
               "#tradeoff", "看取捨"],
            ].map(([t, s, href, cta]) => (
              <a className="entry" href={href} key={t}>
                <div className="entry-top">
                  <span className="entry-title">{t}</span>
                  <span className="rowlabel">{cta} ↓</span>
                </div>
                <p className="entry-q">{s}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="band" id="tradeoff">
          <div className="band-head"><h2>用實際使用情況決定功能去留</h2><p>判斷依據包括使用頻率、維護成本與資料風險。</p></div>
          <div className="cols">
            <div className="col col-keep"><strong>保留</strong>
              <p>對話入口與知識庫同步。Discord／LINE、Calendar、Gmail 與 Obsidian 到現在都還在用，
                 因為它們直接少掉切換 App 的步驟。</p></div>
            <div className="col col-flag"><strong>調整</strong>
              <p>媒體訊息處理。發現 LINE 語音與檔案沒進到流程後，重現問題、驗證修正，
                 並把結果回饋給上游專案。</p></div>
            <div className="col col-dead"><strong>停用</strong>
              <p>過重的工具組合。Letta、n8n 並非不好，是當時的需求不足以抵銷學習與維護成本，
                 所以不繼續堆。</p></div>
          </div>
        </section>

        <section className="band">
          <h2>好的 AI 應用，應該讓人少操心一點。</h2>
          <p>這個專案讓我練習從需求出發，判斷哪些功能值得導入、如何驗收，以及何時應停止維護。</p>
          <Link className="cta" href="/projects/hermes-line-media/">查看 Hermes 產品改善案例 →</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
