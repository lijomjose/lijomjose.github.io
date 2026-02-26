---
title: "Research"
draft: false
---


## Research Outlook

I am interested in understanding what lies beneath complexity.

Many problems appear complicated on the surface, but often there is an underlying structure quietly shaping the outcome. I am drawn to questions where identifying that structure makes everything else clearer.

**I enjoy translating problems into abstract models and then studying those models carefully, looking for the structures they reveal and the algorithms that naturally arise from them.**

That process — from problem to abstraction, from abstraction to structure, and from structure to algorithm — is what keeps me engaged.

I enjoy proving results. But my curiosity does not end there. I am equally interested in what happens when ideas move beyond theory: when they are translated into algorithms, implemented thoughtfully, and tested in practice.

Over time, my interests have broadened, not by moving away from theory, but by applying the same way of thinking to different kinds of questions. I find myself drawn to areas rooted in strong foundations, especially where new computational models are being explored. For now, these are curiosities rather than commitments. What matters to me is understanding how systems behave and what structural principles govern them.

---

## Doctoral Research

**Dominating Sets and its Variants in Planar Graphs**  
Doctor of Philosophy, under the guidance of Dr. Deepak Rajendraprasad @ Indian Institute of Technology Palakkad  
June 2025  

👉 [Download Thesis (PDF)](Thesis_DominatingSets_and_its_Variants_in_PlanarGraphs_LijoMJose.pdf)

My doctoral work focused on domination and independence in planar graphs, particularly near triangulations.

The thesis addressed three main problems.

### 1. Total Dominating Sets in Near Triangulations

Our research in this domain began with the examination of a conjecture proposed by Goddard and Henning  in 2017. They conjectured that if \( G \) is a planar triangulation of order at least four, then there exist at least two disjoint total dominating sets in \( G \). Furthermore, they hypothesized that the
same might hold for triangulated discs with a minimum degree of at least three. We confirmed both these conjectures by proving a slightly stronger result
This work was published in the [Journal of Graph Theory (2024)](https://onlinelibrary.wiley.com/doi/abs/10.1002/jgt.23014).

### 2. Face-Hitting Dominating Sets
A set of vertices \( S \) in a plane graph **G** is called a face-hitting set if every face in \( G \) has at least one vertex from \( S \) in its boundary. We proved that the vertex-set of every plane (multi-)graph without isolated vertices, self-loops or 2-faces can be partitioned into two disjoint sets so that both the sets are dominating and face-hitting

This result was presented in [WG 2024](https://link.springer.com/chapter/10.1007/978-3-031-75409-8_15) and won the best student paper award.

### 3. Independent Domination in Triangulations

We proved that every planar triangulation on \( n \) vertices contains an independent dominating set of size at most \( n/3 \).

This result was published in [Journal of Graph Theory (2025)](https://onlinelibrary.wiley.com/doi/abs/10.1002/jgt.23285)

---

## Current Work & Open Questions
I am currently in an exploratory phase.

I have been examining problems related to wireless sensor networks, particularly lifetime and resource allocation questions. These problems are interesting to me because they translate naturally into structural graph-theoretic formulations.

At present, this direction is still in its early stages and has not yet developed into a fully defined research program. Nevertheless, I find the underlying question quite compelling.

One approach to increasing the lifetime of a wireless sensor network is to identify disjoint dominating sets and activate them sequentially. This operational idea leads to a clean theoretical problem worth exploring:

---

### A Structural Formulation

Let $G = (V, E)$ be a vertex-weighted graph with weight function  
$w : V \to \mathbb{R}_{>0}$.

For any dominating set $D \subseteq V$, define its weight  
$W(D)$ as the minimum vertex weight in $D$.

The objective is to find pairwise disjoint dominating sets  
$D_1, D_2, \dots, D_k$ that maximize

$$
\sum_{i=1}^{k} W(D_i).
$$
---

This formulation captures the intuition that the lifetime of each active set is limited by its weakest (lowest-weight) vertex, and the overall network lifetime depends on how well such sets can be structured.
At the same time, I have been thinking about more foundational computational questions. For example, thinking about how uncertainty in emerging computational paradigms might interact with structural reasoning and algorithm design. These reflections are exploratory and conceptual at present rather than formal projects.

I prefer not to rush toward a defined label or direction. I am more interested in identifying a problem that is structurally meaningful and intellectually honest — one where theory and computation genuinely inform each other. 

This section will evolve as these ideas crystallize into well-posed problems. I plan to list emerging problems here as they take clearer form, particularly those suitable for student collaboration.
