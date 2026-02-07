---
layout: page
title: teaching
permalink: /teaching/
description:
order: 7
nav: true
display_categories: [work, fun]
---

<section class="teaching">
  <div class="teaching__courses">

    <div class="teaching__card">
      <div class="teaching__level teaching__level--undergrad">Undergraduate Lecture</div>
      <h3 class="teaching__title">Migration and Forced Displacement</h3>
      <div class="teaching__meta">Last offered: Spring 2026</div>
      <a class="teaching__syllabus" href="/assets/pdf/Syllabus_Migration_Spring2026.pdf" target="_blank" rel="noopener noreferrer">Syllabus &rarr;</a>
    </div>

    <div class="teaching__card">
      <div class="teaching__level teaching__level--grad">Graduate Seminar</div>
      <h3 class="teaching__title">Migration and Forced Displacement in Comparative Perspective</h3>
      <div class="teaching__meta">Last offered: Fall 2025</div>
      <a class="teaching__syllabus" href="/assets/pdf/Syllabus_Migration_Fall_2025.pdf" target="_blank" rel="noopener noreferrer">Syllabus &rarr;</a>
    </div>

    <div class="teaching__card">
      <div class="teaching__level teaching__level--undergrad">Undergraduate Seminar</div>
      <h3 class="teaching__title">Climate Change Politics</h3>
      <div class="teaching__meta">Last offered: Fall 2025</div>
      <a class="teaching__syllabus" href="/assets/pdf/Syllabus_climate_change-Fall2025.pdf" target="_blank" rel="noopener noreferrer">Syllabus &rarr;</a>
    </div>

    <div class="teaching__card">
      <div class="teaching__level teaching__level--undergrad">Undergraduate Lecture</div>
      <h3 class="teaching__title">Introduction to Comparative Politics</h3>
      <div class="teaching__meta">Last offered: Fall 2024</div>
      <a class="teaching__syllabus" href="/assets/pdf/Syllabus_IntroCP_Fall_2024.pdf" target="_blank" rel="noopener noreferrer">Syllabus &rarr;</a>
    </div>

    <div class="teaching__card">
      <div class="teaching__level teaching__level--grad">Graduate Seminar</div>
      <h3 class="teaching__title">Political Economy of Developing Countries</h3>
      <div class="teaching__meta">Last offered: Spring 2024</div>
      <a class="teaching__syllabus" href="/assets/pdf/Grossman_Polit_Econ_Dev_Spring2024.pdf" target="_blank" rel="noopener noreferrer">Syllabus &rarr;</a>
    </div>

    <div class="teaching__card">
      <div class="teaching__level teaching__level--undergrad">Undergraduate Seminar</div>
      <h3 class="teaching__title">Democratic Erosion</h3>
      <div class="teaching__meta">Last offered: Spring 2023</div>
      <a class="teaching__syllabus" href="/assets/pdf/syllabus_dem_erosion_fall2023.pdf" target="_blank" rel="noopener noreferrer">Syllabus &rarr;</a>
    </div>

    <div class="teaching__card">
      <div class="teaching__level teaching__level--undergrad">Undergraduate Seminar</div>
      <h3 class="teaching__title">Information and Communication Technologies for Development</h3>
      <div class="teaching__meta">Last offered: Spring 2023</div>
      <a class="teaching__syllabus" href="https://www.dropbox.com/s/j0vk4bxumsuggzy/Grossman_ICT4D_Spring2023.pdf?dl=0" target="_blank" rel="noopener noreferrer">Syllabus &rarr;</a>
    </div>

    <div class="teaching__card">
      <div class="teaching__level teaching__level--undergrad">Undergraduate Lecture</div>
      <h3 class="teaching__title">Contemporary African Politics</h3>
      <div class="teaching__meta">Last offered: Fall 2020</div>
      <a class="teaching__syllabus" href="https://web.sas.upenn.edu/ggros/files/2020/09/Syllabus_African_politics_Fall2020.pdf" target="_blank" rel="noopener noreferrer">Syllabus &rarr;</a>
    </div>

    <div class="teaching__card">
      <div class="teaching__level teaching__level--grad">MA Seminar</div>
      <h3 class="teaching__title">Evidence Based Policy</h3>
      <div class="teaching__meta">Last offered: Fall 2017</div>
      <a class="teaching__syllabus" href="https://web.sas.upenn.edu/ggros/files/2016/10/Evidence_Based_Policy_Fall2017-17oymlv.pdf" target="_blank" rel="noopener noreferrer">Syllabus &rarr;</a>
    </div>

  </div>
</section>

<style>
.teaching__courses {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

.teaching__card {
  background: var(--global-card-bg-color, rgba(255,255,255,0.7));
  border: none;
  border-left: 3px solid rgba(59,130,246,0.35);
  border-radius: 0 10px 10px 0;
  padding: 0.85rem 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: border-left-color 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}
.teaching__card:hover {
  border-left-color: rgba(59,130,246,0.7);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.teaching__level {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  display: inline-block;
  width: fit-content;
  margin-bottom: 0.4rem;
}
.teaching__level--undergrad {
  background: rgba(59,130,246,0.08);
  color: rgba(59,130,246,0.8);
  border: 1px solid rgba(59,130,246,0.15);
}
.teaching__level--grad {
  background: rgba(139,92,246,0.08);
  color: rgba(139,92,246,0.85);
  border: 1px solid rgba(139,92,246,0.15);
}

.teaching__title {
  font-size: 1.02rem;
  font-weight: 600;
  margin: 0 0 0.3rem;
  line-height: 1.3;
  color: var(--global-text-color);
}

.teaching__meta {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  margin-bottom: 0.5rem;
}

.teaching__syllabus {
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(59,130,246,0.85);
  text-decoration: none;
  margin-top: auto;
  transition: color 0.15s;
}
.teaching__syllabus:hover {
  color: rgba(59,130,246,1);
  text-decoration: none;
}
</style>
