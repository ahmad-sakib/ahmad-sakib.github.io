---
title: "Propagation Phase"
layout: single
permalink: /metaoptics/metalenses/propagation-phase/
author_profile: false
sidebar:
  nav: "metalenses"
---

<!-- Content will be added later. -->
# Propagation Phase

In the previous chapter, we saw that a dielectric meta-atom can be understood as a nanoscale optical waveguide. Its geometry determines the electromagnetic modes supported by the structure, and those modes acquire phase as they propagate through the meta-atom.

This leads to one of the simplest and most important mechanisms for controlling optical phase:

> **Propagation phase.**

The basic idea is remarkably simple.

If light propagates through a structure with propagation constant $\beta$ over a distance $H$, it accumulates a phase

$$\boxed{\Phi=\beta H.}$$

For a mode with effective refractive index $n_{\mathrm{eff}}$,

$$\beta=k_0n_{\mathrm{eff}},$$

where

$$k_0=\frac{2\pi}{\lambda_0}.$$

Therefore,

$$\boxed{\Phi_{\mathrm{prop}}=k_0n_{\mathrm{eff}}H=\frac{2\pi}{\lambda_0}n_{\mathrm{eff}}H.}$$

This equation is the foundation of propagation-phase metalenses.

But to understand why it works, we need to go one step deeper.

---

# 1. Phase Is Accumulated During Propagation

Consider a monochromatic plane wave propagating along the $z$-direction:

$$E(z,t)=E_0e^{i(kz-\omega t)}.$$

The phase of the wave is

$$\phi(z,t)=kz-\omega t.$$

At a fixed time,

$$\phi(z)=kz.$$

Therefore, after traveling a distance $H$,

$$\Delta\phi=kH.$$

For propagation through a homogeneous material with refractive index $n$,

$$k=nk_0,$$

so

$$\boxed{\Delta\phi=nk_0H.}$$

Using

$$k_0=\frac{2\pi}{\lambda_0},$$

we obtain

$$\boxed{\Delta\phi=\frac{2\pi nH}{\lambda_0}.}$$

This is the familiar optical-path-length result.

A larger refractive index means a larger phase accumulation over the same physical distance.

---

# 2. What Changes Inside a Meta-Atom?

A dielectric nanopillar is not simply a slab of bulk material.

Consider a cylindrical nanopillar of height $H$, surrounded by a lower-index medium.

The electric field entering the pillar is confined by the high-index dielectric and forms a guided or quasi-guided mode.

We can write the modal field approximately as

$$\mathbf{E}(x,y,z)=\mathbf{E}_t(x,y)e^{i\beta z}.$$

The factor

$$e^{i\beta z}$$

describes the phase evolution along the propagation direction.

After traveling through the pillar height $H$,

$$\mathbf{E}(H)=\mathbf{E}_t(x,y)e^{i\beta H}.$$

Therefore, the phase accumulated inside the structure is

$$\boxed{\Phi_{\mathrm{prop}}=\beta H.}$$

Introducing the effective index,

$$\beta=k_0n_{\mathrm{eff}},$$

gives

$$\boxed{\Phi_{\mathrm{prop}}=k_0n_{\mathrm{eff}}H.}$$

This is the propagation-phase relation.

---

# 3. Why Do We Need (n_{\mathrm{eff}})?

At first, one might expect the phase to be determined simply by the refractive index of the dielectric material:

$$\Phi=k_0n_{\mathrm{material}}H.$$

But this is generally not correct for a nanopillar.

The electromagnetic field is distributed both inside and outside the dielectric.

The field therefore does not propagate as a plane wave in an infinite homogeneous material.

Instead, it propagates as a **guided mode**.

That mode has its own propagation constant, $\beta$.

We define its effective index through

$$\boxed{n_{\mathrm{eff}}=\frac{\beta}{k_0}.}$$

Thus,

$$\boxed{\Phi_{\mathrm{prop}}=\frac{2\pi}{\lambda_0}n_{\mathrm{eff}}H.}$$

The effective index is therefore the quantity that connects the electromagnetic mode to the accumulated phase.

---

# 4. The Physical Meaning of Propagation Phase

The equation

$$\Phi_{\mathrm{prop}}=k_0n_{\mathrm{eff}}H$$

has a simple physical interpretation.

There are three quantities controlling the phase:

$$\boxed{\Phi_{\mathrm{prop}}\propto n_{\mathrm{eff}}H.}$$

Therefore, we can change the phase by changing either

* the effective index $n_{\mathrm{eff}}$, or
* the propagation distance $H$.

In a dielectric metalens, the height $H$ is usually fixed across the entire metasurface.

The designer therefore controls the phase primarily by changing

$$\boxed{n_{\mathrm{eff}}.}$$

And since $n_{\mathrm{eff}}$ depends on geometry,

$$\boxed{\text{geometry}\rightarrow n_{\mathrm{eff}}\rightarrow \Phi.}$$

This is the central idea behind propagation-phase meta-atoms.

---

# 5. Geometry Becomes the Control Knob

Consider a dielectric nanopillar whose diameter is $D$.

Changing $D$ changes the transverse electromagnetic boundary conditions.

Therefore, the supported mode changes.

Consequently,

$$\beta=\beta(D),$$

and hence

$$n_{\mathrm{eff}}=\frac{\beta(D)}{k_0}.$$

The propagation phase becomes

$$\boxed{\Phi(D)=k_0Hn_{\mathrm{eff}}(D).}$$

We therefore obtain the complete chain

$$\boxed{D\rightarrow \text{mode profile}\rightarrow \beta\rightarrow n_{\mathrm{eff}}\rightarrow \Phi.}$$

This is why a metalens can use nanopillar diameter as a local phase-control parameter.

---

# 6. Increasing the Diameter

Let us consider what happens when the diameter increases.

For a relatively small pillar, a significant fraction of the electromagnetic field extends into the surrounding medium.

The mode is weakly confined.

Therefore, $n_{\mathrm{eff}}$ is relatively close to the refractive index of the surrounding medium.

As the diameter increases, the high-index region becomes larger.

The optical mode becomes more strongly confined.

The effective index generally increases:

$$D\uparrow\quad\Rightarrow\quad n_{\mathrm{eff}}\uparrow.$$

Consequently,

$$\Phi_{\mathrm{prop}}=k_0n_{\mathrm{eff}}H$$

also increases.

Thus,

$$\boxed{D\uparrow\Rightarrow n_{\mathrm{eff}}\uparrow\Rightarrow \Phi_{\mathrm{prop}}\uparrow.}$$

This is the basic physical mechanism used to generate a range of propagation phases from geometrically different meta-atoms.

---

# 7. Propagation Constant and Phase Velocity

The propagation constant is related to the phase velocity of the mode.

We have

[
\beta
=====

\frac{\omega}{v_{\mathrm{ph}}}.
]

Since

[
\beta=k_0n_{\mathrm{eff}}
=========================

\frac{\omega}{c}n_{\mathrm{eff}},
]

we obtain

[
\frac{\omega}{v_{\mathrm{ph}}}
==============================

\frac{\omega}{c}n_{\mathrm{eff}}.
]

Therefore,

[
\boxed{
v_{\mathrm{ph}}
===============

\frac{c}{n_{\mathrm{eff}}}.
}
]

A larger effective index corresponds to a smaller phase velocity.

Therefore, two meta-atoms of the same height but different effective indices produce different phase delays.

For two structures,

[
n_{\mathrm{eff},1}
]

and

[
n_{\mathrm{eff},2},
]

the phase difference is

[
\Delta\Phi
==========

k_0H
\left(
n_{\mathrm{eff},2}
------------------

n_{\mathrm{eff},1}
\right).
]

Thus,

[
\boxed{
\Delta\Phi
==========

\frac{2\pi H}{\lambda_0}
\Delta n_{\mathrm{eff}}.
}
]

---

# 8. A Simple Numerical Example

Suppose the operating wavelength is

[
\lambda_0=1~\mu\mathrm m
]

and the nanopillar height is

[
H=1~\mu\mathrm m.
]

Consider two meta-atoms with

[
n_{\mathrm{eff},1}=1.5
]

and

[
n_{\mathrm{eff},2}=2.5.
]

Their phase difference is

[
\Delta\Phi
==========

\frac{2\pi}{1~\mu\mathrm m}
(1~\mu\mathrm m)
(2.5-1.5).
]

Therefore,

[
\Delta\Phi=2\pi.
]

So a difference of one unit in effective index, for a (1~\mu\mathrm m) tall structure operating at (1~\mu\mathrm m), produces a full (2\pi) phase difference.

This illustrates an important design principle:

[
\boxed{
H\Delta n_{\mathrm{eff}}
\sim
\lambda_0
}
]

is sufficient for approximately one complete phase cycle.

---

# 9. The Condition for (2\pi) Phase Coverage

A phase-only metalens typically requires the ability to realize every phase between

[
0
]

and

[
2\pi.
]

Suppose the available effective-index range is

[
\Delta n_{\mathrm{eff}}
=======================

## n_{\mathrm{eff,max}}

n_{\mathrm{eff,min}}.
]

The available propagation-phase range is

[
\Delta\Phi
==========

k_0H\Delta n_{\mathrm{eff}}.
]

For full phase coverage,

[
\Delta\Phi\geq2\pi.
]

Substituting

[
k_0=\frac{2\pi}{\lambda_0},
]

we obtain

[
\frac{2\pi}{\lambda_0}
H\Delta n_{\mathrm{eff}}
\geq
2\pi.
]

Therefore,

[
\boxed{
H\Delta n_{\mathrm{eff}}
\geq
\lambda_0.
}
]

or

[
\boxed{
H
\geq
\frac{\lambda_0}
{\Delta n_{\mathrm{eff}}}.
}
]

This equation gives a useful first estimate for the required meta-atom height.

---

# 10. Why High-Index Dielectrics Are Useful

The previous equation immediately explains why high-index dielectric materials are attractive for propagation-phase metalenses.

Suppose the material has a high refractive index.

This allows the guided mode to achieve a relatively large range of effective indices:

[
\Delta n_{\mathrm{eff}}
=======================

## n_{\mathrm{eff,max}}

n_{\mathrm{eff,min}}.
]

A larger

[
\Delta n_{\mathrm{eff}}
]

means that the required height can be smaller:

[
H
\geq
\frac{\lambda_0}{\Delta n_{\mathrm{eff}}}.
]

Thus, high-index dielectric materials provide a practical route toward compact structures capable of generating a full (2\pi) phase range.

Materials such as

[
\mathrm{TiO_2},
\quad
\mathrm{Si},
\quad
\mathrm{GaN}
]

are therefore frequently used in dielectric meta-optics, depending on the operating wavelength and fabrication constraints.

---

# 11. Propagation Phase Is Not Optical Path Length Alone

It is tempting to describe propagation phase simply as

[
\Phi=k_0nH.
]

For a meta-atom, however, the more rigorous expression is

[
\boxed{
\Phi=\beta H.
}
]

The distinction matters.

For a homogeneous material,

[
\beta=nk_0.
]

For a guided mode,

[
\beta=n_{\mathrm{eff}}k_0.
]

Therefore,

[
\boxed{
\Phi_{\mathrm{prop}}
====================

k_0n_{\mathrm{eff}}H.
}
]

The effective index accounts for the fact that the field is not confined entirely to the dielectric.

This is why the propagation-phase theory naturally connects to waveguide theory.

---

# 12. The Waveguide Interpretation

A dielectric nanopillar can be viewed as a very short waveguide.

The transverse dimensions determine the allowed modes.

The longitudinal direction determines how those modes accumulate phase.

We can write

[
\mathbf E(x,y,z)
================

\mathbf E_t(x,y)e^{i\beta z}.
]

The transverse mode satisfies an eigenvalue problem.

Schematically,

[
\hat{\mathcal L}\mathbf E_t
===========================

\beta^2\mathbf E_t.
]

Solving this problem gives

[
\beta_1,\beta_2,\ldots
]

for the supported modes.

Each mode has an effective index

[
n_{\mathrm{eff},m}
==================

\frac{\beta_m}{k_0}.
]

Therefore, propagation phase is fundamentally an **eigenmode phenomenon**.

The geometry changes the eigenvalue.

The eigenvalue changes the phase.

---

# 13. The Meta-Atom Is a Finite Waveguide

There is an important subtlety here.

A conventional optical waveguide may extend over millimeters or centimeters.

A meta-atom may have a height of only a few hundred nanometers or a few micrometers.

It is therefore more accurate to call it a **finite or truncated waveguide**.

The light enters the structure, interacts with the guided or quasi-guided mode, propagates over the finite height (H), and then radiates into the surrounding medium.

Schematically,

[
\boxed{
\text{Incident field}
\rightarrow
\text{guided mode}
\rightarrow
\text{finite propagation}
\rightarrow
\text{radiated field}.
}
]

The propagation phase comes primarily from the middle step:

[
\boxed{
\Phi_{\mathrm{prop}}=\beta H.
}
]

---

# 14. But the Actual Phase Is More Complicated

The equation

[
\Phi_{\mathrm{prop}}=\beta H
]

is extremely useful, but it should not be mistaken for the complete phase response of a real meta-atom.

A finite nanopillar has interfaces.

At the entrance and exit interfaces, the field can reflect.

The pillar can support resonances.

The field can radiate.

Neighboring meta-atoms can interact.

Therefore, the actual transmission coefficient should be written as

[
\boxed{
t(D,H,\lambda)
==============

|t(D,H,\lambda)|
e^{i\Phi(D,H,\lambda)}.
}
]

The phase

[
\Phi
]

may contain several contributions.

A useful conceptual decomposition is

[
\Phi
====

\Phi_{\mathrm{prop}}
+
\Phi_{\mathrm{interface}}
+
\Phi_{\mathrm{res}}
+
\Phi_{\mathrm{coupling}}
+\cdots.
]

The exact decomposition depends on the structure and is not necessarily unique.

The propagation-phase approximation assumes that

[
\Phi_{\mathrm{prop}}
]

is the dominant contribution.

---

# 15. Propagation Phase vs. Resonant Phase

This distinction is important when studying dielectric metasurfaces.

In a propagation-dominated design,

[
\boxed{
\Phi
\approx
k_0n_{\mathrm{eff}}H.
}
]

The phase varies primarily because the geometry changes the modal propagation constant.

In a resonant design, the geometry can instead place the structure near an electromagnetic resonance.

Near a resonance, the transmission phase can vary rapidly with wavelength or geometry.

Therefore,

[
\boxed{
\text{Propagation phase}
\neq
\text{Resonant phase}.
}
]

However, real dielectric meta-atoms can exhibit both effects simultaneously.

This is why numerical characterization is often necessary.

---

# 16. Phase Wrapping

The optical phase is periodic.

Two phases that differ by an integer multiple of (2\pi) represent the same complex phase factor:

[
e^{i\Phi}
=========

e^{i(\Phi+2\pi m)}.
]

Therefore,

[
\boxed{
\Phi
\equiv
\Phi+2\pi m.
}
]

This allows the required phase profile of a metalens to be wrapped into a single interval:

[
0\leq\Phi<2\pi.
]

For example,

[
\Phi=5\pi
]

is equivalent to

[
\Phi=\pi
]

because

[
5\pi-\pi=4\pi=2(2\pi).
]

Thus, a propagation-phase meta-atom library only needs to provide one complete (2\pi) phase cycle.

---

# 17. From Continuous Phase to Discrete Meta-Atoms

An ideal metalens would provide a continuously varying phase:

[
\Phi(r).
]

But fabrication cannot generally create an infinitely large number of different geometries.

Instead, we construct a finite library:

[
D_1,D_2,\ldots,D_N.
]

Each diameter produces a corresponding phase:

[
\Phi_1,\Phi_2,\ldots,\Phi_N.
]

The continuous phase profile is then approximated using these discrete values.

For example,

[
\Phi_{\mathrm{target}}(r)
\rightarrow
\Phi_j.
]

The corresponding geometry is

[
D(r)=D_j.
]

Therefore, the actual metalens is a spatially varying arrangement of discrete meta-atoms.

---

# 18. The Meta-Atom Phase Library

The most practical way to obtain the geometry-phase relationship is to simulate a series of meta-atoms.

For each diameter (D), calculate

[
t(D)
====

|t(D)|e^{i\Phi(D)}.
]

The result is a database of the form

[
\boxed{
D
\longrightarrow
\left(
|t|,
\Phi
\right).
}
]

This is called a **meta-atom library**.

The phase curve may look schematically like

[
\boxed{
D
\longrightarrow
\Phi(D).
}
]

The designer can then select the diameter corresponding to the required phase.

---

# 19. Why Amplitude Matters

A common mistake is to optimize only for phase.

Suppose a particular meta-atom gives

[
\Phi=\Phi_{\mathrm{target}}.
]

That sounds ideal.

But suppose its transmission is only

[
|t|=0.2.
]

Then only a small fraction of the incident optical power is transmitted through the desired channel.

The meta-atom is therefore not a good choice.

An efficient meta-atom should satisfy both

[
\boxed{
\Phi\approx\Phi_{\mathrm{target}}
}
]

and

[
\boxed{
|t|\approx1.
}
]

This is why meta-atom libraries are often plotted in the form

[
|t(D)|
]

and

[
\Phi(D)
]

simultaneously.

---

# 20. Phase Extraction in Numerical Simulation

Suppose an FDTD or RCWA simulation gives the complex transmitted electric field

[
E_t.
]

The transmission coefficient can be written as

[
t
=

\frac{E_t}{E_{\mathrm{ref}}},
]

where (E_{\mathrm{ref}}) is an appropriate reference field.

Then

[
t
=

|t|e^{i\Phi}.
]

The phase is obtained from

[
\boxed{
\Phi=\arg(t).
}
]

Numerically,

[
\Phi
====

\operatorname{atan2}
\left(
\operatorname{Im}(t),
\operatorname{Re}(t)
\right).
]

The raw phase is usually wrapped into

[
(-\pi,\pi].
]

For a smooth phase curve, one often performs phase unwrapping:

[
\Phi_{\mathrm{unwrap}}
======================

\operatorname{unwrap}[\Phi].
]

This is particularly useful when studying how phase changes continuously with geometry.

---

# 21. A Useful Design Workflow

The propagation-phase design process can now be summarized.

### Step 1: Choose the material

For example,

[
\mathrm{TiO_2},\quad
\mathrm{Si},\quad
\mathrm{GaN}.
]

### Step 2: Choose the operating wavelength

[
\lambda_0.
]

### Step 3: Fix the height

[
H.
]

### Step 4: Sweep the geometry

For example,

[
D_{\min}
\leq D
\leq
D_{\max}.
]

### Step 5: Calculate the electromagnetic response

Obtain

[
t(D)
====

|t(D)|e^{i\Phi(D)}.
]

### Step 6: Check phase coverage

Verify whether

[
\Delta\Phi\geq2\pi.
]

### Step 7: Check transmission

Prefer geometries for which

[
|t(D)|
]

remains high.

### Step 8: Build the library

Create the mapping

[
D
\rightarrow
\Phi.
]

### Step 9: Map the target phase to geometry

[
\Phi_{\mathrm{target}}(r)
\rightarrow
D(r).
]

### Step 10: Construct the metalens

Place the selected meta-atoms at their corresponding positions.

Thus,

[
\boxed{
\text{Material}
\rightarrow
\text{Geometry sweep}
\rightarrow
t(D)
\rightarrow
\text{Phase library}
\rightarrow
\text{Target phase}
\rightarrow
\text{Metalens}.
}
]

---

# 22. Propagation Phase and the Conventional Lens

Now we can connect this idea to the conventional lens discussed earlier.

A conventional lens creates the required phase profile because different rays experience different optical path lengths.

For a lens,

[
\mathrm{OPL}
============

\int n,ds.
]

The curved geometry causes the optical path to vary spatially.

The metalens does something conceptually similar, but through a completely different physical implementation.

Instead of changing the macroscopic path length using a curved surface, it changes the local phase response using nanoscale structures.

For a propagation-phase metalens,

[
\boxed{
\Phi(r)
\approx
k_0n_{\mathrm{eff}}(r)H.
}
]

Thus, the spatially varying geometry produces a spatially varying effective index:

[
D(r)
\rightarrow
n_{\mathrm{eff}}(r)
\rightarrow
\Phi(r).
]

The result is a flat optical surface that produces the same desired wavefront transformation.

---

# 23. The Central Equation

At this point, almost the entire propagation-phase concept can be condensed into one equation:

[
\boxed{
\Phi_{\mathrm{prop}}(D)
=======================

\frac{2\pi}{\lambda_0}
n_{\mathrm{eff}}(D)H.
}
]

Everything important is contained within this expression.

The wavelength determines the free-space phase scale:

[
\lambda_0.
]

The height determines the propagation distance:

[
H.
]

The geometry controls the effective index:

[
n_{\mathrm{eff}}(D).
]

And together they determine the phase:

[
\Phi_{\mathrm{prop}}(D).
]

Therefore,

[
\boxed{
D
\rightarrow
n_{\mathrm{eff}}(D)
\rightarrow
\Phi_{\mathrm{prop}}(D).
}
]

---

# 24. A More Rigorous View

For a real dielectric nanopillar, the most rigorous description starts from Maxwell's equations:

[
\nabla\times\nabla\times\mathbf E
---------------------------------

# k_0^2\epsilon_r(\mathbf r)\mathbf E

0.

]

The geometry determines

[
\epsilon_r(\mathbf r).
]

Solving the eigenmode problem gives

[
\beta(D).
]

The effective index is then

[
\boxed{
n_{\mathrm{eff}}(D)
===================

\frac{\beta(D)}{k_0}.
}
]

The propagation contribution to the phase is

[
\boxed{
\Phi_{\mathrm{prop}}(D)
=======================

\beta(D)H.
}
]

Therefore, the complete theoretical chain is

[
\boxed{
\epsilon_r(\mathbf r;D)
\rightarrow
\mathbf E_m(x,y;D),\beta_m(D)
\rightarrow
n_{\mathrm{eff}}(D)
\rightarrow
\Phi_{\mathrm{prop}}(D).
}
]

This is the rigorous electromagnetic interpretation of propagation-phase control.

---

# 25. What Propagation Phase Does — and Does Not — Mean

It is worth stating the concept carefully.

Propagation phase does **not** mean that the meta-atom simply behaves like a tiny piece of bulk glass.

Instead, it means that the dominant phase accumulation can be understood through the propagation of an electromagnetic mode through a finite structure.

Thus,

[
\boxed{
\Phi_{\mathrm{prop}}=\beta H
}
]

is more fundamental than

[
\boxed{
\Phi_{\mathrm{prop}}=k_0n_{\mathrm{material}}H.
}
]

The first uses the actual modal propagation constant.

The second would only be appropriate for propagation through a homogeneous bulk material under the corresponding assumptions.

For a nanopillar,

[
\boxed{
\beta=k_0n_{\mathrm{eff}}
}
]

is the appropriate modal description.

---

# 26. Limitations of the Propagation-Phase Picture

The propagation-phase model is powerful, but it has limitations.

### 1. Finite interfaces

The input and output interfaces contribute to the optical response.

### 2. Resonances

Strong resonances can produce phase behavior that cannot be described by a simple constant (n_{\mathrm{eff}}).

### 3. Near-field coupling

Neighboring meta-atoms may interact.

### 4. Polarization

Anisotropic structures can have different responses for different polarization states.

### 5. Dispersion

[
n_{\mathrm{eff}}=n_{\mathrm{eff}}(\lambda)
]

is generally wavelength dependent.

### 6. Loss

If the material is absorptive,

[
n_{\mathrm{eff}}
================

n'+in''
]

can become complex.

In that case,

[
\beta
=====

k_0(n'+in'').
]

The field evolves as

[
e^{i\beta z}
============

e^{ik_0n'z}
e^{-k_0n''z}.
]

Thus, the real part controls phase accumulation while the imaginary part produces attenuation.

This gives

[
\boxed{
n_{\mathrm{eff}}
================

n'+in''
}
]

and demonstrates that the effective index can control both phase and amplitude.

---

# 27. Why Propagation Phase Is Important for Metalenses

The propagation-phase mechanism provides a relatively intuitive route to phase control.

The designer can keep the material and height fixed and vary only the lateral geometry:

[
D_1,D_2,D_3,\ldots
]

Each geometry provides a different effective index:

[
n_{\mathrm{eff},1},
n_{\mathrm{eff},2},
n_{\mathrm{eff},3},\ldots
]

and therefore different phases:

[
\Phi_1,\Phi_2,\Phi_3,\ldots
]

A collection of such structures can approximate a continuous phase profile.

This is the fundamental idea behind many high-efficiency dielectric metalenses.

---

# 28. The Big Picture

We began with a simple question:

> **How can a flat array of tiny structures control the phase of light?**

The answer is now clear.

A dielectric meta-atom acts approximately as a nanoscale waveguide.

Its geometry determines the supported electromagnetic mode.

The mode has a geometry-dependent propagation constant:

[
\beta(D).
]

The effective index is

[
n_{\mathrm{eff}}(D)
===================

\frac{\beta(D)}{k_0}.
]

As the mode propagates through the height (H), it accumulates phase:

[
\Phi_{\mathrm{prop}}
====================

\beta(D)H.
]

Therefore,

[
\boxed{
\Phi_{\mathrm{prop}}(D)
=======================

\frac{2\pi}{\lambda_0}
n_{\mathrm{eff}}(D)H.
}
]

By changing (D), we change (n_{\mathrm{eff}}).

By changing (n_{\mathrm{eff}}), we change the phase.

By placing different diameters at different positions, we create a spatially varying phase profile.

And that phase profile shapes the wavefront.

The complete chain is

[
\boxed{
\text{Nanopillar geometry}
\rightarrow
\text{Modal confinement}
\rightarrow
\beta
\rightarrow
n_{\mathrm{eff}}
\rightarrow
\Phi
\rightarrow
\text{Wavefront}.
}
]

This is the essence of **propagation-phase control** in dielectric meta-optics.

---

## From Propagation Phase to a Real Metalens

The next question is no longer purely theoretical.

We now know that different geometries can provide different phases. But how do we systematically determine **which nanopillar diameter produces which phase**?

The answer is to perform an electromagnetic parameter sweep and construct a **meta-atom library**:

[
\boxed{
D
\longrightarrow
\left[
|t(D)|,\Phi(D)
\right].
}
]

Once this library is available, the desired metalens phase profile can be converted directly into physical nanostructure dimensions.

That is where the abstract phase function becomes an actual metasurface.
