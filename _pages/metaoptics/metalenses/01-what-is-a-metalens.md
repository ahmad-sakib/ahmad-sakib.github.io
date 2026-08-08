---
title: "What Is a Metalens?"
layout: single
permalink: /metaoptics/metalenses/what-is-a-metalens/
author_profile: false
sidebar:
  nav: "metalenses"
---

<!-- Content will be added later. -->
![Minimal metalens schematic](/assets/images/metalens_gpt.jpeg)

# From Light to Metalenses: How Metasurfaces Engineer Optical Phase

> **Summary:** A conceptual overview of metaoptics, wavefront engineering, and the physical principles behind flat metalenses.

---

## 1. Core Principle: Optical Design as Wavefront Engineering

A conventional lens does not focus light simply because it is curved—it focuses light because its spatially varying thickness introduces an optical path length variation, $\mathrm{OPL}(x,y) = n L(x,y)$, imparting a spatially varying phase delay $\Phi(x,y)$.

$$\text{Curved Glass} \implies \mathrm{OPL}(x,y) \implies \Phi(x,y) \implies \text{Curved Wavefront} \implies \text{Focus}$$

**Metaoptics decouples physical shape from optical function.** By replacing macroscopic thickness variations with subwavelength nanoscale scatterers (**meta-atoms**), a completely flat surface can directly engineer the spatial phase profile $\Phi(x,y)$.

---

## 2. Mathematical & Physical Foundations

### Wave Description

Light is an electromagnetic wave governed by Maxwell's equations. A monochromatic plane wave propagating along $z$ is described by:

$$E(z,t) = E_0 \cos(kz - \omega t + \phi)$$

Phase ($\phi$) defines the relative timing of oscillations in space. Controlling phase spatially enables complete control over interference and wavefront evolution.

### Phase as Temporal Delay

A local phase shift corresponds directly to a time delay:

$$\Delta t(x,y) = \frac{\phi(x,y)}{\omega}$$

By Huygens' principle, emitting secondary wavelets with spatially dependent delays shapes the macroscopic output wavefront.

---

## 3. From Phase Profiles to Optical Functions

### Linear Phase $\rightarrow$ Beam Steering

A constant phase gradient $d\phi/dx$ tilts an incoming wave according to the **generalized Snell's law**:

$$n_t \sin\theta_t - n_i \sin\theta_i = \frac{\lambda_0}{2\pi} \frac{d\phi}{dx}$$

$$\boxed{\phi(x) = kx \implies \text{Constant Gradient} \implies \text{Beam Steering}}$$

### Hyperbolic Phase $\rightarrow$ Focusing

To focus a normally incident plane wave to a focal point at distance $f$, all path contributions must arrive in phase. The required spatial phase profile is hyperbolic:

$$\boxed{\Phi(r) = -\frac{2\pi n_2}{\lambda_0} \left( \sqrt{r^2 + f^2} - f \right)}$$

where $r = \sqrt{x^2 + y^2}$ is the radial position on the metasurface, and $n_2$ is the refractive index of the focal medium.

---

## 4. Physical Realization: High-Index Dielectric Nanopillars

To map the mathematical function $\Phi(x,y)$ to a physical device, the surface is discretized into subwavelength **meta-atoms** (e.g., high-index dielectric nanopillars made of $\text{TiO}_2$, $\text{Si}$, or $\text{GaN}$).

### Mechanism of Phase Control

1. **Truncated Waveguide Behavior:** Each nanopillar acts as a nanoscale optical waveguide/resonator.
2. **Effective Refractive Index ($n_{\mathrm{eff}}$):** Modifying the nanopillar geometry (e.g., diameter $D$) changes $n_{\mathrm{eff}}$ of the supported optical mode.
3. **Accumulated Phase Delay:**

$$\phi \approx k_0 n_{\mathrm{eff}} h$$



where $h$ is the pillar height and $k_0 = 2\pi/\lambda_0$.

By varying nanopillar diameters across the surface, the full $0 \to 2\pi$ phase range is achieved locally without changing the overall height or surface flatness.

---

## 5. Summary Mapping Chain

$$\boxed{\text{Incident Wave}} \xrightarrow{\text{Target Profile }\Phi(r)} \boxed{\text{Nanopillar Library}} \xrightarrow{\text{Subwavelength Array}} \boxed{\text{Transmitted Wavefront}} \rightarrow \text{Focus}$$

> **Key Takeaway:** A metalens is not merely a lens made flat. It represents a fundamental shift in optical design: **engineer the local electromagnetic response at the subwavelength scale to engineer the macroscopic behavior of light.**
