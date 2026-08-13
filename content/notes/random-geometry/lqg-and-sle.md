---
title: "LQG, SLE, and boundary-length processes"
description: Working notes on Liouville quantum gravity, SLE explorations, and Lévy boundary-length processes.
tags: [random-geometry, lqg, sle, research]
---

A recurring pattern in Liouville quantum gravity is that a complicated random surface becomes tractable when it is explored in **quantum natural time** and encoded by boundary lengths.

## Schematic picture

An exploration discovers beads or quantum disks one at a time. The unexplored boundary length often evolves as a jump process. In the regimes relevant to forested boundaries, stable Lévy processes appear naturally.

A prototype is

$$
L_s = \ell + X_s,
$$

run until the first time the process reaches $0$, where $X$ is a spectrally one-sided stable Lévy process with the appropriate index.

> [!question]
> Which independence statement is genuinely geometric, and which is only a consequence of independent increments after choosing the correct filtration?

## Two-sided exploration

For left and right explorations, it is tempting to write

$$
L_s = \ell - A_s - B_s.
$$

The hard part is not the algebra; it is justifying the joint law of the two exploration processes and the conditional law of the remaining surface.

This is where [[levy-processes|strong Markov and Lévy-process structure]] become the reusable probability layer beneath the LQG-specific input.

## Reading queue

- Lévy processes and excursion theory
- Quantum disks and generalized quantum disks
- Forested lines and Poissonian bead decompositions
- SLE/LQG zipper identities
