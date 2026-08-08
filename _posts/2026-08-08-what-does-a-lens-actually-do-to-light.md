---
layout: single
title: "What Does a Lens Actually Do to Light?"
date: 2026-08-08 08:20:00 +0600
categories: [Metaoptics, Metalenses]
tags: [optics, wavefronts, phase, lens]
description: "A fundamental explanation of how a lens modifies light: rays, wavefronts, optical path length, and why phase is the true quantity that matters."
mathjax: true
toc: true
toc_sticky: true
classes: wide
---

A lens does not simply ``bend'' light. In wave optics, a lens reshapes the phase of an incoming wave so that light from across the aperture arrives in phase at the focus.

This post explains the essential action of a lens in terms of:

* optical path length,
* phase and wavefronts,
* the conversion of a plane wave into a spherical wave.

## Phase is the hidden action of every lens

Every optical element affects the phase of an electromagnetic wave. The intensity we see is only the squared magnitude of the field, but the spatial and temporal phase determine where light interferes constructively or destructively.

The phase accumulated by a ray traveling through a medium is:

$$
\phi = k_0 \int n(\mathbf{r})\, ds = \frac{2\pi}{\lambda_0} \int n(\mathbf{r})\, ds
$$

where $ds$ is the path length and $n(\mathbf{r})$ is the local refractive index.

A lens changes $\phi$ across its aperture so that rays originating from different points produce the same optical phase at the focal plane.

## Wavefronts: planes and spheres

A monochromatic plane wave has wavefronts that are flat surfaces of constant phase. A perfect imaging lens transforms that flat wavefront into a spherical wavefront that converges to a point.

The ideal output wavefront of a focusing lens is a spherical surface centered at the focal point. When the lens succeeds, all points on that sphere share the same phase.

This is why a lens is best described as a **wavefront shaper** rather than a simple ``bending device.''

## Optical path length and focusing

Consider a ray passing through the lens at radius $r$ and then propagating to the focus. The total optical path length is:

$$
L(r) = n\, t(r) + \sqrt{r^2 + f^2}
$$

For a thin lens in air, the lens thickness $t(r)$ is designed so that $L(r)$ is equal for all rays. In the thin-lens limit, the required thickness variation corresponds to the familiar lens shape.

If the total phase from each ray is constant at the focus, the rays interfere constructively and produce a sharp focal spot.

## The ray picture vs the wave picture

The ray picture is useful for tracing where light goes, but it hides the underlying phase control.

* Ray optics: the lens changes ray direction according to Snell's law.
* Wave optics: the lens changes phase to produce a target wavefront.

Both descriptions are equivalent when the lens is large compared to the wavelength, but the wave perspective is essential for metasurfaces and subwavelength optics.

## Why phase matters more than intensity

A lens can have perfect transmission but still fail to focus if the phase profile is wrong. The phase at each position on the aperture determines whether the contributions from all parts of the lens add up constructively at the focus.

This is why metalenses are designed by matching the phase profile of a spherical wave, not by simply maximizing throughput.

## What a lens does in one sentence

A lens imposes a spatially varying phase shift so that an incoming planar wave becomes a spherical wave converging to the focal point.

## Summary

* A lens works by controlling optical path length and phase.
* Wavefronts (planes, spheres) are the natural language of lens action.
* The ray description is convenient, but the deeper physics is phase engineering.
* Understanding lenses as phase shapers is the key to learning metalenses.

> Read next: [Phase, Wavefronts, and Optical Path Length](/notes/phase-wavefronts-and-optical-path-length/){: .is-notice}
