import { spawn } from "node:child_process";
import path from "node:path";
import { chromium } from "playwright";

const port = 4176;
const url = `http://127.0.0.1:${port}/reports/bankruptcy/`;
const output = path.join(process.cwd(), "public", "reports", "ma-yen-chen-bankruptcy-risk-report.pdf");
const nextBin = path.join(process.cwd(), "node_modules", ".bin", "next");

const server = spawn(nextBin, ["dev", "--webpack", "-p", String(port)], {
  cwd: process.cwd(),
  stdio: ["ignore", "pipe", "pipe"],
});

let serverLog = "";
server.stdout.on("data", (chunk) => { serverLog += chunk.toString(); });
server.stderr.on("data", (chunk) => { serverLog += chunk.toString(); });

async function waitForServer() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (server.exitCode !== null) throw new Error(`Next.js exited early.\n${serverLog}`);
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // The development server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Timed out waiting for ${url}.\n${serverLog}`);
}

let browser;
try {
  await waitForServer();
  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  console.log(output);
} finally {
  await browser?.close();
  server.kill("SIGTERM");
}
