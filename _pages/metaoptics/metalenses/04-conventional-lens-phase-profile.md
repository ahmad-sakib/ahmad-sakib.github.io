---
title: "Conventional Lens Phase Profile"
layout: single
permalink: /metaoptics/metalenses/conventional-lens-phase-profile/
author_profile: false
sidebar:
  nav: "metalenses"
excerpt: A conventional lens shapes light by imposing a spatial phase profile through thickness variation; a metalens achieves the same effect with flat surface phase control.
---

Conventional Lens Phase Profile

A conventional lens focuses light by varying the optical phase across its aperture.

A curved lens is thicker at the center than at the edge, so light traveling through the middle is delayed more. That spatial phase variation changes the outgoing wavefront and makes the beam converge.

This means the lens is not just bending rays; it is creating a position-dependent phase delay that turns a planar wave into a converging one.

**Key ideas**
- A lens controls phase by changing optical path length.
- Phase variation produces wavefront curvature.
- Metalenses create the same phase profile on a flat surface.

> The essential action of a lens is to impose a spatial phase profile that makes light arrive together at the focus.

A conventional lens achieves this through thickness variation.
A metalens achieves it by engineering local phase shifts with meta-atoms.

A thin lens produces a quadratic phase profile in the paraxial approximation, which is enough for small angles and near-axis focusing.

The exact phase required to turn a plane wave into a spherical converging wave is a hyperbolic profile:

$$\Phi(r) = -k_0 \left( \sqrt{r^2 + f^2} - f \right).$$

For small radial distances $r \ll f$, this reduces to the familiar quadratic form:

$$\Phi(r) \approx -\frac{k_0 r^2}{2f}.$$ 

That is why conventional lenses and metalenses can be described by the same fundamental phase concept in the paraxial regime.

A metalens does not reproduce glass thickness. Instead, it selects a local meta-atom geometry so the transmitted light has the required phase shift at each position.

This changes the design process from:

- thickness profile \(L(r)\) \rightarrow optical path \(\mathrm{OPL}(r)\) \rightarrow phase \(\Phi(r)\)

to:

- target phase \(\Phi(r)\) \rightarrow meta-atom geometry \(D(r)\) \rightarrow metalens.

Because optical phase is periodic, the required phase can be wrapped modulo $2\pi$ and implemented as discrete zones on the surface.

In both cases, the fundamental operation is the same:
plane wave \(\rightarrow\) spatial phase transformation \(\rightarrow\) converging wavefront \(\rightarrow\) focus.

## References

No explicit external references were present in the original content.
