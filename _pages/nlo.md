---
layout: single
title: "Non-linear Physics"
permalink: /non-linear-physics/
---

<p>This section will contain my post regarading Non Linear optics. </p>

<ul>
  {% for post in site.categories.NLO %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="color: #666; font-size: 0.85em"> — {{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>