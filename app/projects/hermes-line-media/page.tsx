import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

const issueUrl = "https://github.com/NousResearch/hermes-agent/issues/57882";
const pullRequestUrl = "https://github.com/NousResearch/hermes-agent/pull/57884";

export const metadata: Metadata = {
  title: "Hermes LINE 媒體改善｜馬彥宸作品集",
  description: "從LINE語音與檔案被略過，到問題重現、回歸測試與公開Issue／PR的產品改善案例。",
};

const process = [
  { number: "01", title: "確認不是操作問題", text: "圖片可正常處理，但語音、影片與一般檔案沒有進入後續流程，差異可穩定重現。" },
  { number: "02", title: "縮小影響範圍", text: "把輸入類型拆開測試，確認問題集中在非圖片媒體，而不是整個LINE入口失效。" },
  { number: "03", title: "AI協作提出修正", text: "由AI協助閱讀程式與提出最小修改；我確認修改範圍，避免不必要地改動其他流程。" },
  { number: "04", title: "用真實情境驗收", text: "重新測試語音進入STT流程，並確認原本可用的圖片功能沒有被破壞。" },
];

export default function HermesLineMediaProject() {
  return (
    <div className="site-shell hermes-project">
      <SiteHeader project="PROJECT 02" />
      <main>
        <section className="hermes-hero">
          <div className="hermes-hero-copy">
            <Link className="back-link" href="/">← 返回作品集</Link>
            <p className="kicker">PRODUCT IMPROVEMENT / PUBLIC EVIDENCE</p>
            <h1>圖片能用，<br /><span>為什麼語音卻消失？</span></h1>
            <p>
              我在實際使用Hermes的LINE整合時，發現圖片可以正常處理，但語音、影片與一般檔案會被略過。
              這個案例不是展示我獨立寫了多少程式，而是展示如何把模糊抱怨整理成可重現、可驗證、可交付的產品問題。
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href={issueUrl} target="_blank" rel="noreferrer">查看公開 Issue #57882 <span>↗</span></a>
              <a className="text-link" href={pullRequestUrl} target="_blank" rel="noreferrer">查看 PR #57884 <span>↗</span></a>
            </div>
          </div>

          <div className="bug-board" aria-label="問題前後流程示意">
            <div className="board-head"><span>LINE MEDIA ROUTING</span><span>REPRODUCED</span></div>
            <div className="bug-flow-row"><span>IMAGE</span><strong>圖片快取</strong><b className="status-pass">PASS</b></div>
            <div className="bug-flow-row"><span>VOICE</span><strong>錯誤分流／被略過</strong><b className="status-fail">DROP</b></div>
            <div className="bug-flow-row"><span>VIDEO / FILE</span><strong>錯誤分流／被略過</strong><b className="status-fail">DROP</b></div>
            <div className="bug-fix-note"><small>PROPOSED FIX</small><p>依媒體類型分流到正確的處理路徑，再用語音與圖片做回歸驗證。</p></div>
          </div>
        </section>

        <section className="research-question section-rule">
          <div className="section-label">01 / 使用者問題</div>
          <div className="research-layout">
            <h2>「不能用」太模糊，<br /><em>先找出哪一種輸入失敗。</em></h2>
            <div>
              <p>真正影響使用體驗的不是錯誤訊息本身，而是使用者傳入語音後沒有得到預期處理，也無法知道內容去了哪裡。</p>
              <ul>
                <li>預期：語音、影片與檔案應被保存並送往對應處理流程。</li>
                <li>實際：圖片正常，其他媒體沒有正確被記錄或處理。</li>
                <li>驗收：語音可進入STT，圖片既有流程仍正常。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="validation-section section-rule">
          <div className="section-heading">
            <div><p className="section-label">02 / 處理過程</p><h2>從差異開始，<br /><em>逐步縮小問題範圍。</em></h2></div>
            <p>AI協助技術閱讀與程式修改；我負責問題定義、修改核准與實際驗收。</p>
          </div>
          <div className="validation-steps hermes-steps">
            {process.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
        </section>

        <section className="ownership-section section-rule">
          <div className="section-heading">
            <div><p className="section-label">03 / 責任邊界</p><h2>誠實標示AI協作，<br /><em>也清楚說明我負責什麼。</em></h2></div>
            <p>不把AI產生的程式碼包裝成獨立工程開發。</p>
          </div>
          <div className="ownership-grid">
            <article><span>MY WORK</span><h3>問題與驗證</h3><p>發現異常、重現差異、定義預期結果、確認修改範圍、執行語音與圖片回歸測試，並整理成公開回饋。</p></article>
            <article><span>AI ASSISTANCE</span><h3>技術閱讀與修改</h3><p>協助閱讀LINE adapter程式、定位媒體分流問題、產生修改內容與測試建議；最終是否採用由我依實測結果判斷。</p></article>
          </div>
        </section>

        <section className="evidence-section section-rule">
          <div className="section-label">04 / 公開證據與結果</div>
          <div className="evidence-layout">
            <div>
              <h2>修正沒有被合併，<br /><em>問題仍然是有效的。</em></h2>
              <p>
                Issue與PR皆已關閉。PR不是因為問題不存在而被否定，而是維護者已透過範圍更廣的既有修正處理同一類問題。
                因此這個案例的成果不是「我的程式被採用」，而是問題被清楚描述、公開查核，並完成實際修正驗證。
              </p>
            </div>
            <div className="evidence-links">
              <a href={issueUrl} target="_blank" rel="noreferrer"><span>ISSUE #57882</span><strong>LINE adapter drops inbound voice/video/file messages</strong><b>↗</b></a>
              <a href={pullRequestUrl} target="_blank" rel="noreferrer"><span>PR #57884</span><strong>Route audio/video/file payloads to the proper cache path</strong><b>↗</b></a>
              <div><span>VERIFIED</span><strong>語音可進入STT；圖片功能未受影響</strong><b>✓</b></div>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <p className="kicker">PROJECT TAKEAWAY</p>
          <h2>產品問題的價值，<br /><em>來自可重現與可驗收。</em></h2>
          <p>我能帶來的不是「問AI拿一段程式」，而是把使用者遇到的問題縮小範圍、定義成功條件、確認修正沒有製造新問題，再把證據交給產品與工程團隊。</p>
          <a className="button button-light" href="/projects/ai-assistant/">回到AI生活助理案例 <span>↗</span></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
