import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function html(path = "") {
  const suffix = path ? `${path.replace(/^\//, "")}/index.html` : "index.html";
  return readFile(new URL(`../out/${suffix}`, import.meta.url), "utf8");
}

test("exports the portfolio home with the current positioning", async () => {
  const output = await html();
  assert.match(output, /<title>馬彥宸｜AI 產品應用作品集<\/title>/i);
  assert.match(output, /應徵 AI 應用 \/ 產業分析師/);
  assert.match(output, /我做的不是寫出程式/);
  assert.match(output, /AI 協作生活助理/);
  assert.match(output, /Hermes LINE 媒體改善/);
  assert.doesNotMatch(output, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("leads the home page with the three figures, each linking to its case", async () => {
  const output = await html();
  for (const [figure, target] of [
    ["6,819", "/projects/bankruptcy-risk/"],
    ["#57882", "/projects/hermes-line-media/"],
    ["13", "/projects/conversation-memory/"],
  ]) {
    assert.match(output, new RegExp(figure.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(output, new RegExp(`href="${target}"`));
  }
});

test("keeps the limitations scoped to the work, not to the person", async () => {
  const output = await html();
  assert.match(output, /我不能宣稱的事/);
  assert.match(output, /問題定義、工具取捨、驗收設計，以及結果責任/);
  // 這兩句在 2026-08-20 移除：一句無法量測，一句把系統設計寫成個人缺陷
  assert.doesNotMatch(output, /沒有量過實際省多少時間/);
  assert.doesNotMatch(output, /可能只是最近事情比較少/);
});

test("exports the Hermes public-evidence case", async () => {
  const output = await html("projects/hermes-line-media");
  assert.match(output, /Issue #57882/);
  assert.match(output, /PR #57884/);
  assert.match(output, /語音可進入STT/);
  assert.match(output, /不把AI產生的程式碼包裝成獨立工程開發/);
});

test("exports the AI assistant case", async () => {
  const output = await html("projects/ai-assistant");
  assert.match(output, /把零散的日常/);
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
  assert.match(equity, /沒有金額、沒有股數、沒有我目前的持倉/);
});

test("never exposes host names, absolute paths or the personal phone number", async () => {
  const pages = await Promise.all([
    html(),
    html("projects/conversation-memory"),
    html("projects/equity-research"),
    html("projects/convenience-store"),
  ]);
  for (const page of pages) {
    assert.doesNotMatch(page, /taile01317|\.ts\.net/);
    assert.doesNotMatch(page, /\/mnt\/data|\/home\/y3c/);
    assert.doesNotMatch(page, /0900-\d{3}-\d{3}/);
  }
});

test("keeps the analysis cases and their downloadable evidence", async () => {
  const [risk, store] = await Promise.all([
    html("projects/bankruptcy-risk"),
    html("projects/convenience-store"),
  ]);
  assert.match(risk, /高 Accuracy/);
  assert.match(store, /不能直接證明疫情因果/);
  await access(new URL("../public/reports/ma-yen-chen-bankruptcy-risk-report.pdf", import.meta.url));
  await access(new URL("../public/reports/ma-yen-chen-convenience-store-deck.pdf", import.meta.url));
});

test("publishes the group deck without the cover page that names other members", async () => {
  const store = await html("projects/convenience-store");
  assert.match(store, /封面列了其他四位組員的姓名/);
  const deck = await readFile(
    new URL("../public/reports/ma-yen-chen-convenience-store-deck.pdf", import.meta.url),
  );
  for (const name of ["簡婞宇", "李庭瑜", "許志維", "王可禕"]) {
    assert.ok(!deck.includes(Buffer.from(name, "utf8")), `${name} 不得出現在公開簡報中`);
  }
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
    assert.notEqual(title, "馬彥宸｜AI 產品應用作品集", `${slug} 仍繼承首頁 og:title`);
    assert.match(output, /og-v5\.png/);
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
  assert.match(layout, /og-v5\.png/);
  await access(new URL("../public/og-v5.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", projectRoot)));
});
