<template>
  <section class="hero">
    <!-- Background image imported from assets -->
    <div class="hero-bg" :style="{ backgroundImage: `url(${bg})` }" />

    <!-- Layered overlays for depth -->
    <div class="overlay-dark" />
    <div class="overlay-vignette" />
    <div class="overlay-bottom" />

    <!-- Animated floating particles -->
    <div class="particles" aria-hidden="true">
      <span v-for="n in 16" :key="n" class="particle" :style="particleStyle(n)" />
    </div>

    <!-- LEFT: Vertical brand stripe -->
    <div class="side-brand" aria-hidden="true">
      <span class="side-text">TEMBERA URWANDA · RWANDA ·</span>
    </div>

    <!-- MAIN CONTENT -->
    <div class="content">
      <div class="eyebrow">
        <span class="flag">🇷🇼</span>
        <span class="eyebrow-text">Welcome to the Land of a Thousand Hills</span>
      </div>

      <h1>
        <span class="h1-line1">Discover</span>
        <span class="h1-line2">Rwanda<em>.</em></span>
      </h1>

      <p class="tagline">
        Gorillas in volcanic mist. Lakes shimmering at sunrise.<br />
        Culture woven into every hillside. Your journey begins here.
      </p>

      <div class="trust-bar">
        <div class="trust-item" v-for="t in trust" :key="t.label">
          <strong>{{ t.value }}</strong>
          <span>{{ t.label }}</span>
        </div>
      </div>

      <div class="buttons">
        <RouterLink to="/service" class="btn-main">
          <span>Explore Our Services</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </RouterLink>
        <RouterLink to="/contact" class="btn-ghost">Plan My Trip</RouterLink>
      </div>

      <!-- Feature pills -->
      <div class="features">
        <span class="feat" v-for="f in features" :key="f">✦ {{ f }}</span>
      </div>
    </div>

    <!-- RIGHT: Floating info cards -->
    <div class="info-cards">
      <div class="info-card" v-for="(c, i) in cards" :key="c.label" :style="{ animationDelay: `${0.4 + i * 0.15}s` }">
        <span class="info-icon">{{ c.icon }}</span>
        <div>
          <strong>{{ c.label }}</strong>
          <p>{{ c.sub }}</p>
        </div>
      </div>
    </div>

    <!-- BOTTOM: Scroll indicator -->
    <div class="scroll-hint">
      <div class="scroll-track">
        <div class="scroll-thumb" />
      </div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import bg from '@/assets/images/back.jpg'

const trust = [
  { value: '500+', label: 'Happy Travellers' },
  { value: '12+',  label: 'Years Experience' },
  { value: '5 ★',  label: 'Rated Guides' },
  { value: '30+',  label: 'Destinations' },
]

const features = ['Gorilla Trekking', 'Custom Itineraries', 'Expert Local Guides', 'Eco-Friendly Tours']

const cards = [
  { icon: '🦍', label: 'Gorilla Permits', sub: 'Volcanoes National Park' },
  { icon: '🌿', label: 'Nyungwe Forest', sub: 'Canopy walks & primates' },
  { icon: '🏙️', label: 'Kigali City Tours', sub: 'Culture & history' },
]

function particleStyle(n) {
  const s = n * 113.5
  return {
    left: `${s % 100}%`,
    top: `${(s * 1.7) % 100}%`,
    width: `${3 + (n % 4)}px`,
    height: `${3 + (n % 4)}px`,
    animationDelay: `${(n * 0.3) % 5}s`,
    animationDuration: `${4 + (n % 4)}s`,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300;1,600&family=DM+Sans:wght@300;400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ══════════════════════════════════════════
   HERO SHELL
══════════════════════════════════════════ */
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'DM Sans', sans-serif;
}

/* Background image */
.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center 30%;
  transform: scale(1.06);
  animation: bgZoom 18s ease-in-out infinite alternate;
  will-change: transform;
}
@keyframes bgZoom {
  from { transform: scale(1.06) translateX(0); }
  to   { transform: scale(1.13) translateX(-1%); }
}

/* Layered overlays */
.overlay-dark {
  position: absolute; inset: 0;
  background: rgba(5, 18, 10, 0.52);
}
.overlay-vignette {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%);
}
.overlay-bottom {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(5,18,10,0.85) 0%, transparent 45%);
}

/* ── Particles ── */
.particles { position: absolute; inset: 0; pointer-events: none; }
.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(212, 168, 83, 0.7);
  animation: drift ease-in-out infinite alternate;
}
@keyframes drift {
  from { transform: translateY(0) scale(1); opacity: 0.08; }
  to   { transform: translateY(-20px) scale(1.2); opacity: 0.35; }
}

/* ── Vertical brand stripe ── */
.side-brand {
  position: absolute;
  left: 1.8rem;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  transform-origin: center;
  z-index: 3;
}
.side-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  color: rgba(255,255,255,0.3);
  text-transform: uppercase;
  white-space: nowrap;
}

/* ══════════════════════════════════════════
   MAIN CONTENT
══════════════════════════════════════════ */
.content {
  position: relative;
  z-index: 4;
  color: white;
  max-width: 680px;
  padding: 2rem 2rem 2rem 5rem;
  animation: fadeUp 1s ease both;
}

/* Eyebrow */
.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.4rem;
}
.flag { font-size: 1.2rem; }
.eyebrow-text {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  font-weight: 300;
}

/* Headline */
h1 {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 1.4rem;
  line-height: 0.95;
}
.h1-line1 {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 300;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.65);
}
.h1-line2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(4rem, 11vw, 7rem);
  font-weight: 600;
  color: white;
  text-shadow: 0 4px 32px rgba(0,0,0,0.5);
}
.h1-line2 em { font-style: italic; color: #d4a853; }

/* Tagline */
.tagline {
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  font-weight: 300;
  line-height: 1.85;
  color: rgba(255,255,255,0.75);
  margin-bottom: 2rem;
}

/* Trust bar */
.trust-bar {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.trust-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.trust-item strong {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #d4a853;
  line-height: 1;
}
.trust-item span {
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
}

/* Buttons */
.buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.btn-main {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #d4a853;
  color: #111;
  padding: 0.9rem 1.8rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  transition: background 0.22s, transform 0.2s, box-shadow 0.22s;
  box-shadow: 0 4px 20px rgba(212, 168, 83, 0.35);
}
.btn-main:hover {
  background: #e8bc60;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(212, 168, 83, 0.5);
}
.btn-ghost {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.35);
  color: white;
  padding: 0.9rem 1.8rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  backdrop-filter: blur(6px);
  background: rgba(255,255,255,0.06);
  transition: background 0.22s, border-color 0.22s;
}
.btn-ghost:hover {
  background: rgba(255,255,255,0.14);
  border-color: rgba(255,255,255,0.6);
}

/* Feature pills */
.features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.feat {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.06em;
}

/* ══════════════════════════════════════════
   INFO CARDS (right side)
══════════════════════════════════════════ */
.info-cards {
  position: absolute;
  right: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.info-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 12px;
  padding: 14px 18px;
  color: white;
  min-width: 220px;
  animation: slideLeft 0.7s ease both;
  opacity: 0;
  animation-fill-mode: forwards;
  transition: background 0.25s, transform 0.25s;
}
.info-card:hover {
  background: rgba(255,255,255,0.13);
  transform: translateX(-4px);
}
.info-icon { font-size: 1.6rem; flex-shrink: 0; }
.info-card strong {
  display: block;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 2px;
}
.info-card p {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.55);
  font-weight: 300;
  margin: 0;
}

/* ── Scroll indicator ── */
.scroll-hint {
  position: absolute;
  bottom: 2.2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.scroll-hint span {
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
}
.scroll-track {
  width: 1.5px;
  height: 48px;
  background: rgba(255,255,255,0.15);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
}
.scroll-thumb {
  width: 100%;
  height: 40%;
  background: #d4a853;
  border-radius: 2px;
  animation: scrollAnim 2s ease-in-out infinite;
}
@keyframes scrollAnim {
  0%   { transform: translateY(-100%); opacity: 0; }
  20%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { transform: translateY(300%); opacity: 0; }
}

/* ── Animations ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes slideLeft {
  from { opacity: 0; transform: translateX(30px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* ══════════════════════════════════════════
   MOBILE
══════════════════════════════════════════ */
@media (max-width: 768px) {
  .content { padding: 2rem 1.2rem; max-width: 100%; }
  .side-brand { display: none; }
  .info-cards { display: none; }
  .trust-bar { gap: 1.2rem; }
  .h1-line2 { font-size: clamp(3rem, 13vw, 4.5rem); }
}
</style>