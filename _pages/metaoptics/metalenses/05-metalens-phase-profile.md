---
title: "Metalens Phase Profile"
layout: single
permalink: /metaoptics/metalenses/metalens-phase-profile/
author_profile: false
sidebar:
  nav: "metalenses"
excerpt: A metalens imposes a designed radial phase profile on a flat surface so that a plane wave is transformed into a converging wavefront and focused without bulk glass.
---

# Metalens Phase Profile

A metalens converts a plane wave into a converging wavefront by imposing a designed phase delay at each point on its aperture. This phase profile is not created by thickness variation in a curved piece of glass; it is created by local nanostructures that act like tiny optical elements. Each location on the metalens is assigned a phase value that contributes to the final focusing behavior.

The ideal phase profile for focusing at a distance $f$ is the hyperbolic function:

$$\phi(r) = -k_0\left(\sqrt{r^2 + f^2} - f\right)$$

where $r$ is the radial coordinate measured from the optical axis and $k_0 = 2\pi/\lambda$ is the wave number in free space. This phase profile ensures that each point on the surface adds the correct delay so that light from the entire aperture arrives at the same focal point with the same phase.

For rays close to the axis, the approximation is simpler and more familiar. When $r \ll f$, the exact hyperbolic phase reduces to the quadratic phase profile:

$$ \phi(r) \approx -\frac{k_0 r^2}{2f}$$

This is the same low-angle form found in conventional thin lenses. It explains why a metalens can mimic the focusing behavior of a conventional lens even though it has no bulky curved shape.

The phase gradient is also what determines local ray direction. In a metalens, the surface is designed so that the phase changes gradually across the aperture, producing a wavefront that bends toward the focus. The local slope of the phase profile controls the local momentum of the transmitted light, which is why the surface pattern is so important.

A practical metalens does not implement every possible phase value continuously. Instead, the phase is sampled and discretized using meta-atom geometries. The phase is wrapped modulo $2\pi$, and different nanostructure shapes or sizes are assigned to different phase states. In this way, a digitally encoded phase map is built into a flat optical surface.

**Key ideas**
- A metalens uses a designed spatial phase profile to focus light.
- The exact phase law is hyperbolic, and the paraxial limit is quadratic.
- Phase gradient determines the local direction of propagation.
- The required phase is realized using discrete meta-atom geometries.

> The metalens focuses by imposing the right phase profile over a flat aperture, not by bulk thickness variation.

## References
[1] Wikipedia contributors. “Metalens.” https://en.wikipedia.org/wiki/Metalens

[2] Wikipedia contributors. “Metasurface.” https://en.wikipedia.org/wiki/Metasurface

[3] Khorasaninejad, M., Chen, W. T., Devlin, R. C., Oh, J., Zhu, A. Y., & Capasso, F. (2016). Metalenses at visible wavelengths: diffraction-limited focusing and subwavelength resolution imaging. Science, 352(6290), 1190–1194. https://www.science.org/doi/10.1126/science.aaf1110
