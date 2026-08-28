import { chromium } from "playwright";

const url = process.env.PREVIEW_URL ?? "http://127.0.0.1:3107/";
const shots = [
  ["/tmp/y3c-home-v2-rich-desktop-final.png", 1440, 900],
  ["/tmp/y3c-home-v2-rich-mobile-final.png", 390, 844],
];

const browser = await chromium.launch({
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

for (const [path, width, height] of shots) {
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle" });

  await page.evaluate(async () => {
    const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.75) {
      window.scrollTo(0, y);
      await pause(120);
    }
    await Promise.all(
      [...document.images].map((image) =>
        image.complete ? Promise.resolve() : image.decode().catch(() => undefined),
      ),
    );
    window.scrollTo(0, 0);
    await pause(200);
  });

  const unloaded = await page.locator("img").evaluateAll((images) =>
    images.filter((image) => !image.complete || image.naturalWidth === 0).length,
  );
  if (unloaded > 0) throw new Error(`${unloaded} images did not load`);

  await page.screenshot({ path, fullPage: true });
  await context.close();
}

await browser.close();
console.log("homepage preview screenshots ready");
