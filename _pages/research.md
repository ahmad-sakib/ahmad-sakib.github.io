---
layout: single
title: "Research Portfolio"
permalink: /research/
author_profile: true
---

My scientific work sits at the intersection of **Nonlinear Optics**, **Machine Learning**, and **Computational Physics**. I am particularly interested in how data-driven methods can augment and accelerate our numerical models of physical systems.

---

## Core Research Focus Areas

<div class="topic-archive-grid">
  <article class="topic-archive-card">
    <a href="{{ '/research/nonlinear-optics/' | relative_url }}"><h3>Nonlinear Optics</h3></a>
    <p>Modeling light-matter interactions, soliton dynamics, and predicting nonlinear refractive indices in optical systems.</p>
  </article>

  <article class="topic-archive-card">
    <a href="{{ '/research/metamaterials/' | relative_url }}"><h3>Metamaterials</h3></a>
    <p>Designing engineered electromagnetic materials with specific refractive and dispersive characteristics.</p>
  </article>

  <article class="topic-archive-card">
    <a href="{{ '/research/electrodynamics-optics/' | relative_url }}"><h3>Electrodynamics &amp; Optics</h3></a>
    <p>Formulating classical wave theories, refractive equations, and path calculations in optical media.</p>
  </article>

  <article class="topic-archive-card">
    <a href="{{ '/research/computational-electromagnetics/' | relative_url }}"><h3>Computational Electromagnetics</h3></a>
    <p>Implementing finite-difference time-domain (FDTD) solvers and scientific optics simulations.</p>
  </article>

  <article class="topic-archive-card">
    <a href="{{ '/research/computational-physics/' | relative_url }}"><h3>Computational Physics</h3></a>
    <p>Deploying numerical algorithms (RK4) and Monte Carlo simulations for physical problems.</p>
  </article>

  <article class="topic-archive-card">
    <a href="{{ '/machine-learning/' | relative_url }}"><h3>Machine Learning</h3></a>
    <p>Formulating Physics-Informed Neural Networks (PINNs) and analyzing optimization landscapes.</p>
  </article>
</div>

---

## Primary Research Narrative

### Physics-Informed Neural Networks for Nonlinear Optics

The Nonlinear Schrödinger Equation (NLSE) governs pulse propagation in optical fibers and is notoriously expensive to solve numerically at scale. I am developing PINN architectures that embed physical symmetries directly into the network topology, dramatically reducing training data requirements while maintaining physical consistency.

$$i\frac{\partial A}{\partial z} + \frac{\beta_2}{2}\frac{\partial^2 A}{\partial t^2} - \gamma|A|^2 A = 0$$

### Soliton Dynamics & Stability

Optical solitons are self-sustaining wave packets that arise from a precise balance of dispersion and nonlinearity. I investigate their stability under perturbation and interactions in multi-mode fibers using high-performance numerical simulation in Julia.

### Electrodynamics & Computational Methods

Numerical integration of Maxwell's equations (FDTD methods), the Runge-Kutta family of solvers for ODEs, and Monte Carlo methods for stochastic physical systems.

### Machine Learning Theory

Optimization landscapes, gradient flow, and the theoretical foundations of deep learning — particularly in the context of physics applications.

---

## Tools & Methods

| Domain | Methods | Software |
|:---|:---|:---|
| Nonlinear Optics | Split-step Fourier, NLSE | Python, Julia |
| Machine Learning | PINNs, CNNs, gradient descent | PyTorch, NumPy |
| Computational Physics | RK4, FDTD, Monte Carlo | C++, SciPy |
| Scientific Writing | LaTeX, BibTeX | Overleaf |