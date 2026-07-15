---
layout: page
title: media
permalink: /media/
description:
order: 8
nav: true
---

<section class="media">
  <div class="media__items">

    <div class="media__card">
      <div class="media__type media__type--talk">Talk</div>
      <h3 class="media__title">Legal Briefs: Short Talks on Legal Innovations</h3>
      <div class="media__meta">World Bank LJD Week &middot; November 2025</div>
      <a class="media__link" href="https://www.worldbank.org/en/events/2025/11/04/legal-briefs-short-talks-on-legal-innovations/video" target="_blank" rel="noopener noreferrer">Watch &rarr;</a>
    </div>

    <div class="media__card">
      <div class="media__type media__type--podcast">Podcast</div>
      <h3 class="media__title">Climate change politics in developing countries</h3>
      <div class="media__meta">VoxDev &middot; July 2026</div>
      <a class="media__link" href="https://voxdev.org/topic/energy-environment/climate-change-politics-developing-countries" target="_blank" rel="noopener noreferrer">Listen &rarr;</a>
    </div>

    <div class="media__card">
      <div class="media__type media__type--podcast">Podcast</div>
      <h3 class="media__title">Horizons Podcast (Penn Omnia)</h3>
      <div class="media__meta">Omnia, Penn Arts &amp; Sciences &middot; March 2026</div>
      <a class="media__link" href="https://soundcloud.com/omniapenn/horizons-podcast-todays/s-Kprg5eB4pXj?si=48ecafcc05f14b48bb874bb8f3171cd8" target="_blank" rel="noopener noreferrer">Listen &rarr;</a>
    </div>

  </div>
</section>

<style>
.media__items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

.media__card {
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
.media__card:hover {
  border-left-color: rgba(59,130,246,0.7);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.media__type {
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
.media__type--podcast {
  background: rgba(59,130,246,0.08);
  color: rgba(59,130,246,0.85);
  border: 1px solid rgba(59,130,246,0.15);
}
.media__type--talk {
  background: rgba(139,92,246,0.08);
  color: rgba(139,92,246,0.85);
  border: 1px solid rgba(139,92,246,0.15);
}
.media__type--interview {
  background: rgba(16,185,129,0.08);
  color: rgba(16,185,129,0.9);
  border: 1px solid rgba(16,185,129,0.18);
}
.media__type--article {
  background: rgba(217,164,6,0.12);
  color: rgba(217,164,6,0.95);
  border: 1px solid rgba(217,164,6,0.28);
}

.media__title {
  font-size: 1.02rem;
  font-weight: 600;
  margin: 0 0 0.3rem;
  line-height: 1.3;
  color: var(--global-text-color);
}

.media__meta {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  margin-bottom: 0.5rem;
}

.media__link {
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(59,130,246,0.85);
  text-decoration: none;
  margin-top: auto;
  transition: color 0.15s;
}
.media__link:hover {
  color: rgba(59,130,246,1);
  text-decoration: none;
}
</style>
