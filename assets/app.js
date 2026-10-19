(function () {
  const req = window.FOIA.requests[0];
  const fullText = (window.FOIA_TEXT || {})[req.id] || {};
  const docs = Object.fromEntries(req.documents.map(d => [d.id, d]));
  const $ = sel => document.querySelector(sel);
  const SEV = ["critical", "high", "medium", "low"];
  const money = n => (n < 0 ? "−$" : "$") + Math.abs(n).toLocaleString("en-US");
  const pdfUrl = (d, page) => `${req.base}documents/${d.file}.pdf${page ? "#page=" + page : ""}`;
  const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // [[03:13]] -> clickable citation chip
  const cite = (id, page) =>
    `<a class="cite" href="${pdfUrl(docs[id], page)}" data-doc="${id}" data-page="${page}" title="${esc(docs[id].title)}, page ${page}">#${id} p.${page}</a>`;
  const linkify = html => html.replace(/\[\[(\d+):(\d+)\]\]/g, (_, id, p) => cite(id, p));

  // Which documents each finding cites, used to badge document cards
  const flagsByDoc = {};
  req.findings.forEach(f => {
    for (const m of f.body.matchAll(/\[\[(\d+):\d+\]\]/g)) {
      (flagsByDoc[m[1]] = flagsByDoc[m[1]] || new Set()).add(f.severity);
    }
  });

  // Hero
  $("#req-label").textContent = `FOIA Request ${req.id} · ${req.agency} · received ${req.received}`;
  $("#req-summary").textContent = req.summary;
  const termTotal = req.money.reduce((s, m) => s + m.term, 0);
  const stats = [
    [req.documents.length, "documents released"],
    [req.findings.filter(f => f.severity === "critical" || f.severity === "high").length, "critical / high red flags"],
    ["≈" + money(Math.round(termTotal / 1000) * 1000).replace(",000", "K"), "committed over initial terms"],
    ["13 + 5 + 56", "plate readers + video cams + third-party streams"],
    ["1 ¶", "length of the only audit released"]
  ];
  $("#stats").innerHTML = stats.map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s}</span></div>`).join("");

  // Red flags
  let sevFilter = "all";
  const renderFlags = () => {
    $("#flag-list").innerHTML = req.findings
      .filter(f => sevFilter === "all" || f.severity === sevFilter)
      .sort((a, b) => SEV.indexOf(a.severity) - SEV.indexOf(b.severity))
      .map(f => `<article class="flag s-${f.severity}">
          <span class="sev">${f.severity}</span>
          <h3>${f.title}</h3>
          <p>${linkify(f.body)}</p>
          <p class="ask"><b>Follow-up:</b> ${f.ask}</p>
        </article>`).join("");
  };
  const counts = SEV.map(s => [s, req.findings.filter(f => f.severity === s).length]).filter(([, n]) => n);
  $("#sev-filter").innerHTML = [["all", req.findings.length], ...counts]
    .map(([s, n]) => `<button class="chip" data-sev="${s}" aria-pressed="${s === "all"}">${s} (${n})</button>`).join("");
  $("#sev-filter").addEventListener("click", e => {
    const b = e.target.closest("[data-sev]");
    if (!b) return;
    sevFilter = b.dataset.sev;
    document.querySelectorAll("#sev-filter .chip").forEach(c => c.setAttribute("aria-pressed", c === b));
    renderFlags();
  });
  renderFlags();

  // Narrative
  $("#narrative").innerHTML = req.narrative.map(n => `<h3>${n.heading}</h3><p>${linkify(n.text)}</p>`).join("");

  // Money table
  const rec = req.money.reduce((s, m) => s + (m.recurring || 0), 0);
  const y1 = req.money.reduce((s, m) => s + m.year1, 0);
  $("#money-table").innerHTML = `
    <thead><tr><th>Item</th><th class="num">Year 1</th><th class="num">Recurring / yr</th><th class="num">Initial term</th><th>Source</th></tr></thead>
    <tbody>${req.money.map(m => `<tr>
      <td>${m.item}${m.note ? `<small>${m.note}</small>` : ""}</td>
      <td class="num">${money(m.year1)}</td>
      <td class="num">${m.recurring == null ? "unstated" : money(m.recurring)}</td>
      <td class="num">${money(m.term)}</td>
      <td>${linkify(`[[${m.cite}]]`)}</td></tr>`).join("")}</tbody>
    <tfoot><tr><td>Total known</td><td class="num">${money(y1)}</td><td class="num">${money(rec)} + ?</td><td class="num">${money(termTotal)}</td><td></td></tr></tfoot>`;

  // Timeline
  const fmtDate = s => new Date(s + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  $("#tl").innerHTML = [...req.documents].sort((a, b) => a.date.localeCompare(b.date)).map(d => {
    const flagged = flagsByDoc[d.id] && (flagsByDoc[d.id].has("critical") || flagsByDoc[d.id].has("high"));
    return `<li class="${flagged ? "flagged" : ""}"><time>${fmtDate(d.date)}</time><br>
      <button data-doc="${d.id}" data-page="1"><span class="t-title">#${d.id} ${d.title}</span></button>
      <div class="muted">${d.summary}</div></li>`;
  }).join("");

  // Document library
  const types = [...new Set(req.documents.map(d => d.type))];
  let typeFilter = "All";
  $("#type-filter").innerHTML = ["All", ...types].map(t => `<button class="chip" data-type="${t}" aria-pressed="${t === "All"}">${t}</button>`).join("");
  $("#type-filter").addEventListener("click", e => {
    const b = e.target.closest("[data-type]");
    if (!b) return;
    typeFilter = b.dataset.type;
    document.querySelectorAll("#type-filter .chip").forEach(c => c.setAttribute("aria-pressed", c === b));
    renderDocs();
  });

  const searchHits = (d, q) => {
    const hits = [];
    (fullText[d.id] || []).forEach((txt, i) => {
      const idx = txt.toLowerCase().indexOf(q);
      if (idx >= 0) hits.push({ page: i + 1, snippet: txt.slice(Math.max(0, idx - 70), idx + q.length + 90) });
    });
    return hits;
  };

  const renderDocs = () => {
    const q = $("#doc-search").value.trim().toLowerCase();
    let shown = 0;
    $("#doc-grid").innerHTML = req.documents.filter(d => typeFilter === "All" || d.type === typeFilter).map(d => {
      const meta = (d.title + " " + d.summary + " " + d.original).toLowerCase();
      const hits = q ? searchHits(d, q) : [];
      if (q && !meta.includes(q) && !hits.length) return "";
      shown++;
      const sevs = flagsByDoc[d.id] ? SEV.filter(s => flagsByDoc[d.id].has(s)) : [];
      const hitHtml = hits.slice(0, 2).map(h => {
        const s = esc(h.snippet.replace(/\s+/g, " "));
        const marked = s.replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "ig"), m => `<mark>${m}</mark>`);
        return `<div class="hit">…${marked}… ${cite(d.id, h.page)}</div>`;
      }).join("") + (hits.length > 2 ? `<div class="muted" style="font-size:12px">+${hits.length - 2} more pages match</div>` : "");
      return `<article class="doc">
        <div class="doc-meta"><span class="doc-id">#${d.id}</span><span>${d.date}</span><span class="tag">${d.type}</span><span>${d.pages} pp</span>${d.scanned ? '<span class="tag">scan · transcribed</span>' : ""}</div>
        <h3>${d.title}</h3>
        <p>${d.summary}</p>
        ${hitHtml}
        ${sevs.length ? `<div class="flags-on-doc">Cited in ${sevs.join(" / ")} red flags</div>` : ""}
        <div class="doc-actions">
          <button class="btn" data-doc="${d.id}" data-page="1">View</button>
          <a class="btn ghost" href="${pdfUrl(d)}" download>Download PDF</a>
        </div>
        <div class="muted" style="font-size:12px">Original filename: ${esc(d.original)}</div>
      </article>`;
    }).join("");
    $("#search-status").textContent = q ? `${shown} document${shown === 1 ? "" : "s"} match “${$("#doc-search").value.trim()}”` : "";
  };
  $("#doc-search").addEventListener("input", renderDocs);
  renderDocs();

  // Missing records
  $("#missing").innerHTML = req.missing.map(m => `<li>${m}</li>`).join("");

  // Viewer: any element with data-doc opens the PDF at data-page
  const dlg = $("#viewer"), frame = $("#v-frame"), pre = $("#v-text"), toggle = $("#v-toggle");
  let current = null;
  const showText = on => {
    pre.hidden = !on; frame.hidden = on;
    toggle.textContent = on ? "Show PDF" : "Show text";
  };
  const open = (id, page) => {
    const d = docs[id];
    current = { d, page };
    $("#v-title").textContent = `#${d.id} ${d.title}`;
    $("#v-page").textContent = `page ${page} of ${d.pages}`;
    $("#v-open").href = pdfUrl(d, page);
    frame.src = "about:blank";
    // Re-assigning after blank forces the PDF viewer to honor a new #page on the same file
    setTimeout(() => { frame.src = pdfUrl(d, page); }, 30);
    const pages = fullText[d.id] || [];
    pre.textContent = pages.length ? pages.map((t, i) => `──── page ${i + 1} ────\n${t}`).join("\n\n") : "No text available.";
    showText(false);
    if (!dlg.open) dlg.showModal();
  };
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-doc]");
    if (!el || e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault();
    open(el.dataset.doc, Number(el.dataset.page) || 1);
  });
  toggle.addEventListener("click", () => {
    showText(pre.hidden);
    if (!pre.hidden && current) {
      const marker = [...pre.textContent.matchAll(/──── page (\d+) ────/g)].find(m => +m[1] === current.page);
      if (marker) {
        const ratio = marker.index / pre.textContent.length;
        pre.scrollTop = ratio * pre.scrollHeight;
      }
    }
  });
  $("#v-close").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", () => { frame.src = "about:blank"; });
})();
