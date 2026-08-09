---
title: "Resonant Phase"
layout: single
permalink: /metaoptics/metalenses/resonant-phase/
author_profile: false
sidebar:
  nav: "metalenses"
---

<!-- Content will be added later. -->
---

title: "Resonant Phase"
layout: single
permalink: /metaoptics/metalenses/resonant-phase/
author_profile: false
sidebar:
nav: "metalenses"
-----------------

# Resonant Phase

In the previous section, we discussed the **propagation phase**. The basic idea was simple: a dielectric nanopillar behaves approximately like a short waveguide, and the phase accumulated by light depends on the effective refractive index and the propagation length,

$$
\Phi \approx k_0 n_{\mathrm{eff}} H
===================================

\frac{2\pi}{\lambda}n_{\mathrm{eff}}H.
$$

By changing the geometry of the nanopillar, we can change its effective index and therefore control the phase of the transmitted light.

However, this picture is not the whole story.

A dielectric nanopillar is not simply a piece of material through which light propagates. Because its dimensions are comparable to the wavelength, it can also support **electromagnetic resonances**. These resonances strongly modify how the structure interacts with light.

This gives us another way of understanding phase control:

> **The phase of transmitted light can be controlled through the resonant response of a subwavelength meta-atom.**

This is commonly referred to as **resonant phase**.

---

## 1. What is resonant phase?

A resonator responds particularly strongly when the frequency of the incident light approaches one of its natural resonant frequencies.

For a meta-atom, these resonances arise from the electromagnetic modes supported by the nanostructure. In high-index dielectric structures, they can include **Mie-type resonances**, **Fabry–Pérot-like resonances**, and other guided or leaky modes.

Near such a resonance, both the amplitude and phase of the transmitted field can change rapidly.

We can describe the transmitted field using a complex transmission coefficient,

$$
t(\omega)=|t(\omega)|e^{i\Phi(\omega)},
$$

where

* $|t|$ is the transmission amplitude,
* $\Phi$ is the transmission phase,
* $\omega$ is the angular frequency.

The important point is that the phase $\Phi$ is not necessarily determined only by the physical propagation distance inside the material.

Instead, the **resonant electromagnetic response of the meta-atom** contributes strongly to the phase.

---

# 2. A nanopillar as a resonator

Consider a high-index dielectric nanopillar placed on a substrate.

A simplified geometry can be described by

* diameter $D$,
* height $H$,
* lattice period $P$,
* refractive index $n$.

For example, TiO$_2$, Si, GaN, or SiN can be used depending on the operating wavelength.

The nanopillar confines the electromagnetic field because its refractive index is substantially higher than its surroundings.

As a result, the pillar can support electromagnetic modes.

A useful conceptual picture is to think of the nanopillar as a **truncated optical cavity**.

Light enters the structure, interacts with the confined electromagnetic modes, and eventually leaves the pillar. The interference between the incident field, internally reflected fields, and resonant modes determines the complex transmitted field.

Therefore,

$$
t = t(D,H,P,\lambda),
$$

and consequently,

$$
\Phi = \arg[t(D,H,P,\lambda)].
$$

Changing the geometry changes the resonant modes and therefore changes the transmitted phase.

---

# 3. Where does the resonance come from?

There are several ways to understand the resonance of a dielectric nanopillar.

## 3.1 Fabry–Pérot-like resonance

Along the vertical direction, the nanopillar can behave approximately like a short optical cavity.

Consider a pillar of height $H$. A wave propagating through the pillar accumulates a phase approximately given by

$$
\delta = k_0 n_{\mathrm{eff}}H,
$$

where

$$
k_0=\frac{2\pi}{\lambda}.
$$

Because the top and bottom interfaces partially reflect light, the wave can undergo multiple internal reflections.

Constructive interference occurs when the round-trip phase approximately satisfies

$$
2k_0n_{\mathrm{eff}}H \approx 2m\pi,
$$

where $m$ is an integer.

This can produce Fabry–Pérot-like resonances.

Thus, the nanopillar can behave somewhat like a miniature optical cavity.

---

## 3.2 Mie-type resonances

The lateral dimensions of the nanopillar also matter.

When the diameter becomes comparable to the wavelength inside the high-index material, the incident electromagnetic field can excite electric- and magnetic-type resonant modes.

These are commonly described as **Mie-type resonances**.

The exact modal structure depends on

$$
D,\quad H,\quad n,\quad \lambda,
$$

and on the surrounding environment.

This is one reason why changing the diameter of a dielectric nanopillar can dramatically modify its optical response.

---

# 4. Geometry controls the resonance

This is the key idea behind resonant-phase metasurfaces.

Suppose we keep the height and lattice period fixed:

$$
H=\text{constant},
\qquad
P=\text{constant},
$$

and vary only the pillar diameter $D$.

Changing $D$ changes the electromagnetic mode supported by the pillar.

Therefore,

$$
D
\longrightarrow
\text{resonant mode}
\longrightarrow
t(D)
\longrightarrow
\Phi(D).
$$

In other words, the geometry becomes a control parameter for the phase.

A library of simulated nanopillars can therefore provide a mapping such as

$$
D
\rightarrow
|t(D)|
$$

and

$$
D
\rightarrow
\Phi(D).
$$

The metalens designer can then select the appropriate diameter at every position on the lens.

---

# 5. Phase changes rapidly near resonance

One of the defining characteristics of a resonance is that the phase can change rapidly with frequency.

A simple resonant response can be represented conceptually by

$$
t(\omega)
\sim
\frac{1}{\omega-\omega_0+i\gamma},
$$

where

* $\omega_0$ is the resonance frequency,
* $\gamma$ describes the resonance linewidth.

The exact expression for a real nanopillar is more complicated, but this simple model captures an important physical idea.

Near

$$
\omega\approx\omega_0,
$$

the electromagnetic response changes rapidly.

Consequently, the phase can experience a large variation over a relatively small wavelength range.

This is why resonant phase provides a powerful mechanism for manipulating light.

---

# 6. Phase and amplitude are coupled

There is an important consequence of using resonance for phase control.

We write the transmission coefficient as

$$
t=|t|e^{i\Phi}.
$$

Ideally, a metalens requires us to control $\Phi$ while keeping $|t|$ approximately constant.

However, near a resonance, the amplitude and phase are generally **not independent**.

As the phase changes rapidly, the transmission amplitude may also vary significantly.

Conceptually,

$$
\boxed{
\text{resonant phase control}
\quad\Longleftrightarrow\quad
\text{amplitude response}
}
$$

This is one of the main differences between an ideal phase-only element and a real resonant meta-atom.

For example, a particular nanopillar may provide a phase close to the required value but have relatively low transmission because it lies close to a resonance.

Therefore, designing a useful meta-atom library requires more than simply obtaining a $2\pi$ phase range.

We also want the transmission amplitude to remain high and reasonably uniform.

---

# 7. Achieving a full $2\pi$ phase range

For a metalens, the target phase profile is continuous:

$$
\Phi_{\mathrm{lens}}(x,y).
$$

But the physical metasurface consists of discrete meta-atoms.

Therefore, we need a collection of structures capable of providing approximately

$$
0\leq\Phi<2\pi.
$$

A typical resonant-phase library might look conceptually like

$$
D_1\rightarrow\Phi_1,
\qquad
D_2\rightarrow\Phi_2,
\qquad
D_3\rightarrow\Phi_3,
\qquad
\ldots
$$

with the diameters chosen such that

$$
\Phi(D)
$$

covers the required phase range.

At the same time, we want

$$
|t(D)|\approx 1
$$

throughout the usable phase range.

Thus, the ideal library satisfies approximately

$$
\boxed{
\Phi(D)\rightarrow 2\pi
\quad\text{while}\quad
|t(D)|\rightarrow \text{high and uniform}.
}
$$

This is why meta-atom design is fundamentally a **phase–amplitude engineering problem**.

---

# 8. Resonant phase and propagation phase

It is useful to distinguish resonant phase from the propagation-phase picture.

In the propagation-phase picture, we write approximately

$$
\Phi_{\mathrm{prop}}
\approx
k_0n_{\mathrm{eff}}H.
$$

The phase is interpreted mainly as the phase accumulated while light propagates through the nanopillar.

In the resonant picture, we focus instead on the electromagnetic modes supported by the structure:

$$
\Phi_{\mathrm{res}}
===================

\arg[t(D,H,P,\lambda)].
$$

Here the phase is determined by the complete scattering response of the resonator.

The two pictures are not necessarily mutually exclusive.

In fact, a real dielectric nanopillar can simultaneously behave like a truncated waveguide **and** support resonant modes.

The distinction is therefore often a matter of which physical picture is most useful for understanding the device.

---

## Propagation picture

The propagation-phase picture asks:

> **How much phase does the field accumulate while propagating through the structure?**

A simplified expression is

$$
\Phi\approx k_0n_{\mathrm{eff}}H.
$$

The effective index plays the central role.

---

## Resonant picture

The resonant picture asks:

> **How does the electromagnetic mode structure of the meta-atom modify the transmitted field?**

The answer is encoded in

$$
t(\omega)=|t|e^{i\Phi}.
$$

Here the resonance position, linewidth, and coupling determine the amplitude and phase response.

---

# 9. Why changing the diameter changes the phase

Now we can understand an important design principle.

Suppose the pillar height $H$ is fixed.

When the diameter $D$ increases, the electromagnetic field experiences a different transverse confinement.

This changes the supported modes and their effective propagation constants.

Consequently,

$$
D
\rightarrow
n_{\mathrm{eff}}
\rightarrow
\beta
\rightarrow
\Phi,
$$

where

$$
\beta=k_0n_{\mathrm{eff}}
$$

is the propagation constant.

At the same time, changing $D$ also shifts the resonant frequencies of the structure.

Therefore, the phase response can change because of both the **waveguide-like propagation** and the **resonant modal response**.

This is why the phase response obtained from a full-wave simulation is generally more complicated than the simple expression

$$
\Phi=k_0n_{\mathrm{eff}}H.
$$

The effective-index model provides useful intuition, but the actual phase response is determined by the complete electromagnetic scattering problem.

---

# 10. Resonant phase in a metalens

Now consider a metalens.

The desired lens phase is

$$
\Phi_{\mathrm{lens}}(r)
=======================

-\frac{2\pi}{\lambda}
\left(
\sqrt{r^2+f^2}-f
\right),
$$

where

* $r$ is the radial distance from the optical axis,
* $f$ is the focal length,
* $\lambda$ is the operating wavelength.

At every radial position $r$, we need a meta-atom that provides approximately

$$
\Phi_{\mathrm{meta}}(D)
\approx
\Phi_{\mathrm{lens}}(r).
$$

Therefore, the design process becomes

$$
\boxed{
\Phi_{\mathrm{lens}}(r)
\rightarrow
\text{required phase}
\rightarrow
D(r)
\rightarrow
\text{meta-atom}.
}
$$

The diameter of each nanopillar is selected from the resonant-phase library.

The resulting structure is a spatial arrangement of resonators whose collective transmission phase approximates the desired lens phase.

---

# 11. From phase library to metalens

The practical workflow is therefore:

### Step 1 — Choose the material

For example,

$$
\mathrm{TiO_2},\quad
\mathrm{GaN},\quad
\mathrm{SiN},\quad
\mathrm{Si}.
$$

The material must provide an appropriate refractive index and sufficiently low absorption at the operating wavelength.

### Step 2 — Define the meta-atom geometry

For a cylindrical nanopillar, define

$$
D,\quad H,\quad P.
$$

Usually, $H$ and $P$ are initially fixed while $D$ is swept.

### Step 3 — Simulate the unit cell

Using FDTD or RCWA, calculate the complex transmission coefficient,

$$
t(D)=|t(D)|e^{i\Phi(D)}.
$$

### Step 4 — Build the phase library

Plot

$$
\Phi(D)
$$

and

$$
|t(D)|.
$$

We search for a region where the phase covers approximately $2\pi$ while the transmission remains high.

### Step 5 — Calculate the target lens phase

For a focusing metalens,

$$
\Phi_{\mathrm{lens}}(r)
=======================

-\frac{2\pi}{\lambda}
\left(
\sqrt{r^2+f^2}-f
\right).
$$

### Step 6 — Map phase to geometry

For each position $r$, choose the diameter satisfying

$$
\Phi(D)\approx\Phi_{\mathrm{lens}}(r).
$$

This produces the spatial diameter profile

$$
D=D(r).
$$

### Step 7 — Assemble the metasurface

The final metalens consists of millions of subwavelength resonators, each selected to provide the required local phase.

---

# 12. Why resonant phase is powerful

The major advantage of resonant phase is that a very thin structure can provide a large optical phase response.

A conventional refractive element relies on physical propagation through a substantial thickness of material.

A metasurface instead uses the electromagnetic response of nanoscale structures.

The resulting device can therefore be extremely thin while still producing a large phase modulation.

High-index dielectric resonators are particularly useful because they can provide strong electromagnetic confinement while avoiding the severe absorption losses associated with many plasmonic metals.

Under suitable conditions, dielectric metasurfaces can achieve very high transmission efficiencies.

---

# 13. But resonance comes with a price

Resonant phase control is not perfect.

The strongest limitation is **dispersion**.

Because the resonance depends on wavelength,

$$
\omega_0=\omega_0(D,H,P),
$$

the phase also depends strongly on wavelength:

$$
\Phi=\Phi(\lambda).
$$

Therefore, a meta-atom designed to provide a particular phase at one wavelength may provide a very different phase at another wavelength.

This produces chromatic dispersion.

For a conventional refractive lens, chromatic aberration already exists because the refractive index depends on wavelength.

For a resonant metasurface, the spectral dependence of the resonant modes can make the phase dispersion particularly strong.

Thus,

$$
\boxed{
\text{large resonant phase response}
\quad\Rightarrow\quad
\text{strong spectral dependence}.
}
$$

This is one of the reasons why designing broadband or achromatic metalenses is challenging.

---

# 14. Resonance, bandwidth, and efficiency

A narrow resonance can provide a very rapid phase variation.

But a narrow resonance also means that the response changes significantly when the wavelength moves away from the design wavelength.

Conceptually,

$$
\text{strong resonance}
\rightarrow
\text{large phase variation}
\rightarrow
\text{high dispersion}.
$$

On the other hand, a broader response may provide greater bandwidth but usually gives less dramatic resonant behavior.

Therefore, meta-atom design involves balancing

* phase range,
* transmission efficiency,
* bandwidth,
* dispersion,
* polarization response,
* fabrication constraints.

There is no universally optimal resonator.

The appropriate design depends on the application.

---

# 15. Resonant phase and local phase approximation

In a metalens, we usually design meta-atoms individually and then place them next to one another.

This relies on the **local phase approximation (LPA)**.

Under LPA, each meta-atom is assumed to respond approximately as it did in the periodic unit-cell simulation.

That is,

$$
t(x,y)
\approx
t_{\mathrm{library}}(D(x,y)).
$$

However, neighboring resonators can interact through their electromagnetic near fields.

If two neighboring pillars have very different geometries, their resonances can interact.

Then,

$$
t_{\mathrm{actual}}
\neq
t_{\mathrm{isolated/library}}.
$$

This becomes especially important for

* high-NA metalenses,
* rapidly varying phase profiles,
* abrupt phase transitions,
* strongly coupled resonators.

Therefore, the resonant-phase library is an approximation to the final device response rather than a complete description of the entire metasurface.

---

# 16. The role of FDTD and RCWA

Because resonant phase depends on the complete electromagnetic response of the meta-atom, full-wave simulation is particularly important.

For a unit cell, we can use FDTD or RCWA to calculate

$$
t(D,\lambda).
$$

From this,

$$
\Phi(D,\lambda)=\arg[t(D,\lambda)]
$$

and

$$
T(D,\lambda)=|t(D,\lambda)|^2.
$$

The resulting data form the **meta-atom library**.

This library is then used to construct the much larger metalens.

Thus, a typical computational workflow is

$$
\boxed{
\text{Full-wave unit-cell simulation}
\rightarrow
\text{phase/amplitude library}
\rightarrow
\text{phase-to-geometry mapping}
\rightarrow
\text{metalens}
}
$$

and finally the complete device can be evaluated using Fourier or angular-spectrum propagation.

---

# 17. Resonant phase is really wavefront engineering

At the beginning of the metalens discussion, the problem was:

> How can a flat surface focus light like a conventional curved lens?

The answer is now becoming clearer.

We do not need to physically curve the optical surface.

Instead, we engineer the phase of the transmitted electromagnetic field.

The resonant meta-atoms act as tiny optical phase shifters.

At each position,

$$
(x,y),
$$

we choose a structure that produces approximately the required phase,

$$
\Phi(x,y).
$$

The collective effect of millions of such resonators creates the desired outgoing wavefront.

For a focusing device, the outgoing wavefront becomes approximately spherical and converges toward the focal point.

---

# 18. The physical picture

It is useful to summarize the entire process as a chain:

$$
\boxed{
\text{Incident light}
\rightarrow
\text{dielectric resonator}
\rightarrow
\text{electromagnetic modes}
\rightarrow
\text{complex transmission}
\rightarrow
\text{phase shift}
}
$$

For a metalens, this happens at every position across the surface:

$$
\boxed{
D(x,y)
\rightarrow
\Phi(x,y)
\rightarrow
\text{desired wavefront}
}
$$

The meta-atoms are therefore not simply miniature pieces of glass.

They are **engineered electromagnetic resonators**.

Their geometry determines which modes they support, how strongly those modes interact with the incident field, and consequently how the transmitted field is modified.

---

# 19. Resonant phase vs. propagation phase

The two concepts can now be summarized as follows.

| Property            | Propagation Phase                    | Resonant Phase                            |
| ------------------- | ------------------------------------ | ----------------------------------------- |
| Main picture        | Wave propagation through a structure | Electromagnetic resonance                 |
| Important parameter | $n_{\mathrm{eff}}H$                  | Resonant modal response                   |
| Phase               | $\Phi\approx k_0n_{\mathrm{eff}}H$   | $\Phi=\arg(t)$                            |
| Geometry dependence | Changes effective index              | Changes modal/resonant response           |
| Amplitude coupling  | Relatively weak in idealized picture | Often strongly coupled                    |
| Dispersion          | Present                              | Often strong near resonance               |
| Bandwidth           | Can be comparatively broad           | Often limited by resonance                |
| Simulation          | Useful full-wave verification        | Full-wave simulation especially important |

The distinction should not be interpreted as two completely independent physical mechanisms.

A real dielectric nanopillar can exhibit both propagation-like and resonant behavior.

The two pictures simply emphasize different aspects of the same electromagnetic interaction.

---

# 20. A useful mental model

A good way to remember resonant phase is to think of a nanopillar as a **tiny optical resonator**.

Its geometry determines its electromagnetic modes.

Those modes determine the complex transmission coefficient.

And the complex transmission coefficient determines the phase:

$$
\boxed{
\text{Geometry}
\rightarrow
\text{Mode}
\rightarrow
t=|t|e^{i\Phi}
\rightarrow
\text{Phase}.
}
$$

Once we have a library of these responses, we can arrange millions of resonators so that their phases collectively reproduce the phase profile of a conventional lens.

That is the central idea behind resonant-phase metalenses.

---

# 21. From resonant phase to the complete metalens

We have now encountered three important ideas:

1. **The conventional lens phase profile** tells us what phase the optical device must produce.
2. **The meta-atom** provides a physical building block capable of modifying the optical field.
3. **Resonant phase** explains how the electromagnetic response of the meta-atom can provide the required phase.

The complete design problem can therefore be written as

$$
\boxed{
\Phi_{\mathrm{lens}}(x,y)
\rightarrow
\Phi_{\mathrm{meta}}(D,H,P,\lambda)
\rightarrow
D(x,y)
}
$$

The first step comes from optics.

The second comes from electromagnetic physics.

The third converts the desired optical function into a physical nanostructure.

This is the bridge between **optical design** and **nanophotonic engineering**.

---

## What comes next?

A resonant-phase meta-atom gives us a powerful way to control the phase, but it also introduces wavelength dependence and phase–amplitude coupling.

This naturally leads to the next question:

> **Can we control the phase without relying primarily on the resonance of the material structure?**

One answer is the **geometric or Pancharatnam–Berry phase**, where the phase is controlled by rotating an anisotropic meta-atom rather than primarily changing its resonant propagation response.

That is the next phase-control mechanism to explore.
