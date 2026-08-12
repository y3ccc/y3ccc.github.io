import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

const reportUrl = "/reports/ma-yen-chen-bankruptcy-risk-report.pdf";

export const metadata: Metadata = {
  title: "企業破產風險預測｜馬彥宸作品集",
  description: "以 6,819 筆企業資料建立破產風險比較流程，並自行加入防資料洩漏的公平驗證設計。",
  openGraph: {
    title: "馬彥宸｜企業破產風險預測",
    description: "把複雜資料轉成風險決策依據：6,819 筆企業、93 項財務變數與防資料洩漏驗證。",
    url: "/projects/bankruptcy-risk",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "馬彥宸企業破產風險預測作品集" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "馬彥宸｜企業破產風險預測",
    description: "6,819 筆企業資料 × 風險判讀 × 防資料洩漏驗證",
    images: ["/og.png"],
  },
};

const validationSteps = [
  { number: "01", title: "先切出 Test", text: "Stratified 80/20 分割後，測試集保持 untouched。" },
  { number: "02", title: "處理只在 fold 內", text: "抽樣、標準化與特徵選擇只 fit 於 CV training fold。" },
  { number: "03", title: "事前鎖定候選", text: "以 F1 優先與 Recall 優先規則選模，不看 Test 回頭調整。" },
  { number: "04", title: "最後開啟一次", text: "候選以全部 train 重訓後，Test 僅作最終泛化評估。" },
];

const metrics = [
  { value: "59.85%", label: "Test Recall", note: "破產企業抓到多少" },
  { value: "38.39%", label: "Test Precision", note: "風險警示中有多少是真的" },
  { value: "45.18%", label: "Test F1", note: "Recall 與 Precision 的平衡" },
  { value: "95.11%", label: "Test Accuracy", note: "受大量健康企業影響" },
];

const riskThemes = [
  { tag: "獲利", title: "獲利持續性", text: "Persistent EPS、Net Income／Assets 等指標反覆入選；應區分持續性獲利與一次性收益。" },
  { tag: "槓桿", title: "負債依賴", text: "Borrowing dependency 等訊號指向債務到期、再融資空間與現金流壓力。" },
  { tag: "品質", title: "資金成本與非本業收益", text: "利息成本或過度依賴非本業收益，可能掩蓋核心營運脆弱性。" },
  { tag: "效率", title: "資本使用效率", text: "需將 ROE、資產獲利與投入資本放回產業基準及時間趨勢一起判讀。" },
];

export default function BankruptcyRiskProject() {
  return (
    <div className="site-shell risk-project">
      <SiteHeader project="PROJECT 01" />
      <main>
        <section className="risk-hero">
          <div className="risk-hero-copy">
            <Link className="back-link" href="/">← 返回作品集</Link>
            <p className="kicker">FINANCIAL RISK / 2026</p>
            <h1>高 Accuracy，<br /><span>不代表抓得到高風險企業。</span></h1>
            <p>
              破產企業只占少數，模型即使幾乎全部預測為健康，準確率仍可能很好看。
              我以 6,819 筆企業財務資料建立比較流程，重點放在漏判、誤報與泛化風險，而不是只找最高分數。
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href={reportUrl} target="_blank" rel="noreferrer">
                查看完整技術報告 PDF <span>↗</span>
              </a>
              <a className="text-link" href="#design">查看驗證設計 <span>↓</span></a>
            </div>
            <div className="analysis-facts risk-facts">
              <div><strong>6,819 筆</strong><span>完整企業資料</span></div>
              <div><strong>93 項</strong><span>候選財務變數</span></div>
              <div><strong>360 組</strong><span>CV 候選／資料版本</span></div>
            </div>
          </div>

          <div className="risk-board" aria-label="類別不平衡與指標取捨摘要">
            <div className="board-head"><span>RISK SCREENING</span><span>30 : 1</span></div>
            <div className="imbalance-copy">
              <span>健康企業</span><strong>約 97%</strong>
              <div className="imbalance-bar"><i /><b /></div>
              <span>破產企業</span><strong>約 3%</strong>
            </div>
            <div className="accuracy-trap">
              <small>ACCURACY TRAP</small>
              <p>全部猜健康，<br />也可能接近 <strong>97%</strong> 準確率。</p>
            </div>
            <p>所以先問：真正破產的企業，模型抓到了多少？</p>
          </div>
        </section>

        <section className="decision-section section-rule">
          <div className="section-label">01 / 決策問題</div>
          <div className="research-layout risk-question-layout">
            <h2>模型不是替人下結論，<br /><em>而是決定先查什麼。</em></h2>
            <div>
              <p>
                若用途是企業風險初篩，漏掉真正高風險企業的代價通常較高，因此先關注 Recall；
                但提高 Recall 可能製造大量誤報，所以還要用 Precision 與 F1 檢查後續人工審查成本。
              </p>
              <ul>
                <li><strong>Recall：</strong>實際破產企業抓到了多少。</li>
                <li><strong>Precision：</strong>被標示為高風險的企業中，有多少真的破產。</li>
                <li><strong>F1：</strong>平衡 Recall 與 Precision，但不是所有情境的唯一答案。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="ownership-section section-rule">
          <div className="section-heading">
            <div><p className="section-label">02 / 專案歸屬</p><h2>題目指定方法，<br /><em>我自行補上可信度。</em></h2></div>
            <p>獨立完成的課堂專案，誠實區分指定範圍與自主設計。</p>
          </div>
          <div className="ownership-grid">
            <article>
              <span>COURSE REQUIREMENT</span>
              <h3>課堂指定</h3>
              <p>PCA、MI、RF、XGB 四種特徵方法；SVM、DNN、CNN 三模型；Original、RUS、ADASYN 三情境；5-fold CV 與四項分類指標。</p>
            </article>
            <article>
              <span>MY ADDITION</span>
              <h3>自行加入</h3>
              <p>共同 untouched test、fold 內資料處理、每個資料版本 360 組候選、事前鎖定雙選模規則、完整資料比較、泛化與因果邊界。</p>
            </article>
          </div>
        </section>

        <section className="validation-section section-rule" id="design">
          <div className="section-heading">
            <div><p className="section-label">03 / 驗證設計</p><h2>測試集只在最後，<br /><em>開啟一次。</em></h2></div>
            <p>避免模型在訓練期間提前取得測試資料資訊。</p>
          </div>
          <div className="validation-steps">
            {validationSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>
              </article>
            ))}
          </div>
          <p className="validation-note">
            這表示 RUS／ADASYN、標準化與特徵選擇都不會先看 validation fold 或 Test；也不會看過 Test 分數後再回頭換模型。
          </p>
        </section>

        <section className="result-section section-rule">
          <div className="section-heading">
            <div><p className="section-label">04 / 結果與取捨</p><h2>四個數字，<br /><em>必須一起看。</em></h2></div>
            <p>完整資料版 Recall 優先規則，跨三種資料情境的 Test 平均。</p>
          </div>
          <div className="result-metrics">
            {metrics.map((metric) => (
              <article key={metric.label}>
                <strong>{metric.value}</strong><span>{metric.label}</span><p>{metric.note}</p>
              </article>
            ))}
          </div>
          <div className="result-takeaway">
            <span>TAKEAWAY</span>
            <p>
              RUS／ADASYN 通常能提高破產 Recall，但也可能降低 Precision。若初篩成本低，可偏重 Recall；
              若每一筆誤報都要投入昂貴盡職調查，就必須調整門檻並納入誤報成本。
            </p>
          </div>
        </section>

        <section className="signal-section section-rule">
          <div className="section-heading">
            <div><p className="section-label">05 / 穩定風險訊號</p><h2>從模型結果，走向<br /><em>人工查核清單。</em></h2></div>
            <p>重要度是關聯證據，不是因果結論。</p>
          </div>
          <div className="signal-list">
            {riskThemes.map((theme, index) => (
              <article key={theme.tag}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i>{theme.tag}</i><h3>{theme.title}</h3><p>{theme.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="risk-limit-section">
          <p className="kicker">LIMITS / 研究限制</p>
          <h2>它能協助風險初篩，<br /><em>不能替代投資決策。</em></h2>
          <p>
            資料沒有市場規模、產業景氣、公司治理、技術競爭力、管理團隊或交易條件；目前也只有單一 holdout，
            尚未完成異期與外部驗證。因此不能把模型分數直接當成投資建議或部署績效。
          </p>
          <div className="next-study">
            <span>如果深入研究</span>
            <p>優先加入異期／外部驗證、機率校準與誤判成本，再延伸為產業分層模型與盡職調查問題清單。</p>
          </div>
          <a className="report-download" href={reportUrl} target="_blank" rel="noreferrer">
            <span>完整證據與數據表</span><strong>查看 7 頁技術報告 PDF</strong><b>↗</b>
          </a>
        </section>

        <section className="next-project-strip">
          <span>NEXT PROJECT</span>
          <a href="/projects/convenience-store"><strong>便利商店產業與財務分析</strong><b>查看專案 ↗</b></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
