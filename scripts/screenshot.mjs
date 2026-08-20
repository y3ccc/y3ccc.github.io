import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, mkdir } from "node:fs/promises";
import { extname, join } from "node:path";

const ROOT = "/home/y3c/portfolio-site/out";
const OUT = "/home/y3c/.claude/jobs/1468a02c/tmp/shots";
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript",
               ".png": "image/png", ".svg": "image/svg+xml", ".json": "application/json",
               ".pdf": "application/pdf", ".woff2": "font/woff2", ".txt": "text/plain",
               ".xml": "application/xml", ".md": "text/markdown" };

const server = createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(req.url.split("?")[0]);
    if (p.endsWith("/")) p += "index.html";
    const buf = await readFile(join(ROOT, p));
    res.writeHead(200, { "content-type": MIME[extname(p)] ?? "application/octet-stream" });
    res.end(buf);
  } catch {
    res.writeHead(404).end("nf");
  }
});
await new Promise((r) => server.listen(4321, r));

const PAGES = [
  ["home", "/"],
  ["hermes", "/projects/hermes-line-media/"],
  ["assistant", "/projects/ai-assistant/"],
  ["bankruptcy", "/projects/bankruptcy-risk/"],
  ["memory", "/projects/conversation-memory/"],
  ["equity", "/projects/equity-research/"],
  ["store", "/projects/convenience-store/"],
];
const VIEWS = [["desk", 1280, 900], ["phone", 390, 844]];
const THEMES = ["light", "dark"];

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const problems = [];

for (const theme of THEMES) {
  for (const [vk, w, h] of VIEWS) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h }, colorScheme: theme,
                                           deviceScaleFactor: 1 });
    for (const [name, path] of PAGES) {
      const page = await ctx.newPage();
      const errs = [];
      page.on("console", (m) => m.type() === "error" && errs.push(m.text().slice(0, 120)));
      page.on("pageerror", (e) => errs.push("pageerror: " + e.message.slice(0, 120)));
      await page.goto(`http://127.0.0.1:4321${path}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(250);

      // 頁面本身不該橫向捲動；只有圖表容器可以
      const overflow = await page.evaluate(() => {
        const de = document.documentElement;
        const bad = [];
        if (de.scrollWidth > de.clientWidth + 1) bad.push(`body 橫向溢出 ${de.scrollWidth}>${de.clientWidth}`);
        for (const el of document.querySelectorAll("main *")) {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && r.right > de.clientWidth + 1 && !el.closest(".chart-scroll, .flow-scroll, .scroller")) {
            bad.push(`${el.tagName}.${(el.className || "").toString().split(" ")[0]} 右緣 ${Math.round(r.right)}`);
          }
        }
        return [...new Set(bad)].slice(0, 4);
      });
      if (overflow.length) problems.push(`${theme}/${vk}/${name}: ${overflow.join(" | ")}`);
      if (errs.length) problems.push(`${theme}/${vk}/${name}: console ${errs[0]}`);

      await page.screenshot({ path: `${OUT}/${theme}-${vk}-${name}.png`, fullPage: true });
      await page.close();
    }
    await ctx.close();
  }
}
await browser.close();
server.close();

console.log(`截圖 ${PAGES.length * VIEWS.length * THEMES.length} 張 → ${OUT}`);
console.log(problems.length ? "\n問題：\n" + problems.map((p) => "  ⚠️ " + p).join("\n")
                            : "\n✅ 無橫向溢出、無 console 錯誤");
