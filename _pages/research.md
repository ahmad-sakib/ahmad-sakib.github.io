---
layout: single
title: "Research Portfolio"
permalink: /research/
author_profile: true
---

My scientific work sits at the intersection of **Metaoptics**, **Computational Photonics**, and **Machine Learning**. I am particularly interested in how subwavelength structures (metasurfaces) can be engineered to control light at the nanoscale, and how data-driven inverse design can accelerate this process.

---

## Core Research Focus Areas

<div class="topic-archive-grid">
  <article class="topic-archive-card">
    <a href="{{ '/metaoptics/' | relative_url }}"><h3>Metaoptics &amp; Metasurfaces</h3></a>
    <p>Designing engineered subwavelength optical antennas to control phase, amplitude, and wavefronts.</p>
  </article>

  <article class="topic-archive-card">
    <a href="{{ '/metaoptics/#metalenses' | relative_url }}"><h3>Metalenses</h3></a>
    <p>Flat optics replacing bulky lenses through precise phase mapping and geometric phase engineering.</p>
  </article>

  <article class="topic-archive-card">
    <a href="{{ '/metaoptics/#computational-metaoptics' | relative_url }}"><h3>Computational Electromagnetics</h3></a>
    <p>FDTD simulations, near-field/far-field optics, and numerical modeling of Maxwell's equations.</p>
  </article>

  <article class="topic-archive-card">
    <a href="{{ '/research/nonlinear-optics/' | relative_url }}"><h3>Nonlinear Optics</h3></a>
    <p>Modeling light-matter interactions, harmonic generation, and predicting nonlinear refractive indices.</p>
  </article>

  <article class="topic-archive-card">
    <a href="{{ '/machine-learning/' | relative_url }}"><h3>Machine Learning for Physics</h3></a>
    <p>Inverse design of photonic structures, Physics-Informed Neural Networks (PINNs), and optimization.</p>
  </article>

  <article class="topic-archive-card">
    <a href="{{ '/research/electrodynamics-optics/' | relative_url }}"><h3>Electrodynamics &amp; Optics</h3></a>
    <p>Classical wave theories, diffraction, scattering, optical path length, and analytical formulations.</p>
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