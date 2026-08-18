---
title: "How Does a Lens Focus Light?"
layout: single
permalink: /metaoptics/metalenses/how-does-a-lens-focus-light/
author_profile: false
sidebar:
  nav: "metalenses"
excerpt: "A lens focuses light by equalizing optical path lengths across its aperture, creating constructive wave interference at a localized focal spot bounded by the diffraction limit."
---

# How Does a Lens Focus Light?

When a lens focuses light into a sharp, bright focal spot, it does so through the combined physics of **optical path equalization**, **coherent wave interference**, and **diffraction**. Rather than simply "steering" geometric rays, a lens orchestrates the phase of secondary wavelets across its entire aperture so that they arrive simultaneously and in phase at a single point in space.

Understanding this focusing process requires examining two complementary viewpoints: **Fermat's Principle of Least Time** (the geometric/variational view) and the **Huygens–Fresnel Diffraction Theory** (the wave/interference view).

---

## 1. Fermat's Principle: Equal Optical Paths

In 1662, Pierre de Fermat formulated the variational foundation of geometric optics: **light traverses the path between two points that minimizes (or makes stationary) the optical travel time** [1].

For light propagating from a distant source (a plane wavefront at $z = 0$) to a target focal point $F = (0, 0, f)$, every possible path through the lens aperture must take exactly the same optical time:

$$
t_{\mathrm{optical}}(r) = \frac{\mathrm{OPL}(r)}{c} = \text{constant}
$$

```
Incident Wavefront             Lens Plane (z = 0)                   Focal Point (0,0,f)
      |                               (0, y)
      |---------------------------------| \
      |        Path 1 (Peripheral)      |   \
      |                                 |     \  Geometric Distance = sqrt(r^2 + f^2)
      |                                 |       \
      |                                 |         \
      |---------------------------------| ---------> * F (0, 0, f)
      |        Path 2 (Central)         | (0, 0)  /
      |                                 |        /
      |                                 |       /
      |---------------------------------|     /
      |                                 |   /
      |                               (0, -y)
```

### Mathematical Derivation of Equal Path Condition

Consider two distinct paths through the lens:
1. **Central Path ($r = 0$)**: Light travels through the lens center with maximum optical path delay $\mathrm{OPL}_0 = n \cdot d_0$, and then travels a straight geometric distance $f$ in air to the focus:
   
   $$
   \mathrm{Total\ Path}(0) = n d_0 + f
   $$

2. **Peripheral Path ($r > 0$)**: Light travels through a thinner section of the lens with optical path $\mathrm{OPL}(r) = n d(r) + 1 \cdot (d_0 - d(r))$, followed by an oblique geometric path through air of length $\sqrt{r^2 + f^2}$:
   
   $$
   \mathrm{Total\ Path}(r) = d_0 + (n - 1)d(r) + \sqrt{r^2 + f^2}
   $$

By Fermat's Principle, equating the two total path lengths gives:

$$
n d_0 + f = d_0 + (n - 1)d(r) + \sqrt{r^2 + f^2}
$$

Rearranging for the required optical delay $(n-1)(d_0 - d(r))$ yields the exact phase condition:

$$
\boxed{\Phi(r) = -k_0 \left( \sqrt{r^2 + f^2} - f \right)}
$$

Because all paths from the entrance pupil to the focal point have identical optical lengths, all rays arrive **isochronously** (at the exact same instant), satisfying Fermat's condition for stigmatic focusing.

---

## 2. The Huygens–Fresnel Principle: Coherent Constructive Interference

From the perspective of wave optics, focusing is fundamentally a phenomenon of **constructive wave interference**.

According to the **Huygens–Fresnel Principle** [2], every point on an unblocked wavefront acts as a mutually coherent source of secondary spherical wavelets. The total complex optical field $U(P)$ at any arbitrary observation point $P = (x, y, z)$ in the focal region is the continuous superposition of all secondary wavelets originating from the lens aperture $\Sigma$:

$$
U(P) = \frac{1}{i \lambda_0} \iint_{\Sigma} U(x', y', 0) \, t(x', y') \, \frac{e^{i k_0 R}}{R} \cos \theta \, dx' \, dy'
$$

where:
- $(x', y')$ are coordinates on the lens aperture $\Sigma$,
- $t(x', y') = e^{i \Phi(x', y')}$ is the lens phase transmission function,
- $R = \sqrt{(x - x')^2 + (y - y')^2 + z^2}$ is the distance from aperture point $(x', y', 0)$ to point $P$,
- $\cos \theta$ is the obliquity factor.

```
                    COHERENT SUPERPOSITION AT FOCUS
   Lens Aperture
       |
       |* (Wavelet 1) ---\
       |                   ---\
       |* (Wavelet 2) ---------> [ FOCAL POINT ] -> All phases align: Δφ = 0
       |                   ---/                      Constructive Interference (MAX Intensity)
       |* (Wavelet 3) ---/
       |
```

### Why Interference Peaks at the Focus ($z = f, x=0, y=0$)
At the focal point $F$, the phase contributed by the propagation distance is $+k_0 R = +k_0 \sqrt{r^2 + f^2}$.

The phase imparted by the lens is $\Phi(r) = -k_0 \sqrt{r^2 + f^2} + k_0 f$.

The net phase of every secondary wavelet arriving at $F$ is:

$$
\phi_{\mathrm{net}}(r) = \Phi(r) + k_0 R = \left( -k_0 \sqrt{r^2 + f^2} + k_0 f \right) + k_0 \sqrt{r^2 + f^2} = k_0 f = \text{constant}
$$

Because $\phi_{\mathrm{net}}(r)$ is identical for all radial positions $r$, every single wavelet arrives in **perfect phase alignment ($\Delta \phi = 0$)**. Their complex field amplitudes add constructively:

$$
|U(F)| = \left| \iint_{\Sigma} \frac{A_0}{f} e^{i k_0 f} dx' dy' \right| = \frac{A_0 \cdot \mathrm{Area}(\Sigma)}{f}
$$

The intensity $I(F) \propto |U(F)|^2$ reaches a massive coherent peak.

Away from the focus ($P \neq F$), the path lengths from different parts of the aperture differ significantly, leading to phase cancellation and destructive interference, driving the intensity to near zero.

---

## 3. The Diffraction Limit: Abbe and Rayleigh Criteria

Because the aperture of any physical lens is finite in diameter ($2R$), a lens cannot focus light to an infinitely small geometric point. Diffraction at the aperture boundaries spreads the focal spot into a characteristic diffraction pattern known as the **Airy Disk** (for circular apertures).

```
                      AIRY DISK INTENSITY PROFILE
              Intensity
                  ^
                  |           /\
                  |          /  \
                  |         /    \
                  |        /      \   <- Main Focal Peak (83.8% of Energy)
                  |       /        \
                  |     /|          |\
                  | ___/ |          | \___     <- First Diffraction Ring
                  +-------------------------> Radial Distance (r)
                       -r_Airy    +r_Airy
```

For a circular aperture of radius $R$ and focal length $f$, the far-field intensity distribution in the focal plane is given by the sombrero function:

$$
I(\theta) = I_0 \left[ \frac{2 J_1(k_0 R \sin \theta)}{k_0 R \sin \theta} \right]^2
$$

where $J_1$ is the Bessel function of the first kind of order one.

### The Airy Spot Size
The radius of the central Airy disk (from peak center to the first dark zero ring) is:

$$
\boxed{r_{\mathrm{Airy}} = 1.22 \frac{\lambda_0 f}{2R} = \frac{0.61 \lambda_0}{\mathrm{NA}}}
$$

where $\mathrm{NA}$ is the **Numerical Aperture** of the lens:

$$
\mathrm{NA} = n \sin \theta_{\max} = n \frac{R}{\sqrt{R^2 + f^2}}
$$

### Fundamental Resolution Limits
- **Abbe Diffraction Limit (1873)** [3]: The minimum resolvable feature pitch $d_{\min}$ under coherent illumination is:
  
  $$
  d_{\min} = \frac{\lambda_0}{2 \mathrm{NA}}
  $$

- **Rayleigh Resolution Criterion (1879)** [4]: Two incoherent point sources are just resolved when the central maximum of one Airy disk falls on the first minimum of the other:
  
  $$
  \Delta x_{\mathrm{Rayleigh}} = \frac{0.61 \lambda_0}{\mathrm{NA}}
  $$

---

## 4. Ray Optics vs. Wave Optics Comparison

| Feature | Ray Optics (Geometric) | Wave Optics (Physical) |
| :--- | :--- | :--- |
| **Focus Description** | Point intersection of refracted rays | Coherent diffraction focal volume (Airy disk) |
| **Focal Size** | Infinitesimal ($r \to 0$) | Finite diffraction spot ($r_{\mathrm{Airy}} = 0.61 \lambda_0 / \mathrm{NA}$) |
| **Guiding Principle** | Snell's Law & Law of Refraction | Huygens–Fresnel Principle & Wave Equation |
| **Aberration Origin** | Ray deviation from paraxial intersection | Wavefront phase deviation from target spherical shell |
| **Applicability Range** | Features $\gg \lambda_0$ | All scales (essential for subwavelength metaoptics) |

---

## 5. Summary & Key Takeaways

1. **Fermat's Isochronism**: A lens equalizes the optical transit time across all aperture coordinates, ensuring every ray reaches the focal point simultaneously.
2. **Constructive Interference**: Optical focusing is the coherent addition of secondary Huygens wavelets whose relative phase delays have been cancelled by the lens profile.
3. **Diffraction Limit**: The smallest achievable focal spot is bounded by wave diffraction to $r_{\mathrm{Airy}} = 0.61 \lambda_0 / \mathrm{NA}$.
4. **Metasurface Equivalence**: A metalens achieves identical path equalization on a flat plane by substituting bulk glass delay with subwavelength nanostructure scattering phase.

> **Key Takeaway**: A lens focuses light by synchronizing the arrival phase of light from every part of its aperture, transforming independent wavelets into a singular, high-intensity constructive interference peak.

---

## References

[1] Fermat, P. de (1662). *Synthèse pour les réfractions*. In *Oeuvres de Fermat* (Vol. 2, pp. 457–468). Gauthier-Villars (1894).

[2] Fresnel, A. (1818). *Mémoire sur la diffraction de la lumière*. Mémoires de l'Académie Royale des Sciences de l'Institut de France, 5, 339–475.

[3] Abbe, E. (1873). Beiträge zur Theorie des Mikroskops und der mikroskopischen Wahrnehmung. *Archiv für mikroskopische Anatomie*, 9(1), 413–418. [https://doi.org/10.1007/BF02956173](https://doi.org/10.1007/BF02956173)

[4] Lord Rayleigh (1879). Investigations in optics, with special reference to the spectroscope. *The London, Edinburgh, and Dublin Philosophical Magazine and Journal of Science*, 8(49), 261–274. [https://doi.org/10.1080/14786447908639684](https://doi.org/10.1080/14786447908639684)

[5] Born, M., & Wolf, E. (1999). *Principles of Optics: Electromagnetic Theory of Propagation, Interference and Diffraction of Light* (7th ed.). Cambridge University Press. [https://doi.org/10.1017/CBO9781139644181](https://doi.org/10.1017/CBO9781139644181)

[6] Gu, M. (2000). *Advanced Optical Imaging Theory*. Springer Series in Optical Sciences. [https://doi.org/10.1007/978-3-540-46487-7](https://doi.org/10.1007/978-3-540-46487-7)
