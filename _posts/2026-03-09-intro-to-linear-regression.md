---
layout: single
title: "Linear Regression"
date: 2026-03-09
categories: ML
use_math: true
---

## SLIDE 1      

**Linear regression** is one of the simplest and most fundamental supervised learning algorithms used to predict a **continuous-valued output** ($Y$) based on one or more input features ($X$). In the context of machine learning, it involves taking a training set of data and feeding it into a learning algorithm to produce a function called a **hypothesis ($h$)**, which is then used to estimate outputs for new, unseen inputs.

The mathematical concepts behind linear regression are structured around three main components: the hypothesis representation, the cost function, and the optimization algorithms.

### **1. Hypothesis Representation**
In linear regression, the hypothesis is represented as a linear function of the input features. 
*   **Simple Form:** For a single feature like house size, it is expressed as $h(x) = \theta_0 + \theta_1 x$.
*   **General Form:** When multiple features are involved (such as size and number of bedrooms), the hypothesis is:
    $h(x) = \theta_0 + \theta_1 x_1 + \theta_2 x_2 + \dots + \theta_n x_n$.
*   **Vector Notation:** To make this compact, a "dummy" feature $x_0 = 1$ is defined, allowing the hypothesis to be written as a summation: $h(x) = \sum_{j=0}^{n} \theta_j x_j$. Here, $\theta$ represents the **parameters** or weights that the algorithm must learn.

### **2. The Cost Function (Ordinary Least Squares)**
To determine the best parameters ($\theta$), the algorithm must minimize the difference between its predictions and the actual target values in the training set. This is achieved through a **cost function ($J(\theta)$)**, specifically the **squared error function**:
$$J(\theta) = \frac{1}{2} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2$$
The goal is to choose $\theta$ such that $J(\theta)$ is as small as possible. This function is a quadratic "bowl-shaped" function, meaning it has no local optima—only one global minimum.


## SLIDE 2





## SLIDE 2
**"Data Science Workflow and Cleaning Process"**

First let's understand the workflow of data science. 
### **Data Science Workflow**

The foundational process for a data science project involves these key stages:

1. **Formulate Question:** Define the specific problem you are trying to solve.
2. **Gather Data:** Collect the necessary raw data from various sources.
3. **Clean Data:** Prepare the data for analysis by addressing common issues:
* **Missing data**
* **Incomplete data**
* **Inaccurate data**
* **Formatting**


4. **Explore & Visualise:** Use statistical and visual tools to understand data patterns.
5. **Train Algorithm:** Select and apply machine learning models to the processed data.
6. **Evaluate:** Assess the model's performance to ensure it accurately answers the initial question.

## SLIDE 3
To make sense of the world using Data Science, **we** must translate a vague curiosity into a structured, testable problem. Here is a refined breakdown of how **we** navigate that process using a movie production example.

---

## 1. Defining the Real-World Problem

Every data science project **we** start begins with a high-level goal.

* **The Scenario:** **We** are movie producers.
* **The Initial Goal:** "**We** want to know how much money our movie will make."
* **The Challenge:** **We** recognize that revenue is influenced by countless variables—script quality, actor popularity, and marketing.

---

## 2. Forming Our Hypothesis

To move from a "vague goal" to a "data problem," **we** must pick a specific factor **we** believe drives the result.

> **Our Hypothesis:** A movie's **Revenue** is significantly driven by its **Production Budget**.

By narrowing **our** focus, **we** transform a complex human mystery into a mathematical relationship that **we** can actually test with data.

---

## 3. Formulating the "Right" Question

**We** know a good data science question must be **testable** and **measurable**.

* **Vague Question:** "How much revenue will our movie make?" (Too broad for an algorithm).
* **Refined Question:** "Can **we** predict **Movie Revenue** based on the **Movie Budget**?" (Actionable and specific).

This allows **us** to look at historical data, plot the relationship, and see if a pattern actually exists.

---

## 4. Identifying Variables (ML Terminology)

Once **we** have set the question, **we** categorize the data points using Machine Learning terminology:

* **The Feature ($x$):** The **Budget**. This is the independent variable—the "input" **we** use to make the prediction.
* **The Target ($y$):** The **Revenue**. This is the dependent variable—the "output" **we** are trying to predict.

---

## 5. Applying Our Logic to Other Fields

**We** can apply this same workflow to the hard sciences, such as Physics or Chemistry.

* **Our Goal:** Predict the **Refractive Index** of oxide glass.
* **Our Challenge:** **We** must select features that align with the **Laws of Physics**.
* **Our Hypothesis:** Does the *Chemical Composition* (e.g., percentage of Silicon Dioxide) determine the Refractive Index?
* **Our Validation:** **We** must ensure the problem is "plausible" for Supervised Learning—meaning **we** have enough past examples of "Composition vs. Index" to train an algorithm.

---

## SLIDE4



### **1. Formulating Our Hypothesis**

"First, we have to ask: what is the 'cause' and what is the 'effect'? In this study, we are looking at the **nonlinear refractive index ($n_2$)**. This is a complex property that tells us how light behaves when it hits a material at high intensities.

Our hypothesis is straightforward: **We believe that a glass’s physical makeup can predict its optical behavior.** Specifically, we are betting that the molar percentages of the chemical compounds within the glass are the primary drivers of its nonlinear properties."

---

### **2. Identifying Our Variables**

"To test this, we have to speak the language of Machine Learning. We need to define our 'Target' and our 'Features.'

* **The Target Variable ($y$):** This is the **nonlinear refractive index ($n_2$)**. It’s a continuous value, so this is a regression problem.
* **The Features ($x$):** These are the ingredients—the **glass matrix composition**.
* For **oxide glasses**, we started with 23 different chemical compounds. To make the data manageable, we used a technique called PCA to boil those down to 11 key components.
* For **chalcogenide glasses**, we focused on 5 specific compounds."



---

### **3. The Mathematical Representation**

"If we were to represent this as a simple Linear Regression model, it would look like this on the screen:

$$h(x) = \theta_0 + \theta_1(\text{Compound}_1) + \theta_2(\text{Compound}_2) + \dots + \theta_n(\text{Compound}_n)$$

Here, $h(x)$ is our predicted index. Each $\theta$ (theta) represents a 'weight' or the 'importance' our model assigns to a specific chemical. For example, if adding more Silica significantly changes the index, the model will give that compound a much higher weight."

---

### **4. Why This Hypothesis is Challenging**

"Now, here is the reality check. In science, things are rarely perfectly linear.

While we focused on chemistry, we know other factors are at play—things like **density**, **bandgap**, and even the **laser parameters** used to measure the glass. Because that data wasn't consistently available in past literature, we had to leave it out.

As a result, we found that a simple **Linear Regression model** struggled. It couldn't quite capture the 'twist and turns' of the data, resulting in an error rate of about **36%** for oxide glasses. This tells us that while chemistry is a great starting point, the relationship between glass and light is far more complex than a straight line."

---



## SLIDE 5

A **hypothesis** ($h$) is the function produced by a learning algorithm after it has been trained on a dataset. Its primary role is to map input features ($x$) to an estimated output ($y$), such as predicting the price of a house based on its square footage. In linear regression, the hypothesis is represented as a **linear function** of the input features, often written as $h(x) = \sum_{j=0}^{n} \theta_j x_j$, where $\theta$ represents the parameters or "weights" that the algorithm must learn.

The **cost function** ($J(\theta)$) is a mathematical formula used to evaluate how well a specific hypothesis performs by measuring the difference between its predictions and the actual "right answers" in the training set. For linear regression, the sources define this as the **Ordinary Least Squares** or squared error function:
$$J(\theta) = \frac{1}{2} \sum_{i=1}^{m} (h_\theta(x^{(i)}) - y^{(i)})^2$$
The goal of the learning algorithm is to **minimize** this function, finding the values of $\theta$ that result in the smallest possible error across all training examples. In linear regression, this function is **quadratic** and shaped like a "big bowl," meaning it has a single global minimum and no local optima.

**Gradient descent** is an iterative optimization algorithm used to find the parameters $\theta$ that minimize the cost function. The process involves the following steps:
*   **Initialization:** Start with some initial values for $\theta$, such as a vector of all zeros.
*   **Steepest Descent:** Conceptually, the algorithm "looks around" 360 degrees from its current position on the cost function surface and identifies the direction of the steepest downhill step.
*   **Update Rule:** The algorithm takes a "baby step" in that direction to reduce the cost. This is performed mathematically by updating each parameter $\theta_j$ using the **learning rate** ($\alpha$) and the partial derivative of the cost function: $\theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta)$.
*   **Convergence:** This process is repeated until the algorithm reaches the bottom of the "bowl," or the global minimum, where the hypothesis fits the data as accurately as possible.

## SLIDE 6

# Example 1 - A simple cost function

## $$f(x) = x^2 + x + 1$$

