import type { Metadata } from "next";
import Link from "next/link";
import { CaseSummary, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { Steps } from "../../components/Figures";

export const metadata: Metadata = {
  title: "一次個股研究，以及它教我的事｜馬彥宸作品集",
  description:
    "我用接近淨值的價格買一家一直在賺錢的公司。論述成立，但我漏看了產業那一層。",
  openGraph: {
    title: "馬彥宸｜一次個股研究，以及它教我的事",
    description: "鴻海 2021–2025，含息報酬約 72%、年化約 16%，優於同期大盤。但這頁真正在講的是我漏看的那一層。",
    url: "/projects/equity-research/",
    type: "article",
    images: [{ url: "/og/equity-research.png", width: 1200, height: 630, alt: "馬彥宸｜一次個股研究" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "馬彥宸｜一次個股研究，以及它教我的事",
    description: "一筆賺錢的投資，價值不在報酬率，在於它指出我的分析框架缺了哪一塊。",
    images: ["/og/equity-research.png"],
  },
};

const figures = [
  {
    n: "+72%",
    t: "含息總報酬",
    s: "年化約 16%。同期大盤含息年化約 11.5%。",
  },
  {
    n: "3.6 年",
    t: "持有期間",
    s: "2021 下半年進場，2025 年 3 月出場。分批加碼。",
  },
  {
    n: "15.9 元",
    t: "三次現金股利",
    s: "配息本身就是我進場論述的核心，不是附帶收益。",
  },
  {
    n: "1 層",
    t: "我沒看到的東西",
    s: "產業。方向我判斷對了，斜率我完全低估。",
  },
];

const steps = [
  {
    label: "觀察",
    h: "市值幾乎等於淨值",
    p: "進場時 P/B 約為 1。一家持續獲利的公司，市場給的價格只等於它的帳面價值。",
  },
  {
    label: "結構",
    h: "賺的錢一半配出去，一半留下來",
    p: "配息率約五成，其餘留存回淨值。也就是說淨值會逐年墊高。",
  },
  {
    label: "推論",
    h: "股價不動的話，它會自己變便宜",
    p: "淨值持續累積而股價不變，P/B 只會往 1 以下走。我買在一個安全邊際會自己擴大的位置。",
  },
  {
    label: "判斷",
    h: "市場沒有反映它一直在賺錢",
    p: "我要的不是它變成什麼，而是它繼續做它已經在做的事。",
  },
];

export default function EquityResearch() {
  return (
    <>
      <SiteHeader project="個股研究" />
      <main className="shell">
        <Link className="backlink" href="/">← 回作品集</Link>
        <span className="rowlabel">電子產業 · 2021 – 2025 · 已了結部位</span>
        <h1>我用接近淨值的價格，<br />買一家一直在賺錢的公司。</h1>
        <p className="lede">
          這是一筆賺錢的投資，但它真正的價值不在報酬率——
          在於它精確地指出我的分析框架缺了哪一塊。
          標的是鴻海(2317)，論述是我自己推的，錯誤也是我自己找出來的。
        </p>

        <CaseSummary
          problem="一家持續獲利的公司，市值卻幾乎等於淨值。市場是給了合理價，還是沒有反映它一直在賺錢？"
          decision="只用資產與獲利判斷，不預測產業。評估過籌碼面後，判斷它對三到四年的持有週期影響有限而排除。"
          check="用真金白銀持有並分批加碼，以實際出場價與同期大盤含息報酬對照，不是紙上回測。"
          result="含息報酬約 72%、年化約 16%，優於同期大盤。但我賣掉後它繼續漲——我的框架看不到產業那一層。"
          evidence="已了結部位 · 含自我檢討"
          level="open"
        />

        <div className="figures">
          {figures.map((f) => (
            <div className="figure" key={f.n}>
              <span className="figure-n">{f.n}</span>
              <span className="figure-t">{f.t}</span>
              <span className="figure-s">{f.s}</span>
            </div>
          ))}
        </div>

        <section className="band">
          <div className="band-head">
            <h2>論述怎麼推出來的</h2>
            <span className="rowlabel">四步，全部只用公開財報</span>
          </div>
          <Steps
            steps={steps.map((st) => ({ t: `${st.label}　${st.h}`, s: st.p }))}
            caption="四步都只用公開財報，沒有一步需要內線或預測。這也是它的極限：整條推論裡沒有任何一格是在看產業。"
          />
        </section>

        <section className="band">
          <div className="band-head">
            <h2>我當時刻意排除了什麼</h2>
          </div>
          <p>
            我研究過籌碼面。這檔外資持股比重高、籌碼集中於少數法人，
            短期價格對法人資金流動相當敏感。
          </p>
          <p>
            但我的持有週期是三到四年，我判斷籌碼面的影響會隨期間拉長而衰減，
            所以<strong>有意識地不把它納入決策依據</strong>。
          </p>
          <p>
            這個取捨我到現在仍認為對我的週期是合理的。
            但它有前提——<strong>那個前提只適用於我自己的資金與我自己的期限。</strong>
            服務不同持有週期的人，籌碼面就不是可以省略的東西。
          </p>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>我怎麼出場</h2>
          </div>
          <p>
            2025 年 3 月，我判斷它「會長期上漲，但不會暴漲」，
            所以把資金換到我認為斜率更高的地方。
          </p>
          <p>
            出場的理由不是看壞它，是<strong>機會成本</strong>——
            同一筆錢放在哪裡效率比較高。這個決定本身我認為沒有錯。
          </p>
        </section>

        <section className="band">
          <div className="honest">
            <h2>但我錯在哪</h2>
            <p>
              我賣掉之後它繼續漲。而我事後才想清楚原因：
            </p>
            <ul>
              <li>
                我的框架<strong>只看資產與獲利，不看產業</strong>。
              </li>
              <li>
                所以我沒有看到它正在從純代工，被重新評價為 AI 伺服器供應鏈的一環。
              </li>
              <li>
                方向我判斷對了，<strong>斜率我完全低估</strong>。
              </li>
              <li>
                而且我的出場沒有規則——我是憑「感覺斜率不夠」下的判斷，不是憑一套判準。
              </li>
            </ul>
            <p>
              我有進場紀律，沒有出場紀律；我有估值直覺，沒有產業框架。
              這兩個缺口是這筆投資教我的，不是課本教我的。
            </p>
          </div>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>這件事跟我想做的工作有什麼關係</h2>
          </div>
          <p>
            我不是把這頁放上來證明我會選股。我放它是因為它示範了三件事：
          </p>
          <div className="ledger">
            <article className="entry">
              <div className="entry-top">
                <span className="entry-title">我能自己建立一個可檢驗的論述</span>
                <span className="rowlabel">而不是跟著別人的結論走</span>
              </div>
              <p className="entry-q">
                進場理由是從公開財報推導出來的，每一步都說得出根據。
              </p>
            </article>
            <article className="entry">
              <div className="entry-top">
                <span className="entry-title">我會標示自己刻意排除了什麼</span>
                <span className="rowlabel">以及排除的前提</span>
              </div>
              <p className="entry-q">
                籌碼面不是我不懂，是我判斷它對我的週期影響有限——而我知道這個前提換個人就不成立。
              </p>
            </article>
            <article className="entry">
              <div className="entry-top">
                <span className="entry-title">我會回頭拆自己的判斷</span>
                <span className="rowlabel">在賺錢的情況下</span>
              </div>
              <p className="entry-q">
                這筆是賺的。人在賺錢的時候最不想檢討，而這正是檢討最有價值的時候。
              </p>
            </article>
          </div>
          <p style={{ marginTop: 22 }}>
            我現在仍持續自學產業分析，補的就是這筆投資指出來的那一層。
          </p>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>這頁沒有寫什麼</h2>
          </div>
          <p>
            沒有金額、沒有股數、沒有我目前的持倉。這是一份研究方法的紀錄，
            不是投資績效展示，也不構成任何投資建議。
          </p>
          <p className="figure-s">
            報酬為近似值：分批投入的資金，精確報酬應以 XIRR(資金加權)計算。
            大盤基準採同期加權指數含息估算。
          </p>
          <Link className="cta" href="/projects/bankruptcy-risk/">
            看我怎麼處理財務資料 →
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
