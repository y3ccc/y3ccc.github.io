import type { Metadata } from "next";
import Link from "next/link";
import { CaseSummary, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { Lines } from "../../components/Figures";

const deckUrl = "/reports/ma-yen-chen-convenience-store-deck.pdf";

export const metadata: Metadata = {
  title: "便利商店產業與財務分析｜馬彥宸作品集",
  description: "疫情背景下，以全家與統一超商為對象的產業、策略與財務比較課程專題。",
  openGraph: {
    title: "馬彥宸｜便利商店產業及財務分析",
    description: "5 人專題組長，簡報公開版 25 頁可下載（原始 26 頁，封面含組員姓名已移除）。競爭已從店數延伸到會員生態圈與 OMO 整合。",
    url: "/projects/convenience-store/",
    type: "article",
    images: [{ url: "/og/convenience-store.png", width: 1200, height: 630, alt: "馬彥宸｜便利商店產業及財務分析" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "馬彥宸｜便利商店產業及財務分析",
    description: "疫情之後，便利商店受到什麼影響？",
    images: ["/og/convenience-store.png"],
  },
};

const SHARE = [
  {
    year: "2021",
    parts: [
      { k: "統一超商", v: 46.5, c: 1 },
      { k: "全家", v: 22.5, c: 2 },
      { k: "萊爾富", v: 6.5, c: 3 },
      { k: "OK 超商", v: 2.5, c: 4 },
      { k: "其他", v: 22.0, c: 0 },
    ],
  },
  {
    year: "2022",
    parts: [
      { k: "統一超商", v: 47.9, c: 1 },
      { k: "全家", v: 22.5, c: 2 },
      { k: "萊爾富", v: 6.4, c: 3 },
      { k: "OK 超商", v: 2.6, c: 4 },
      { k: "其他", v: 20.8, c: 0 },
    ],
  },
];

const LEGEND = SHARE[0].parts;

export default function ConvenienceStoreProject() {
  return (
    <>
      <SiteHeader project="便利商店產業與財務分析" />
      <main className="shell">
        <Link className="backlink" href="/">← 回作品集</Link>
        <span className="rowlabel">2023—2024</span>
        <h1>疫情之後，便利商店受到什麼影響？</h1>
        <p className="lede">當時處於疫情環境，我對最貼近日常民生的便利商店產生興趣：即使人們仍需要基本消費，門市、服務與財務表現是否也會受到影響？因此以全家與統一超商為對象，整理產業結構、企業策略與財務資料。</p>

        <CaseSummary
          problem="疫情之後，最貼近日常民生的便利商店，門市、服務與財務表現是否也受到衝擊？"
          decision="不只問有沒有衰退，而是看營運模式如何吸收變化——從產業結構走到企業策略，再回到財務數字。"
          check="以公司官網、公開資訊與市場資料交叉比對；定稿前把引用的財務數字逐筆回到來源核對，發現一筆對不上並重新查證。"
          result="競爭已從店數延伸到會員生態圈與 OMO 整合；兩家毛利率穩定但營業利益率偏低。原始簡報可下載。"
          evidence="課程專題 · 2023"
          level="self"
        />

        <div className="figures">
          <div className="figure">
            <span className="figure-n">5 人</span>
            <span className="figure-t">課程小組</span>
            <span className="figure-s">我負責讓五個人的內容，成為同一份報告。</span>
          </div>
          <div className="figure">
            <span className="figure-n">26 頁</span>
            <span className="figure-t">原始簡報</span>
            <span className="figure-s">公開版 25 頁可下載，封面因含組員姓名移除。</span>
          </div>
          <div className="figure">
            <span className="figure-n">公開資料</span>
            <span className="figure-t">公司與市場資訊</span>
            <span className="figure-s">非即時市場排名</span>
          </div>
        </div>

        <section className="band">
          <div className="band-head">
            <h2>我要問的不是「有沒有衰退」，是它靠什麼吸收衝擊</h2>
            <span className="rowlabel">研究設計 · 資料以公司官網與公開資訊為主</span>
          </div>
          <p>
            便利商店是高頻、低客單價、門市極密集的產業。疫情會改變來客與消費時間，
            但同一段期間它還同時受到展店、鮮食、會員經營與支付生態圈影響——
            <strong>把營收變動直接歸給疫情，是把好幾件事混在一起。</strong>
          </p>
          <p>所以我把題目拆成三層，一層一層往下問：</p>
          <div className="ledger">
            <article className="entry">
              <div className="entry-top">
                <span className="entry-title">產業這一層</span>
                <span className="rowlabel">市占、門市密度、服務範圍</span>
              </div>
              <p className="entry-q">競爭結構有沒有變？集中度往哪個方向走？</p>
            </article>
            <article className="entry">
              <div className="entry-top">
                <span className="entry-title">企業這一層</span>
                <span className="rowlabel">會員 App、支付、OMO</span>
              </div>
              <p className="entry-q">兩家用什麼方式留住人？誰的生態圈接得比較起來？</p>
            </article>
            <article className="entry">
              <div className="entry-top">
                <span className="entry-title">財務這一層</span>
                <span className="rowlabel">營收、獲利、EPS、本益比</span>
              </div>
              <p className="entry-q">上面兩層的差異，最後有沒有落在數字上？市場給了什麼評價？</p>
            </article>
          </div>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>前兩名合計約七成，而且還在往上</h2>
            <span className="rowlabel">原報告市占率資料 · 2021 → 2022</span>
          </div>
          <p>
            這不是一個「誰是第一」的市場，是一個<strong>已經高度集中、而且集中度還在上升</strong>的市場。
            統一超商一年多拿 1.4 個百分點，全家守住，被稀釋的是後段班與其他品牌。
          </p>

          <figure className="chart">
            <div className="chart-scroll">
            <svg viewBox="0 0 720 200" role="img" aria-label="超商市占率組成，2021 與 2022 兩年比較">
              <title>超商市占率組成：2021 與 2022</title>
              {SHARE.map((row, r) => {
                const y = r * 96 + 36;
                let x = 56;
                return (
                  <g key={row.year}>
                    <text x="0" y={y + 23} className="ax">{row.year}</text>
                    {row.parts.map((p) => {
                      const w = (p.v / 100) * 660;
                      const seg = (
                        <g key={p.k}>
                          <rect x={x} y={y} width={Math.max(w - 2, 1)} height="34" rx="2" fill={`var(--c${p.c})`} />
                          {/* 值標在長條上方的紙面，避開色塊上的低對比 */}
                          {p.c === 1 || p.c === 2 ? (
                            <text x={x} y={y - 8} className="val">
                              {p.k} {p.v.toFixed(1)}%
                            </text>
                          ) : null}
                        </g>
                      );
                      x += w;
                      return seg;
                    })}
                    <text x="56" y={y + 52} className="note">
                      前兩名合計 {(row.parts[0].v + row.parts[1].v).toFixed(1)}%
                    </text>
                  </g>
                );
              })}
            </svg>
            </div>
            <div className="legend">
              {LEGEND.map((l) => (
                <span key={l.k}>
                  <i style={{ background: `var(--c${l.c})` }} />
                  {l.k}
                </span>
              ))}
            </div>
            <figcaption>
              資料為原課程專題整理的市占率，非即時排名。「其他」是餘額，不是單一品牌，所以用中性色。
            </figcaption>
          </figure>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>十年營收：差距沒有縮小，但成長速度是反過來的</h2>
            <span className="rowlabel">原報告營收數列 · 2013 → 2022</span>
          </div>
          <p>
            統一超商的規模大約是全家的三倍，而且十年下來差距沒有被追上。
            但看年複合成長率，<strong>全家 6.0%、統一超商 4.2%</strong>——
            跑得快的是後面那個，只是基期差太多，追不上。
          </p>
          <Lines
            years={["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"]}
            series={[
              { k: "統一超商", v: [200.6, 200.4, 205.5, 215.4, 221.1, 244.9, 256.1, 258.5, 262.7, 290.4], c: 1 },
              { k: "全家", v: [53.7, 56, 57.7, 60.5, 64.4, 71.7, 77.7, 85.3, 83.6, 90.7], c: 2 },
            ]}
            unit="十億元"
            caption="2021 年兩家都出現下滑或走平，2022 年一起彈回；那一年統一超商年增 10.5%、全家 8.5%——這也解釋了同期市占率為什麼是統一超商在拿。"
          />
        </section>

        <section className="band">
          <div className="band-head">
            <h2>營收一路成長，股價卻一路走低</h2>
            <span className="rowlabel">統一超商 · 原報告估值資料 · 2018–2022</span>
          </div>
          <p>
            這是整份報告裡我事後覺得最值得追的一組數字。
            十年營收成長約 45%，但<strong>年均股價五年間從 315 元掉到 270 元</strong>，
            本益比始終在 29–32 之間盤整——市場沒有因為它變大而給它更高的評價。
          </p>
          <div className="dtable scroller">
            <table>
              <thead>
                <tr><th>年度</th><th>年均股價（元）</th><th>EPS（元）</th><th>本益比</th></tr>
              </thead>
              <tbody>
                {[["2018", "315", "9.82", "32.0"],
                  ["2019", "301", "10.14", "29.7"],
                  ["2020", "283", "9.85", "28.7"],
                  ["2021", "274", "8.52", "32.1"],
                  ["2022", "270", "8.93", "30.2"]].map(([y, p, e, pe]) => (
                    <tr key={y}>
                      <td>{y}</td><td>{p}</td><td>{e}</td><td>{pe}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <p className="figure-s" style={{ marginTop: 14 }}>
            當時的報告沒有追問這件事，我是後來才注意到的。
            一家營收持續成長、EPS 大致持平的公司，市場評價五年沒有提升——
            這個落差本身就是一個值得研究的題目，而我當時錯過了。
          </p>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>圖表沒說、但值得留下來的兩件事</h2>
            <span className="rowlabel">當時報告的整理，不代表目前市場現況</span>
          </div>
          <p>
            市場集中度前面的圖已經講完了，這裡不重複。剩下兩件是數字看不出來的：
          </p>
          <div className="ledger">
            <article className="entry">
              <div className="entry-top">
                <span className="entry-title">競爭已經不在門市裡了</span>
                <span className="rowlabel">策略</span>
              </div>
              <p className="entry-q">
                會員 App、點數、支付與 OMO 才是提高黏著度的手段，而且它們同時在累積消費資料。
                <strong>比店數只會得到一個過期的答案。</strong>
              </p>
            </article>
            <article className="entry">
              <div className="entry-top">
                <span className="entry-title">毛利穩定，不代表賺得輕鬆</span>
                <span className="rowlabel">財務</span>
              </div>
              <p className="entry-q">
                門市租賃讓使用權資產與租賃負債都偏高；毛利率相對穩定，但營業利益率低。
                <strong>規模與營運效率才是這個產業真正的勝負點。</strong>
              </p>
            </article>
          </div>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>定稿前我把引用的數字重查了一遍</h2>
            <span className="rowlabel">5 人小組 · 我負責定稿</span>
          </div>
          <p>
            工作分配、資料蒐集、比較架構、簡報整合、上台報告——這些都做了，
            但它們不太能說明什麼，因為每個組長都會寫這幾項。
          </p>
          <p>
            比較能說明的是定稿那一步。<strong>交件前我把報告裡引用的財務數字逐筆回到來源核對，
            結果有一筆對不上。</strong>當時時間已經很緊，最省事的做法是照著交出去——
            那是一份課堂報告，不見得會有人去查那個數字。
          </p>
          <p>
            我還是回頭查了來源、改掉數字，然後把圖表與敘述一起改到一致才送出。
            <strong>這是整份專題裡唯一一次，定稿這道關真的改變了交出去的東西。</strong>
          </p>
          <div className="honest">
            <p>
              我不記得確切是哪一筆了——大概在 EPS 或現金股利那一段，但我不會為了讓故事好聽就編一個。
              重點也不在那個數字，而在<strong>「沒人會查」不是我用來省事的理由</strong>。
              這個習慣後來變成我做每個專案的預設。
            </p>
          </div>
        </section>

        <section className="band">
          <div className="honest">
            <h2>動機來自疫情，但原報告不能直接證明疫情因果。</h2>
            <p>原始專題主要完成產業與企業比較，沒有建立完整的疫情前後對照，也沒有把展店、商品策略與總體環境等因素分離。因此較適合回答「產業和公司如何表現」，不能單憑營收變動斷言是疫情造成。</p>
            <h3>如果重新研究</h3>
            <p>我會加入疫情前後同店銷售、來客數、客單價、外送／支付使用率與門市展店資料，建立更清楚的比較基準。</p>
          </div>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>原始簡報可以下載，但封面拿掉了</h2>
          </div>
          <p>
            這是當時交出去的 26 頁小組簡報。公開版是 25 頁——
            <strong>封面列了其他四位組員的姓名，那不是我能單方面決定公開的資料，所以整頁移除。</strong>
            內容一頁未刪。
          </p>
          <a className="cta" href={deckUrl} target="_blank" rel="noreferrer">
            下載原始簡報 25 頁 PDF ↗
          </a>
          <Link className="cta cta-ghost" href="/projects/ai-assistant">AI 協作生活助理 →</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
