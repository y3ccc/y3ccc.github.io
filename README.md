# 馬彥宸｜AI 產品應用作品集

公開網址：<https://y3ccc.github.io>

這是一個以 GitHub Pages 長期託管的公開求職作品集，主軸為：

- AI 協作生活助理：需求盤點、服務整合、工具取捨與測試驗收
- Hermes LINE 媒體改善：問題重現、回歸測試、Issue 與 PR
- 便利商店產業分析：公開資料、企業比較與團隊整合
- 企業破產風險預測：類別不平衡、指標取捨與研究限制

## 本機使用

需要 Node.js 22 以上版本。

```bash
npm install
npm run dev
```

## 驗證與發布

```bash
npm run deck
npm test
```

推送至 `main` 後，GitHub Actions 會建立靜態網站並發布到 GitHub Pages。

作品集中不包含私人訊息、伺服器入口、Token、憑證或完整系統設定。
