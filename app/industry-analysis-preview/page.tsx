import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "馬彥宸｜產業分析作品集樣稿",
  description: "以財報、產業資料與 AI 工具協助研究的產業分析作品集樣稿。",
};

const proof = [
  ["3 份", "公開研究作品"],
  ["6,819", "筆企業財務資料"],
  ["1 次", "完整投資決策復盤"],
];

const decisionLog = [
  {
    stamp: "2021 上半年",
    title: "進場",
    text: "第一筆買在 120 元附近。當時每股淨值約 94 元；2021 全年 EPS 後來公布為 10.05 元，以這個獲利水準延伸三年是 30.15 元，足以覆蓋約 26 元的價差。伺服器與電動車則提供 250～300 元的上行情境。",
  },
  {
    stamp: "持有期間",
    title: "下跌加碼",
    text: "股價往下時，我重新檢查原本的理由，確認論點沒有改變後繼續加碼。持有期間，帳面損益曾數次由正轉負。",
  },
  {
    stamp: "日期待核對",
    title: "一次全部出清",
    text: "賣掉的理由不是論點變了，而是我不想再看到帳面虧損。這次決定反映的是情緒，不是研究判斷。",
  },
  {
    stamp: "約一週後",
    title: "認錯買回",
    text: "回頭逐項檢查後，原本的投資理由並未被推翻。我承認前一次決定有誤，約一週後買回；以約 107 元一次買回。",
  },
  {
    stamp: "2024 / 03",
    title: "公司上調全年展望",
    text: "公司上調全年展望，AI 伺服器成長也開始反映在營運上。股價由 100 元附近走向 150～160 元，背後同時有低估修復、大盤多頭與成長預期，不能只歸因於單一事件。",
  },
  {
    stamp: "2025 / 03",
    title: "約 168 元出場",
    text: "這不是一次高點出場；當時股價已從兩百多元回落，原本的 250～300 元上行情境也沒有被推翻。我選擇把資金轉往自己認為成長空間更大的標的。",
  },
];

const limits = [
  {
    title: "研究經驗｜尚未進入正式團隊",
    text: "目前的案例來自個人投資、課程專題與自學專案。我能展示研究過程，但還沒有研究團隊內的分工與交付經驗。",
  },
  {
    title: "技術實作｜能解釋選擇，不冒充工程師",
    text: "建模、網站與伺服器實作大量借助 AI。我能說明問題怎麼定義、方法為何這樣選、結果如何判讀；但不宣稱能逐行獨立重現全部程式。",
  },
  {
    title: "報酬數字｜等待券商明細核對",
    text: "中途出清再買回的已實現損益尚未併入成本。在逐筆明細補齊以前，我不公布精確報酬率或年化數字。",
  },
  {
    title: "投資流程｜仍在補上出場與部位紀律",
    text: "這次案例有完整的進場論述，卻缺少預先寫下的出場條件與部位規則。把個人判斷整理成可重複檢查的流程，是我現在最需要補足的能力。",
  },
];
export default function IndustryAnalysisPreview() {
  return (
    <div className={styles.page}>
      <section className={styles.darkStage}>
        <header className={styles.header}>
          <Link className={styles.brand} href="/industry-analysis-preview/">
            <span aria-hidden>●</span> 馬彥宸
          </Link>
          <nav className={styles.nav} aria-label="作品集導覽">
            <a href="#research">研究作品</a>
            <a href="#decisions">決策日誌</a>
            <a href="#limits">研究邊界</a>
            <a href="#about">關於我</a>
            <a className={styles.contactLink} href="mailto:andrew920322@gmail.com">
              聯絡
            </a>
          </nav>
        </header>

        <main>
          <section className={styles.hero}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>產業分析 · 投資研究 · 資料工具</p>
              <h1>
                馬彥宸
                <span>Yen-Chen Ma</span>
              </h1>
              <p className={styles.positioning}>
                從財報與產業結構建立判斷，
                <br />
                再用資料與 AI 逐項查證。
              </p>
              <p className={styles.heroIntro}>
                我是財金系畢業生。這裡收錄個股研究、企業風險分析與產業專題；
                除了結論，也保留判斷過程、證據來源與尚未補齊的地方。
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href="#research">
                  看研究作品 <span aria-hidden>↓</span>
                </a>
                <a
                  className={styles.secondaryAction}
                  href="/reports/ma-yen-chen-investment-research-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  下載履歷 ↗
                </a>
              </div>
            </div>

            <aside className={styles.deskCard} aria-label="研究桌面摘要">
              <div className={styles.deskTopline}>
                <span>研究檔案</span>
                <span>作品集 2026</span>
              </div>
              <div className={styles.coverFrame}>
                <Image
                  src="/previews/investment-homepage/honhai-cover.png"
                  alt="鴻海投資研究報告封面"
                  width={1240}
                  height={1754}
                  priority
                />
              </div>
              <div className={styles.deskSummary}>
                <div>
                  <span>目前主軸</span>
                  <strong>產業與公司研究</strong>
                </div>
                <div>
                  <span>研究工具</span>
                  <strong>財報 · 資料分析 · AI</strong>
                </div>
                <div>
                  <span>最新完整案例</span>
                  <strong>鴻海（2317）</strong>
                </div>
              </div>
            </aside>
          </section>

          <dl className={styles.proofBar}>
            {proof.map(([number, label]) => (
              <div key={label}>
                <dt>{number}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </main>
      </section>

      <main className={styles.lightStage}>
        <section className={styles.featured} id="research">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>01 / 代表研究</p>
              <h2>研究作品</h2>
            </div>
            <p>不只展示結論，也留下判斷如何形成。</p>
          </div>

          <article className={styles.featuredCard}>
            <div className={styles.featuredCopy}>
              <div className={styles.metaRow}>
                <span>個股研究</span>
                <span>2021–2025</span>
                <span>10 頁完整報告</span>
              </div>
              <h3>鴻海：從低估、轉型到重新評價</h3>
              <p>
                我在約 120 元開始買進，相較當時約 94 元的每股淨值，多付了約 26 元。2021 全年 EPS 後來公布為 10.05 元；若這個獲利水準維持三年，累積 30.15 元，足以覆蓋這段差額。
                這是我願意等待的安全墊；伺服器與電動車帶來的轉型，則讓我把長期上行情境放在 250～300 元。
              </p>

              <dl className={styles.thesisGrid}>
                <div>
                  <dt>持有安全墊</dt>
                  <dd>10.05 元 × 3 年＝30.15 元，高於約 26 元差額</dd>
                </div>
                <div>
                  <dt>長期上行情境</dt>
                  <dd>轉型成功並獲得重新評價：250～300 元</dd>
                </div>
              </dl>

              <div className={styles.researchActions}>
                <Link className={styles.researchLink} href="/reports/honhai/" target="_blank">
                  閱讀新版 10 頁研究 <span aria-hidden>↗</span>
                </Link>
              </div>
            </div>

            <div className={styles.featuredVisual}>
              <div className={styles.visualLabel}>
                <span>估值重建</span>
                <span>2317</span>
              </div>
              <div className={styles.visualPages}>
                <div className={styles.visualPageMain}>
                  <Image
                    src="/previews/investment-homepage/honhai-valuation.png"
                    alt="鴻海估值重建報告內頁"
                    width={1240}
                    height={1754}
                  />
                </div>
                <div className={styles.visualPageBack}>
                  <Image
                    src="/previews/investment-homepage/honhai-rerating.png"
                    alt="鴻海重新評價分析內頁"
                    width={1240}
                    height={1754}
                  />
                </div>
              </div>
            </div>
          </article>

          <div className={styles.researchGrid}>
            <Link className={styles.researchCard} href="/projects/bankruptcy-risk/">
              <div className={styles.researchImagePortrait}>
                <Image
                  src="/previews/investment-homepage/bankruptcy-cover.png"
                  alt="企業破產風險預測報告封面"
                  width={1240}
                  height={1754}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span>財務風險分析</span>
                  <span>6,819 筆資料</span>
                </div>
                <h3>企業破產風險預測</h3>
                <p>模型的 Accuracy 很高，不代表真的抓得到高風險企業。</p>
                <span className={styles.cardArrow}>查看案例 ↗</span>
              </div>
            </Link>

            <Link className={styles.researchCard} href="/projects/convenience-store/">
              <div className={styles.researchImageLandscape}>
                <Image
                  src="/previews/investment-homepage/convenience-share.png"
                  alt="臺灣便利商店市占率分析圖"
                  width={2400}
                  height={1350}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span>產業與財務分析</span>
                  <span>課程專題</span>
                </div>
                <h3>便利商店產業及財務分析</h3>
                <p>先整理市場結構，再比較統一超商與全家的財務表現。</p>
                <span className={styles.cardArrow}>查看案例 ↗</span>
              </div>
            </Link>
          </div>
        </section>

        <section className={styles.decisions} id="decisions">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>02 / 決策復盤</p>
              <h2>鴻海決策日誌</h2>
            </div>
            <p>把當時的判斷與情緒都留下來，避免只用結果改寫故事。</p>
          </div>

          <ol className={styles.timeline}>
            {decisionLog.map((item) => (
              <li key={item.stamp + item.title}>
                <span className={styles.timelineStamp}>{item.stamp}</span>
                <div className={styles.timelineBody}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className={styles.timelineNote}>
            進出場的確切日期與價格仍要用券商逐筆明細核對，在核對完成前我不公布精確報酬率。
          </p>
        </section>

        <section className={styles.aiSection} aria-labelledby="ai-title">
          <div className={styles.aiStatement}>
            <p className={styles.kicker}>03 / 研究流程</p>
            <h2 id="ai-title">AI 加快整理，不能替我下結論。</h2>
          </div>
          <div className={styles.aiEvidence}>
            <p>
              我用 AI 協助找資料、比較文件、整理數字與完成技術實作；研究問題、證據取捨與最後判斷仍由我負責。
              找不到來源的資訊會標示缺漏，尚未驗證的數字不會包裝成結論。
            </p>
            <div className={styles.workflow} aria-label="研究流程四步驟">
              <span>定義問題</span>
              <span>整理證據</span>
              <span>交叉查證</span>
              <span>標示限制</span>
            </div>
          </div>
        </section>

        <section className={styles.limits} id="limits">
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.kicker}>04 / 研究邊界</p>
              <h2>證據到哪裡，我就寫到哪裡</h2>
            </div>
            <p>這些不是免責聲明，而是目前作品能證明與不能證明的界線。</p>
          </div>

          <div className={styles.limitsGrid}>
            {limits.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.about} id="about">
          <div className={styles.aboutLabel}>
            <p className={styles.kicker}>05 / 關於我</p>
            <span>新竹 · 可至桃園與雙北</span>
          </div>
          <div className={styles.aboutCopy}>
            <h2>我想把產業問題查清楚，再把判斷說明白。</h2>
            <p>
              我畢業於明新科技大學財務金融系，並完成陽明交大 300 小時人工智慧與商業數據分析訓練。
              現在希望投入產業分析、投資研究或需要資料判讀的研究工作。
            </p>
            <div className={styles.aboutActions}>
              <a href="mailto:andrew920322@gmail.com">andrew920322@gmail.com</a>
              <a
                href="/reports/ma-yen-chen-investment-research-resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                下載履歷 ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>馬彥宸 · 產業分析作品集</span>
        <span>研究內容僅供作品展示，不構成投資建議。</span>
      </footer>
    </div>
  );
}
