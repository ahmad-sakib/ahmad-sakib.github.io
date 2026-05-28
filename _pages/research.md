---
layout: single
title: "Research"
permalink: /research/
author_profile: true
---

My work sits at the intersection of **Nonlinear Optics**, **Machine Learning**,
and **Computational Physics**. I am particularly interested in how data-driven
methods can augment and accelerate our understanding of complex physical systems.

---

## Primary Research Area

### Physics-Informed Neural Networks for Nonlinear Optics

The Nonlinear Schrödinger Equation (NLSE) governs pulse propagation in optical
fibers and is notoriously expensive to solve numerically at scale. I am developing
PINN architectures that embed physical symmetries directly into the network
topology, dramatically reducing training data requirements while maintaining
physical consistency.

$$i\frac{\partial A}{\partial z} + \frac{\beta_2}{2}\frac{\partial^2 A}{\partial t^2} - \gamma|A|^2 A = 0$$

---

## Secondary Interests

### Soliton Dynamics & Stability
Optical solitons are self-sustaining wave packets that arise from a precise
balance of dispersion and nonlinearity. I investigate their stability under
perturbation and interactions in multi-mode fibers using high-performance
numerical simulation in Julia.

### Electrodynamics & Computational Methods
Numerical integration of Maxwell's equations (FDTD methods), the Runge-Kutta
family of solvers for ODEs, and Monte Carlo methods for stochastic physical
systems.

### Machine Learning Theory
Optimization landscapes, gradient flow, and the theoretical foundations of
deep learning — particularly in the context of physics applications.

---

## Tools & Methods

| Domain | Methods | Software |
|:---|:---|:---|
| Nonlinear Optics | Split-step Fourier, NLSE | Python, Julia |
| Machine Learning | PINNs, CNNs, gradient descent | PyTorch, NumPy |
| Computational Physics | RK4, FDTD, Monte Carlo | C++, SciPy |
| Scientific Writing | LaTeX, BibTeX | Overleaf |