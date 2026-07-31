import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../vanilla/assets/img/site-images");

const sites = [
  { id: "max-warehouse", url: "https://www.maxwarehouse.com/" },
  { id: "shop-lc", url: "https://www.shoplc.com/" },
  { id: "bruce-bolt", url: "https://brucebolt.us/" },
  { id: "kashkha", url: "https://www.kashkha.com/" },
  { id: "shop-milano", url: "https://shopmilano.com/" },
  { id: "xtreme-soccer", url: "https://xtremesocceronline.com/" },
  { id: "lets-be-healthy", url: "https://letsbehealthy.com/" },
  { id: "niiyaa", url: "https://niiyaa.in/" },
  { id: "blend-it-raw", url: "https://blenditrawapothecary.in/" },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1200, height: 675 },
  deviceScaleFactor: 1,
});

for (const site of sites) {
  const page = await context.newPage();
  const out = path.join(outDir, `${site.id}.jpg`);
  try {
    await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(4000);
    await page.screenshot({ path: out, type: "jpeg", quality: 85, fullPage: false });
    console.log("OK", site.id);
  } catch (err) {
    console.error("FAIL", site.id, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();
