---
layout: single
title: "Machine Learning"
permalink: /machine-learning/
excerpt: "Ahmad Hasan Sakib's research on machine learning for physics — neural networks, gradient descent, PCA, and ML applications in nonlinear optics."
  ---
author_profile: true
---

# Machine Learning in Physics — Ahmad Hasan Sakib
  
  This archive collects my research at the intersection of machine learning and 
  computational physics. My focus: applying neural network architectures to model 
  nonlinear optical phenomena that resist classical analytical solutions.

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
