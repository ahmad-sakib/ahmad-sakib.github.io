---
title: "What Is a Metalens?"
layout: single
permalink: /metaoptics/metalenses/what-is-a-metalens/
author_profile: false
sidebar:
  nav: "metalenses"
excerpt: "A metalens is a flat, ultrathin optical surface composed of subwavelength nanostructures that locally control the phase, amplitude, and polarization of light to focus without bulk curved glass."
---

# What Is a Metalens?

For centuries, optical imaging has relied on curved glass lenses that redirect light through gradual phase accumulation across macroscopic material thicknesses. A **metalens** fundamentally reimagines this paradigm: it is an optically flat, quasi-two-dimensional interface composed of engineered **subwavelength nanostructures** (often referred to as *meta-atoms*) that shape optical wavefronts with subwavelength spatial resolution.

By introducing abrupt, spatially varying phase, amplitude, and polarization discontinuities across a flat planar substrate, a metalens achieves diffraction-limited focusing and advanced beam manipulation in a form factor that is orders of magnitude thinner and lighter than conventional refractive optics.

---

## 1. The Fundamental Working Principle

A conventional refractive lens shapes wavefronts through spatial variations in physical thickness $d(r)$, accumulating an optical path phase delay $\phi(r) = k_0 n d(r)$. In contrast, a metalens is planar with constant thickness $H \sim \lambda_0$, and modulates the wavefront locally via nanoscale scatterers.

```
       CONVENTIONAL LENS                     METALENS
       (Curved Bulk Glass)               (Flat Nanostructured Surface)
          ____---____                     | | | | | | | | | | | | |
        /             \                   | | | | | | | | | | | | |  <- Meta-atoms
       |   Glass (n)   |                 =========================== <- Substrate
        \             /                        |        |        |
          ----___----                          v        v        v
               |                                 Diffraction-Limited
               v                                       Focus
             Focus
```

When an incident electromagnetic wave illuminates the metasurface, each meta-atom acts as an anisotropic or isotropic subwavelength resonator / waveguide, imparting a designated local phase shift $\Phi(x, y)$ to the transmitted field:

$$
\mathbf{E}_{\mathrm{trans}}(x, y) = t(x, y) \, \mathbf{E}_{\mathrm{inc}}(x, y) = A(x, y) e^{i \Phi(x, y)} \, \mathbf{E}_{\mathrm{inc}}(x, y)
$$

where $A(x, y) \approx 1$ represents near-unity amplitude transmission for high-efficiency dielectric designs, and $\Phi(x, y)$ is the prescribed spatial phase profile across the metasurface aperture.

### The Generalized Snell's Law

The foundation of metasurface optics is governed by the **Generalized Snell's Law of Refraction**, established by Yu et al. (2011) [1]. By introducing a continuous or quasi-continuous phase gradient along the interface $\nabla \Phi = \frac{d\Phi}{dx} \hat{\mathbf{x}}$, conservation of parallel momentum yields:

$$
\boxed{n_t \sin \theta_t - n_i \sin \theta_i = \frac{\lambda_0}{2\pi} \frac{d\Phi}{dx}}
$$

where:
- $n_i$ and $n_t$ are the refractive indices of the incident and transmission media,
- $\theta_i$ and $\theta_t$ are the angles of incidence and refraction,
- $\lambda_0$ is the free-space wavelength,
- $\frac{d\Phi}{dx}$ is the interfacial phase gradient.

When the phase gradient $\frac{d\Phi}{dx}$ is spatially engineered as a radial function $\Phi(r)$, incoming planar wavefronts are converted into spherical converging wavefronts that meet at a sharp focus.

---

## 2. Anatomy of a Metalens

A standard transmission-mode dielectric metalens consists of three primary components:

1. **Substrate**: An optically transparent, low-index mechanical support such as fused silica ($\mathrm{SiO_2}$, $n \approx 1.46$), quartz, sapphire, or transparent polymer.
2. **Meta-Atoms (Nanoresonators)**: An array of high-index dielectric or semiconductor nanostructures (e.g., Titanium Dioxide $\mathrm{TiO_2}$, Silicon $\mathrm{Si}$, Gallium Nitride $\mathrm{GaN}$, or Silicon Nitride $\mathrm{Si_3N_4}$) arranged in a subwavelength lattice.
3. **Lattice Pitch ($U$)**: The subwavelength unit-cell periodicity ($U < \lambda_0 / n_t$) chosen to prevent spurious non-zero diffraction orders according to the grating equation:

$$
U < \frac{\lambda_0}{n_{\mathrm{sub}} + \sin \theta_{\max}}
$$

| Component | Common Materials | Primary Role |
| :--- | :--- | :--- |
| **Meta-Atoms** | $\mathrm{TiO_2}$, $\mathrm{GaN}$, $\mathrm{Si_3N_4}$, $\mathrm{c\text{-}Si}$, $\mathrm{a\text{-}Si}$ | Provide local $0 \text{ to } 2\pi$ phase retardation with low optical absorption |
| **Substrate** | Fused Silica ($\mathrm{SiO_2}$), Quartz, Sapphire | Mechanical support with high optical transmission |
| **Index Contrast** | $\Delta n = n_{\text{meta}} - n_{\text{sub}} \gtrsim 1.0$ | Ensures strong field confinement within individual meta-atoms |

---

## 3. Mechanisms for Imparting Phase

To construct an arbitrary wavefront, meta-atoms must cover the full $0 \text{ to } 2\pi$ phase range while maintaining high transmission amplitude. In modern dielectric metaoptics, three primary mechanisms are utilized:

### A. Propagation Phase (Waveguide Mode Control)
Cylindrical or square nanopillars act as truncated dielectric waveguides. By varying the cross-sectional dimensions (e.g., pillar diameter $D$) at a fixed height $H$, the effective mode index $n_{\mathrm{eff}}(D)$ is tuned, yielding a phase delay:

$$
\Phi_{\mathrm{prop}}(D) \approx \frac{2\pi}{\lambda_0} n_{\mathrm{eff}}(D) H
$$

### B. Resonant / Mie Phase
High-permittivity meta-atoms support electric and magnetic multipole resonances (Mie resonances). Near resonance, the scattering phase undergoes rapid variations, allowing compact subwavelength control over transmitted and reflected waves.

### C. Geometric (Pancharatnam–Berry) Phase
Anisotropic meta-atoms (such as rectangular nanofins) acting as local half-wave plates impart a geometric phase upon circular polarization conversion:

$$
\Phi_{\mathrm{PB}} = \pm 2\alpha
$$

where $\alpha$ is the spatial in-plane rotation angle of the nanofin. This phase is purely geometric, dispersionless, and strictly determined by orientation.

---

## 4. Metalens vs. Conventional Refractive & Diffractive Optics

| Feature | Conventional Refractive Lens | Diffractive Lens (Fresnel / DOE) | Metalens (Metasurface) |
| :--- | :--- | :--- | :--- |
| **Thickness** | Millimeters to Centimeters | Micrometers to Millimeters | Sub-micrometer ($\sim \lambda_0$) |
| **Phase Mechanism** | Continuous bulk optical path $n \cdot d(r)$ | Multi-level surface relief ($2\pi$ steps) | Subwavelength local scattering & waveguide modes |
| **Subwavelength Resolution** | Limited by bulk aberration | Grating shadowing / high-order noise | True subwavelength sampling ($U < \lambda$) |
| **Multifunctionality** | Single optical function | Limited polarization control | Polarization, phase, and dispersion multiplexing |
| **Fabrication** | Diamond turning, glass polishing, molding | Photolithography, gray-scale etching | CMOS-compatible deep-UV (DUV), Nanoimprint (NIL), E-beam |
| **System Footprint** | Bulky multi-element stacks | Compact but prone to scatter | Flat, stackable wafer-scale optics |

---

## 5. Key Advantages & Technological Promise

1. **Ultra-Compact & Flat Architecture**: Eliminates heavy, multi-element spherical lens stacks (e.g., in smartphone cameras and AR/VR headsets) with single or double flat metasurface layers.
2. **CMOS Foundry Scalability**: Metalenses can be manufactured using standard semiconductor manufacturing lines (DUV lithography, reactive ion etching, and nanoimprint lithography), enabling monolithic integration directly on top of CMOS image sensors.
3. **Polarization & Phase Multiplexing**: A single metalens can perform polarization beam splitting, chiral imaging, and multi-focal focusing simultaneously without additional optical filters.
4. **Diffraction-Limited High Numerical Aperture (NA)**: Capable of achieving high numerical apertures ($\mathrm{NA} > 0.8$) without the severe off-axis spherical aberrations of single-element bulk spherical lenses.

> **Core Takeaway**: A metalens replaces bulky curved geometric contours with flat, lithographically defined subwavelength nanostructures that manipulate light at the boundary, transforming modern optical design.

---

## References

[1] Yu, N., Genevet, P., Kats, M. A., Aieta, F., Tetienne, J. P., Capasso, F., & Gaburro, Z. (2011). Light propagation with phase discontinuities: generalized laws of reflection and refraction. *Science*, 334(6054), 333–337. [https://doi.org/10.1126/science.1210713](https://doi.org/10.1126/science.1210713)

[2] Khorasaninejad, M., Chen, W. T., Devlin, R. C., Oh, J., Zhu, A. Y., & Capasso, F. (2016). Metalenses at visible wavelengths: Diffraction-limited focusing and subwavelength resolution imaging. *Science*, 352(6290), 1190–1194. [https://doi.org/10.1126/science.aaf1110](https://doi.org/10.1126/science.aaf1110)

[3] Chen, W. T., Zhu, A. Y., Sanjeev, V., Khorasaninejad, M., Shi, Z., Lee, E., & Capasso, F. (2018). A broadband achromatic metalens for focusing and imaging in the visible including the white-light spectrum. *Nature Nanotechnology*, 13(3), 220–226. [https://doi.org/10.1038/s41565-017-0034-6](https://doi.org/10.1038/s41565-017-0034-6)

[4] Arbabi, A., Horie, Y., Ball, A. J., Bagheri, M., & Faraon, A. (2015). Subwavelength-thick lenses with high numerical apertures and large efficiency based on high-contrast transmitarrays. *Nature Communications*, 6, 7069. [https://doi.org/10.1038/ncomms8069](https://doi.org/10.1038/ncomms8069)

[5] Banerji, S., Meem, M., Majumder, A., Vasquez, F. G., Sensale-Rodriguez, B., & Menon, R. (2019). Imaging with flat optics: metalenses or diffractive lenses? *Optica*, 6(6), 805–810. [https://doi.org/10.1364/OPTICA.6.000805](https://doi.org/10.1364/OPTICA.6.000805)

[6] Capasso, F. (2018). The future and promise of flat optics: a personal perspective. *Nanophotonics*, 7(6), 953–957. [https://doi.org/10.1515/nanoph-2018-0004](https://doi.org/10.1515/nanoph-2018-0004)
