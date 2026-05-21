#!/usr/bin/env python3
"""Download and optimize official brand collection images."""
from __future__ import annotations

import re
import ssl
import subprocess
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BRANDS_DIR = ROOT / "public" / "images" / "brands"
UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)

BRAND_SOURCES: dict[str, dict[str, str]] = {
    "roberto-collina": {
        "hero": "https://www.robertocollina.com/cdn/shop/files/Collina_SS26_19.jpg?v=1778071060&width=1920",
        "aesthetic1": "https://www.robertocollina.com/cdn/shop/collections/donna.jpg?v=1778072525&width=1200",
        "aesthetic2": "https://www.robertocollina.com/cdn/shop/files/261FXA34001-03_8.jpg?v=1772792841&width=1200",
    },
    "blonde-8": {
        "hero": "https://www.blondeno8.com/cdn/shop/files/2501_DST_BLONDE_NO8_09-2331.jpg?crop=center&height=2830&v=1753435385&width=1887",
        "aesthetic1": "https://www.blondeno8.com/cdn/shop/files/moore5200-a.jpg?crop=center&height=4308&v=1758021016&width=2872",
        "aesthetic2": "https://www.blondeno8.com/cdn/shop/files/2501_DST_BLONDE_NO8_08-1854.jpg?crop=center&height=2821&v=1753436241&width=1881",
    },
    "rrd": {
        "hero": "https://robertoriccidesigns.com/wp-content/uploads/2026/01/split.jpg",
        "aesthetic1": "https://robertoriccidesigns.com/wp-content/uploads/2026/01/SplitPage_Sx_01_ok.jpg",
        "aesthetic2": "https://robertoriccidesigns.com/wp-content/uploads/2026/01/SplitPage_dx_01_Ok.jpg",
    },
    "la-bruket": {
        "hero": "https://www.labruket.com/cdn/shop/files/EN_01_250120_ADS_BRAND.jpg?v=1738580794&width=1920",
        "aesthetic1": "https://www.labruket.com/cdn/shop/files/Wellbeing_Lip_Balms14.jpg?v=1761127920&width=1200",
        "aesthetic2": "https://www.labruket.com/cdn/shop/files/MicrosoftTeams-image_26.jpg?v=1747412935&width=1200",
    },
    "philippe-model": {
        "hero": "https://a.storyblok.com/f/252529/1898x1978/4f6a576932/nuovo-progetto-2026-04-22t105421-659.jpg/m/1920x0/filters:quality(80)",
        "aesthetic1": "https://a.storyblok.com/f/252529/970x1017/b8bffddf4d/nuovo-progetto-2026-04-21t175027-180.jpg/m/1920x0/filters:quality(80)",
        "aesthetic2": "https://a.storyblok.com/f/252529/789x1494/f7cb0aa861/nuovo-progetto-2026-04-22t105959-426.jpg/m/1920x0/filters:quality(80)",
    },
    "ibeliv": {
        "hero": "https://www.ibeliv.fr/cdn/shop/files/2603-IBELIV-Ve_ronikaL-1698_1.jpg?v=1775657893&width=1920",
        "aesthetic1": "https://www.ibeliv.fr/cdn/shop/files/2603-IBELIV-Ve_ronikaL-0894.jpg?v=1775657893&width=1200",
        "aesthetic2": "https://www.ibeliv.fr/cdn/shop/files/2603-IBELIV-Ve_ronikaL-2012_1_1.jpg?v=1775658459&width=1200",
    },
    "bella-dahl": {
        "hero": "https://www.belladahl.com/cdn/shop/files/031226_BD_su_parker31456_copy.jpg?v=1778021543&width=1920",
        "aesthetic1": "https://www.belladahl.com/cdn/shop/files/012325_BD_SP2626331_4608a4b9-40d2-4f85-b88a-da00f1c2a3b8.jpg?v=1775504090&width=1920",
        "aesthetic2": "https://www.belladahl.com/cdn/shop/files/split-back-button-down-white-7378073.jpg?v=1777484989&width=1200",
    },
    "montagut": {
        "hero": "https://montagut.com/img/ets_megamenu/f73340cb70-visuel_page_femme_900x1300px.jpg",
        "aesthetic1": "https://montagut.com/img/ets_megamenu/0ae74fd58d-visuel_page_homme_900x1300px.jpg",
        "aesthetic2": "https://montagut.com/img/ets_megamenu/db1b235815-visuel_page_lookbook_900x1300px.jpg",
    },
    "5-octobre": {
        "hero": "https://www.5octobre.com/srcData/additionalImages/00/00/00/01/amalfi_coast_021667_1.jpg",
        "aesthetic1": "https://www.5octobre.com/srcData/additionalImages/00/00/00/01/bagues_462648_1.jpg",
        "aesthetic2": "https://www.5octobre.com/srcData/additionalImages/00/00/00/01/colliers_462653_2.jpg",
    },
    "forte-forte": {
        "hero": "https://www.forte-forte.com/media/wysiwyg/hero_banner_D_3.jpg",
        "aesthetic1": "https://www.forte-forte.com/media/wysiwyg/f_f_banner_2_d_1.jpg",
        "aesthetic2": "https://www.forte-forte.com/media/wysiwyg/f_f_carosello_2.1.jpg",
    },
    "vanessa-bruno": {
        "hero": "https://www.vanessabruno.fr/img/uploads/pushs/img_boutique/VB/1/visuel_boutique_26_2.jpg",
        "aesthetic1": "https://www.vanessabruno.fr/img/uploads/pushs/img_boutique/VB/1/visuel_boutique_26_3.jpg",
        "aesthetic2": "https://www.vanessabruno.fr/img/uploads/pushs/img_boutique/VB/1/visuel_boutique_93_2.jpg",
    },
    "faliero-sarti": {
        "hero": "https://www.falierosarti.com/media/wysiwyg/Box_sito_quadrato_6.jpg",
        "aesthetic1": "https://www.falierosarti.com/media/wysiwyg/o.jpg",
        "aesthetic2": "https://www.falierosarti.com/media/catalog/product/_/e/_e26-indossato_e262079-89450-1.jpg?width=1200",
    },
    "jerome-dreyfuss": {
        "hero": "https://www.jerome-dreyfuss.com/cdn/shop/files/4_5_RAPHIA-3.jpg?v=1779270512&width=1920",
        "aesthetic1": "https://www.jerome-dreyfuss.com/cdn/shop/files/akeneo_image_6a0dcd67d2ccb.jpg?v=1779289467&width=1200",
        "aesthetic2": "https://www.jerome-dreyfuss.com/cdn/shop/files/akeneo_image_6a0dcd67aa131.jpg?v=1779289467&width=1200",
    },
    "masons": {
        "hero": "https://masons.it/cdn/shop/collections/f8572b60f828d7e0d98960e961224a3d_6a197bad-1a24-4aea-80b5-b1084118e6a3.jpg?v=1765286806&width=1200",
        "aesthetic1": "https://masons.it/cdn/shop/collections/8795dd2b3afe11c9177b560e3bc2c09f_e70f7ae7-e28b-47cc-9ad7-f3563a28a1bf.jpg?v=1765286838&width=1200",
        "aesthetic2": "https://masons.it/cdn/shop/collections/MG_4707.jpg?v=1750749529&width=1200",
    },
    "seven": {
        "hero": "https://www.7forallmankind.eu/media/wysiwyg/new-arrivals/woman-na-25.jpg",
        "aesthetic1": "https://www.7forallmankind.eu/media/wysiwyg/new-arrivals/woman-bs-25.jpg",
        "aesthetic2": "https://7forallmankind.eu/media/wysiwyg/black-friday/black-friday-2025/black-friday-woman-h.jpg",
    },
    "majestic-filatures": {
        "hero": "https://www.majesticfilatures.com/cdn/shop/files/MAJESTIC_LOOKBOOK_SS26_495.png?v=1771257761&width=1200",
        "aesthetic1": "https://www.majesticfilatures.com/cdn/shop/files/200426_Majestic_Filatures3943.jpg?v=1777905399&width=1200",
        "aesthetic2": "https://www.majesticfilatures.com/cdn/shop/files/K214-FGI261-1115-2.jpg?v=1770577776&width=1200",
    },
    "newtone": {
        "hero": "https://newtone-brand.com/cdn/shop/files/banner-ss26-fuschia-deskshop_6de530be-0979-4046-a84e-e9a5b0012fde.jpg?v=1776701329&width=2800",
        "aesthetic1": "https://newtone-brand.com/cdn/shop/files/newtone-brand-ss26-april-02_7d2ac670-4212-4aa7-b635-bcbf544bedaf.jpg?v=1776694642&width=1150",
        "aesthetic2": "https://newtone-brand.com/cdn/shop/files/newtone-brand-ss26-april-09_76baf3ad-b778-4ae1-8d61-ec9832ee6559.jpg?v=1776694642&width=1150",
    },
    "absolut-cachemere": {
        "hero": "https://www.absolutcashmere.com/cdn/shop/files/Sliders-Desktop_ed4bb25c-4e53-49d9-9d8d-554bf1803a2e.jpg?crop=center&height=1030&v=1779197917&width=2400",
        "aesthetic1": "https://www.absolutcashmere.com/cdn/shop/files/Push-leger_76832270-99de-4645-82a0-25f5ab86c639.jpg?crop=center&height=1400&v=1779198114&width=1400",
        "aesthetic2": "https://www.absolutcashmere.com/cdn/shop/files/Push-brushed_58244a3c-df86-4981-bef9-10149349b9c3.jpg?crop=center&height=1400&v=1779198133&width=1400",
    },
    "bella-jones": {
        "hero": "https://www.bellajones.eu/img/home-pahe-header-def.png",
        "aesthetic1": "https://www.bellajones.eu/img/cms/130-1830.jpg",
        "aesthetic2": "https://www.bellajones.eu/img/cms/090-1233.jpg",
    },
    "laid-back": {
        "hero": "https://static.wixstatic.com/media/ea3c3f_8eece03a14624c33a09f813aa517b8f5~mv2.jpg/v1/fill/w_1192,h_794,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea3c3f_8eece03a14624c33a09f813aa517b8f5~mv2.jpg",
        "aesthetic1": "https://static.wixstatic.com/media/ea3c3f_d4f78e3f436646d291380ca239108fc1~mv2.jpg/v1/fill/w_430,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4228.jpg",
        "aesthetic2": "https://static.wixstatic.com/media/ea3c3f_8a71ea954cbe444fa958367bb2c52bbdf001.jpg/v1/fill/w_1880,h_1058,enc_auto/file.jpeg",
    },
    "momoni": {
        "hero": "https://cdn.momoni.com.filoblu.com/rx/q_100,w_1920,ofmt_webp/media/wysiwyg/16.momoni-cueva-long-silk-dress-cyclamen-back-sash-v-neck-elegant.jpg",
        "aesthetic1": "https://cdn.momoni.com.filoblu.com/rx/q_100,w_1920,ofmt_webp/media/wysiwyg/20.momoni-mesilla-silk-shirt-rancho-printed-trousers-magenta-look.jpg",
        "aesthetic2": "https://cdn.momoni.com.filoblu.com/rx/q_100,w_1920,ofmt_webp/media/wysiwyg/5.momoni-brooklyn-linen-shirt-romero-striped-trousers-sienna-look.jpg",
    },
    "lou-andrea": {
        "hero": "https://www.coolculture.it/cdn/shop/files/ai25-lou-andrea-sab25403.jpg?v=1759258840&width=1200",
        "aesthetic1": "https://www.coolculture.it/cdn/shop/files/ai25-lou-andrea-nc1942005.jpg?v=1759258833&width=1200",
        "aesthetic2": "https://www.coolculture.it/cdn/shop/files/ai25-lou-andrea-nv2574106.jpg?v=1759258811&width=1200",
    },
    "claris-virot": {
        "hero": "https://www.clarisvirot.com/modules/kwkboxdesign/views/uploads/1-376-SACS-AVA.jpg",
        "aesthetic1": "https://www.clarisvirot.com/modules/kwkboxdesign/views/uploads/1-373-BIJOUX.jpg",
        "aesthetic2": "https://www.clarisvirot.com/modules/kwkboxdesign/views/uploads/1-15-COLLAB-MARINE-VIGNES.jpg",
    },
    "soeur": {
        "hero": "https://www.soeur.fr/cdn/shop/files/NL_BELLISSIMA_4_retouche_BD_e8cfbf64-1b8d-4dda-b644-3dead645bdf4.jpg?v=1773426445&width=1920",
        "aesthetic1": "https://www.soeur.fr/cdn/shop/files/SEM0947BELLIMIN26SMAR03-1.jpg?v=1763466732&width=1200",
        "aesthetic2": "https://www.soeur.fr/cdn/shop/files/SEM0958SUZETTE26SECR41-1.jpg?v=1763466788&width=1200",
    },
    "ct-plage": {
        "hero": "https://www.ct-plage.com/wp/wp-content/uploads/2026/02/26ssc-Home-thumb-827x1240.jpg",
        "aesthetic1": "https://www.ct-plage.com/wp/wp-content/uploads/2026/02/26ssc-Home-thumb-827x1240.jpg",
        "aesthetic2": "https://www.ct-plage.com/wp/wp-content/uploads/2026/02/26ssc-Home-thumb-827x1240.jpg",
    },
    "tonal": {
        "hero": "https://media.modz.fr/pictures/2026/05-mai/92685/modele3/92685_137.jpg?func=fit&w=1200",
        "aesthetic1": "https://media.modz.fr/pictures/2026/05-mai/92685/modele3/92685_057.jpg?func=fit&w=1200",
        "aesthetic2": "https://media.modz.fr/pictures/2025/10-octobre/73132/modele3/73132_005.jpg?func=fit&w=1200",
    },
    "bowery": {
        "hero": "https://www.bowery-nyc.com/cdn/shop/files/Sfondo_1.jpg?v=1774357846&width=1920",
        "aesthetic1": "https://www.bowery-nyc.com/cdn/shop/files/MG_6003.jpg?v=1712648065&width=1920",
        "aesthetic2": "https://www.bowery-nyc.com/cdn/shop/files/48BWPWB283CASTLEROCK_20437.jpg?v=1778579444&width=1920",
    },
    "la-nouvelle": {
        "hero": "https://media.modz.fr/pictures/2025/10-octobre/74457/modele3/74457_025.jpg?func=fit&w=1200",
        "aesthetic1": "https://media.modz.fr/pictures/2025/6398/modele3/6398520_1.jpg?func=fit&w=1200",
        "aesthetic2": "https://media.modz.fr/pictures/2025/6398/modele3/6398515_1.jpg?func=fit&w=1200",
    },
}

REFERRERS = {
    "5-octobre": "https://www.5octobre.com/",
}

CTX = ssl.create_default_context()
CTX.check_hostname = False
CTX.verify_mode = ssl.CERT_NONE


def download(url: str, dest: Path, referer: str | None = None) -> None:
    headers = {"User-Agent": UA}
    if referer:
        headers["Referer"] = referer
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, context=CTX, timeout=45) as resp:
        data = resp.read()
    if len(data) < 5000:
        raise ValueError(f"File too small ({len(data)} bytes), likely not an image")
    dest.write_bytes(data)


def optimize(input_path: Path, output_path: Path, crop: str | None = None) -> None:
    resized = input_path.with_suffix(".resized.jpg")
    cropped = input_path.with_suffix(".cropped.jpg")
    source = input_path

    if crop == "top":
        subprocess.run(["sips", "-g", "pixelHeight", "-g", "pixelWidth", str(input_path)], check=True, capture_output=True)
        # crop top third for ct-plage variety
        subprocess.run(
            ["sips", "-c", "800", "827", str(input_path), "--out", str(cropped)],
            check=True,
            capture_output=True,
        )
        source = cropped
    elif crop == "bottom":
        subprocess.run(
            ["sips", "-c", "800", "827", str(input_path), "--out", str(cropped)],
            check=True,
            capture_output=True,
        )
        source = cropped

    subprocess.run(["sips", "-Z", "1080", str(source), "--out", str(resized)], check=True, capture_output=True)
    subprocess.run(["cwebp", "-q", "80", str(resized), "-o", str(output_path)], check=True, capture_output=True)

    for tmp in (resized, cropped):
        if tmp.exists():
            tmp.unlink()


def main() -> int:
    failed: list[str] = []
    ok = 0

    for slug, sources in BRAND_SOURCES.items():
        brand_dir = BRANDS_DIR / slug
        brand_dir.mkdir(parents=True, exist_ok=True)

        for key, url in sources.items():
            filename = "hero" if key == "hero" else key.replace("aesthetic", "aesthetic-")
            raw_path = brand_dir / f"{filename}.raw"
            webp_path = brand_dir / f"{filename}.webp"

            crop = None
            if slug == "ct-plage" and key == "aesthetic1":
                crop = "top"
            elif slug == "ct-plage" and key == "aesthetic2":
                crop = "bottom"

            try:
                download(url, raw_path, REFERRERS.get(slug))
                optimize(raw_path, webp_path, crop)
                raw_path.unlink(missing_ok=True)
                ok += 1
                print(f"OK  {slug}/{filename}.webp")
            except Exception as exc:
                failed.append(f"{slug}/{filename}: {exc}")
                print(f"FAIL {slug}/{filename}: {exc}", file=sys.stderr)
                raw_path.unlink(missing_ok=True)

    print(f"\nDone: {ok} ok, {len(failed)} failed")
    if failed:
        for f in failed:
            print(f"  - {f}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
