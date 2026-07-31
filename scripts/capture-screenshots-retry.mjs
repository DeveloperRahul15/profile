import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../vanilla/assets/img/site-images");

const sites = [
  { id: "bruce-bolt", url: "https://brucebolt.us/" },
  { id: "shop-milano", url: "https://www.shopmilano.com/" },
  { id: "xtreme-soccer", url: "https://www.xtremesocceronline.com/" },
  { id: "lets-be-healthy", url: "https://www.letsbehealthy.com/" },
  { id: "blend-it-raw", url: "https://www.blenditrawapothecary.in/" },
];

async function capture(page, site) {
  const out = path.join(outDir, `${site.id}.jpg`);
  await page.goto(site.url, { waitUntil: "load", timeout: 120000 });
  await page.waitForTimeout(5000);
  await page.screenshot({ path: out, type: "jpeg", quality: 85, fullPage: false });
  const size = fs.statSync(out).size;
  console.log("OK", site.id, size);
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1200, height: 675 },
  deviceScaleFactor: 1,
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
});

for (const site of sites) {
  const page = await context.newPage();
  try {
    await capture(page, site);
  } catch (err) {
    console.error("FAIL", site.id, err.message);
    // mShots fallback
    try {
      const shot = `https://s0.wp.com/mshots/v1/${encodeURIComponent(site.url)}?w=1200&h=675`;
      const res = await page.goto(shot, { waitUntil: "load", timeout: 120000 });
      await page.waitForTimeout(6000);
      const out = path.join(outDir, `${site.id}.jpg`);
      await page.screenshot({ path: out, type: "jpeg", quality: 85 });
      console.log("FALLBACK", site.id, fs.statSync(out).size);
    } catch (err2) {
      console.error("FALLBACK FAIL", site.id, err2.message);
    }
  } finally {
    await page.close();
  }
}

await browser.close();
