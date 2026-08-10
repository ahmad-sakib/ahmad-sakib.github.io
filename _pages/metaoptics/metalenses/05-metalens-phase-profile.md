---
title: "Metalens Phase Profile"
layout: single
permalink: /metaoptics/metalenses/metalens-phase-profile/
author_profile: false
sidebar:
  nav: "metalenses"
---

# Metalens Phase Profile

In the previous section, we saw that a conventional lens focuses light by introducing a spatially varying phase delay across its aperture.

A metalens follows the same fundamental optical principle, but it does not use a curved piece of glass to produce the required phase profile.

Instead, a metalens is a **flat optical surface composed of subwavelength structures**, called **meta-atoms**, whose optical response can be engineered locally. These meta-atoms introduce abrupt phase shifts to the transmitted or reflected wavefront.

The central question is therefore:

> **What phase profile must a metalens impose on an incident plane wave in order to focus it to a point?**

For a normally incident plane wave focused at a distance $f$, the required phase profile is the well-known **hyperbolic phase profile**.

---

## 1. From a Plane Wave to a Spherical Wave

Consider a plane wave incident normally on a flat metasurface.

Before reaching the metalens, the wavefront is planar:

$$\Phi_{\mathrm{in}}(x,y) = \text{constant}.$$

Now suppose that the metalens is designed to focus the incident light at a point $F$, located at a distance $f$ from the metasurface.

The desired wavefront after the metalens is no longer planar. It must be a **spherical wavefront converging toward the focal point**.

Therefore, the metalens must introduce a position-dependent phase shift:

$$\Phi = \Phi(x,y).$$

Because the system is rotationally symmetric, it is convenient to describe the phase using the radial coordinate

$$r = \sqrt{x^2+y^2}.$$

Thus,

$$\Phi(x,y) = \Phi(r).$$

The problem of metalens design now becomes a simple statement:

$$\text{Plane wave} \quad\longrightarrow\quad \text{spherical converging wave}$$

and the metasurface must provide the phase transformation required to accomplish this.

---

## 2. The Geometry of Focusing

Consider a point on the metalens located at a radial distance $r$ from the optical axis.

The focal point is located a distance $f$ from the center of the metalens.

The distance from this point on the metalens to the focus is

$$L(r) = \sqrt{r^2+f^2}.$$

At the center of the metalens, where $r = 0$,

$$L(0) = f.$$

Therefore, the additional propagation distance associated with the off-axis point is

$$\ell(r) = \sqrt{r^2+f^2} - f.$$

This quantity is the **optical path difference** between the central point and the point located at radial distance $r$.

The important idea is that the phase introduced by the metalens must compensate for this path difference.

An optical path difference ($\mathrm{OPD}$) corresponds to a phase difference

$$\Delta\Phi = k \cdot \mathrm{OPD},$$

where $k$ is the wavenumber in the transmitted medium.

Consequently, the required phase shift has the form

$$\Phi(r) = \pm k \left( \sqrt{r^2+f^2} - f \right).$$

For a **converging metalens**, we choose the negative sign:

$$\Phi(r) = -k \left( \sqrt{r^2+f^2} - f \right)$$

This is the **hyperbolic phase profile** of a metalens.

If the light is transmitted into a medium of refractive index $n_2$, then

$$k = n_2 k_0,$$

where

$$k_0 = \frac{2\pi}{\lambda_0}$$

is the vacuum wavenumber.

Therefore,

$$\Phi(r) = -k_0 n_2 \left( \sqrt{r^2+f^2} - f \right)$$

for the converging case.

---

## 3. Deriving the Profile from Generalized Snell's Law

The same result can be obtained from the generalized law of refraction for a metasurface.

For a metasurface with a radially varying phase profile, the generalized refraction law can be written as

$$\frac{1}{k_0} \frac{d\Phi}{dr} = n_2 \sin\theta_2 - n_1 \sin\theta_1,$$

where:

* $n_1$ is the refractive index of the incident medium,
* $n_2$ is the refractive index of the transmitted medium,
* $\theta_1$ is the incident angle,
* $\theta_2$ is the transmitted angle,
* $k_0 = 2\pi/\lambda_0$.

For a normally incident plane wave,

$$\theta_1 = 0,$$

so

$$\sin\theta_1 = 0.$$

Now consider a ray arriving at the metalens at radial position $r$.

To make this ray reach the focal point, the geometry gives

$$\sin\theta_2 = -\frac{r}{\sqrt{r^2+f^2}}.$$

The negative sign corresponds to the direction in which the transmitted ray bends toward the optical axis.

Substituting these conditions into the generalized refraction law gives

$$\frac{1}{k_0} \frac{d\Phi}{dr} = -n_2 \frac{r}{\sqrt{r^2+f^2}}.$$

Therefore,

$$\frac{d\Phi}{dr} = -k_0 n_2 \frac{r}{\sqrt{r^2+f^2}}.$$

Since

$$k = n_2 k_0,$$

we have

$$\frac{d\Phi}{dr} = -k \frac{r}{\sqrt{r^2+f^2}}.$$

Integrating with respect to $r$,

$$\Phi(r) = -k \sqrt{r^2+f^2} + C.$$

Choosing the reference phase such that

$$\Phi(0) = 0,$$

gives

$$C = kf.$$

Thus,

$$\Phi(r) = -k \left( \sqrt{r^2+f^2} - f \right).$$

The hyperbolic phase profile therefore follows directly from the condition that every normally incident ray must be redirected toward the same focal point.

---

## 4. A Huygens' Principle Interpretation

There is also a more intuitive way to understand the same result.

According to **Huygens' principle**, every point on a wavefront can be considered as a source of secondary wavelets. The propagation of the wave is determined by the envelope of these wavelets.

A metasurface changes this process by introducing a different phase delay at different positions.

In other words, the meta-atoms act as locally controlled sources whose emitted wavelets have different phases.

For a metalens, the phase delays are chosen so that all of these secondary wavelets interfere constructively at the desired focal point.

At the center of the lens, the required additional optical path is zero.

At larger radial positions, the optical path toward the focus becomes longer. The metalens therefore introduces the appropriate phase compensation so that the contributions from different positions arrive at the focus with the required relative phase.

Thus,

$$\text{phase engineering} \rightarrow \text{wavefront engineering} \rightarrow \text{constructive interference at } F$$

This is the wave-optical picture of metalens focusing.

---

## 5. The Phase Gradient Is What Controls the Direction

An important point is often overlooked when looking at the phase profile.

The absolute value of $\Phi(r)$ is not what determines the local direction of propagation.

What matters is the **spatial variation of phase**, or the phase gradient,

$$\frac{d\Phi}{dr}.$$

For the hyperbolic phase profile,

$$\Phi(r) = -k \left( \sqrt{r^2+f^2} - f \right),$$

the gradient is

$$\frac{d\Phi}{dr} = -k \frac{r}{\sqrt{r^2+f^2}}.$$

At the center,

$$r = 0,$$

and therefore

$$\frac{d\Phi}{dr} = 0.$$

This makes sense physically: light traveling along the optical axis does not need to be deflected.

As $r$ increases, the magnitude of the phase gradient increases, and the corresponding ray must be deflected more strongly toward the optical axis.

This is exactly the role played by the generalized Snell's law.

---

## 6. Absolute Phase Does Not Matter

Because optical phase is periodic, two phase values that differ by an integer multiple of $2\pi$ describe the same physical phase state:

$$\Phi \equiv \Phi + 2\pi m, \qquad m \in \mathbb{Z}.$$

More generally, adding a constant phase to the entire metalens does not change its focusing behavior:

$$\Phi'(r) = \Phi(r) + A.$$

The derivative remains unchanged:

$$\frac{d\Phi'}{dr} = \frac{d\Phi}{dr}.$$

Therefore, the phase gradient—and hence the local wave propagation—is unchanged.

This is why the important quantity for the optical function of the metalens is the **relative phase variation across the aperture**, rather than the absolute phase value.

---

## 7. Phase Wrapping

The hyperbolic phase does not remain within a single $2\pi$ interval.

As $r$ increases, the magnitude of the phase continuously increases.

But because

$$\Phi \equiv \Phi + 2\pi m,$$

we can wrap the phase into one interval, for example,

$$0 \leq \Phi < 2\pi.$$

The phase profile then consists of successive $2\pi$-wide zones.

Schematically,

$$\Phi(r) \rightarrow \Phi(r) \bmod 2\pi.$$

This produces a phase profile with discontinuities at the boundaries between successive zones.

The physical meta-atom pattern consequently becomes repetitive in a radial sense. The metalens text describes these as zones in which the phase continuously spans $2\pi$, followed by a phase reset at the next zone.

This phase wrapping is extremely important because a practical meta-atom library generally needs to provide only a **$0$ to $2\pi$ phase range**.

---

## 8. From Phase Profile to Meta-Atom Geometry

Now we reach the most important step in the physical realization of a metalens.

The hyperbolic equation tells us **what phase is required**.

It does not yet tell us **what physical structure should be fabricated**.

To build the metalens, the required phase must be translated into the geometry of individual meta-atoms.

For example, consider dielectric nanopillars.

Changing parameters such as:

* diameter,
* height,
* width,
* length,
* orientation,

can change the optical phase introduced by a meta-atom.

A library of meta-atoms can therefore be generated numerically.

For each geometry, we calculate the complex transmission coefficient

$$t = |t| e^{i\Phi}.$$

The resulting library provides a mapping such as

$$D \longrightarrow \Phi(D),$$

for a particular material, wavelength, height, lattice period, and surrounding environment.

The desired phase profile is then sampled at every position:

$$\Phi_{\mathrm{target}}(r).$$

For each position, we select the meta-atom whose phase is closest to the required value.

Thus,

$$\Phi_{\mathrm{target}}(r) \rightarrow \text{phase library} \rightarrow \text{meta-atom geometry}$$

This is how a mathematical phase function becomes a physical metasurface.

---

## 9. Why There Is No Universal Phase-to-Geometry Equation

It may be tempting to assume that we can simply write an analytical equation such as

$$\Phi = \Phi(D)$$

and directly calculate the nanopillar diameter required at every position.

In general, this is not possible.

The phase response of a meta-atom depends on many parameters, including its:

* material,
* dimensions,
* height,
* refractive index,
* absorption,
* lattice period,
* operating wavelength,
* surrounding medium.

Therefore, there is no single universal analytical relationship between meta-atom geometry and phase shift.

Instead, the phase response is normally obtained through numerical electromagnetic simulations such as **finite-difference time-domain (FDTD)** or **rigorous coupled-wave analysis (RCWA)**.

This is one of the reasons why metalens design is fundamentally a computational problem.

---

## 10. The Hyperbolic Profile and the Conventional Lens

The hyperbolic metalens phase profile may look very different from the quadratic phase profile of a conventional thin lens.

The two, however, are closely related.

The metalens phase profile is

$$\Phi(r) = -k \left( \sqrt{r^2+f^2} - f \right).$$

In the paraxial regime,

$$r \ll f,$$

we can use

$$\sqrt{r^2+f^2} \approx f + \frac{r^2}{2f}.$$

Therefore,

$$\Phi(r) \approx -k \frac{r^2}{2f}.$$

For a conventional refractive lens in the thin-lens and paraxial approximations, the phase profile also takes the quadratic form

$$\Phi(r) = \Phi_0 - \frac{k_0 r^2}{2f}.$$

Thus, under these approximations, the two phase profiles become practically identical.

The important difference is therefore not necessarily the phase function itself, but **how that phase function is physically implemented**.

---

## 11. Why the Hyperbolic Profile Is the Natural Starting Point

The hyperbolic phase profile is widely used as the basic starting point for metalens design because it directly enforces the desired focusing condition and does not introduce spherical aberration for the ideal normal-incidence focusing case described here.

For a metalens with focal length $f$,

$$\Phi(r) = -k \left( \sqrt{r^2+f^2} - f \right)$$

completely specifies the ideal radial phase distribution for focusing a normally incident plane wave to the focal point.

However, this does not mean that a real metalens will automatically be aberration-free in every situation.

Other aberrations can arise, particularly for high numerical aperture and off-axis illumination. A high-NA metalens with a hyperbolic profile can exhibit coma and other off-axis aberrations, and additional phase corrections may therefore be required.

This is an important distinction:

> **The hyperbolic phase profile is the ideal starting point for normal-incidence focusing, not necessarily the final phase profile for every imaging application.**

---

## 12. From Phase Profile to a Real Metalens

We can now summarize the complete design logic.

### Step 1 — Define the optical function

For example, focus a plane wave at $f$.

### Step 2 — Derive the target phase

$$\Phi(r) = -k \left( \sqrt{r^2+f^2} - f \right)$$

### Step 3 — Wrap the phase

Because phase is periodic,

$$\Phi_{\mathrm{wrapped}} = \Phi \bmod 2\pi.$$

### Step 4 — Generate a meta-atom library

Numerically calculate

$$t_j = |t_j| e^{i\Phi_j}$$

for many possible meta-atom geometries.

### Step 5 — Map phase to geometry

At each location $r$, select the meta-atom whose phase best matches $\Phi_{\mathrm{target}}(r)$.

### Step 6 — Assemble the metasurface

The result is a flat array of subwavelength structures whose collective phase response approximates the desired hyperbolic profile.

Conceptually,

$$\text{Focal length} \rightarrow \text{Hyperbolic phase} \rightarrow \text{Phase wrapping} \rightarrow \text{Meta-atom library} \rightarrow \text{Geometry distribution} \rightarrow \text{Metalens}$$

This is the central design workflow of a basic metalens.

---

## 13. The Big Picture

A metalens is therefore not simply a collection of tiny structures placed on a surface.

There is a clear hierarchy behind its design:

$$\text{Optical function} \rightarrow \text{Wavefront} \rightarrow \text{Phase profile} \rightarrow \text{Phase gradient} \rightarrow \text{Meta-atom response} \rightarrow \text{Physical geometry}$$

For focusing, the desired wavefront is spherical.

The corresponding phase profile is hyperbolic:

$$\Phi(r) = -k \left( \sqrt{r^2+f^2} - f \right).$$

The phase gradient determines how strongly the wave is redirected at each radial position.

Finally, the meta-atoms are engineered so that their collective response reproduces this phase distribution.

This is the fundamental idea of **flat optics**:

> **Instead of changing the shape of an optical surface to control the optical path, we engineer the optical phase directly at the surface.**

Once this phase-engineering viewpoint is understood, the next question becomes much more concrete:

> **How does a tiny dielectric structure actually produce a controlled phase shift?**

That takes us from the **metalens phase profile** to the physics of the **meta-atom**—where propagation phase, resonant phase, and geometric (Pancharatnam–Berry) phase become important.