---
title: "What Is HPC?"
layout: single
permalink: /hpc/meep/part-1/01-what-is-hpc/
author_profile: false
toc: false
classes: wide
series: "MEEP on HPC"
series_part: 1
series_article: 1
series_order: 1
---

{% include hpc_series_sidebar.html %}

<div id="hpc-reading-progress" aria-hidden="true"></div>
<script>
(function() {
	var bar = document.getElementById('hpc-reading-progress');
	window.addEventListener('scroll', function() {
		var doc = document.documentElement;
		var scrolled = doc.scrollTop || document.body.scrollTop;
		var total = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
		bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
	});
})();
</script>

<header class="hpc-article-hero">
	<div class="hpc-article-hero__inner">
		<span class="hpc-article-hero__series-badge">HPC &amp; MEEP Series · Part 1</span>
		<h1 class="hpc-article-hero__title">What Is High Performance Computing?</h1>
		<p class="hpc-article-hero__lead">
			A simple introduction to serial and parallel computing, HPC clusters, and how a cluster runs a computational job.
		</p>
		<div class="hpc-article-meta" aria-label="Article topics">
			<span class="hpc-article-meta__tag">Parallel computing</span>
			<span class="hpc-article-meta__tag">Clusters</span>
			<span class="hpc-article-meta__tag">Slurm</span>
		</div>
	</div>
</header>

<article class="hpc-article-content" markdown="1">

## Serial and Parallel Computing

An ordinary computer can perform a calculation one step after another. This is called **serial computing**. HPC makes greater use of **parallel computing**: when a problem can be divided into parts, multiple processors can work on those parts at the same time.

Imagine a problem with many calculations. In a serial approach, the work is done in sequence:

<div class="hpc-diagram-label">Figure 1 · Serial execution</div>
```mermaid
flowchart LR
	subgraph Serial[Serial]
		direction LR
		S1[Task 1] --> S2[Task 2] --> S3[Task 3] --> S4[Task 4]
	end
	style Serial fill:#f8fafc,stroke:#94a3b8,color:#334155,stroke-width:2px
	classDef task fill:#dbeafe,stroke:#2563eb,color:#172554,stroke-width:2px
	class S1,S2,S3,S4 task
	linkStyle default stroke:#64748b,stroke-width:2px
```

If the problem can be divided, some of those calculations can happen at the same time:

<div class="hpc-diagram-label">Figure 2 · Parallel execution across cores</div>
```mermaid
flowchart TB
	subgraph Parallel[Parallel]
		direction LR
		T1[Task 1] --> C1[Core 1]
		T2[Task 2] --> C2[Core 2]
		T3[Task 3] --> C3[Core 3]
		T4[Task 4] --> C4[Core 4]
	end
	style Parallel fill:#f0fdfa,stroke:#5eead4,color:#134e4a,stroke-width:2px
	classDef task fill:#dbeafe,stroke:#2563eb,color:#172554,stroke-width:2px
	classDef core fill:#ccfbf1,stroke:#0f766e,color:#134e4a,stroke-width:2px
	class T1,T2,T3,T4 task
	class C1,C2,C3,C4 core
	linkStyle default stroke:#64748b,stroke-width:2px
```

This can reduce the time needed for a computation. But not every problem can be perfectly parallelized. Some calculations depend on earlier results, so the amount of useful parallelism depends on the problem.

In a simple way:

<div class="hpc-diagram-label">Figure 3 · From a large problem to parallel work</div>
```mermaid
flowchart LR
	P[Large problem] --> D[Smaller tasks] --> R[Parallel processing]
	classDef problem fill:#ffedd5,stroke:#c2410c,color:#7c2d12,stroke-width:2px
	classDef tasks fill:#dbeafe,stroke:#2563eb,color:#172554,stroke-width:2px
	classDef parallel fill:#ccfbf1,stroke:#0f766e,color:#134e4a,stroke-width:2px
	class P problem
	class D tasks
	class R parallel
	linkStyle default stroke:#64748b,stroke-width:2px
```

High Performance Computing (HPC) uses computing resources to solve large or demanding problems. Parallel processing is an important part of HPC, but a complete HPC system also needs memory, storage, networking, and software to manage the work [1, 2].

### Why Do We Need HPC?

We use HPC when a computation is too large or time-consuming for a single computer to handle efficiently. Scientific simulations, engineering calculations, and large-scale data analysis are some examples [2, 4].

## What Is an HPC Cluster?

An **HPC cluster** is a group of connected computers that work together as a computing system. The computers are called **nodes**. Each node has its own processors, memory, and other resources, and the nodes communicate over a network [1].

<div class="hpc-diagram-label">Figure 4 · Compute nodes connected through a cluster network</div>
```mermaid
flowchart TB
	Scheduler[Scheduler] --> Network[Cluster network]
	Network --> N1[Compute node 1]
	Network --> N2[Compute node 2]
	Network --> N3[Compute node 3]
	classDef coordinator fill:#ffedd5,stroke:#c2410c,color:#7c2d12,stroke-width:2px
	classDef network fill:#e0e7ff,stroke:#4f46e5,color:#312e81,stroke-width:2px
	classDef node fill:#ccfbf1,stroke:#0f766e,color:#134e4a,stroke-width:2px
	class Scheduler coordinator
	class Network network
	class N1,N2,N3 node
	linkStyle default stroke:#64748b,stroke-width:2px
```

So an HPC cluster is not just one extremely powerful computer. It is a group of computers that can share a workload when the software and problem allow it.

### What Is a Node?

An individual computer in a cluster is called a **node**. A node may have:

- CPU cores
- RAM
- storage
- network interfaces
- GPUs, on some systems

Different workloads benefit from different resources. For example, GPUs can accelerate some workloads with many parallel mathematical operations, but they are not required for every HPC job [2].

<div class="hpc-diagram-label">Figure 5 · Common resources inside a compute node</div>
```mermaid
flowchart TB
	Node[Compute node]
	Node --> CPU[CPU cores]
	Node --> RAM[Memory]
	Node --> Storage[Storage]
	Node --> Network[Network interface]
	Node --> GPU[Optional GPU]
	classDef node fill:#e0e7ff,stroke:#4f46e5,color:#312e81,stroke-width:2px
	classDef compute fill:#dbeafe,stroke:#2563eb,color:#172554,stroke-width:2px
	classDef memory fill:#ccfbf1,stroke:#0f766e,color:#134e4a,stroke-width:2px
	classDef io fill:#ffedd5,stroke:#c2410c,color:#7c2d12,stroke-width:2px
	class Node node
	class CPU,GPU compute
	class RAM memory
	class Storage,Network io
	linkStyle default stroke:#64748b,stroke-width:2px
```

## Scale-up and Scale-out

There are two common ways to increase the resources available to a computation [1].

### Scale-up

With **scale-up**, a single computer uses more of its own resources, such as additional CPU cores or memory.

<div class="hpc-diagram-label">Figure 6 · Scale-up adds capacity to one system</div>
```mermaid
flowchart LR
	subgraph ScaleUp[Scale-up: one computer]
		U1[CPU] --- U2[More cores and memory]
	end
	classDef hardware fill:#dbeafe,stroke:#2563eb,color:#172554,stroke-width:2px
	class U1,U2 hardware
	linkStyle default stroke:#64748b,stroke-width:2px
```

### Scale-out

With **scale-out**, work is distributed across multiple computers connected through a network. This is one way to use an HPC cluster.

<div class="hpc-diagram-label">Figure 7 · Scale-out connects multiple systems</div>
```mermaid
flowchart LR
	subgraph ScaleOut[Scale-out: multiple computers]
		O1[Node 1] --- Net[Network]
		Net --- O2[Node 2]
		Net --- O3[Node 3]
	end
	classDef node fill:#dbeafe,stroke:#2563eb,color:#172554,stroke-width:2px
	classDef network fill:#ccfbf1,stroke:#0f766e,color:#134e4a,stroke-width:2px
	class O1,O2,O3 node
	class Net network
	linkStyle default stroke:#64748b,stroke-width:2px
```

## How Does an HPC Job Work?

The exact workflow depends on the software and the problem, but a typical HPC job follows these steps:

1. **Prepare the problem.** The program and input data are prepared for computation.
2. **Divide the work.** If possible, the problem is split into tasks or data regions that can be processed in parallel.
3. **Request resources.** A job scheduler manages the cluster and assigns resources such as nodes, CPU cores, memory, and sometimes GPUs. Slurm is one example of a workload manager [3].
4. **Compute and communicate.** The assigned resources perform their parts of the calculation. They may exchange data or intermediate results as the program runs.
5. **Collect results.** The program saves or combines its output for analysis.

In this series I will explain **SLURM**, the workload manager used on many HPC systems, including YZ HPC, which I am using. We will look at how to request resources and run jobs in the next articles.

<div class="hpc-diagram-label">Figure 8 · A typical HPC job lifecycle</div>
```mermaid
flowchart LR
	Input[Program and data] --> Submit[Submit job]
	Submit --> Schedule[Scheduler allocates resources]
	Schedule --> Run[Parallel computation]
	Run --> Output[Results]
	classDef prepare fill:#ffedd5,stroke:#c2410c,color:#7c2d12,stroke-width:2px
	classDef schedule fill:#e0e7ff,stroke:#4f46e5,color:#312e81,stroke-width:2px
	classDef compute fill:#ccfbf1,stroke:#0f766e,color:#134e4a,stroke-width:2px
	classDef result fill:#dcfce7,stroke:#15803d,color:#14532d,stroke-width:2px
	class Input,Submit prepare
	class Schedule schedule
	class Run compute
	class Output result
	linkStyle default stroke:#64748b,stroke-width:2px
```

<div class="hpc-summary-box" markdown="1">
<h3>In Short</h3>

An HPC cluster is **a collection of interconnected computers that work together to solve large computational problems using parallel computing**.
</div>

## References

1. Intel, [What is HPC?](https://www.intel.com/content/www/us/en/learn/what-is-hpc.html)
2. IBM, [What is high-performance computing (HPC)?](https://www.ibm.com/think/topics/hpc)
3. SchedMD, [Slurm Workload Manager overview](https://slurm.schedmd.com/overview.html)
4. NVIDIA, [High-performance computing](https://www.nvidia.com/en-us/glossary/high-performance-computing/)

</article>

{% include hpc-series-navigation.html %}