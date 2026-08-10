---
title: "Geometric Phase"
layout: single
permalink: /metaoptics/metalenses/geometric-phase/
author_profile: false
sidebar:
  nav: "metalenses"
---

<!-- Content will be added later. -->
---

# Geometric Phase

The **geometric phase**, also known as the **Pancharatnam–Berry (PB) phase**, provides another way of controlling the phase of light with a metasurface.

Unlike the propagation phase, where the phase accumulated by light depends primarily on the optical path length, or the resonant phase, where the phase response is strongly associated with resonances of the meta-atom, the geometric phase is controlled by the **orientation of an anisotropic meta-atom**.

This gives us a remarkably simple relationship:

$$
\boxed{\Phi_{\mathrm{PB}}=\pm 2\alpha}
$$

where $\alpha$ is the rotation angle of the meta-atom.

The important point is that the phase is controlled by **geometry in polarization space**, rather than by changing the physical propagation distance through the structure.

---

## 1. The Basic Idea

Consider an anisotropic dielectric nanostructure, such as a rectangular nanofin.

Unlike a circular nanopillar, a nanofin has different optical responses along its two principal axes. We can therefore describe it as a tiny wave plate.

For example, the nanofin may be designed to behave approximately as a **half-wave plate**.

If the nanofin is aligned along the $x$-axis, it has some fixed polarization response.

Now rotate the nanofin by an angle $\alpha$.

The remarkable result is that the phase of the **cross-polarized component** of the transmitted light changes by

$$
\boxed{\Phi_{\mathrm{PB}}=2\alpha}.
$$

Thus, rotating the same meta-atom allows us to continuously control the optical phase.

For a complete rotation over the relevant orientation range,

$$
0\leq\alpha<\pi,
$$

the geometric phase covers

$$
0\leq\Phi_{\mathrm{PB}}<2\pi.
$$

Therefore, simply rotating the nanofins gives us the full $2\pi$ phase range required to construct a metalens.

---

## 2. Why Does the Phase Become $2\alpha$?

The origin of the factor of two is easiest to understand using circular polarization.

Let the incident field be circularly polarized. The two circular polarization states can be written as

$$
\mathbf{e}_{\sigma}
=
\frac{1}{\sqrt{2}}
\left(
\hat{\mathbf{x}}
+
i\sigma\hat{\mathbf{y}}
\right),
$$

where

$$
\sigma=\pm1
$$

represents the two opposite helicities.

An anisotropic half-wave-plate-like meta-atom changes the polarization state of the incident light.

For the converted, or **cross-polarized**, component, rotating the optical axis of the meta-atom by $\alpha$ produces a phase factor

$$
e^{i2\sigma\alpha}.
$$

Therefore,

$$
\boxed{
\mathbf{E}_{\mathrm{cross}}
\propto
e^{i2\sigma\alpha}
}
$$

and hence

$$
\boxed{
\Phi_{\mathrm{PB}}=2\sigma\alpha
}
$$

or equivalently,

$$
\boxed{
\Phi_{\mathrm{PB}}=\pm2\alpha.
}
$$

The sign depends on the handedness of the incident circular polarization and on the convention used to define the polarization states.

This is the fundamental mathematical origin of geometric-phase metasurfaces.

---

## 3. Physical Picture

It is useful to compare the three phase-control mechanisms we have discussed.

### Propagation phase

The phase is controlled by the optical path length:

$$
\Phi_{\mathrm{prop}}
\approx
\frac{2\pi}{\lambda}
n_{\mathrm{eff}}H.
$$

The geometry changes the effective refractive index or propagation distance experienced by the wave.

### Resonant phase

The phase changes because the meta-atom supports resonant electromagnetic modes.

The phase response therefore depends strongly on the resonance condition and is generally accompanied by changes in transmission amplitude.

### Geometric phase

The phase is controlled primarily by the **orientation** of the anisotropic meta-atom:

$$
\boxed{
\Phi_{\mathrm{PB}}=\pm2\alpha.
}
$$

This distinction is important.

In the geometric-phase approach, we can keep the nanofin dimensions fixed and change only its orientation to obtain different phase values.

---

## 4. A Rotated Nanofin as a Wave Plate

A dielectric nanofin can be understood as a nanoscale birefringent element.

Suppose its two principal axes are characterized by different effective refractive indices,

$$
n_x\neq n_y.
$$

As light propagates through the nanofin, the two orthogonal components accumulate different phases:

$$
\phi_x=k_0n_xH,
$$

and

$$
\phi_y=k_0n_yH.
$$

The phase retardation is therefore

$$
\Delta\phi
=
\phi_x-\phi_y
=
k_0(n_x-n_y)H.
$$

For a half-wave plate, we want approximately

$$
\boxed{\Delta\phi=\pi.}
$$

Under this condition, the nanofin efficiently converts one circular polarization state into the opposite circular polarization state.

The physical dimensions of the nanofin are therefore chosen to produce the required retardance, while its **rotation angle $\alpha$** determines the geometric phase.

This separation is one of the key ideas behind PB-phase metasurfaces:

> **The nanofin dimensions determine the polarization conversion efficiency, while its orientation determines the geometric phase.**

---

## 5. Geometric Phase and Circular Polarization

The geometric phase is inherently connected to polarization.

Suppose left-circularly polarized light is incident on the metasurface:

$$
\mathrm{LCP}
\rightarrow
\mathrm{meta\text{-}atom}
\rightarrow
\mathrm{RCP}.
$$

The converted right-circularly polarized component acquires a phase

$$
\Phi_{\mathrm{PB}}=+2\alpha
$$

for one convention.

For the opposite incident handedness,

$$
\mathrm{RCP}
\rightarrow
\mathrm{meta\text{-}atom}
\rightarrow
\mathrm{LCP},
$$

the phase has the opposite sign:

$$
\Phi_{\mathrm{PB}}=-2\alpha.
$$

Thus,

$$
\boxed{
\Phi_{\mathrm{PB}}=2\sigma\alpha
}
$$

where

$$
\sigma=\pm1
$$

represents the helicity of the incident circular polarization.

This helicity dependence is a defining characteristic of PB-phase metasurfaces.

---

## 6. Designing a Geometric-Phase Metalens

Now we can use the geometric phase to construct a metalens.

Suppose the desired metalens phase profile is

$$
\Phi_{\mathrm{lens}}(x,y)
=
-\frac{2\pi}{\lambda}
\left[
\sqrt{x^2+y^2+f^2}-f
\right].
$$

This is the phase profile required to transform an incident plane wave into a converging spherical wave focused at the focal distance $f$.

For a PB-phase metalens, we need

$$
\Phi_{\mathrm{PB}}(x,y)
=
2\sigma\alpha(x,y)
$$

for a chosen circular-polarization convention.

Therefore, the required orientation of every nanofin is

$$
\boxed{
\alpha(x,y)
=
\frac{\Phi_{\mathrm{lens}}(x,y)}
{2\sigma}.
}
$$

Because phase is defined modulo $2\pi$, we can write the orientation more generally as

$$
\boxed{
\alpha(x,y)
=
\frac{1}{2\sigma}
\left[
\Phi_{\mathrm{lens}}(x,y)
\bmod 2\pi
\right].
}
$$

For $\sigma=+1$, this reduces to

$$
\alpha(x,y)
=
\frac{1}{2}
\left[
\Phi_{\mathrm{lens}}(x,y)
\bmod 2\pi
\right].
$$

The continuous phase profile of the metalens has therefore been converted into a spatial distribution of nanofin orientations.

This is the central design principle of a geometric-phase metalens.

---

## 7. An Example

Consider a one-dimensional cross-section of a PB-phase metalens.

At the center,

$$
x=0,
$$

the required phase can be chosen as

$$
\Phi(0)=0.
$$

Therefore,

$$
\alpha(0)=0.
$$

At another position $x_1$, suppose the required phase is

$$
\Phi(x_1)=\frac{\pi}{2}.
$$

Then

$$
\alpha(x_1)
=
\frac{1}{2}
\left(
\frac{\pi}{2}
\right)
=
\frac{\pi}{4}.
$$

Similarly, if

$$
\Phi(x_2)=\pi,
$$

then

$$
\alpha(x_2)
=
\frac{\pi}{2}.
$$

Thus, the desired phase profile is encoded into the orientation of the nanofins:

$$
\boxed{
\Phi(x)
\quad\longrightarrow\quad
\alpha(x)=\frac{\Phi(x)}{2}.
}
$$

The metasurface does not need a different nanofin geometry for every phase value. Instead, the same basic nanofin can be **rotated**.

---

## 8. Why Is Geometric Phase Broadband?

One of the major advantages of geometric phase is that

$$
\Phi_{\mathrm{PB}}=\pm2\alpha
$$

does not explicitly contain the wavelength $\lambda$.

This is fundamentally different from propagation phase:

$$
\Phi_{\mathrm{prop}}
\sim
\frac{2\pi}{\lambda}
n_{\mathrm{eff}}H.
$$

The propagation phase therefore changes when the wavelength changes.

The geometric phase, in contrast, is determined by the orientation angle $\alpha$.

This makes PB-phase metasurfaces attractive for **broadband wavefront control**.

However, there is an important qualification.

The phase relation itself is wavelength-independent, but the **conversion efficiency is not necessarily wavelength-independent**.

The nanofin must behave approximately as a half-wave plate over the desired wavelength range. Since the phase retardation

$$
\Delta\phi
=
k_0(n_x-n_y)H
$$

depends on wavelength and material dispersion, maintaining

$$
\Delta\phi\approx\pi
$$

over a broad bandwidth can be difficult.

Therefore:

> **Geometric phase is intrinsically achromatic as a phase relation, but a practical PB metasurface is not automatically achromatic.**

This distinction becomes particularly important when designing broadband metalenses.

---

## 9. The Polarization Trade-Off

The major limitation of the geometric-phase approach is its dependence on polarization.

A conventional dielectric metalens based on circularly symmetric nanopillars can operate with both linear polarization states without changing its response.

A PB-phase metalens is different.

It relies on an anisotropic structure and polarization conversion.

For an ideal half-wave plate,

$$
\mathrm{LCP}
\rightarrow
\mathrm{RCP}
$$

or

$$
\mathrm{RCP}
\rightarrow
\mathrm{LCP}.
$$

The desired phase is carried by the cross-polarized component.

Any remaining co-polarized light does not acquire the desired PB phase and therefore contributes unwanted background or noise.

Consequently, the conversion efficiency is a critical design parameter.

---

## 10. Conversion Efficiency

The total transmitted field can be separated into co-polarized and cross-polarized components:

$$
\mathbf{E}_{\mathrm{trans}}
=
\mathbf{E}_{\mathrm{co}}
+
\mathbf{E}_{\mathrm{cross}}.
$$

The useful PB-phase signal is the cross-polarized component:

$$
\mathbf{E}_{\mathrm{cross}}
\propto
e^{\pm i2\alpha}.
$$

For an efficient PB metasurface, we want

$$
\left|
E_{\mathrm{cross}}
\right|
\gg
\left|
E_{\mathrm{co}}
\right|.
$$

Ideally,

$$
\left|
E_{\mathrm{cross}}
\right|^2
\rightarrow
\left|
E_{\mathrm{in}}
\right|^2.
$$

This requires the meta-atom to provide approximately $\pi$ phase retardation while maintaining low reflection and absorption.

Therefore, geometric-phase design has two separate requirements:

1. **Phase control:** rotate the nanofin to obtain the required $\Phi_{\mathrm{PB}}$.
2. **Efficient polarization conversion:** design the nanofin dimensions so that it behaves as an effective half-wave plate.

---

## 11. Geometric Phase vs. Propagation and Resonant Phase

The three mechanisms can now be compared directly.

| Property | Propagation Phase | Resonant Phase | Geometric Phase |
| --- | --- | --- | --- |
| Main control parameter | $n_{\mathrm{eff}}H$ | Resonance/geometry | Orientation $\alpha$ |
| Basic relation | $\Phi\sim k_0n_{\mathrm{eff}}H$ | Geometry-dependent | $\Phi=\pm2\alpha$ |
| Polarization | Can be polarization-independent | Often polarization-dependent | Requires polarization conversion |
| Spectral response | Dispersive | Strongly dispersive | Phase relation is broadband |
| Amplitude-phase coupling | Moderate | Strong near resonance | Can be separated through wave-plate design |
| Full $2\pi$ phase | Possible | Possible | Yes |
| Main advantage | Simple dielectric implementation | Large phase control and high efficiency | Simple orientation-based phase control |
| Main limitation | Dispersion | Resonance-amplitude coupling | Polarization dependence |

The important conceptual difference is therefore:

$$
\boxed{
\text{Propagation: optical path}
}
$$

$$
\boxed{
\text{Resonant: electromagnetic resonance}
}
$$

$$
\boxed{
\text{Geometric: meta-atom orientation}
}
$$

---

## 12. Geometric Phase in Modern Metasurface Design

Geometric phase does not have to be used alone.

A metasurface can combine geometric and propagation or resonant phase mechanisms to gain additional degrees of freedom.

For example, the **dimensions** of an anisotropic nanofin can be used to control its transmission amplitude and polarization conversion, while its **orientation** controls the PB phase.

This creates a useful separation between different optical properties.

More advanced metasurfaces can therefore combine multiple phase mechanisms to independently manipulate:

- phase,
- amplitude,
- polarization,
- wavelength,
- and propagation direction.

Such combinations are particularly important for multifunctional and broadband metaoptical systems.

---

## 13. The Key Idea

The geometric phase provides a completely different way of thinking about phase control.

In a conventional optical element, we usually think of phase as something that accumulates because light travels through a material:

$$
\text{distance}
\rightarrow
\text{optical path}
\rightarrow
\text{phase}.
$$

For a geometric-phase metasurface, the picture is different:

$$
\text{orientation}
\rightarrow
\text{polarization evolution}
\rightarrow
\text{geometric phase}.
$$

The phase does not primarily come from making the structure physically longer or tuning a resonance. Instead, it emerges from the geometrical evolution of the polarization state.

For a rotated anisotropic meta-atom,

$$
\boxed{
\Phi_{\mathrm{PB}}=\pm2\alpha.
}
$$

Therefore, a desired phase profile can be directly translated into an orientation profile:

$$
\boxed{
\Phi(x,y)
\rightarrow
\alpha(x,y)=\frac{\Phi(x,y)}{2}.
}
$$

This simple relationship is what makes geometric-phase metasurfaces so powerful.

---

## 14. From Phase Profile to Nanofin Orientation

We can now summarize the complete design procedure.

First, determine the required metalens phase:

$$
\Phi_{\mathrm{lens}}(x,y)
=
-\frac{2\pi}{\lambda}
\left[
\sqrt{x^2+y^2+f^2}-f
\right].
$$

Next, convert this phase into an orientation:

$$
\alpha(x,y)
=
\frac{1}{2}
\Phi_{\mathrm{lens}}(x,y)
$$

for the $\sigma=+1$ convention.

More generally,

$$
\alpha(x,y)
=
\frac{\Phi_{\mathrm{lens}}(x,y)}
{2\sigma}.
$$

Finally, place an anisotropic half-wave-plate-like nanofin at every lattice position with the corresponding orientation $\alpha(x,y)$.

Thus,

$$
\boxed{
\text{Desired wavefront}
\rightarrow
\text{phase profile}
\rightarrow
\text{nanofin orientation}
\rightarrow
\text{geometric phase}.
}
$$

This is the essence of a **geometric-phase metalens**.

---

## Conclusion

The Pancharatnam–Berry phase gives metasurfaces another route to optical phase control.

Instead of controlling phase through propagation distance or resonant response, we control it through the **orientation of anisotropic meta-atoms**.

For circularly polarized incident light, an ideal half-wave-plate-like meta-atom produces a cross-polarized component whose phase is

$$
\boxed{
\Phi_{\mathrm{PB}}=\pm2\alpha.
}
$$

This allows a complete $2\pi$ phase range using only a $\pi$ rotation of the nanofin.

The major advantages are the simplicity of phase encoding and the wavelength-independent form of the geometric phase relation. The main limitation is that efficient operation requires polarization conversion, and maintaining high conversion efficiency over a broad bandwidth requires careful meta-atom design.

With propagation phase, resonant phase, and geometric phase, we now have three fundamental ways in which dielectric meta-atoms can provide the local phase needed to construct a metalens.

The next question is no longer **how to obtain a phase shift**, but rather:

> **How do we choose and arrange millions of meta-atoms so that the entire metasurface produces the desired optical function?**