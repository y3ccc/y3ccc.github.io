import type { Metadata } from "next";
import Link from "next/link";
import { CaseSummary, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { Lines, Steps } from "../../components/Figures";

const reportUrl = "/reports/ma-yen-chen-hon-hai-investment-case.pdf";

export const metadata: Metadata = {
  title: "鴻海投資決策研究｜馬彥宸作品集",
  description:
    "重建一筆 2021–2025 年的鴻海投資：安全邊際、伺服器與電動車轉型、估值重評，以及一次受情緒影響後的修正。",
  openGraph: {
    title: "馬彥宸｜鴻海投資決策研究",
    description: "用當時可得資料重建投資論點，再以後續財報檢查哪些判斷成立、哪些仍缺證據。",
    url: "/projects/equity-research/",
    type: "article",
    images: [{ url: "/og/equity-research.png", width: 1200, height: 630, alt: "馬彥宸｜鴻海投資決策研究" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "馬彥宸｜鴻海投資決策研究",
    description: "投資案例研究：原始論點、產業轉型、估值情境、行為修正與資料限制。",
    images: ["/og/equity-research.png"],
  },
};

const figures = [
  {
    n: "2021 H1",
    t: "開始建立部位",
    s: "第一筆買在 120 多元；精確日期與逐筆成交仍待券商明細確認。",
  },
  {
    n: "7.9%",
    t: "EPS 年複合成長",
    s: "2021 年 10.05 元，2025 年 13.61 元。這是事後驗證，不是買進時已知答案。",
  },
  {
    n: "250–300",
    t: "原始長期情境",
    s: "假設轉型成功、EPS 成長至 12.5–15 元，市場再給約 20 倍本益比。",
  },
  {
    n: "1 週",
    t: "認錯後買回",
    s: "曾因帳面虧損出清；檢查基本面沒有改變後，一週內重新建倉。",
  },
];

const thesisSteps = [
  {
    t: "下檔　接近淨值",
    s: "2020 年底每股淨值 93.58 元；公司仍持續獲利，股價沒有給太多成長溢價。",
  },
  {
    t: "累積　股息與保留盈餘",
    s: "獲利約一半配給股東，其餘留在公司。原始想法是股東價值會隨時間增加。",
  },
  {
    t: "基礎　伺服器",
    s: "雲端與伺服器已有製造規模，可支撐現金流，也有機會成為第二個成長來源。",
  },
  {
    t: "上限　電動車",
    s: "MIH 平台與早期合作案讓我認為，市場仍用『蘋果代工廠』標籤看待一家公司正在做的轉型。",
  },
];

const decisionSteps = [
  {
    t: "2021　第一筆買在 120 多元",
    s: "看重淨值、配息、伺服器與電動車；之後在下跌時加碼。",
  },
  {
    t: "約 2022–2023　多次跌回 100 元附近",
    s: "帳面獲利曾轉成虧損；出清事件可能發生於 2023 年，但日期仍待驗證。",
  },
  {
    t: "一次出清　一週後買回",
    s: "賣出原因是受不了帳面虧損，不是原始論點失效。確認後承認錯誤並重新建倉。",
  },
  {
    t: "2024　股價進入 150–200 元區間",
    s: "低估修復、大盤多頭與 AI 伺服器預期共同推動；沒有在高點出場。",
  },
  {
    t: "2025/03　約 168 元出場",
    s: "公司基本面沒有轉壞；我選擇把資金轉向自己認為長期上限更高的 Tesla。",
  },
];

export default function EquityResearch() {
  return (
    <>
      <SiteHeader project="投資案例研究" />
      <main className="shell">
        <Link className="backlink" href="/">← 回作品集</Link>
        <span className="rowlabel">鴻海（2317）· 2021–2025 · 已了結部位</span>
        <h1>我買鴻海時，<br />看的是伺服器跟電動車。</h1>
        <p className="lede">
          這是我第一次賺到自己認知內的錢。我沒有賣在高點，中間還有一次被帳面虧損逼到出清。
          過了一週，我發現公司根本沒變，是我自己耐不住，於是買回來繼續等。
        </p>

        <CaseSummary
          problem="一家持續獲利、股價接近淨值的大型公司，市場是否仍被過去的代工標籤與股價區間綁住？"
          decision="我先看淨值、配息與保留盈餘，再看伺服器能不能維持獲利、電動車能不能把公司的上限拉高。"
          check="2021 年能知道的事和後來結果分開寫。2022–2025 財報只能用來回頭檢查，不能當成買進前就知道的答案。"
          result="最後約 168 元賣出，改投 Tesla。我沒有抓到高點，但這筆交易讓我知道，自己可以靠研究等到結果，也可以在犯錯後改回來。"
          evidence="公開財報可查 · 交易明細待補"
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
            <h2>2021 年的原始論點</h2>
            <span className="rowlabel">下檔先算清楚，再看轉型上限</span>
          </div>
          <Steps
            steps={thesisSteps}
            caption="淨值與配息有財報可查；伺服器與電動車是我當時對未來的判斷。"
          />
          <p>
            我當時沒有假設 EPS 每年固定增加 10 元。我的想法是，公司每年賺到的錢，一部分配成現金股利，未配出的部分留在公司；只要獲利沒有長期衰退，股東價值就會繼續累積。
          </p>
          <p>
            現在回頭看，我當年說「這筆不會虧」說得太滿。保留盈餘如果投資失敗、認列減損，或只是讓資本報酬率越來越低，股東拿到的價值就不會照我想的累積。
          </p>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>市場還把它當成蘋果代工廠</h2>
            <span className="rowlabel">伺服器守住基礎，電動車打開上限</span>
          </div>
          <div className="ledger">
            <article className="entry">
              <div className="entry-top">
                <span className="entry-title">我買進時就有看伺服器</span>
                <span className="rowlabel">既有業務</span>
              </div>
              <p className="entry-q">
                鴻海當時已經有雲端網路與伺服器製造基礎。2021 年全年伺服器營收後來做到兆元，不過這是年底後才知道的結果，我不能拿它假裝自己買進前就看見答案。
              </p>
            </article>
            <article className="entry">
              <div className="entry-top">
                <span className="entry-title">電動車當時還沒賺到錢，但把上限拉開了</span>
                <span className="rowlabel">轉型業務</span>
              </div>
              <p className="entry-q">
                2020 年 MIH 平台公開後，聯盟短期內已有兩百多家企業響應；2021 年上半年又出現 Fisker 與日本電產合作。這些合作可能失敗，但至少看得出公司已經在找手機組裝以外的生意。
              </p>
            </article>
          </div>
          <p style={{ marginTop: 22 }}>
            我當時覺得鴻海早就不只是在替蘋果代工。不過，2021 年報顯示 98% 產品仍屬 3C 電子；公司正在轉，但還遠遠沒有轉完。
          </p>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>250～300 元怎麼來的</h2>
            <span className="rowlabel">轉型成功情境，不是當下合理價</span>
          </div>
          <p>
            我在 2021 年就把目標放在 250 元、上看 300 元，只是當時沒有把試算留下來。現在照當年的想法重算：EPS 要成長到 12.5～15 元，市場也要願意把本益比從成熟代工約 10 倍提高到大型科技公司約 20 倍，才會得到 250～300 元。
          </p>
          <div className="dtable">
            <table>
              <thead>
                <tr><th>情境</th><th>EPS</th><th>本益比</th><th>對應價值</th><th>成立條件</th></tr>
              </thead>
              <tbody>
                <tr><td>成熟代工</td><td>10 元</td><td>10–12 倍</td><td>100–120 元</td><td>獲利穩定，沒有明顯重評</td></tr>
                <tr><td>轉型進行</td><td>11–13 元</td><td>15–18 倍</td><td>165–234 元</td><td>伺服器成長，獲利率改善</td></tr>
                <tr><td>轉型成功</td><td>12.5–15 元</td><td>20 倍</td><td>250–300 元</td><td>EPS 成長與平台估值同時成立</td></tr>
              </tbody>
            </table>
          </div>
          <p className="figure-s" style={{ marginTop: 14 }}>
            市值大不會自動得到高本益比。2021 年底大型公司本益比從約 10 倍到 28 倍都有；成長、資本報酬率與風險才是市場是否重評的原因。
          </p>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>後來的獲利有沒有跟上</h2>
            <span className="rowlabel">方向成立，速度並不平均</span>
          </div>
          <Lines
            years={["2020", "2021", "2022", "2023", "2024", "2025"]}
            series={[{ k: "EPS", v: [7.34, 10.05, 10.21, 10.25, 11.01, 13.61], c: 2 }]}
            unit="元"
            caption="2021–2025 年 EPS 年複合成長率約 7.9%。2021–2023 幾乎持平，2024–2025 才明顯加速。來源：鴻海年度財報。"
          />
          <p>
            後來 EPS 真的走到 13.61 元，乘以 20 倍就是約 272 元，跟我當初想的區間對得上。不過，這只能說方向有走到，不能把 2025 年的答案倒回去當成 2021 年的證據。
          </p>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>我沒有一路抱到底</h2>
            <span className="rowlabel">交易日期以券商明細為準</span>
          </div>
          <Steps steps={decisionSteps} />
          <p>
            重新建倉後，券商顯示的持股均價約為 107 元，之後也曾在更低價格少量買進。這個 107 元不包含前一次出清的已實現虧損，所以不能拿它直接計算整段投資報酬。
          </p>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>2024 年上漲的歸因</h2>
          </div>
          <p>
            2024 年 1 月 17 日至 3 月 28 日，鴻海收盤價從 98.6 元漲至 155.5 元，約上漲 57.7%；同期加權指數約上漲 17.4%。大盤多頭提供了環境，但鴻海明顯跑得更快。
          </p>
          <p>
            這段漲幅裡面有低估修復、大盤上漲，也有 AI 伺服器帶來的新預期。公司在 2024 年 3 月 14 日上調全年展望，隔日股價由 121 元收至 132 元，所以不能只用「大型權值股一定會補漲」解釋全部漲幅。
          </p>
        </section>

        <section className="band">
          <div className="honest">
            <h2>還不能下結論的地方</h2>
            <ul>
              <li>這是一次做對，不代表我已經能穩定複製。</li>
              <li>250～300 元是依原始想法重建的轉型成功情境，不是 2021 年留下的完整模型。</li>
              <li>第一次買進、出清與買回的日期及價格仍待券商明細確認。</li>
              <li>107 元是重新建倉後的持股均價，不能代表全期間經濟成本。</li>
              <li>沒有金額、沒有股數、沒有目前持倉；本文也不構成投資建議。</li>
            </ul>
          </div>
        </section>

        <section className="band">
          <div className="band-head">
            <h2>資料來源與完整報告</h2>
          </div>
          <p>
            財務數字以鴻海年報與法說資料為主，股價與本益比採臺灣證券交易所資料。個人交易過程來自 2026 年回憶重建，未確認處均明確標示。
          </p>
          <a className="cta" href={reportUrl} target="_blank" rel="noreferrer">
            下載 10 頁研究報告 PDF ↗
          </a>
          <a className="cta cta-ghost" href="https://www.honhai.com/s3/reports/shareholders-meetings/2022/Annual%20Report.pdf" target="_blank" rel="noreferrer">
            鴻海 2021 年報 ↗
          </a>
          <a className="cta cta-ghost" href="https://www.twse.com.tw/exchangeReport/FMNPTK?response=html&stockNo=2317" target="_blank" rel="noreferrer">
            證交所年度股價 ↗
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
