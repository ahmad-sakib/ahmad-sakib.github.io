---
layout: single
title: "MEEP and FDTD Series"
permalink: /meep-fdtd/
author_profile: false
series: meep-fdtd
excerpt: "A series of posts about learning MEEP and finite-difference time-domain simulation."
---

This series will be for anyone who is willing learn MEEP with deep understnading of simulation, code and physics.

## Posts

{% assign series_posts = site.posts | where: "series", page.series %}
{% if series_posts.size > 0 %}
<ol class="series-post-list">
  {% for post in series_posts %}
    <li>
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ol>
{% else %}
Posts in this series will appear here as I publish them.
{% endif %}