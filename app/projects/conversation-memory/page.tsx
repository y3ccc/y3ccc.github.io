import type { Metadata } from "next";
import Link from "next/link";
import { CaseSummary, SiteFooter, SiteHeader } from "../../components/SiteChrome";
import { Rhythm } from "../../components/Figures";

export const metadata: Metadata = {
  title: "每次開新對話，都在考我｜馬彥宸作品集",
  description:
    "我的問題不是 AI 不夠聰明，是每次重開一個對話，它都在考我的記憶和我的提示詞功力。",
  openGraph: {
    title: "馬彥宸｜每次開新對話，都在考我",
    description: "把「記住上次講到哪」的負擔從人身上移走。含 25 張可展開的伺服器地圖，以及 13 項已停用服務的死因。",
    url: "/projects/conversation-memory/",
    type: "article",
    images: [{ url: "/og/conversation-memory.png", width: 1200, height: 630, alt: "馬彥宸｜每次開新對話，都在考我" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "馬彥宸｜每次開新對話，都在考我",
    description: "13 項服務被我關掉，死因全部留著。只看還活著的東西會誤判。",
    images: ["/og/conversation-memory.png"],
  },
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

// 這些狀態一律用灰色；漏掉「已退役」曾讓一張退役卡片顯示成綠色的「在跑」
const DEAD = ["停用", "已移除", "已退役", "已封鎖", "從沒上線"];

const atlas = [
  {
    g: "我會自己去用的",
    n: "6 項",
    note: "想到才開，平常安靜待著",
    cards: [
      { name: "Immich", state: "在跑", hook: "自己的 Google 相簿",
        body: ["自架照片雲，取代 Google Photos。由 4 個容器組成：伺服器、AI 影像辨識、資料庫、快取。",
               "服務算實驗性質，但內容是正式資料——已納入自動備份，且完整性驗證通過。"],
        cmd: "docker ps --filter name=immich_server" },
      { name: "Vaultwarden", state: "在跑", hook: "最敏感的東西都在這",
        body: ["密碼庫。全機器機敏程度最高的服務，任何變更都要特別小心。"],
        cmd: "docker ps --filter name=vaultwarden" },
      { name: "FileBrowser", state: "在跑", hook: "用瀏覽器翻檔案",
        body: ["2026-06-29 重新啟用，對外開放存取，不限本機才能連。",
               "曾經有一份舊複本被誤認是正牌，兩份內容不一樣——這種錯最難發現。"],
        cmd: "docker ps --filter name=filebrowser" },
      { name: "Memos", state: "在跑", hook: "判定不夠好用",
        body: ["兩人各自帳號的筆記時間軸，類似 flomo。手機都已登入在用。",
               "2026-07-27 判定還不夠好用，退回實驗狀態，目前沒有備份保證。"],
        cmd: "docker ps --filter name=memos" },
      { name: "changedetection.io", state: "在跑", hook: "機票降價、補貨就通知我",
        body: ["網頁變化監控，有變化就透過 ntfy 推播。",
               "還在實驗階段，資料不在備份範圍內——轉正時才會納入。"],
        cmd: "docker ps --filter name=changedetection" },
      { name: "Ollama", state: "在跑", hook: "本機跑模型，不用上雲",
        body: ["本機跑 LLM，容器化，GPU 加速（GTX 1060）。",
               "簡單任務走本地模型省成本，也預留給之後的語意搜尋。"],
        cmd: "docker ps --filter name=ollama" },
    ],
  },
  {
    g: "會主動跟我講話的",
    n: "3 個入口",
    note: "同一套 Hermes，三個 profile。設定各自獨立，記憶各自獨立",
    cards: [
      { name: "Lark（飛書）", state: "在跑", hook: "我最常用",
        body: ["shared profile。框架本身已 git 化，升級要 rebase 不能覆蓋。"],
        cmd: "systemctl --user is-active <gateway>" },
      { name: "Discord / Telegram", state: "在跑", hook: "幾乎不用了",
        body: ["保留著，因為停用的成本比留著高。"],
        cmd: "systemctl --user is-active <gateway>" },
      { name: "LINE", state: "在跑", hook: "另一位使用者專用",
        body: ["不同使用者、不同設定、不同記憶邊界。",
               "語音／影片／檔案曾全被導向圖片快取而遺失，我把它追到上游成了 Issue 與 PR。"],
        cmd: "systemctl --user is-active <gateway>" },
    ],
  },
  {
    g: "出事會通知我的",
    n: "6 項",
    note: "平常不用開，有事才出聲",
    cards: [
      { name: "Uptime Kuma", state: "在跑", hook: "東西掛了通知我",
        body: ["能直接讀取 Docker 容器即時狀態。",
               "坑：容器監控必須設 docker_host，留空會安靜失敗——看起來在監控，其實沒有。"],
        cmd: "docker ps --filter name=uptime-kuma" },
      { name: "Beszel", state: "在跑", hook: "CPU、溫度、硬碟",
        body: ["伺服器監控面板，可看多台機器。2026-06-29 上線。"],
        cmd: "docker ps --filter name=beszel" },
      { name: "Homepage", state: "在跑", hook: "從清冊自動長出來的",
        body: ["所有服務的總覽入口，設定由 inventory 自動產生，不用手動維護——所以它不會跟現實脫節。",
               "2026-06-29 上線，取代舊的 Homer。"],
        cmd: "docker ps --filter name=homepage" },
      { name: "Dockge", state: "在跑", hook: "開關容器的介面",
        body: ["Docker Compose 操作介面。是「收斂」計畫第一個誕生的服務。"],
        cmd: "docker ps --filter name=dockge" },
      { name: "Diun", state: "在跑", hook: "只通知，不自動更新",
        body: ["映像檔更新通知器。版本鎖定，每 6 小時掃一次正在跑的容器。",
               "刻意不自動更新——自動更新會在我沒看著的時候改變現實。"],
        cmd: "docker ps --filter name=diun" },
      { name: "Caddy", state: "在跑", hook: "沒有它我進不去",
        body: ["反向代理。多數服務只聽本機，得靠它才連得進來。牽一髮動全身。",
               "設定檔由 inventory 產生，禁止手改。"],
        cmd: "docker ps --filter name=caddy" },
    ],
  },
  {
    g: "一天的節律",
    n: "14 件",
    note: "我沒下令它也會跑",
    cards: [
      { name: "00–08　我在睡覺", state: "每天", hook: "備份與整理",
        body: ["Hermes 設定存檔、筆記備份到 GitHub、記憶漂移檢查、異地備份送去 R2、舊報告歸檔，最後跑一次「寫的還是真的嗎」。"],
        cmd: "systemctl --user list-timers" },
      { name: "08–12　我起床", state: "每天", hook: "把結果交給我",
        body: ["每日健康報告、宣告與現實對帳、異地備份夠不夠新。"],
        cmd: "systemctl --user list-timers" },
      { name: "中午之後", state: "無排程", hook: "白天它不吵我",
        body: ["刻意留白。工具在我工作的時候應該安靜。"], cmd: "" },
      { name: "不分時段", state: "一直跑", hook: "",
        body: ["磁碟快滿了沒（每 2 小時）、死人開關心跳（每 5 分鐘）、筆記自動同步（每分鐘）。"],
        cmd: "systemctl --user list-timers" },
    ],
  },
  {
    g: "我每天真正在碰的",
    n: "agent 這一層",
    note: "沒有容器也沒有服務，但用得最兇",
    cards: [
      { name: "Hermes 技能", state: "44 + 49", hook: "兩個使用者各自的",
        body: ["教它怎麼處理某一類事情。"], cmd: "" },
      { name: "Claude Code / Codex 技能", state: "5 + 6", hook: "",
        body: ["共用的規則放一處讓所有 agent 都讀，只有各自特有的才分開——換一個 agent 不用從頭教一次。"], cmd: "" },
      { name: "自動掛鉤", state: "5 個", hook: "每次操作自動觸發",
        body: ["改寫指令、擋寫入、省 token。"], cmd: "" },
      { name: "MCP 外掛", state: "1 個", hook: "台灣法律判決查詢",
        body: ["讓 agent 直接查判決資料。"], cmd: "" },
    ],
  },
  {
    g: "已經死了的",
    n: "13 項",
    note: "留在這頁，是因為只看還活著的東西會誤判",
    cards: [
      { name: "coach", state: "停用", hook: "空轉一個月才被發現",
        body: ["2026-08-19 停用。停用前主引擎路徑寫死失效、Telegram 又發不出訊息（403），表現就是「教練不理你了」。",
               "探針說它活著，可是它兌現不了任何一件該做的事。這是整張圖最重要的一格：健康檢查問「它有沒有活著」，我的分類問「它對我有沒有用」。"],
        cmd: "" },
      { name: "fish-tank-hud", state: "停用", hook: "我自己關的",
        body: ["魚缸觀察介面。功能都正常，是產出達不到我要的——這種死法最難被監控抓到。"], cmd: "" },
      { name: "n8n", state: "已移除", hook: "2026-06-29",
        body: ["視覺化自動流程。移除前唯一還在用的只剩一個停用的測試流程。",
               "清掉 2.1G 容器與映像檔，也讓 butler-broker 解除依賴。"], cmd: "" },
      { name: "qdrant / couchdb", state: "已移除", hook: "2026-06-27",
        body: ["向量資料庫與文件資料庫，容器、網路、映像檔都清掉。",
               "資料目錄留著，當作刪除審核流程的證據。"], cmd: "" },
      { name: "butler-broker", state: "已退役", hook: "權限大但幾乎沒被呼叫",
        body: ["透過 MCP 連到 Docker 的中介服務。閒置風險太高就先關了，備份還留著。"], cmd: "" },
      { name: "其餘 8 項", state: "已移除", hook: "Homer、CasaOS、langfuse、whisper、opencode-go…",
        body: ["退役、被取代、或從沒真的上線過。死因比功能更能說明判斷。"], cmd: "" },
    ],
  },
];

export default function ConversationMemory() {
  return (
    <>
      <SiteHeader project="每次開新對話，都在考我" />
      <main className="shell">
        <Link className="backlink" href="/">← 回作品集</Link>

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

        <CaseSummary
          problem="額度用完、隔幾天回來，已經不記得是哪個對話，結果又把同一件事重新討論一次。"
          decision="問題不是 AI 會忘，是負擔被丟回給我。所以記憶不存「結論」，只存「怎麼查」。"
          check="舊討論索引只能提醒「這個以前討論過」，要不要沿用由我決定——避免它拿過期方案來搪塞。"
          result="行為確實變了。但搜尋單位仍是「對話」，而對話標題不等於內容，這個問題還沒解。"
          evidence="仍有未解問題"
          level="open"
        />

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
            換一個 agent，又要從頭教一次。
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
            下面是那張地圖的展示版，點任何一張卡可以展開。
            每張卡背面都有一行查證指令——這頁只是快照，可能已經不對了，
            要相信的是機器，不是這頁。主機名稱、網域與絕對路徑不在展示範圍內。
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
                            DEAD.includes(c.state) ? "state-off" : "state-on"
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
                        {c.cmd ? <span className="redacted">{c.cmd}</span> : null}
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
          <div className="band-head">
            <h2>一天當中，它只在我不看的時候工作</h2>
            <span className="rowlabel">14 件排程 · 我沒下令也會跑</span>
          </div>
          <Rhythm
            bands={[
              { from: 0, to: 8, k: "我在睡覺", s: "備份、異地備份、記憶漂移檢查、歸檔", c: 2 },
              { from: 8, to: 12, k: "我起床", s: "健康報告、宣告與現實對帳", c: 1 },
              { from: 12, to: 24, k: "沒有任何排程", s: "白天它不吵我", c: 0 },
            ]}
            caption="中午之後的空白是刻意留的，不是還沒排。工具在我工作的時候應該安靜——會吵人的自動化，最後都會被關掉。"
          />
        </section>

        <section className="band">
          <div className="band-head">
            <h2>還沒解決的：我找得到那個對話，找不到那句話</h2>
            <span className="tag tag-open">未解</span>
          </div>
          <p>
            因為額度有限，沿用原本的對話比開新的省，所以我會先找原對話。
            但我的<strong>搜尋單位是「對話」，而索引記的是「主題 + 我最後怎麼處置」</strong>。
            這中間漏掉了一整層。
          </p>

          <div className="honest">
            <h2>具體卡在哪</h2>
            <ul>
              <li>
                我搜「破產預測」找得到那個對話，
                <strong>但找不到「我當時為什麼決定用 Recall 優先」</strong>——
                那個判斷埋在第四十幾則訊息裡，索引沒有記，標題也不會寫。
              </li>
              <li>
                對話會漂移。開頭在談 A，聊到後來變成 B，
                <strong>標題停在 A</strong>。聊得越久，標題越不代表內容。
              </li>
              <li>
                要真的解，得做到<strong>訊息層級的語意檢索</strong>——嵌入加向量檢索。
                而我為了別的需求裝過向量資料庫，後來因為用不到而移除了。
                所以這不是「還沒想到怎麼做」，是<strong>我判斷過那個成本，當時決定不付</strong>。
              </li>
            </ul>
            <p>
              終點的限制和起點是同一個：額度。省 token 所以要找舊對話，
              找舊對話需要更好的索引，更好的索引要跑嵌入——而那也要成本。
              <strong>這個故事是閉環的，我還沒找到出口。</strong>
            </p>
          </div>
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
