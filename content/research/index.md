---
title: Research
alias: Projects
description: Current projects, mathematical experiments, and research directions.
tags: [research]
cssclasses:
  - research-page
---

# Research

I am interested in probability and random geometry, especially questions where a geometric exploration can be encoded by a stochastic process. I use this page as a **living research index**: active projects get full pages; smaller questions can remain as experiments until they grow into something more serious.

<div class="research-hero-grid">
  <a class="project project-lead internal" href="./forested-boundaries/">
    <span class="project-state">Current · random geometry</span>
    <span class="project-title">Forested boundaries & two-sided exploration</span>
    <span class="project-copy">Poissonian strings of quantum disks, generalized boundary length, and Lévy-process descriptions of unexplored regions.</span>
    <span class="project-arrow">↗</span>
  </a>
  <a class="project internal" href="./radial-sle-lqg/">
    <span class="project-state">Research direction · SLE/LQG</span>
    <span class="project-title">Planar maps for radial SLE on LQG</span>
    <span class="project-copy">A discrete-model question motivated by radial/whole-plane SLE and mating-of-trees style encodings.</span>
    <span class="project-arrow">↗</span>
  </a>
  <a class="project internal" href="./stable-looptrees/">
    <span class="project-state">Question · random metric geometry</span>
    <span class="project-title">Stable looptrees as the index varies</span>
    <span class="project-copy">Continuity and coupling questions for stable looptrees across the parameter family.</span>
    <span class="project-arrow">↗</span>
  </a>
</div>

## Mathematical sketchbook

Some objects are easier to understand when the page can move. The module below samples a **finite-cutoff Poissonian jump picture** and renders it three ways: as a recursive forested line segment, as a generalized-disk schematic, or as a jump process. The geometric views are deliberately hierarchical: macroscopic beads visibly contain smaller boundary disks, some of which themselves carry another generation. Click a bead to enter it.

<div class="model-frame-wrap">
<iframe class="model-frame" src="/static/models/lqg-lab.html" title="Interactive recursive LQG forest sketchbook" loading="lazy"></iframe>
</div>

> [!note] What the model is—and is not
> The visualization is designed to make the probabilistic and recursive structure tangible. It is **not** claiming to produce a canonical Euclidean embedding of an LQG surface, and the circle packing is a visual grammar rather than geometry attached canonically to the quantum surface. The finite jump cutoff and compensation are visual approximations; the simulation layer can later be replaced by the precise Lévy measure/normalization from a theorem or paper.

## Project format

Each project page is structured like a compact case study:

1. **Problem.** A precise mathematical question.
2. **Objects.** The surfaces, curves, processes, and normalizations in play.
3. **Current picture.** What is already known and where the obstruction actually is.
4. **Experiments.** Simulations, diagrams, small lemmas, and sanity checks.
5. **References.** Papers and exact results I keep returning to.

That lets the polished front of the website coexist with the messier Obsidian graph underneath it.

<script type="module" src="/static/site-effects.js"></script>
