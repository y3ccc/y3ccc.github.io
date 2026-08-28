import type { Metadata } from "next";
import type { ReactNode } from "react";
import styles from "./report.module.css";

export const metadata: Metadata = {
  title: "鴻海投資決策研究｜馬彥宸",
  robots: { index: false, follow: false },
};

const eps = [7.34, 10.05, 10.21, 10.25, 11.01, 13.61];
const years = ["2020A", "2021A", "2022A", "2023A", "2024A", "2025A"];

function Header({ eyebrow, title, right }: { eyebrow: string; title: string; right?: string }) {
  return <header className={styles.pageHeader}><div><span className={styles.eyebrow}>{eyebrow}</span><h1>{title}</h1></div><span className={styles.headerRight}>{right ?? "鴻海（2317）"}</span></header>;
}

function Footer({ page, children }: { page: number; children?: ReactNode }) {
  return <footer className={styles.footer}><span>{children ?? "回溯案例研究，不構成目前投資建議。"}</span><span>{String(page).padStart(2, "0")} / 10</span></footer>;
}

function Source({ children }: { children: ReactNode }) {
  return <div className={styles.source}>{children}</div>;
}

function Page({ page, children, className = "" }: { page: number; children: ReactNode; className?: string }) {
  return <article className={`${styles.page} ${className}`}>{children}<Footer page={page} /></article>;
}

function EpsChart() {
  const points = eps.map((value, index) => `${42 + index * 86},${175 - (value - 7) * 20}`).join(" ");
  return <div className={styles.chartWrap}>
    <svg viewBox="0 0 500 205" role="img" aria-label="2020 至 2025 年 EPS 走勢">
      {[8, 10, 12, 14].map((value) => <g key={value}><line x1="38" x2="478" y1={175 - (value - 7) * 20} y2={175 - (value - 7) * 20} className={styles.gridLine}/><text x="30" y={179 - (value - 7) * 20} textAnchor="end">{value}</text></g>)}
      <polyline points={points} className={styles.epsLine}/>
      {eps.map((value, index) => <g key={years[index]}><circle cx={42 + index * 86} cy={175 - (value - 7) * 20} r="4"/><text x={42 + index * 86} y={163 - (value - 7) * 20} textAnchor="middle" className={styles.valueLabel}>{value.toFixed(2)}</text><text x={42 + index * 86} y="190" textAnchor="middle">{years[index]}</text></g>)}
    </svg>
  </div>;
}

export default function HonHaiReport() {
  return <main className={styles.report}>
    <div className={styles.webBar}>
      <div><strong>鴻海（2317）投資決策研究</strong><span>10 頁 · 回溯案例研究</span></div>
      <a href="/reports/ma-yen-chen-hon-hai-investment-case.pdf" target="_blank" rel="noreferrer">下載 PDF</a>
    </div>
    <Page page={1}>
      <header className={styles.masthead}>
        <div><span className={styles.eyebrow}>RETROSPECTIVE EQUITY RESEARCH · 2021 DECISION</span><h1>鴻海精密（2317）</h1><p>市場還在用蘋果代工廠定價，我買的是伺服器基礎與電動車上限</p></div>
        <div className={styles.author}><strong>馬彥宸</strong><span>產業分析作品</span><span>2026-08-23 重建</span></div>
      </header>
      <section className={styles.verdict}>
        <div className={styles.rating}><span>2021 重建判斷</span><strong>明顯低估</strong><small>回溯案例，不是現在的投資建議</small></div>
        <dl><div><dt>第一筆買進</dt><dd>120 多元</dd></div><div><dt>重建倉買回價</dt><dd>約 107 元*</dd></div><div><dt>原始目標</dt><dd>250–300 元</dd></div><div><dt>最終出場</dt><dd>約 168 元</dd></div></dl>
      </section>
      <div className={styles.columns}>
        <div className={styles.mainColumn}>
          <section><h2>投資摘要</h2><p className={styles.lead}>2021 年上半年，我認為鴻海的股價仍被過去長期落在 60～90 元的印象綁住。2020 年底每股淨值已有 93.58 元，公司持續獲利，也把約一半盈餘配給股東；伺服器已有營收基礎，電動車則讓公司的長期上限高於傳統代工。</p>
            <div className={styles.theses}><div><b>01　下檔</b><p>股價接近淨值，公司仍穩定獲利。下檔並非不會跌，而是估值沒有包含多少成長。</p></div><div><b>02　獲利基礎</b><p>雲端網路與伺服器不是後來才出現的題材；鴻海當時已有大規模製造能力。</p></div><div><b>03　上行情境</b><p>MIH 與早期合作案尚未貢獻獲利，但公司正把供應鏈與製造能力搬到電動車。</p></div></div>
          </section>
          <section><div className={styles.sectionTitle}><h2>2021 年市場可能漏看的事</h2><span>預期差</span></div><table><thead><tr><th>市場常見看法</th><th>我的判斷</th><th>驗證指標</th></tr></thead><tbody><tr><td>成熟的蘋果代工廠</td><td>伺服器已是第二個獲利基礎</td><td>雲端網路營收與產品比重</td></tr><tr><td>股價長期只值舊區間</td><td>停止配股後，保留盈餘會累積淨值</td><td>EPS、ROE、每股淨值</td></tr><tr><td>電動車只是題材</td><td>尚未賺錢，但能提高估值上限</td><td>量產、客戶、毛利</td></tr></tbody></table></section>
        </div>
        <aside className={styles.sideColumn}>
          <section className={styles.panel}><h3>財務快照</h3><div className={styles.epsGrid}>{years.map((year, i) => <div key={year}><span>{year}</span><strong>{eps[i].toFixed(2)}</strong></div>)}</div><p className={styles.caption}>EPS／元；年份後的 A 代表實際值（Actual），非預估。2021–2025 年複合成長率約 7.9%。</p></section>
          <section className={styles.panel}><h3>判斷的限制</h3><ul><li>250～300 元是重建情境。</li><li>電動車在 2021 年尚未貢獻獲利。</li></ul></section>
          <section className={styles.panel}><h3>資料狀態</h3><p><b>公司財務：</b>年報可查</p><p><b>股價資料：</b>證交所可查</p><p><b>個人交易：</b>回憶重建，待券商明細</p></section>
        </aside>
      </div>
      <section className={styles.firstPageBottom}><div><span>研究問題 01</span><b>為什麼低估？</b><p>淨值與穩定獲利提供下檔，市場仍沿用舊代工區間。</p></div><div><span>研究問題 02</span><b>什麼能重評？</b><p>伺服器成長、資本報酬改善，以及電動車開始量產。</p></div><div><span>研究問題 03</span><b>為什麼出場？</b><p>基本面未轉壞；我把資金轉往自己認為上限更高的標的。</p></div></section>
      <Source>* 重新建倉的買回價，不能直接視為全期間成本。</Source>
    </Page>

    <Page page={2}>
      <Header eyebrow="ORIGINAL THESIS" title="先看下檔，再看公司能變成什麼" />
      <section className={styles.introBand}><strong>2021 年的安全邊際</strong><p>約 120 元的買價相對每股淨值約 94 元，多付約 26 元。2021 全年 EPS 後來公布為 10.05 元；若這個獲利水準維持三年，累積 30.15 元，就足以覆蓋差額。這是持有安全墊，250～300 元則是我當時預期的長期上行情境。</p></section>
      <div className={styles.fourCards}>
        <div><span>資產</span><b>BVPS 93.58 元</b><p>2020 年底每股淨值接近當時股價，市場沒有給多少成長溢價。</p></div>
        <div><span>獲利</span><b>EPS 7.34 元</b><p>公司不是靠題材存活；即使成長有限，本業仍有獲利。</p></div>
        <div><span>分配</span><b>現金股利 4 元</b><p>部分盈餘回到股東，未分配部分留在公司繼續運用。</p></div>
        <div><span>轉型</span><b>伺服器＋電動車</b><p>伺服器提供基礎，電動車讓長期情境不必停在舊代工估值。</p></div>
      </div>
      <section className={styles.valueBridge}><div><span>第一筆買價</span><strong>約 120</strong></div><i>−</i><div><span>2021 H1 淨值</span><strong>94.02</strong></div><i>＝</i><div><span>買價差額</span><strong>約 26</strong></div><i>＜</i><div className={styles.bridgeTotal}><span>10.05 × 3 年</span><strong>30.15</strong></div></section>
      <div className={styles.twoColumns}>
        <section><h2>安全墊和目標價是兩件事</h2><p>三年累積盈餘回答的是「為什麼敢等」；250～300 元回答的是「轉型成功後可能值多少」。我當時有預期上行情境，但沒有預設多久會走到。</p><p>10.05 元是 2021 全年公布後的驗證基準，不是假裝上半年買進時已經知道答案。</p></section>
        <section className={styles.warning}><h2>保留盈餘不會自動變成股價</h2><ul><li>再投資報酬低於資本成本，淨值增加也可能沒有價值。</li><li>減損、虧損或錯誤併購會吃掉累積成果。</li><li>若 EPS 沒跟著淨值成長，ROE 會下降。</li></ul></section>
      </div>
      <section className={styles.evidenceTable}><div className={styles.sectionTitle}><h2>原始論點要靠什麼驗證</h2><span>不是股價上漲就算對</span></div><table><thead><tr><th>論點</th><th>持續追蹤</th><th>失效訊號</th></tr></thead><tbody><tr><td>資產提供下檔</td><td>BVPS、減損、負債與現金流</td><td>帳面資產無法產生報酬</td></tr><tr><td>獲利可以累積</td><td>EPS、ROE、自由現金流</td><td>淨值增加但 EPS 停滯</td></tr><tr><td>股利回到股東</td><td>配發率與配息來源</td><td>借款配息或本業現金流惡化</td></tr><tr><td>轉型提高上限</td><td>產品比重、客戶、量產與毛利</td><td>合作長期停在公告階段</td></tr></tbody></table></section>
      <Source><b>來源：</b>鴻海 2021 上半年財報及 2021 年報。2021 H1 每股淨值約 94.02 元；2021 全年 EPS 10.05 元。</Source>
    </Page>

    <Page page={3}>
      <Header eyebrow="INDUSTRY LENS · SERVER" title="伺服器不是後來才補上的故事" />
      <section className={styles.splitHero}><div><span>2021 年的判斷</span><strong>雲端需求會繼續增加</strong><p>鴻海已有伺服器、網路設備與資料中心相關製造能力。我沒有預測生成式 AI；我看的是這塊業務能成為消費電子以外的獲利來源。</p></div><div><span>後來的驗證</span><strong>2021 全年伺服器營收達兆元</strong><p>這是年度結束後才知道的結果，只能驗證公司原本已有規模，不能倒回去當成買進前已知數字。</p></div></section>
      <section><div className={styles.sectionTitle}><h2>鴻海在伺服器價值鏈的位置</h2><span>不是只看出貨量</span></div><div className={styles.chain}><div><b>上游</b><span>晶片、記憶體、零組件</span></div><i>→</i><div className={styles.active}><b>鴻海</b><span>設計協作、組裝、系統整合、全球產能</span></div><i>→</i><div><b>客戶</b><span>品牌商、雲端服務商、資料中心</span></div></div></section>
      <div className={styles.twoColumns}>
        <section><h2>我看中的條件</h2><table><tbody><tr><th>規模</th><td>大量製造與採購能力能支撐大型客戶。</td></tr><tr><th>全球產能</th><td>客戶可在不同區域配置供應鏈。</td></tr><tr><th>共同開發</th><td>不只接單組裝，也參與高階產品導入。</td></tr><tr><th>現金流</th><td>既有 ICT 業務可以支撐新事業投資。</td></tr></tbody></table></section>
        <section><h2>不能忽略的風險</h2><table><tbody><tr><th>毛利</th><td>高單價不代表高毛利，材料成本也會同步增加。</td></tr><tr><th>客戶</th><td>大型客戶議價能力強，供應商未必能留下全部價值。</td></tr><tr><th>資本</th><td>產能與先進設備需要持續投入。</td></tr><tr><th>週期</th><td>雲端資本支出可能延後或集中。</td></tr></tbody></table></section>
      </div>
      <section className={styles.comparable}><h2>2021 年同業估值提供的是下限，不是答案</h2><div><span>和碩<br/><b>8.3×</b></span><span>仁寶<br/><b>13.9×</b></span><span>鴻海<br/><b>14.9×</b></span><span>廣達<br/><b>15.8×</b></span></div><p>若要超過傳統 ODM 區間，必須看到 EPS、產品組合或資本報酬改善。</p></section>
      <Source><b>來源：</b>鴻海 2021 年報；臺灣證券交易所 2021/02/23 個股本益比。</Source>
    </Page>

    <Page page={4}>
      <Header eyebrow="INDUSTRY LENS · ELECTRIC VEHICLE" title="電動車打開上限，但當時還沒賺錢" />
      <p className={styles.leadLarge}>我想的是，鴻海能不能把原本的設計、供應鏈與大量製造能力搬到電動車，替不同品牌做平台、零組件與整車製造。</p>
      <section className={styles.timeline}>
        <div><time>2019/11</time><b>提出 3+3 方向</b><p>電動車不是臨時題材。</p></div>
        <div><time>2020/10</time><b>MIH 開放平台</b><p>嘗試降低新車開發門檻。</p></div>
        <div><time>2020/12</time><b>逾 200 家響應</b><p>有早期參與，不等於訂單。</p></div>
        <div><time>2021/02</time><b>Fisker MOU</b><p>委託開發與製造開始找客戶。</p></div>
        <div><time>2021/03</time><b>日本電產合作</b><p>補足動力系統能力。</p></div>
      </section>
      <div className={styles.businessModel}>
        <div><span>平台</span><strong>MIH</strong><p>共用底盤、軟硬體介面與合作夥伴。</p></div><i>＋</i><div><span>零組件</span><strong>三電系統</strong><p>電池、馬達、電控等關鍵系統。</p></div><i>＋</i><div><span>製造</span><strong>CDMS</strong><p>從設計協作走到整車量產。</p></div>
      </div>
      <div className={styles.twoColumns}>
        <section className={styles.pro}><h2>為什麼值得放進上行情境</h2><ul><li>汽車供應鏈正重新分工，新品牌需要量產夥伴。</li><li>鴻海原有採購與製造經驗可以移轉。</li><li>平台模式若成立，客戶不必從零建立供應鏈。</li></ul></section>
        <section className={styles.warning}><h2>為什麼不能先算進獲利</h2><ul><li>合作備忘錄可能取消或延期。</li><li>整車量產需要時間與資本。</li><li>營收規模不等於鴻海能保留的利潤。</li><li>市場規模乘市占率會高估可得價值。</li></ul></section>
      </div>
      <Source><b>來源：</b>鴻海 MIH 發表（2020/10）、Fisker 合作（2021/02）、日本電產合作（2021/03）。</Source>
    </Page>

    <Page page={5}>
      <Header eyebrow="VALUATION RECONSTRUCTION" title="250～300 元怎麼算出來" />
      <section className={styles.formulaHero}><div><span>公式</span><strong>目標價 ＝ 預估 EPS × 合理本益比</strong></div><div className={styles.equation}><b>12.5～15 元</b><i>×</i><b>20 倍</b><i>＝</i><em>250～300 元</em></div></section>
      <div className={styles.formulaColumns}>
        <section className={styles.formulaCard}><span className={styles.step}>01</span><h2>EPS 為什麼用 12.5～15 元</h2><p>這要求伺服器帶動獲利，公司也不能只靠增加資本維持同樣 EPS。2025 年 EPS 後來走到 13.61 元，但這是事後驗證。</p><div className={styles.calc}><span>EPS CAGR = (13.61 ÷ 10.05)^(1 ÷ 4) − 1</span><strong>＝ 7.9%</strong><small>2021A → 2025A，四個年度區間</small></div></section>
        <section className={styles.formulaCard}><span className={styles.step}>02</span><h2>20 倍本益比代表什麼</h2><p>假設市場開始把鴻海視為仍在成長的大型科技公司。只要獲利不成長、ROE 下滑或轉型沒有產生利潤，20 倍就站不住腳。</p><div className={styles.calc}><span>首次買進 P/B ≈ 120 ÷ 93.58</span><strong>＝ 約 1.28 倍</strong><small>以 2020 年底 BVPS 作接近值</small></div></section>
      </div>
      <section className={styles.valuationSection}><div><div className={styles.sectionTitle}><h2>本益比敏感度</h2><span>每股價值／元</span></div><table className={styles.centerTable}><thead><tr><th>EPS \ P/E</th><th>10×</th><th>15×</th><th>20×</th></tr></thead><tbody><tr><th>10.0 元</th><td>100</td><td>150</td><td>200</td></tr><tr><th>12.5 元</th><td>125</td><td>187.5</td><td className={styles.hit}>250</td></tr><tr><th>15.0 元</th><td>150</td><td>225</td><td className={styles.hit}>300</td></tr></tbody></table></div><div><div className={styles.sectionTitle}><h2>三種情境</h2><span>2021 重建</span></div><table className={styles.centerTable}><thead><tr><th>情境</th><th>EPS</th><th>P/E</th><th>價值</th></tr></thead><tbody><tr><th>下行</th><td>10</td><td>10–12×</td><td>100–120</td></tr><tr><th>進行</th><td>11–13</td><td>15–18×</td><td>165–234</td></tr><tr className={styles.hit}><th>成功</th><td>12.5–15</td><td>20×</td><td>250–300</td></tr></tbody></table></div></section>
      <section className={styles.thesisBreakers}><h2>什麼情況代表估值站不住腳</h2><p>EPS 長期停滯、ROE 隨淨值增加而下降、電動車停在公告階段，或市場始終只給成熟代工倍數。</p></section>
      <section className={styles.timeToTarget}><div><span>若 EPS 年增 7.8%</span><strong>約第 7 年</strong><p>EPS 約 12.4 元 × 20 倍 ≈ 248 元</p></div><div><span>若同樣增速延續</span><strong>約第 9 年</strong><p>EPS 約 14.5 元 × 20 倍 ≈ 290 元</p></div><aside><b>這不是預測期間</b><p>它只是把「不知道要等多久」轉成可以檢查的假設：成長率與重評必須同時成立。</p></aside></section>
      <section className={styles.multipleCheck}><h2>20 倍需要什麼條件</h2><div><p><b>不能只看市值：</b>大公司也可能只有成熟產業倍數。</p><p><b>要看資本報酬：</b>ROE 與營業利益率需要改善。</p><p><b>要看成長來源：</b>伺服器必須提高獲利，不只是提高營收。</p></div></section>
      <Source>250～300 元是 2026 年依 2021 年原始想法重建的轉型成功情境，不是當年留下的完整工作底稿。</Source>
    </Page>

    <Page page={6}>
      <Header eyebrow="DECISION JOURNAL" title="我中間真的有被市場嚇出去過" />
      <section className={styles.decisionTimeline}>
        <div><span>01</span><time>2021 上半年</time><h2>開始買進</h2><p>第一筆買在 120 多元，之後下跌時有小幅加碼。原始論點是淨值、獲利、伺服器與電動車。</p></div>
        <div><span>02</span><time>持有期間</time><h2>多次回到虧損</h2><p>股價曾多次跌回 100 元以下，帳面獲利也數次變成虧損。</p></div>
        <div className={styles.errorStep}><span>03</span><time>日期待確認</time><h2>因情緒全部出清</h2><p>基本面沒變，是我不想面對帳面虧損。這是一次行為錯誤。</p></div>
        <div><span>04</span><time>約一週後</time><h2>認錯買回</h2><p>公司沒有變，是我失去耐性。重新建倉時以約 107 元一次買回。</p></div>
        <div><span>05</span><time>2024</time><h2>低估修復</h2><p>價格回到 150～160 元，後來超過 200 元；我仍以 250～300 元為長期上行情境。</p></div>
        <div><span>06</span><time>2025/03</time><h2>約 168 元出場</h2><p>基本面沒有轉壞。我認為 Tesla 的未來上限更大，因此重新配置資金。</p></div>
      </section>
      <div className={styles.twoColumns}>
        <section><h2>我從這筆交易確認的事</h2><p>在這之前，我進進出出股票一年多，沒有賺到錢，也不知道該怎麼賺。鴻海是我第一次先有一套自己說得懂的理由，再等到結果發生。</p></section>
        <section className={styles.warning}><h2>它沒有證明什麼</h2><p>一次做對不能證明方法能穩定複製；約 107 元也不是含前次出清虧損的完整經濟成本。沒有逐筆明細，就不能公布精確 XIRR。</p></section>
      </div>
      <section className={styles.behaviorAudit}><h2>把情緒事件改寫成研究流程</h2><div><p><span>當時觸發</span><b>帳面虧損擴大</b></p><i>→</i><p><span>錯誤反應</span><b>先出清，再找理由</b></p><i>→</i><p><span>應有流程</span><b>先檢查 thesis breaker</b></p><i>→</i><p><span>下次留下</span><b>決策日誌與條件單</b></p></div></section>
      <Source>個人交易過程來自 2026 年回憶重建；日期、成交價與完整現金流待券商明細核對。</Source>
    </Page>

    <Page page={7}>
      <Header eyebrow="FINANCIAL VALIDATION" title="獲利逐年增加，但不是一路高速成長" />
      <EpsChart />
      <div className={styles.metricRow}><div><span>2021–2025 EPS CAGR</span><strong>7.9%</strong></div><div><span>2025 營業利益率</span><strong>3.20%</strong></div><div><span>2025 現金股利</span><strong>7.2 元</strong></div><div><span>2025 配發率</span><strong>52.9%</strong></div></div>
      <section><div className={styles.sectionTitle}><h2>原始判斷與後來結果</h2><span>分開看，避免倒灌</span></div><table><thead><tr><th>原始判斷</th><th>2021–2025 發生的事</th><th>評估</th></tr></thead><tbody><tr><td>公司會持續獲利</td><td>EPS 從 10.05 元增至 13.61 元</td><td className={styles.positive}>方向成立</td></tr><tr><td>盈餘會部分返還股東</td><td>2025 現金股利 7.2 元，配發率 52.9%</td><td className={styles.positive}>成立</td></tr><tr><td>伺服器成為第二基礎</td><td>2025 Q4 雲端網路產品首次成為最大產品類別</td><td className={styles.positive}>比預期更強</td></tr><tr><td>電動車提高公司上限</td><td>有產品與合作，但獲利貢獻仍慢</td><td className={styles.caution}>尚未充分驗證</td></tr></tbody></table></section>
      <section className={styles.noteBand}><b>最重要的反證：</b>2021～2023 年 EPS 幾乎停在 10 元附近。這段時間若只靠「每年一定成長」持有，論點其實不夠；真正支持等待的是公司仍有獲利與資產基礎。</section>
      <Source><b>來源：</b>鴻海年度財報與 2025 年法說。2025 數字於 2026/03/16 公布，屬出場後的事後驗證。</Source>
    </Page>

    <Page page={8}>
      <Header eyebrow="RE-RATING ATTRIBUTION" title="2024 年上漲不能只用大盤解釋" />
      <section className={styles.performanceHero}><div><span>鴻海</span><strong>+57.7%</strong><small>98.6 → 155.5 元</small></div><div><span>加權指數</span><strong>+17.4%</strong><small>17,161.79 → 20,146.55</small></div><p>2024/01/17 至 2024/03/28</p></section>
      <section className={styles.attribution}>
        <div><span>01</span><h2>低估修復</h2><p>股價從接近成熟代工區間往上移，原始投資論點開始反映。</p></div>
        <div><span>02</span><h2>大盤多頭</h2><p>資金環境有利大型權值股，但同期大盤漲幅明顯較小。</p></div>
        <div><span>03</span><h2>AI 伺服器催化</h2><p>2024/03/14 公司上調全年展望，預估 AI 伺服器營收成長逾 40%。</p></div>
      </section>
      <section className={styles.eventStudy}><div><span>3/14 法說前</span><strong>121 元</strong></div><i>→</i><div><span>3/15 收盤</span><strong>132 元</strong></div><p>公司特定訊息出現後，隔日收盤價明顯反應。這不能證明單一因果，但比「大型權值股一定補漲」更有解釋力。</p></section>
      <div className={styles.twoColumns}>
        <section><h2>我當時看對的部分</h2><p>市場確實逐步把鴻海從舊代工標籤往伺服器成長題材重評，100 元附近到 150～160 元包含低估修復。</p></section>
        <section className={styles.warning}><h2>不能美化的部分</h2><p>我沒有預測生成式 AI，也沒有精準拆出每一段漲幅。後來突破 200 元，AI 成長預期的解釋力已高於原本的低估修復。</p></section>
      </div>
      <section className={styles.altExplanations}><div className={styles.sectionTitle}><h2>三種解釋交叉檢查</h2><span>ATTRIBUTION TEST</span></div><table><thead><tr><th>可能解釋</th><th>支持證據</th><th>不夠的地方</th></tr></thead><tbody><tr><td>只是大盤補漲</td><td>同期加權指數上漲 17.4%</td><td>鴻海同期漲幅達 57.7%</td></tr><tr><td>只是原有低估修復</td><td>起點仍接近 100 元與成熟代工倍數</td><td>突破 200 元後需要更強的成長預期</td></tr><tr><td>全部都是 AI 題材</td><td>法說上調展望，隔日價格明顯反應</td><td>伺服器規模與低估論點早已存在</td></tr></tbody></table></section>
      <Source><b>來源：</b>臺灣證券交易所歷史行情；鴻海 2024/03/14 全年展望與 AI 伺服器說明。</Source>
    </Page>

    <Page page={9}>
      <Header eyebrow="POST-MORTEM" title="看對公司，不等於每個決定都做對" />
      <div className={styles.scorecard}>
        <section><span className={styles.scoreGood}>做對</span><h2>辨認預期差</h2><p>市場仍用蘋果代工廠理解鴻海，我注意到伺服器已有基礎，電動車則提供長期選項。</p></section>
        <section><span className={styles.scoreGood}>做對</span><h2>願意回到論點</h2><p>情緒性出清後，我在約一週內承認錯誤並買回，沒有用價格替基本面下結論。</p></section>
        <section><span className={styles.scoreBad}>不足</span><h2>沒有完整估值底稿</h2><p>250～300 元雖是 2021 年就有的目標，但當年模型沒有留下，只能在 2026 年重建。</p></section>
        <section><span className={styles.scoreBad}>不足</span><h2>沒有出場規則</h2><p>最後是比較鴻海與 Tesla 的上限後換股，不是依預先設定的估值或催化條件退出。</p></section>
        <section><span className={styles.scoreBad}>不足</span><h2>部位管理太粗</h2><p>當時只有重押或幾乎不持有，缺少按風險與信心調整部位的方法。</p></section>
        <section><span className={styles.scoreGood}>學到</span><h2>知道自己賺哪種錢</h2><p>這是我第一次靠自己理解的判斷等待結果，而不是一直進出猜市場。</p></section>
      </div>
      <section className={styles.researchUpgrade}><h2>如果重新做一次，我會多做四件事</h2><ol><li>買進前保存估值假設與資料日期。</li><li>把公司論點、產業催化與市場行情分開追蹤。</li><li>事先設定 thesis breaker，不用帳面損益決定去留。</li><li>用完整現金流計算 XIRR，並與大盤含息報酬比較。</li></ol></section>
      <section className={styles.breakerChecklist}><h2>下次買進前先寫好的檢查表</h2><div><p><span>獲利</span>EPS 是否因核心業務惡化而衰退？</p><p><span>資本效率</span>ROE 是否隨淨值增加而下降？</p><p><span>產業</span>伺服器需求與客戶資本支出是否反轉？</p><p><span>轉型</span>電動車合作是否進入量產與實際收入？</p><p><span>估值</span>目前價格已反映哪一種情境？</p><p><span>部位</span>最大可承受損失與加碼條件是什麼？</p></div></section>
      <Source>這一頁評估的是研究與決策流程，不是用事後股價替所有選擇背書。</Source>
    </Page>

    <Page page={10}>
      <Header eyebrow="CONCLUSION & SOURCES" title="從投資直覺，整理成可查核的研究過程" right="研究結論" />
      <section className={styles.conclusionHero}><p>我能從一個模糊的投資直覺出發，把當時資訊、後來結果與自己的行為錯誤拆開；再用財報、產業資料與估值情境，說明哪些判斷成立，哪些仍缺證據。</p></section>
      <div className={styles.threeTakeaways}><div><span>01</span><h2>投資判斷</h2><p>先找下檔，再找市場沒有定價的成長選項。</p></div><div><span>02</span><h2>產業分析</h2><p>伺服器是已存在的獲利基礎；電動車當時只能算上行情境。</p></div><div><span>03</span><h2>研究紀律</h2><p>把已知、推論、事後驗證與缺失資料分開標示。</p></div></div>
      <section className={styles.limits}><h2>目前仍不能宣稱</h2><div><p>精確總報酬與年化報酬</p><p>完整交易日期與全期間成本</p><p>250～300 元是當年保存的正式模型</p><p>這套方法已能穩定複製</p></div></section>
      <section className={styles.references}><h2>主要來源</h2>
        <ol><li>鴻海精密工業股份有限公司，2021 年年報。</li><li>鴻海科技集團，MIH 開放電動車平台發表，2020/10。</li><li>鴻海科技集團，Fisker 合作公告，2021/02。</li><li>鴻海科技集團，日本電產合作公告，2021/03。</li><li>鴻海科技集團，2022–2025 年度財報與財務概況。</li><li>鴻海科技集團，2024/03/14 法說與 AI 伺服器展望。</li><li>臺灣證券交易所，2317 歷史行情、個股本益比與加權指數資料。</li></ol>
      </section>
      <section className={styles.evidenceLayers}><div><span>第一層</span><b>公司與證交所資料</b><p>財務、股價、公告，可由第三方查核。</p></div><div><span>第二層</span><b>分析與估值重建</b><p>公式透明，但假設仍需讀者判斷。</p></div><div><span>第三層</span><b>個人交易回憶</b><p>尚未取得明細的部分直接標示待確認。</p></div></section>
      <section className={styles.closing}><div><strong>馬彥宸</strong><span>產業分析 × 投資研究 × 財金背景</span></div><p>本報告於 2026 年依回憶與公開資料重建，不含投資金額、股數或目前持倉，也不構成投資建議。</p></section>
    </Page>
  </main>;
}
