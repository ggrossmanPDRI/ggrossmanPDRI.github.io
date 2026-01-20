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
  .pubs-sidebar .card{ position:sticky; top:6.5rem; }
  .pubs-actions .btn{ margin-right:.35rem; margin-bottom:.35rem; }
  .pubs-badges .badge{ margin-right:.35rem; }
  .pubs-pre{ max-height: 320px; overflow:auto; }
</style>

<!-- Vanilla JS (no React/Babel). Place this file at: /assets/js/publications.js -->
<script src="/assets/js/publications.js" defer></script>