import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const root = path.join(process.cwd(), "out");
const output = path.join(process.cwd(), "public", "reports", "ma-yen-chen-hon-hai-v2-preview.pdf");
const mime = { ".css": "text/css", ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".woff2": "font/woff2" };

const server = createServer(async (req, res) => {
  try {
    const requestPath = decodeURIComponent(new URL(req.url ?? "/", "http://127.0.0.1").pathname);
    let filePath = path.join(root, requestPath);
    const info = await stat(filePath).catch(() => null);
    if (info?.isDirectory()) filePath = path.join(filePath, "index.html");
    if (!info && !path.extname(filePath)) filePath = path.join(filePath, "index.html");
    if (!filePath.startsWith(root)) throw new Error("invalid path");
    const body = await readFile(filePath);
    res.writeHead(200, { "Content-Type": mime[path.extname(filePath)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});

await new Promise((resolve) => server.listen(4175, "127.0.0.1", resolve));
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.goto("http://127.0.0.1:4175/reports/honhai-v2-preview/", { waitUntil: "networkidle" });
  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  console.log(output);
} finally {
  await browser.close();
  server.close();
}
