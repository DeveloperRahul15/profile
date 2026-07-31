import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../vanilla/assets/img/site-images");

const sites = [
  { id: "bruce-bolt", url: "https://brucebolt.us/" },
  { id: "shop-milano", url: "https://shopmilano.com/" },
  { id: "xtreme-soccer", url: "https://xtremesocceronline.com/" },
  { id: "blend-it-raw", url: "https://blenditrawapothecary.in/" },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1200, height: 675 } });

for (const site of sites) {
  const page = await context.newPage();
  const thumbUrl = `https://image.thum.io/get/width/1200/crop/675/noanimate/${site.url}`;
  const out = path.join(outDir, `${site.id}.jpg`);
  try {
    await page.goto(thumbUrl, { waitUntil: "networkidle", timeout: 180000 });
    await page.waitForTimeout(20000);
    await page.screenshot({ path: out, type: "jpeg", quality: 85 });
    console.log("OK", site.id);
  } catch (err) {
    console.error("FAIL", site.id, err.message);
  } finally {
    await page.close();
  }
}

await browser.close();
