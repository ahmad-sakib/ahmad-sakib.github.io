---
title: "What are Slurm and Lmod?"
layout: single
permalink: /hpc/meep/02-what-are-slurm-and-lmod/
author_profile: false
toc: true
toc_sticky: true
classes: wide
---

{% include hpc_series_sidebar.html %}

Welcome to the world of High-Performance Computing (HPC)! 

If you are new to supercomputers, you will quickly hear two words: **Slurm** and **Lmod**. Don't worry if they sound strange! They are simply two helpful tools that make the supercomputer easy to use. 

Let's break them down simply.

---

## 🚦 Slurm: The Traffic Cop 

Imagine a supercomputer as a massive kitchen with thousands of chefs (processors) and a huge line of customers (tasks). If everyone rushes in at once, it's chaos! 

That's where **Slurm** steps in.

**Slurm** is a **Job Scheduler**. It acts like a traffic cop or a restaurant manager. 

### What does Slurm do?
- **Takes your order:** You tell Slurm what work you want to run.
- **Finds a chef:** Slurm finds available computers (nodes) to do your work.
- **Keeps things fair:** It makes sure everyone gets a turn and no one hogs the whole system.

### 🛠️ Common Slurm Commands
* `sbatch` ➡️ Submit your job (place your order)
* `squeue` ➡️ Check the line (see when your job will run)
* `scancel` ➡️ Cancel your job (changed your mind?)

---

## 🧰 Lmod: Your Magic Software Toolbox

A supercomputer has *thousands* of software programs installed. But if they were all turned on at once, they would conflict and crash.

This is where **Lmod** (or "Modules") comes to the rescue!

Think of **Lmod** as a magic toolbox. Instead of carrying all your tools at once, you only take out the specific tool you need, exactly when you need it.

### What does Lmod do?
- **Loads Software:** It quickly loads the exact version of the software you need (like Python or MATLAB).
- **Prevents Clashes:** It keeps your workspace clean so different programs don't break each other.

### 🛠️ Common Lmod Commands
* `module avail` ➡️ See all the tools in the toolbox
* `module load <name>` ➡️ Take a specific tool out
* `module list` ➡️ See what tools you are currently holding
* `module purge` ➡️ Put all tools back in the box

---

## 💡 Quick Summary

* **Slurm** manages **WHERE** and **WHEN** your work runs.
* **Lmod** manages **WHAT** software you use to get the work done.

Together, they make running tasks on a supercomputer simple, organized, and powerful! 🚀

---

*Continue to [Part 2: Know Your HPC System](/hpc/meep/02-know-your-hpc/) or return to the [Series Overview](/hpc/meep/).*
