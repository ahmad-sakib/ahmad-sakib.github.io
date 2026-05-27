---
layout: single
title: "Nonlinear Optics"
permalink: /nlo/
excerpt: "Articles and research notes on Nonlinear Optics, laser physics, and photonics."
author_profile: true
---

Welcome to the **Nonlinear Optics** archive. This section documents my research, investigations, and notes on the interaction of intense light with matter. From second-harmonic generation to nonlinear refractive indices, I explore the phenomena that define modern photonics.

---

### Recent Articles in Nonlinear Optics

<ul>
  {% for post in site.categories.NLO %}
    <li>
      <article>
        <header>
          <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
          <p style="color: #666; font-size: 0.85em">Published on {{ post.date | date: "%B %d, %Y" }}</p>
        </header>
        {% if post.excerpt %}
          <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        {% endif %}
      </article>
    </li>
  {% endfor %}
</ul>

{% if site.categories.NLO.size == 0 %}
  <p>Coming soon: Detailed explorations into NLO phenomena.</p>
{% endif %}
