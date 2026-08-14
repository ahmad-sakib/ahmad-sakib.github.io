---
title: "Conventional Lens Phase Profile"
layout: single
permalink: /metaoptics/metalenses/conventional-lens-phase-profile/
author_profile: false
sidebar:
  nav: "metalenses"
excerpt: A conventional lens creates a curved wavefront by imposing a spatial phase delay through its thickness profile; a metalens does the same with a flat patterned surface.
---

# Conventional Lens Phase Profile

The basic job of a conventional lens is to impose a phase profile across its aperture. A plane wave entering the lens should emerge with a phase that varies with position in exactly the right way to produce a converging wavefront. This is why a lens is often described as a device that delivers a spatially varying optical delay.

For a spherical refractive lens, the center of the element is thicker than the edge. That means light passing near the center travels a longer optical path than light passing near the edge. If the refractive index is $n$ and the material thickness is $L(r)$, then the optical path is approximately $nL(r)$, and the phase delay is proportional to $k_0 n L(r)$, where $k_0 = 2\pi/\lambda$ is the free-space wavenumber.

This phase variation is what turns the incoming wavefront into a converging one. Without this spatial phase gradient, a beam would continue traveling nearly unchanged. With it, rays are redirected toward a common focal point.

In a thin-lens approximation, the phase profile is often written as a quadratic function of the radial coordinate $r$:

$$ \phi(r) \approx -\frac{k_0 r^2}{2f}$$

where $f$ is the focal length. This profile is valid for paraxial focusing, where the light remains close to the optical axis and the ray angles are small. It captures the essential idea: the lens modifies the phase more strongly at larger radii, creating a curved wavefront that converges toward the focus.

The more exact wavefront needed to focus to a point at distance $f$ is described by a hyperbolic phase law:

$$\varphi(r) = -k_0\left(\sqrt{r^2 + f^2} - f\right)$$

For $r \ll f$, this reduces to the simpler quadratic form above. This is why both conventional and metalenses can be analyzed using the same wavefront language, even though their physical implementations are very different.

The difference between the two approaches is the way this phase is generated:

- Conventional lens: thickness variation and material refractive index change.
- Metalens: local nanostructure geometry imposes the same phase delay at the surface.

In both cases, the fundamental operation is the same: a plane wave is transformed into a converging wavefront, and that converging wavefront focuses light at a point.

## References
[1] Wikipedia contributors. “Lens.” https://en.wikipedia.org/wiki/Lens

[2] Wikipedia contributors. “Optical phase.” https://en.wikipedia.org/wiki/Phase_(waves)

[3] RP Photonics. “Lenses.” https://www.rp-photonics.com/lenses.html
