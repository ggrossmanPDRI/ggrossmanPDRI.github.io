(() => {
  // Minimal sample data (add the rest yourself)
  const PUBLISHED = [
    {
      id: 44,
      year: 2024,
      title: "Turnout Turnaround: Ethnic Minority Victories Mobilize White Voters.",
      authors: "Guy Grossman (with Stephanie Zonszein)",
      journal: "American Political Science Review",
      status: "published",
      volume: "118",
      issue: "3",
      pages: "1556–1562",
      categories: ["identity", "elections"],
      abstract: "We show that constituencies narrowly won by an ethnic minority candidate experience higher turnout in the next election, driven by majority-white constituencies.",
      links: {
        webpage: "https://doi.org/10.1017/S000305542300103X",
        pdf: "/assets/pdf/turnout-turnaround-ethnic-minority-victories-mobilize-white-voters.pdf",
        appendix: ["/assets/pdf/PSR2300103_Supplementary_Materials.pdf"],
        replication: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/UKVOPE",
        bibtex: `@article{grossman2024turnoutturnaround,
  title={Turnout Turnaround: Ethnic Minority Victories Mobilize White Voters},
  author={Grossman, Guy and Zonszein, Stephanie},
  journal={American Political Science Review},
  year={2024},
  volume={118},
  number={3},
  pages={1556--1562}
}`
      }
    },
    {
      id: 26,
      year: 2020,
      title: "Political partisanship influences behavioral responses to governors’ recommendations for COVID-19 prevention in the United States.",
      authors: "Guy Grossman (with Soojong Kim, Jonah M. Rexer, and Harsha Thirumurthy)",
      journal: "Proceedings of the National Academy of Sciences",
      status: "published",
      volume: "117",
      issue: "39",
      pages: "24144–24153",
      categories: ["covid-19", "political economy"],
      abstract: "We assess how partisan preferences shape compliance with governors’ COVID-19 recommendations using mobility data from U.S. counties in March 2020.",
      links: {
        webpage: "https://www.pnas.org/content/early/2020/09/14/2007835117",
        pdf: "/assets/pdf/2020_NAS_PE_political_partisanship.pdf",
        appendix: ["/assets/pdf/political_partisanship_online_appendix.pdf"],
        replication: "https://dataverse.harvard.edu/dataverse/COVID19governors/",
        bibtex: `@article{grossman2020partisanshipcovid,
  title={Political partisanship influences behavioral responses to governors’ recommendations for COVID-19 prevention in the United States},
  author={Grossman, Guy and Kim, Soojong and Rexer, Jonah M. and Thirumurthy, Harsha},
  journal={Proceedings of the National Academy of Sciences},
  year={2020},
  volume={117},
  number={39},
  pages={24144--24153}
}`
      }
    }
  ];

  const WORKING = [
    {
      id: 48,
      year: 2026,
      title: "The Politics of Climate Change in the Developing World",
      authors: "Guy Grossman (with Audrey Sacks and Alice Xu)",
      journal: "Annual Review of Political Science",
      status: "forthcoming",
      volume: "",
      issue: "",
      pages: "",
      categories: ["climate change"],
      abstract: "A review of climate politics in the developing world, focusing on opinion, accountability, and institutional sources of vulnerability.",
      links: {
        pdf: "/assets/pdf/2025_The_Politics_Of_Climate_Change_In_The_Developing_World.pdf",
        bibtex: `@article{grossman2026climatedevworld,
  title={The Politics of Climate Change in the Developing World},
  author={Grossman, Guy and Sacks, Audrey and Xu, Alice},
  journal={Annual Review of Political Science},
  year={2026},
  note={forthcoming}
}`
      }
    }
  ];

  const normalize = (s) => (s || "").toString().toLowerCase();
  const uniq = (arr) => Array.from(new Set(arr));
  const escapeHtml = (s) =>
    (s || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

  const scholarUrlForTitle = (title) =>
    `https://scholar.google.com/scholar?q=${encodeURIComponent(title || "")}`;

  const state = { tab: "published", q: "", year: null, cats: new Set() };

  const getActiveData = () => (state.tab === "published" ? PUBLISHED : WORKING);

  const getAllYears = (data) => uniq(data.map((d) => d.year)).sort((a, b) => b - a);

  const getAllCategories = (data) => {
    const out = [];
    data.forEach((d) => (d.categories || []).forEach((c) => out.push(c)));
    return uniq(out).sort((a, b) => a.localeCompare(b));
  };

  const matches = (p) => {
    const q = normalize(state.q).trim();
    const inQ =
      !q ||
      normalize(p.title).includes(q) ||
      normalize(p.authors).includes(q) ||
      normalize(p.journal).includes(q);

    const inYear = state.year == null || p.year === state.year;

    const inCats =
      state.cats.size === 0 || (p.categories || []).some((c) => state.cats.has(c));

    return inQ && inYear && inCats;
  };

  const groupByYear = (items) => {
    const map = new Map();
    items.forEach((p) => {
      if (!map.has(p.year)) map.set(p.year, []);
      map.get(p.year).push(p);
    });
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  };

  const formatVenue = (p) => {
    const bits = [];
    if (p.journal) bits.push(p.journal);
    const vol = (p.volume || "").trim();
    const iss = (p.issue || "").trim();
    const pag = (p.pages || "").trim();
    let vip = "";
    if (vol) vip += vol;
    if (iss) vip += (vip ? `(${iss})` : `(${iss})`);
    if (pag) vip += (vip ? `: ${pag}` : pag);
    if (vip) bits.push(vip);
    return bits.join(" • ");
  };

  function render() {
    const mount = document.getElementById("pubs-app");
    if (!mount) return;

    const data = getActiveData();
    const years = getAllYears(data);
    const cats = getAllCategories(data);

    const filtered = data.filter(matches);
    const grouped = groupByYear(filtered);

    mount.innerHTML = `
      <div class="pubs-ui">
        <aside class="pubs-sidebar">
          <div class="pubs-panel">
            <div style="display:flex; justify-content:center; margin-bottom:0.75rem;">
              <div class="pubs-tabs" role="tablist" aria-label="Publications tabs">
                <button class="pubs-tab ${state.tab === "published" ? "is-active" : ""}" data-tab="published" type="button">Published</button>
                <button class="pubs-tab ${state.tab === "working" ? "is-active" : ""}" data-tab="working" type="button">Under review</button>
              </div>
            </div>

            <h3>Search</h3>
            <input class="pubs-field" id="pubs-search" type="search" placeholder="Search title, author, journal" value="${escapeHtml(state.q)}"/>

            <div style="height:0.9rem"></div>

            <h3>Years</h3>
            <div class="pubs-yeargrid" id="pubs-years">
              ${renderYearGrid(years, data)}
            </div>

            <div style="height:0.9rem"></div>

            <h3>Categories</h3>
            <div class="pubs-chipwrap" id="pubs-cats">
              ${renderCategoryChips(cats, data)}
            </div>

            <div style="height:0.9rem"></div>

            <button class="pubs-action pubs-action--primary" id="pubs-clear" type="button">Clear filters</button>
          </div>
        </aside>

        <main class="pubs-main">
          ${filtered.length ? renderCards(grouped) : `<div class="pubs-empty">No results. Try clearing filters.</div>`}
        </main>
      </div>
      <div class="pubs-toast" id="pubs-toast" role="status" aria-live="polite"></div>
    `;

    bindHandlers();
  }

  function renderYearGrid(years, data) {
    const total = data.length;
    const counts = new Map();
    data.forEach((p) => counts.set(p.year, (counts.get(p.year) || 0) + 1));

    const allActive = state.year == null ? "is-active" : "";
    const allBtn = `
        <button class="pubs-yearbtn ${allActive}" data-year="">
          All (${total})
        </button>`;

    const yearBtns = years
      .map((y) => {
        const active = state.year === y ? "is-active" : "";
        return `
        <button class="pubs-yearbtn ${active}" data-year="${y}">
          ${y} (${counts.get(y) || 0})
        </button>`;
      })
      .join("");

    return allBtn + yearBtns;
  }


  function matchesWithoutCats(p) {
    // Apply search + year filters, ignore category selection (used for sidebar counts)
    const q = state.q.trim().toLowerCase();
    if (q) {
      const hay = `${p.title} ${p.authors} ${p.journal}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (state.year != null && p.year !== state.year) return false;
    return true;
  }

  function renderCategoryChips(cats, data) {
    if (!cats.length) return `<span class="pubs-empty" style="padding:.5rem .75rem;">No categories</span>`;

    const base = data.filter(matchesWithoutCats);
    const counts = new Map();
    base.forEach((p) => (p.categories || []).forEach((c) => counts.set(c, (counts.get(c) || 0) + 1)));

    return cats
      .map((c) => {
        const active = state.cats.has(c) ? "is-active" : "";
        const n = counts.get(c) || 0;
        return `<button class="pubs-chip ${active}" type="button" data-cat="${escapeHtml(c)}">${escapeHtml(c)} (${n})</button>`;
      })
      .join("");
  }

  function renderChip(cat) {
    const active = state.cats.has(cat) ? "is-active" : "";
    return `<button class="pubs-chip ${active}" type="button" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`;
  }

  function renderCards(grouped) {
    return grouped
      .map(([year, items]) => {
        return `
          <div class="pubs-yearhdr">${year}</div>
          ${items.map(renderCard).join("")}
        `;
      })
      .join("");
  }

  function renderCard(p) {
    const titleHtml = p.links?.webpage
      ? `<a href="${p.links.webpage}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.title)}</a>`
      : escapeHtml(p.title);

    const venue = formatVenue(p);
    const cats = (p.categories || []).map((c) => `<span class="pubs-badge">${escapeHtml(c)}</span>`).join("");

    const btns = [];
    if (p.links?.pdf) btns.push(actionLink("PDF", p.links.pdf, true));
    (p.links?.appendix || []).forEach((u, i) => btns.push(actionLink(i === 0 ? "Appendix" : `App ${i+1}`, u)));
    if (p.links?.replication) btns.push(actionLink("Replication", p.links.replication));
    btns.push(actionLink("Scholar", p.links?.scholar || scholarUrlForTitle(p.title)));
    if (p.links?.bibtex) btns.push(`<button class="pubs-iconbtn" type="button" data-bibcopy="${p.id}" aria-label="Copy BibTeX"><span>❝</span><span>BibTeX</span></button>`);

    const abs = p.abstract ? `<details><summary>Abstract</summary><div style="margin-top:.35rem">${escapeHtml(p.abstract)}</div></details>` : "";

    return `
      <article class="pubs-card" id="pub-${p.id}">
        <h4>${titleHtml}</h4>
        <div class="pubs-meta">
          ${escapeHtml(p.authors)}${venue ? ` • ${escapeHtml(venue)}` : ""}${p.status ? ` • ${escapeHtml(p.status)}` : ""}
        </div>

        ${cats ? `<div class="pubs-badges">${cats}</div>` : ""}

        ${abs}

        <div class="pubs-actions">
          ${btns.join("")}
        </div>

        <div class="pubs-bibtex" data-bib="${p.id}">
          <pre><code>${escapeHtml(p.links?.bibtex || "")}</code></pre>
        </div>
      </article>
    `;
  }

  function actionLink(label, url, primary = false) {
    const cls = `pubs-action${primary ? " pubs-action--primary" : ""}`;
    return `<a class="${cls}" href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
  }

  
  function toast(msg) {
    const el = document.getElementById("pubs-toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("is-show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("is-show"), 1200);
  }

function bindHandlers() {
    document.querySelectorAll(".pubs-tab").forEach((b) => {
      b.addEventListener("click", () => {
        const tab = b.getAttribute("data-tab");
        if (!tab || tab === state.tab) return;
        state.tab = tab;
        state.q = "";
        state.year = null;
        state.cats = new Set();
        render();
      });
    });

    const search = document.getElementById("pubs-search");
    if (search) {
      search.addEventListener("input", () => {
        state.q = search.value || "";
        render();
      });
    }

    document.querySelectorAll("#pubs-years button").forEach((b) => {
      b.addEventListener("click", () => {
        const y = b.getAttribute("data-year");
        state.year = y ? Number(y) : null;
        render();
      });
    });

    document.querySelectorAll("#pubs-cats .pubs-chip").forEach((b) => {
      b.addEventListener("click", () => {
        const c = b.getAttribute("data-cat");
        if (!c) return;
        if (state.cats.has(c)) state.cats.delete(c);
        else state.cats.add(c);
        render();
      });
    });

    const clear = document.getElementById("pubs-clear");
    if (clear) {
      clear.addEventListener("click", () => {
        state.q = "";
        state.year = null;
        state.cats = new Set();
        render();
      });
    }

    document.querySelectorAll("[data-bibbtn]").forEach((b) => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-bibbtn");
        const panel = document.querySelector(`[data-bib="${CSS.escape(id)}"]`);
        if (!panel) return;
        panel.classList.toggle("is-open");
      });
    });

    // BibTeX copy
    document.querySelectorAll("[data-bibcopy]").forEach((b) => {
      b.addEventListener("click", async () => {
        const id = b.getAttribute("data-bibcopy");
        if (!id) return;
        const p = getActiveData().find((x) => String(x.id) === String(id));
        const bib = p?.links?.bibtex || "";
        if (!bib) return toast("No BibTeX available");

        try {
          await navigator.clipboard.writeText(bib);
          toast("BibTeX copied");
        } catch (e) {
          const ta = document.createElement("textarea");
          ta.value = bib;
          ta.setAttribute("readonly", "");
          ta.style.position = "fixed";
          ta.style.top = "-1000px";
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); toast("BibTeX copied"); }
          catch (err) { toast("Copy failed"); }
          document.body.removeChild(ta);
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", render);
})();