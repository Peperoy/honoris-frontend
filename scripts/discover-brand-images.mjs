#!/usr/bin/env node
import { execSync } from "node:child_process";

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36";

const SITES = {
  "roberto-collina": "https://www.robertocollina.com",
  "blonde-8": "https://www.blondeno8.com",
  rrd: "https://robertoriccidesigns.com",
  "la-bruket": "https://www.labruket.com",
  "philippe-model": "https://www.philippemodel.com",
  ibeliv: "https://ibeliv.fr",
  "bella-dahl": "https://www.belladahl.com",
  montagut: "https://www.montagut.com",
  "5-octobre": "https://www.5octobre.com",
  "forte-forte": "https://forteforte.com",
  "vanessa-bruno": "https://www.vanessabruno.fr",
  "faliero-sarti": "https://falierosarti.com",
  "jerome-dreyfuss": "https://www.jerome-dreyfuss.com",
  masons: "https://www.masons.it",
  seven: "https://www.sevenforallmankind.com",
  "majestic-filatures": "https://www.majesticfilatures.com",
  newtone: "https://newtone.fr",
  "absolut-cachemere": "https://www.absolutcashmere.com",
  "bella-jones": "https://bellajones.com",
  "laid-back": "https://www.laid-back.fr",
  momoni: "https://www.momoni.it",
  "lou-andrea": "https://louandrea.fr",
  "claris-virot": "https://www.clarisvirot.com",
  soeur: "https://www.soeur.fr",
  "ct-plage": "https://ctplage.fr",
  toral: "https://toral-shoes.com",
  bowery: "https://bowery.fr",
  "la-nouvelle": "https://lanouvelle.fr",
  autry: "https://www.autry-usa.com",
  "inoui-editions": "https://inoui-editions.com",
  "knit-ted": "https://knit-ted.com",
  "les-petits-foulards": "https://lespetitsfoulards.com",
  "post-co": "https://www.victoire.shop",
  "mon-dada": "https://mondadacollections.com",
  "shan-shan": "https://shan-shan.fr",
  "essentiel-antwerp": "https://www.essentiel-antwerp.com",
};

const SKIP =
  /logo|icon|favicon|svg|1x1|width=100|width=48|width=50|width=80|width=144|thumbnail|pixel|payment|paypal|oney|\.js(\?|$)|\.css(\?|$)/i;

function scrape(url) {
  try {
    const html = execSync(
      `curl -sL -k --max-time 20 -A "${UA}" "${url}"`,
      { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 },
    );
    const matches = [
      ...html.matchAll(
        /(?:src|data-src|content|href)=["']([^"']+\.(?:jpg|jpeg|png|webp)[^"']*)["']/gi,
      ),
      ...html.matchAll(
        /(?:src|data-src)=["'](\/\/[^"']+cdn\/shop[^"']*)["']/gi,
      ),
      ...html.matchAll(
        /(?:src|data-src)=["'](\/img\/[^"']+\.(?:jpg|jpeg|png)[^"']*)["']/gi,
      ),
    ].map((m) => m[1].replace(/&amp;/g, "&"));

    const normalized = matches
      .map((img) => {
        if (img.startsWith("//")) return "https:" + img;
        if (img.startsWith("/")) {
          const base = new URL(url);
          return base.origin + img;
        }
        return img;
      })
      .filter((img) => img.startsWith("http") && !SKIP.test(img));

    return [...new Set(normalized)].slice(0, 8);
  } catch (e) {
    return [`ERROR: ${e.message}`];
  }
}

for (const [slug, url] of Object.entries(SITES)) {
  console.log(`\n=== ${slug} ===`);
  for (const img of scrape(url)) console.log(img);
}
