import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const projectRoot = new URL("../", import.meta.url);

async function html(path = "") {
  const suffix = path ? `${path.replace(/^\//, "")}/index.html` : "index.html";
  return readFile(new URL(`../out/${suffix}`, import.meta.url), "utf8");
}

test("exports the portfolio home with the current positioning", async () => {
  const output = await html();
  assert.match(output, /<title>馬彥宸｜投資研究作品集<\/title>/i);
  assert.match(output, /投資研究助理／初階研究員/);
  assert.match(output, /建立可以被驗證的投資論點/);
  assert.match(output, /企業破產風險預測/);
  assert.match(output, /便利商店產業及財務分析/);
  assert.doesNotMatch(output, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("leads the home page with investment evidence and links to each study", async () => {
  const output = await html();
  for (const figure of ["3.6 年", "+72%", "3 份"]) assert.match(output, new RegExp(figure.replace("+", "\\+")));
  for (const target of [
    "/projects/bankruptcy-risk/",
    "/projects/equity-research/",
    "/projects/convenience-store/",
  ]) {
    assert.match(output, new RegExp(`href="${target}"`));
  }
  assert.match(output, /href="\/reports\/ma-yen-chen-investment-research-resume\.pdf"/);
});

// 這一組守的是這個站踩過三次的坑：頁面上寫的數量，跟實際檔案／實際渲染對不上。
// 卡片數 25 vs 29、簡報 26 vs 25 頁、技術報告頁數，都是這樣漏掉的。
test("every count stated on a page matches what is actually there", async () => {
  const pdfPages = async (name) =>
    (await readFile(new URL(`../public/reports/${name}`, import.meta.url), "latin1"))
      .match(/\/Type\s*\/Page[^s]/g)?.length ?? 0;

  assert.equal(await pdfPages("ma-yen-chen-bankruptcy-risk-report.pdf"), 10);
  assert.equal(await pdfPages("ma-yen-chen-convenience-store-deck.pdf"), 25);
  assert.equal(await pdfPages("ma-yen-chen-onepager.pdf"), 1);
  assert.equal(await pdfPages("ma-yen-chen-hon-hai-investment-case.pdf"), 10);

  const risk = await html("projects/bankruptcy-risk");
  assert.match(risk, /10 頁整合技術報告/, "技術報告頁數與 PDF 對不上");

  const store = await html("projects/convenience-store");
  assert.match(store, /下載原始簡報 25 頁/, "簡報頁數與 PDF 對不上");
  assert.match(store, /公開版 25 頁可下載/);

  const equity = await html("projects/equity-research");
  assert.match(equity, /下載 10 頁研究報告 PDF/, "個股研究頁數與 PDF 對不上");

  // 地圖卡片數必須與分享描述一致（分享卡曾寫 25，實際渲染 29）
  const memory = await html("projects/conversation-memory");
  const cards = (memory.match(/<details class="card"/g) ?? []).length;
  const claimed = Number(memory.match(/含 (\d+) 張可展開的伺服器地圖/)?.[1]);
  assert.equal(cards, claimed, `實際 ${cards} 張卡，分享描述寫 ${claimed} 張`);
});

test("keeps the limitations scoped to the work, not to the person", async () => {
  const output = await html("projects/equity-research");
  assert.match(output, /交易明細待補/);
  assert.match(output, /不能拿它假裝自己買進前就看見答案/);
  // 這兩句在 2026-08-20 移除：一句無法量測，一句把系統設計寫成個人缺陷
  assert.doesNotMatch(output, /沒有量過實際省多少時間/);
  assert.doesNotMatch(output, /可能只是最近事情比較少/);
});

test("exports the Hermes public-evidence case", async () => {
  const output = await html("projects/hermes-line-media");
  assert.match(output, /Issue #57882/);
  assert.match(output, /PR #57884/);
  assert.match(output, /語音可進入STT/);
  assert.match(output, /技術實作有 AI 協助/);
});

test("exports the AI assistant case", async () => {
  const output = await html("projects/ai-assistant");
  assert.match(output, /用一個對話入口/);
  assert.match(output, /最小權限/);
  assert.match(output, /真實使用案例/);
  await access(new URL("../public/evidence/assistant-demo-note.md", import.meta.url));
  await access(new URL("../public/evidence/assistant-demo-verification.json", import.meta.url));
});

test("exports the two newer cases", async () => {
  const [memory, equity] = await Promise.all([
    html("projects/conversation-memory"),
    html("projects/equity-research"),
  ]);
  assert.match(memory, /我的伺服器地圖/);
  assert.match(memory, /docker ps --filter name=immich_server/);
  assert.match(equity, /鴻海/);
  assert.match(equity, /沒有金額、沒有股數、沒有目前持倉/);
  assert.match(equity, /伺服器與電動車/);
  assert.match(equity, /交易明細待補/);
  assert.doesNotMatch(equity, /含息總報酬|年化約 16%|2021 下半年/);
  await access(new URL("../public/reports/ma-yen-chen-hon-hai-investment-case.pdf", import.meta.url));
});

test("never exposes host names, absolute paths or the personal phone number", async () => {
  const pages = await Promise.all([
    html(),
    ...["hermes-line-media", "ai-assistant", "bankruptcy-risk", "conversation-memory",
        "equity-research", "convenience-store"].map((s) => html(`projects/${s}`)),
  ]);
  for (const page of pages) {
    assert.doesNotMatch(page, /\.ts\.net/); // 不在這裡寫出 tailnet 名稱本身
    assert.doesNotMatch(page, /\/mnt\/data|\/home\/y3c/);
    assert.doesNotMatch(page, /0900-\d{3}-\d{3}/);
  }
});

test("keeps the analysis cases and their downloadable evidence", async () => {
  const [risk, store, equity] = await Promise.all([
    html("projects/bankruptcy-risk"),
    html("projects/convenience-store"),
    html("projects/equity-research"),
  ]);
  assert.match(risk, /高 Accuracy/);
  assert.match(store, /不能直接證明疫情因果/);
  assert.match(equity, /250～300 元怎麼來的/);
  await access(new URL("../public/reports/ma-yen-chen-bankruptcy-risk-report.pdf", import.meta.url));
  await access(new URL("../public/reports/ma-yen-chen-convenience-store-deck.pdf", import.meta.url));
  await access(new URL("../public/reports/ma-yen-chen-hon-hai-investment-case.pdf", import.meta.url));
});

test("publishes the group deck without the cover page that names other members", async () => {
  const store = await html("projects/convenience-store");
  assert.match(store, /封面列有其他四位組員姓名，未取得公開同意/);

  const deckPath = new URL("../public/reports/ma-yen-chen-convenience-store-deck.pdf", import.meta.url);

  // 這個 repo 是公開的，所以測試裡不能列出那四個人的名字——
  // 先前的版本就是這樣把姓名從 PDF 搬進了原始碼。
  // 改成兩個不需要指名的檢查：封面那一頁不在檔案裡，而且抽出來的文字不含署名區塊。
  const pageCount = (await readFile(deckPath, "latin1")).match(/\/Type\s*\/Page[^s]/g)?.length ?? 0;
  assert.equal(pageCount, 25, "公開版必須是 25 頁；26 頁代表封面沒有被移除");

  // PDF 內的中文是 glyph index，直接搜位元組永遠找不到，必須抽文字。
  const text = execFileSync("pdftotext", [fileURLToPath(deckPath), "-"], { encoding: "utf8" });
  assert.doesNotMatch(text, /組員/, "抽出的文字含「組員」，代表署名頁還在");
  assert.match(text, /超商/, "抽不到內容文字，表示這個檢查本身失效了");
});

test("ships robots.txt and a sitemap covering every case", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("../out/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../out/sitemap.xml", import.meta.url), "utf8"),
  ]);
  assert.match(robots, /Sitemap: https:\/\/y3ccc\.github\.io\/sitemap\.xml/);
  for (const slug of [
    "hermes-line-media",
    "ai-assistant",
    "bankruptcy-risk",
    "conversation-memory",
    "equity-research",
    "convenience-store",
  ]) {
    assert.match(sitemap, new RegExp(`/projects/${slug}/`));
  }
});

test("gives every case its own share metadata instead of inheriting the home page", async () => {
  for (const slug of [
    "hermes-line-media",
    "ai-assistant",
    "bankruptcy-risk",
    "conversation-memory",
    "equity-research",
    "convenience-store",
  ]) {
    const output = await html(`projects/${slug}`);
    const title = output.match(/property="og:title" content="([^"]+)"/)?.[1];
    assert.ok(title, `${slug} 缺少 og:title`);
    assert.notEqual(title, "馬彥宸｜投資研究作品集", `${slug} 仍繼承首頁 og:title`);
    // 每個案例要有自己的縮圖，不能共用首頁那張
    assert.match(output, new RegExp(`/og/${slug}\\.png`), `${slug} 沒有專屬縮圖`);
    assert.doesNotMatch(output, /og-investment-research\.png/, `${slug} 仍在用首頁縮圖`);
    await access(new URL(`../public/og/${slug}.png`, import.meta.url));
  }
});

test("does not retain starter preview assets", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(layout, /og-investment-research\.png/);
  await access(new URL("../public/og-investment-research.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", projectRoot)));
});
