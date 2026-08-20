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
    description: "5 人專題組長，26 頁簡報原檔可下載。競爭已從店數延伸到會員生態圈與 OMO 整合。",
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

const lenses = [
  { title: "產業結構", text: "市場位置、門市密度、服務範圍與產業競爭。" },
  { title: "策略與 OMO", text: "會員 App、支付、生態圈與線上線下整合。" },
  { title: "財務與評價", text: "營收、獲利、EPS、本益比、股利與股價。" },
];

const observations = [
  { tag: "市場", title: "高度集中，但第二名仍有清楚位置", text: "原始資料將 7-ELEVEN 列為市場領先者、全家緊隨其後。比較不只看店數，也延伸到服務內容與生態圈。" },
  { tag: "策略", title: "競爭從門市走向會員與生活服務", text: "報告觀察到會員 App、點數、支付與 OMO 成為提高黏著度和累積消費資料的重要方法。" },
  { tag: "財務", title: "穩定毛利背後，仍是低營業利益率產業", text: "門市租賃使使用權資產與租賃負債偏高；毛利率相對穩定，但營業利益率低，規模與營運效率很重要。" },
];

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
          check="以公司官網、公開資訊與市場資料交叉比對；交件前查出組員引用資料與事實不符並重新查證。"
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
          <div className="band-head"><h2>不只問有沒有衰退，而是看營運模式如何吸收變化。</h2></div>
          <p>便利商店是高頻、低客單價且門市密集的產業。疫情可能改變來客、消費時間與服務需求，但公司表現也同時受到展店、鮮食、會員經營與支付生態圈影響。</p>
          <ul>
            <li>產業競爭結構與服務內容如何變化？</li>
            <li>兩家公司在營收、獲利與股東回報上有何差異？</li>
            <li>數位會員與 OMO 如何成為下一階段競爭重點？</li>
          </ul>
        </section>

        <section className="band">
          <div className="band-head"><h2>從產業，走到企業，再回到財務表現。</h2><p>資料來源以公司官網、公開資訊與市場資料為主。</p></div>
          <div className="ledger">
            {lenses.map((item) => (
              <article className="entry" key={item.title}>
                <h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band">
          <div className="band-head"><h2>三個值得留下來的產業判讀。</h2></div>
          <div className="honest"><p>以下為當時報告內容的重新整理，不代表目前市場現況。</p></div>
          <div className="ledger">
            {observations.map((item) => (
              <article className="entry" key={item.tag}>
                <span className="rowlabel">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band">
          <div className="band-head"><h2>我負責讓五個人的內容，成為同一份報告。</h2></div>
          <p>我主導工作分配、公開資料蒐集、比較架構、簡報整合、最終定稿與口頭報告。組員資料有錯誤時，我會重新核對來源並修正，確保圖表與敘事一致。</p>
          <div className="ledger">
            <div className="entry"><strong>拆分題目與分配內容</strong></div>
            <div className="entry"><strong>蒐集公開資料並製作圖表</strong></div>
            <div className="entry"><strong>核對錯誤與統一比較架構</strong></div>
            <div className="entry"><strong>完成簡報定稿與口頭報告</strong></div>
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
