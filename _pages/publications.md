---
layout: default
permalink: /publications/
title: publications
nav: true
nav_order: 2
---

<section class="publications-section">
  <div class="container">
    <header class="publications-header">
      <h1>Research Publications</h1>
      <p class="subtitle">Guy Grossman • University of Pennsylvania</p>
    </header>

    <div id="pubs-app"></div>
  </div>
</section>

<style>
  /* Keep al-folio defaults; only scope to this page */
  .publications-section{ padding-top:5rem; padding-bottom:2rem; }
  .publications-header{ text-align:center; margin-bottom:2rem; }
  .publications-header .subtitle{ color: var(--global-text-color-light); }

  /* Explorer UI (inspired by eugendimant.github.io research page) */
  .pubs-shell{ max-width: 1100px; margin: 0 auto; }

  .pubs-toolbar{
    border: 1px solid rgba(0,0,0,.08);
    border-radius: 14px;
    padding: 1rem;
    background: rgba(255,255,255,.75);
    backdrop-filter: blur(8px);
    box-shadow: 0 10px 24px rgba(0,0,0,.06);
    margin-bottom: 1rem;
  }

  .pubs-toolbar .form-control,
  .pubs-toolbar .custom-select{
    border-radius: 999px;
  }

  .pubs-tabs .btn{
    border-radius: 999px;
    padding: .35rem .9rem;
  }

  .pubs-meta{
    color: var(--global-text-color-light);
    font-size: .95rem;
  }

  .pubs-chips{ display:flex; flex-wrap:wrap; gap:.4rem; }
  .pubs-chip{
    border: 1px solid rgba(0,0,0,.12);
    background: rgba(0,0,0,.02);
    border-radius: 999px;
    padding: .25rem .65rem;
    font-size: .85rem;
    cursor: pointer;
    user-select: none;
  }
  .pubs-chip.is-active{
    background: rgba(13,110,253,.10);
    border-color: rgba(13,110,253,.35);
  }

  .pubs-results-header{
    display:flex;
    justify-content: space-between;
    align-items: baseline;
    margin: .25rem 0 .75rem;
  }

  .pubs-year-title{
    margin: 1.25rem 0 .5rem;
    font-weight: 700;
    letter-spacing: .02em;
  }

  .pubs-card{
    border: 1px solid rgba(0,0,0,.08);
    border-radius: 14px;
    box-shadow: 0 10px 24px rgba(0,0,0,.05);
    overflow: hidden;
  }
  .pubs-card + .pubs-card{ margin-top: .85rem; }
  .pubs-card .card-body{ padding: 1.1rem 1.2rem; }

  .pubs-title{ font-size: 1.05rem; margin-bottom: .25rem; }
  .pubs-authors{ color: var(--global-text-color-light); margin-bottom: .35rem; }
  .pubs-venue{ font-size: .92rem; }

  .pubs-actions .btn{ margin-right:.35rem; margin-bottom:.35rem; border-radius: 999px; }
  .pubs-pre{ max-height: 320px; overflow:auto; border-radius: 12px; }

  /* Make <summary> look like a link without fighting theme */
  .pubs-details summary{ cursor:pointer; color: #0d6efd; }
</style>

<!-- Vanilla JS (no React/Babel). Place this file at: /assets/js/publications.js -->
<script src="/assets/js/publications.js" defer></script>
