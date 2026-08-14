---
title: "Propagation Phase"
layout: single
permalink: /metaoptics/metalenses/propagation-phase/
author_profile: false
sidebar:
  nav: "metalenses"
excerpt: "Propagation phase arises when light travels through a subwavelength nanopillar or waveguide-like meta-atom, and the accumulated phase is tuned by geometry and effective refractive index."
image: "assets/images/07-propagation-phase.jpg"
---

# Propagation Phase

Propagation phase is the phase accumulated as light travels through a subwavelength nanostructure. In a metalens, this often means the light enters a dielectric nanopillar, is confined within it, and propagates as a guided mode. The phase change depends on the optical path length inside the structure and on the effective refractive index experienced by the mode.

For a nanopillar of height $h$, the propagation phase can be approximated by:

$$\Phi_{\text{prop}} \approx k_0 n_{\text{eff}} h$$

where $k_0 = 2\pi/\lambda$ is the free-space wave number and $n_{\text{eff}}$ is the effective refractive index of the guided mode. Because $n_{\text{eff}}$ depends on the pillar geometry, such as its diameter, width, and cross-sectional shape, varying those dimensions changes the transmitted phase.

This is one of the most common ways to implement a metalens in transmission. The design intention is simple: choose a set of pillar geometries that provide the required phase delays across the aperture. The result is a flat lens whose phase map is built from many nanoscale propagation elements.

The propagation-phase approach is attractive because it is relatively robust and allows efficient control of phase over a wide range. However, the phase response is usually smooth and continuous over a limited range, and it is often paired with other design strategies to achieve full $2\pi$ phase coverage and broadband performance.

**Key mechanisms**
- Guided-mode propagation inside a subwavelength structure.
- Effective refractive index tuning through geometry.
- Phase accumulation as a function of pillar height and width.

> Propagation phase controls light by changing how much phase accumulates as the field travels through each meta-atom.

## References
[1] Lalanne, P., Astilean, S., Chavel, P., Cambril, E., & Launois, H. (1998). Blazed binary-subwavelength gratings with high efficiency for polarized light. Optics Letters, 23(14), 1081–1083. https://doi.org/10.1364/OL.23.001081

[2] Khorasaninejad, M., & Capasso, F. (2018). Metalenses: versatile optical components. Science, 358(6367), eaam8100. https://www.science.org/doi/10.1126/science.aam8100

[3] RP Photonics. “Metasurfaces.” https://www.rp-photonics.com/metasurfaces.html
