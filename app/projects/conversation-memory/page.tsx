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

const atlas = [
  {
    g: "我會自己去用的",
    n: "6 項",
    note: "想到才開，平常安靜待著",
    cards: [
      { name: "存照片", state: "在跑", hook: "自己的相簿雲",
        body: ["自己架的照片雲端服務，取代商用相簿。由數個容器組成：伺服器、影像辨識、資料庫。",
               "服務算實驗性質，但內容是正式資料，已有自動備份且完整性驗證通過。"] },
      { name: "存密碼", state: "在跑", hook: "最敏感的東西都在這",
        body: ["密碼庫，存放帳號密碼等機敏資料。",
               "是全機器裡機敏程度最高的服務，要特別小心。"] },
      { name: "用瀏覽器翻檔案", state: "在跑", hook: "",
        body: ["對外開放存取，不限本機才能連。",
               "曾經有一份舊複本被誤認是正牌，兩份內容不一樣——注意別搞混。"] },
      { name: "隨手記筆記", state: "在跑", hook: "判定不夠好用",
        body: ["兩人各自帳號的筆記時間軸。",
               "2026-07-27 判定還不夠好用，退回實驗狀態，目前沒有備份保證。"] },
      { name: "盯網頁有沒有變", state: "在跑", hook: "降價、補貨就通知我",
        body: ["網頁變化監控，有變化就推播提醒。",
               "還在實驗階段，資料目前不在備份範圍內，轉正時才會納入。"] },
      { name: "在自己機器上跑 AI 模型", state: "在跑", hook: "不用上雲",
        body: ["本機跑大語言模型，有 GPU 加速。",
               "簡單任務用本地模型省成本，也預留給之後的語意搜尋。"] },
    ],
  },
  {
    g: "會主動跟我講話的",
    n: "3 個入口",
    note: "同一套程式，三個分身。設定各自獨立，記憶各自獨立",
    cards: [
      { name: "我最常用的那個", state: "在跑", hook: "", body: ["三個入口共用同一套框架，但彼此看不到對方的記憶。"] },
      { name: "我幾乎不用了的那個", state: "在跑", hook: "", body: ["保留著，因為停用的成本比留著高。"] },
      { name: "另一位使用者專用的那個", state: "在跑", hook: "", body: ["不同使用者、不同設定、不同記憶邊界。"] },
    ],
  },
  {
    g: "出事會通知我的",
    n: "6 項",
    note: "平常不用開，有事才出聲",
    cards: [
      { name: "東西掛了通知我", state: "在跑", hook: "", body: ["能直接讀取容器的即時狀態。", "但它自己是否正常，也要用查證方式現場確認，不能只看文件。"] },
      { name: "看機器累不累", state: "在跑", hook: "CPU、溫度、硬碟", body: ["監控面板，可看多台機器。"] },
      { name: "一頁列出全部", state: "在跑", hook: "從清冊自動長出來的", body: ["設定從服務清冊自動產生，不用手動維護——所以它不會跟現實脫節。"] },
      { name: "開關容器的介面", state: "在跑", hook: "", body: ["容器編排的操作介面。是「收斂」計畫第一個誕生的服務。"] },
      { name: "有新版本通知我", state: "在跑", hook: "只通知，不自動更新", body: ["版本鎖定，每 6 小時掃一次正在跑的容器。", "刻意不自動更新——自動更新會在我沒看著的時候改變現實。"] },
      { name: "把連線轉給正確的服務", state: "在跑", hook: "沒有它我進不去", body: ["多數服務只聽本機，得靠它才連得進來。牽一髮動全身。"] },
    ],
  },
  {
    g: "一天的節律",
    n: "14 件",
    note: "我沒下令它也會跑",
    cards: [
      { name: "00–08　我在睡覺", state: "每天", hook: "備份與整理",
        body: ["設定存檔、筆記備份、記憶漂移檢查、異地備份、舊報告歸檔，最後跑一次「寫的還是真的嗎」。"] },
      { name: "08–12　我起床", state: "每天", hook: "把結果交給我",
        body: ["每日健康報告、宣告與現實對帳、異地備份夠不夠新。"] },
      { name: "中午之後", state: "無排程", hook: "白天它不吵我",
        body: ["刻意留白。工具在我工作的時候應該安靜。"] },
      { name: "不分時段", state: "一直跑", hook: "",
        body: ["磁碟快滿了沒（每 2 小時）、心跳（每 5 分鐘）、筆記自動同步（每分鐘）。"] },
    ],
  },
  {
    g: "我每天真正在碰的",
    n: "agent 這一層",
    note: "沒有容器也沒有服務，但用得最兇",
    cards: [
      { name: "技能", state: "約一百項", hook: "教它做特定類型的事", body: ["跨多個 agent，共用的規則放一處，特有的才分開。"] },
      { name: "自動掛鉤", state: "5 個", hook: "每次操作自動觸發", body: ["改寫指令、擋寫入、省 token。"] },
      { name: "外掛查詢工具", state: "1 個", hook: "", body: ["公開資料庫查詢。"] },
    ],
  },
  {
    g: "已經死了的",
    n: "13 項",
    note: "留在這頁，是因為只看還活著的東西會誤判",
    cards: [
      { name: "一個是我自己關的", state: "停用", hook: "產出達不到我要的",
        body: ["功能都正常，是產出品質不合格。這種死法最難被監控抓到。"] },
      { name: "一個空轉了一個月", state: "停用", hook: "在跑，但講不出話",
        body: ["探針說它活著，可是它兌現不了任何一件它該做的事。",
               "這是整張地圖最重要的一格：健康檢查問「它有沒有活著」，我的分類問「它對我有沒有用」。"] },
      { name: "其餘 11 項", state: "已移除", hook: "死因都留著",
        body: ["移除、退役、被取代、從沒上線過的都算。死因比功能更能說明判斷。"] },
    ],
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
          <p>
            下面是那張地圖的去識別化展示版。點任何一張卡可以展開。
            服務名稱、路徑與查證指令都已移除，保留的是分類方式與判斷理由。
          </p>

          <div className="demo">
            <div className="demo-head">
              <h3>我的伺服器地圖</h3>
              <p>展示版　·　資料來自「我宣告要有什麼」與「機器實際有什麼」的比對，不是手寫的</p>
            </div>

            {atlas.map((grp) => (
              <div className="demo-group" key={grp.g}>
                <header>
                  <strong>{grp.g}</strong>
                  <span className="tag tag-self">{grp.n}</span>
                  <span className="rowlabel">{grp.note}</span>
                </header>
                <div className="demo-grid">
                  {grp.cards.map((c) => (
                    <details className="card" key={c.name}>
                      <summary>
                        <span className="card-name">{c.name}</span>
                        <span
                          className={`state ${
                            c.state === "停用" || c.state === "已移除" ? "state-off" : "state-on"
                          }`}
                        >
                          {c.state}
                        </span>
                        {c.hook ? <span className="card-hook">{c.hook}</span> : null}
                      </summary>
                      <div className="card-body">
                        {c.body.map((b) => (
                          <p key={b}>{b}</p>
                        ))}
                        <span className="redacted">查證指令　·　展示版已移除</span>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            <div className="demo-foot">
              <p>
                另有 18 個裝了沒啟用、22 個鎖死。
                <strong>檔案存在不代表它在跑</strong>——這是最容易誤會的一點。
              </p>
              <p>
                自用版每張卡背面都有一行查證指令，寫著「不用信這頁，自己去問機器」。
                因為這頁只是一張快照，它可能已經不對了——不是權威的是機器本身。
              </p>
            </div>
          </div>
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
