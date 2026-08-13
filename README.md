# Sahith Quartz Site

A bespoke Quartz v5 theme/starter for a personal research site and public Obsidian garden.

## What is included

- `quartz.config.yaml` — Quartz v5 configuration with Obsidian Markdown, KaTeX, search, backlinks, graph, RSS, dark mode, and popovers.
- `quartz/styles/custom.scss` — the visual system for the homepage, research index, project pages, notes, and marginalia.
- `content/` — example Obsidian-compatible Markdown.
- `content/research/` — project index and sample research case studies.
- `content/marginalia/` — a small page for quotes, questions, heuristics, and fragments.
- `static/models/lqg-lab.html` — a recursive interactive stochastic visualizer built with D3 + GSAP.
- `static/site-effects.js` — GSAP/ScrollTrigger + Lenis interaction layer for the art-directed pages.
- `static/icon.svg` — favicon mark.
- `preview.html` — standalone visual preview; no Quartz install required.

## Information architecture

```text
content/
├── index.md
├── about.md
├── research/
│   ├── index.md
│   ├── forested-boundaries.md
│   ├── radial-sle-lqg.md
│   └── stable-looptrees.md
├── notes/
│   ├── index.md
│   ├── probability/
│   └── random-geometry/
├── marginalia/
│   └── index.md
└── assets/
```

There is deliberately no Writing tab. If you later want essays, Quartz can still publish a `blog/` folder without making it part of the primary navigation.

## Install into Quartz v5

1. Create a fresh Quartz v5 site using the official setup instructions.
2. Replace its `quartz.config.yaml` with the one in this folder.
3. Replace/merge `quartz/styles/custom.scss`.
4. Replace the starter `content/` folder with this `content/` folder, or point your workflow at your own Obsidian vault.
5. Copy the contents of `static/` into Quartz's static directory.
6. Change the `baseUrl`, email, and GitHub placeholders in `quartz.config.yaml`.
7. Install config-referenced plugins:

```bash
npx quartz plugin install --from-config
```

8. Preview locally:

```bash
npx quartz build --serve
```

## Obsidian workflow

Treat Quartz's `content/` directory as an Obsidian vault (or sync/copy your vault into it). Your normal Obsidian files can use wikilinks, embeds, callouts, tags/frontmatter, Mermaid, and LaTeX.

Recommended frontmatter:

```yaml
---
title: My Note
description: One sentence for previews and SEO.
tags: [probability, research]
draft: false
---
```

## Interactive LQG / SLE models

`static/models/lqg-lab.html` uses **D3 7.9.0** for hierarchical circle packing and **GSAP 3.15.0** for transitions. The page-level motion layer uses **GSAP + ScrollTrigger** and **Lenis 1.3.26**.

The model now emphasizes the recursive forest structure instead of showing one flat layer of beads:

1. **Recursive forested line** — macroscopic beads attach to the spine; every large bead contains smaller disks, with up to three visible generations.
2. **Generalized quantum disk** — the same macroscopic beads wrap around a core disk, while retaining their internal recursive disk structure.
3. **Boundary process** — a finite-cutoff stable-like jump path; jump stems correspond to the macroscopic disks in the geometric views.
4. **Drill-down interaction** — click a macroscopic bead to enter it, then click a child with descendants to recurse another level. Use the parent-surface control to return.

Controls change `κ′`, generalized length, recursion depth, visible jump cutoff, and the random seed. The illustrative stable index is displayed as `α = κ′/4`.

The circles are **not a canonical Euclidean embedding of LQG**. They are a visual grammar for the recursive Poissonian/beaded structure. For a publication-grade probabilistic simulator, replace the finite-cutoff sampler and schematic compensation with the exact Lévy measure and normalization from the theorem being illustrated.

### Motion layer

`static/site-effects.js` adds:

- Lenis inertial scrolling;
- GSAP/ScrollTrigger entrance and scroll reveals;
- magnetic navigation pills;
- cursor-following ambient light;
- pointer-tracked spotlight effects on project cards and model frames;
- reduced-motion fallbacks.

The main art-directed Markdown pages include the module with:

```html
<script type="module" src="/static/site-effects.js"></script>
```

If you later package the theme as a Quartz community component plugin, move this client code into an `afterDOMLoaded`/`.inline.ts` component script and keep the `nav`/`render` listeners for SPA navigation.

### Natural next interactive modules

- **Two-sided exploration lab:** drag left/right generalized exploration times; fade explored beads and highlight the remaining middle forest.
- **Jump ↔ disk linking:** hover a jump and pulse the corresponding bead, or hover a bead to mark `(t, ΔX_t)` on the process.
- **Hitting-time animation:** animate `l + X_t` until the first hit of zero while the unexplored surface shrinks in sync.
- **Loewner/SLE lab:** visualize the Loewner map and driving function side by side, starting with deterministic driving and then Brownian driving.

## Design system

Palette: warm paper `#F3F0E8`, ink `#171714`, cobalt `#2448FF`, acid-lime `#89B432`.

Typography: Instrument Serif for display, Space Grotesk for interface/headings, Inter for body, IBM Plex Mono for technical metadata.

The homepage and research index are expressive and editorial; note pages stay narrow and calm enough for long proofs.
