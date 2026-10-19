"""Build data/<request>-text.js, the per-page full-text index the site searches.

Usage:  python scripts/build_text_index.py 26-392

Reads requests/<id>/text/*.txt (pdftotext -layout output, pages split on form feed,
or hand transcriptions) and writes window.FOIA_TEXT["<id>"] = {"01": [page1, page2, ...], ...}.
"""
import json
import pathlib
import re
import sys

root = pathlib.Path(__file__).resolve().parent.parent
req = sys.argv[1]
text_dir = root / "requests" / req / "text"

index = {}
for path in sorted(text_dir.glob("*.txt")):
    doc_id = path.name.split("_", 1)[0]
    raw = path.read_bytes().decode("utf-8", errors="replace").replace("�", "")
    # Hand transcriptions of scans mark pages with "PAGE N:" lines instead of form feeds.
    parts = raw.split("\f") if "\f" in raw else re.split(r"\n(?=PAGE \d+:)", raw)
    if len(parts) > 1 and not parts[0].lstrip().startswith(("PAGE", "Docusign", "Flock")) and "\f" not in raw:
        parts = [parts[0] + "\n" + parts[1]] + parts[2:]  # fold the transcription note into page 1
    pages = [re.sub(r"[ \t]+", " ", p).strip() for p in parts]
    while pages and not pages[-1]:
        pages.pop()
    index[doc_id] = pages

out = root / "data" / f"{req}-text.js"
out.write_text(
    "window.FOIA_TEXT = window.FOIA_TEXT || {};\n"
    f"window.FOIA_TEXT[{json.dumps(req)}] = {json.dumps(index, ensure_ascii=False)};\n",
    encoding="utf-8",
)
print(f"wrote {out} ({len(index)} documents)")
