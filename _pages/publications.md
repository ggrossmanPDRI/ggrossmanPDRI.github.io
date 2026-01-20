---
layout: page
permalink: /publications/
title: 
nav: true
---

<section class="pubs">
  <div class="container">
    <header class="pubs__header">
      <h1>Research Publications</h1>
      <p class="pubs__subtitle">Guy Grossman • University of Pennsylvania</p>
    </header>

    <div id="pubs-app"></div>
  </div>
</section>

<style>
.pubs { padding-top: 5.25rem; padding-bottom: 2rem; }
.pubs__header { text-align: center; margin-bottom: 1.75rem; }
.pubs__subtitle { color: var(--global-text-color-light); margin: 0; }

.pubs-ui { display: grid; grid-template-columns: 360px minmax(0, 1fr); gap: 1.5rem; align-items: start; }
@media (max-width: 992px) { .pubs-ui { grid-template-columns: 1fr; } }

.pubs-sidebar { position: sticky; top: 5.25rem; }
@media (max-width: 992px) { .pubs-sidebar { position: static; } }

.pubs-panel {
  background: var(--global-card-bg-color, rgba(255,255,255,0.7));
  border: 1px solid var(--global-divider-color, rgba(0,0,0,0.08));
  border-radius: 16px;
  padding: 1rem;
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
  border: 1px solid var(--global-divider-color, rgba(0,0,0,0.08));
  border-radius: 18px;
  padding: 1rem 1rem 0.9rem;
  margin-bottom: 0.85rem;
  background: var(--global-card-bg-color, rgba(255,255,255,0.7));
  box-shadow: 0 8px 24px rgba(0,0,0,0.04);
}
.pubs-main .pubs-card h4 { margin: 0 0 0.35rem; font-size: 1.05rem; }
.pubs-meta { color: var(--global-text-color-light); font-size: 0.92rem; margin-bottom: 0.55rem; }
.pubs-badges { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 0.65rem; }
.pubs-badge {
  font-size: 0.78rem;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  background: rgba(127,127,127,0.10);
  color: var(--global-text-color);
}

.pubs-actions { display: flex; flex-wrap: wrap; gap: 0.45rem; align-items: center; margin-top: 0.55rem; }
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

.pubs-yearhdr { margin: 1.25rem 0 0.5rem; font-size: 0.95rem; color: var(--global-text-color-light); }
.pubs-empty { padding: 1rem; border-radius: 14px; border: 1px dashed var(--global-divider-color, rgba(0,0,0,0.18)); color: var(--global-text-color-light); }
/* Make layout use page width nicely (scoped) */
.pubs .container { max-width: 1200px; }
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
</style>

<script src="{{ '/assets/js/publications.js' | relative_url }}" defer></script>
