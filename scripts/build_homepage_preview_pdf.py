from __future__ import annotations

from pathlib import Path

from PIL import Image
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
TMP_DIR = ROOT / "tmp" / "pdfs" / "homepage-preview"
OUTPUT = ROOT / "output" / "pdf" / "investment-research-homepage-preview.pdf"

DESKTOP = Path("/tmp/y3c-home-v2-rich-desktop-final.png")
MOBILE = Path("/tmp/y3c-home-v2-rich-mobile-final.png")


def crop(source: Path, name: str, top: int, bottom: int) -> Path:
    image = Image.open(source).convert("RGB")
    target = TMP_DIR / name
    image.crop((0, top, image.width, min(bottom, image.height))).save(
        target, quality=95
    )
    return target


def draw_page(
    pdf: canvas.Canvas,
    image_path: Path,
    page_size: tuple[float, float],
    label: str,
    page_number: int,
) -> None:
    width, height = page_size
    pdf.setPageSize(page_size)
    pdf.setFillColor(HexColor("#f3f0e8"))
    pdf.rect(0, 0, width, height, stroke=0, fill=1)

    image = Image.open(image_path)
    margin_x = 26
    header_h = 28
    footer_h = 18
    available_w = width - margin_x * 2
    available_h = height - header_h - footer_h - 24
    scale = min(available_w / image.width, available_h / image.height)
    draw_w = image.width * scale
    draw_h = image.height * scale
    x = (width - draw_w) / 2
    y = footer_h + (available_h - draw_h) / 2

    pdf.setFillColor(HexColor("#163e58"))
    pdf.setFont("Helvetica-Bold", 9)
    pdf.drawString(margin_x, height - 20, label)
    pdf.setFillColor(HexColor("#66675f"))
    pdf.setFont("Helvetica", 8)
    pdf.drawRightString(width - margin_x, height - 20, f"PAGE {page_number:02d}")

    pdf.drawImage(str(image_path), x, y, draw_w, draw_h, preserveAspectRatio=True)
    pdf.showPage()


def main() -> None:
    TMP_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    pages = [
        (crop(DESKTOP, "desktop-hero.jpg", 0, 900), landscape(A4), "DESKTOP / HERO"),
        (
            crop(DESKTOP, "desktop-honhai.jpg", 850, 1750),
            landscape(A4),
            "DESKTOP / HON HAI RESEARCH",
        ),
        (
            crop(DESKTOP, "desktop-other-work.jpg", 1700, 2600),
            landscape(A4),
            "DESKTOP / OTHER RESEARCH",
        ),
        (
            crop(DESKTOP, "desktop-method.jpg", 2550, 3464),
            landscape(A4),
            "DESKTOP / RESEARCH METHOD",
        ),
        (crop(MOBILE, "mobile-hero.jpg", 0, 1100), A4, "MOBILE / HERO"),
        (
            crop(MOBILE, "mobile-honhai.jpg", 1050, 2300),
            A4,
            "MOBILE / HON HAI RESEARCH",
        ),
        (
            crop(MOBILE, "mobile-other-work.jpg", 2250, 3500),
            A4,
            "MOBILE / OTHER RESEARCH",
        ),
        (
            crop(MOBILE, "mobile-method.jpg", 3400, 4454),
            A4,
            "MOBILE / RESEARCH METHOD",
        ),
    ]

    pdf = canvas.Canvas(str(OUTPUT), pageCompression=1)
    pdf.setTitle("Investment research portfolio homepage preview")
    pdf.setAuthor("Ma Yen-Chen")
    for page_number, (image_path, page_size, label) in enumerate(pages, start=1):
        draw_page(pdf, image_path, page_size, label, page_number)
    pdf.save()
    print(OUTPUT)


if __name__ == "__main__":
    main()
