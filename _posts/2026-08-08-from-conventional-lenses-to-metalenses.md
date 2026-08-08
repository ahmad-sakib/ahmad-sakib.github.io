---
layout: single
title: "From Conventional Lenses to Metalenses"
date: 2026-08-08 08:10:00 +0600
categories: [Metaoptics, Metalenses]
tags: [metalens, lens-design, phase-profile, optical-path]
description: "A practical bridge from traditional lens physics to metalens phase engineering, showing how a curved lens can be reinterpreted as a flat phase sheet."
mathjax: true
toc: true
toc_sticky: true
classes: wide
---

A conventional lens focuses light by changing the optical path length across its aperture. A metalens achieves the same focusing action with a flat surface by applying a spatially varying phase shift directly at the interface.

This post explains the connection between:

1. curved lens geometry,
2. optical path length and phase,
3. the equivalent metalens phase profile.

## How a conventional lens shapes phase

In a glass lens, rays that pass through the center travel a longer distance inside a higher-index material than rays near the edge. The accumulated phase at radius $r$ is approximately:

$$
\Delta \phi(r) = \frac{2\pi}{\lambda_0} \left[ n\, t(r) - n_0\, t_0 \right]
$$

where:

* $n$ is the refractive index of the lens material,
* $t(r)$ is the thickness at radius $r$,
* $n_0$ and $t_0$ define a reference path in air,
* $\lambda_0$ is the free-space wavelength.

For focusing, the lens must produce a spherical wavefront. In the thin-lens approximation, the ideal optical path difference is:

$$
\Delta L(r) = \sqrt{r^2 + f^2} - f
$$

This is the extra distance that light at radius $r$ must travel compared to light along the optical axis.

## The equivalent metalens phase profile

A metalens does not use physical thickness to create this delay. Instead, it imposes a phase discontinuity $\Phi(r)$ at the surface:

$$
\Phi(r) = -\frac{2\pi}{\lambda_0} \left( \sqrt{r^2 + f^2} - f \right)
$$

The negative sign indicates that the metalens must remove the excess phase accumulated by the edge rays relative to the axis in the reference plane. Because phase is periodic, this continuous profile is wrapped into the interval $[0, 2\pi)$.

### Paraxial approximation

For small angles ($r \ll f$), the profile can be approximated as a quadratic function:

$$
\Phi(r) \approx -\frac{\pi r^2}{\lambda_0 f}
$$

This is the same phase profile produced by a thin, weak lens in classical Fourier optics.

## From optical path to metasurface implementation

The metalens concept becomes practical when we realize that each location on the surface only needs to provide a local phase shift. A discrete array of meta-atoms can do this if the unit cells have a full $0$–$2\pi$ phase range and good transmission.

The typical design workflow is:

1. Define operating wavelength $\lambda_0$, focal length $f$, and aperture radius.
2. Compute the ideal phase profile $\Phi(r)$ across the lens.
3. Simulate a family of meta-atom geometries to build a phase library.
4. Assign the closest matching meta-atom to each radial position.

This is the key conceptual leap: the lens is no longer a shaped volume, but a surface that encodes phase.

## Why this matters

By recasting the lens problem as a flat phase sheet, metalenses can:

* shrink optical thickness to a single planar layer,
* integrate focusing with aberration control,
* enable new compact imaging and sensing architectures,
* be fabricated directly on chips and detectors.

Yet the underlying physics remains the same: both conventional lenses and metalenses are devices that shape the phase of light so that a plane wave becomes a spherical wave.

## Summary

* Conventional lenses use refractive index and thickness to control optical path length.
* The metalens equivalent is a surface phase profile $\Phi(r)$.
* A metalens implements that profile with meta-atoms instead of curved glass.
* This perspective is a crucial bridge for readers moving from classical optics to flat optics.

> Read next: [What Does a Lens Actually Do to Light?](/notes/what-does-a-lens-actually-do-to-light/)
