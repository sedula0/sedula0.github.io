import Lenis from "https://cdn.jsdelivr.net/npm/lenis@1.3.26/+esm";
import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.15.0/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.15.0/ScrollTrigger/+esm";

gsap.registerPlugin(ScrollTrigger);

const state = {
  lenis: null,
  ticker: null,
  cleanup: [],
};

function addCleanup(fn) {
  state.cleanup.push(fn);
  if (typeof window.addCleanup === "function") window.addCleanup(fn);
}

function clearPageEffects() {
  for (const fn of state.cleanup.splice(0)) {
    try { fn(); } catch (_) {}
  }
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

function ensureLenis() {
  if (state.lenis || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  state.lenis = new Lenis({
    duration: 1.15,
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 0.9,
  });
  state.lenis.on("scroll", ScrollTrigger.update);
  state.ticker = (time) => state.lenis?.raf(time * 1000);
  gsap.ticker.add(state.ticker);
  gsap.ticker.lagSmoothing(0);
}

function splitText(el) {
  if (!el || el.dataset.fxSplit === "1") return [];
  el.dataset.fxSplit = "1";
  const nodes = [];
  for (const child of [...el.childNodes]) {
    if (child.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      child.textContent.split(/(\s+)/).forEach((token) => {
        if (!token.trim()) {
          frag.append(document.createTextNode(token));
          return;
        }
        const span = document.createElement("span");
        span.className = "fx-word";
        span.textContent = token;
        frag.append(span);
        nodes.push(span);
      });
      child.replaceWith(frag);
    }
  }
  return nodes;
}

function setupSpotlights() {
  document.querySelectorAll(".home-card, .project, .model-frame-wrap, .marginalia-strip").forEach((el) => {
    const move = (event) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      el.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    el.addEventListener("pointermove", move);
    addCleanup(() => el.removeEventListener("pointermove", move));
  });
}

function setupMagneticPills() {
  document.querySelectorAll(".home-pill").forEach((pill) => {
    const xTo = gsap.quickTo(pill, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(pill, "y", { duration: 0.35, ease: "power3.out" });
    const move = (event) => {
      const rect = pill.getBoundingClientRect();
      xTo((event.clientX - rect.left - rect.width / 2) * 0.12);
      yTo((event.clientY - rect.top - rect.height / 2) * 0.18);
    };
    const leave = () => { xTo(0); yTo(0); };
    pill.addEventListener("pointermove", move);
    pill.addEventListener("pointerleave", leave);
    addCleanup(() => {
      pill.removeEventListener("pointermove", move);
      pill.removeEventListener("pointerleave", leave);
    });
  });
}

function setupReveals() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  const hero = document.querySelector(".home-title");
  if (hero) {
    const words = splitText(hero);
    gsap.from(words.length ? words : hero, {
      yPercent: 115,
      opacity: 0,
      rotate: 2,
      duration: 1.15,
      stagger: 0.07,
      ease: "power4.out",
      clearProps: "transform,opacity",
    });
    gsap.from(".home-kicker, .home-deck", {
      y: 24,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      delay: 0.22,
      ease: "power3.out",
      clearProps: "transform,opacity",
    });
    gsap.to(".home-title em", {
      yPercent: -13,
      ease: "none",
      scrollTrigger: { trigger: ".home-shell", start: "top top", end: "55% top", scrub: 0.8 },
    });
  }

  gsap.utils.toArray(".home-card, .feature-card, .project, .marginalia-strip, .model-frame-wrap").forEach((el, i) => {
    gsap.from(el, {
      y: 54,
      opacity: 0,
      rotateX: 5,
      transformOrigin: "50% 100%",
      duration: 0.9,
      delay: Math.min(i * 0.025, 0.12),
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
      clearProps: "transform,opacity",
    });
  });

  gsap.utils.toArray(".section-label, .research-page h2").forEach((el) => {
    gsap.from(el, {
      x: -24,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      clearProps: "transform,opacity",
    });
  });
}

function setupCursorOrb() {
  if (window.matchMedia("(pointer: coarse)").matches || document.querySelector(".fx-orb")) return;
  const orb = document.createElement("div");
  orb.className = "fx-orb";
  document.body.append(orb);
  const xTo = gsap.quickTo(orb, "x", { duration: 0.45, ease: "power3.out" });
  const yTo = gsap.quickTo(orb, "y", { duration: 0.45, ease: "power3.out" });
  const move = (event) => { xTo(event.clientX); yTo(event.clientY); };
  window.addEventListener("pointermove", move);
  addCleanup(() => {
    window.removeEventListener("pointermove", move);
    orb.remove();
  });
}

function setup() {
  clearPageEffects();
  ensureLenis();
  setupSpotlights();
  setupMagneticPills();
  setupReveals();
  setupCursorOrb();
  requestAnimationFrame(() => ScrollTrigger.refresh());
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setup, { once: true });
} else {
  setup();
}

document.addEventListener("nav", setup);
document.addEventListener("render", setup);
