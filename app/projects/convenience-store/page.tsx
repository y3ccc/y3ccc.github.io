import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "便利商店產業與財務分析｜馬彥宸作品集",
  description: "疫情背景下，以全家與統一超商為對象的產業、策略與財務比較課程專題。",
};

const lenses = [
  { number: "01", title: "產業結構", text: "市場位置、門市密度、服務範圍與產業競爭。" },
  { number: "02", title: "策略與 OMO", text: "會員 App、支付、生態圈與線上線下整合。" },
  { number: "03", title: "財務與評價", text: "營收、獲利、EPS、本益比、股利與股價。" },
];

const observations = [
  {
    tag: "市場",
    title: "高度集中，但第二名仍有清楚位置",
    text: "原始資料將 7-ELEVEN 列為市場領先者、全家緊隨其後。比較不只看店數，也延伸到服務內容與生態圈。",
  },
  {
    tag: "策略",
    title: "競爭從門市走向會員與生活服務",
    text: "報告觀察到會員 App、點數、支付與 OMO 成為提高黏著度和累積消費資料的重要方法。",
  },
  {
    tag: "財務",
    title: "穩定毛利背後，仍是低營業利益率產業",
    text: "門市租賃使使用權資產與租賃負債偏高；毛利率相對穩定，但營業利益率低，規模與營運效率很重要。",
  },
];

export default function ConvenienceStoreProject() {
  return (
    <div className="site-shell analysis-project">
      <SiteHeader project="PROJECT 01" />
      <main>
        <section className="analysis-hero">
          <div className="analysis-hero-copy">
            <a className="back-link" href="/">← 返回作品集</a>
            <p className="kicker">INDUSTRY RESEARCH / 2023—2024</p>
            <h1>疫情之後，<br /><span>便利商店受到什麼影響？</span></h1>
            <p>
              當時處於疫情環境，我對最貼近日常民生的便利商店產生興趣：
              即使人們仍需要基本消費，門市、服務與財務表現是否也會受到影響？
              因此以全家與統一超商為對象，整理產業結構、企業策略與財務資料。
            </p>
            <div className="analysis-facts">
              <div><strong>5 人</strong><span>課程小組</span></div>
              <div><strong>26 頁</strong><span>原始簡報</span></div>
              <div><strong>公開資料</strong><span>公司與市場資訊</span></div>
            </div>
          </div>

          <div className="market-board" aria-label="便利商店市場結構示意">
            <div className="board-head"><span>MARKET VIEW</span><span>TAIWAN CVS</span></div>
            <h2>便利商店不只是零售點，<br />也逐漸成為生活服務入口。</h2>
            <div className="rank-list">
              <div><span>01</span><strong>7-ELEVEN</strong><i>市場領先</i></div>
              <div><span>02</span><strong>全家便利商店</strong><i>緊隨其後</i></div>
              <div><span>03</span><strong>其他品牌</strong><i>利基競爭</i></div>
            </div>
            <p>分析期間：原課程專題資料｜非即時市場排名</p>
          </div>
        </section>

        <section className="research-question section-rule">
          <div className="section-label">01 / 研究問題</div>
          <div className="research-layout">
            <h2>不只問有沒有衰退，<br /><em>而是看營運模式如何吸收變化。</em></h2>
            <div>
              <p>
                便利商店是高頻、低客單價且門市密集的產業。疫情可能改變來客、消費時間與服務需求，
                但公司表現也同時受到展店、鮮食、會員經營與支付生態圈影響。
              </p>
              <ul>
                <li>產業競爭結構與服務內容如何變化？</li>
                <li>兩家公司在營收、獲利與股東回報上有何差異？</li>
                <li>數位會員與 OMO 如何成為下一階段競爭重點？</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="framework-section section-rule">
          <div className="section-heading">
            <div><p className="section-label">02 / 分析架構</p><h2>從產業，走到企業，<br /><em>再回到財務表現。</em></h2></div>
            <p>資料來源以公司官網、公開資訊與市場資料為主。</p>
          </div>
          <div className="lens-grid">
            {lenses.map((item) => (
              <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>
            ))}
          </div>
        </section>

        <section className="observation-section section-rule">
          <div className="section-heading">
            <div><p className="section-label">03 / 主要觀察</p><h2>三個值得留下來的<br /><em>產業判讀。</em></h2></div>
            <p>以下為當時報告內容的重新整理，不代表目前市場現況。</p>
          </div>
          <div className="observation-list">
            {observations.map((item, index) => (
              <article key={item.tag}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i>{item.tag}</i><h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contribution-section section-rule">
          <div className="section-label">04 / 我的貢獻</div>
          <div className="contribution-layout">
            <div>
              <h2>我負責讓五個人的內容，<br /><em>成為同一份報告。</em></h2>
              <p>
                我主導工作分配、公開資料蒐集、比較架構、簡報整合、最終定稿與口頭報告。
                組員資料有錯誤時，我會重新核對來源並修正，確保圖表與敘事一致。
              </p>
            </div>
            <div className="contribution-steps">
              <div><span>01</span><strong>拆分題目與分配內容</strong></div>
              <div><span>02</span><strong>蒐集公開資料並製作圖表</strong></div>
              <div><span>03</span><strong>核對錯誤與統一比較架構</strong></div>
              <div><span>04</span><strong>完成簡報定稿與口頭報告</strong></div>
            </div>
          </div>
        </section>

        <section className="limitation-section">
          <p className="kicker">RESEARCH LIMIT / 研究限制</p>
          <h2>動機來自疫情，<br /><em>但原報告不能直接證明疫情因果。</em></h2>
          <p>
            原始專題主要完成產業與企業比較，沒有建立完整的疫情前後對照，也沒有把展店、商品策略與總體環境等因素分離。
            因此較適合回答「產業和公司如何表現」，不能單憑營收變動斷言是疫情造成。
          </p>
          <div className="next-study">
            <span>如果重新研究</span>
            <p>我會加入疫情前後同店銷售、來客數、客單價、外送／支付使用率與門市展店資料，建立更清楚的比較基準。</p>
          </div>
          <p className="ppt-note">原始 26 頁小組簡報含其他組員姓名，因此未直接公開；面試時可提供完整檔案。</p>
        </section>

        <section className="next-project-strip">
          <span>NEXT PROJECT</span>
          <a href="/projects/ai-assistant"><strong>AI 協作生活助理</strong><b>查看專案 ↗</b></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
