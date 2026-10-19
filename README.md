# Flock FOIA Archive

A consolidated, citable archive of public-records (FOIA) responses about Flock Safety surveillance
deployments, starting with the **City of Beaufort, SC Police Department**.

Open `index.html` through any static web server (or GitHub Pages) to browse the records:
red flags first, then a narrative summary in which every citation opens the source PDF at the cited page.

## Layout

```
index.html                 the website (static: no build step, no framework)
assets/                    style.css, app.js
data/<request>.js          curated metadata: documents, findings, narrative, money, missing records
data/<request>-text.js     generated full-text index (scripts/build_text_index.py)
requests/<request>/
  original-release.zip     the release exactly as received
  documents/               each PDF, renamed NN_YYYY-MM-DD_short-description.pdf (unaltered bytes)
  text/                    extracted text (pdftotext -layout) or hand transcriptions of scans
  SHA256SUMS               integrity hashes for the PDFs and zip
  README.md                manifest: original filename -> archive filename
scripts/build_text_index.py
```

## Requests

| Request | Agency | Received | Documents |
|---|---|---|---|
| [26-392](requests/26-392/README.md) | City of Beaufort Police Department | 2026-10-19 | 11 |

## Adding a new request

1. Create `requests/<id>/` and save the zip as `original-release.zip`.
2. Unzip into `documents/` and rename to `NN_YYYY-MM-DD_description.pdf` (NN in date order).
3. Extract text: `pdftotext -layout documents/X.pdf text/X.txt`. Transcribe scans by hand, using `PAGE N:` markers.
4. Run `sha256sum documents/*.pdf original-release.zip > SHA256SUMS`.
5. Copy `data/26-392.js` to `data/<id>.js` and fill it in. Cite as `[[DOC:PAGE]]`.
6. Run `python scripts/build_text_index.py <id>`.
7. Add both `<script>` tags to `index.html`. (The site currently renders the first request; add a request
   switcher when a second one arrives.)

## Local preview

```bash
python -m http.server 8000
```

## Standards

- Never alter source PDFs; hashes prove integrity.
- Every claim on the site cites a document and page.
- Absence from a release is reported as "not produced," not "does not exist."
