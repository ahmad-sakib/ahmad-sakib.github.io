---
title: "Meta-Atom Library"
layout: single
permalink: /metaoptics/metalenses/meta-atom-library/
author_profile: false
sidebar:
  nav: "metalenses"
---

<!-- Content will be added later. -->


# Meta-Atom Library

In the previous lessons, we learned that a metalens is built from a large collection of **meta-atoms**, and that each meta-atom can modify the phase, amplitude, polarization, or direction of transmitted light.

But this immediately creates a practical problem:

> **How do we know which meta-atom to place at each position of the metalens?**

The answer is the **meta-atom library**.

A meta-atom library is a database of simulated or experimentally characterized nanostructures and their optical responses. It provides the connection between the abstract optical function we want and the physical nanostructures that we can fabricate.

The basic design pipeline is therefore

$$
\boxed{
\text{Desired phase}
\rightarrow
\text{Meta-atom response}
\rightarrow
\text{Geometry}
}
$$

This lesson develops that idea carefully.

---

# 1. From a Phase Profile to a Physical Structure

Suppose we have already derived the phase profile required for a metalens,

$$
\phi_{\mathrm{target}}(x,y).
$$

For every position $(x,y)$, we need a nanostructure that produces approximately that phase.

For example, suppose the target phase at one position is

$$
\phi_{\mathrm{target}}=1.8\pi.
$$

We cannot simply tell the fabrication system:

> "Put a phase of $1.8\pi$ here."

Phase is not itself a physical object.

Instead, we need to choose a physical structure—perhaps a silicon nanopillar—with dimensions such that its transmitted field has approximately that phase.

For a cylindrical nanopillar, the design parameters might include

$$
d=\text{diameter},
$$

$$
h=\text{height},
$$

and

$$
p=\text{period},
$$

where $p$ is the center-to-center spacing between neighboring meta-atoms.

The optical response can then be represented schematically as

$$
t(d,h,p,\lambda,\mathrm{pol})
=============================

|t|e^{i\phi(d,h,p,\lambda,\mathrm{pol})}.
$$

Thus, each geometry corresponds to a complex transmission coefficient.

The metalens design problem becomes

$$
\boxed{
\phi_{\mathrm{target}}(x,y)
\rightarrow
(d,h,p)
}
$$

through the optical response of the meta-atoms.

---

# 2. What Is a Meta-Atom Library?

A meta-atom library is essentially a **lookup table**.

For each candidate geometry, we calculate its optical response.

A simplified library might look like this:

| Diameter $d$ | Height $h$ | Transmission $T$ | Phase $\phi$ |
| -----------: | ---------: | ---------------: | -----------: |
|        80 nm |     600 nm |             0.92 |    $0.12\pi$ |
|        90 nm |     600 nm |             0.94 |    $0.37\pi$ |
|       100 nm |     600 nm |             0.96 |    $0.71\pi$ |
|       110 nm |     600 nm |             0.95 |    $1.08\pi$ |
|       120 nm |     600 nm |             0.93 |    $1.46\pi$ |
|       130 nm |     600 nm |             0.89 |    $1.83\pi$ |
|       140 nm |     600 nm |             0.84 |    $2.15\pi$ |
|       150 nm |     600 nm |             0.76 |    $2.48\pi$ |

The exact values are not important here. The concept is.

If the metalens requires

$$
\phi_{\mathrm{target}}=1.83\pi,
$$

we can select the meta-atom whose simulated response is closest to that phase.

In this simplified example,

$$
d\approx130~\mathrm{nm}.
$$

The library therefore converts an **optical requirement** into a **fabrication parameter**.

---

# 3. Why Do We Need a Library?

One might ask:

> **Why not simulate every meta-atom directly while designing the entire metalens?**

Because a realistic metalens can contain thousands or millions of individual elements.

Imagine a metalens containing

$$
10^6
$$

meta-atoms.

Running a full electromagnetic simulation for every possible geometry at every location would be extremely expensive.

Instead, we exploit an important idea:

> **The same meta-atom geometry can be reused at many different positions.**

We therefore simulate a set of candidate structures beforehand,

$$
{g_1,g_2,g_3,\ldots,g_N}.
$$

For each geometry $g_i$, we calculate

$$
t_i=A_i e^{i\phi_i}.
$$

The resulting collection

$$
\left{
g_i,A_i,\phi_i
\right}_{i=1}^{N}
$$

is the meta-atom library.

The final metalens is then assembled by selecting elements from this library.

---

# 4. The Library Is More Than a Phase Table

A common mistake is to think that a meta-atom library contains only phase values.

It does not.

A useful library should contain the optical information required for the particular design problem.

At minimum, we may need

$$
\boxed{
\text{Geometry}
+
\text{Amplitude}
+
\text{Phase}
}
$$

but depending on the application, we may also need

$$
\boxed{
\text{Polarization}
+
\text{Wavelength}
+
\text{Angle}
+
\text{Diffraction information}
}
$$

and other quantities.

For example, a library entry might contain

$$
g_i=(d_i,h_i,p_i)
$$

together with

$$
t_i(\lambda)
============

A_i(\lambda)e^{i\phi_i(\lambda)}.
$$

For polarization-sensitive structures, the response may instead be represented by a Jones matrix:

$$
\mathbf{J}*i=
\begin{pmatrix}
t*{xx} & t_{xy}\
t_{yx} & t_{yy}
\end{pmatrix}.
$$

This becomes particularly important for geometric-phase metasurfaces, where the response depends explicitly on polarization.

Therefore, the appropriate content of a library depends on the physical mechanism being used.

---

# 5. Building a Meta-Atom Library

The construction of a library generally follows several steps.

## Step 1 — Choose the Material

First, we choose the material system.

Examples include:

* Silicon
* Titanium dioxide
* Silicon nitride
* Gallium nitride
* Plasmonic materials such as gold or silver

The material determines the available refractive index, absorption, dispersion, and fabrication constraints.

For a dielectric meta-atom, we might have

$$
n_{\mathrm{meta}}>n_{\mathrm{background}}.
$$

A sufficiently large refractive-index contrast allows the structure to strongly modify the optical field.

---

## Step 2 — Choose the Geometry

Next, we define the geometry.

For example, consider cylindrical nanopillars.

The design parameters could be

$$
\mathbf{g}=(d,h,p).
$$

If the height and period are fixed, the diameter becomes the primary design variable:

$$
\mathbf{g}=d.
$$

We then sweep through a range

$$
d_1,d_2,d_3,\ldots,d_N.
$$

Each diameter represents a different meta-atom.

The same idea applies to other geometries.

For example, for a rectangular nanofin we might vary

$$
\mathbf{g}=(L,W,H,\alpha),
$$

where $\alpha$ is the orientation angle.

The choice of parameters depends on the phase-control mechanism and the application.

---

# 6. Simulate Each Geometry

Each candidate structure is then simulated using an electromagnetic solver.

Possible methods include:

* FDTD
* RCWA
* FEM
* Frequency-domain electromagnetic solvers

The simulation produces the complex electromagnetic response.

For a transmitted field,

$$
E_{\mathrm{out}}=tE_{\mathrm{in}},
$$

where

$$
t=|t|e^{i\phi}.
$$

Therefore,

$$
|t|
$$

gives the transmission amplitude, while

$$
\phi=\arg(t)
$$

gives the transmission phase.

The corresponding power transmission is

$$
T=|t|^2
$$

when the normalization and surrounding media are handled consistently.

The library stores these quantities for every candidate geometry.

---

# 7. Phase Coverage

One of the most important properties of a meta-atom library is its **phase coverage**.

For a conventional phase-only metalens, we generally want to realize a complete $2\pi$ phase range:

$$
0\leq\phi<2\pi.
$$

Why?

Because the required lens phase can contain any value modulo $2\pi$.

Suppose the target phase is

$$
\phi_{\mathrm{target}}=3.7\pi.
$$

Since phase is periodic,

$$
3.7\pi
\equiv
1.7\pi
\pmod{2\pi}.
$$

Therefore, we only need to realize

$$
0\leq\phi<2\pi.
$$

A useful library should therefore provide approximately

$$
\boxed{
\Delta\phi\geq2\pi
}
$$

while maintaining high transmission over the usable phase range.

However, $2\pi$ phase coverage alone does not guarantee a good metalens.

---

# 8. Phase Coverage Alone Is Not Enough

Suppose two meta-atoms provide the required phase.

Meta-atom A:

$$
\phi_A=1.50\pi,
\qquad
T_A=0.95.
$$

Meta-atom B:

$$
\phi_B=1.50\pi,
\qquad
T_B=0.25.
$$

Both have essentially the same phase.

But they are clearly not equally useful.

Meta-atom A transmits much more light.

Therefore, when constructing a library, we want

$$
\boxed{
\text{large phase coverage}
+
\text{high transmission}
}
$$

rather than phase coverage alone.

This is one of the central design trade-offs in metasurfaces.

A good library should ideally provide a nearly complete phase range **without passing through regions of very low efficiency**.

---

# 9. The Phase–Transmission Map

A particularly useful way to visualize a library is to plot transmission against phase.

For every geometry $g_i$, we have

$$
(\phi_i,T_i).
$$

Plotting these points gives a **phase–transmission map**.

Ideally, we want to find a set of structures covering

$$
0\rightarrow2\pi
$$

while maintaining high $T$.

Conceptually, the desired region is a broad high-transmission band extending across the entire phase range.

The goal is not simply to maximize the number of structures.

The goal is to obtain a **useful set of high-efficiency structures distributed across the required phase range**.

---

# 10. Phase Quantization

In an ideal continuous system, we might choose any phase:

$$
\phi\in[0,2\pi).
$$

A real library contains only a finite number of structures.

Therefore, the available phases are discrete:

$$
\phi_1,\phi_2,\ldots,\phi_N.
$$

Suppose we have only eight available phase states.

Then we might approximate the continuous phase profile using

$$
\phi_n=\frac{2\pi n}{8},
\qquad
n=0,\ldots,7.
$$

The metalens then becomes a **quantized phase profile**.

This introduces phase error.

If the desired phase is

$$
\phi_{\mathrm{target}},
$$

and the selected library element provides

$$
\phi_{\mathrm{selected}},
$$

then the local phase error can be written as

$$
\Delta\phi
==========

\operatorname{wrap}*{2\pi}
\left(
\phi*{\mathrm{selected}}
------------------------

\phi_{\mathrm{target}}
\right).
$$

A larger and better-distributed library generally allows smaller phase errors.

However, increasing the number of available structures also increases simulation and fabrication complexity.

Thus,

$$
\boxed{
\text{Library resolution}
\leftrightarrow
\text{Computational and fabrication cost}
}
$$

---

# 11. Nearest-Phase Selection

The simplest library-selection algorithm is to choose the structure whose phase is closest to the target.

For each position $(x,y)$, calculate

$$
\phi_{\mathrm{target}}(x,y).
$$

Then select

$$
i^\ast
======

\arg\min_i
\left|
\operatorname{wrap}*{2\pi}
\left(
\phi_i-\phi*{\mathrm{target}}
\right)
\right|.
$$

The phase difference must be measured modulo $2\pi$.

For example,

$$
0.1\pi
$$

and

$$
1.9\pi
$$

are actually close in phase because

$$
1.9\pi-2\pi=-0.1\pi.
$$

Therefore, ordinary absolute subtraction is not sufficient when selecting phase values.

This nearest-phase approach is simple and useful, but it does not necessarily produce the best overall device.

---

# 12. Phase Matching vs. Efficiency Optimization

Nearest-phase matching is useful, but it is not necessarily optimal.

Suppose we have three candidate meta-atoms:

| Meta-atom | Phase error | Transmission |
| --------- | ----------: | -----------: |
| A         |   $0.01\pi$ |         0.40 |
| B         |   $0.04\pi$ |         0.92 |
| C         |   $0.08\pi$ |         0.96 |

A phase-only algorithm would choose A.

But A wastes most of the incident light.

Depending on the application, B or C may produce a better overall metalens.

This leads to a more general optimization problem.

Instead of minimizing only

$$
|\Delta\phi|,
$$

we can define a cost function such as

$$
C_i
===

w_\phi |\Delta\phi_i|
+
w_T(1-T_i),
$$

where

$$
w_\phi
$$

and

$$
w_T
$$

determine the relative importance of phase accuracy and transmission.

The selected meta-atom is then

$$
i^\ast=\arg\min_i C_i.
$$

This is the beginning of moving from simple lookup-table design toward **optimization-based metasurface design**.

---

# 13. Local Periodic Approximation

There is an important assumption behind the standard meta-atom library approach.

When we simulate one meta-atom, we usually do not simulate the entire metalens.

Instead, we place the meta-atom in a periodic environment.

Conceptually,

$$
\boxed{
\text{Infinite periodic array}
\rightarrow
\text{simulate one unit cell}
}
$$

This is computationally convenient.

The idea is that if the meta-atoms are sufficiently subwavelength and their geometry varies gradually across the metasurface, the response of the periodic unit cell can approximately describe the local behavior of the meta-atom inside the complete device.

This is commonly referred to as the **local periodic approximation (LPA)**.

The approximation can be written schematically as

$$
t(x,y)
\approx
t_{\mathrm{periodic}}
\left[g(x,y)\right].
$$

This assumption is one of the foundations of conventional library-based metalens design.

---

# 14. Why Can the Local Periodic Approximation Fail?

The approximation is not exact.

A real metalens is not an infinite periodic array.

The geometry changes from one position to another:

$$
g(x,y)\neq\text{constant}.
$$

Therefore, neighboring meta-atoms can interact through their electromagnetic near fields.

This becomes increasingly important when:

* the phase changes rapidly;
* the numerical aperture is high;
* the meta-atoms are strongly coupled;
* the unit-cell approximation is poor;
* the device operates close to resonances.

In such cases,

$$
t_{\mathrm{library}}
\neq
t_{\mathrm{actual}}.
$$

The library prediction may therefore differ from the response of the final metasurface.

This distinction becomes extremely important when designing high-performance or high-NA metalenses.

---

# 15. Wavelength Dependence

A meta-atom does not have one universal phase.

Its response depends on wavelength:

$$
t=t(\lambda).
$$

Therefore,

$$
\phi=\phi(\lambda),
$$

and

$$
T=T(\lambda).
$$

A library generated at a design wavelength

$$
\lambda_0
$$

is therefore fundamentally optimized for that wavelength.

For example, a meta-atom might provide

$$
\phi(\lambda_0)=\pi,
$$

but at another wavelength,

$$
\phi(\lambda_1)\neq\pi.
$$

This wavelength dependence contributes to the chromatic behavior of metalenses.

A broadband library therefore needs to characterize

$$
t(g,\lambda)
$$

over a range of wavelengths rather than at only one wavelength.

---

# 16. Polarization Dependence

The library may also depend on polarization.

For a polarization-insensitive cylindrical meta-atom,

$$
t_x\approx t_y.
$$

But for an anisotropic meta-atom,

$$
t_x\neq t_y.
$$

In that case, the geometry can manipulate different polarization components differently.

The response can therefore be represented using a Jones matrix,

$$
\mathbf{J}
\mathbf{E}_{\mathrm{in}}
========================

\mathbf{E}_{\mathrm{out}},
$$

where

$$
\mathbf{J}
==========

\begin{pmatrix}
t_{xx} & t_{xy}\
t_{yx} & t_{yy}
\end{pmatrix}.
$$

For polarization-dependent metasurfaces, a useful library may therefore contain

$$
\mathbf{J}(g,\lambda).
$$

This is especially important for geometric-phase metasurfaces.

---

# 17. Library Resolution

Another important design parameter is the spacing between library elements.

Suppose the diameter is swept from

$$
80~\mathrm{nm}
$$

to

$$
200~\mathrm{nm}.
$$

We could use a step of

$$
\Delta d=1~\mathrm{nm},
$$

or

$$
\Delta d=5~\mathrm{nm},
$$

or

$$
\Delta d=10~\mathrm{nm}.
$$

A smaller step provides a denser library.

That generally improves the ability to match the desired phase:

$$
\Delta\phi_{\mathrm{error}}\downarrow.
$$

But the computational cost increases:

$$
N_{\mathrm{simulations}}\uparrow.
$$

Thus,

$$
\boxed{
\text{Library resolution}
\leftrightarrow
\text{Computational cost}
}
$$

A practical library therefore balances phase resolution against simulation cost.

---

# 18. Fabrication Constraints

The best simulated library is not necessarily the best fabricable library.

Suppose the optimizer chooses structures with diameters

$$
101~\mathrm{nm},\quad
102~\mathrm{nm},\quad
103~\mathrm{nm},\quad
104~\mathrm{nm}.
$$

A fabrication process may not reliably distinguish such small differences.

Fabrication constraints therefore need to be considered during library construction.

Examples include:

* minimum feature size;
* minimum gap;
* maximum aspect ratio;
* sidewall angle;
* etching limitations;
* dimensional tolerances.

Therefore, a realistic library should satisfy

$$
g_i\in\mathcal{G}_{\mathrm{fabricable}}.
$$

The design problem is not simply

$$
\text{maximize optical performance}.
$$

Instead, it is

$$
\boxed{
\text{maximize optical performance}
\quad
\text{subject to fabrication constraints}.
}
$$

This becomes increasingly important when moving from simulation to experimental realization.

---

# 19. Robust Meta-Atom Libraries

Fabrication is never perfectly exact.

Suppose the intended diameter is

$$
d=120~\mathrm{nm},
$$

but fabrication produces

$$
d=118~\mathrm{nm}
$$

or

$$
d=122~\mathrm{nm}.
$$

The optical response therefore changes:

$$
t(120)
\neq
t(118)
\neq
t(122).
$$

A useful library should therefore consider the sensitivity of the optical response to fabrication errors.

One way to quantify phase sensitivity is

$$
\frac{\partial\phi}{\partial d}.
$$

A large value of

$$
\left|\frac{\partial\phi}{\partial d}\right|
$$

means that a small fabrication error can cause a significant phase shift.

Therefore, two meta-atoms with similar nominal performance may have very different robustness.

This gives another important design criterion:

$$
\boxed{
\text{Optical performance}
+
\text{Fabrication tolerance}
}
$$

The best meta-atom is therefore not always the one with the highest simulated efficiency under ideal conditions.

---

# 20. From Library to Metalens

We can now connect everything together.

Suppose the desired metalens phase is

$$
\phi_{\mathrm{target}}(x,y).
$$

At every position, we search the library

$$
\mathcal{L}
===========

\left{
g_i,\phi_i,T_i
\right}.
$$

We then select the appropriate geometry:

$$
g^\ast(x,y)
===========

\operatorname{Select}
\left[
\phi_{\mathrm{target}}(x,y),
\mathcal{L}
\right].
$$

The final metalens is therefore a spatial arrangement of selected library elements.

More explicitly,

$$
\boxed{
\phi_{\mathrm{target}}(x,y)
\rightarrow
g^\ast(x,y)
\rightarrow
\text{fabricated metalens}.
}
$$

This is the fundamental bridge between electromagnetic theory and nanofabrication.

---

# 21. A Simple Example

Consider a one-dimensional phase profile

$$
\phi_{\mathrm{target}}(x).
$$

Suppose our library contains four elements:

| Element | Geometry   |    Phase | Transmission |
| ------- | ---------- | -------: | -----------: |
| A       | $d=100$ nm |      $0$ |         0.95 |
| B       | $d=110$ nm | $0.5\pi$ |         0.94 |
| C       | $d=120$ nm |    $\pi$ |         0.92 |
| D       | $d=130$ nm | $1.5\pi$ |         0.90 |

Suppose at three positions the target phases are

$$
\phi_1=0.1\pi,
$$

$$
\phi_2=0.55\pi,
$$

and

$$
\phi_3=1.4\pi.
$$

Using nearest-phase selection, we obtain

$$
\phi_1\rightarrow A,
$$

$$
\phi_2\rightarrow B,
$$

and

$$
\phi_3\rightarrow D.
$$

The physical structure of the metalens at those three positions is therefore

$$
\boxed{
A\quad B\quad D
}
$$

For a real metalens, this selection is performed over thousands or millions of spatial locations.

---

# 22. The Library as a Discretized Optical Material

There is a deeper way to think about a meta-atom library.

A conventional lens uses a continuous refractive-index distribution or a curved surface to manipulate the wavefront.

A metasurface instead creates an **effective spatially varying optical response** using discrete nanostructures.

The library therefore acts almost like a catalog of artificial optical responses.

Each meta-atom represents a possible local response:

$$
g_i
\rightarrow
t_i.
$$

The metalens design then becomes a spatial assignment problem:

$$
(x,y)
\rightarrow
g_i.
$$

This perspective is useful because it reveals why metasurface design is naturally connected to optimization and inverse design.

Instead of continuously varying a bulk material, we choose from a discrete set of engineered optical building blocks.

---

# 23. A Computational View

A basic library-generation workflow can be summarized as:

```text
Choose material
      ↓
Choose geometry family
      ↓
Define parameter sweep
      ↓
Run electromagnetic simulations
      ↓
Extract complex transmission
      ↓
Store amplitude and phase
      ↓
Build meta-atom library
      ↓
Calculate target phase profile
      ↓
Match target phase to library
      ↓
Generate metalens geometry
      ↓
Full-device electromagnetic validation
```

The important point is that **library generation and metalens design are two different computational problems**.

### Library generation

$$
\boxed{
g
\rightarrow
t(g)
}
$$

This is the **forward electromagnetic problem**.

We specify the geometry and calculate its optical response.

### Metalens design

$$
\boxed{
\phi_{\mathrm{target}}(x,y)
\rightarrow
g(x,y)
}
$$

This is an **inverse mapping**.

We start with the desired optical response and determine which physical geometries can produce it.

This distinction will become important when we later discuss **inverse design and optimization**.

---

# 24. What Makes a Good Meta-Atom Library?

A useful library should ideally have several properties.

### 1. Full phase coverage

$$
\Delta\phi\approx2\pi.
$$

The available structures should cover the complete phase range required by the optical function.

### 2. High transmission

$$
T\rightarrow1.
$$

Large phase coverage is much more useful when it can be achieved without sacrificing most of the transmitted power.

### 3. Fine phase resolution

$$
\Delta\phi_{\mathrm{quantization}}\rightarrow0.
$$

A denser set of phase states reduces phase quantization error.

### 4. Low sensitivity to fabrication errors

The selected structures should not be excessively sensitive to small geometric variations.

### 5. Appropriate bandwidth

The optical response should remain useful over the required wavelength range.

### 6. Appropriate polarization response

The library should match the polarization requirements of the application.

### 7. Manufacturability

The selected geometries must be physically realizable using the available fabrication process.

These requirements can conflict with each other.

That is why meta-atom design is fundamentally an **optimization problem**, rather than simply a search for maximum phase range.

---

# 25. The Most Important Concept

The most important idea of this lesson is:

> **A metalens is not designed directly from phase values. It is designed by mapping desired phase values onto physical meta-atoms whose electromagnetic responses have been characterized in a library.**

The chain is

$$
\boxed{
\text{Desired optical function}
\rightarrow
\text{Target phase}
\rightarrow
\text{Library lookup}
\rightarrow
\text{Meta-atom geometry}
}
$$

while the library itself is generated through the forward electromagnetic problem

$$
\boxed{
\text{Geometry}
\rightarrow
\text{Electromagnetic simulation}
\rightarrow
\text{Complex optical response}.
}
$$

Together, these two mappings form the basic architecture of conventional library-based metalens design.

---

# 26. From Meta-Atom Library to Metalens Design

We have now reached an important transition.

So far, we have considered the meta-atoms individually.

We know how to calculate their optical responses and how to organize those responses into a library.

But the final device is not a library.

The final device is a **spatial arrangement of meta-atoms**.

Therefore, the next step is to take

$$
\phi_{\mathrm{target}}(x,y)
$$

and determine the geometry at every position:

$$
g(x,y).
$$

In other words, we move from

$$
\boxed{\text{optical specification}}
$$

to

$$
\boxed{\text{physical metasurface geometry}}.
$$

This is where the complete metalens design begins.

---

# Conclusion

A meta-atom library is the practical bridge between **optical design** and **nanostructure fabrication**.

The desired optical function first produces a target phase profile,

$$
\phi_{\mathrm{target}}(x,y).
$$

The library then provides a collection of physical structures with known electromagnetic responses,

$$
g_i
\rightarrow
t_i
===

|t_i|e^{i\phi_i}.
$$

By comparing the desired phase with the available responses, we can select an appropriate meta-atom at each position of the metasurface:

$$
\boxed{
\phi_{\mathrm{target}}(x,y)
\rightarrow
g^\ast(x,y)
}
$$

A useful library, however, must provide more than $2\pi$ phase coverage. It should also consider transmission efficiency, phase resolution, wavelength dependence, polarization, fabrication constraints, and robustness.

The library-based approach therefore separates the problem into two stages:

$$
\boxed{
\text{Geometry}
\rightarrow
\text{Optical response}
}
$$

and

$$
\boxed{
\text{Desired optical response}
\rightarrow
\text{Geometry}.
}
$$

The first is a forward electromagnetic problem. The second is an inverse design problem.

With this framework in place, we can finally move from individual meta-atoms and their libraries to the design of the **complete metalens**.

> **Next: Metalens Design — from the target phase profile to the spatial arrangement of meta-atoms.**
