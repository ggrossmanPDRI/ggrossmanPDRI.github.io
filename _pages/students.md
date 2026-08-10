---
layout: page
title: for students
permalink: /students/
description:
order: 9
nav: true
---

<section class="students">
  <div class="students__cards">

    <div class="students__card">
      <div class="students__icon"><i class="fas fa-user-graduate" aria-hidden="true"></i></div>
      <h3 class="students__title">Prospective graduate students</h3>
      <div class="students__body">
        <p>Information about applying to the Political Science Ph.D. program at Penn is available on the <a href="https://www.polisci.upenn.edu/graduate/admissions" target="_blank" rel="noopener noreferrer">department admissions page</a>.</p>
        <p>Penn, like most political science departments, does not admit students to work with a particular faculty member. A committee reviews all applications and makes admissions decisions; I am not currently a member of that committee. That said, you are welcome to mention me by name in your personal statement &mdash; doing so ensures your file gets routed my way during review.</p>
        <p>Following the practice of colleagues like Betsy Paluck and Graeme Blair, I do not hold pre-application conversations with prospective students. This avoids giving an edge to applicants who happen to have received insider advice or who are already networked with my colleagues. Once you are admitted, I would be delighted to talk about the possibility of working together.</p>
      </div>
    </div>

    <div class="students__card">
      <div class="students__icon"><i class="fas fa-envelope-open-text" aria-hidden="true"></i></div>
      <h3 class="students__title">Recommendation letters</h3>
      <div class="students__body">
        <p>I am happy to write letters for current and former students and research assistants. Please send me your materials <strong>at least four working days before the earliest submission deadline</strong>. When applicable, include a link to the webpage describing the position, fellowship, or program you are applying to.</p>
      </div>
    </div>

    <div class="students__card">
      <div class="students__icon"><i class="fas fa-calendar-alt" aria-hidden="true"></i></div>
      <h3 class="students__title">Office hours</h3>
      <div class="students__body">
        <p>In Fall 2026, my office hours are <strong>Mondays, 4&ndash;5 pm</strong>. Please sign up via <a href="https://calendly.com/ggros" target="_blank" rel="noopener noreferrer">Calendly</a>.</p>
      </div>
    </div>

  </div>
</section>

<style>
.students__cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
}

.students__card {
  position: relative;
  background: var(--global-card-bg-color, rgba(255,255,255,0.7));
  border: none;
  border-left: 3px solid rgba(59,130,246,0.35);
  border-radius: 0 10px 10px 0;
  padding: 1.1rem 1.25rem 1rem 3.25rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: border-left-color 0.2s, box-shadow 0.2s;
}
.students__card:hover {
  border-left-color: rgba(59,130,246,0.7);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.students__icon {
  position: absolute;
  top: 1.15rem;
  left: 1.1rem;
  width: 1.65rem;
  height: 1.65rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  color: rgba(59,130,246,0.9);
  background: rgba(59,130,246,0.10);
  border: 1px solid rgba(59,130,246,0.18);
  border-radius: 999px;
}

.students__title {
  font-size: 1.08rem;
  font-weight: 600;
  margin: 0 0 0.45rem;
  line-height: 1.3;
  color: var(--global-text-color);
}

.students__body p {
  font-size: 0.92rem;
  line-height: 1.55;
  margin: 0 0 0.55rem;
  color: var(--global-text-color);
}
.students__body p:last-child { margin-bottom: 0; }

.students__body a {
  color: rgba(59,130,246,0.9);
  text-decoration: none;
  border-bottom: 1px solid rgba(59,130,246,0.25);
  transition: color 0.15s, border-color 0.15s;
}
.students__body a:hover {
  color: rgba(59,130,246,1);
  border-bottom-color: rgba(59,130,246,0.7);
  text-decoration: none;
}
</style>
