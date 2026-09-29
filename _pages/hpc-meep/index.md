---
title: "HPC and MEEP Series"
layout: single
permalink: /hpc/meep/
author_profile: false
toc: false
classes: wide
---

{% include hpc_series_sidebar.html %}

<div class="hpc-index-hero">
  <div class="hpc-index-hero__inner">
    <p class="hpc-index-hero__eyebrow">Tutorial Series · Computational Photonics</p>
    <h1 class="hpc-index-hero__title">Running MEEP on an HPC Cluster</h1>
    <p class="hpc-index-hero__desc">
      A four-part learning path from computer and cluster fundamentals to <strong>MEEP</strong> simulations, meta-optics, and reproducible HPC workflows.
    </p>
    <div class="hpc-index-hero__tags">
      <span class="hpc-index-tag">FDTD</span>
      <span class="hpc-index-tag">MEEP</span>
      <span class="hpc-index-tag">Slurm</span>
      <span class="hpc-index-tag">MPI</span>
      <span class="hpc-index-tag">Python</span>
      <span class="hpc-index-tag">Linux / HPC</span>
    </div>
  </div>
</div>

<p class="hpc-coming-soon">The roadmap below is the planned article architecture. Placeholder pages identify topics reserved for future writing.</p>

## Series Roadmap

{% for part in site.data.hpc_meep_series.parts %}
<section class="hpc-roadmap-part" id="part-{{ part.number }}">
  <h2>Part {{ part.roman }} — {{ part.title }}</h2>
  <p>{{ part.description }}</p>
  <div class="hpc-article-list">
    {% for article in part.articles %}
    <a class="hpc-article-card" href="{{ article.url | relative_url }}">
      <span class="hpc-article-card__number">{{ part.roman }}.{{ article.number }}</span>
      <div class="hpc-article-card__body">
        <p class="hpc-article-card__title">{{ article.title }}</p>
        <p class="hpc-article-card__desc">{{ article.summary }}</p>
      </div>
      <span class="hpc-article-card__arrow" aria-hidden="true">&rarr;</span>
    </a>
    {% endfor %}
  </div>
</section>
{% endfor %}

## Existing Guides

These articles were published before the four-part roadmap was organized. They remain available as supplementary material:

- [What are Slurm and Lmod?](/hpc/meep/01-what-are-slurm-and-lmod/)
- [Know Your HPC System](/hpc/meep/02-know-your-hpc/)
