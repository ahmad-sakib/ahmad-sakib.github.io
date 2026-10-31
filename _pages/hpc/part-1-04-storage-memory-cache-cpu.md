    ---
    title: "Storage, Memory, Cache, and CPU"
    layout: single
    permalink: /hpc/meep/part-1/04-storage-memory-cache-cpu/
    author_profile: false
    toc: false
    classes: wide
    series: "MEEP on HPC"
    series_part: 1
    series_article: 4
    series_order: 4
    ---

    {% include hpc_series_sidebar.html %}

    <header class="hpc-article-hero">
        <div class="hpc-article-hero__inner">
            <span class="hpc-article-hero__series-badge">HPC &amp; MEEP Series · Part 1</span>
            <h1 class="hpc-article-hero__title">Storage, Memory, Cache, and CPU</h1>
            <p class="hpc-article-hero__lead">
                How a computer keeps data, brings active work close to the processor, and performs instructions.
            </p>
        </div>
    </header>

    <article class="hpc-article-content" markdown="1">

    ## The Memory Hierarchy

    Computers use several kinds of storage because no single type is simultaneously fastest, largest, and cheapest. Small, fast memories sit close to the CPU; larger, persistent storage holds files for the long term [1].

    <div class="hpc-diagram-label">Figure 1 · From persistent storage to CPU execution</div>

    ```mermaid
    %%{init: {"themeVariables": {"fontSize": "22px"}, "flowchart": {"nodeSpacing": 56, "rankSpacing": 64, "diagramPadding": 24}}}%%
    flowchart TB
        Disk["HDD / SSD<br/>persistent files"] -->|load active program and data| RAM["RAM<br/>working data"]
        RAM <--> L3["L3 cache<br/>larger, shared"]
        L3 <--> L2["L2 cache"]
        L2 <--> L1["L1 cache<br/>small, fast"]
        L1 <--> Registers["CPU registers<br/>current values"]
        Registers <--> Execute["CPU execution units<br/>ALU / FPU"]
        Execute -->|save results| RAM
        RAM -->|write files| Disk

        classDef persistent fill:#ffedd5,stroke:#c2410c,color:#7c2d12,stroke-width:2px
        classDef working fill:#e0e7ff,stroke:#4f46e5,color:#312e81,stroke-width:2px
        classDef cache fill:#ccfbf1,stroke:#0f766e,color:#134e4a,stroke-width:2px
        classDef processor fill:#dbeafe,stroke:#2563eb,color:#172554,stroke-width:2px
        class Disk persistent
        class RAM working
        class L1,L2,L3 cache
        class Registers,Execute processor
        linkStyle default stroke:#64748b,stroke-width:2px
    ```

    The arrows show a simplified hierarchy, not a route every instruction must follow: caches keep copies of useful data, and the processor accesses whichever level holds what it needs [1, 2].

    | Component | Role |
    | --- | --- |
    | **HDD / SSD** | Persistent storage for programs and files. HDDs use magnetic disks; SSDs use flash memory. |
    | **RAM** | Temporary working space for programs and data in use. Its contents are normally lost when power is off. |
    | **CPU cache (L1, L2, L3)** | Small, fast storage for recently or frequently used instructions and data. L1 is typically closest to a core; cache sizes and sharing vary by processor. |
    | **Registers** | Very small storage inside a CPU core for values used directly by instructions. Arithmetic operations commonly read and write registers [2]. |
    | **CPU** | Executes instructions. Its execution units perform operations such as integer arithmetic (ALU) and floating-point arithmetic (FPU). |

    **ROM** means read-only memory. The term is often used for nonvolatile memory holding firmware; it is not the same as RAM, and modern firmware storage may be rewritable.

    ## How Data Moves

    When a program starts, the operating system loads its code and needed data from storage into RAM. The CPU works through instructions, using cache to avoid some slower RAM accesses and registers for immediate operands. Results are written back to memory and, when needed, saved as files.

    The CPU, RAM, and input/output devices communicate through hardware interconnects. These are often introduced as **buses** in basic computer diagrams; real systems may use several specialized links rather than one shared bus [3].

    ## In Short

    Moving upward toward the CPU, memory is generally faster, smaller, and more expensive per byte. Storage is slower but keeps much more data when the computer is turned off [1].

    ## References

    1. GeeksforGeeks, [Memory Hierarchy Design and its Characteristics](https://www.geeksforgeeks.org/computer-organization-architecture/memory-hierarchy-design-and-its-characteristics/)
    2. RISC-V International, [RV32I Base Integer Instruction Set](https://docs.riscv.org/reference/isa/v20260120/unpriv/rv32.html)
    3. IBM, [Mainframe hardware: Terminology](https://www.ibm.com/docs/en/zos-basic-skills?topic=concepts-mainframe-hardware-terminology)

    </article>

    {% include hpc-series-navigation.html %}