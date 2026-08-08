---
layout: single
title: "Phase, Wavefronts, and Optical Path Length"
date: 2026-08-08 08:30:00 +0600
categories: [Metaoptics, Metalenses]
tags: [phase, wavefront, optics, optical-path]
description: "A foundational exploration of optical phase, wavefronts, and optical path length—essential concepts for understanding both traditional lenses and metalenses."
mathjax: true
toc: true
toc_sticky: true
classes: wide
---

To understand metalenses, you must first understand what a lens does to the phase of light. This post explains why phase and wavefronts are the natural language of optics and how optical path length determines where light focuses.

## What is optical phase?

Optical phase is the argument of a monochromatic electromagnetic wave. For a wave traveling in a uniform medium, the electric field can be written as:

$$
E(\mathbf{r}, t) = E_0 \, e^{i(\mathbf{k}\cdot\mathbf{r} - \omega t + \phi_0)}
$$

The spatial part $\mathbf{k}\cdot\mathbf{r} + \phi_0$ is the phase. When two waves meet, their relative phase determines whether they interfere constructively or destructively.

A lens works by changing this phase across the pupil so that light from all parts of the aperture adds up coherently at the focus.

## Wavefronts: surfaces of equal phase

A **wavefront** is a surface on which the optical phase is constant.

* A plane wave has flat wavefronts.
* A spherical wave has concentric spherical wavefronts.

A perfect focusing lens converts incoming plane wavefronts into outgoing spherical wavefronts that converge toward the focal point.

This is the key conceptual picture:

* input: flat, constant-phase surfaces,
* output: curved, constant-phase surfaces centered at the focus.

When the lens succeeds, the transmitted field on the exit side of the lens has the correct phase curvature to produce a spherical wave.

## Optical path length and phase accumulation

The phase accumulated by a ray traveling through a medium is proportional to the **optical path length** (OPL):

$$
\text{OPL} = \int n(\mathbf{r})\, ds
$$

and the phase is:

$$
\phi = k_0 \, \text{OPL} = \frac{2\pi}{\lambda_0} \int n(\mathbf{r})\, ds
$$

where $n(\mathbf{r})$ is the refractive index along the ray path and $ds$ is the differential path length.

Changing the physical path or the refractive index changes the OPL, and therefore changes the phase.

## How a lens equalizes phase at the focus

Consider a plane wave incident on a thin lens. A ray passing through the lens at radius $r$ travels through a different thickness of glass than a ray passing through the center.

The total optical path from the entrance plane through the lens to the focal point is:

$$
L(r) = n\, t(r) + \sqrt{r^2 + f^2}
$$

For a perfect lens, $L(r)$ must be the same for all $r$. This guarantees that the phase at the focus is constant for every ray.

The thickness profile $t(r)$ is therefore shaped so that the additional path inside the lens compensates for the longer free-space distance traveled by rays farther from the axis.

## Phase profile of a lens

The required phase delay at the lens plane is the difference between the optical path for a ray at radius $r$ and the on-axis path:

$$
\Phi(r) = -\frac{2\pi}{\lambda_0} \left( \sqrt{r^2 + f^2} - f \right)
$$

This is the same expression that appears in metalens design. The lens imposes this phase profile by using material thickness and refractive index.

Because phase is periodic, any practical implementation wraps this phase into the interval $[0,2\pi)$.

## Why the phase view is better than the ray view

The ray picture is useful for tracing directions, but it does not tell you whether light will interfere correctly at the focus.

The phase picture tells you:

* where the wavefronts are,
* how much phase each point on the aperture contributes,
* whether the contributions add coherently.

For metasurfaces and metalenses, the phase picture is essential because the device is built from local phase elements rather than a continuous refractive surface.

## What this means for metalenses

A metalens does not need a curved glass shape because it does not rely on bulk optical path length. Instead, it produces the required phase shift directly at a single planar surface.

The design challenge becomes:

* compute the target phase profile $\Phi(r)$,
* realize that phase profile with subwavelength meta-atoms,
* preserve high transmission while covering $0$–$2\pi$ phase.

This is the foundation for all later metalens topics: phase mechanisms, meta-atom libraries, and simulation.

## Summary

* Phase is the fundamental quantity that a lens controls.
* Wavefronts are surfaces of constant phase, and a focusing lens converts planes into spheres.
* Optical path length determines the phase accumulated by each ray.
* The key lens design equation is the phase profile $\Phi(r)$, which metalenses implement at a surface.

> Read next: [The Phase Profile of a Thin Lens](/notes/the-phase-profile-of-a-thin-lens/)
