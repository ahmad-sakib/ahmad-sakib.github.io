---
title: "What are Slurm and Lmod?"
layout: single
permalink: /hpc/meep/01-what-are-slurm-and-lmod/
author_profile: false
toc: false
classes: wide
---

{% include hpc_series_sidebar.html %}

<!-- Reading Progress Bar -->
<div id="hpc-reading-progress"></div>
<script>
(function(){
  var bar = document.getElementById('hpc-reading-progress');
  window.addEventListener('scroll', function(){
    var doc = document.documentElement;
    var scrolled = doc.scrollTop || document.body.scrollTop;
    var total = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
    bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
  });
})();
</script>

<!-- Article Hero -->
<div class="hpc-article-hero">
  <div class="hpc-article-hero__inner">
    <span class="hpc-article-hero__series-badge">HPC &amp; MEEP Series · Part 1</span>
    <h1 class="hpc-article-hero__title">What are Slurm and Lmod?</h1>
    <p class="hpc-article-hero__lead">
      Two tools stand between you and a working HPC environment. This article explains them clearly so the rest of the series makes sense.
    </p>
    <div class="hpc-article-meta">
      <span class="hpc-article-meta__item">📚 Beginner</span>
      <span class="hpc-article-meta__sep"></span>
      <span class="hpc-article-meta__item">⏱ 5 min read</span>
      <span class="hpc-article-meta__sep"></span>
      <span class="hpc-article-meta__tag">Slurm</span>
      <span class="hpc-article-meta__tag">Lmod</span>
      <span class="hpc-article-meta__tag">HPC Basics</span>
    </div>
  </div>
</div>

<div class="hpc-article-content">

Welcome to the world of High-Performance Computing (HPC)!

If you are new to supercomputers, you will quickly encounter two terms: **Slurm** and **Lmod**. They sound technical, but each solves a specific, intuitive problem. Understanding them will make every subsequent step in this series feel natural.

---

## Slurm — The Job Scheduler

Imagine a supercomputer as a massive kitchen with hundreds of chefs (processors) and a constant stream of customers (compute tasks). Without coordination, it would be chaos.

**Slurm** is the head chef who manages everything. Formally, Slurm is a *workload manager* and *job scheduler* — it decides **where** your job runs and **when** it runs.

<div class="notice--info">
<strong>Analogy</strong> — Think of Slurm as a restaurant manager. You place an order (submit a job script), and the manager finds a free table (an idle compute node), seats you when one is available, and keeps track of everyone so no single customer monopolizes the kitchen.
</div>

### What Slurm does for you

- **Queues your work** — You submit a job script with resource requirements (CPUs, memory, time). Slurm places it in a queue.
- **Finds available hardware** — When a matching compute node is free, Slurm dispatches your job there automatically.
- **Enforces fair sharing** — Policies prevent any single user from monopolizing the cluster.
- **Tracks everything** — Job IDs, start/end times, exit codes, and resource usage are all recorded.

### Essential Slurm commands

| Command | Purpose |
|:--------|:--------|
| `sbatch job.sh` | Submit a batch job script to the queue |
| `squeue -u "$USER"` | Check status of your queued and running jobs |
| `scancel <jobid>` | Cancel a queued or running job |
| `sinfo` | List partitions and the state of every node |
| `scontrol show node <name>` | Inspect the hardware details of a specific node |

---

## Lmod — The Environment Module System

A supercomputer hosts *hundreds* of software packages — multiple versions of Python, GCC, CUDA, MEEP, MPI libraries, and more. If every package modified your shell environment simultaneously, there would be version conflicts and crashes.

**Lmod** solves this by letting you load only the packages you need, only when you need them.

<div class="notice--info">
<strong>Analogy</strong> — Think of Lmod as a tool cabinet. Instead of scattering every wrench and screwdriver across the workshop floor, you pull out exactly the tool you need for today's job, work with it cleanly, and put it back when you're done.
</div>

### What Lmod does for you

- **Loads software on demand** — Running `module load meep/1.28.0` updates your `PATH`, `LD_LIBRARY_PATH`, and `PYTHONPATH` so MEEP is immediately available.
- **Prevents conflicts** — Loading one version of a library can automatically unload an incompatible version.
- **Reproducibility** — Your job script lists exactly which modules it loads, making your workflow reproducible.

### Essential Lmod commands

| Command | Purpose |
|:--------|:--------|
| `module avail` | List all software packages installed on the cluster |
| `module spider <name>` | Search for a specific package and show all versions |
| `module show <name>` | Preview the environment changes a module will make |
| `module load <name>` | Load a package into your current environment |
| `module list` | Show all currently loaded modules |
| `module purge` | Unload every module and start with a clean slate |

---

<div class="hpc-summary-box">
<h3>Quick Summary</h3>

- **Slurm** manages **where and when** your computation runs.
- **Lmod** manages **what software** your computation uses.

Together, they form the operational backbone of virtually every modern HPC cluster.
</div>

<div class="hpc-pagination">
  <a class="hpc-pagination__link" href="/hpc/meep/">
    <span class="hpc-pagination__dir">← Series Overview</span>
    <span class="hpc-pagination__title">HPC &amp; MEEP Series</span>
  </a>
  <a class="hpc-pagination__link hpc-pagination__link--next" href="/hpc/meep/02-know-your-hpc/">
    <span class="hpc-pagination__dir">Next Article →</span>
    <span class="hpc-pagination__title">Know Your HPC System</span>
  </a>
</div>

</div><!-- end .hpc-article-content -->
