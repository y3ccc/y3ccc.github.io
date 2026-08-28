import type { Metadata } from "next";
import styles from "./report.module.css";

export const metadata: Metadata = {
  title: "企業破產風險預測｜馬彥宸",
  robots: { index: false, follow: false },
};

const dataVersions = [
  ["缺失值清理版", "1,736", "56", "93", "348", "11"],
  ["完整資料版", "6,819", "220", "93", "1,364", "44"],
];

const designSteps = [
  ["1", "Stratified 80/20 train/test split", "只切分"],
  ["2", "在 CV training fold 內建立 Original／RUS／ADASYN", "不參與"],
  ["3", "在 CV training fold 內 fit PCA／MI／RF／XGB", "不參與"],
  ["4", "每個組合搜尋 10 組參數並做 5-fold validation", "不參與"],
  ["5", "依事前 F1 優先與 Recall 優先規則鎖定候選", "不參與"],
  ["6", "以全部 train 重訓；Test 僅最終開啟一次", "最終評估"],
];

const stableKpis = [
  ["Continuous interest rate (after tax)", "9", "4", "檢視資金成本、利息敏感度與再融資空間"],
  ["Non-industry income and expenditure / revenue", "9", "4", "區分核心營運與非本業收益，檢查盈餘品質"],
  ["Persistent EPS in the Last Four Seasons", "9", "3", "追蹤獲利持續性，排除一次性利益"],
  ["Borrowing dependency", "9", "3", "檢視負債依賴、到期集中度與現金流壓力"],
  ["Net Income to Stockholder's Equity", "9", "3", "結合產業基準觀察資本使用效率"],
  ["Net profit before tax / Paid-in capital", "9", "3", "檢視稅前獲利與投入資本的關係"],
  ["Net Income to Total Assets", "9", "3", "觀察資產創造獲利的能力與趨勢"],
  ["Total income / Total expense", "9", "3", "檢查整體收入對費用的覆蓋與惡化速度"],
];

const limits = [
  ["課堂缺失版刪除 5,083 列", "可能存在非隨機缺失偏差，且正類樣本大幅減少", "分析缺失機制；採適當插補並做敏感度比較"],
  ["只有單一 80/20 holdout", "結果可能受單次切分影響", "Repeated nested CV、bootstrap 信賴區間"],
  ["缺少異期與外部資料", "無法確認跨時間、產業或市場環境的穩定性", "時間切分、其他年度或外部企業資料驗證"],
  ["RUS／ADASYN 改變訓練分布", "可能犧牲健康樣本資訊或產生不自然合成樣本", "比較 class weight、threshold tuning 與校準"],
  ["CNN 對非時序特徵使用 kernel size=1", "符合教材輸入形式，但不代表財務特徵具有時間順序", "以較適合表格資料的模型作強基準"],
  ["未納入實際誤判成本", "無法直接決定最佳門檻或部署規則", "以盡調成本、漏判損失建立 cost-sensitive 評估"],
];

const processingRows = [
  ["缺失值清理版", "Original", "1,343", "45", "29.84:1", "348", "11"],
  ["缺失值清理版", "RUS 9:1", "403", "45", "8.96:1", "348", "11"],
  ["缺失值清理版", "ADASYN 9:1", "1,343", "149", "9.01:1", "348", "11"],
  ["完整資料版", "Original", "5,279", "176", "29.99:1", "1,364", "44"],
  ["完整資料版", "RUS 9:1", "1,584", "176", "9.00:1", "1,364", "44"],
  ["完整資料版", "ADASYN 9:1", "5,279", "587", "8.99:1", "1,364", "44"],
];

const thresholdRows = [
  ["缺失值清理版", "Original", "32", "0.8536", "32", "64", "0.8503", "44", "0.8568"],
  ["缺失值清理版", "RUS 9:1", "27", "0.8579", "27", "58", "0.8541", "39", "0.8532"],
  ["缺失值清理版", "ADASYN 9:1", "32", "0.8578", "32", "54", "0.8546", "36", "0.8556"],
  ["完整資料版", "Original", "37", "0.8512", "37", "69", "0.8515", "44", "0.8590"],
  ["完整資料版", "RUS 9:1", "33", "0.8539", "33", "61", "0.8507", "44", "0.8546"],
  ["完整資料版", "ADASYN 9:1", "37", "0.8513", "37", "66", "0.8550", "37", "0.8525"],
];

const lockedCv = [
  ["Original", "F1 優先", "CNN＋RF", "0.3132", "0.4412", "0.3616", "0.7784", "0.7405", "0.7590"],
  ["Original", "Recall 優先", "DNN＋MI", "0.3356", "0.3872", "0.3515", "0.7898", "0.8081", "0.7989"],
  ["RUS 9:1", "F1 優先", "DNN＋RF", "0.4319", "0.3900", "0.4080", "0.6591", "0.4957", "0.5659"],
  ["RUS 9:1", "Recall 優先", "CNN＋RF", "0.5065", "0.2785", "0.3583", "0.9432", "0.4499", "0.6092"],
  ["ADASYN 9:1", "F1 優先", "CNN＋MI", "0.5002", "0.3635", "0.4202", "0.6250", "0.4280", "0.5081"],
  ["ADASYN 9:1", "Recall 優先", "CNN＋MI", "0.5113", "0.3442", "0.4092", "0.7102", "0.5896", "0.6443"],
];

const aggregateModels = [
  ["缺失值清理版", "F1 優先", "0.2352", "0.3259", "0.3574", "0.2393", "0.3274", "0.3454"],
  ["缺失值清理版", "Recall 優先", "0.2389", "0.3370", "0.3648", "0.2371", "0.3223", "0.3388"],
  ["完整資料版", "F1 優先", "0.2703", "0.3642", "0.4066", "0.2926", "0.3703", "0.3728"],
  ["完整資料版", "Recall 優先", "0.2718", "0.3969", "0.4156", "0.2884", "0.3572", "0.3668"],
];

const aggregateFeatures = [
  ["缺失值清理版", "F1 優先", "0.2173", "0.3383", "0.3235", "0.3457", "0.2360", "0.3212", "0.3234", "0.3356"],
  ["缺失值清理版", "Recall 優先", "0.2247", "0.3407", "0.3358", "0.3531", "0.2325", "0.3191", "0.3123", "0.3337"],
  ["完整資料版", "F1 優先", "0.3289", "0.3550", "0.3574", "0.3468", "0.3269", "0.3571", "0.3588", "0.3383"],
  ["完整資料版", "Recall 優先", "0.3422", "0.3708", "0.3777", "0.3550", "0.3255", "0.3451", "0.3455", "0.3338"],
];

function ReportPageHeader({ eyebrow, title, meta }: { eyebrow: string; title: string; meta: string }) {
  return <header className={styles.pageHeader}><div><span className={styles.eyebrow}>{eyebrow}</span><h1>{title}</h1></div><div className={styles.pageMeta}><strong>企業破產風險預測</strong><span>{meta}</span></div></header>;
}

function ReportFooter({ page }: { page: number }) {
  return <footer className={styles.footer}><span>資料、模型與重要度僅提供風險篩選依據；不代表因果效果。</span><span>{String(page).padStart(2, "0")} / 10</span></footer>;
}

const candidates = [
  ["Original", "F1 優先", "CNN＋RF", "36.36%", "38.10%", "37.21%", "96.04%"],
  ["Original", "Recall 優先", "DNN＋MI", "50.00%", "51.16%", "50.57%", "96.85%"],
  ["RUS 9:1", "F1 優先", "DNN＋RF", "65.91%", "36.25%", "46.77%", "95.16%"],
  ["RUS 9:1", "Recall 優先", "CNN＋RF", "68.18%", "27.52%", "39.22%", "93.18%"],
  ["ADASYN 9:1", "F1 優先", "CNN＋MI", "59.09%", "32.50%", "41.94%", "94.72%"],
  ["ADASYN 9:1", "Recall 優先", "CNN＋MI", "61.36%", "36.49%", "45.76%", "95.31%"],
];

const averages = [
  { metric: "Recall", f1: 53.79, recall: 59.85, tone: "risk" },
  { metric: "Precision", f1: 35.62, recall: 38.39, tone: "signal" },
  { metric: "F1", f1: 41.97, recall: 45.18, tone: "signal" },
  { metric: "Accuracy", f1: 95.31, recall: 95.11, tone: "muted" },
];

export default function BankruptcyReport() {
  return (
    <main className={styles.report}>
      <article className={styles.page}>
        <header className={styles.masthead}>
          <div className={styles.identity}>
            <span className={styles.eyebrow}>FINANCIAL RISK ANALYTICS · COURSE PROJECT</span>
            <h1>企業破產風險預測</h1>
            <p>不平衡資料下的模型驗證與財務風險指標分析</p>
          </div>
          <div className={styles.author}>
            <strong>馬彥宸</strong>
            <span>財務金融 × 資料分析</span>
            <span>2026 年 8 月</span>
          </div>
        </header>

        <section className={styles.heroGrid}>
          <div className={styles.problemCard}>
            <span className={styles.label}>研究問題</span>
            <h2>高 Accuracy，<br />不代表抓得到高風險企業。</h2>
            <p>完整資料的破產／健康比例約為 1:30。模型若全部預測為健康，Accuracy 仍可接近 97%，卻抓不到需要進一步查核的公司。</p>
          </div>
          <div className={styles.imbalance}>
            <div className={styles.donut} aria-label="健康企業約 97%，破產企業約 3%">
              <div><strong>約 3%</strong><span>破產企業</span></div>
            </div>
            <div className={styles.imbalanceNote}>
              <b>類別不平衡</b>
              <span>健康企業約 97%</span>
              <span>破產企業約 3%</span>
            </div>
          </div>
        </section>

        <section className={styles.metricStrip}>
          <div><strong>6,819</strong><span>完整企業樣本</span></div>
          <div><strong>93</strong><span>候選財務變數</span></div>
          <div><strong>360</strong><span>CV 候選／資料版本</span></div>
          <div><strong>3×3×4</strong><span>模型 × 情境 × 特徵法</span></div>
        </section>

        <div className={styles.summaryGrid}>
          <section className={styles.summaryMain}>
            <div className={styles.sectionTitle}><span>01</span><h2>主要結論</h2></div>
            <div className={styles.findings}>
              <div><b>不要單看 Accuracy</b><p>多數類別會讓分數看起來很好；應一起檢查 Recall、Precision 與 F1。</p></div>
              <div><b>Recall 有明確代價</b><p>RUS／ADASYN 通常提高破產 Recall，也可能降低 Precision，增加後續人工查核量。</p></div>
              <div><b>重要指標集中</b><p>獲利持續性、負債依賴、資金成本、非本業收益與資本效率在不同方法中反覆出現。</p></div>
            </div>

            <div className={styles.sectionTitle}><span>02</span><h2>完整資料版 · Recall 優先規則</h2></div>
            <div className={styles.resultCards}>
              <div className={styles.primaryResult}><span>Test Recall</span><strong>59.85%</strong><small>三情境平均</small></div>
              <div><span>Precision</span><strong>38.39%</strong></div>
              <div><span>F1</span><strong>45.18%</strong></div>
              <div className={styles.mutedResult}><span>Accuracy</span><strong>95.11%</strong><small>受健康企業占比影響</small></div>
            </div>
          </section>

          <aside className={styles.summaryAside}>
            <section>
              <span className={styles.label}>驗證設計</span>
              <ol className={styles.pipeline}>
                <li><i>1</i><div><b>先切出 Test</b><span>Stratified 80/20</span></div></li>
                <li><i>2</i><div><b>處理限在 fold 內</b><span>抽樣、標準化、特徵選擇</span></div></li>
                <li><i>3</i><div><b>事前鎖定候選</b><span>F1 優先／Recall 優先</span></div></li>
                <li><i>4</i><div><b>Test 只開一次</b><span>最終泛化評估</span></div></li>
              </ol>
            </section>
            <section className={styles.boundary}>
              <span className={styles.label}>決策邊界</span>
              <p>模型可用於投資前或授信前的初步風險篩選，不能直接取代投資決策，也不代表因果效果。</p>
            </section>
          </aside>
        </div>

        <section className={styles.disclosure}>
          <b>製作揭露</b>
          <p>這是課堂個人專案。分析程式與報告整理有 AI 協助；我負責確認題目、決定驗證方式、檢查結果並說明限制。</p>
        </section>

        <footer className={styles.footer}>
          <span>作品頁：y3ccc.github.io/projects/bankruptcy-risk/</span>
          <span>01 / 10</span>
        </footer>
      </article>

      <article className={styles.page}>
        <ReportPageHeader eyebrow="02 · DATA & DECISION FRAME" title="先釐清資料版本" meta="資料來源與決策邊界" />
        <p className={styles.pageLead}>分析以課堂提供的企業破產資料為主，並對照 UCI 官方資料頁確認來源背景與公開授權。課堂加工版本與原始資料分開標示。</p>

        <section className={styles.majorSection}>
          <div className={styles.sectionTitle}><span>01</span><h2>兩個資料版本</h2><small>共同保留 93 項候選財務變數</small></div>
          <table className={styles.dataTable}>
            <thead><tr><th>資料版本</th><th>保留筆數</th><th>破產企業</th><th>候選特徵</th><th>Test 筆數</th><th>Test 破產</th></tr></thead>
            <tbody>{dataVersions.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </section>

        <section className={styles.sourceFrame}>
          <div className={styles.sectionTitle}><span>02</span><h2>來源與版本邊界</h2></div>
          <div className={styles.statementList}>
            <p><b>UCI 官方資料：</b>Taiwanese Bankruptcy Prediction，共 6,819 筆、95 項特徵，資料來自 1999–2009 年 Taiwan Economic Journal；破產定義依台灣證券交易所相關規範。</p>
            <p><b>缺失值來源：</b>UCI 官方頁面標示原始資料沒有缺失值，授權為 CC BY 4.0（DOI: 10.24432/C5004D）。本專案使用的課堂版本另含缺失值，因此只稱為「課堂提供的缺失版」，不推定缺失來自 UCI 原始檔。</p>
            <p><b>候選欄位：</b>依題目移除 2 個 flag 欄位與非特徵索引後，留下 93 項候選財務變數。課堂缺失版刪除含缺失值的列後，由 6,819 筆降至 1,736 筆。</p>
          </div>
        </section>

        <section className={styles.stabilityPanel}>
          <div>
            <span className={styles.label}>為什麼主要討論完整資料版</span>
            <h2>Test 正類由 11 家增加到 44 家</h2>
            <p>缺失值清理版每錯判 1 家，Recall 約變動 9.09 個百分點；完整資料版每家約影響 2.27 個百分點。缺失版用來完成指定題目，模型與 KPI 的主要討論採完整資料版。</p>
          </div>
          <div className={styles.stabilityNumbers}>
            <div><strong>11</strong><span>缺失版 Test 破產</span><small>每家約 9.09 個百分點</small></div>
            <div><strong>44</strong><span>完整版 Test 破產</span><small>每家約 2.27 個百分點</small></div>
          </div>
        </section>

        <section className={styles.decisionBoundaryWide}>
          <span className={styles.label}>決策邊界</span>
          <p>資料沒有交易價格、產業景氣、公司治理、技術競爭力或管理團隊品質。模型結果只能做風險篩選，不能單獨回答「是否值得投資」。</p>
        </section>
        <ReportFooter page={2} />
      </article>

      <article className={styles.page}>
        <ReportPageHeader eyebrow="03 · RESEARCH DESIGN" title="研究設計與驗證流程" meta="untouched test · 5-fold CV" />
        <p className={styles.pageLead}>課堂指定模型與特徵方法；我另將測試集獨立保留，不讓它參與抽樣、標準化、特徵選擇與尋參。</p>

        <section className={styles.scopeCompare}>
          <div>
            <span className={styles.label}>課堂題目指定</span>
            <p>移除含 flag 欄位；PCA 保留 85% 變異；MI 數量對齊 PCA；RF／XGB 累積 85% 重要度；比較 SVM、DNN、CNN；建立 Original、RUS、ADASYN 三種訓練情境；採 5-fold CV 並報告 Accuracy、Recall、Precision、F1。</p>
          </div>
          <div>
            <span className={styles.label}>我自行加入</span>
            <p>共同 untouched test；所有抽樣、標準化與特徵選擇只在 training fold 內 fit；每個資料版本建立 360 組 CV 候選；在開啟 Test 前鎖定 F1 優先與 Recall 優先規則；另做完整資料版本、泛化落差與因果邊界分析。</p>
          </div>
        </section>

        <section className={styles.majorSection}>
          <div className={styles.sectionTitle}><span>01</span><h2>兩階段公平驗證流程</h2><small>Test 的角色</small></div>
          <div className={styles.processFlow}>
            {designSteps.map(([step, action, test]) => <div key={step}><i>{step}</i><b>{action}</b><span>{test}</span></div>)}
          </div>
        </section>

        <section className={styles.designMath}>
          <div><span className={styles.label}>每個資料版本的 CV 候選</span><strong>3 × 3 × 4 × 10 ＝ 360</strong></div>
          <dl><div><dt>模型</dt><dd>3</dd></div><div><dt>資料情境</dt><dd>3</dd></div><div><dt>特徵方法</dt><dd>4</dd></div><div><dt>參數候選</dt><dd>10</dd></div></dl>
        </section>

        <section className={styles.checkPanel}>
          <span className={styles.label}>防資料洩漏檢查</span>
          <div>
            <p>不在切分前使用全資料標準化，也不以全資料挑選特徵。</p>
            <p>RUS／ADASYN 只改變模型 fit 時的 training fold；validation fold 與 Test 保持原分布。</p>
            <p>不看 Test 結果回頭換模型、調參數或改選模規則。</p>
          </div>
        </section>
        <ReportFooter page={3} />
      </article>

      <article className={styles.page}>
        <header className={styles.pageHeader}>
          <div><span className={styles.eyebrow}>04 · MODEL EVALUATION · HOLDOUT RESULTS</span><h1>模型結果與指標取捨</h1></div>
          <div className={styles.pageMeta}><strong>完整資料版</strong><span>共同 untouched test</span></div>
        </header>

        <section className={styles.readingGuide}>
          <div><span className={styles.label}>這頁回答什麼</span><p>在 Test 開啟前鎖定六筆候選後，哪些組合較能抓到破產企業？提高 Recall 時，需要接受多少誤報？</p></div>
          <div className={styles.ruleBox}><b>判讀規則</b><span>Recall 看漏判</span><span>Precision 看誤報</span><span>F1 看平衡</span></div>
        </section>

        <section className={styles.candidateSection}>
          <div className={styles.sectionTitle}><span>01</span><h2>六筆事前鎖定候選</h2><small>Test 開啟後不回頭換模型</small></div>
          <table className={styles.candidateTable}>
            <thead><tr><th>情境</th><th>規則</th><th>組合</th><th>Recall</th><th>Precision</th><th>F1</th><th>Accuracy</th></tr></thead>
            <tbody>{candidates.map((row, i) => <tr className={i === 3 ? styles.recallHigh : i === 1 ? styles.f1High : ""} key={`${row[0]}-${row[1]}`}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
          </table>
          <div className={styles.tableLegend}><span><i className={styles.riskDot}></i>最高 Recall：68.18%</span><span><i className={styles.signalDot}></i>最高 F1：50.57%</span></div>
        </section>

        <section className={styles.comparisonSection}>
          <div className={styles.sectionTitle}><span>02</span><h2>三情境平均比較</h2><small>完整資料版</small></div>
          <div className={styles.comparisonBody}>
            <div className={styles.barChart}>
              <div className={styles.chartLegend}><span><i></i>F1 優先</span><span><i></i>Recall 優先</span></div>
              {averages.map((row) => (
                <div className={`${styles.barRow} ${styles[row.tone]}`} key={row.metric}>
                  <b>{row.metric}</b>
                  <div className={styles.bars}>
                    <div><span style={{ width: `${row.f1}%` }}></span><em>{row.f1.toFixed(2)}%</em></div>
                    <div><span style={{ width: `${row.recall}%` }}></span><em>{row.recall.toFixed(2)}%</em></div>
                  </div>
                </div>
              ))}
              <div className={styles.axis}><span>0</span><span>25</span><span>50</span><span>75</span><span>100%</span></div>
            </div>
            <div className={styles.keyFinding}>
              <span className={styles.label}>本次 holdout</span>
              <strong>Recall 優先規則<br />沒有犧牲平均 F1。</strong>
              <p>平均 Recall 由 53.79% 增至 59.85%；Precision 由 35.62% 增至 38.39%；F1 由 41.97% 增至 45.18%。</p>
            </div>
          </div>
        </section>

        <section className={styles.tradeoffGrid}>
          <div className={styles.tradeoffCard}>
            <span className={styles.label}>最高 Recall 的代價</span>
            <div className={styles.tradeoffNumbers}><strong>68.18%</strong><i>Recall</i><b>27.52%</b><i>Precision</i></div>
            <p>RUS 9:1／Recall 優先抓到最多破產企業，但 Precision 最低，代表要接受更多誤報。</p>
          </div>
          <div className={styles.decisionCard}>
            <span className={styles.label}>實務判斷</span>
            <p><b>低成本前端篩選：</b>可偏重 Recall。</p>
            <p><b>昂貴盡職調查：</b>需提高 Precision、調整分類門檻，並納入人工審查成本。</p>
          </div>
          <div className={styles.limitCard}>
            <span className={styles.label}>限制</span>
            <p>Train 指標普遍高於 Test，仍有泛化落差；單一 holdout 結果不能當成部署績效。</p>
          </div>
        </section>

        <ReportFooter page={4} />
      </article>

      <article className={styles.page}>
        <ReportPageHeader eyebrow="05 · STABLE KPIs" title="模型重要度與人工查核方向" meta="完整資料版 · 最高入選 9 次" />
        <p className={styles.pageLead}>以完整資料版為主，統計 MI、RF、XGB 在 Original、RUS、ADASYN 三情境的重複入選。PCA 只作方法涵蓋補充，不把主成分誤稱為單一 KPI。</p>

        <section className={styles.majorSection}>
          <div className={styles.sectionTitle}><span>01</span><h2>八項穩定 KPI</h2><small>入選次數／9 · 涵蓋方法／4</small></div>
          <table className={`${styles.dataTable} ${styles.kpiTable}`}>
            <thead><tr><th>穩定 KPI</th><th>入選</th><th>方法</th><th>可能的管理查核方向</th></tr></thead>
            <tbody>{stableKpis.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </section>

        <section className={styles.majorSection}>
          <div className={styles.sectionTitle}><span>02</span><h2>四個可用於人工查核的面向</h2></div>
          <div className={styles.themeGrid}>
            <div><b>獲利持續性與效率</b><p>分開檢視持續性獲利與一次性收益，並以資產、權益與投入資本為基準比較。單期比率不足以定論，應結合同業與時間趨勢。</p></div>
            <div><b>負債依賴與資金成本</b><p>槓桿會放大利率與營收波動對現金流的影響；需要補查債務到期結構、利息保障、契約條款與壓力測試。</p></div>
            <div><b>非本業收益與盈餘品質</b><p>非本業收入可能暫時支撐獲利，也可能掩蓋核心營運脆弱；需要拆分處分利益、投資收益與經常性營運結果。</p></div>
            <div><b>從訊號走向投資評估</b><p>風險指標可用來安排查核順序。完整投資評估仍要補上市場規模、競爭優勢、技術、治理、估值、交易條件與退出情境。</p></div>
          </div>
        </section>

        <section className={styles.causalBoundary}>
          <span className={styles.label}>因果性邊界</span>
          <p>MI、RF／XGB 重要度與 PCA loading 可以說明資料中的關聯與模型使用情形，不能證明改變某一 KPI 必然造成或避免破產。以上管理行動是待查核的機制假說，不是已識別的因果效果。</p>
        </section>
        <ReportFooter page={5} />
      </article>

      <article className={styles.page}>
        <ReportPageHeader eyebrow="06 · LIMITS & NEXT STUDY" title="研究限制與後續方向" meta="先補資料與驗證，再談模型複雜度" />
        <p className={styles.pageLead}>若要進一步作為研究或實務工具，應先補強資料與驗證，再評估是否需要增加模型複雜度。</p>

        <section className={styles.majorSection}>
          <div className={styles.sectionTitle}><span>01</span><h2>限制、影響與補強方式</h2></div>
          <table className={`${styles.dataTable} ${styles.limitTable}`}>
            <thead><tr><th>限制</th><th>對結果的影響</th><th>可行補強</th></tr></thead>
            <tbody>{limits.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </section>

        <section className={styles.majorSection}>
          <div className={styles.sectionTitle}><span>02</span><h2>可延伸的研究題目</h2></div>
          <div className={styles.nextStudyGrid}>
            <div><i>01</i><b>建立異期驗證</b><p>以前期年度訓練、後期年度測試，觀察景氣循環與制度變化下的穩定性。</p></div>
            <div><i>02</i><b>加入可解釋性與校準</b><p>檢查個別企業的風險貢獻、預測機率校準與分類門檻，不把重要度當成因果。</p></div>
            <div><i>03</i><b>建立產業分層模型</b><p>比較製造、零售、科技等產業是否需要不同財務基準與警戒門檻。</p></div>
            <div><i>04</i><b>轉成盡調清單</b><p>將風險訊號連到需補查的財報附註、債務條款、現金流、治理與產業問題。</p></div>
          </div>
        </section>

        <section className={styles.completionBox}>
          <span className={styles.label}>完成範圍</span>
          <p><b>已完成：</b>兩個資料版本、四種特徵方法、三種模型、三種資料情境、每個資料版本 360 筆 CV 候選、事前選模規則、Train／Test 評估、穩定 KPI 與限制分析。</p>
          <p><b>尚未完成：</b>外部驗證、部署模型、實際投資績效與因果識別。</p>
        </section>

        <section className={styles.referencesCompact}>
          <b>參考與查核</b>
          <span>UCI Machine Learning Repository｜Taiwanese Bankruptcy Prediction：archive.ics.uci.edu/dataset/572/taiwanese+bankruptcy+pre</span>
          <span>Dataset DOI：doi.org/10.24432/C5004D</span>
          <span>課堂原始作業版、候選結果與中間檔案由作者保留，可於面試時提供查核。</span>
        </section>
        <ReportFooter page={6} />
      </article>

      <article className={styles.page}>
        <ReportPageHeader eyebrow="APPENDIX A · ASSIGNMENT & SCOPE" title="課堂要求與完成範圍" meta="方法來源與工作分界" />
        <p className={styles.pageLead}>附錄保留題目原文與工作分界，方便讀者查核報告中的方法從哪裡來。</p>

        <section className={styles.assignmentQuote}>
          <span className={styles.label}>題目原文</span>
          <p>Considering the dataset, bankruptcy (response is Bankrupt), remove data samples with missing values and apply PCA (cumulative 85% variances) and MI (the same number of features as PCA) to select important indicators (remove all columns containing &apos;flag&apos;). Then, apply RF and XGB to identify the key performance indicators (cumulative 85% importance). Managerial insights are required to explain causality. Based on these KPIs, compare the performances by using DNN, CNN, and SVM in terms of recall, precision, F measure, and accuracy (positive means bankrupt=1, considering a 5-fold cross validation). Finally, apply RUS and ADASYN to select only 30% healthy firms and mixed with all bankruptcy samples to redo the problem and compare its performance to the original dataset.</p>
        </section>

        <section className={styles.scopeCompareLarge}>
          <div>
            <span className={styles.label}>課堂指定</span>
            <ul><li>移除含 flag 欄位。</li><li>PCA 保留 85% 變異；MI 數量對齊 PCA。</li><li>RF／XGB 累積 85% 重要度。</li><li>比較 SVM、DNN、CNN。</li><li>Original、RUS、ADASYN 三種情境。</li><li>5-fold CV 與 Accuracy、Recall、Precision、F1。</li></ul>
          </div>
          <div>
            <span className={styles.label}>另外加入</span>
            <ul><li>共同 untouched test。</li><li>抽樣、標準化與特徵選擇只在 training fold 內 fit。</li><li>每個資料版本保留 360 組 CV 候選。</li><li>開啟 Test 前先確定 F1 優先與 Recall 優先規則。</li><li>完整資料版與限制分析。</li></ul>
          </div>
        </section>

        <section className={styles.productionNote}>
          <span className={styles.label}>製作方式</span>
          <p>分析程式與報告整理有 AI 協助。我負責確認題目、決定比較與驗收方式、檢查輸出，並保留尚未完成的外部驗證與因果識別限制。這份報告不代表我能不看紀錄、從零獨立重做全部程式。</p>
        </section>
        <ReportFooter page={7} />
      </article>

      <article className={styles.page}>
        <ReportPageHeader eyebrow="APPENDIX B · DATA PROCESSING" title="資料處理與特徵選擇明細" meta="兩個資料版本 · 三種訓練情境" />
        <p className={styles.pageLead}>兩個資料版本共用同一套切分與驗證原則；Test 在三種訓練情境中保持不變。</p>

        <section className={styles.majorSection}>
          <div className={styles.sectionTitle}><span>01</span><h2>訓練資料分布</h2></div>
          <table className={`${styles.dataTable} ${styles.denseTable}`}>
            <thead><tr><th>資料版本</th><th>情境</th><th>Train 健康</th><th>Train 破產</th><th>健康：破產</th><th>共同 Test</th><th>Test 破產</th></tr></thead>
            <tbody>{processingRows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </section>

        <section className={styles.majorSection}>
          <div className={styles.sectionTitle}><span>02</span><h2>85% 門檻與特徵數</h2></div>
          <table className={`${styles.dataTable} ${styles.ultraDenseTable}`}>
            <thead><tr><th>資料版本</th><th>情境</th><th>PCA 數</th><th>PCA 累積</th><th>MI 數</th><th>RF 數</th><th>RF 累積</th><th>XGB 數</th><th>XGB 累積</th></tr></thead>
            <tbody>{thresholdRows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </section>

        <section className={styles.explainBox}>
          <span className={styles.label}>如何解讀</span>
          <p>PCA 輸入模型的是主成分，不是原始 KPI 子集。</p>
          <p>MI、RF、XGB 在每個 CV training fold 重新 fit，validation fold 不參與該折的特徵選取。</p>
          <p>缺失值清理版刪除 5,083 列，結果可能受到非隨機缺失與正類樣本減少影響。</p>
        </section>
        <ReportFooter page={8} />
      </article>

      <article className={styles.page}>
        <ReportPageHeader eyebrow="APPENDIX C · LOCKED CANDIDATES" title="事前鎖定候選的完整指標" meta="CV 選候選 · Test 最後開啟" />
        <p className={styles.pageLead}>CV 用來選候選；Train 為未抽樣完整 training split 的 in-sample 指標；Test 只在候選鎖定後開啟。</p>

        <section className={styles.majorSection}>
          <div className={styles.sectionTitle}><span>01</span><h2>CV 與 Train 指標</h2></div>
          <table className={`${styles.dataTable} ${styles.ultraDenseTable}`}>
            <thead><tr><th>情境</th><th>規則</th><th>組合</th><th>CV R</th><th>CV P</th><th>CV F1</th><th>Train R</th><th>Train P</th><th>Train F1</th></tr></thead>
            <tbody>{lockedCv.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </section>

        <section className={styles.majorSection}>
          <div className={styles.sectionTitle}><span>02</span><h2>同一批候選的 Test 結果</h2></div>
          <table className={`${styles.dataTable} ${styles.denseTable}`}>
            <thead><tr><th>情境</th><th>規則</th><th>組合</th><th>Recall</th><th>Precision</th><th>F1</th><th>Accuracy</th></tr></thead>
            <tbody>{candidates.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </section>

        <section className={styles.limitStatement}>
          <span className={styles.label}>指標限制</span>
          <p>Train 高於 Test，表示仍有泛化落差。這些結果來自單一 holdout，不能當作部署績效；若要進一步比較，需加入 repeated nested CV、異期或外部資料驗證。</p>
        </section>
        <ReportFooter page={9} />
      </article>

      <article className={styles.page}>
        <ReportPageHeader eyebrow="APPENDIX D · AGGREGATE CV RESULTS" title="模型與特徵方法的平均結果" meta="只使用 5-fold validation 平均" />
        <p className={styles.pageLead}>以下只使用 5-fold validation 平均，不用 Test 回頭排名。</p>

        <section className={styles.majorSection}>
          <div className={styles.sectionTitle}><span>01</span><h2>模型平均 CV Recall／F1</h2></div>
          <table className={`${styles.dataTable} ${styles.denseTable}`}>
            <thead><tr><th>資料版本</th><th>規則</th><th>SVM R</th><th>DNN R</th><th>CNN R</th><th>SVM F1</th><th>DNN F1</th><th>CNN F1</th></tr></thead>
            <tbody>{aggregateModels.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </section>

        <section className={styles.majorSection}>
          <div className={styles.sectionTitle}><span>02</span><h2>特徵方法平均 CV Recall／F1</h2></div>
          <table className={`${styles.dataTable} ${styles.ultraDenseTable}`}>
            <thead><tr><th>資料版本</th><th>規則</th><th>PCA R</th><th>MI R</th><th>RF R</th><th>XGB R</th><th>PCA F1</th><th>MI F1</th><th>RF F1</th><th>XGB F1</th></tr></thead>
            <tbody>{aggregateFeatures.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </section>

        <section className={styles.aggregateRead}>
          <p>DNN 與 CNN 的平均 Recall 高於 SVM，但沒有一種模型在所有指標與情境固定勝出。</p>
          <p>PCA 在缺失值清理版落後，完整資料版的差距縮小；樣本數可能是影響結果的重要因素。</p>
        </section>

        <section className={styles.sourceCard}>
          <span className={styles.label}>來源</span>
          <p>UCI Machine Learning Repository｜Taiwanese Bankruptcy Prediction</p>
          <p>archive.ics.uci.edu/dataset/572/taiwanese+bankruptcy+pre</p>
          <p>Dataset DOI：doi.org/10.24432/C5004D</p>
        </section>
        <ReportFooter page={10} />
      </article>
    </main>
  );
}
