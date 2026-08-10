---

title: "Meta-Atom"
layout: single
permalink: /metaoptics/metalenses/meta-atom/
author_profile: false
sidebar:
nav: "metalenses"
-----------------

# Meta-Atom: The Building Block of a Metalens

A conventional lens is made from a continuous piece of material whose curved geometry changes the optical path of light.

A metalens takes a fundamentally different approach.

Instead of using a continuously curved surface, it is built from a large number of individually designed **subwavelength structures**. Each structure interacts with light and produces a controlled change in its amplitude, phase, polarization, or propagation direction.

These individual structures are called **meta-atoms**.

A useful way to think about a metalens is therefore

$$
\boxed{
\begin{aligned}
\text{Metalens}[4pt]
\text{an organized array of meta-atoms}
\end{aligned}
}
$$

Each meta-atom is small compared with the wavelength of light, but it is not optically insignificant. Its geometry determines how the electromagnetic field interacts with the structure and, consequently, how the transmitted or reflected wave is modified.

For a metalens, the most important quantity is often the **phase**.

The design problem can therefore be summarized as

$$
\boxed{
\text{Meta-atom geometry}
\longrightarrow
\text{electromagnetic response}
\longrightarrow
\text{phase}
}
$$

and the complete metalens is obtained by placing different meta-atoms at different positions so that their collective phase response produces the desired wavefront.

---

## 1. What Is a Meta-Atom?

A meta-atom is a deliberately engineered subwavelength optical structure.

Depending on the design, it may be a

* nanopillar,
* nanofin,
* nanodisk,
* nanobrick,
* slot,
* aperture,
* resonator,
* or another subwavelength geometry.

The exact shape is not the defining feature.

What matters is that its dimensions are comparable to or smaller than the wavelength and that its electromagnetic response can be engineered.

For example, consider a dielectric nanopillar with diameter $D$ and height $H$.

A simple representation is

$$
\boxed{
\text{Meta-atom}=(D,H,\text{material},\text{environment})
}
$$

The geometry determines how the electromagnetic field is distributed around and inside the structure.

That field distribution determines the optical response.

Thus, changing something as simple as the diameter $D$ can change the phase of the transmitted light.

This is the basic mechanism that allows a flat surface to behave like a lens.

---

# 2. Why Is It Called a "Meta-Atom"?

The word **meta** means beyond.

A meta-atom is not a fundamental atom. It is an artificial optical building block whose electromagnetic response is engineered through its geometry.

An ordinary atom has a response determined by quantum-mechanical properties of its electrons and nuclei.

A meta-atom has a response determined primarily by

$$
\boxed{
\text{material}
+
\text{geometry}
+
\text{electromagnetic environment}
}
$$

This gives the designer an enormous amount of freedom.

Instead of changing the chemical composition of matter, we can change the geometry of the structure.

Instead of accepting the optical response of a natural material, we engineer the response we need.

This is one of the central ideas behind **metasurfaces** and **metaoptics**.

---

# 3. A Meta-Atom as an Optical Transformer

Suppose a monochromatic electromagnetic wave is incident on a meta-atom.

The incident electric field can be written as

$$
\mathbf{E}_{\mathrm{in}}(\mathbf{r},t)
======================================

\mathbf{E}_{\mathrm{in}}(\mathbf{r})
e^{-i\omega t}
$$

After interacting with the meta-atom, the transmitted field generally becomes

$$
\mathbf{E}_{\mathrm{out}}
=========================

t,\mathbf{E}_{\mathrm{in}}
$$

where

$$
t=|t|e^{i\Phi}
$$

Here,

$$
|t|
$$

describes the transmission amplitude and

$$
\Phi
$$

is the phase imparted by the meta-atom.

Therefore,

$$
\boxed{
t=|t|e^{i\Phi}
}
$$

is one of the most useful ways to describe a meta-atom.

Changing its geometry changes $t$.

In particular,

$$
D\rightarrow t(D)=|t(D)|e^{i\Phi(D)}
$$

A metalens designer therefore wants a collection of meta-atoms for which the phase

$$
\Phi(D)
$$

can be controlled over the required range while maintaining high transmission.

---

# 4. The Three Main Ways a Meta-Atom Controls Phase

There are several physical mechanisms by which a meta-atom can modify optical phase.

The three most important concepts for metalens design are:

### 1. Propagation phase

The meta-atom behaves approximately like a nanoscale waveguide.

$$
\boxed{
\Phi_{\mathrm{prop}}
\approx
k_0n_{\mathrm{eff}}H
}
$$

### 2. Geometric phase

The phase depends on the orientation of an anisotropic meta-atom.

For suitable polarization-converting structures,

$$
\boxed{
\Phi_{\mathrm{PB}}
==================

\pm 2\theta
}
$$

where $\theta$ is the rotation angle.

### 3. Resonant phase

The phase is strongly modified near an electromagnetic resonance.

$$
\boxed{
t(\omega)
=========

|t(\omega)|e^{i\Phi(\omega)}
}
$$

with $\Phi$ changing rapidly around the resonance.

These mechanisms are not always completely independent. A real dielectric structure may exhibit propagation, resonance, reflection, and scattering contributions simultaneously.

For the remainder of this section, however, we will focus on the **propagation-phase picture**, because it provides one of the clearest physical explanations of how dielectric nanopillars control phase.

---

# 5. The Dielectric Nanopillar as a Waveguide

Consider a high-index dielectric nanopillar.

At first glance, it might seem that light simply travels through a small piece of dielectric material.

That picture is incomplete.

The nanopillar behaves approximately as a **finite optical waveguide**.

The high-index dielectric confines the electromagnetic field, while the surrounding lower-index material provides the optical cladding.

Therefore, the electromagnetic field inside the nanopillar is not simply a plane wave propagating through bulk material.

Instead, it forms a **guided electromagnetic mode**.

This distinction is essential.

The phase acquired by the mode is determined by its propagation constant

$$
\beta
$$

not directly by the bulk material refractive index alone.

We therefore define the effective index through

$$
\boxed{
\beta=k_0n_{\mathrm{eff}}
}
$$

Hence,

$$
\boxed{
n_{\mathrm{eff}}
================

\frac{\beta}{k_0}
}
$$

This is the fundamental definition of the effective refractive index.

---

# 6. Where Does This Definition Come From?

To understand this properly, start from Maxwell's equations.

For a source-free linear medium,

$$
\nabla\times\mathbf{E}
======================

-\mu_0
\frac{\partial\mathbf{H}}{\partial t}
$$

and

$$
\nabla\times\mathbf{H}
======================

\epsilon_0\epsilon_r
\frac{\partial\mathbf{E}}{\partial t}
$$

For monochromatic fields,

$$
\mathbf{E}(\mathbf{r},t)
========================

\mathbf{E}(\mathbf{r})e^{-i\omega t}
$$

the electric field satisfies

$$
\nabla\times\nabla\times\mathbf{E}
==================================

k_0^2\epsilon_r(\mathbf{r})\mathbf{E}
$$

where

$$
k_0
===

# \frac{\omega}{c}

\frac{2\pi}{\lambda_0}
$$

Now consider a pillar extending along the $z$-direction.

Because the structure is approximately invariant along $z$, we can seek a modal solution of the form

$$
\boxed{
\mathbf{E}(x,y,z)
=================

\mathbf{E}_t(x,y)e^{i\beta z}
}
$$

The factor

$$
e^{i\beta z}
$$

describes propagation along the pillar.

The quantity

$$
\beta
$$

is therefore the propagation constant of the electromagnetic mode.

After traveling a distance $H$, the mode acquires a phase

$$
\Phi_{\mathrm{prop}}
====================

\beta H
$$

Using

$$
\beta=k_0n_{\mathrm{eff}}
$$

we obtain

$$
\boxed{
\Phi_{\mathrm{prop}}
====================

k_0n_{\mathrm{eff}}H
}
$$

Since

$$
k_0=\frac{2\pi}{\lambda_0}
$$

this becomes

$$
\boxed{
\Phi_{\mathrm{prop}}
====================

\frac{2\pi}{\lambda_0}
n_{\mathrm{eff}}H
}
$$

This is the origin of the familiar propagation-phase expression.

It is not an empirical formula.

It follows directly from the definition of the propagation constant.

---

# 7. What Exactly Is $n_{\mathrm{eff}}$?

This is perhaps the most important question in understanding a dielectric meta-atom.

The material has a refractive index

$$
n_{\mathrm p}
$$

But the optical mode has an effective index

$$
n_{\mathrm{eff}}
$$

These are not the same quantity.

The material refractive index describes the constitutive response of the material:

$$
\mathbf{D}
==========

\epsilon_0n_{\mathrm p}^2\mathbf{E}
$$

for a simple, isotropic, nonmagnetic dielectric.

The effective index describes the propagation of a **particular electromagnetic mode of a particular structure**:

$$
\boxed{
n_{\mathrm{eff}}
================

\frac{\beta}{k_0}
}
$$

Therefore,

$$
\boxed{
n_{\mathrm{eff}}
================

n_{\mathrm{eff}}
(
\text{geometry},
\text{material},
\lambda,
\text{environment},
\text{mode}
)
}
$$

This distinction is fundamental.

The material index belongs to the material.

The effective index belongs to the **mode of the structure**.

---

# 8. Why Is $n_{\mathrm{eff}}$ Usually Smaller Than the Material Index?

Consider a dielectric nanopillar surrounded by air.

The electromagnetic field is not completely confined inside the dielectric.

Some of the field exists outside the pillar.

Therefore, the mode effectively samples both

$$
n_{\mathrm p}
$$

and

$$
n_{\mathrm{out}}
$$

In a simple guided-mode picture,

$$
\boxed{
n_{\mathrm{out}}
<
n_{\mathrm{eff}}
<
n_{\mathrm p}
}
$$

The precise value depends on the field distribution.

If the field is strongly concentrated inside the dielectric,

$$
n_{\mathrm{eff}}
\rightarrow
n_{\mathrm p}
$$

If the field extends significantly into the surrounding medium,

$$
n_{\mathrm{eff}}
\rightarrow
n_{\mathrm{out}}
$$

Therefore, $n_{\mathrm{eff}}$ can be understood physically as a measure of how strongly the optical mode is confined to the high-index structure.

---

# 9. The Role of the Nanopillar Diameter

Now we can understand why changing the diameter of a nanopillar changes its phase.

Let the pillar diameter be $D$.

Changing $D$ changes the transverse geometry of the waveguide.

Therefore, it changes the electromagnetic eigenmode.

The mode changes its spatial distribution:

$$
\mathbf{E}_t(x,y)
\rightarrow
\mathbf{E}_t(x,y;D)
$$

The corresponding propagation constant also changes:

$$
\beta
\rightarrow
\beta(D)
$$

Therefore,

$$
\boxed{
n_{\mathrm{eff}}
================

\frac{\beta(D)}{k_0}
}
$$

Consequently,

$$
\boxed{
D
\rightarrow
n_{\mathrm{eff}}(D)
}
$$

And because

$$
\Phi_{\mathrm{prop}}
====================

k_0n_{\mathrm{eff}}H
$$

we finally obtain

$$
\boxed{
D
\rightarrow
n_{\mathrm{eff}}
\rightarrow
\Phi
}
$$

This is the physical mechanism behind propagation-phase dielectric metalenses.

---

# 10. Why Does Increasing $D$ Usually Increase $n_{\mathrm{eff}}$?

Consider a very small pillar.

The dielectric region is small, so the electromagnetic mode extends significantly into the surrounding medium.

Its effective index is therefore relatively low.

Now increase the diameter.

The high-index region becomes larger and can confine the optical mode more strongly.

More of the electromagnetic field is concentrated inside the dielectric.

The mode therefore experiences a larger effective index.

Qualitatively,

$$
D\uparrow
$$

leads to

$$
\text{stronger confinement}
$$

which leads to

$$
\beta\uparrow
$$

and therefore

$$
\boxed{
n_{\mathrm{eff}}\uparrow
}
$$

The corresponding propagation phase also increases:

$$
\boxed{
\Phi_{\mathrm{prop}}
====================

k_0n_{\mathrm{eff}}H
\uparrow
}
$$

Thus, a sweep of nanopillar diameter can provide a convenient way to tune the phase.

---

# 11. The Waveguide View: Normalized Frequency

The diameter dependence can be understood more formally using the waveguide normalized frequency.

For a simple step-index waveguide,

$$
V
=

\frac{2\pi a}{\lambda_0}
\sqrt{
n_{\mathrm p}^2-n_{\mathrm{out}}^2
}
$$

where

$$
a=\frac{D}{2}
$$

Therefore,

$$
\boxed{
V
=

\frac{\pi D}{\lambda_0}
\sqrt{
n_{\mathrm p}^2-n_{\mathrm{out}}^2
}
}
$$

Notice that

$$
V\propto D
$$

Thus, increasing the diameter increases the normalized frequency.

A larger $V$ generally corresponds to stronger modal confinement.

Therefore,

$$
D
\rightarrow
V
\rightarrow
\text{modal confinement}
\rightarrow
n_{\mathrm{eff}}
$$

This gives us a useful waveguide-theory interpretation of the diameter-dependent effective index.

---

# 12. The Normalized Propagation Constant

For a conventional step-index waveguide, it is useful to define

$$
b
=

\frac{
n_{\mathrm{eff}}^2-n_{\mathrm{out}}^2
}{
n_{\mathrm p}^2-n_{\mathrm{out}}^2
}
$$

Rearranging,

$$
n_{\mathrm{eff}}^2
==================

n_{\mathrm{out}}^2
+
b
\left(
n_{\mathrm p}^2-n_{\mathrm{out}}^2
\right)
$$

Therefore,

$$
\boxed{
n_{\mathrm{eff}}
================

\sqrt{
n_{\mathrm{out}}^2
+
b
\left(
n_{\mathrm p}^2-n_{\mathrm{out}}^2
\right)
}
$$

The parameter $b$ depends on the waveguide geometry and wavelength.

Since the geometry determines $V$, and $V$ determines the modal solution, we can conceptually write

$$
\boxed{
D
\rightarrow
V
\rightarrow
b
\rightarrow
n_{\mathrm{eff}}
}
$$

This provides a mathematical bridge between nanopillar geometry and effective index.

However, dielectric metalens pillars often have high index contrast and dimensions for which simple weak-guidance waveguide formulas are not quantitatively accurate.

For actual designs, the vectorial Maxwell equations are solved numerically.

---

# 13. $n_{\mathrm{eff}}$ Is an Eigenvalue

This point deserves emphasis.

When we solve Maxwell's equations for the nanopillar, we are solving an electromagnetic eigenvalue problem.

For a mode of the form

$$
\mathbf{E}(x,y,z)
=================

\mathbf{E}_t(x,y)e^{i\beta z}
$$

the transverse field distribution and propagation constant must satisfy Maxwell's equations simultaneously.

Schematically,

$$
\hat{\mathcal L}
\mathbf{E}_t
============

\beta^2
\mathbf{E}_t
$$

The allowed values

$$
\beta_1,\beta_2,\beta_3,\ldots
$$

represent different modes.

For each mode,

$$
n_{\mathrm{eff},m}
==================

\frac{\beta_m}{k_0}
$$

Thus, more precisely, we should write

$$
\boxed{
n_{\mathrm{eff},m}
==================

\frac{\beta_m}{k_0}
}
$$

The effective index is therefore not a universal number associated with the nanopillar.

It is associated with a **specific electromagnetic mode**.

This is why polarization, geometry, wavelength, and surrounding environment can all affect the effective index.

---

# 14. Polarization Matters

A real nanopillar is not necessarily polarization independent.

The electromagnetic field has vector character.

Therefore, different polarization states can excite different modes.

For a symmetric circular pillar, the response can be approximately polarization independent under suitable conditions.

For an anisotropic structure such as a rectangular nanobrick or nanofin, the effective index can depend strongly on the polarization direction.

We may then write

$$
n_{\mathrm{eff},x}
\neq
n_{\mathrm{eff},y}
$$

Consequently,

$$
\Phi_x
======

k_0n_{\mathrm{eff},x}H
$$

while

$$
\Phi_y
======

k_0n_{\mathrm{eff},y}H
$$

This polarization dependence is not necessarily a problem.

In fact, it is the physical basis of many polarization-dependent and geometric-phase metasurfaces.

---

# 15. The Phase Accumulated Through the Pillar

Once the effective index is known, the propagation phase is straightforward.

The propagation constant is

$$
\beta
=====

k_0n_{\mathrm{eff}}
$$

The phase accumulated over height $H$ is

$$
\Phi_{\mathrm{prop}}
====================

\beta H
$$

Therefore,

$$
\boxed{
\Phi_{\mathrm{prop}}
====================

\frac{2\pi}{\lambda_0}
n_{\mathrm{eff}}H
}
$$

For two meta-atoms with effective indices

$$
n_{\mathrm{eff},1}
$$

and

$$
n_{\mathrm{eff},2}
$$

the phase difference is

$$
\Delta\Phi
==========

\frac{2\pi H}{\lambda_0}
\left(
n_{\mathrm{eff},2}
------------------

n_{\mathrm{eff},1}
\right)
$$

Thus,

$$
\boxed{
\Delta\Phi
==========

k_0H\Delta n_{\mathrm{eff}}
}
$$

This equation is particularly useful for metalens design.

---

# 16. How Much Height Is Needed for $2\pi$ Phase Coverage?

A typical phase-only metalens requires a complete phase range

$$
0\leq\Phi<2\pi
$$

Suppose the available effective-index range is

$$
\Delta n_{\mathrm{eff}}
=======================

## n_{\mathrm{eff,max}}

n_{\mathrm{eff,min}}
$$

The corresponding phase range is

$$
\Delta\Phi
==========

k_0H\Delta n_{\mathrm{eff}}
$$

To obtain at least one full $2\pi$ cycle,

$$
k_0H\Delta n_{\mathrm{eff}}
\geq
2\pi
$$

Using

$$
k_0=\frac{2\pi}{\lambda_0}
$$

we obtain

$$
\frac{2\pi}{\lambda_0}
H\Delta n_{\mathrm{eff}}
\geq
2\pi
$$

Therefore,

$$
\boxed{
H\Delta n_{\mathrm{eff}}
\geq
\lambda_0
}
$$

or approximately,

$$
\boxed{
H
\geq
\frac{\lambda_0}{\Delta n_{\mathrm{eff}}}
}
$$

This provides an important first-order design rule.

A larger effective-index range means that a shorter structure can provide a full $2\pi$ phase range.

---

# 17. Why the Simple Formula Is Not the Whole Story

At this point, it may seem that metalens design is trivial:

1. calculate $n_{\mathrm{eff}}(D)$;
2. calculate $\Phi(D)$;
3. choose $D$ for the desired phase.

Real metalens design is more complicated.

The nanopillar is finite.

It has an entrance interface.

It has an exit interface.

It can reflect light.

It can support resonances.

It can scatter light.

It can interact with neighboring pillars.

Therefore, the transmitted field is not determined exclusively by propagation through an infinite waveguide.

The more complete description is

$$
\boxed{
t(D,H,\lambda)
==============

|t(D,H,\lambda)|
e^{i\Phi(D,H,\lambda)}
}
$$

The phase

$$
\Phi
$$

may contain contributions from

* propagation,
* interface reflections,
* Fabry–Pérot-like interference,
* resonant modes,
* radiation,
* coupling to neighboring structures.

Thus,

$$
\boxed{
\Phi
\neq
k_0n_{\mathrm{eff}}H
}
$$

in a strict sense for every finite meta-atom.

Rather,

$$
\boxed{
\Phi
\approx
k_0n_{\mathrm{eff}}H
}
$$

when propagation through the guided mode is the dominant contribution.

---

# 18. The Truncated-Waveguide Picture

A useful physical model is therefore to think of the dielectric meta-atom as a **truncated waveguide**.

The incident light enters the pillar.

Inside the pillar, the field approximately forms a guided mode.

The mode propagates through the height $H$.

At the bottom interface, the field radiates into the substrate.

Schematically,

$$
\text{free-space wave}
\rightarrow
\boxed{\text{guided mode}}
\rightarrow
\text{transmitted wave}
$$

The phase accumulated during the propagation section is

$$
\Phi_{\mathrm{prop}}
====================

\beta H
$$

But the interfaces can modify both amplitude and phase.

Therefore, the actual transmission coefficient is better represented as

$$
t=t(D,H,\lambda)
$$

This is why numerical electromagnetic simulations are normally used to characterize a practical meta-atom.

---

# 19. Fabry–Pérot-Like Resonances

Because the nanopillar has two interfaces, part of the electromagnetic field can reflect from each interface.

The reflected waves can interfere.

This creates Fabry–Pérot-like resonant behavior.

The simplest resonance condition resembles

$$
2\beta H+\phi_{r1}+\phi_{r2}=2\pi m
$$

where

* $\phi_{r1}$ and $\phi_{r2}$ are reflection phases,
* $m$ is an integer.

Using

$$
\beta=k_0n_{\mathrm{eff}}
$$

we can write

$$
2k_0n_{\mathrm{eff}}H
+
\phi_{r1}
+
\phi_{r2}
=========

2\pi m
$$

Therefore, even the resonant condition depends on the effective modal index.

This demonstrates an important connection:

$$
\boxed{
n_{\mathrm{eff}}
\text{ influences both propagation phase and resonant behavior.}
}
$$

The propagation and resonance pictures are therefore not completely unrelated.

---

# 20. Propagation Phase and Resonant Phase Are Different Regimes

It is useful to distinguish two limiting pictures.

### Propagation-dominated meta-atom

The nanopillar behaves primarily as a waveguide.

$$
\boxed{
\Phi
\approx
\beta H
=======

k_0n_{\mathrm{eff}}H
}
$$

Changing geometry mainly changes the modal propagation constant.

### Resonant meta-atom

The geometry supports a strong electromagnetic resonance.

The transmission coefficient becomes strongly frequency dependent:

$$
t(\omega)
=========

|t(\omega)|e^{i\Phi(\omega)}
$$

Near resonance, the phase can change rapidly.

In this regime, describing the phase solely through a constant $n_{\mathrm{eff}}$ is generally insufficient.

The two descriptions therefore represent different levels of approximation.

---

# 21. The Full Meta-Atom Response

For practical design, the quantity we ultimately care about is not $n_{\mathrm{eff}}$ itself.

It is the **complex transmission coefficient**:

$$
\boxed{
t=|t|e^{i\Phi}
}
$$

Why?

Because a metalens must satisfy two conditions simultaneously:

### Phase condition

The phase should be close to the target value:

$$
\Phi(D)
\approx
\Phi_{\mathrm{target}}
$$

### Amplitude condition

The transmission should remain high:

$$
|t(D)|\approx1
$$

A meta-atom that provides exactly the required phase but transmits almost no light is not useful.

Therefore, the ideal meta-atom library should provide

$$
\boxed{
|t|\approx1
}
$$

while covering

$$
\boxed{
0\leq\Phi<2\pi
}
$$

This is one of the central challenges in practical metalens design.

---

# 22. From the Target Phase to the Meta-Atom

Suppose the metalens must focus a normally incident plane wave to a point at focal length $f$.

The desired phase profile is

$$
\Phi_{\mathrm{target}}(r)
=========================

-k_0n_2
\left[
\sqrt{r^2+f^2}-f
\right]
$$

Because phase is periodic,

$$
\Phi
\equiv
\Phi+2\pi m
$$

we can wrap the phase into

$$
0\leq\Phi<2\pi
$$

We then need to find a meta-atom whose response satisfies

$$
\Phi(D)
\approx
\Phi_{\mathrm{target}}(r)
$$

Thus,

$$
\boxed{
\Phi_{\mathrm{target}}(r)
\rightarrow
D(r)
}
$$

The metalens geometry is therefore obtained by solving an inverse mapping problem.

---

# 23. Building a Meta-Atom Library

This is where FDTD and RCWA become essential.

Choose a fixed

$$
\lambda_0
$$

pillar height

$$
H
$$

period

$$
P
$$

material, and surrounding environment.

Then sweep the diameter:

$$
D_1,D_2,D_3,\ldots,D_N
$$

For each geometry, calculate the transmitted field.

The simulation produces

$$
t(D_j)
======

|t(D_j)|e^{i\Phi(D_j)}
$$

We can therefore construct a library:

$$
\boxed{
D_j
\longrightarrow
\left[
|t(D_j)|,\Phi(D_j)
\right]
}
$$

The library is then used to find the geometry that best matches the desired phase.

For example,

$$
D(r)
====

\operatorname*{arg,min}*{D_j}
\left|
\Phi(D_j)-\Phi*{\mathrm{target}}(r)
\right|
$$

In a more realistic optimization, amplitude would also be included:

$$
D(r)
====

\operatorname*{arg,min}*{D_j}
\mathcal{L}
\left(
|t(D_j)|,
\Phi(D_j),
\Phi*{\mathrm{target}}(r)
\right)
$$

This is the computational bridge between electromagnetic simulation and the final metalens layout.

---

# 24. Why FDTD or RCWA?

The effective-index theory gives us physical intuition.

But a real meta-atom is a finite three-dimensional electromagnetic structure.

Therefore, to calculate its actual response, we solve Maxwell's equations numerically.

Two commonly used methods are:

### FDTD

The **finite-difference time-domain** method discretizes Maxwell's equations in space and time and directly calculates the electromagnetic response.

It is especially useful when the structure is geometrically complex.

### RCWA

**Rigorous coupled-wave analysis** expands the electromagnetic fields into spatial harmonics and is particularly efficient for periodic structures.

For a periodic meta-atom array, RCWA can be extremely efficient for parameter sweeps.

Both methods can provide the complex transmission coefficient

$$
t=|t|e^{i\Phi}
$$

The result is more reliable for design than relying solely on the simplified propagation equation.

---

# 25. The Effective-Index Model and Numerical Simulation Work Together

It is important not to think of analytical theory and numerical simulation as competing descriptions.

They serve different purposes.

The effective-index model explains the physics:

$$
D
\rightarrow
\text{mode}
\rightarrow
\beta
\rightarrow
n_{\mathrm{eff}}
\rightarrow
\Phi
$$

Numerical simulation provides the actual response:

$$
D
\rightarrow
t(D)
====

|t(D)|e^{i\Phi(D)}
$$

The first gives intuition.

The second gives quantitative design data.

A good metalens design uses both.

---

# 26. A Deeper Interpretation of $n_{\mathrm{eff}}$

We can now give a more precise physical interpretation.

The effective index is not a hidden material property.

It is a convenient way of expressing the phase evolution of a guided electromagnetic mode.

The mode has propagation constant

$$
\beta
$$

The phase of the mode evolves as

$$
e^{i\beta z}
$$

If we compare this with propagation in a homogeneous material,

$$
e^{ik_0nz}
$$

we can identify

$$
\beta=k_0n_{\mathrm{eff}}
$$

Therefore,

$$
\boxed{
n_{\mathrm{eff}}
\text{ is the refractive index that a homogeneous medium would need to have to produce the same longitudinal phase accumulation as the mode.}
}
$$

This is perhaps the cleanest physical definition.

---

# 27. Phase Velocity and Effective Index

The effective index also determines the phase velocity of the mode.

Since

$$
\beta
=====

\frac{\omega}{v_{\mathrm{ph}}}
$$

and

$$
\beta
=====

# k_0n_{\mathrm{eff}}

\frac{\omega}{c}n_{\mathrm{eff}}
$$

we obtain

$$
\frac{\omega}{v_{\mathrm{ph}}}
==============================

\frac{\omega}{c}n_{\mathrm{eff}}
$$

Therefore,

$$
\boxed{
v_{\mathrm{ph}}
===============

\frac{c}{n_{\mathrm{eff}}}
}
$$

A larger effective index therefore corresponds to a smaller phase velocity.

But the most useful interpretation for metalens design remains the phase accumulation:

$$
\boxed{
\Phi=\beta H
}
$$

The phase is what the metalens ultimately needs to control.

---

# 28. Effective Index Is Dispersive

Another important point is that

$$
n_{\mathrm{eff}}
$$

generally depends on wavelength.

We should therefore write

$$
\boxed{
n_{\mathrm{eff}}
================

n_{\mathrm{eff}}(\lambda,D,H,P,\ldots)
}
$$

Consequently,

$$
\Phi(\lambda)
=============

\frac{2\pi}{\lambda}
n_{\mathrm{eff}}(\lambda)H
$$

This wavelength dependence is one reason why a metalens designed for one wavelength does not automatically produce exactly the same phase profile at another wavelength.

Thus, even in a propagation-phase design,

$$
\boxed{
\text{phase control}
\neq
\text{achromatic control}
}
$$

Achromatic metalenses require additional design strategies to compensate for the wavelength dependence of the phase response.

---

# 29. Phase Delay and Group Delay

The distinction between phase and group delay becomes important when discussing broadband metalenses.

The phase is

$$
\Phi(\omega)
$$

The corresponding group delay is

$$
\boxed{
\tau_g
======

\frac{d\Phi}{d\omega}
}
$$

For the simple propagation model,

$$
\Phi
====

\beta(\omega)H
$$

Therefore,

$$
\tau_g
======

H\frac{d\beta}{d\omega}
$$

Since

$$
\beta
=====

\frac{\omega}{c}
n_{\mathrm{eff}}(\omega)
$$

we obtain

$$
\boxed{
\tau_g
======

\frac{H}{c}
\left[
n_{\mathrm{eff}}
+
\omega
\frac{dn_{\mathrm{eff}}}{d\omega}
\right]
}
$$

The quantity in brackets is the modal group index,

$$
n_g
===

n_{\mathrm{eff}}
+
\omega
\frac{dn_{\mathrm{eff}}}{d\omega}
$$

Thus,

$$
\boxed{
\tau_g
======

\frac{Hn_g}{c}
}
$$

This distinction becomes particularly important when designing broadband or achromatic metalenses.

---

# 30. The Meta-Atom as a Local Phase Element

We can now return to the original purpose of the meta-atom.

A metalens has a target phase profile

$$
\Phi_{\mathrm{target}}(x,y)
$$

The meta-atoms are designed so that

$$
\Phi_{\mathrm{meta}}(x,y)
\approx
\Phi_{\mathrm{target}}(x,y)
$$

Therefore, the metasurface acts approximately as a spatially varying transmission function:

$$
\boxed{
t(x,y)
======

A(x,y)e^{i\Phi(x,y)}
}
$$

For an ideal phase-only metalens,

$$
A(x,y)\approx1
$$

so

$$
\boxed{
t(x,y)
\approx
e^{i\Phi_{\mathrm{target}}(x,y)}
}
$$

The meta-atoms are therefore the physical mechanism that implements the mathematical transmission function required by the optical design.

---

# 31. The Full Design Chain

We can now connect the entire theory.

### Optical requirement

Suppose we want a focal length

$$
f
$$

### Target phase

We calculate

$$
\Phi_{\mathrm{target}}(r)
=========================

-k_0n_2
\left(
\sqrt{r^2+f^2}-f
\right)
$$

### Phase wrapping

We calculate

$$
\Phi_{\mathrm{wrapped}}
=======================

\Phi_{\mathrm{target}}
\bmod 2\pi
$$

### Meta-atom response

We calculate

$$
t(D)
====

|t(D)|e^{i\Phi(D)}
$$

### Geometry selection

We select

$$
D(r)
$$

such that

$$
\Phi(D(r))
\approx
\Phi_{\mathrm{wrapped}}(r)
$$

### Fabrication

The resulting spatial distribution of diameters is fabricated as a metasurface.

The complete chain is

$$
\boxed{
\begin{aligned}
\text{Desired focus}
&\rightarrow
\Phi_{\mathrm{target}}(r)
\
&\rightarrow
\Phi_{\mathrm{wrapped}}(r)
\
&\rightarrow
t(D)
\
&\rightarrow
D(r)
\
&\rightarrow
\text{Metalens}.
\end{aligned}
}
$$

---

# 32. The Most Important Concept

The most important conceptual transition is this:

A conventional lens controls light by changing its **macroscopic geometry**.

A metalens controls light by changing the **local electromagnetic response** of many subwavelength structures.

For a propagation-phase dielectric meta-atom,

$$
\boxed{
\text{geometry}
\rightarrow
\text{modal confinement}
\rightarrow
\beta
\rightarrow
n_{\mathrm{eff}}
\rightarrow
\text{phase}
}
$$

This is why a flat surface can perform the optical function of a much thicker conventional lens.

The surface itself does not need to be curved.

The phase response is encoded into its microscopic geometry.

---

# 33. A More Accurate Mental Model

It is useful to replace the simple statement

> "A nanopillar delays the light."

with a more rigorous statement:

> **A dielectric nanopillar modifies the electromagnetic boundary-value problem, producing a guided or quasi-guided mode with a geometry-dependent propagation constant. The resulting phase accumulation through the finite structure modifies the complex transmitted field.**

Mathematically,

$$
\boxed{
\epsilon(\mathbf{r};D)
\rightarrow
\mathbf{E}_m(\mathbf{r};D),\beta_m(D)
\rightarrow
t(D)
}
$$

and approximately, in the propagation-dominated regime,

$$
\boxed{
\beta(D)
\rightarrow
n_{\mathrm{eff}}(D)
\rightarrow
\Phi(D)
}
$$

This is the rigorous electromagnetic foundation of the propagation-phase meta-atom.

---

# 34. Final Picture

A meta-atom may look tiny, but its physics is not trivial.

Its geometry determines the electromagnetic field distribution.

The field distribution determines the supported modes.

The modes determine the propagation constant.

The propagation constant determines the effective index.

The effective index determines the propagation phase.

And the collection of all these local phase responses determines the optical behavior of the entire metasurface.

The hierarchy is therefore

$$
\boxed{
\text{Geometry}
\rightarrow
\text{Maxwell's equations}
\rightarrow
\text{Mode}
\rightarrow
\beta
\rightarrow
n_{\mathrm{eff}}
\rightarrow
\Phi
\rightarrow
\text{Wavefront}
}
$$

For a propagation-phase dielectric meta-atom,

$$
\boxed{
n_{\mathrm{eff}}
================

\frac{\beta}{k_0}
}
$$

and

$$
\boxed{
\Phi_{\mathrm{prop}}
====================

# \beta H

\frac{2\pi}{\lambda_0}
n_{\mathrm{eff}}H
}
$$

This gives the physical connection between **nanostructure geometry** and **optical phase**.

But for a real finite meta-atom, the complete response is better described by

$$
\boxed{
t(D,H,\lambda)
==============

|t|e^{i\Phi}
}
$$

Therefore, the effective-index model should be regarded as the **physical intuition and first-order analytical model**, while FDTD, RCWA, or eigenmode calculations provide the quantitative response required for actual metalens design.

And this brings us to the next level of the problem:

> **If a meta-atom must provide a particular phase, how do we actually design its geometry to obtain that phase?**

That is the role of the **meta-atom library**: a systematic mapping between geometry and electromagnetic response.
