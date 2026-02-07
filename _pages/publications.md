---
layout: page
permalink: /articles/
title: articles
order: 3
nav: true
---

<section class="pubs">
  <div class="container">
    <header class="pubs__header">
      <h1>Peer-Reviewed Articles</h1>
      <p class="pubs__subtitle">Guy Grossman • University of Pennsylvania</p>
    </header>

    <div id="pubs-app"></div>
  </div>
</section>

<style>
.pubs { padding-top: 1rem; padding-bottom: 1.5rem; background: var(--global-bg-color, #fafbfc); }
.pubs__header { text-align: center; margin-bottom: 1rem; position: sticky; top: 0; z-index: 10; background: var(--global-bg-color, #fafbfc); padding: 0.6rem 0; border-bottom: 1px solid var(--global-divider-color, rgba(0,0,0,0.06)); }
.pubs__subtitle { color: var(--global-text-color-light); margin: 0; }

.pubs-ui { display: grid; grid-template-columns: 30% 70%; gap: 2.5%; align-items: start; }
@media (max-width: 992px) { .pubs-ui { grid-template-columns: 1fr; } }

.pubs-sidebar { position: sticky; top: 1rem; }
@media (max-width: 992px) { .pubs-sidebar { position: static; } }

.pubs-panel {
  background: var(--global-card-bg-color, rgba(255,255,255,0.7));
  border: 1px solid var(--global-divider-color, rgba(0,0,0,0.08));
  border-radius: 12px;
  padding: 0.75rem;
}

.pubs-panel h3 { font-size: 0.95rem; margin: 0 0 0.5rem 0; }
.pubs-field { width: 100%; border-radius: 12px; padding: 0.55rem 0.75rem; border: 1px solid var(--global-divider-color, rgba(0,0,0,0.12)); background: var(--global-bg-color); color: var(--global-text-color); }
.pubs-field:focus { outline: none; box-shadow: 0 0 0 3px rgba(59,130,246,0.18); border-color: rgba(59,130,246,0.45); }

.pubs-list { list-style: none; padding: 0; margin: 0; }
.pubs-list li { margin: 0.15rem 0; }

.pubs-linkbtn {
  width: 100%;
  text-align: left;
  border: 0;
  background: transparent;
  padding: 0.35rem 0.35rem;
  border-radius: 10px;
  color: var(--global-text-color);
}
.pubs-linkbtn:hover { background: rgba(127,127,127,0.10); }
.pubs-linkbtn.is-active { background: rgba(59,130,246,0.14); }

.pubs-chipwrap { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.pubs-chip {
  border: 1px solid var(--global-divider-color, rgba(0,0,0,0.12));
  background: transparent;
  border-radius: 999px;
  padding: 0.25rem 0.6rem;
  font-size: 0.85rem;
  color: var(--global-text-color);
}
.pubs-chip:hover { background: rgba(127,127,127,0.10); }
.pubs-chip.is-active { background: rgba(59,130,246,0.14); border-color: rgba(59,130,246,0.35); }

.pubs-tabs { display: inline-flex; gap: 0.5rem; padding: 0.35rem; border-radius: 999px; border: 1px solid var(--global-divider-color, rgba(0,0,0,0.12)); background: rgba(127,127,127,0.06); }
.pubs-tab {
  border: 0;
  background: transparent;
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  font-size: 0.9rem;
  color: var(--global-text-color);
}
.pubs-tab.is-active { background: rgba(59,130,246,0.14); }

.pubs-main .pubs-card {
  border: none;
  border-left: 3px solid rgba(59,130,246,0.35);
  border-radius: 0 10px 10px 0;
  padding: 0.65rem 0.85rem;
  margin-bottom: 0.5rem;
  background: var(--global-card-bg-color, rgba(255,255,255,0.7));
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: border-left-color 0.2s, box-shadow 0.2s;
}
.pubs-main .pubs-card:hover { border-left-color: rgba(59,130,246,0.7); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.pubs-main .pubs-card h4 { margin: 0 0 0.2rem; font-size: 1rem; line-height: 1.35; }
.pubs-meta { color: var(--global-text-color-light); font-size: 0.88rem; margin-bottom: 0.3rem; }
.pubs-badges { display: flex; flex-wrap: wrap; gap: 0.25rem; margin-bottom: 0.35rem; }
.pubs-badge {
  font-size: 0.72rem;
  padding: 0.1rem 0.4rem;
  border-radius: 999px;
  background: rgba(59,130,246,0.08);
  color: var(--global-text-color);
  border: 1px solid rgba(59,130,246,0.15);
}

.pubs-actions { display: flex; flex-wrap: wrap; gap: 0.3rem; align-items: center; margin-top: 0.35rem; }
.pubs-action {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1px solid var(--global-divider-color, rgba(0,0,0,0.12));
  background: transparent;
  border-radius: 999px;
  padding: 0.22rem 0.6rem;
  font-size: 0.82rem;
  text-decoration: none;
  color: var(--global-text-color);
}
.pubs-action:hover { background: rgba(127,127,127,0.10); text-decoration: none; }
.pubs-action--primary { border-color: rgba(59,130,246,0.35); }

.pubs-bibtex { margin-top: 0.55rem; display: none; }
.pubs-bibtex.is-open { display: block; }
.pubs-bibtex pre {
  margin: 0.5rem 0 0;
  padding: 0.75rem;
  border-radius: 14px;
  border: 1px solid var(--global-divider-color, rgba(0,0,0,0.08));
  background: rgba(127,127,127,0.06);
  overflow: auto;
  font-size: 0.8rem;
}

.pubs-yearhdr { margin: 1rem 0 0.4rem; font-size: 0.85rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--global-text-color-light); border-bottom: 2px solid rgba(59,130,246,0.2); padding-bottom: 0.25rem; }
.pubs-empty { padding: 1rem; border-radius: 14px; border: 1px dashed var(--global-divider-color, rgba(0,0,0,0.18)); color: var(--global-text-color-light); }
/* Make layout use page width nicely (scoped) */
.pubs .container { max-width: 100%; padding-left: 2.5%; padding-right: 2.5%; }
.pubs-main { width: 100%; min-width: 0; }
.pubs-card { width: 100%; }

/* Years as a button matrix */
.pubs-yeargrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(82px, 1fr)); gap: 0.45rem; }
.pubs-yearbtn {
  border: 1px solid var(--global-divider-color, rgba(0,0,0,0.12));
  background: rgba(127,127,127,0.06);
  border-radius: 12px;
  padding: 0.35rem 0.45rem;
  font-size: 0.85rem;
  color: var(--global-text-color);
  text-align: center;
  width: 100%;
}
.pubs-yearbtn:hover { background: rgba(127,127,127,0.12); }
.pubs-yearbtn.is-active { background: rgba(59,130,246,0.14); border-color: rgba(59,130,246,0.35); }
/* BibTeX panel inside card */
.pubs-bibpanel {
  margin-top: 0.75rem;
  border: 1px solid var(--global-divider-color, rgba(0,0,0,0.12));
  background: rgba(127,127,127,0.05);
  border-radius: 14px;
  padding: 0.75rem 0.75rem 0.6rem;
  display: none;
}
.pubs-bibpanel.is-open { display: block; }
.pubs-bibhead { display:flex; justify-content: space-between; align-items:center; gap: 0.75rem; margin-bottom: 0.5rem; }
.pubs-bibtitle { font-size: 0.9rem; color: var(--global-text-color); margin: 0; font-weight: 600; }
.pubs-copybtn {
  border: 1px solid var(--global-divider-color, rgba(0,0,0,0.12));
  background: rgba(127,127,127,0.06);
  border-radius: 999px;
  padding: 0.25rem 0.55rem;
  font-size: 0.85rem;
  color: var(--global-text-color);
}
.pubs-copybtn:hover { background: rgba(127,127,127,0.12); }
.pubs-bibpre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 0.82rem;
  color: var(--global-text-color);
}
/* Hide the default al-folio page title (this CSS is embedded on this page only) */
.post-header, h1.post-title, h1.page-title, .post-title, .page-title {
  display: none !important;
}


/* =========================================================
   FULL-WIDTH LAYOUT (page-local, al-folio safe)
   ========================================================= */

.pubs .container {
  max-width: none;
  width: 100%;
  padding-left: 3vw;
  padding-right: 3vw;
}

.pubs-ui {
  display: grid;
  grid-template-columns: minmax(260px, 30vw) minmax(0, 1fr);
  gap: 3vw;
  align-items: start;
}

.pubs-main {
  width: 100%;
  max-width: none;
  min-width: 0;
}



/* =========================================================
   BIBTEX PANEL — DENSE
   ========================================================= */

.pubs-bibpanel {
  margin-top: 0.4rem;
  padding: 0.45rem 0.55rem;
  border-radius: 8px;
}

.pubs-bibhead {
  margin-bottom: 0.25rem;
}

.pubs-bibpre {
  font-size: 0.74rem;
  line-height: 1.25;
}

/* =========================================================
   YEAR HEADERS — COMPACT
   ========================================================= */

.pubs-yearhdr {
  margin: 0.75rem 0 0.3rem;
  font-size: 0.82rem;
  font-weight: 700;
}

/* =========================================================
   SIDEBAR — COMPACT
   ========================================================= */

.pubs-sidebar h3 {
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
}

.pubs-field {
  padding: 0.35rem 0.45rem;
  font-size: 0.85rem;
}

.pubs-chip {
  font-size: 0.72rem;
  padding: 0.2rem 0.45rem;
}

.pubs-yearbtn {
  font-size: 0.72rem;
  padding: 0.25rem 0.3rem;
}


/* ==============================
   FORCE FULL-WIDTH (al-folio)
   ============================== */

/* al-folio wraps pages in containers; remove the max-width on THIS page */
.page-content .container,
.post .container,
.container {
  max-width: none !important;
}

/* give the page some breathing room */
.page-content .container,
.post .container,
.container {
  width: 100% !important;
  padding-left: 3vw !important;
  padding-right: 3vw !important;
}

/* ==============================
   LANDSCAPE GRID
   ============================== */

.pubs-ui {
  display: grid !important;
  grid-template-columns: minmax(240px, 22vw) minmax(0, 1fr) !important;
  gap: 2vw !important;
  align-items: start;
}

.pubs-main {
  width: 100% !important;
  max-width: none !important;
  min-width: 0 !important;
}

.pubs-card {
  width: 100% !important;
  max-width: none !important;
}

.pubs-journal,
.pubs-meta em {
  font-weight: 500;
  font-style: italic;
}



</style>

<script src="{{ '/assets/js/publications.js' | relative_url }}" defer></script>
