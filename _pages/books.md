---
layout: page
permalink: /books/
title: Books
order: 4
description:
nav: true
---

<section class="books">

  <div class="books__card">
    <div class="books__layout">
      <div class="books__cover">
        <a href="https://www.cambridge.org/core/books/information-accountability-and-cumulative-learning/45DD58C16ED29DFFA9D69F0CF740EFB4" target="_blank" rel="noopener noreferrer">
          <img src="/assets/img/metaketa_cover.jpg" alt="Information, Accountability, and Cumulative Learning book cover" />
        </a>
      </div>
      <div class="books__details">
        <div class="books__series">Cambridge Studies in Comparative Politics</div>
        <h3 class="books__title">Information, Accountability, and Cumulative Learning: Lessons from Metaketa I</h3>
        <div class="books__authors">With Thad Dunning, Macartan Humphreys, Susan D. Hyde, Craig McIntosh, and Gareth Nellis</div>
        <div class="books__venue">2019, Cambridge University Press</div>
        <div class="books__actions">
          <a class="books__btn" href="https://www.cambridge.org/core/books/information-accountability-and-cumulative-learning/45DD58C16ED29DFFA9D69F0CF740EFB4" target="_blank" rel="noopener noreferrer">Cambridge UP &rarr;</a>
        </div>
        <details class="books__description">
          <summary>Description</summary>
          <p>Throughout the world, voters lack access to information about politicians, government performance, and public services. Efforts to remedy these informational deficits are numerous. Yet do informational campaigns influence voter behavior and increase democratic accountability? Through the first project of the Metaketa Initiative, sponsored by the Evidence in Governance and Politics (EGAP) research network, this book aims to address this substantive question and at the same time introduce a new model for cumulative learning that increases coordination among otherwise independent researcher teams. It presents the overall results (using meta-analysis) from six independently conducted but coordinated field experimental studies, the results from each individual study, and the findings from a related evaluation of whether practitioners utilize this information as expected. It also discusses lessons learned from EGAP's efforts to coordinate field experiments, increase replication of theoretically important studies across contexts, and increase the external validity of field experimental research.</p>
        </details>
      </div>
    </div>
  </div>

</section>

<style>
.books__card {
  background: var(--global-card-bg-color, rgba(255,255,255,0.7));
  border: none;
  border-left: 3px solid rgba(59,130,246,0.35);
  border-radius: 0 10px 10px 0;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: border-left-color 0.2s, box-shadow 0.2s;
}
.books__card:hover {
  border-left-color: rgba(59,130,246,0.7);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.books__layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1.5rem;
  align-items: start;
}
@media (max-width: 600px) {
  .books__layout {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}

.books__cover img {
  width: 200px;
  border-radius: 6px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  transition: transform 0.2s, box-shadow 0.2s;
}
.books__cover img:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.18);
}

.books__series {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.12rem 0.45rem;
  border-radius: 999px;
  display: inline-block;
  width: fit-content;
  margin-bottom: 0.45rem;
  background: rgba(139,92,246,0.08);
  color: rgba(139,92,246,0.85);
  border: 1px solid rgba(139,92,246,0.15);
}

.books__title {
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0 0 0.35rem;
  line-height: 1.35;
  color: var(--global-text-color);
}

.books__authors {
  font-size: 0.88rem;
  color: var(--global-text-color-light);
  margin-bottom: 0.15rem;
}

.books__venue {
  font-size: 0.82rem;
  color: var(--global-text-color-light);
  font-style: italic;
  margin-bottom: 0.5rem;
}

.books__actions {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}

.books__btn {
  font-size: 0.82rem;
  font-weight: 500;
  color: rgba(59,130,246,0.85);
  text-decoration: none;
  border: 1px solid rgba(59,130,246,0.2);
  border-radius: 999px;
  padding: 0.15rem 0.55rem;
  transition: background 0.15s, color 0.15s;
}
.books__btn:hover {
  background: rgba(59,130,246,0.06);
  color: rgba(59,130,246,1);
  text-decoration: none;
}

.books__description {
  margin-top: 0.25rem;
}
.books__description summary {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--global-text-color-light);
  cursor: pointer;
}
.books__description p {
  font-size: 0.85rem;
  line-height: 1.55;
  color: var(--global-text-color);
  margin: 0.3rem 0 0;
}
</style>
