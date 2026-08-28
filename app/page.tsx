import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "馬彥宸｜投資研究作品集",
  description: "投資研究助理／初階研究員作品集，收錄個股研究、財務風險分析與產業分析。",
};

const researchSteps = [
  ["01", "找出市場的定價假設"],
  ["02", "用財報與產業資料拆解"],
  ["03", "建立估值與風險條件"],
  ["04", "持續追蹤，再回頭檢查判斷"],
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.identity} href="/">
          馬彥宸 <span>／投資研究</span>
        </Link>
        <nav className={styles.nav} aria-label="樣稿導覽">
          <a href="#research">研究案例</a>
          <a href="#method">研究方法</a>
          <a href="mailto:andrew920322@gmail.com">聯絡</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>投資研究助理／初階研究員</p>
              <h1>
                從財報與產業變化，
                <br />
                建立可以被驗證的投資論點。
              </h1>
              <p className={styles.intro}>
                我是馬彥宸，財金背景。這裡收錄我做過的個股研究、財務資料分析，
                以及判斷失準後怎麼回頭檢查。
              </p>
              <div className={styles.actions}>
                <a className={styles.primaryAction} href="#research">
                  先看鴻海研究
                </a>
                <a
                  className={styles.secondaryAction}
                  href="/reports/ma-yen-chen-investment-research-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  下載履歷
                </a>
              </div>
            </div>

            <div className={styles.heroVisual} aria-label="鴻海投資研究報告預覽">
              <div className={styles.reportBack} aria-hidden />
              <div className={styles.reportCover}>
                <Image
                  src="/previews/investment-homepage/honhai-cover.png"
                  alt="鴻海精密投資研究報告封面"
                  width={1240}
                  height={1754}
                  priority
                />
              </div>
              <div className={styles.reportNote}>
                <span>10 頁完整報告</span>
                <strong>論點、估值、驗證與檢討</strong>
              </div>
            </div>
          </div>

          <dl className={styles.proofStrip}>
            <div>
              <dt>4 年</dt>
              <dd>實際持有與追蹤</dd>
            </div>
            <div>
              <dt>10 頁</dt>
              <dd>鴻海投資決策研究</dd>
            </div>
            <div>
              <dt>3 份</dt>
              <dd>完整研究與分析作品</dd>
            </div>
          </dl>
        </section>

        <section className={styles.featured} id="research">
          <div className={styles.sectionLabel}>
            <span>01</span>
            <p>旗艦研究</p>
          </div>

          <article className={styles.study}>
            <div className={styles.studyCopy}>
              <p className={styles.studyMeta}>鴻海（2317）／2021–2025／已出場</p>
              <h2>市場還在用代工廠定價，我看到的是伺服器與電動車。</h2>
              <p className={styles.studyIntro}>
                我在接近淨值的位置買進一家持續獲利的公司。原本的判斷抓到低估，
                也看到伺服器與電動車的轉型方向，但低估了市場重新評價的速度。這份研究保留了進場理由，也交代我後來漏看了什麼。
              </p>
              <div className={styles.studyLinks}>
                <Link className={styles.textLink} href="/reports/honhai/" target="_blank">
                  閱讀新版 10 頁研究 <span aria-hidden>↗</span>
                </Link>
              </div>
            </div>

            <div className={styles.researchGallery} aria-label="鴻海研究內頁預覽">
              <div className={styles.galleryMain}>
                <Image
                  src="/previews/investment-homepage/honhai-valuation.png"
                  alt="鴻海估值重建頁：250 至 300 元的推導"
                  width={1240}
                  height={1754}
                  loading="eager"
                />
              </div>
              <div className={styles.gallerySecondary}>
                <Image
                  src="/previews/investment-homepage/honhai-rerating.png"
                  alt="鴻海 2024 年重新評價分析頁"
                  width={1240}
                  height={1754}
                  loading="eager"
                />
              </div>
              <aside className={styles.galleryMemo}>
                <div className={styles.cardTopline}>
                  <span>INVESTMENT MEMO</span>
                  <span>2317</span>
                </div>
                <p>2021 年原始判斷</p>
                <strong>低估，持有等待定價修復</strong>
                <dl>
                  <div>
                    <dt>重建倉買回價</dt>
                    <dd>約 107 元</dd>
                  </div>
                  <div>
                    <dt>催化劑</dt>
                    <dd>伺服器、電動車</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </article>
        </section>

        <section className={styles.otherWork} id="other-work">
          <div className={styles.sectionLabel}>
            <span>02</span>
            <p>其他研究</p>
          </div>
          <div className={styles.workGrid}>
            <Link className={styles.workCard} href="/projects/bankruptcy-risk/">
              <div className={styles.workImagePortrait}>
                <Image
                  src="/previews/investment-homepage/bankruptcy-cover.png"
                  alt="企業破產風險預測報告封面"
                  width={1240}
                  height={1754}
                  loading="eager"
                />
              </div>
              <div className={styles.workInfo}>
                <span>財務風險分析／完整報告</span>
                <h3>企業破產風險預測</h3>
                <p>高 Accuracy，不代表抓得到高風險企業。</p>
              </div>
            </Link>

            <Link className={styles.workCard} href="/projects/convenience-store/">
              <div className={styles.workImageLandscape}>
                <Image
                  src="/previews/investment-homepage/convenience-share.png"
                  alt="臺灣超商市占率分析頁"
                  width={2400}
                  height={1350}
                  loading="eager"
                />
              </div>
              <div className={styles.workInfo}>
                <span>產業分析／課程專題</span>
                <h3>便利商店產業及財務分析</h3>
                <p>整理市場結構，再比較統一超商與全家的財務表現。</p>
              </div>
            </Link>
          </div>
        </section>

        <section className={styles.method} id="method">
          <div className={styles.sectionLabel}>
            <span>03</span>
            <p>研究方法</p>
          </div>
          <ol className={styles.methodList}>
            {researchSteps.map(([number, label]) => (
              <li key={number}>
                <span>{number}</span>
                <p>{label}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
