---
title: "Lévy processes: the reusable facts"
description: A compact reference for the Lévy-process facts that recur in probability arguments.
tags: [probability, levy-processes, notes]
aliases: [Levy processes]
---

A Lévy process is the probability theorist's Swiss army knife, except the knife occasionally jumps.

## Definition

A càdlàg process $(X_t)_{t\ge 0}$ is a **Lévy process** if $X_0=0$ a.s., it has stationary independent increments, and it is stochastically continuous.

For $0\le t_0<t_1<\cdots<t_n$, the increments

$$
X_{t_1}-X_{t_0},\ldots,X_{t_n}-X_{t_{n-1}}
$$

are independent, with $X_{t+s}-X_s\overset d=X_t$.

## Strong Markov principle

If $T$ is a finite stopping time for the usual augmentation of the natural filtration, then

$$
\bigl(X_{T+t}-X_T\bigr)_{t\ge 0}
$$

is independent of $\mathcal F_T$ and has the same law as $(X_t)_{t\ge0}$.

> [!important]
> This is exactly the form you want when an exploration procedure is restarted from a random boundary-length time.

## Lévy–Khintchine

For $\xi\in\mathbb R$,

$$
\mathbb E[e^{i\xi X_t}] = e^{-t\Psi(\xi)},
$$

where

$$
\Psi(\xi)
= -ib\xi + \frac12\sigma^2\xi^2
+ \int_{\mathbb R\setminus\{0\}}
\left(1-e^{i\xi x}+i\xi x\mathbf 1_{\{|x|<1\}}\right)\Pi(dx).
$$

The triplet $(b,\sigma^2,\Pi)$ packages drift, Brownian part, and jumps.

## Connections

- [[lqg-and-sle|LQG, SLE, and boundary-length processes]]
- #probability
