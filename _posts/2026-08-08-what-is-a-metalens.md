---
layout: single
title: "What Is a Metalens?"
date: 2026-08-08 08:00:00 +0600
categories: [Metaoptics, Metalenses]
tags: [metalens, flat-optics, metasurface, phase-engineering]
description: "A clear introduction to metalenses: what they are, how they differ from traditional lenses, and why flat optics matters."
mathjax: true
toc: true
toc_sticky: true
classes: wide
---

A **metalens** is a flat optical element that focuses light by engineering a spatially varying phase profile across a subwavelength surface. Instead of relying on a curved piece of glass, a metalens encodes the same wavefront transformation into an array of tiny nanostructures called **meta-atoms**.

## Why a metalens is not just another lens

Conventional lenses bend light through gradual phase accumulation inside a dielectric volume. A metalens does the same job at a surface by imposing a local phase shift on each part of the incoming wavefront.

This difference is important because it changes the design problem from shaping bulk geometry to designing a phase map.

* Traditional lens: physical thickness → optical path length → phase delay.
* Metalens: surface pattern → local phase jump → wavefront control.

## The core idea: phase at the surface

A focusing metalens must convert an incoming plane wave into a converging spherical wave. The ideal phase shift at radius $r$ is:

$$
\Phi(r) = -\frac{2\pi}{\lambda_0} \left( \sqrt{r^2 + f^2} - f \right)
$$

where:

* $r$ is the radial distance from the center,
* $f$ is the focal length,
* $\lambda_0$ is the design wavelength in vacuum.

This phase profile is the same one a traditional lens produces through geometry, but a metalens applies it directly at the surface.

## What meta-atoms do

Meta-atoms are the building blocks of a metalens. Each meta-atom is a subwavelength scatterer whose geometry, material, or orientation controls the transmitted light’s phase and amplitude.

Common meta-atom implementations include:

* dielectric nanopillars,
* nanofins,
* elliptical scatterers,
* Huygens metasurfaces.

The design workflow is usually:

1. Choose a material and operating wavelength.
2. Simulate meta-atom geometries to determine phase and transmission.
3. Build a phase library mapping geometry to phase.
4. Assign meta-atoms across the metalens aperture to match the target profile.

## Why this matters for Sakib × Metaoptics

If metalenses are going to be one of your core pillars, the first goal is to make the reader understand the identity of the device:

* a flat architecture,
* a graded phase surface,
* a wavefront-engineering device,
* a platform for compact imaging, sensing, and computational optics.

This post is the first step in a progressive metalens knowledge system. Next, we will connect this flat optical concept to the familiar world of conventional lenses.

## Quick summary

* A metalens focuses light by imposing a local phase shift on a flat surface.
* It replaces the curved geometry of a traditional lens with an engineered metasurface.
* Meta-atoms are subwavelength elements that provide the required phase delay.
* The key design task is to map a continuous lens phase profile onto a discrete library of meta-atoms.

> Read next: [From Conventional Lenses to Metalenses](/notes/from-conventional-lenses-to-metalenses/)
