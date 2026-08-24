import type { Metadata } from "next";
import styles from "./report.module.css";

export const metadata: Metadata = {
  title: "鴻海投資研究 v2 樣稿｜馬彥宸",
  robots: { index: false, follow: false },
};

const eps = [
  ["2020A", "7.34"],
  ["2021A", "10.05"],
  ["2022A", "10.21"],
  ["2023A", "10.25"],
  ["2024A", "11.01"],
  ["2025A", "13.61"],
];

const scenarios = [
  ["下行情境", "10.0", "10–12×", "100–120", "獲利沒有成長，市場維持成熟代工評價"],
  ["轉型進行", "11–13", "15–18×", "165–234", "伺服器成長，產品組合與獲利率改善"],
  ["轉型成功", "12.5–15", "20×", "250–300", "EPS 成長與大型科技公司評價同時成立"],
];

const sensitivity = [
  ["10.0", "100", "150", "200"],
  ["12.5", "125", "187.5", "250"],
  ["15.0", "150", "225", "300"],
];

export default function HonHaiV2Preview() {
  return (
    <main className={styles.report}>
      <article className={styles.page}>
        <header className={styles.masthead}>
          <div>
            <span className={styles.eyebrow}>RETROSPECTIVE EQUITY RESEARCH · 2021 DECISION</span>
            <h1>鴻海精密（2317 TT）</h1>
            <p>市場還在用蘋果代工廠定價，我買的是伺服器基礎與電動車上限</p>
          </div>
          <div className={styles.author}>
            <strong>馬彥宸</strong>
            <span>產業分析作品</span>
            <span>2026-08-23 重建</span>
          </div>
        </header>

        <section className={styles.verdict}>
          <div className={styles.rating}>
            <span>2021 重建判斷</span>
            <strong>明顯低估</strong>
            <small>回溯案例，不是現在的投資建議</small>
          </div>
          <dl>
            <div><dt>第一筆買進</dt><dd>120 多元</dd></div>
            <div><dt>重建倉均價</dt><dd>約 107 元*</dd></div>
            <div><dt>原始目標</dt><dd>250–300 元</dd></div>
            <div><dt>最終出場</dt><dd>約 168 元</dd></div>
          </dl>
        </section>

        <div className={styles.columns}>
          <div className={styles.mainColumn}>
            <section>
              <h2>投資摘要</h2>
              <p className={styles.lead}>
                2021 年上半年，我認為鴻海的股價仍被過去長期落在 60～90 元的印象綁住。
                2020 年底每股淨值已有 93.58 元，公司持續獲利，也把約一半盈餘配給股東；
                伺服器已有營收基礎，電動車則讓公司的長期上限高於傳統代工。
              </p>
              <div className={styles.theses}>
                <div><b>01　下檔</b><p>股價接近淨值，公司仍穩定獲利。下檔並非不會跌，而是估值沒有包含多少成長。</p></div>
                <div><b>02　獲利基礎</b><p>雲端網路與伺服器不是後來才出現的題材；鴻海當時已具備大規模製造能力。</p></div>
                <div><b>03　上行情境</b><p>MIH 與早期合作案尚未貢獻獲利，但說明公司正在把供應鏈與製造能力搬到電動車。</p></div>
              </div>
            </section>

            <section>
              <div className={styles.sectionTitle}>
                <h2>2021 年市場可能漏看的事</h2>
                <span>預期差</span>
              </div>
              <table className={styles.gapTable}>
                <thead><tr><th>市場常見看法</th><th>我的判斷</th><th>要看什麼驗證</th></tr></thead>
                <tbody>
                  <tr><td>成熟的蘋果代工廠</td><td>伺服器已是第二個獲利基礎</td><td>雲端網路營收與產品比重</td></tr>
                  <tr><td>股價長期只值舊區間</td><td>停止配股後，保留盈餘會累積淨值</td><td>EPS、ROE 與每股淨值</td></tr>
                  <tr><td>電動車只是題材</td><td>尚未賺錢，但能提高估值上限</td><td>合作案是否量產、毛利是否改善</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <div className={styles.sectionTitle}>
                <h2>決策過程與錯誤修正</h2>
                <span>PROCESS</span>
              </div>
              <div className={styles.decisionPath}>
                <div><b>建立部位</b><span>第一筆買在 120 多元，核心依據是淨值、穩定獲利與轉型上限。</span></div>
                <div><b>承受回撤</b><span>2023 年前後數次跌回 100 元以下，也曾在下跌時小幅加碼。</span></div>
                <div><b>修正行為</b><span>曾因不想面對帳面虧損出清；約一週後承認判斷被情緒干擾，重新買回。</span></div>
                <div><b>結束交易</b><span>重建倉後均價約 107 元，最終約 168 元出場，把資金轉往上限更高的標的。</span></div>
              </div>
            </section>
          </div>

          <aside className={styles.sideColumn}>
            <section className={styles.panel}>
              <h3>財務快照</h3>
              <div className={styles.epsGrid}>
                {eps.map(([year, value]) => <div key={year}><span>{year}</span><strong>{value}</strong></div>)}
              </div>
              <p className={styles.caption}>EPS／元。2021–2025 年複合成長率約 7.9%。</p>
            </section>

            <section className={styles.panel}>
              <h3>判斷的限制</h3>
              <ul>
                <li>107 元沒有算入前次出清虧損。</li>
                <li>交易日期仍待券商明細確認。</li>
                <li>250～300 元是重建情境，不是當年留下的完整模型。</li>
                <li>電動車在 2021 年尚未貢獻實際獲利。</li>
              </ul>
            </section>

            <section className={styles.panel}>
              <h3>資料狀態</h3>
              <p><b>公司財務：</b>年報可查</p>
              <p><b>股價資料：</b>證交所可查</p>
              <p><b>個人交易：</b>回憶重建，待券商明細</p>
            </section>
          </aside>
        </div>

        <footer className={styles.footer}>
          <span>* 重新建倉後券商顯示均價，不能直接視為全期間成本。</span>
          <span>01 / 02</span>
        </footer>
      </article>

      <article className={styles.page}>
        <header className={styles.pageHeader}>
          <div>
            <span className={styles.eyebrow}>VALUATION RECONSTRUCTION</span>
            <h1>250～300 元怎麼算出來</h1>
          </div>
          <div className={styles.pageNo}>鴻海（2317 TT）</div>
        </header>

        <section className={styles.formulaHero}>
          <div>
            <span>核心公式</span>
            <strong>目標價 ＝ 預估 EPS × 合理本益比</strong>
          </div>
          <div className={styles.equation}>
            <b>12.5～15 元</b><i>×</i><b>20 倍</b><i>＝</i><em>250～300 元</em>
          </div>
        </section>

        <div className={styles.formulaColumns}>
          <section className={styles.formulaCard}>
            <span className={styles.step}>01</span>
            <h2>EPS 為什麼用 12.5～15 元</h2>
            <p>這個區間要求伺服器帶動獲利，公司也不能只靠增加資本維持同樣 EPS。2025 年 EPS 後來走到 13.61 元，但這是事後驗證，不能倒回去當成 2021 年已知答案。</p>
            <div className={styles.calc}>
              <code>EPS CAGR = (13.61 ÷ 10.05)^(1 ÷ 4) − 1</code>
              <strong>＝ 7.9%</strong>
              <small>2021A → 2025A，四個年度區間</small>
            </div>
          </section>

          <section className={styles.formulaCard}>
            <span className={styles.step}>02</span>
            <h2>20 倍本益比代表什麼</h2>
            <p>20 倍不是因為公司市值大就應該得到，而是假設市場開始把它視為仍在成長的大型科技公司。只要獲利不成長、ROE 下滑或轉型沒有產生利潤，20 倍就站不住腳。</p>
            <div className={styles.calc}>
              <code>首次買進 P/B ≈ 120 ÷ 93.58</code>
              <strong>＝ 約 1.28 倍</strong>
              <small>以 2020 年底 BVPS 作接近值；不是精確成交日 P/B</small>
            </div>
          </section>
        </div>

        <section className={styles.valuationSection}>
          <div>
            <div className={styles.sectionTitle}><h2>本益比敏感度</h2><span>每股價值／元</span></div>
            <table className={styles.sensitivity}>
              <thead><tr><th>EPS \ P/E</th><th>10×</th><th>15×</th><th>20×</th></tr></thead>
              <tbody>
                {sensitivity.map((row) => (
                  <tr key={row[0]}>{row.map((cell, i) => <td className={cell === "250" || cell === "300" ? styles.hit : ""} key={cell}>{i === 0 ? `${cell} 元` : cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
            <p className={styles.caption}>敏感度表的用途是看假設改變後價值如何移動，不是從九個數字裡挑自己最喜歡的一格。</p>
          </div>

          <div>
            <div className={styles.sectionTitle}><h2>三種情境</h2><span>2021 重建</span></div>
            <table className={styles.scenarioTable}>
              <thead><tr><th>情境</th><th>EPS</th><th>P/E</th><th>價值</th></tr></thead>
              <tbody>{scenarios.map(([name, e, pe, value]) => <tr key={name}><td>{name}</td><td>{e}</td><td>{pe}</td><td>{value}</td></tr>)}</tbody>
            </table>
          </div>
        </section>

        <section className={styles.breakers}>
          <div>
            <h2>什麼情況代表我看錯</h2>
            <ul>
              <li><b>獲利：</b>EPS 長期停滯或轉為衰退，伺服器沒有成為第二個成長來源。</li>
              <li><b>資本效率：</b>淨值增加，EPS 卻沒有跟上，ROE 持續下降。</li>
              <li><b>轉型：</b>電動車合作停在公告階段，無法量產或改善獲利。</li>
              <li><b>估值：</b>市場仍只願意給成熟代工倍數，20 倍重評沒有發生。</li>
            </ul>
          </div>
          <div className={styles.retainBox}>
            <h3>保留盈餘只能當價值橋接</h3>
            <code>每年 EPS 10 元 × 保留 50% ＝ 約 5 元留在公司</code>
            <p>這 5 元不會自動等值變成股價。公司必須把錢再投入並維持報酬率，股東價值才會真的增加。</p>
          </div>
        </section>

        <section className={styles.sources}>
          <b>主要來源</b>
          <span>鴻海 2021、2022、2023、2024、2025 年度財報；臺灣證券交易所個股行情與本益比資料。</span>
          <span>公式中的 250～300 元為 2026 年依 2021 年原始想法重建，未取得當年完整估值工作底稿。</span>
        </section>

        <footer className={styles.footer}>
          <span>本頁只重建估值邏輯，不構成目前投資建議。</span>
          <span>02 / 02</span>
        </footer>
      </article>
    </main>
  );
}
