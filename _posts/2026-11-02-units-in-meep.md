---
layout: single
title: "Units in MEEP"
date: 2026-11-02 12:00:00 +0600
categories: [Computational Photonics, FDTD]
tags: [meep, fdtd, units, scale-invariance]
series: meep-fdtd
description: "Understand Meep's unit system through scale invariance, and convert physical lengths, times, and frequencies to Meep units."
mathjax: true
toc: true
toc_sticky: true
classes: wide
---



<figure class="article-epigraph">
	<span class="article-epigraph-mark" aria-hidden="true">“</span>
	<blockquote>Mathematics is the language with which God has written the universe.</blockquote>
	<figcaption>Galileo Galilei, <cite>Il Saggiatore</cite> (1623), commonly translated</figcaption>
</figure>

In Meep, we can choose a convenient unit of length. This freedom lets us simplify expressions and work with dimensionless quantities.

To understand the unit system, it helps to first look at the **scale invariance of Maxwell's equations**.

## Scale invariance of the wave equation

Consider the one-dimensional wave equation in vacuum:

$$
\frac{\partial^2 E}{\partial x^2} = \frac{1}{c^2}\frac{\partial^2 E}{\partial t^2}
$$

Introduce normalized coordinates using a characteristic length $a$:

$$
x' = \frac{x}{a}, \qquad t' = \frac{ct}{a}
$$

The derivatives become:

$$
\frac{\partial}{\partial x} = \frac{1}{a}\frac{\partial}{\partial x'}, \qquad \frac{\partial}{\partial t} = \frac{c}{a}\frac{\partial}{\partial t'}
$$

Substituting these into the wave equation gives:

$$
\frac{1}{a^2}\frac{\partial^2 E}{\partial x'^2} = \frac{1}{c^2}\cdot\frac{c^2}{a^2}\,\frac{\partial^2 E}{\partial t'^2}
$$

Cancel the common factor:

$$
\boxed{\frac{\partial^2 E}{\partial x'^2} = \frac{\partial^2 E}{\partial t'^2}}
$$

The speed of light has disappeared from the equation. In these normalized units, its numerical value is **one**.

**Scale invariance** means that certain electromagnetic problems retain the same dimensionless behavior when all relevant lengths and wavelengths are scaled together. This applies when the material properties are also scale-independent over the frequency range considered; material dispersion can break the simple scaling.

## Constructing a unit system

Choose a characteristic length:

$$
a = 1\,\mu\text{m} = 1\times10^{-6}\ \text{m}
$$

This defines one Meep unit of length. The choice is ours; another convenient length could be used instead.

Define the unit of time as the time light takes to travel this distance:

$$
\boxed{t_0 = \frac{a}{c}}
$$

For $a=1\,\mu\text{m}$:

$$
t_0 = \frac{10^{-6}}{299792458} \approx 3.336\times10^{-15}\ \text{s}
$$

Therefore:

$$
\boxed{t_0 \approx 3.336\ \text{fs}}
$$

In one Meep time unit, light travels:

$$
299792458 \times 3.336\times10^{-15} \approx 1\ \mu\text{m}
$$

That is exactly one length unit, so the numerical value of the speed of light is:

$$
\boxed{c = \frac{1\ \text{length unit}}{1\ \text{time unit}} = 1}
$$

The physical speed of light has not changed. We chose units of distance and time that make its numerical value equal to one.

## An analogy

Suppose a car travels at $60\ \text{km/hour}$. Choose one length unit to be $a=1\ \text{km}$, and define the time unit as the time needed to travel that length:

$$
t_0 = \frac{a}{v} = \frac{1\ \text{km}}{60\ \text{km/hour}} = \frac{1}{60}\ \text{hour} = 1\ \text{minute}
$$

In these units, the car's speed is one length unit per time unit. The car did not change speed; only the units used to describe its motion changed.

## More on scale invariance

For a fuller discussion of scale invariance in electromagnetism, see *Photonic Crystals: Modeling the Flow of Light* by John D. Joannopoulos and coauthors, Chapter 2.

## Using Meep units in practice

Let $a$ be the characteristic length represented by one Meep length unit, and let $\lambda$ be a physical wavelength. The wavelength entered in Meep is:

$$
\boxed{\lambda_{\text{Meep}} = \frac{\lambda}{a}}
$$

For example, if $a=1\,\mu\text{m}$ and $\lambda=1.55\,\mu\text{m}$, then $\lambda_{\text{Meep}}=1.55$.

The corresponding unit of time is:

$$
\boxed{t_0 = \frac{a}{c}}
$$

If $t$ is a physical time in seconds, its numerical value in Meep time units is:

$$
\boxed{t_{\text{Meep}} = t\,\frac{c}{a}}
$$

Likewise, a physical frequency $f$ in hertz is converted to Meep frequency by:

$$
\boxed{f_{\text{Meep}} = f\,\frac{a}{c}}
$$

Since $c=f\lambda$:

$$
\boxed{f_{\text{Meep}} = \frac{1}{\lambda_{\text{Meep}}}}
$$

This is why a wavelength of $1.55$ Meep length units corresponds to a frequency of $1/1.55$ Meep frequency units.

## Exercise

Take $a=1\,\mu\text{m}$ and a free-space wavelength of $\lambda=1.55\,\mu\text{m}$.

1. Find the wavelength in Meep units.
2. Find the corresponding frequency in Meep units.
3. Convert a simulation time of 10 Meep time units to femtoseconds.