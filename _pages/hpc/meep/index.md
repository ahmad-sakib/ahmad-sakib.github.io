---
title: "HPC and MEEP"
layout: single
permalink: /hpc/meep/
author_profile: false
---

Welcome to the HPC and MEEP roadmap. This series will take you from the foundational concepts of High-Performance Computing (HPC) to successfully running large-scale MEEP (FDTD) electromagnetic simulations on a cluster.

## Part 1: Introduction to High-Performance Computing (HPC)
*   **What is HPC?** Differences between your laptop and a supercomputer.
*   **Architecture Basics:** Nodes, cores, RAM, and interconnects.
*   **The HPC Environment:** Navigating the Linux terminal and connecting via SSH.
*   **The Role of Job Schedulers:** Introduction to Slurm/PBS.

## Part 2: Working with HPC Clusters
*   **Environment Modules:** Loading software (`module load ...`).
*   **Storage Systems:** Scratch vs. Home directories.
*   **Writing Your First Batch Script:** Anatomy of a Slurm `.sh` file.
*   **Monitoring Jobs:** Checking queue status, memory usage.

## Part 3: Introduction to MEEP and FDTD
*   **What is MEEP?** Overview of the open-source FDTD tool.
*   **Basic Concepts:** Cell size, resolution, sources, and boundary conditions (PML).
*   **Writing a Simple MEEP Script (Python):** Simulating a basic waveguide.
*   **Output Formats:** Understanding HDF5 files.

## Part 4: Scaling Up – Running MEEP on HPC
*   **Parallel MEEP (MPI):** How MEEP divides the simulation grid.
*   **Preparing the Environment:** Loading or installing MPI-enabled MEEP.
*   **The Batch Script:** Writing a Slurm script for `mpirun`.
*   **Resource Allocation:** Choosing cores and nodes.

## Part 5: Advanced MEEP Workflows & Best Practices
*   **Data Management:** Handling massive HDF5 output files.
*   **Checkpointing:** Saving and restoring simulations.
*   **Performance Tuning:** Load balancing and analyzing efficiency.
*   **Visualization:** Remote visualization vs local transfer.
