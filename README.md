# 馬彥宸｜AI 產品應用作品集

公開網址：<https://y3ccc.github.io>

以 GitHub Pages 託管的求職作品集。首頁 + 六個案例，每個案例都標示證據強度：
外部可查核、可下載成果、自我驗收，或仍有未解問題。

| 案例 | 內容 | 證據 |
|---|---|---|
| Hermes LINE 媒體改善 | 問題重現、驗收條件、回歸測試 | 公開 Issue 與 PR（含未被合併的結果） |
| 企業破產風險預測 | 類別不平衡、指標取捨、防資料洩漏驗證 | 12 頁原始課程報告 |
| 一次個股研究 | 論述推導、刻意排除了什麼、事後檢討 | 已了結部位，本人紀錄 |
| AI 協作生活助理 | 需求定義、權限邊界、停用決策 | 去識別化驗收紀錄 |
| 每次開新對話，都在考我 | 判準設計、缺口認定 | 仍有未解問題 |
| 便利商店產業及財務分析 | 市占、十年營收、估值 | 25 頁簡報原檔 |

## 本機使用

需要 Node.js 22 以上。

```bash
npm install
npm run dev
```

## 驗證

```bash
npm run lint
npm run build      # 測試讀 out/，所以要先 build
npm test           # 需要 poppler-utils（pdftotext）
```

`npm test` 除了內容斷言，也守**數量一致性**——頁面上寫的卡片數與 PDF 頁數，
必須跟實際渲染結果和檔案本身對得上。這個站在這一類上錯過三次，所以寫成測試。

### 版面驗證（需要瀏覽器）

```bash
npx playwright install chromium
node scripts/screenshot.mjs      # 7 頁 × 桌機/手機 × 淺色/深色 = 28 張
```

檢查橫向溢出、console 錯誤，以及**捲動容器是否真的捲得動**
（曾經有一張表被 `overflow:hidden` 蓋掉，手機上整欄讀不到也捲不了）。
有問題時回傳非零離開碼。截圖預設寫到 `.shots/`，可用 `SHOTS_DIR` 覆寫。

## 發布

推送至 `main` 後 GitHub Actions 會跑 lint → build → test，全過才發布到 Pages。

## 邊界

站上不含私人訊息、主機名稱、伺服器入口、Token、憑證或絕對路徑；
第三人姓名一律不公開（小組簡報的署名封面已於公開版移除）。
