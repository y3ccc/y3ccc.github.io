import type { Metadata } from "next";
import Link from "next/link";
import { CaseSummary, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { Metrics, Split, Steps } from "../../components/Figures";

const reportUrl = "/reports/ma-yen-chen-bankruptcy-risk-report.pdf";

export const metadata: Metadata = {
  title: "企業破產風險預測｜馬彥宸作品集",
  description: "以 6,819 筆企業資料建立破產風險比較流程，並自行加入防資料洩漏的公平驗證設計。",
  openGraph: {
    title: "馬彥宸｜企業破產風險預測",
    description: "把複雜資料轉成風險決策依據：6,819 筆企業、93 項財務變數與防資料洩漏驗證。",
    url: "/projects/bankruptcy-risk/",
    type: "article",
    images: [{ url: "/og/bankruptcy-risk.png", width: 1200, height: 630, alt: "馬彥宸｜企業破產風險預測" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "馬彥宸｜企業破產風險預測",
    description: "6,819 筆企業資料 × 風險判讀 × 防資料洩漏驗證",
    images: ["/og/bankruptcy-risk.png"],
  },
};

const validationSteps = [
  { title: "先切出 Test", text: "Stratified 80/20 分割後，測試集保持 untouched。" },
  { title: "處理只在 fold 內", text: "抽樣、標準化與特徵選擇只 fit 於 CV training fold。" },
  { title: "事前鎖定候選", text: "以 F1 優先與 Recall 優先規則選模，不看 Test 回頭調整。" },
  { title: "最後開啟一次", text: "候選以全部 train 重訓後，Test 僅作最終泛化評估。" },
];


const riskThemes = [
  { tag: "獲利", title: "獲利持續性", text: "Persistent EPS、Net Income／Assets 等指標反覆入選；應區分持續性獲利與一次性收益。" },
  { tag: "槓桿", title: "負債依賴", text: "Borrowing dependency 等訊號指向債務到期、再融資空間與現金流壓力。" },
  { tag: "品質", title: "資金成本與非本業收益", text: "利息成本或過度依賴非本業收益，可能掩蓋核心營運脆弱性。" },
  { tag: "效率", title: "資本使用效率", text: "需將 ROE、資產獲利與投入資本放回產業基準及時間趨勢一起判讀。" },
];

export default function BankruptcyRiskProject() {
  return (
    <>
      <SiteHeader project="企業破產風險預測" />
      <main className="shell">
        <Link className="backlink" href="/">← 回作品集</Link>
        <h1>高 Accuracy，不代表抓得到高風險企業。</h1>
        <p className="lede">破產企業只占少數，模型即使幾乎全部預測為健康，準確率仍可能很好看。我以 6,819 筆企業財務資料建立比較流程，重點放在漏判、誤報與泛化風險，而不是只找最高分數。</p>

        <CaseSummary
          problem="破產企業只占約 3%，模型幾乎全猜健康也有 95% 準確率，分數好看卻抓不到真正該查的公司。"
          decision="不追求最高分。用 Recall／Precision／F1 一起判讀，並在開啟測試集前就鎖定選模規則。"
          check="共同 untouched test；抽樣、標準化與特徵選擇全部限制在訓練 fold 內；測試集只開一次。"
          result="Recall 59.85%、Precision 38.39%、F1 45.18%。附 9 頁技術報告，含限制與因果邊界。"
          evidence="9 頁技術報告"
          level="self"
        />

        <div className="figures">
          <div className="figure">
            <span className="figure-n">6,819 筆</span>
            <span className="figure-t">完整企業資料</span>
            <span className="figure-s">健康企業與破產企業約 30 : 1</span>
          </div>
          <div className="figure">
            <span className="figure-n">93 項</span>
            <span className="figure-t">候選財務變數</span>
            <span className="figure-s">健康企業約 97%；破產企業約 3%</span>
          </div>
          <div className="figure">
            <span className="figure-n">360 組</span>
            <span className="figure-t">CV 候選／資料版本</span>
            <span className="figure-s">完整資料比較</span>
          </div>
          <div className="figure">
            <span className="figure-n">59.85%</span>
            <span className="figure-t">Test Recall</span>
            <span className="figure-s">Test Precision 38.39% · Test F1 45.18% · Test Accuracy 95.11%</span>
          </div>
        </div>

        <section className="band">
          <div className="band-head">
            <h2>要抓的東西，只有這麼寬</h2>
            <span className="rowlabel">6,819 筆企業 · 約 30 : 1</span>
          </div>
          <Split
            parts={[
              { k: "健康企業", v: 97, c: 0 },
              { k: "破產企業", v: 3, c: 3 },
            ]}
            caption="一個什麼都不做、全部猜「健康」的模型，準確率就有 97%。所以第一個要問的不是準確率，是：真正破產的那 3%，抓到了多少？"
          />
        </section>

        <section className="band">
          <div className="band-head"><h2>模型不是替人下結論，而是決定先查什麼。</h2></div>
          <p>若用途是企業風險初篩，漏掉真正高風險企業的代價通常較高，因此先關注 Recall；但提高 Recall 可能製造大量誤報，所以還要用 Precision 與 F1 檢查後續人工審查成本。</p>
          <ul>
            <li><strong>Recall：</strong>實際破產企業抓到了多少。</li>
            <li><strong>Precision：</strong>被標示為高風險的企業中，有多少真的破產。</li>
            <li><strong>F1：</strong>平衡 Recall 與 Precision，但不是所有情境的唯一答案。</li>
          </ul>
        </section>

        <section className="band">
          <div className="band-head"><h2>題目指定方法，我自行補上可信度。</h2><p>獨立完成的課堂專案，誠實區分指定範圍與自主設計。</p></div>
          <h3>課堂指定</h3>
          <p>PCA、MI、RF、XGB 四種特徵方法；SVM、DNN、CNN 三模型；Original、RUS、ADASYN 三情境；5-fold CV 與四項分類指標。</p>
          <h3>自行加入</h3>
          <p>共同 untouched test、fold 內資料處理、每個資料版本 360 組候選、事前鎖定雙選模規則、完整資料比較、泛化與因果邊界。</p>
        </section>

        <section className="band" id="design">
          <div className="band-head"><h2>測試集只在最後，開啟一次。</h2><p>避免模型在訓練期間提前取得測試資料資訊。</p></div>
          <Steps
            steps={validationSteps.map((s, i) => ({ t: s.title, s: s.text, on: i === 3 }))}
            caption="順序本身就是防線：測試集在第一步被切開之後，一直到最後一步才再被碰到。"
          />
          <p>這表示 RUS／ADASYN、標準化與特徵選擇都不會先看 validation fold 或 Test；也不會看過 Test 分數後再回頭換模型。</p>
        </section>

        <section className="band">
          <div className="band-head"><h2>四個數字，必須一起看。</h2><p>完整資料版 Recall 優先規則，跨三種資料情境的 Test 平均。</p></div>
          <Metrics
            rows={[
              { k: "Recall", v: 59.85, note: "實際破產的企業，抓到了多少", c: 1 },
              { k: "Precision", v: 38.39, note: "被標成高風險的，多少真的破產", c: 2 },
              { k: "F1", v: 45.18, note: "前兩者的平衡", c: 3 },
              { k: "Accuracy", v: 95.11, note: "被那 97% 健康企業灌出來的——這格最會騙人", c: 0, dim: true },
            ]}
            caption="放在同一把尺上就看得出來：最高的那一格是最沒有資訊量的一格。Accuracy 刻意畫淡，因為它在這個題目裡不該被拿來排名。"
          />
          <p>RUS／ADASYN 通常能提高破產 Recall，但也可能降低 Precision。若初篩成本低，可偏重 Recall；若每一筆誤報都要投入昂貴盡職調查，就必須調整門檻並納入誤報成本。</p>
        </section>

        <section className="band">
          <div className="band-head"><h2>從模型結果，走向人工查核清單。</h2><p>重要度是關聯證據，不是因果結論。</p></div>
          <div className="ledger">
            {riskThemes.map((theme) => (
              <article className="entry" key={theme.tag}>
                <span className="rowlabel">{theme.tag}</span>
                <h3>{theme.title}</h3>
                <p>{theme.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="band">
          <div className="honest">
            <h2>它能協助風險初篩，不能替代投資決策。</h2>
            <p>資料沒有市場規模、產業景氣、公司治理、技術競爭力、管理團隊或交易條件；目前也只有單一 holdout，尚未完成異期與外部驗證。因此不能把模型分數直接當成投資建議或部署績效。</p>
            <h3>如果深入研究</h3>
            <p>優先加入異期／外部驗證、機率校準與誤判成本，再延伸為產業分層模型與盡職調查問題清單。</p>
          </div>
          <a className="cta" href={reportUrl} target="_blank" rel="noreferrer">查看 9 頁完整技術報告 PDF ↗</a>
        </section>

        <section className="band">
          <Link className="cta cta-ghost" href="/projects/convenience-store">便利商店產業與財務分析　查看專案 →</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
