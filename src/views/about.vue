<template>
  <div class="about">

    <!-- ══ HERO ══ -->
    <section class="hero">
      <div class="hero-bg" />
      <div class="hero-overlay" />
      <div class="hero-content">
        <span class="eyebrow">✦ Our Story</span>
        <h1>We Are <em>Tembera Urwanda</em></h1>
        <p>Born from a deep love for Rwanda's land, people and wildlife — we exist to share it with the world.</p>
      </div>
      <div class="scroll-line"><div class="scroll-dot" /></div>
    </section>

    <!-- ══ MISSION SPLIT ══ -->
    <section class="mission">
      <div class="mission-img">
        <img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80" alt="Gorilla in Rwanda" />
        <div class="mission-badge">
          <strong>Est. 2012</strong>
          <span>Kigali, Rwanda</span>
        </div>
      </div>
      <div class="mission-text">
        <span class="label">Who We Are</span>
        <h2>Rwanda's Heart, <br/><em>Your Adventure</em></h2>
        <p>
          Tembera Urwanda — meaning <strong>"Travel Rwanda"</strong> in Kinyarwanda — was founded by passionate local guides
          who wanted travellers to experience Rwanda beyond postcards. We craft journeys that are raw, real and deeply personal.
        </p>
        <p>
          From the misty peaks of the Virunga volcanoes to the shores of Lake Kivu, every itinerary
          we build is a labour of love — shaped by local expertise, sustainable values, and an
          unshakeable belief that Rwanda will change you.
        </p>
        <div class="mission-stats">
          <div class="mstat" v-for="s in stats" :key="s.label">
            <strong>{{ s.value }}</strong>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ VALUES ══ -->
    <section class="values">
      <div class="values-header">
        <span class="label">What Drives Us</span>
        <h2>Our Core <em>Values</em></h2>
      </div>
      <div class="values-grid">
        <div class="vcard" v-for="v in values" :key="v.title">
          <div class="vcard-icon">{{ v.icon }}</div>
          <h3>{{ v.title }}</h3>
          <p>{{ v.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ══ TEAM ══ -->
    <section class="team">
      <div class="team-header">
        <span class="label">The People Behind It</span>
        <h2>Meet Our <em>Team</em></h2>
        <p class="team-sub">Local experts who live and breathe Rwanda every single day.</p>
      </div>
      <div class="team-grid">
        <div class="tcard" v-for="m in team" :key="m.name">
          <div class="tcard-img" :style="{ backgroundImage: `url(${m.img})` }">
            <div class="tcard-overlay" />
            <div class="tcard-social">
              <span v-for="s in m.skills" :key="s" class="skill-pill">{{ s }}</span>
            </div>
          </div>
          <div class="tcard-body">
            <h3>{{ m.name }}</h3>
            <span class="role">{{ m.role }}</span>
            <p>{{ m.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ TIMELINE ══ -->
    <section class="timeline-section">
      <div class="timeline-header">
        <span class="label">Our Journey</span>
        <h2>How We <em>Grew</em></h2>
      </div>
      <div class="timeline">
        <div class="tl-item" v-for="(t, i) in timeline" :key="t.year" :class="{ right: i % 2 !== 0 }">
          <div class="tl-dot" />
          <div class="tl-card">
            <span class="tl-year">{{ t.year }}</span>
            <h3>{{ t.title }}</h3>
            <p>{{ t.desc }}</p>
          </div>
        </div>
        <div class="tl-line" />
      </div>
    </section>

    <!-- ══ CTA ══ -->
    <section class="cta">
      <div class="cta-inner">
        <span class="eyebrow">Ready to explore?</span>
        <h2>Let's Plan Your <em>Rwanda Story</em></h2>
        <p>Every journey starts with a conversation. Reach out and let's build yours.</p>
        <div class="cta-btns">
          <RouterLink to="/contact" class="btn-gold">Get in Touch ✦</RouterLink>
          <RouterLink to="/service" class="btn-outline">View Our Services</RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const stats = [
  { value: '500+', label: 'Happy Travellers' },
  { value: '12+',  label: 'Years in Rwanda' },
  { value: '30+',  label: 'Destinations' },
  { value: '5 ★',  label: 'Average Rating' },
]

const values = [
  { icon: '🌿', title: 'Sustainability',   desc: 'Every tour we run puts conservation and community first. We leave no trace and support local ecosystems.' },
  { icon: '🤝', title: 'Authenticity',     desc: 'We show the real Rwanda — not a curated show. You sit with families, walk with rangers, feel it all.' },
  { icon: '🦍', title: 'Wildlife First',   desc: 'Our gorilla and wildlife experiences follow strict ethical guidelines to protect Rwanda\'s precious animals.' },
  { icon: '💛', title: 'Community Impact', desc: 'A portion of every booking goes directly to local community projects, schools and conservation funds.' },
  { icon: '🗺️', title: 'Local Expertise',  desc: 'Our guides are Rwandan born and raised — their knowledge and passion for the land is simply unmatched.' },
  { icon: '✨', title: 'Personalisation',  desc: 'No two travellers are alike. Every itinerary is handcrafted to fit your timeline, budget and dreams.' },
]

const team = [
  {
    name: 'Gladys Uwimana',
    role: 'Founder & Lead Guide',
    bio:  'Born in the Northern Province, Gladys has spent 12 years connecting travellers with the heart of Rwanda.',
    img:  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&q=80',
    skills: ['Gorilla Trekking', 'Kinyarwanda', 'Cultural Tours'],
  },
  {
    name: 'Jean-Paul Nkurunziza',
    role: 'Safari & Wildlife Expert',
    bio:  'Jean-Paul spent a decade as a park ranger in Akagera before turning his expertise into unforgettable safari adventures.',
    img:  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
    skills: ['Akagera NP', 'Bird Watching', 'Photography'],
  },
  {
    name: 'Diane Mukamana',
    role: 'Guest Experience Manager',
    bio:  'Diane ensures every traveller feels at home the moment they land — from airport transfers to farewell dinners.',
    img:  'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&q=80',
    skills: ['Hospitality', 'French', 'Logistics'],
  },
]

const timeline = [
  { year: '2012', title: 'The Beginning',       desc: 'Gladys starts offering small local walking tours around Kigali with a borrowed van and endless passion.' },
  { year: '2015', title: 'Gorilla Permits',      desc: 'We gain official permit partnership with Volcanoes National Park — our signature gorilla trek is born.' },
  { year: '2018', title: 'Growing the Team',     desc: 'Jean-Paul and Diane join. We launch safari packages to Akagera and canopy walks in Nyungwe Forest.' },
  { year: '2021', title: '500 Happy Travellers', desc: 'Despite global challenges, we reach 500 satisfied customers through virtual tours and local partnerships.' },
  { year: '2024', title: 'Eco Certification',    desc: 'We receive Rwanda\'s Sustainable Tourism certification for our community-first approach.' },
  { year: '2026', title: 'Today & Beyond',       desc: 'Tembera Urwanda now serves travellers from 40+ countries — and we\'re just getting started.' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.about { font-family: 'DM Sans', sans-serif; background: #faf8f4; color: #1a1a1a; }

/* ════════════ HERO ════════════ */
.hero {
  position: relative;
  height: 80vh;
  min-height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}
.hero-bg {
  position: absolute; inset: 0;
  background-image: url('https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1800&q=80');
  background-size: cover;
  background-position: center;
  animation: bgZoom 16s ease-in-out infinite alternate;
}
@keyframes bgZoom {
  from { transform: scale(1.04); }
  to   { transform: scale(1.1); }
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(160deg, rgba(5,20,10,0.7) 0%, rgba(10,40,20,0.5) 60%, rgba(5,20,10,0.8) 100%);
}
.hero-content {
  position: relative; z-index: 2; color: white;
  max-width: 700px; padding: 0 2rem;
  animation: fadeUp 1s ease both;
}
.eyebrow {
  display: inline-block;
  font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase;
  color: #d4a853; margin-bottom: 1.2rem;
  border: 1px solid rgba(212,168,83,0.4);
  padding: 0.3rem 1.1rem; border-radius: 50px;
  background: rgba(212,168,83,0.08);
}
.hero-content h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.8rem, 8vw, 5rem);
  font-weight: 600; line-height: 1.1;
  margin-bottom: 1rem;
  text-shadow: 0 4px 28px rgba(0,0,0,0.5);
}
.hero-content h1 em { font-style: italic; color: #d4a853; }
.hero-content p {
  font-size: 1rem; font-weight: 300;
  color: rgba(255,255,255,0.72); line-height: 1.8;
}
.scroll-line {
  position: absolute; bottom: 2rem; left: 50%;
  transform: translateX(-50%); z-index: 2;
  width: 1.5px; height: 52px;
  background: rgba(255,255,255,0.15); border-radius: 2px; overflow: hidden;
}
.scroll-dot {
  width: 100%; height: 35%;
  background: #d4a853; border-radius: 2px;
  animation: scrollAnim 2s ease-in-out infinite;
}
@keyframes scrollAnim {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(400%); }
}

/* ════════════ MISSION ════════════ */
.mission {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  max-width: 1200px;
  margin: 6rem auto;
  padding: 0 2rem;
  align-items: center;
  gap: 5rem;
}
.mission-img {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4/5;
  box-shadow: 0 24px 60px rgba(0,0,0,0.15);
}
.mission-img img {
  width: 100%; height: 100%; object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}
.mission-img:hover img { transform: scale(1.04); }
.mission-badge {
  position: absolute; bottom: 1.5rem; left: 1.5rem;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  padding: 12px 18px;
  color: white;
}
.mission-badge strong { display: block; font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; color: #d4a853; }
.mission-badge span   { font-size: 0.72rem; opacity: 0.7; letter-spacing: 0.1em; }

.label {
  font-size: 0.68rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: #d4a853;
  font-weight: 500; display: block; margin-bottom: 0.8rem;
}
.mission-text h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 600; line-height: 1.2;
  color: #1b4332; margin-bottom: 1.5rem;
}
.mission-text h2 em { font-style: italic; color: #d4a853; }
.mission-text p {
  font-size: 0.95rem; font-weight: 300;
  line-height: 1.85; color: #555;
  margin-bottom: 1.1rem;
}
.mission-text p strong { color: #1b4332; font-weight: 500; }

.mission-stats {
  display: flex; gap: 2rem; margin-top: 2.2rem;
  padding-top: 2rem;
  border-top: 1px solid #e8e0d0;
  flex-wrap: wrap;
}
.mstat { display: flex; flex-direction: column; gap: 3px; }
.mstat strong {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem; font-weight: 600; color: #1b4332; line-height: 1;
}
.mstat span { font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: #999; }

/* ════════════ VALUES ════════════ */
.values {
  background: #1b4332;
  padding: 6rem 2rem;
}
.values-header {
  text-align: center; max-width: 500px;
  margin: 0 auto 3.5rem;
}
.values-header .label { color: rgba(212,168,83,0.8); }
.values-header h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 600; color: white;
}
.values-header h2 em { font-style: italic; color: #d4a853; }

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1100px; margin: 0 auto;
}
.vcard {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 2rem 1.8rem;
  transition: background 0.28s, transform 0.28s;
}
.vcard:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-5px);
}
.vcard-icon { font-size: 2rem; margin-bottom: 1rem; }
.vcard h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem; font-weight: 600;
  color: #d4a853; margin-bottom: 0.6rem;
}
.vcard p { font-size: 0.87rem; color: rgba(255,255,255,0.6); line-height: 1.75; font-weight: 300; }

/* ════════════ TEAM ════════════ */
.team { padding: 6rem 2rem; max-width: 1100px; margin: 0 auto; }
.team-header { text-align: center; margin-bottom: 3.5rem; }
.team-header h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 600; color: #1b4332;
}
.team-header h2 em { font-style: italic; color: #d4a853; }
.team-sub { font-size: 0.95rem; color: #888; font-weight: 300; margin-top: 0.6rem; }

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
.tcard {
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  transition: transform 0.3s, box-shadow 0.3s;
}
.tcard:hover {
  transform: translateY(-7px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.12);
}
.tcard-img {
  height: 260px;
  background-size: cover;
  background-position: center top;
  position: relative;
  overflow: hidden;
}
.tcard-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%);
  transition: opacity 0.3s;
}
.tcard:hover .tcard-overlay { opacity: 0.8; }
.tcard-social {
  position: absolute; bottom: 14px; left: 14px;
  display: flex; flex-wrap: wrap; gap: 6px;
  opacity: 0; transform: translateY(8px);
  transition: opacity 0.3s, transform 0.3s;
}
.tcard:hover .tcard-social { opacity: 1; transform: translateY(0); }
.skill-pill {
  background: rgba(212,168,83,0.9);
  color: #1a1a1a;
  font-size: 0.65rem; font-weight: 600;
  padding: 3px 10px; border-radius: 50px;
  letter-spacing: 0.04em;
}
.tcard-body { padding: 1.4rem 1.6rem 1.8rem; }
.tcard-body h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem; font-weight: 600;
  color: #1b4332; margin-bottom: 3px;
}
.role {
  font-size: 0.72rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: #d4a853;
  font-weight: 500; display: block; margin-bottom: 0.8rem;
}
.tcard-body p { font-size: 0.87rem; color: #777; line-height: 1.7; font-weight: 300; }

/* ════════════ TIMELINE ════════════ */
.timeline-section {
  background: #f2ede4;
  padding: 6rem 2rem;
}
.timeline-header {
  text-align: center; margin-bottom: 4rem;
}
.timeline-header h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 600; color: #1b4332;
}
.timeline-header h2 em { font-style: italic; color: #d4a853; }

.timeline {
  position: relative;
  max-width: 800px; margin: 0 auto;
  display: flex; flex-direction: column; gap: 2.5rem;
}
.tl-line {
  position: absolute;
  left: 50%; top: 0; bottom: 0;
  width: 1.5px;
  background: linear-gradient(to bottom, #d4a853, #1b4332, #d4a853);
  transform: translateX(-50%);
  z-index: 0;
}
.tl-item {
  display: flex;
  justify-content: flex-end;
  padding-right: calc(50% + 2.5rem);
  position: relative; z-index: 1;
  animation: fadeUp 0.6s ease both;
}
.tl-item.right {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: calc(50% + 2.5rem);
}
.tl-dot {
  position: absolute;
  left: 50%; top: 1.2rem;
  transform: translateX(-50%);
  width: 12px; height: 12px;
  border-radius: 50%;
  background: #d4a853;
  border: 3px solid #f2ede4;
  box-shadow: 0 0 0 2px #d4a853;
  z-index: 2;
}
.tl-card {
  background: white;
  border-radius: 14px;
  padding: 1.4rem 1.6rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.07);
  max-width: 320px;
  transition: transform 0.25s, box-shadow 0.25s;
}
.tl-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
}
.tl-year {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem; font-weight: 600;
  color: #d4a853; display: block; margin-bottom: 4px; line-height: 1;
}
.tl-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.05rem; font-weight: 600;
  color: #1b4332; margin-bottom: 0.5rem;
}
.tl-card p { font-size: 0.85rem; color: #777; line-height: 1.7; font-weight: 300; }

/* ════════════ CTA ════════════ */
.cta {
  background: #1b4332;
  padding: 6rem 2rem;
  text-align: center;
}
.cta-inner { max-width: 600px; margin: 0 auto; }
.cta .eyebrow { color: rgba(212,168,83,0.8); border-color: rgba(212,168,83,0.3); margin-bottom: 1.2rem; display: inline-block; }
.cta-inner h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 600; color: white; margin-bottom: 1rem;
}
.cta-inner h2 em { font-style: italic; color: #d4a853; }
.cta-inner p { color: rgba(255,255,255,0.6); font-size: 1rem; font-weight: 300; margin-bottom: 2.2rem; }
.cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-gold {
  display: inline-block;
  background: #d4a853; color: #111;
  padding: 0.9rem 2rem; border-radius: 4px;
  text-decoration: none; font-weight: 500; font-size: 0.9rem;
  letter-spacing: 0.04em;
  transition: background 0.22s, transform 0.2s;
  box-shadow: 0 4px 20px rgba(212,168,83,0.35);
}
.btn-gold:hover { background: #e8bc60; transform: translateY(-2px); }
.btn-outline {
  display: inline-block;
  border: 1px solid rgba(255,255,255,0.35);
  color: white; padding: 0.9rem 2rem;
  border-radius: 4px; text-decoration: none;
  font-size: 0.9rem; font-weight: 300;
  backdrop-filter: blur(6px);
  background: rgba(255,255,255,0.06);
  transition: background 0.22s;
}
.btn-outline:hover { background: rgba(255,255,255,0.13); }

/* ════════════ ANIMATIONS ════════════ */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ════════════ MOBILE ════════════ */
@media (max-width: 768px) {
  .mission { grid-template-columns: 1fr; gap: 2.5rem; margin: 3rem auto; }
  .mission-img { aspect-ratio: 16/9; }
  .tl-item, .tl-item.right { padding: 0 0 0 2.5rem; justify-content: flex-start; }
  .tl-line { left: 8px; }
  .tl-dot  { left: 8px; }
  .tl-card { max-width: 100%; }
  .team { padding: 4rem 1rem; }
  .values { padding: 4rem 1rem; }
}
</style>