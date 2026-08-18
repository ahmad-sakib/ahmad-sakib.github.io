---
title: "What Does a Lens Do?"
layout: single
permalink: /metaoptics/metalenses/what-does-a-lens-do/
author_profile: false
sidebar:
  nav: "metalenses"
excerpt: "A lens is an optical phase transformer that modifies the spatial curvature of electromagnetic wavefronts to form images, concentrate energy, or perform optical Fourier transformations."
---

# What Does a Lens Do?

In introductory geometric optics, a lens is often described simply as a piece of transparent glass that "bends light rays" through Snell's law at its curved surfaces. While intuitive, this ray picture obscures the deeper physical reality: **a lens is a spatial phase transformer for electromagnetic wavefronts.**

By imposing a spatially varying optical delay across its entrance pupil, a lens reshapes the geometry of propagating wavefronts—converting planar waves into converging spherical waves, transforming divergence into collimation, and performing two-dimensional spatial Fourier transformations.

---

## 1. Wavefront Transformation: From Plane to Sphere

An optical wave propagating along the $z$-axis in free space can be described by its complex electric field $U(x, y, z)$. For an incident monochromatic plane wave of wavelength $\lambda_0$ and wavenumber $k_0 = 2\pi / \lambda_0$:

$$
U_{\mathrm{in}}(x, y, z=0) = A_0
$$

The primary function of a focusing lens positioned at $z = 0$ is to impart a position-dependent phase transformation $t(x, y) = e^{i \Phi(x, y)}$ such that the transmitted field immediately after the lens becomes:

$$
U_{\mathrm{out}}(x, y) = U_{\mathrm{in}}(x, y) \cdot t(x, y) = A_0 e^{i \Phi(x, y)}
$$

```
   INCIDENT PLANE WAVE                LENS              CONVERGING SPHERICAL WAVE
      (Constant Phase)         (Phase Transformer)             (Curved Phase)
            |                          |                          \
            |                          |                           \
            |        =====>          [LENS]         =====>          * Focal Point (f)
            |                          |                           /
            |                          |                          /
       z = -infinity                 z = 0                      z = f
```

To bring all transmitted light rays to a single focal point located at a distance $f$ on the optical axis $(0, 0, f)$, the emerging wavefront must be a **converging spherical wave** centered at $(0, 0, f)$. The ideal field profile at the exit pupil is given by:

$$
U_{\mathrm{converge}}(x, y) = \frac{A_0}{r} e^{-i k_0 r} = \frac{A_0}{\sqrt{x^2 + y^2 + f^2}} \exp\left( -i k_0 \sqrt{x^2 + y^2 + f^2} \right)
$$

Equating the phase of the transmitted field to the ideal converging sphere defines the target phase profile required of any focusing lens:

$$
\boxed{\Phi(x, y) = -k_0 \left( \sqrt{x^2 + y^2 + f^2} - f \right)}
$$

---

## 2. Optical Path Length (OPL) and Phase Delay

The physical origin of the phase delay $\Phi(x, y)$ in classical optics is the **Optical Path Length (OPL)**. When light traverses a medium of spatially varying refractive index $n(x, y, z)$, the accumulated optical path along a geometric path $C$ is:

$$
\mathrm{OPL}(x, y) = \int_C n(x, y, z) \, dz
$$

The corresponding accumulated optical phase delay $\Delta \phi(x, y)$ relative to propagation through vacuum is:

$$
\Delta \phi(x, y) = k_0 \cdot \mathrm{OPL}(x, y) = \frac{2\pi}{\lambda_0} \int n(x, y, z) \, dz
$$

### How a Curved Lens Achieves This
In a standard biconvex or plano-convex refractive lens:
1. **Center ($r = 0$)**: The lens has maximum glass thickness $d_0$. Because the refractive index of glass ($n \approx 1.5$) is greater than air ($n = 1$), light passing through the center suffers the maximum optical delay.
2. **Periphery ($r > 0$)**: The glass thickness $d(r)$ decreases radially toward the edges. Light travels through more air and less glass, experiencing less phase delay.

This differential delay slows down the central portion of the plane wavefront relative to the outer margins, converting a flat wavefront into a concave, converging spherical envelope.

---

## 3. The Lens as an Optical Fourier Transformer

Beyond simple imaging, one of the most profound capabilities of a lens is its ability to perform **real-time analog two-dimensional Fourier transformations** at the speed of light, as formalized by Joseph W. Goodman [2].

```
Front Focal Plane (x, y)            Lens (f)             Back Focal Plane (u, v)
  Input Object U_in(x,y)                                 Spatial Spectrum F{U_in}
          |                                                         |
          |       <------ f ------> [LENS] <------ f ------>        |
          |                                                         |
```

When an input optical transparency $U_{\mathrm{in}}(x, y)$ is placed at the front focal plane of a lens ($z = -f$), the complex optical amplitude distribution at the back focal plane ($z = +f$) is proportional to the exact 2D Fourier transform of the input:

$$
U_f(u, v) = \frac{1}{i \lambda_0 f} \iint_{-\infty}^{\infty} U_{\mathrm{in}}(x, y) \exp\left[ -i \frac{2\pi}{\lambda_0 f} (x u + y v) \right] dx \, dy
$$

where $(u, v)$ represent spatial coordinates in the focal plane corresponding to spatial frequencies $(f_x, f_y) = (u / \lambda_0 f, v / \lambda_0 f)$.

This Fourier transforming property forms the backbone of:
- **Optical Signal Processing**: 4f spatial frequency filtering, edge enhancement, and phase contrast microscopy.
- **Diffraction Theory**: Direct optical computation of far-field radiation and Fraunhofer patterns.
- **Optical Neural Networks & Computing**: Passive, zero-energy matrix-vector multiplication in coherent photonic circuits.

---

## 4. Mechanisms of Wavefront Manipulation

Lenses and beam-shaping optical elements can be implemented across multiple distinct physical modalities:

| Optical Paradigm | Primary Physical Mechanism | Phase Profile Origin | Dominant Application Domain |
| :--- | :--- | :--- | :--- |
| **Refractive Lens** | Volumetric refraction via Snell's Law | Macroscopic thickness variation $d(r)$ | Cameras, telescopes, microscopes, corrective eyewear |
| **Reflective Lens (Curved Mirror)** | Specular reflection via law of reflection | Surface geometric profile $z(r)$ | Astronomical telescopes, high-power lasers, EUV lithography |
| **Diffractive Optical Element (DOE)** | Periodic constructive wave interference | Micro-stepped $2\pi$ modulo phase surface | Laser beam shaping, holographic projectors |
| **Gradient-Index (GRIN) Lens** | Inhomogeneous refractive index profile | Radial index distribution $n(r) = n_0(1 - \frac{A}{2}r^2)$ | Endoscopes, fiber-optic collimators, compact pickups |
| **Metasurface (Metalens)** | Subwavelength scatterer resonance & waveguiding | Quasi-continuous nanostructure spatial encoding | Flat cameras, AR/VR displays, compact photonic integration |

---

## 5. Summary & Key Takeaways

1. **Wavefront Reshaping**: A lens converts plane waves into converging spherical wavefronts by introducing a radially dependent optical delay.
2. **Phase Function**: The canonical task of an ideal focusing lens of focal length $f$ is imparting the phase distribution $\Phi(r) = -k_0 (\sqrt{r^2+f^2} - f)$.
3. **Fourier Transformation**: A lens naturally computes the 2D spatial Fourier spectrum of an optical field at its back focal plane.
4. **Implementation Flexibility**: While conventional lenses use bulky curved geometry, the same phase transformation can be realized on a flat surface using subwavelength metaoptics.

> **Key Takeaway**: A lens is not defined by its bulk material curvature, but by the spatial phase transformation it imparts on an incoming electromagnetic wave.

---

## References

[1] Born, M., & Wolf, E. (1999). *Principles of Optics: Electromagnetic Theory of Propagation, Interference and Diffraction of Light* (7th ed.). Cambridge University Press. [https://doi.org/10.1017/CBO9781139644181](https://doi.org/10.1017/CBO9781139644181)

[2] Goodman, J. W. (2017). *Introduction to Fourier Optics* (4th ed.). W. H. Freeman / Macmillan Learning.

[3] Hecht, E. (2016). *Optics* (5th ed.). Pearson Education.

[4] Saleh, B. E. A., & Teich, M. C. (2019). *Fundamentals of Photonics* (3rd ed.). John Wiley & Sons. [https://doi.org/10.1002/9781119129905](https://doi.org/10.1002/9781119129905)

[5] Lipson, A., Lipson, S. G., & Lipson, H. (2010). *Optical Physics* (4th ed.). Cambridge University Press. [https://doi.org/10.1017/CBO9780511762741](https://doi.org/10.1017/CBO9780511762741)
