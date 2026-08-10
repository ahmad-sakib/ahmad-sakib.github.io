---
title: "Conventional Lens Phase Profile"
layout: single
permalink: /metaoptics/metalenses/conventional-lens-phase-profile/
author_profile: false
sidebar:
  nav: "metalenses"
---

# Conventional Lens Phase Profile

Before understanding how a metalens focuses light, it is useful to first understand **how a conventional lens controls the phase of light**.

A conventional lens looks like a simple piece of curved glass. But optically, its most important function is not simply to bend rays. A lens introduces a **position-dependent phase delay** across an incident wavefront.

This spatial variation of phase changes the shape of the wavefront and causes the light to converge or diverge.

The central idea is therefore:

> **A lens focuses light by engineering the spatial phase of the transmitted wave.**

For a conventional lens, this phase control is achieved through the **optical path length** inside the lens. A metalens achieves the same fundamental objective in a completely different physical way: instead of varying the thickness of glass, it uses subwavelength structures to impose the required phase locally.

---

## 1. From Thickness to Phase

Consider a plane wave normally incident on a flat slab of transparent material.

If the slab has a constant thickness ($L$), every part of the wave travels through approximately the same optical path:

$$\mathrm{OPL} = nL,$$

where $n$ is the refractive index of the material.

Since the optical path is the same everywhere, the phase delay is also the same everywhere. The transmitted wave therefore remains approximately planar.

Now consider a convex lens.

Its thickness varies with the transverse position $(x,y)$:

$$L = L(x,y).$$

Consequently, different portions of the incident wave travel through different optical path lengths.

The optical path is

$$\mathrm{OPL}(x,y) = nL(x,y),$$

and the corresponding phase accumulated during propagation is

$$\Phi(x,y) = k_0 nL(x,y),$$

where

$$k_0 = \frac{2\pi}{\lambda_0}$$

is the vacuum wavenumber.

Thus, the curved surface of a conventional lens produces a **spatially varying phase profile**.

For a converging lens, this phase variation is arranged so that the transmitted wavefront becomes converging.

---

## 2. Why Does a Convex Lens Focus Light?

Suppose a plane wave is incident on a convex lens.

The central portion of the lens is thicker than the edge. Therefore, light passing through the center experiences a larger optical path than light passing through the outer regions.

The important point is not simply that different rays travel different distances inside the glass. What matters is the **relative phase accumulated by different parts of the wavefront**.

After passing through the lens, the originally planar wavefront is transformed into a curved wavefront.

The curvature of this wavefront is such that the wave propagates toward a common focal point.

In other words,

$$\text{spatially varying thickness} \quad\Longrightarrow\quad \text{spatially varying phase}$$

and therefore

$$\text{spatial phase variation} \quad\Longrightarrow\quad \text{wavefront curvature} \quad\Longrightarrow\quad \text{focusing}.$$

This is the key connection between conventional lens optics and metasurface optics.

---

## 3. The Phase Profile of a Thin Lens

For a thin refractive lens, the phase profile can be written in the paraxial approximation as

$$\Phi(r) = \Phi_0 - \frac{k_0(n-1)}{2} r^2 \left( \frac{1}{R_1} - \frac{1}{R_2} \right),$$

where:

* $r = \sqrt{x^2+y^2}$ is the radial distance from the optical axis,
* $R_1$ and $R_2$ are the radii of curvature of the two lens surfaces,
* $n$ is the refractive index of the lens,
* $k_0 = 2\pi/\lambda_0$,
* $\Phi_0$ is an arbitrary constant phase.

The expression contains the familiar lens-maker relation,

$$\frac{1}{f} = (n-1) \left( \frac{1}{R_1} - \frac{1}{R_2} \right).$$

Substituting this relation into the phase expression gives

$$\Phi(r) = \Phi_0 - \frac{k_0 r^2}{2f}$$

for a converging thin lens under the paraxial approximation.

This is the familiar **quadratic phase profile** of a conventional thin lens.

---

## 4. What Does the Quadratic Phase Mean?

The equation

$$\Phi(r) = \Phi_0 - \frac{k_0 r^2}{2f}$$

contains an important physical message.

The phase is not constant across the aperture. Instead, it varies quadratically with the radial coordinate $r$.

At the center,

$$r = 0,$$

so

$$\Phi(0) = \Phi_0.$$

As we move away from the optical axis, $r$ increases and the phase changes according to $r^2$.

Therefore, different points across the lens impose different phase delays.

The phase gradient is

$$\frac{d\Phi}{dr} = -\frac{k_0 r}{f}.$$

The gradient increases with radial distance from the optical axis.

This is what causes rays farther from the optical axis to be redirected more strongly toward the focus.

The important principle is therefore:

> **The phase itself determines the wavefront, while its spatial gradient determines how the wave propagates locally.**

For metasurfaces, this idea becomes particularly important because the phase gradient can be engineered directly.

---

## 5. The Same Result from Optical Path Difference

There is another way to understand the same phase profile.

Imagine that the lens should transform an incoming plane wave into a spherical wave converging toward a focal point at distance $f$.

Consider a point on the lens at radial distance $r$ from the optical axis.

The distance from this point to the focus is

$$L(r) = \sqrt{r^2 + f^2}.$$

For the central point of the lens,

$$L(0) = f.$$

Therefore, the additional distance that the off-axis wave must travel is

$$\Delta L(r) = \sqrt{r^2 + f^2} - f.$$

If there were no lens phase correction, waves originating from different points on the aperture would not arrive at the focus with the same phase.

The lens must therefore introduce a compensating phase.

Since a propagation distance $L$ corresponds to a phase $kL$, the required phase correction is

$$\Phi(r) = -k_0 \left( \sqrt{r^2 + f^2} - f \right)$$

for focusing in the same medium as the incident and transmitted region, with the appropriate sign convention.

This is the **hyperbolic phase profile**.

It is the exact geometric phase profile required for a surface to transform a plane wave into a spherical wave converging toward the focal point.

---

## 6. Hyperbolic vs. Quadratic Phase

At first, two different phase profiles appear:

### Conventional thin lens

$$\Phi_{\mathrm{quad}}(r) = -\frac{k_0 r^2}{2f}.$$

### Exact focusing phase

$$\Phi_{\mathrm{hyp}}(r) = -k_0 \left( \sqrt{r^2 + f^2} - f \right).$$

So which one is correct?

The answer is that the quadratic phase is the **paraxial approximation** of the hyperbolic phase.

When

$$r \ll f,$$

we can expand the square root:

$$\sqrt{r^2 + f^2} = f \sqrt{1 + \frac{r^2}{f^2}}.$$

Using the binomial approximation,

$$\sqrt{1+x} \approx 1 + \frac{x}{2}, \qquad |x| \ll 1,$$

we obtain

$$\sqrt{r^2 + f^2} \approx f + \frac{r^2}{2f}.$$

Therefore,

$$\sqrt{r^2 + f^2} - f \approx \frac{r^2}{2f}.$$

Substituting this into the hyperbolic phase gives

$$\Phi_{\mathrm{hyp}}(r) \approx -k_0 \frac{r^2}{2f}.$$

Hence,

$$\Phi_{\mathrm{hyp}}(r) \approx \Phi_{\mathrm{quad}}(r)$$

in the paraxial regime.

This is why the phase profile of a conventional thin lens and that of a metalens appear identical when the paraxial approximation is used.

---

## 7. Why the Hyperbolic Profile Matters for Metalenses

For a conventional lens, the phase profile arises naturally from the physical thickness of the glass.

For a metalens, there is no need to reproduce that curved thickness.

Instead, the desired phase profile is specified mathematically first:

$$\Phi(r) = -k_0 \left( \sqrt{r^2 + f^2} - f \right).$$

The metasurface must then be designed so that every position on its surface provides approximately the required phase shift.

This changes the design philosophy completely.

For a conventional lens:

$$L(r) \rightarrow \mathrm{OPL}(r) \rightarrow \Phi(r)$$

while for a metalens:

$$\Phi(r) \rightarrow \text{meta-atom geometry}$$

The phase profile becomes the starting point rather than merely the consequence of the lens geometry.

---

## 8. From Continuous Phase to Meta-Atoms

A real metalens cannot directly impose an arbitrary continuous function $\Phi(r)$.

Instead, it is composed of a large number of discrete **meta-atoms**.

Each meta-atom is designed to provide a particular transmission coefficient,

$$t = |t| e^{i\Phi}.$$

A library of meta-atoms can therefore be constructed by numerically simulating different geometries and recording their transmission amplitude and phase.

For example, for dielectric nanopillars, changing the diameter can change the phase response. A unit-cell library can then provide a mapping of the form

$$D \longrightarrow \Phi.$$

The target phase profile provides the required phase at each position,

$$\Phi_{\mathrm{target}}(r),$$

and the corresponding meta-atom geometry is selected from the library.

Conceptually,

$$\Phi_{\mathrm{target}}(r) \rightarrow D(r) \rightarrow \text{metalens}$$

This is the fundamental bridge between the mathematical lens profile and the physical metasurface.

---

## 9. The Phase Is Periodic

There is one more important property of optical phase.

A phase shift of $2\pi$ is physically equivalent to zero phase shift:

$$\Phi \equiv \Phi + 2\pi m,$$

where $m$ is any integer.

Therefore, the hyperbolic phase profile does not need to be implemented with arbitrarily large phase values.

Instead, it can be wrapped into the interval

$$0 \leq \Phi < 2\pi.$$

This produces a series of radial phase zones.

The resulting structure resembles a set of concentric Fresnel zones, although the physical implementation consists of discrete meta-atoms rather than conventional transparent rings.

This phase wrapping is one of the key steps in converting the continuous mathematical phase profile into a manufacturable metasurface.

---

## 10. Conventional Lens vs. Metalens

The connection can now be summarized.

| Conventional lens | Metalens |
| --- | --- |
| Curved bulk material | Flat metasurface |
| Phase controlled by thickness | Phase controlled by meta-atoms |
| Optical path length varies spatially | Local scattering response varies spatially |
| Continuous material profile | Discrete subwavelength elements |
| Phase emerges from propagation through glass | Phase is engineered directly |
| Usually described by a quadratic phase in paraxial optics | Often designed using the exact hyperbolic phase |

Despite these physical differences, both devices perform the same fundamental operation:

$$\text{Plane wave} \rightarrow \text{spatial phase transformation} \rightarrow \text{converging wavefront} \rightarrow \text{focus}$$

The important distinction is **how the phase is produced**.

A conventional lens changes the optical path by changing its thickness.

A metalens changes the optical response locally using subwavelength structures.

---

## 11. From Lens Optics to Metaoptics

This gives us the conceptual foundation for metalens design.

We started with a simple question:

> **How does a conventional lens focus light?**

The answer is not simply that the curved surface bends rays.

At the wave level, the lens introduces a spatially varying phase profile. That phase profile transforms a planar wavefront into a converging spherical wavefront.

For a conventional thin lens in the paraxial regime,

$$\Phi(r) = -\frac{k_0 r^2}{2f}$$

while the more general focusing condition gives

$$\Phi(r) = -k_0 \left( \sqrt{r^2 + f^2} - f \right).$$

The second expression is especially important for metalenses because it directly specifies the phase that must be produced across the metasurface.

The problem of designing a metalens can therefore be viewed as a sequence:

$$\text{Desired focus} \rightarrow \text{Target phase profile} \rightarrow \text{Meta-atom phase response} \rightarrow \text{Meta-atom geometry} \rightarrow \text{Metalens}$$

This is the fundamental idea behind **phase engineering in metaoptics**.

In the next section, we can move from this ideal phase profile to the physical question:

> **How can a metasurface actually produce the required phase shift at every point?**

That is where **meta-atoms** enter the picture.