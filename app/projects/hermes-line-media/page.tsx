import type { Metadata } from "next";
import Link from "next/link";
import { CaseSummary, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { Scroll, Steps } from "../../components/Figures";

const issueUrl = "https://github.com/NousResearch/hermes-agent/issues/57882";
const pullRequestUrl = "https://github.com/NousResearch/hermes-agent/pull/57884";

export const metadata: Metadata = {
  title: "Hermes LINE 媒體改善｜馬彥宸作品集",
  description: "從LINE語音與檔案被略過，到問題重現、回歸測試與公開Issue／PR的產品改善案例。",
  openGraph: {
    title: "馬彥宸｜Hermes LINE 媒體改善",
    description: "圖片能用，為什麼語音卻消失？公開 Issue #57882 與 PR #57884，任何人都能點開查證——包含它最終沒有被合併。",
    url: "/projects/hermes-line-media/",
    type: "article",
    images: [{ url: "/og/hermes-line-media.png", width: 1200, height: 630, alt: "馬彥宸｜Hermes LINE 媒體改善" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "馬彥宸｜Hermes LINE 媒體改善",
    description: "把模糊抱怨整理成可重現、可驗證、可交付的產品問題。",
    images: ["/og/hermes-line-media.png"],
  },
};

const MEDIA = ["圖片", "語音", "影片", "檔案"];

function MediaRouting() {
  const box = (x: number, y: number, w: number, label: string, on?: boolean) => (
    <g key={`${x}-${y}-${label}`}>
      <rect className={on ? "flow-box-on" : "flow-box"} x={x} y={y} width={w} height="34" rx="4" />
      <text x={x + w / 2} y={y + 22} className="flow-t" textAnchor="middle">{label}</text>
    </g>
  );

  return (
    <figure className="flow">
      <Scroll>
        <svg viewBox="0 0 720 262" role="img"
             aria-label="修正前四種媒體全部被導向圖片快取，只有圖片可用；修正後依類型分流，語音進入語音轉文字">
          <title>媒體分流：修正前後</title>
          <defs>
            <marker id="ma" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
              <path d="M0 0 L7 3.5 L0 7 z" fill="var(--ink-3)" />
            </marker>
          </defs>

          {/* 修正前 */}
          <text x="0" y="14" className="note">修正前</text>
          {MEDIA.map((m, i) => box(i * 106, 22, 96, m))}
          {MEDIA.map((_, i) => (
            <path key={i} className="flow-arrow" d={`M${i * 106 + 48} 58 L${i * 106 + 48} 74 L212 74 L212 84`}
                  markerEnd={i === 0 ? "url(#ma)" : undefined} />
          ))}
          {box(120, 84, 184, "一律進圖片快取")}
          <path className="flow-arrow" d="M212 120 L212 134" markerEnd="url(#ma)" />
          <g>
            {box(0, 134, 96, "圖片 ✓", true)}
            {MEDIA.slice(1).map((m, i) => (
              <g key={m}>
                <rect className="flow-box" x={(i + 1) * 106} y="134" width="96" height="34" rx="4"
                      opacity="0.45" />
                <text x={(i + 1) * 106 + 48} y="156" className="flow-s" textAnchor="middle">{m} ✗</text>
              </g>
            ))}
          </g>
          <text x="0" y="186" className="note">
            三種輸入沒有報錯，只是安靜消失——這是最難被發現的失敗。
          </text>

          {/* 修正後 */}
          <line x1="0" y1="200" x2="720" y2="200" className="grid" />
          <text x="440" y="228" className="note">修正後</text>
          {box(440, 236, 130, "依類型分流")}
          <path className="flow-arrow" d="M574 253 L592 253" markerEnd="url(#ma)" />
          {box(596, 236, 124, "語音 → STT", true)}
          <text x="0" y="252" className="val">驗收條件：語音進得去，而且圖片不能退化</text>
        </svg>
      </Scroll>
      <figcaption>
        修正前四種輸入全部被送進同一條圖片快取路徑，只有圖片剛好能用。
        重點不是「壞掉了」，而是<strong>其他三種安靜消失、不報錯</strong>——所以要先定義「哪一種輸入失敗」才有辦法修。
      </figcaption>
    </figure>
  );
}

const process = [
  { t: "確認不是操作問題", s: "圖片可正常處理，但語音、影片與一般檔案沒有進入後續流程，差異可穩定重現。" },
  { t: "縮小影響範圍", s: "把輸入類型拆開測試，確認問題集中在非圖片媒體，而不是整個 LINE 入口失效。" },
  { t: "AI 協作提出修正", s: "由 AI 協助閱讀程式與提出最小修改；我確認修改範圍，避免不必要地改動其他流程。" },
  { t: "用真實情境驗收", s: "重新測試語音進入 STT，並確認原本可用的圖片功能沒有被破壞。", on: true },
];

export default function HermesLineMediaProject() {
  return (
    <>
      <SiteHeader project="Hermes LINE 媒體改善" />
      <main className="shell">
        <Link className="backlink" href="/">← 回作品集</Link>
        <h1>圖片能用，為什麼語音卻消失？</h1>
        <p className="lede">我在實際使用Hermes的LINE整合時，發現圖片可以正常處理，但語音、影片與一般檔案會被略過。這個案例不是展示我獨立寫了多少程式，而是展示如何把模糊抱怨整理成可重現、可驗證、可交付的產品問題。</p>

        <CaseSummary
          problem="LINE 進來的圖片正常，但語音、影片與一般檔案全部消失，沒有進入後續流程。"
          decision="不擴大改動範圍。先把「不能用」縮小成「哪一種輸入失敗」，再定義不退化的驗收條件。"
          check="語音要能進入 STT，而且原本可用的圖片流程不能被破壞——兩者同時成立才算修好。"
          result="產出公開 Issue #57882 與 PR #57884。PR 最終未被合併，維護者已有涵蓋更廣的修正。"
          evidence="第三方可查核"
          level="third"
        />

        <div className="figures">
          <div className="figure">
            <span className="figure-n">#57882</span>
            <span className="figure-t">公開 Issue</span>
            <span className="figure-s"><a className="tag tag-3rd" href={issueUrl} target="_blank" rel="noreferrer">查看公開 Issue #57882 ↗</a></span>
          </div>
          <div className="figure">
            <span className="figure-n">#57884</span>
            <span className="figure-t">公開 PR</span>
            <span className="figure-s"><a className="tag tag-3rd" href={pullRequestUrl} target="_blank" rel="noreferrer">查看 PR #57884 ↗</a></span>
          </div>
        </div>

        <section className="band">
          <div className="band-head">
            <h2>同一個入口，四種輸入，只有一種活下來</h2>
            <span className="rowlabel">去識別化示意</span>
          </div>
          <MediaRouting />
        </section>

        <section className="band">
          <div className="band-head"><h2>「不能用」太模糊，先找出哪一種輸入失敗。</h2></div>
          <p>真正影響使用體驗的不是錯誤訊息本身，而是使用者傳入語音後沒有得到預期處理，也無法知道內容去了哪裡。</p>
          <ul>
            <li>預期：語音、影片與檔案應被保存並送往對應處理流程。</li>
            <li>實際：圖片正常，其他媒體沒有正確被記錄或處理。</li>
            <li>驗收：語音可進入STT，圖片既有流程仍正常。</li>
          </ul>
        </section>

        <section className="band">
          <div className="band-head"><h2>從差異開始，逐步縮小問題範圍。</h2><p>AI協助技術閱讀與程式修改；我負責問題定義、修改核准與實際驗收。</p></div>
          <Steps steps={process} caption="每一步的產出都是下一步的輸入；最後一步才是驗收，不是修完就算。" />
        </section>

        <section className="band">
          <div className="band-head"><h2>誠實標示AI協作，也清楚說明我負責什麼。</h2><p>不把AI產生的程式碼包裝成獨立工程開發。</p></div>
          <h3>問題與驗證</h3>
          <p>發現異常、重現差異、定義預期結果、確認修改範圍、執行語音與圖片回歸測試，並整理成公開回饋。</p>
          <h3>技術閱讀與修改</h3>
          <p>協助閱讀LINE adapter程式、定位媒體分流問題、產生修改內容與測試建議；最終是否採用由我依實測結果判斷。</p>
        </section>

        <section className="band">
          <div className="band-head"><h2>修正沒有被合併，問題仍然是有效的。</h2></div>
          <p>Issue與PR皆已關閉。PR不是因為問題不存在而被否定，而是維護者已透過範圍更廣的既有修正處理同一類問題。因此這個案例的成果不是「我的程式被採用」，而是問題被清楚描述、公開查核，並完成實際修正驗證。</p>
          <p><a className="tag tag-3rd" href={issueUrl} target="_blank" rel="noreferrer">LINE adapter drops inbound voice/video/file messages ↗</a></p>
          <p><a className="tag tag-3rd" href={pullRequestUrl} target="_blank" rel="noreferrer">Route audio/video/file payloads to the proper cache path ↗</a></p>
          <p><strong>語音可進入STT；圖片功能未受影響</strong></p>
        </section>

        <section className="band">
          <h2>產品問題的價值，來自可重現與可驗收。</h2>
          <p>我能帶來的不是「問AI拿一段程式」，而是把使用者遇到的問題縮小範圍、定義成功條件、確認修正沒有製造新問題，再把證據交給產品與工程團隊。</p>
          <Link className="cta" href="/projects/ai-assistant/">回到AI生活助理案例 →</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
