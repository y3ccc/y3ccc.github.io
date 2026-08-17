import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function html(path = "") {
  const suffix = path ? `${path.replace(/^\//, "")}/index.html` : "index.html";
  return readFile(new URL(`../out/${suffix}`, import.meta.url), "utf8");
}

test("exports the AI product portfolio home", async () => {
  const output = await html();
  assert.match(output, /<title>馬彥宸｜AI 產品應用作品集<\/title>/i);
  assert.match(output, /把真實需求轉成/);
  assert.match(output, /AI 協作生活助理/);
  assert.match(output, /Hermes LINE 媒體改善/);
  assert.match(output, /ma-yen-chen-ai-product-portfolio\.pdf/);
  assert.doesNotMatch(output, /codex-preview|Your site is taking shape|SkeletonPreview/);
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
  assert.match(output, /真實使用案例/);
  assert.match(output, /Letta、n8n/);
});

test("keeps the two analysis cases and downloadable reports", async () => {
  const [risk, store] = await Promise.all([
    html("projects/bankruptcy-risk"),
    html("projects/convenience-store"),
  ]);
  assert.match(risk, /高 Accuracy/);
  assert.match(store, /不能直接證明疫情因果/);
  await access(new URL("../public/reports/ma-yen-chen-bankruptcy-risk-report.pdf", import.meta.url));
  await access(new URL("../public/reports/ma-yen-chen-ai-product-portfolio.pdf", import.meta.url));
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
  await assert.rejects(access(new URL("../app/_sites-preview", projectRoot)));
});
