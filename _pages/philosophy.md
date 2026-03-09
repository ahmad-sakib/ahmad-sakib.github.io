---
layout: single
title: Philosophy
permalink: /philosophy/
---

<p>An introduction to philosophy and its historical development.</p>

<ul>
  {% for post in site.categories.philosophy %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="color: #868; font-size: 0.85em"> — {{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>
