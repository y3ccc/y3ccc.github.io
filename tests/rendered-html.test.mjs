import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the portfolio home", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>馬彥宸｜產業研究 × AI 應用企劃作品集<\/title>/i);
  assert.match(html, /把資訊整理成/);
  assert.match(html, /便利商店產業與財務分析/);
  assert.match(html, /AI 協作生活助理/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("server-renders the convenience-store project", async () => {
  const response = await render("/projects/convenience-store");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /疫情之後/);
  assert.match(html, /我負責讓五個人的內容/);
  assert.match(html, /不能直接證明疫情因果/);
});

test("server-renders the AI assistant project", async () => {
  const response = await render("/projects/ai-assistant");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /把零散的日常/);
  assert.match(html, /真實使用案例/);
  assert.match(html, /AI 協作，不等於把決定交出去/);
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
