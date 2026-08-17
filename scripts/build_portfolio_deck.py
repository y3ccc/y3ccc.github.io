from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "reports" / "ma-yen-chen-ai-product-portfolio.pdf"
PAGE = (960, 540)

FONT_CANDIDATES = [
    Path("/mnt/data/40_upload/inbox/履歷/ma-yen-chen-resume-v5-industry-analysis/NotoSansTC-Regular.ttf"),
    Path("/usr/share/fonts/truetype/noto/NotoSansTC-Regular.ttf"),
]
BOLD_CANDIDATES = [
    Path("/mnt/data/40_upload/inbox/履歷/ma-yen-chen-resume-v5-industry-analysis/NotoSansTC-Bold.ttf"),
    Path("/usr/share/fonts/truetype/noto/NotoSansTC-Bold.ttf"),
]

INK = HexColor("#18201f")
PAPER = HexColor("#f2f0e9")
LIGHT = HexColor("#faf9f5")
MUTED = HexColor("#66706c")
LIME = HexColor("#d8e95b")
BLUE = HexColor("#bcd8f3")
ORANGE = HexColor("#ef8d62")


def first_existing(candidates):
    return next((path for path in candidates if path.exists()), None)


regular = first_existing(FONT_CANDIDATES)
bold = first_existing(BOLD_CANDIDATES)
if not regular or not bold:
    raise SystemExit("Noto Sans TC font files were not found.")

pdfmetrics.registerFont(TTFont("NotoTC", str(regular)))
pdfmetrics.registerFont(TTFont("NotoTCBold", str(bold)))


def text(c, value, x, y, size=22, color=INK, bold=False):
    c.setFillColor(color)
    c.setFont("NotoTCBold" if bold else "NotoTC", size)
    c.drawString(x, y, value)


def lines(c, values, x, y, size=19, leading=30, color=INK, bold=False):
    for index, value in enumerate(values):
        text(c, value, x, y - index * leading, size, color, bold)


def label(c, value, x=56, y=495, color=MUTED):
    text(c, value, x, y, 10, color, True)


def footer(c, page):
    c.setStrokeColor(HexColor("#d2d5ca"))
    c.line(56, 34, 904, 34)
    text(c, "馬彥宸｜AI 產品應用作品集", 56, 16, 8, MUTED)
    text(c, f"{page:02d} / 08", 858, 16, 8, MUTED, True)


def card(c, x, y, w, h, fill=LIGHT, title="", body=None, tag=None):
    c.setFillColor(fill)
    c.rect(x, y, w, h, fill=1, stroke=0)
    if tag:
        text(c, tag, x + 20, y + h - 28, 9, MUTED, True)
    if title:
        text(c, title, x + 20, y + h - 62, 17, INK, True)
    if body:
        lines(c, body, x + 20, y + h - 94, 11, 21, MUTED)


def new_page(c, page, background=PAPER):
    c.setFillColor(background)
    c.rect(0, 0, PAGE[0], PAGE[1], fill=1, stroke=0)
    footer(c, page)


OUTPUT.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(OUTPUT), pagesize=PAGE)
c.setTitle("馬彥宸｜AI 產品應用作品集")
c.setAuthor("馬彥宸")

# 1
new_page(c, 1, INK)
label(c, "AI PRODUCT APPLICATION × PROBLEM VALIDATION", color=LIME)
lines(c, ["把真實需求轉成", "可驗證的 AI 應用。"], 56, 402, 43, 58, LIGHT, True)
lines(c, ["馬彥宸｜財務金融背景 × AI 產品應用", "需求判斷・測試驗收・產品取捨"], 58, 240, 15, 29, HexColor("#bdc6b7"))
c.setFillColor(LIME)
c.rect(688, 92, 216, 310, fill=1, stroke=0)
text(c, "PORTFOLIO", 713, 360, 11, INK, True)
lines(c, ["AI 生活助理", "Hermes 產品改善", "產業與風險分析"], 713, 292, 18, 47, INK, True)
c.showPage()

# 2
new_page(c, 2)
label(c, "01 / 我的產品工作方式")
lines(c, ["不從工具開始，", "從使用者為什麼卡住開始。"], 56, 424, 34, 46, INK, True)
card(c, 56, 104, 260, 188, BLUE, "需求判斷", ["先確認原始問題", "定義輸入、輸出與限制", "判斷是否真的需要 AI"], "DISCOVER")
card(c, 350, 104, 260, 188, LIME, "測試驗收", ["拆成可重現情境", "檢查實際結果", "確認沒有破壞既有功能"], "VERIFY")
card(c, 644, 104, 260, 188, ORANGE, "產品取捨", ["比較使用價值與維護成本", "保留有效功能", "不適合就停止投入"], "DECIDE")
c.showPage()

# 3
new_page(c, 3)
label(c, "02 / AI 協作生活助理")
lines(c, ["把零散 App，", "收回同一個對話入口。"], 56, 424, 34, 46, INK, True)
card(c, 56, 102, 288, 225, LIGHT, "原始問題", ["行事曆、郵件、日記與記帳分散", "個人電腦休眠會中斷 agent", "過重工具反而增加維護負擔"], "PROBLEM")
card(c, 368, 102, 248, 225, BLUE, "使用流程", ["Discord／LINE 輸入", "AI 判斷需求並呼叫服務", "Calendar・Gmail・Obsidian", "GitHub 持續同步"], "FLOW")
card(c, 640, 102, 264, 225, LIME, "驗證方式", ["回到目標服務確認結果", "檢查內容、日期與同步狀態", "異常修復後重新操作", "用不到的工具直接停用"], "ACCEPTANCE")
c.showPage()

# 4
new_page(c, 4)
label(c, "03 / Hermes LINE 媒體改善")
lines(c, ["從「語音不見了」，", "走到可查核的產品問題。"], 56, 424, 34, 46, INK, True)
card(c, 56, 104, 250, 210, ORANGE, "觀察", ["圖片可正常處理", "語音／影片／檔案被略過", "差異可穩定重現"], "ACTUAL")
card(c, 330, 104, 250, 210, BLUE, "處理", ["拆開輸入類型", "AI 協助閱讀與最小修改", "定義語音與圖片回歸測試"], "ACTION")
card(c, 604, 104, 300, 210, LIME, "證據", ["Issue #57882", "PR #57884", "語音可進入 STT", "圖片既有功能未受影響"], "EVIDENCE")
c.linkURL("https://github.com/NousResearch/hermes-agent/issues/57882", (604, 104, 904, 314), relative=0)
c.showPage()

# 5
new_page(c, 5)
label(c, "04 / AI 與我的分工")
lines(c, ["AI 協作，", "不等於把決定交出去。"], 56, 424, 34, 46, INK, True)
card(c, 56, 100, 408, 240, LIME, "我負責", ["發現並定義問題", "決定使用情境與成功條件", "核准修改與工具取捨", "執行真實操作與回歸驗證", "整理限制與公開回饋"], "OWNERSHIP")
card(c, 496, 100, 408, 240, BLUE, "AI 協助", ["拆解技術步驟", "閱讀程式與定位可能原因", "產生程式、設定與修正建議", "協助比較替代方案", "提供第二次檢查"], "ASSISTANCE")
text(c, "我不主張獨立工程開發；我主張對問題、驗證與採用決策負責。", 56, 65, 13, INK, True)
c.showPage()

# 6
new_page(c, 6)
label(c, "05 / 分析能力")
lines(c, ["分析不是堆模型名稱，", "而是知道數字能回答什麼。"], 56, 424, 34, 46, INK, True)
card(c, 56, 104, 408, 228, ORANGE, "便利商店產業分析", ["公開資料與企業比較", "主導五人分工與簡報整合", "核對錯誤資料並完成口頭報告", "清楚標示疫情因果限制"], "INDUSTRY")
card(c, 496, 104, 408, 228, LIME, "企業破產風險預測", ["辨識 97% Accuracy 陷阱", "用 Recall／Precision／F1 看風險取捨", "模型只作初篩，不替代人工決策", "清楚標示教材與 AI 協作邊界"], "RISK")
c.showPage()

# 7
new_page(c, 7)
label(c, "06 / 我能為產品團隊做什麼")
lines(c, ["把真實使用問題，", "整理成可行的改善方向。"], 56, 424, 34, 46, INK, True)
card(c, 56, 104, 260, 210, BLUE, "找出問題", ["使用者卡點", "不一致輸入", "工具造成的新負擔"], "01")
card(c, 350, 104, 260, 210, LIME, "驗證方案", ["成功條件", "最小可行範圍", "回歸測試與人工把關"], "02")
card(c, 644, 104, 260, 210, ORANGE, "留下證據", ["問題分類", "測試結果", "產品建議與限制"], "03")
c.showPage()

# 8
new_page(c, 8, INK)
label(c, "CONTACT / NEXT CONVERSATION", color=LIME)
lines(c, ["期待從 AI 產品應用、", "產品企劃或成效分析切入。"], 56, 410, 37, 52, LIGHT, True)
lines(c, ["馬彥宸", "0900-187-817", "andrew920322@gmail.com", "https://y3ccc.github.io"], 58, 238, 16, 34, HexColor("#bdc6b7"))
c.linkURL("mailto:andrew920322@gmail.com", (54, 142, 370, 182), relative=0)
c.linkURL("https://y3ccc.github.io", (54, 106, 350, 140), relative=0)
c.save()

print(OUTPUT)
