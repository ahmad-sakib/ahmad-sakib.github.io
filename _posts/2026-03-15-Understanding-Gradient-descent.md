---
layout: single
title: "The Intuitive Way to Learn: Understanding Gradient Descent by Ahmad Hasan Sakib"
author: Ahmad Hasan Sakib
excerpt: "A deep-dive into the mathematical foundation of optimization and how computers learn."
date: 2026-06-25 16:30:00 +0600
categories: ML
author_profile: false
mathjax: true
read_time: true
header:
  overlay_image: https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?auto=format&fit=crop&w=1600&q=80
  overlay_filter: "linear-gradient(135deg, rgba(10,40,40,0.85) 0%, rgba(30,120,120,0.6) 100%)"
---

<script src="https://cdn.tailwindcss.com"></script>
<script>
    // Explicitly configure Tailwind to class-based dark mode
    tailwind.config = {
        darkMode: 'class'
    };
</script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">

<style>
/* =========================
   DESIGN SYSTEM & VARIABLES
   ========================= */
:root {
    --bg-space: #0a0f18;
    --text-primary: #f8fafc;
    --text-muted: #94a3b8;
    --accent-sky: #38bdf8;
    --accent-emerald: #10b981;
    --accent-rose: #f43f5e;
    
    --card-bg: rgba(15, 23, 42, 0.65);
    --border-glow: rgba(56, 189, 248, 0.15);
    --border-light: rgba(255, 255, 255, 0.08);
    --equation-bg: rgba(30, 41, 59, 0.4);
}

/* =========================
   TYPOGRAPHY
   ========================= */
.serif {
    font-family: 'Lora', serif;
}

.prose-custom {
    font-family: 'Lora', serif;
    font-size: 1.125rem;
    line-height: 1.85;
    color: var(--text-primary);
}

.prose-custom p {
    margin-bottom: 1.75rem;
}

.prose-custom strong {
    color: #ffffff;
    font-weight: 700;
}

.prose-custom h2,
.prose-custom h3,
.prose-custom h4 {
    font-family: 'Montserrat', sans-serif;
    color: var(--accent-sky) !important;
    font-weight: 700;
    margin-top: 2.5rem;
    margin-bottom: 1.25rem;
    letter-spacing: -0.02em;
}

.prose-custom h2 {
    font-size: 1.85rem;
    border-bottom: 1px solid var(--border-light);
    padding-bottom: 0.5rem;
}

/* =========================
   EDITORIAL DROP CAP
   ========================= */
.drop-cap::first-letter {
    font-family: 'Lora', serif;
    float: left;
    font-size: 4.5rem;
    line-height: 0.85;
    margin: 0.1em 0.15em 0 0;
    font-weight: 700;
    color: var(--accent-sky);
    text-shadow: 0 0 20px rgba(56, 189, 248, 0.25);
}

/* =========================
   EQUATION CARDS
   ========================= */
.equation-box {
    background: var(--equation-bg);
    border-left: 4px solid var(--accent-sky);
    border-radius: 8px;
    color: var(--text-primary);
    padding: 1.5rem;
    margin: 2rem 0;
    box-shadow: 
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow-x: auto;
    backdrop-filter: blur(4px);
    border-top: 1px solid var(--border-light);
    border-right: 1px solid var(--border-light);
    border-bottom: 1px solid var(--border-light);
}

/* =========================
   COMPARISON TABLES
   ========================= */
.table-container {
    overflow-x: auto;
    margin: 2rem 0;
    border-radius: 12px;
    border: 1px solid var(--border-light);
    background: rgba(15, 23, 42, 0.4);
}

table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.95rem;
    text-align: left;
}

th {
    background-color: rgba(30, 41, 59, 0.7);
    color: var(--accent-sky);
    font-weight: 600;
    padding: 14px 18px;
    border-bottom: 2px solid var(--border-light);
}

td {
    padding: 14px 18px;
    border-bottom: 1px solid var(--border-light);
    color: var(--text-muted);
}

tr:last-child td {
    border-bottom: none;
}

tr:hover {
    background-color: rgba(255, 255, 255, 0.02);
}

/* =========================
   INTERACTIVE SIMULATION
   ========================= */
.simulation-card {
    background: var(--card-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border-light);
    border-radius: 16px;
    box-shadow: 
        0 15px 35px rgba(0, 0, 0, 0.4),
        inset 0 1px 1px rgba(255, 255, 255, 0.1);
}

.simulation-card:hover {
    border-color: var(--border-glow);
    box-shadow: 
        0 20px 40px rgba(56, 189, 248, 0.05),
        0 15px 35px rgba(0, 0, 0, 0.4),
        inset 0 1px 1px rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

/* Custom Styled Range Sliders */
input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    height: 6px;
    border-radius: 3px;
    outline: none;
}

input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: var(--accent-sky);
    cursor: pointer;
    box-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
    transition: transform 0.1s ease, background 0.1s ease;
}

input[type=range]::-webkit-slider-thumb:hover {
    transform: scale(1.25);
    background: #ffffff;
}

input[type=range]:disabled {
    opacity: 0.5;
}

input[type=range]:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
    background: var(--text-muted);
    box-shadow: none;
}

/* Callouts and Quotes */
blockquote {
    border-left: 4px solid var(--accent-sky);
    background: rgba(56, 189, 248, 0.03);
    padding: 1.25rem 1.5rem;
    margin: 2rem 0;
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: var(--text-primary);
}

blockquote p {
    margin-bottom: 0;
}
</style>

<div class="px-2 md:px-6 py-4 prose-custom max-w-none">
    
    <p class="drop-cap mb-8 text-lg md:text-xl text-slate-300">
        In the vast landscape of modern artificial intelligence, nearly every breakthrough—from large language models to medical diagnostic engines—relies on a singular, elegant mathematical foundation: optimization. Specifically, the quest to understand how a machine can "find" the best possible answer by walking downhill.
    </p>

    <blockquote>
        Optimization is the mathematical engine of learning. It is the formal translation of the trial-and-error process into calculus, guiding a model from blind guessing to surgical precision.
    </blockquote>

    <h2>1. The Context: Supervised Learning & Linear Regression</h2>
    <p>
        To understand optimization, we must first establish what we are trying to optimize. In supervised machine learning, our algorithm learns patterns from labeled training examples. The simplest conceptual laboratory for this is <strong>Linear Regression</strong>.
    </p>
    <p>
        Imagine trying to predict a student's final exam score $(y)$ based on the number of hours they studied $(x)$. We collect a small training dataset:
    </p>
    
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Hours Studied ($x$)</th>
                    <th>Exam Score ($y$)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2.0 hours</td>
                    <td>50 points</td>
                </tr>
                <tr>
                    <td>4.0 hours</td>
                    <td>65 points</td>
                </tr>
                <tr>
                    <td>6.0 hours</td>
                    <td>80 points</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h2>2. The Hypothesis</h2>
    <p>
        To model this relationship, we assume it is roughly linear. We make a mathematical guess called the <strong>hypothesis function</strong>, denoted as $h_\theta(x)$:
    </p>
    <div class="equation-box text-center">
        $$h_\theta(x) = \theta_0 + \theta_1 x$$
    </div>
    <p>
        In this equation:
    </p>
    <ul>
        <li><strong>$\theta_1$ (Weight / Slope)</strong>: Determines the impact of study hours on the predicted score.</li>
        <li><strong>$\theta_0$ (Bias / Intercept)</strong>: The predicted score if study hours were zero.</li>
    </ul>
    <p>
        Our goal is to adjust the model's parameters $\boldsymbol{\theta} = [\theta_0, \theta_1]^T$ so that the predictions close the gap with the real targets.
    </p>

    <h2>3. Measuring Error: The Cost Function</h2>
    <p>
        To systematically guide this adjustment, we need a mathematical metric of performance. This is the <strong>Cost Function</strong> (also called the loss or objective function). It measures the total error between our predictions and the actual data points.
    </p>
    <p>
        For linear regression, we standardly use the <strong>Mean Squared Error (MSE)</strong>, which squares the errors to penalize larger deviations more heavily:
    </p>
    <div class="equation-box">
        $$J(\theta_0, \theta_1) = \frac{1}{2m}\sum_{i=1}^{m} \left(h_\theta(x^{(i)}) - y^{(i)}\right)^2$$
    </div>
    <p>
        Where $m$ is the number of training examples, $x^{(i)}$ is the input feature of the $i$-th example, and $y^{(i)}$ is its corresponding true label. The coefficient $\frac{1}{2}$ is a convenience factor that cancels out during differentiation.
    </p>
    <p>
        Because this is a quadratic function, its shape is a bowl (a convex paraboloid). This convex shape is highly desirable: it guarantees that there is only one minimum point—the <strong>global minimum</strong>—and no local traps.
    </p>

    <h2>4. The Engine: Gradient Descent</h2>
    <p>
        How do we find that global minimum? We use <strong>Gradient Descent</strong>, an iterative optimization algorithm that updates the parameters by taking small steps in the direction of the steepest descent on the cost surface.
    </p>
    <p>
        The update rule is formulated as:
    </p>
    <div class="equation-box">
        $$\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta_0, \theta_1)$$
    </div>
    <p>
        Let's unpack each component of this equation:
    </p>
    <ul>
        <li><strong>$\theta_j$</strong>: The parameter we are updating.</li>
        <li><strong>$:=$</strong>: The assignment operator, meaning the parameter is overwritten in place.</li>
        <li><strong>$\alpha$ (Alpha)</strong>: The <strong>Learning Rate</strong>. This hyperparameter controls how large a step we take.</li>
        <li><strong>$\frac{\partial J}{\partial \theta_j}$</strong>: The partial derivative of the cost function with respect to $\theta_j$. This derivative represents the slope of the cost function in that parameter's dimension.</li>
    </ul>

    <blockquote>
        <strong>Why the minus sign?</strong> The gradient vector points in the direction of the steepest <em>ascent</em> (local uphill). By subtracting the gradient, we force the parameters to move in the opposite direction—steepest <em>descent</em> (local downhill).
    </blockquote>

    <h2>5. The Physics Connection: Energy Landscapes and Gradient Flows</h2>
    <p>
        As a physicist, this optimization process has a beautiful isomorphism in classical mechanics. 
    </p>
    <p>
        In physical systems, conservative forces drive objects towards states of minimum potential energy. The force $\mathbf{F}$ acting on a particle is defined as the negative gradient of the potential energy field $U(\mathbf{r})$:
    </p>
    <div class="equation-box text-center">
        $$\mathbf{F} = -\nabla U(\mathbf{r})$$
    </div>
    <p>
        If we place a marble in a bowl, gravity acts as the force driving it to the bottom. In a highly viscous fluid (an <strong>overdamped physical system</strong>), the inertial effects (acceleration) are negligible, and the velocity $\mathbf{v} = \frac{d\mathbf{r}}{dt}$ is directly proportional to the force:
    </p>
    <div class="equation-box text-center">
        $$\gamma \frac{d\mathbf{r}}{dt} = \mathbf{F} = -\nabla U(\mathbf{r})$$
    </div>
    <p>
        This continuous-time system is known as <strong>gradient flow</strong>. When discretized into computer steps, it becomes exactly the Gradient Descent algorithm! The potential energy field $U$ corresponds to our cost function $J$, the position coordinates $\mathbf{r}$ correspond to our parameters $\boldsymbol{\theta}$, and the damping factor $\gamma^{-1}$ acts as the learning rate $\alpha$.
    </p>

    <h2>6. Choosing the Learning Rate ($\alpha$)</h2>
    <p>
        The velocity and stability of convergence depend heavily on our choice of the learning rate $\alpha$:
    </p>
    <ul>
        <li>
            <strong>$\alpha$ is too small:</strong> The algorithm takes tiny, cautious steps. It will eventually find the minimum, but it will take a massive amount of computation time.
        </li>
        <li>
            <strong>$\alpha$ is just right:</strong> The algorithm converges steadily and efficiently to the minimum.
        </li>
        <li>
            <strong>$\alpha$ is too large (Overshooting):</strong> The steps overshoot the valley. Because the gradient is steeper further up the other side, the next step becomes even larger, causing the system to oscillate wildly and diverge towards infinity.
        </li>
    </ul>

    <h2>7. Variants of Gradient Descent</h2>
    <p>
        Depending on how much data we evaluate before making a parameter update, gradient descent is divided into three primary paradigms:
    </p>

    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Variant</th>
                    <th>Data per Update</th>
                    <th>Path to Minimum</th>
                    <th>Pros</th>
                    <th>Cons</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Batch GD</strong></td>
                    <td>Entire dataset</td>
                    <td>Smooth, direct</td>
                    <td>Stable convergence, vectorization</td>
                    <td>Very slow for massive datasets</td>
                </tr>
                <tr>
                    <td><strong>Stochastic GD (SGD)</strong></td>
                    <td>1 random sample</td>
                    <td>Noisy, erratic</td>
                    <td>Fast, can escape local minima</td>
                    <td>Never truly settles, noisy steps</td>
                </tr>
                <tr>
                    <td><strong>Mini-Batch GD</strong></td>
                    <td>Subset (batch size $B$)</td>
                    <td>Moderately smooth</td>
                    <td>Exploits GPU parallelism, stable</td>
                    <td>Requires tuning the batch size $B$</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- INTERACTIVE LABORATORY -->
    <section class="simulation-card p-6 md:p-8 my-12">
        <div class="mb-6 border-b border-white/10 pb-4 text-center">
            <h3 class="text-2xl font-bold tracking-wide text-sky-400 m-0 p-0">Optimization Laboratory</h3>
            <p class="text-slate-400 text-sm mt-1">Interactive real-time visualization of Gradient Descent updates</p>
        </div>

        <div class="relative w-full mb-6 bg-[#090d16] border border-white/5 rounded-xl p-2 md:p-4 h-[350px]">
            <canvas id="gdChart"></canvas>
        </div>

        <div class="space-y-6">
            <!-- Slider Controls -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Objective Function</label>
                    <select id="funcSelect" class="w-full bg-[#1e293b] border border-white/10 text-slate-200 rounded-lg p-2.5 focus:border-sky-400 outline-none cursor-pointer text-sm">
                        <option value="convex">Convex Quadratic (Single Minimum)</option>
                        <option value="nonconvex">Non-Convex Polynomial (Double Well)</option>
                        <option value="oscillatory">Multi-Modal (Cosine & Parabola)</option>
                    </select>
                </div>
                
                <div>
                    <div class="flex justify-between mb-2">
                        <label class="text-xs font-bold uppercase tracking-wider text-slate-400">Learning Rate ($\alpha$)</label>
                        <span id="lrVal" class="text-sky-400 font-mono font-bold">0.150</span>
                    </div>
                    <input id="learningRate" type="range" min="0.005" max="0.8" step="0.005" value="0.15">
                </div>

                <div>
                    <div class="flex justify-between mb-2">
                        <label class="text-xs font-bold uppercase tracking-wider text-slate-400">Start Position ($x_0$)</label>
                        <span id="xVal" class="text-sky-400 font-mono font-bold">2.5</span>
                    </div>
                    <input id="initialX" type="range" min="-3.0" max="3.0" step="0.1" value="2.5">
                </div>
            </div>

            <!-- Mathematical Definition & Status -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Mathematical Model</h4>
                    <div id="mathFormula" class="text-xs md:text-sm font-mono text-sky-300 py-1">
                        f(x) = x² + x + 1 | f'(x) = 2x + 1
                    </div>
                </div>
                <div>
                    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Optimizer Status</h4>
                    <div class="flex items-center mt-1">
                        <div id="statusBadge" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                            <span class="w-2 h-2 mr-1.5 rounded-full bg-slate-400 animate-pulse"></span>
                            Ready
                        </div>
                        <span id="statusText" class="text-xs text-slate-400 ml-3">Adjust parameters and optimize</span>
                    </div>
                </div>
            </div>

            <!-- Live Dashboard -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="bg-[#111827]/40 border border-white/5 p-3 rounded-lg text-center">
                    <span class="block text-[10px] font-bold uppercase text-slate-500">Step Count</span>
                    <span id="stepCount" class="text-lg font-mono font-bold text-slate-100">0</span>
                </div>
                <div class="bg-[#111827]/40 border border-white/5 p-3 rounded-lg text-center">
                    <span class="block text-[10px] font-bold uppercase text-slate-500">Current position $x$</span>
                    <span id="currX" class="text-lg font-mono font-bold text-slate-100">0.0000</span>
                </div>
                <div class="bg-[#111827]/40 border border-white/5 p-3 rounded-lg text-center">
                    <span class="block text-[10px] font-bold uppercase text-slate-500">Cost $f(x)$</span>
                    <span id="currCost" class="text-lg font-mono font-bold text-slate-100">0.0000</span>
                </div>
                <div class="bg-[#111827]/40 border border-white/5 p-3 rounded-lg text-center">
                    <span class="block text-[10px] font-bold uppercase text-slate-500">Slope $f'(x)$</span>
                    <span id="currGrad" class="text-lg font-mono font-bold text-slate-100">0.0000</span>
                </div>
            </div>

            <!-- Control Buttons -->
            <div class="flex flex-wrap gap-3">
                <button id="runBtn" class="flex-1 min-w-[140px] py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold rounded-lg transition duration-200 transform active:scale-95 shadow-md shadow-sky-500/10 text-xs tracking-wider uppercase">
                    Run Optimization
                </button>
                <button id="pauseBtn" class="flex-1 min-w-[140px] py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 text-slate-200 font-bold rounded-lg transition duration-200 transform active:scale-95 text-xs tracking-wider uppercase hidden">
                    Pause
                </button>
                <button id="stepBtn" class="flex-1 min-w-[140px] py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 text-slate-200 font-bold rounded-lg transition duration-200 transform active:scale-95 text-xs tracking-wider uppercase">
                    Single Step
                </button>
                <button id="resetBtn" class="py-3 px-6 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-900/30 text-rose-300 font-bold rounded-lg transition duration-200 transform active:scale-95 text-xs tracking-wider uppercase">
                    Reset
                </button>
            </div>
        </div>
    </section>

    <h2>8. Advanced Refinements: Modern Adaptive Optimizers</h2>
    <p>
        While vanilla gradient descent is highly intuitive, it struggles with practical challenges such as saddle points, narrow valleys, and local minima. Modern machine learning utilizes advanced extensions to refine step directions:
    </p>
    <ul>
        <li>
            <strong>Momentum:</strong> Introduces physical inertia by adding a fraction of the previous step's update direction to the current step. This accelerates convergence in consistent directions and dampens transverse oscillations.
        </li>
        <li>
            <strong>RMSprop (Root Mean Squared Propagation):</strong> Scales the learning rate of each parameter inversely by the running average of its recent gradient magnitude. This slows down updates in highly volatile dimensions and accelerates updates in flat dimensions.
        </li>
        <li>
            <strong>Adam (Adaptive Moment Estimation):</strong> The current gold standard in deep learning. It combines the momentum direction tracking and the RMSprop individual learning rate adjustments, ensuring rapid, stable convergence on complex surfaces.
        </li>
    </ul>

    <h2>9. Final Intuition</h2>
    <p>
        Optimization algorithms form the vital connection between mathematical logic and machine intelligence. By translating the gradient direction into physical-like motion, we can guide a computer down the steepest slopes, finding solutions to parameters that would take humans lifetimes to solve.
    </p>
    <p>
        Next time you see a model generating photorealistic images or writing code, remember that it is just a mathematical marble finding its way home down a high-dimensional energy landscape.
    </p>

    <div class="mt-12 pt-6 border-t border-white/10 text-center">
        <a href="{{ site.baseurl }}/ml/gradient-descent-visualizer" class="text-sky-400 hover:text-sky-300 font-bold underline transition-colors">
            Explore the separate interactive full-screen visualizer →
        </a>
    </div>
</div>

<script>
    const ctx = document.getElementById('gdChart').getContext('2d');
    
    // UI elements
    const funcSelect = document.getElementById("funcSelect");
    const learningRate = document.getElementById("learningRate");
    const initialX = document.getElementById("initialX");
    
    const lrVal = document.getElementById("lrVal");
    const xVal = document.getElementById("xVal");
    
    const runBtn = document.getElementById("runBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const stepBtn = document.getElementById("stepBtn");
    const resetBtn = document.getElementById("resetBtn");
    
    const mathFormula = document.getElementById("mathFormula");
    const stepCountDisplay = document.getElementById("stepCount");
    const currXDisplay = document.getElementById("currX");
    const currCostDisplay = document.getElementById("currCost");
    const currGradDisplay = document.getElementById("currGrad");

    // Math objective functions configs
    const configs = {
        convex: {
            f: (x) =>  x * x + x + 1,
            df: (x) => x - 1,
            formula: "f(x) = x² + x + 1",
            dfFormula: "f'(x) = 2x  1",
            defaultX: 2.5,
            minX: -3.0,
            maxX: 3.0,
            stepX: 0.1,
            defaultLr: 0.150
        },
        nonconvex: {
            f: (x) => 0.1 * Math.pow(x, 4) - 0.2 * Math.pow(x, 3) - 0.8 * x * x + 0.5 * x + 3.0,
            df: (x) => 0.4 * Math.pow(x, 3) - 0.6 * x * x - 1.6 * x + 0.5,
            formula: "f(x) = 0.1x⁴ - 0.2x³ - 0.8x² + 0.5x + 3",
            dfFormula: "f'(x) = 0.4x³ - 0.6x² - 1.6x + 0.5",
            defaultX: -2.5,
            minX: -3.0,
            maxX: 3.0,
            stepX: 0.1,
            defaultLr: 0.080
        },
        oscillatory: {
            f: (x) => -Math.cos(2 * x) + 0.1 * x * x + 1.0,
            df: (x) => 2 * Math.sin(2 * x) + 0.2 * x,
            formula: "f(x) = -cos(2x) + 0.1x² + 1",
            dfFormula: "f'(x) = 2sin(2x) + 0.2x",
            defaultX: 2.8,
            minX: -3.2,
            maxX: 3.2,
            stepX: 0.1,
            defaultLr: 0.100
        }
    };

    let currentX = 2.5;
    let steps = [];
    let stepCount = 0;
    let animationId = null;
    let isRunning = false;
    let chart = null;

    // Helper: update status badge
    function updateStatus(type, message) {
        const badge = document.getElementById("statusBadge");
        const text = document.getElementById("statusText");
        text.innerText = message;
        
        badge.className = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border";
        
        if (type === 'ready') {
            badge.classList.add("bg-slate-800", "text-slate-300", "border-slate-700");
            badge.innerHTML = `<span class="w-2 h-2 mr-1.5 rounded-full bg-slate-400 animate-pulse"></span>Ready`;
        } else if (type === 'optimizing') {
            badge.classList.add("bg-blue-950/40", "text-blue-300", "border-blue-800/30");
            badge.innerHTML = `<span class="w-2 h-2 mr-1.5 rounded-full bg-blue-400 animate-pulse"></span>Optimizing`;
        } else if (type === 'converged') {
            badge.classList.add("bg-emerald-950/40", "text-emerald-300", "border-emerald-800/30");
            badge.innerHTML = `<span class="w-2 h-2 mr-1.5 rounded-full bg-emerald-400"></span>Converged`;
        } else if (type === 'diverged') {
            badge.classList.add("bg-rose-950/40", "text-rose-300", "border-rose-800/30");
            badge.innerHTML = `<span class="w-2 h-2 mr-1.5 rounded-full bg-rose-500 animate-ping"></span>Diverged`;
        } else if (type === 'max') {
            badge.classList.add("bg-amber-950/40", "text-amber-300", "border-amber-800/30");
            badge.innerHTML = `<span class="w-2 h-2 mr-1.5 rounded-full bg-amber-400"></span>Max Steps`;
        }
    }

    // Generate static curve data
    function generateCurveData(config) {
        const curveData = [];
        const range = config.maxX - config.minX;
        const step = range / 100;
        for(let x = config.minX - 0.2; x <= config.maxX + 0.2; x += step) {
            curveData.push({x: x, y: config.f(x)});
        }
        return curveData;
    }

    // Toggle button UI and disabled states
    function setButtonState(running) {
        isRunning = running;
        if (running) {
            runBtn.classList.add("hidden");
            pauseBtn.classList.remove("hidden");
            stepBtn.disabled = true;
            stepBtn.classList.add("opacity-50", "cursor-not-allowed");
            funcSelect.disabled = true;
            learningRate.disabled = true;
            initialX.disabled = true;
        } else {
            runBtn.classList.remove("hidden");
            pauseBtn.classList.add("hidden");
            stepBtn.disabled = false;
            stepBtn.classList.remove("opacity-50", "cursor-not-allowed");
            funcSelect.disabled = false;
            learningRate.disabled = false;
            initialX.disabled = false;
        }
    }

    // Reset the simulation parameters and plot
    function reset() {
        clearInterval(animationId);
        setButtonState(false);
        
        const config = configs[funcSelect.value];
        currentX = parseFloat(initialX.value);
        stepCount = 0;
        
        steps = [{x: currentX, y: config.f(currentX)}];
        
        // Update Chart
        chart.data.datasets[0].data = generateCurveData(config);
        chart.data.datasets[1].data = steps;
        chart.update();
        
        // Update live stats
        stepCountDisplay.innerText = "0";
        currXDisplay.innerText = currentX.toFixed(4);
        currCostDisplay.innerText = config.f(currentX).toFixed(4);
        currGradDisplay.innerText = config.df(currentX).toFixed(4);
        
        updateStatus('ready', "Adjust parameters and optimize");
    }

    // Executed at each optimization step
    function step() {
        const config = configs[funcSelect.value];
        const alpha = parseFloat(learningRate.value);
        const grad = config.df(currentX);

        // Pre-step validation to check divergence
        if (isNaN(currentX) || Math.abs(currentX) > 10.0 || Math.abs(grad) > 100.0) {
            clearInterval(animationId);
            setButtonState(false);
            updateStatus('diverged', "Exploded! Decrease learning rate.");
            return false;
        }

        const nextX = currentX - alpha * grad;
        const nextY = config.f(nextX);

        currentX = nextX;
        stepCount++;

        steps.push({x: currentX, y: nextY});
        chart.data.datasets[1].data = [...steps];
        chart.update();

        // Update dashboard metrics
        stepCountDisplay.innerText = stepCount;
        currXDisplay.innerText = currentX.toFixed(4);
        currCostDisplay.innerText = nextY.toFixed(4);
        currGradDisplay.innerText = grad.toFixed(4);

        // Check convergence (slope near zero)
        const nextGrad = config.df(currentX);
        if (Math.abs(nextGrad) < 0.001) {
            clearInterval(animationId);
            setButtonState(false);
            updateStatus('converged', `Converged in ${stepCount} steps.`);
            return false;
        }

        // Limit iteration count
        if (stepCount >= 100) {
            clearInterval(animationId);
            setButtonState(false);
            updateStatus('max', "Max limit of 100 steps reached.");
            return false;
        }

        return true;
    }

    function runSimulation() {
        const badgeText = document.getElementById("statusBadge").innerText;
        if (badgeText.includes("Converged") || badgeText.includes("Diverged") || badgeText.includes("Max Steps") || stepCount >= 100) {
            reset();
        }
        
        setButtonState(true);
        updateStatus('optimizing', "Stepping downhill...");
        
        animationId = setInterval(() => {
            const active = step();
            if (!active) {
                // Interval is cleared inside step() on termination
            }
        }, 120);
    }

    function pauseSimulation() {
        clearInterval(animationId);
        setButtonState(false);
        updateStatus('ready', "Simulation paused");
    }

    function singleStep() {
        const badgeText = document.getElementById("statusBadge").innerText;
        if (badgeText.includes("Converged") || badgeText.includes("Diverged") || badgeText.includes("Max Steps") || stepCount >= 100) {
            reset();
        }
        
        updateStatus('optimizing', "Single stepping...");
        step();
    }

    // Dropdown change handler
    function onFunctionChange() {
        const selected = funcSelect.value;
        const config = configs[selected];
        
        // Update DOM configurations
        mathFormula.innerText = `${config.formula} | ${config.dfFormula}`;
        
        initialX.min = config.minX;
        initialX.max = config.maxX;
        initialX.step = config.stepX;
        initialX.value = config.defaultX;
        xVal.innerText = config.defaultX.toFixed(1);
        
        learningRate.value = config.defaultLr;
        lrVal.innerText = config.defaultLr.toFixed(3);
        
        reset();
    }

    // Initialize Chart.js
    function initChart() {
        const config = configs.convex;
        chart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        data: generateCurveData(config),
                        showLine: true,
                        borderColor: '#38bdf8', // sky-400
                        borderWidth: 2,
                        pointRadius: 0,
                        fill: false
                    },
                    {
                        data: [],
                        backgroundColor: '#10b981', // emerald-500
                        borderColor: '#10b981',
                        borderWidth: 1.5,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        showLine: true,
                        borderDash: [4, 4]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { 
                        type: 'linear', 
                        grid: { color: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { color: '#94a3b8', font: { family: 'JetBrains Mono' } }
                    },
                    y: { 
                        grid: { color: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' },
                        ticks: { color: '#94a3b8', font: { family: 'JetBrains Mono' } }
                    }
                },
                animation: { duration: 0 }
            }
        });
    }

    // Listeners
    funcSelect.addEventListener("change", onFunctionChange);
    
    initialX.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value);
        xVal.innerText = val.toFixed(1);
        reset();
    });
    
    learningRate.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value);
        lrVal.innerText = val.toFixed(3);
    });

    runBtn.addEventListener("click", runSimulation);
    pauseBtn.addEventListener("click", pauseSimulation);
    stepBtn.addEventListener("click", singleStep);
    resetBtn.addEventListener("click", reset);

    // Boot
    window.addEventListener("load", () => {
        initChart();
        onFunctionChange();
    });
</script>