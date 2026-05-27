---
layout: single
title: "Machine Learning"
permalink: /machine-learning/
excerpt: "Exploring the convergence of artificial intelligence and physical sciences."
author_profile: true
---

The integration of **Machine Learning** into the physical sciences is revolutionizing how we process data and model reality. This archive contains my work on neural network architectures, optimization strategies, and their specific applications in computational physics and data analysis.

---

### Machine Learning Insights

<ul>
  {% for post in site.categories.ML %}
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

{% if site.categories.ML.size == 0 %}
  <p>Currently drafting several tutorials on Gradient Descent and Neural Network optimization. Stay tuned.</p>
{% endif %}
