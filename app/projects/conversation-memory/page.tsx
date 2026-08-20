import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

export const metadata: Metadata = {
  title: "每次開新對話，都在考我",
  description:
    "我的問題不是 AI 不夠聰明，是每次重開一個對話，它都在考我的記憶和我的提示詞功力。",
};

const figures = [
  { n: "2", t: "場考試", s: "考我記不記得上次講到哪，考我提示詞下得夠不夠精準。" },
  { n: "3", t: "種內建記憶的失敗", s: "記偏了、漏掉重要的、給我一個很像但已經過期的。" },
  { n: "13", t: "項已經停用", s: "留著死因。只看還活著的東西會誤判。" },
];

const failures = [
  "比較會記住我糾正過它的事",
  "重大決定反而常常沒記",
  "說不記得，然後找一個很像、但可能已經過期的內容回我",
];

const manual = [
  "記錄要人推：每次都要提醒它記下來，忘了提醒就沒了",
  "總結是重新生成的，不是累積的：每次重來都要再過一次細節",
  "成本每次都付，而且對話越長越貴",
];

const map = [
  {
    title: "我會自己去用的",
    note: "6 項 · 想到才開，平常安靜待著",
    items: ["存照片", "存密碼", "用瀏覽器翻檔案", "隨手記筆記", "盯網頁有沒有變", "在自己機器上跑 AI 模型"],
  },
  {
    title: "會主動跟我講話的",
    note: "3 個入口 · 同一套程式，設定與記憶各自獨立",
    items: ["我最常用的那個", "我幾乎不用了的那個", "另一位使用者專用的那個"],
  },
  {
    title: "出事會通知我的",
    note: "6 項 · 平常不用開，有事才出聲",
    items: ["東西掛了通知我", "看機器累不累", "一頁列出全部", "開關容器的介面", "有新版本通知我(只通知，不自動更新)", "把連線轉給正確的服務"],
  },
  {
    title: "一天的節律",
    note: "14 件 · 我沒下令它也會跑",
    items: ["00–08 我在睡覺：備份與整理", "08–12 我起床：把結果交給我", "中午之後沒有任何排程——白天它不吵我", "一直在跑的：磁碟快滿了沒 / 心跳 / 筆記自動同步"],
  },
  {
    title: "我每天真正在碰的",
    note: "沒有容器也沒有服務，但用得最兇",
    items: ["教它做特定類型事情的技能：合計約一百項", "每次操作自動觸發的掛鉤：5 個", "外掛的查詢工具：1 個"],
  },
  {
    title: "已經死了的",
    note: "13 項 · 死因比功能更能說明判斷",
    items: ["一個是我自己關的：產出達不到我要的", "一個是空轉一個月才被發現：在跑，但講不出話"],
  },
];

export default function ConversationMemory() {
  return (
    <>
      <SiteHeader project="每次開新對話，都在考我" />
      <main className="shell">
        <a className="backlink" href="/">← 回作品集</a>

        <h1>
          我的問題不是 AI 不夠聰明，
          <br />
          是它每次都在考我。
        </h1>
        <p className="lede">
          額度用完，事情做到一半，過幾天才回來。回來的時候不記得是哪個對話，
          結果又重新討論了一次。後來我發現，每次開新對話其實是在考兩件事——
          考我記不記得上次講到哪，考我提示詞下得夠不夠精準。
        </p>

        <div className="figures">
          {figures.map((f) => (
            <div className="figure" key={f.t}>
              <span className="figure-n">{f.n}</span>
              <span className="figure-t">{f.t}</span>
              <span className="figure-s">{f.s}</span>
            </div>
          ))}
        </div>

        <section className="band">
          <h2>試過的土辦法：每次回來先叫 AI 總結一下</h2>
          <p>三個理由不夠用：</p>
          <ul>
            {manual.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        <section className="band">
          <h2>轉念：問題不是它會忘，是負擔被丟回給我</h2>
          <p>
            換一個 agent,又要從頭教一次。
            前者只能等模型變好，後者可以動手。
          </p>
        </section>

        <section className="band">
          <h2>為什麼不用內建記憶</h2>
          <p>我實際用下來的感覺是三種不同的失敗：</p>
          <ul>
            {failures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p>
            第三種最危險：忘記你還知道要重講，「很像但已經過期」你會信。
            所以我的記憶不存「結論」，只存「怎麼查」。
          </p>
        </section>

        <section className="band">
          <h2>做了什麼：拆掉那兩場考試</h2>
          <p>
            <strong>拆掉考記憶那場</strong>——讓機器把「上次之後發生了什麼」算給我看，我不用回想。
            另外做了一個舊討論的索引，遇到類似主題會先提醒我「這個以前討論過」；
            但它只能提醒，要不要沿用是我決定的，不然它又會拿一個過期的方案給我。
          </p>
          <p>
            <strong>拆掉考提示詞那場</strong>——把每次都在重打的規則寫成固定檔案，一次寫好。
            共用規則放一個地方讓所有 agent 都讀，只有各自特有的才分開。
          </p>
        </section>

        <section className="band">
          <h2>我用「它對我有什麼用」分類，不用技術層級分類</h2>
          <div className="ledger">
            {map.map((s) => (
              <div className="entry" key={s.title}>
                <div className="entry-top">
                  <span className="entry-title">{s.title}</span>
                  <span className="rowlabel">{s.note}</span>
                </div>
                <div className="entry-meta">
                  {s.items.map((i) => (
                    <span className="tag tag-self" key={i}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="figure-s" style={{ marginTop: 16 }}>
            另有 18 個裝了沒啟用、22 個鎖死。檔案存在不代表它在跑——這是最容易誤會的一點。
            這頁的資料不是手寫的，是從「我宣告要有什麼」和「機器實際有什麼」兩邊比對出來的。
            但它不是權威，只是一張快照，可能已經不對了。
          </p>
        </section>

        <section className="band">
          <h2>成效：行為變了，但我沒量過</h2>
          <p>
            以前遇到類似主題會重新討論一次，現在會先查有沒有討論過，
            再自己選要「接著做 / 重新想 / 忽略」。行為確實變了。
          </p>
          <div className="honest">
            <h2>但我不能宣稱這是成效</h2>
            <ul>
              <li>我沒有量過實際省多少時間，也沒做前後對照。</li>
              <li>而且現在感覺還好，也可能是最近事比較少，我不是很敢確定。</li>
              <li>要真的驗證，我會量「重複討論的次數」和「回來接上進度所需的時間」。</li>
            </ul>
          </div>
        </section>

        <section className="band">
          <h2>還沒解決的</h2>
          <p>
            因為額度有限，沿用原本的對話比開新的省，所以我會先找原對話。
            但我的搜尋單位是「對話」，而對話的標題不等於它的內容——
            聊太多會忘記標題，聊著聊著會跑去別的方向，標題早就不代表內容了。
          </p>
          <p>終點的限制和起點是同一個。這個問題還沒解。</p>
        </section>

        <section className="band">
          <h2>我的角色</h2>
          <p>
            實作是 AI 協作產生的，我沒辦法宣稱自己能獨立寫出來。
            我做的是：發現問題、判斷根因、決定方向、核准修改，以及認出哪裡還不夠好。
            我只走過一遍，如果要我從零重做，我需要回去看自己的紀錄。
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
