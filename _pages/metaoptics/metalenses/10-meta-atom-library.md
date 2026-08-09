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

A meta-atom library is a database of simulated or experimentally characterized nanostructures and their optical responses. It provides the connection between the abstract phase profile we want and the physical nanostructures we can fabricate.

The basic design pipeline is therefore

[
\boxed{
\text{Desired phase}
\rightarrow
\text{Meta-atom response}
\rightarrow
\text{Geometry}
}
]

This lesson develops that idea carefully.

---

## 1. From a Phase Profile to a Physical Structure

Suppose we have already derived the phase profile required for a metalens:

[
\phi_{\mathrm{target}}(x,y).
]

For every point ((x,y)), we need a nanostructure that produces approximately that phase.

For example, suppose the target phase at one position is

[
\phi_{\mathrm{target}}=1.8\pi.
]

We cannot simply tell the fabrication system:

> "Put a phase of (1.8\pi) here."

Phase is not itself a physical object.

Instead, we need to choose a physical structure—perhaps a silicon nanopillar—with dimensions such that its transmitted field has approximately that phase.

For a cylindrical nanopillar, the design parameters might include

[
d=\text{diameter},
]

[
h=\text{height},
]

[
p=\text{period},
]

where (p) is the center-to-center spacing between neighboring meta-atoms.

The optical response can then be represented schematically as

[
t(d,h,p,\lambda,\mathrm{pol})
=============================

A(d,h,p,\lambda,\mathrm{pol})
e^{i\phi(d,h,p,\lambda,\mathrm{pol})}.
]

Thus each geometry corresponds to a complex transmission coefficient.

The metalens design problem becomes

[
\boxed{
\phi_{\mathrm{target}}(x,y)
\rightarrow
(d,h,p)
}
]

through the optical response of the meta-atoms.

---

# 2. What Is a Meta-Atom Library?

A meta-atom library is essentially a lookup table.

For each candidate geometry, we calculate its optical response.

A simplified library might look like this:

| Diameter (d) | Height (h) | Transmission (T) | Phase (\phi) |
| -----------: | ---------: | ---------------: | -----------: |
|        80 nm |     600 nm |             0.92 |    (0.12\pi) |
|        90 nm |     600 nm |             0.94 |    (0.37\pi) |
|       100 nm |     600 nm |             0.96 |    (0.71\pi) |
|       110 nm |     600 nm |             0.95 |    (1.08\pi) |
|       120 nm |     600 nm |             0.93 |    (1.46\pi) |
|       130 nm |     600 nm |             0.89 |    (1.83\pi) |
|       140 nm |     600 nm |             0.84 |    (2.15\pi) |
|       150 nm |     600 nm |             0.76 |    (2.48\pi) |

The exact values are not important here. The concept is.

If the metalens requires

[
\phi_{\mathrm{target}}=1.83\pi,
]

we can select the meta-atom whose simulated response is closest to that phase.

In this simplified example:

[
d\approx130\text{ nm}.
]

The library therefore converts an **optical requirement** into a **fabrication parameter**.

---

# 3. Why We Need a Library

One might ask:

> Why not simulate every meta-atom directly while designing the entire metalens?

Because a realistic metalens can contain thousands or millions of individual elements.

Imagine a metalens containing

[
10^6
]

meta-atoms.

Running a full electromagnetic simulation for every possible geometry at every location would be extremely expensive.

Instead, we exploit an important idea:

> **The same meta-atom geometry can be reused at many different positions.**

We therefore simulate a set of candidate structures beforehand.

For example:

[
{g_1,g_2,g_3,\ldots,g_N}.
]

For each geometry (g_i), we calculate

[
t_i=A_i e^{i\phi_i}.
]

The resulting collection

[
\mathcal{L}
===========

{g_i,A_i,\phi_i}_{i=1}^{N}
]

is the meta-atom library.

The final metalens is then assembled by selecting elements from this library.

---

# 4. The Library Is More Than a Phase Table

A common mistake is to think that a meta-atom library contains only phase values.

It does not.

A useful library should contain the complete optical information required for design.

At minimum, we may need

[
\boxed{
\text{Geometry}
+
\text{Amplitude}
+
\text{Phase}
}
]

but depending on the application we may also need

[
\boxed{
\text{Polarization}
+
\text{Wavelength}
+
\text{Angle}
+
\text{Diffraction order}
}
]

and other quantities.

For example, a library entry might contain

[
g_i=(d_i,h_i,p_i)
]

and

[
t_i(\lambda)
============

A_i(\lambda)e^{i\phi_i(\lambda)}.
]

For polarization-sensitive structures, the response may instead be represented by a Jones matrix:

[
\mathbf{J}*i=
\begin{pmatrix}
t*{xx} & t_{xy}\
t_{yx} & t_{yy}
\end{pmatrix}.
]

This becomes particularly important for geometric-phase metasurfaces.

---

# 5. Building a Library

The construction of a library generally follows several steps.

## Step 1 — Choose the Material

First, we choose the material system.

Examples include:

* Silicon
* Titanium dioxide
* Silicon nitride
* Gallium nitride
* Plasmonic metals such as gold or silver

The material determines the available refractive index, absorption, dispersion, and fabrication constraints.

For a dielectric meta-atom, we might have

[
n_{\mathrm{meta}} \gg n_{\mathrm{background}}.
]

This refractive-index contrast allows the structure to strongly modify the optical wave.

---

## Step 2 — Choose the Geometry

Next, we define the geometry.

For example, consider cylindrical nanopillars.

The design parameters could be

[
\mathbf{g}=(d,h,p).
]

If the height is fixed and the period is fixed, the diameter becomes the primary design variable:

[
\mathbf{g}=d.
]

We then sweep through a range:

[
d_1,d_2,d_3,\ldots,d_N.
]

Each diameter represents a different meta-atom.

---

## Step 3 — Simulate Each Geometry

Each candidate structure is simulated using an electromagnetic solver.

Possible methods include:

* FDTD
* RCWA
* FEM
* Frequency-domain solvers

The simulation produces the complex electromagnetic response.

For a transmitted field,

[
E_{\mathrm{out}}
================

tE_{\mathrm{in}},
]

where

[
t=|t|e^{i\phi}.
]

Therefore,

[
|t|
]

gives the transmission amplitude, while

[
\phi=\arg(t)
]

gives the phase.

The library stores these quantities.

---

# 6. Phase Coverage

One of the most important properties of a meta-atom library is its **phase coverage**.

For a conventional phase-only metalens, we generally want to be able to realize a complete (2\pi) phase range:

[
0\leq\phi<2\pi.
]

Why?

Because the required lens phase can contain any phase modulo (2\pi).

Suppose the target phase is

[
\phi_{\mathrm{target}}=3.7\pi.
]

Since phase is periodic,

[
3.7\pi
\equiv
1.7\pi
\pmod{2\pi}.
]

Therefore, we only need to realize

[
0\leq\phi<2\pi.
]

A good library should therefore provide approximately

[
\boxed{\Delta\phi\geq2\pi}
]

while maintaining high transmission.

---

# 7. Phase Coverage Alone Is Not Enough

Suppose two meta-atoms provide the required phase.

Meta-atom A:

[
\phi_A=1.50\pi,
\qquad
T_A=0.95.
]

Meta-atom B:

[
\phi_B=1.50\pi,
\qquad
T_B=0.25.
]

Both have essentially the same phase.

But they are clearly not equally useful.

Meta-atom A transmits much more light.

Therefore, when constructing a library, we want

[
\boxed{
\text{large phase coverage}
+
\text{high transmission}
}
]

rather than phase coverage alone.

This is one of the central design trade-offs in metasurfaces.

---

# 8. The Phase–Transmission Map

A particularly useful way to visualize a library is to plot transmission against phase.

For every geometry (g_i), we have

[
(\phi_i,T_i).
]

Plotting these points gives a phase–transmission map.

Ideally, we want to find a set of structures covering

[
0\rightarrow2\pi
]

while maintaining high (T).

Conceptually, the ideal library looks like

[
\begin{array}{c}
T\
|\
| \qquad \bullet\quad\bullet\quad\bullet\quad\bullet\
| \quad\bullet\quad\bullet\quad\bullet\quad\bullet\
|________________________________\phi\
\qquad0\qquad\pi\qquad2\pi
\end{array}
]

The goal is not simply to maximize the number of structures.

The goal is to obtain a **useful set of high-efficiency structures distributed across the required phase range**.

---

# 9. Phase Quantization

In an ideal continuous system, we might choose any phase:

[
\phi\in[0,2\pi).
]

A real library contains only a finite number of structures.

Therefore, the available phases are discrete:

[
\phi_1,\phi_2,\ldots,\phi_N.
]

Suppose we have only eight available phase states.

Then we might approximate the continuous phase profile using

[
\phi_n
======

\frac{2\pi n}{8},
\qquad
n=0,\ldots,7.
]

The metalens then becomes a **quantized phase profile**.

This introduces phase error.

If the desired phase is

[
\phi_{\mathrm{target}},
]

and the selected library element provides

[
\phi_{\mathrm{selected}},
]

then the local phase error is

[
\Delta\phi
==========

## \phi_{\mathrm{selected}}

\phi_{\mathrm{target}}.
]

A larger library generally allows smaller phase errors.

But increasing the number of available structures also increases simulation and fabrication complexity.

---

# 10. Nearest-Phase Selection

The simplest library-selection algorithm is to choose the structure whose phase is closest to the target.

For each position ((x,y)), calculate

[
\phi_{\mathrm{target}}(x,y).
]

Then select

[
i^\ast
======

\arg\min_i
\left|
\operatorname{wrap}
\left(
\phi_i-\phi_{\mathrm{target}}
\right)
\right|.
]

The function

[
\operatorname{wrap}(\Delta\phi)
]

accounts for the periodic nature of phase.

For example,

[
0.1\pi
]

and

[
1.9\pi
]

are actually close in phase because

[
1.9\pi-2\pi=-0.1\pi.
]

So the phase difference should be measured modulo (2\pi).

---

# 11. Phase Matching vs Efficiency Optimization

Nearest-phase matching is useful, but it is not necessarily optimal.

Suppose we have three candidate meta-atoms:

| Meta-atom | Phase error | Transmission |
| --------- | ----------: | -----------: |
| A         |   (0.01\pi) |         0.40 |
| B         |   (0.04\pi) |         0.92 |
| C         |   (0.08\pi) |         0.96 |

A phase-only algorithm would choose A.

But A wastes most of the incident light.

Depending on the application, B or C may produce a better overall metalens.

This leads to a more general optimization problem.

Instead of minimizing only

[
|\Delta\phi|,
]

we can define a cost function such as

[
C_i
===

w_\phi|\Delta\phi_i|
+
w_T(1-T_i),
]

where

[
w_\phi
]

and

[
w_T
]

determine the relative importance of phase accuracy and transmission.

The best meta-atom is then

[
i^\ast=\arg\min_i C_i.
]

This is the beginning of moving from simple lookup-table design toward **optimization-based metasurface design**.

---

# 12. Local Periodic Approximation

There is an important assumption behind the standard meta-atom library approach.

When we simulate one meta-atom, we usually do not simulate the entire metalens.

Instead, we place the meta-atom in a periodic environment.

For example:

[
\boxed{
\text{Infinite periodic array}
\rightarrow
\text{simulate one unit cell}
}
]

This is computationally convenient.

The idea is that if the meta-atoms are sufficiently subwavelength and vary slowly across the metasurface, the local response can approximately describe their behavior inside the complete device.

This is often called the **local periodic approximation (LPA)**.

The approximation can be written schematically as

[
t(x,y)
\approx
t_{\mathrm{periodic}}
\left[
g(x,y)
\right].
]

This is one of the key assumptions behind library-based metalens design.

---

# 13. Why the Local Periodic Approximation Can Fail

The approximation is not exact.

A real metalens is not an infinite periodic array.

The geometry changes from one position to another:

[
g(x,y)\neq\text{constant}.
]

Therefore, neighboring meta-atoms can interact.

This becomes increasingly important when:

* the phase changes rapidly;
* the numerical aperture is high;
* the meta-atoms are strongly coupled;
* the unit-cell approximation is poor;
* the device operates near resonances.

In such cases,

[
t_{\mathrm{isolated}}
\neq
t_{\mathrm{actual}}.
]

The library prediction may therefore differ from the full-device electromagnetic simulation.

This distinction becomes extremely important when designing high-performance metalenses.

---

# 14. Wavelength Dependence

A meta-atom does not have one universal phase.

Its response depends on wavelength:

[
t=t(\lambda).
]

Therefore,

[
\phi=\phi(\lambda),
]

and

[
T=T(\lambda).
]

A library generated at

[
\lambda_0
]

is therefore fundamentally optimized for that wavelength.

For example, a meta-atom might provide

[
\phi(\lambda_0)=\pi
]

but at another wavelength,

[
\phi(\lambda_1)\neq\pi.
]

This wavelength dependence is one of the fundamental reasons conventional metalenses exhibit chromatic aberration.

A broadband library therefore needs to characterize

[
t(g,\lambda)
]

over a range of wavelengths rather than at only one wavelength.

---

# 15. Polarization Dependence

The library may also depend on polarization.

For a polarization-insensitive cylindrical meta-atom,

[
t_x\approx t_y.
]

But for an anisotropic meta-atom,

[
t_x\neq t_y.
]

In that case, the geometry can independently manipulate different polarization components.

For example,

[
\mathbf{E}_{\mathrm{out}}
=========================

\mathbf{J}
\mathbf{E}_{\mathrm{in}},
]

where

[
\mathbf{J}
]

is the Jones matrix.

The library must therefore store more information than a single phase value.

For polarization-dependent metasurfaces, a useful library may contain

[
\mathbf{J}(g,\lambda).
]

---

# 16. Library Resolution

Another important design parameter is the spacing between library elements.

Suppose diameter is swept from

[
80\text{ nm}
]

to

[
200\text{ nm}.
]

We could use a step of

[
\Delta d=1\text{ nm},
]

or

[
\Delta d=5\text{ nm},
]

or

[
\Delta d=10\text{ nm}.
]

A smaller step provides a denser library.

That generally improves phase matching:

[
\Delta\phi_{\mathrm{error}}\downarrow.
]

But the computational cost increases:

[
N_{\mathrm{simulations}}\uparrow.
]

Thus there is a trade-off:

[
\boxed{
\text{Library resolution}
\leftrightarrow
\text{Computational cost}
}
]

---

# 17. Fabrication Constraints

The best simulated library is not necessarily the best fabricable library.

Suppose the optimizer chooses structures with diameters

[
101\text{ nm},\quad
102\text{ nm},\quad
103\text{ nm},\quad
104\text{ nm}.
]

A fabrication process may not reliably distinguish such small differences.

Fabrication constraints therefore need to be included.

Examples include:

* minimum feature size;
* minimum gap;
* maximum aspect ratio;
* sidewall angle;
* etching limitations;
* dimensional tolerances.

Therefore, a realistic library should satisfy

[
g_i\in\mathcal{G}_{\mathrm{fabricable}}.
]

The design problem is not simply

[
\text{maximize optical performance}.
]

It is

[
\boxed{
\text{maximize optical performance}
\quad
\text{subject to fabrication constraints}
}
]

This idea becomes increasingly important as we move toward real devices.

---

# 18. Robust Meta-Atom Libraries

Fabrication is never perfectly exact.

Suppose the intended diameter is

[
d=120\text{ nm},
]

but fabrication produces

[
d=118\text{ nm}
]

or

[
d=122\text{ nm}.
]

The optical response therefore changes:

[
t(120)
\neq
t(118)
\neq
t(122).
]

A good library should therefore consider sensitivity.

One way to quantify this is

[
S_d
===

\frac{\partial\phi}{\partial d}.
]

A large value of

[
\left|\frac{\partial\phi}{\partial d}\right|
]

means that a small fabrication error can cause a significant phase shift.

Therefore, two meta-atoms with similar nominal performance may have very different robustness.

This gives another design criterion:

[
\boxed{
\text{Performance}
+
\text{Fabrication tolerance}
}
]

---

# 19. From Library to Metalens

We can now connect everything together.

Suppose the desired metalens phase is

[
\phi_{\mathrm{target}}(x,y).
]

At every position, we search the library:

[
\mathcal{L}
===========

{g_i,\phi_i,T_i}.
]

We select the appropriate geometry:

[
g^\ast(x,y)
===========

\operatorname{Select}
\left[
\phi_{\mathrm{target}}(x,y),
\mathcal{L}
\right].
]

The final metalens is therefore

[
\boxed{
\text{Metalens}
===============

\text{Spatial arrangement of library elements}
}
]

or, more explicitly,

[
\boxed{
\phi_{\mathrm{target}}(x,y)
\rightarrow
g^\ast(x,y)
\rightarrow
\text{fabricated metalens}.
}
]

This is the fundamental bridge between electromagnetic theory and nanofabrication.

---

# 20. A Simple Example

Consider a one-dimensional phase profile

[
\phi_{\mathrm{target}}(x).
]

Suppose our library contains four elements:

| Element | Geometry   |    Phase | Transmission |
| ------- | ---------- | -------: | -----------: |
| A       | (d=100) nm |      (0) |         0.95 |
| B       | (d=110) nm | (0.5\pi) |         0.94 |
| C       | (d=120) nm |    (\pi) |         0.92 |
| D       | (d=130) nm | (1.5\pi) |         0.90 |

Suppose at three positions the target phases are

[
\phi_1=0.1\pi,
]

[
\phi_2=0.55\pi,
]

[
\phi_3=1.4\pi.
]

The nearest library elements would be

[
\phi_1\rightarrow A,
]

[
\phi_2\rightarrow B,
]

[
\phi_3\rightarrow D.
]

The physical structure of the metalens is therefore

[
\boxed{
A\quad B\quad D
}
]

at those three positions.

For a real metalens, this selection occurs over thousands or millions of spatial locations.

---

# 21. The Library as a Discretized Optical Material

There is a deeper way to think about a meta-atom library.

A conventional lens uses a continuous refractive-index distribution or curved surface to manipulate the wavefront.

A metasurface instead creates an **effective spatially varying optical response** using discrete nanostructures.

The library therefore acts almost like a catalog of artificial optical materials.

Each meta-atom represents a possible local response:

[
g_i
\rightarrow
t_i.
]

The metalens design then becomes a spatial assignment problem:

[
(x,y)
\rightarrow
g_i.
]

This perspective is extremely useful because it reveals why metasurface design is naturally connected to optimization and inverse design.

---

# 22. A Computational View

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

[
g
\rightarrow
t(g)
]

### Metalens design

[
\phi_{\mathrm{target}}(x,y)
\rightarrow
g(x,y).
]

The first is a **forward problem**.

The second is essentially an **inverse mapping**.

This distinction will become important later when we discuss inverse design.

---

# 23. What Makes a Good Meta-Atom Library?

A useful library should ideally have:

### 1. Full phase coverage

[
\Delta\phi\approx2\pi.
]

### 2. High transmission

[
T\rightarrow1.
]

### 3. Fine phase resolution

[
\Delta\phi_{\mathrm{quantization}}\rightarrow0.
]

### 4. Low sensitivity to fabrication errors

[
\left|\frac{\partial\phi}{\partial g}\right|
]

should not be excessively large.

### 5. Appropriate bandwidth

The response should remain useful over the required wavelength range.

### 6. Appropriate polarization response

The library should match the polarization requirements of the application.

### 7. Manufacturability

Every selected geometry should be physically fabricable.

These requirements can conflict with each other.

That is why meta-atom design is an optimization problem rather than simply a search for maximum phase range.

---

# 24. The Most Important Concept

The most important idea of this lesson is:

> **A metalens is not designed directly from phase values. It is designed by mapping desired phase values onto physical meta-atoms whose electromagnetic responses have been characterized in a library.**

The chain is

[
\boxed{
\text{Desired optical function}
\rightarrow
\text{Target phase}
\rightarrow
\text{Library lookup}
\rightarrow
\text{Meta-atom geometry}
}
]

while the library itself is generated through the forward electromagnetic problem

[
\boxed{
\text{Geometry}
\rightarrow
\text{Electromagnetic simulation}
\rightarrow
\text{Complex optical response}.
}
]

Together, these two mappings form the basic architecture of conventional library-based metalens design.

---

# 25. Where We Go Next

We now have all the conceptual pieces needed to design a metalens.

We know:

* what a metalens is;
* what a conventional lens does;
* how a lens focuses light;
* how a conventional lens produces its phase profile;
* how a metalens reproduces that phase profile;
* what a meta-atom is;
* how propagation, resonant, and geometric phases work;
* how to construct a library of meta-atoms;
* how to select physical structures from that library.

The next question is therefore natural:

> **How do we actually design the complete metalens?**

In the next lesson, we will take the target phase profile

[
\phi_{\mathrm{target}}(x,y)
]

and turn it into an actual spatial arrangement of nanostructures.

We will move from

[
\boxed{\text{optical specification}}
]

to

[
\boxed{\text{metalens geometry}}.
]

That is **Lesson 11 — Metalens Design**.
