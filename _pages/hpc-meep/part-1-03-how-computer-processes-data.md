---
title: "How Does a Computer Process Data?"
layout: single
permalink: /hpc/meep/part-1/03-how-computer-processes-data/
author_profile: false
toc: false
classes: wide
series: "MEEP on HPC"
series_part: 1
series_article: 3
series_order: 3
---

{% include hpc_series_sidebar.html %}

<header class="hpc-article-hero">
	<div class="hpc-article-hero__inner">
		<span class="hpc-article-hero__series-badge">HPC &amp; MEEP Series · Part 1</span>
		<h1 class="hpc-article-hero__title">How Does a Computer Process Data?</h1>
		<p class="hpc-article-hero__lead">
			A quick look at how a program and its data move from storage through memory and the CPU to a result.
		</p>
	</div>
</header>

<article class="hpc-article-content" markdown="1">

## From Program to Result

A program is a list of machine instructions that tells the processor what to do. The operating system loads the program and required data from storage into RAM. The CPU then repeatedly fetches an instruction, decodes it, and executes it [1].

<div class="hpc-diagram-label">Figure 1 · A simplified path from stored program to result</div>
```mermaid
%%{init: {"themeVariables": {"fontSize": "18px"}, "flowchart": {"nodeSpacing": 36, "rankSpacing": 48}}}%%
flowchart TB
	Disk["SSD / storage<br/>program and input"] -->|load| RAM["RAM<br/>instructions and data"]
	RAM -->|fetch instruction| Fetch[Fetch]
	Fetch --> Decode[Decode]
	Decode --> Read["Read operands<br/>from registers"]
	Read --> Execute["Execute<br/>ALU / FPU"]
	Execute --> Result["Write result<br/>to a register"]
	Result -->|continue program| Fetch
	Result -->|when needed| RAM
	RAM -->|save output| Disk

	classDef storage fill:#ffedd5,stroke:#c2410c,color:#7c2d12,stroke-width:2px
	classDef memory fill:#e0e7ff,stroke:#4f46e5,color:#312e81,stroke-width:2px
	classDef cpu fill:#dbeafe,stroke:#2563eb,color:#172554,stroke-width:2px
	classDef result fill:#ccfbf1,stroke:#0f766e,color:#134e4a,stroke-width:2px
	class Disk storage
	class RAM memory
	class Fetch,Decode,Read,Execute cpu
	class Result result
	linkStyle default stroke:#64748b,stroke-width:2px
```

The CPU uses **registers** for values it is working with immediately. A small **cache** keeps copies of recently or frequently used instructions and data close to the CPU, reducing trips to RAM. The exact path varies by processor; data does not always pass through every level in a fixed sequence [2].

For example, to calculate `2 + 3`, the CPU fetches the add instruction, reads the two values from registers, adds them in an arithmetic unit, and writes `5` back to a register. The program can then use that result or save it to memory or a file.

## In Short

Storage keeps programs and files; RAM holds active work; the CPU executes instructions using registers and cached data, then produces results.

## References

1. RISC-V International, [RV32I Base Integer Instruction Set](https://docs.riscv.org/reference/isa/v20260120/unpriv/rv32.html)
2. IBM, [Mainframe hardware concepts](https://www.ibm.com/docs/en/zos-basic-skills?topic=concepts-mainframe-hardware)

</article>

{% include hpc-series-navigation.html %}