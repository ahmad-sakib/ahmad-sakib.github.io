---
title: "Conventional Lens Phase Profile"
layout: single
permalink: /metaoptics/metalenses/conventional-lens-phase-profile/
author_profile: false
sidebar:
  nav: "metalenses"
excerpt: "Derivation of the spatial phase profile of conventional refractive lenses, from geometric sagitta to paraxial quadratic approximations and exact hyperbolic wavefronts."
---

# Conventional Lens Phase Profile

To understand how a metalens replaces bulk glass, we must first establish the quantitative mathematical formulation of how a **conventional refractive lens** manipulates the phase of an optical field.

A conventional lens delays an incident wavefront via position-dependent physical thickness $d(r)$. In this post, we derive the exact optical path length (OPL), the lens sagitta function, the paraxial quadratic approximation, and the exact hyperbolic phase profile required for aberration-free, diffraction-limited focusing.

---

## 1. Geometric Derivation of the Lens Sagitta and OPL

Consider a thin **plano-convex refractive lens** with a spherical surface of radius of curvature $R_c$, center thickness $d_0$, and refractive index $n$, surrounded by air ($n_{\mathrm{air}} = 1$).

```
                      PLANO-CONVEX LENS GEOMETRY
                                  y
                                  ^
                                  |
               Flat Front         |         Curved Back Surface (Radius R_c)
                   |              |                 .
                   |   Glass (n)  |              .
                   |              |           .
     --------------+--------------+---------+------------> z
                   | <--- d(r) --->|         |
                   | <------- d_0 --------->|
                   |              |           .
                   |              |              .
                   |              |                 .
                                  |
                                  | r = sqrt(x^2 + y^2)
```

### The Sagitta (Sag) Function
The physical thickness $d(r)$ of the lens at a radial distance $r = \sqrt{x^2 + y^2}$ from the optical axis is determined by the equation of the sphere:

$$
(R_c - \Delta z)^2 + r^2 = R_c^2 \implies \Delta z(r) = R_c - \sqrt{R_c^2 - r^2}
$$

where $\Delta z(r)$ is the **sagitta** (sag) of the curved surface. The remaining glass thickness $d(r)$ at radial coordinate $r$ is:

$$
d(r) = d_0 - \left( R_c - \sqrt{R_c^2 - r^2} \right)
$$

### Accumulated Optical Path Length (OPL)
Between the plane entrance pupil ($z = 0$) and the plane bounding the lens center ($z = d_0$), a ray passing at radius $r$ travels a distance $d(r)$ in glass and $(d_0 - d(r))$ in air:

$$
\mathrm{OPL}(r) = n \cdot d(r) + 1 \cdot [d_0 - d(r)] = d_0 + (n - 1) d(r)
$$

The spatially dependent optical phase delay $\phi_{\mathrm{lens}}(r)$ accumulated across the lens is:

$$
\phi_{\mathrm{lens}}(r) = k_0 \cdot \mathrm{OPL}(r) = k_0 d_0 + k_0 (n - 1) d(r)
$$

where $k_0 = \frac{2\pi}{\lambda_0}$ is the free-space wavenumber.

---

## 2. Paraxial Approximation and the Quadratic Phase Profile

In classical Fourier optics, when the lens aperture radius is much smaller than the radius of curvature ($r \ll R_c$), we apply the binomial paraxial series expansion:

$$
\sqrt{R_c^2 - r^2} = R_c \sqrt{1 - \frac{r^2}{R_c^2}} \approx R_c \left( 1 - \frac{r^2}{2 R_c^2} \right) = R_c - \frac{r^2}{2 R_c}
$$

Substituting this expansion into the thickness equation yields the parabolic sag approximation:

$$
d(r) \approx d_0 - \frac{r^2}{2 R_c}
$$

Substituting $d(r)$ back into the phase expression:

$$
\phi_{\mathrm{lens}}(r) \approx k_0 d_0 + k_0 (n - 1) \left( d_0 - \frac{r^2}{2 R_c} \right) = k_0 n d_0 - k_0 (n - 1) \frac{r^2}{2 R_c}
$$

### The Lens Maker's Formula
For a thin plano-convex lens, the focal length $f$ in air is given by the Lens Maker's formula:

$$
\frac{1}{f} = \frac{n - 1}{R_c} \implies \frac{n - 1}{R_c} = \frac{1}{f}
$$

Substituting $1/f$ into the phase equation:

$$
\boxed{\phi_{\mathrm{lens}}(r) = \phi_0 - \frac{k_0 r^2}{2 f} = \phi_0 - \frac{\pi (x^2 + y^2)}{\lambda_0 f}}
$$

where $\phi_0 = k_0 n d_0$ is a constant uniform phase bias.

### The Thin-Lens Complex Transmission Function
Ignoring the constant phase delay $\phi_0$, the idealized complex amplitude transmittance $t_L(x, y)$ of a thin paraxial lens (as formalized by Goodman [1]) is:

$$
\boxed{t_L(x, y) = \exp\left[ -i \frac{k_0 (x^2 + y^2)}{2 f} \right] = \exp\left[ -i \frac{\pi (x^2 + y^2)}{\lambda_0 f} \right]}
$$

---

## 3. Exact Hyperbolic Phase Profile vs. Paraxial Quadratic Profile

While the quadratic phase profile $\Phi_{\mathrm{quad}}(r) = -\frac{k_0 r^2}{2f}$ is widely used in paraxial Fourier optics, it is an approximation that assumes small ray angles ($r / f \ll 1$).

To focus a collimated normal-incidence plane wave to an exact, aberration-free focal spot at $(0, 0, f)$ for arbitrary ray angles (including high Numerical Aperture, $\mathrm{NA} > 0.5$), the **exact required phase profile is hyperbolic**:

$$
\boxed{\Phi_{\mathrm{hyperbolic}}(r) = -k_0 \left( \sqrt{r^2 + f^2} - f \right)}
$$

```
                         PHASE PROFILE COMPARISON
       Phase Delay Φ(r)
            0 +----------------------------------------------+
              | \                      --- Paraxial Quadratic |
              |  \                  -- - - Exact Hyperbolic   |
              |   \               -                           |
              |    \             -                            |
              |     \           /                             |
              |      \        -                               |
              |       \      /   <- Spherical Aberration Error|
              |        \    /                                 |
              |         \  -                                  |
              |          \/                                   |
              +----------------------------------------------+
              0 (Center)                                 r_max (Edge)
```

### High-Order Taylor Expansion & Spherical Aberration
Expanding the exact square-root term in a Taylor series for $r < f$:

$$
\sqrt{r^2 + f^2} - f = f \left[ \sqrt{1 + \frac{r^2}{f^2}} - 1 \right] = f \left[ \frac{1}{2} \left(\frac{r^2}{f^2}\right) - \frac{1}{8} \left(\frac{r^2}{f^2}\right)^2 + \frac{1}{16} \left(\frac{r^2}{f^2}\right)^3 - \dots \right]
$$

Multiplying by $-k_0$:

$$
\Phi_{\mathrm{hyperbolic}}(r) = \underbrace{-\frac{k_0 r^2}{2 f}}_{\text{Paraxial Quadratic}} + \underbrace{\frac{k_0 r^4}{8 f^3}}_{\text{Primary Spherical Aberration}} - \underbrace{\frac{k_0 r^6}{16 f^5}}_{\text{Higher-Order Aberration}} + \dots
$$

The discrepancy between the quadratic approximation and the exact hyperbolic requirement is the mathematical origin of **primary spherical aberration** in simple refractive optics:
- In a parabolic or paraxial lens, marginal rays (large $r$) are focused too close or too far relative to paraxial rays.
- In a conventional spherical glass lens, correcting this requires combining multiple concave and convex lenses (doublets, triplets) or manufacturing expensive aspheric surfaces.

---

## 4. Phase Comparison Table

| Profile Type | Mathematical Formulation | Domain of Validity | Aberration Characteristics |
| :--- | :--- | :--- | :--- |
| **Exact Hyperbolic** | $\Phi(r) = -k_0 \left(\sqrt{r^2 + f^2} - f\right)$ | All NA values ($0 < \mathrm{NA} < 1$) | **Stigmatic & aberration-free** on-axis |
| **Spherical Refractive** | $\Phi(r) \propto -k_0 (n-1) \left(R_c - \sqrt{R_c^2 - r^2}\right)$ | Spherical glass geometries | Suffers from significant spherical aberration at high NA |
| **Paraxial Quadratic** | $\Phi(r) = -\frac{k_0 r^2}{2f}$ | Paraxial regime ($r \ll f$, $\mathrm{NA} < 0.2$) | Neglects higher-order terms ($O(r^4)$); severe error at large apertures |

---

## 5. Bulk Refraction vs. Metasurface Phase Delivery

```
A. CONVENTIONAL BULK LENS                     B. FLAT METALENS
   Phase accumulated via propagation             Phase imparted at planar boundary
   through varying glass thickness d(r)          via subwavelength nanostructures

           |  d(r)  |                                   |  h ~ λ  |
         __+________+__                               =================
       /  : |      | :  \                             ||||||||||||||||| <- Meta-atoms
      |   : | Glass| :   |                            =================
       \__: |  (n) | :__/                                     |
          +----------+                                        |
          |<-- d_0 ->|                                        v
                                                       Exact Hyperbolic Phase
          Δφ(r) = k_0 (n - 1) d(r)                     Φ(r) = -k_0(sqrt(r^2+f^2) - f)
```

1. **Conventional Lens**: Achieves phase shift through macroscopic propagation delays $\Delta \phi(r) = k_0 (n-1) d(r)$. This necessitates thick, curved bulk glass, introducing weight, bulk, and geometric aberrations.
2. **Metalens**: Directly samples and encodes the **exact hyperbolic phase profile** $\Phi(r)$ at each subwavelength unit cell using nanoscale resonators on an optically flat plane. This inherently eliminates spherical aberration from the start.

> **Key Takeaway**: The paraxial quadratic phase is merely an approximation of the exact hyperbolic phase. While conventional optics must grind complex aspheric glass to approximate this ideal, metasurfaces implement the exact hyperbolic profile directly on a flat surface.

---

## References

[1] Goodman, J. W. (2017). *Introduction to Fourier Optics* (4th ed.). W. H. Freeman / Macmillan Learning.

[2] Born, M., & Wolf, E. (1999). *Principles of Optics: Electromagnetic Theory of Propagation, Interference and Diffraction of Light* (7th ed.). Cambridge University Press. [https://doi.org/10.1017/CBO9781139644181](https://doi.org/10.1017/CBO9781139644181)

[3] Hecht, E. (2016). *Optics* (5th ed.). Pearson Education.

[4] Khorasaninejad, M., & Capasso, F. (2017). Metalenses: Versatile multifunctional components for nanophotonics. *Science*, 358(6367), eaam8100. [https://doi.org/10.1126/science.aam8100](https://doi.org/10.1126/science.aam8100)

[5] Chen, W. T., Zhu, A. Y., & Capasso, F. (2020). Flat optics with dispersion-engineered metasurfaces. *Nature Reviews Materials*, 5(8), 604–620. [https://doi.org/10.1038/s41578-020-0203-3](https://doi.org/10.1038/s41578-020-0203-3)
