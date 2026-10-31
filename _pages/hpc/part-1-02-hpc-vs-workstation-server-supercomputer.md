---
title: "HPC vs. Workstation vs. Server vs. Supercomputer"
layout: single
permalink: /hpc/meep/part-1/02-hpc-vs-workstation-server-supercomputer/
author_profile: false
toc: false
classes: wide
series: "MEEP on HPC"
series_part: 1
series_article: 2
series_order: 2
---

{% include hpc_series_sidebar.html %}

<header class="hpc-article-hero">
	<div class="hpc-article-hero__inner">
		<span class="hpc-article-hero__series-badge">HPC &amp; MEEP Series · Part 1</span>
		<h1 class="hpc-article-hero__title">Workstation, Server, HPC, or Supercomputer?</h1>
		<p class="hpc-article-hero__lead">
			These terms describe different roles and scales of computing, and they can overlap.
		</p>
	</div>
</header>

<article class="hpc-article-content" markdown="1">

## The Difference

- **Personal computer:** A general-purpose machine for everyday individual use.
- **Workstation:** A powerful single-user computer for demanding professional work, such as engineering design or visualization.
- **Server:** A computer that provides applications, data, or other services to users and machines over a network.
- **HPC system:** Computing resources configured to solve demanding problems efficiently, often by dividing work across multiple processors or nodes [1, 2].
- **Supercomputer:** A system at the leading edge of computing scale and performance, commonly built as a large HPC cluster [1].

These are not mutually exclusive categories. A server can be a node in an HPC cluster, and HPC can run on one machine or many. A large HPC system may be called a supercomputer; an HPC cluster is not automatically one.

For MEEP simulations, a workstation is useful for writing code and testing small models. Larger simulations can be sent to an HPC cluster to use more compute resources.

## References

1. Intel, [What is HPC?](https://www.intel.com/content/www/us/en/learn/what-is-hpc.html)
2. IBM, [What is high-performance computing (HPC)?](https://www.ibm.com/think/topics/hpc)

</article>

{% include hpc-series-navigation.html %}