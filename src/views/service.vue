<template>
  <div class="page">

    <!-- ── HERO ── -->
    <section class="hero">
      <div class="hero-bg" />
      <div class="hero-overlay" />

      <!-- floating particles -->
      <div class="particles">
        <span v-for="n in 12" :key="n" class="particle" :style="particleStyle(n)" />
      </div>

      <div class="hero-content">
        <span class="badge">✦ What We Offer</span>
        <h1>Our <em>Services</em></h1>
        <p class="sub">Crafted experiences for the perfect Rwanda adventure</p>

        <div class="stats-row">
          <div class="stat" v-for="s in stats" :key="s.label">
            <strong>{{ s.value }}</strong>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>

      <!-- scroll hint -->
      <div class="scroll-hint">
        <span>Explore</span>
        <div class="chevrons">
          <div class="chev" /><div class="chev" /><div class="chev" />
        </div>
      </div>
    </section>

    <!-- ── FILTER TABS ── -->
    <div class="filter-bar">
      <button
        v-for="f in filters"
        :key="f"
        :class="['filter-btn', { active: activeFilter === f }]"
        @click="activeFilter = f"
      >{{ f }}</button>
    </div>

    <!-- ── SERVICES GRID ── -->
    <section class="services">
      <TransitionGroup name="card-list" tag="div" class="grid">
        <div
          class="card"
          v-for="(s, i) in filteredServices"
          :key="s.title"
          :style="{ '--delay': `${i * 0.08}s` }"
        >
          <!-- image -->
          <div class="card-img" :style="{ backgroundImage: `url(${s.img})` }">
            <div class="card-img-overlay" />
            <span class="card-tag">{{ s.category }}</span>
            <div class="card-cta">
              <button class="cta-btn" @click="enquire(s.title)">Book Now →</button>
            </div>
          </div>

          <!-- body -->
          <div class="card-body">
            <div class="card-icon">{{ s.icon }}</div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
            <div class="card-footer">
              <span class="pill" v-for="t in s.tags" :key="t">{{ t }}</span>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </section>

    <!-- ── CTA BANNER ── -->
    <section class="cta-section">
      <div class="cta-inner">
        <h2>Ready for your Rwanda adventure?</h2>
        <p>Let us craft a personalised itinerary just for you.</p>
        <RouterLink to="/contact" class="cta-main-btn">Get in Touch ✦</RouterLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const stats = [
  { value: '500+', label: 'Happy Travellers' },
  { value: '12+', label: 'Years Experience' },
  { value: '5★',  label: 'Rated Service' },
  { value: '30+', label: 'Destinations' },
]

const filters = ['All', 'Wildlife', 'Culture', 'Adventure', 'Eco']

const activeFilter = ref('All')

const services = [
  {
    icon: '🦍', title: 'Gorilla Trekking',
    desc: 'Guided permits and expert trackers into Volcanoes National Park to meet mountain gorillas face-to-face.',
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=700&q=80',
    category: 'Wildlife', tags: ['Permit', 'Guided', 'Volcanoes NP'],
  },
  {
    icon: '🏕️', title: 'Safari Camps',
    desc: 'Comfortable and scenic camps in the heart of Rwanda\'s wild national parks under a million stars.',
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=700&q=80',
    category: 'Wildlife', tags: ['Overnight', 'Scenic', 'National Parks'],
  },
  {
    icon: '🚐', title: 'Private Transfers',
    desc: 'Safe and comfortable private transport between all destinations across Rwanda with professional drivers.',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=700&q=80',
    category: 'Adventure', tags: ['Private', 'Door-to-door', 'Flexible'],
  },
  {
    icon: '🎒', title: 'Custom Tours',
    desc: 'We build your itinerary around your interests, timeline and budget — no two tours are ever alike.',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80',
    category: 'Culture', tags: ['Tailored', 'Any Budget', 'Groups & Solo'],
  },
  {
    icon: '📸', title: 'Photo Safaris',
    desc: 'Capture Rwanda\'s stunning wildlife, breathtaking landscapes and vibrant local culture.',
    img: 'https://images.unsplash.com/photo-1611348586755-53ade86c1b38?w=700&q=80',
    category: 'Adventure', tags: ['Photography', 'Expert Guide', 'All Levels'],
  },
  {
    icon: '🍃', title: 'Eco Tourism',
    desc: 'Sustainable community-led trips that actively protect nature and directly support local families.',
    img: 'https://images.unsplash.com/photo-1500759285222-a95626964dd1?w=700&q=80',
    category: 'Eco', tags: ['Sustainable', 'Community', 'Low-impact'],
  },
  {
    icon: '🥁', title: 'Cultural Experiences',
    desc: 'Immerse yourself in Rwandan traditions — intore dance, Imigongo art, village homestays and more.',
    img: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=700&q=80',
    category: 'Culture', tags: ['Authentic', 'Homestay', 'Art & Dance'],
  },
  {
    icon: '🚵', title: 'Adventure Sports',
    desc: 'Mountain biking, zip-lining, kayaking on Lake Kivu — Rwanda\'s thrills are waiting for you.',
    img: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=700&q=80',
    category: 'Adventure', tags: ['Cycling', 'Water Sports', 'High Energy'],
  },
  {
    icon: '🌿', title: 'Forest Canopy Walk',
    desc: 'Walk among the treetops of Nyungwe Forest, one of Africa\'s oldest rainforests, teeming with primates.',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80',
    category: 'Eco', tags: ['Canopy', 'Primates', 'Rainforest'],
  },
]

const filteredServices = computed(() =>
  activeFilter.value === 'All'
    ? services
    : services.filter(s => s.category === activeFilter.value)
)

function enquire(title) {
  router.push({ path: '/contact', query: { service: title } })
}

function particleStyle(n) {
  const seed = n * 137.508
  return {
    left: `${(seed % 100)}%`,
    top: `${((seed * 1.3) % 100)}%`,
    animationDelay: `${(n * 0.4) % 4}s`,
    animationDuration: `${3 + (n % 3)}s`,
    width: `${4 + (n % 5)}px`,
    height: `${4 + (n % 5)}px`,
    opacity: 0.15 + (n % 5) * 0.06,
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@400;500;600&display=swap');

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.page { font-family: 'DM Sans', sans-serif; background: #f7f4ef; min-height: 100vh; }

/* ════════════════════════════════════════════
   HERO
════════════════════════════════════════════ */
.hero {
  position: relative;
  height: 90vh;
  min-height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1611348586755-53ade86c1b38?w=1800&q=80');
  background-size: cover;
  background-position: center;
  transform: scale(1.05);
  animation: heroZoom 14s ease-in-out infinite alternate;
}

@keyframes heroZoom {
  from { transform: scale(1.05); }
  to   { transform: scale(1.12); }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(5, 20, 10, 0.72) 0%,
    rgba(10, 40, 20, 0.55) 50%,
    rgba(30, 60, 30, 0.7) 100%
  );
}

/* particles */
.particles { position: absolute; inset: 0; pointer-events: none; }
.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 215, 0, 0.8);
  animation: float 4s ease-in-out infinite alternate;
}
@keyframes float {
  from { transform: translateY(0px); opacity: 0.1; }
  to   { transform: translateY(-18px); opacity: 0.4; }
}

/* hero content */
.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  animation: fadeUp 1s ease both;
  padding: 0 1rem;
}

.badge {
  display: inline-block;
  border: 1px solid rgba(212, 168, 83, 0.5);
  color: #d4a853;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.35rem 1.2rem;
  border-radius: 50px;
  margin-bottom: 1.2rem;
  font-family: 'DM Sans', sans-serif;
  backdrop-filter: blur(4px);
  background: rgba(0,0,0,0.2);
}

.hero-content h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3rem, 9vw, 5.5rem);
  font-weight: 600;
  line-height: 1.05;
  margin-bottom: 1rem;
  text-shadow: 0 4px 24px rgba(0,0,0,0.5);
}
.hero-content h1 em {
  font-style: italic;
  color: #d4a853;
}

.sub {
  font-size: 1rem;
  opacity: 0.78;
  letter-spacing: 0.03em;
  margin-bottom: 2.5rem;
  max-width: 440px;
  margin-left: auto;
  margin-right: auto;
}

/* stats */
.stats-row {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeUp 1s 0.3s ease both;
  opacity: 0;
  animation-fill-mode: forwards;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.stat strong {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 600;
  color: #d4a853;
}
.stat span {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.7;
}

/* scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: rgba(255,255,255,0.5);
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.chevrons { display: flex; flex-direction: column; align-items: center; gap: 2px; }
.chev {
  width: 12px;
  height: 12px;
  border-right: 1.5px solid rgba(255,255,255,0.4);
  border-bottom: 1.5px solid rgba(255,255,255,0.4);
  transform: rotate(45deg);
  animation: chevPulse 1.5s ease-in-out infinite;
}
.chev:nth-child(2) { animation-delay: 0.15s; opacity: 0.65; }
.chev:nth-child(3) { animation-delay: 0.3s;  opacity: 0.35; }
@keyframes chevPulse {
  0%, 100% { opacity: 0.3; } 50% { opacity: 1; }
}

/* ════════════════════════════════════════════
   FILTER BAR
════════════════════════════════════════════ */
.filter-bar {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 2.2rem 1rem 0.5rem;
  background: #f7f4ef;
}

.filter-btn {
  background: white;
  border: 1.5px solid #ddd;
  border-radius: 50px;
  padding: 0.45rem 1.3rem;
  font-size: 0.85rem;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  color: #555;
  cursor: pointer;
  transition: all 0.22s;
}
.filter-btn:hover {
  border-color: #1b4332;
  color: #1b4332;
}
.filter-btn.active {
  background: #1b4332;
  border-color: #1b4332;
  color: white;
}

/* ════════════════════════════════════════════
   GRID
════════════════════════════════════════════ */
.services { padding: 2.5rem 2rem 4rem; max-width: 1180px; margin: 0 auto; }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.8rem;
}

/* ── CARD ── */
.card {
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  transition: transform 0.28s cubic-bezier(.34,1.56,.64,1), box-shadow 0.28s;
  animation: fadeUp 0.6s var(--delay) ease both;
  opacity: 0;
  animation-fill-mode: forwards;
}
.card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 16px 40px rgba(0,0,0,0.13);
}

/* image */
.card-img {
  height: 210px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  transition: height 0.3s;
}
.card:hover .card-img { height: 220px; }

.card-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%);
  transition: background 0.3s;
}
.card:hover .card-img-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 60%);
}

.card-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(27, 67, 50, 0.85);
  color: #d4a853;
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 50px;
  backdrop-filter: blur(4px);
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
}

/* hover CTA on image */
.card-cta {
  position: absolute;
  bottom: 14px;
  right: 14px;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.25s, transform 0.25s;
}
.card:hover .card-cta {
  opacity: 1;
  transform: translateY(0);
}
.cta-btn {
  background: #d4a853;
  color: #1b1b1b;
  border: none;
  border-radius: 50px;
  padding: 8px 18px;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  letter-spacing: 0.03em;
}
.cta-btn:hover { background: #f0c060; transform: scale(1.04); }

/* body */
.card-body { padding: 1.2rem 1.4rem 1.4rem; position: relative; }

.card-icon {
  position: absolute;
  top: -22px;
  right: 18px;
  width: 44px;
  height: 44px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
}

.card-body h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #1b4332;
  margin-bottom: 0.45rem;
}

.card-body p {
  font-size: 0.86rem;
  color: #666;
  line-height: 1.65;
  margin-bottom: 1rem;
}

.card-footer { display: flex; flex-wrap: wrap; gap: 6px; }

.pill {
  background: #eaf4ee;
  color: #1b4332;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 50px;
  letter-spacing: 0.03em;
}

/* ════════════════════════════════════════════
   CTA BANNER
════════════════════════════════════════════ */
.cta-section {
  background: #1b4332;
  padding: 4rem 2rem;
  text-align: center;
}
.cta-inner { max-width: 560px; margin: 0 auto; }
.cta-inner h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 600;
  color: white;
  margin-bottom: 0.8rem;
}
.cta-inner p {
  color: rgba(255,255,255,0.7);
  font-size: 1rem;
  margin-bottom: 2rem;
}
.cta-main-btn {
  display: inline-block;
  background: #d4a853;
  color: #1b1b1b;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.85rem 2.2rem;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: background 0.25s, transform 0.25s;
}
.cta-main-btn:hover { background: #f0c060; transform: translateY(-2px); }

/* ════════════════════════════════════════════
   TRANSITIONS
════════════════════════════════════════════ */
.card-list-enter-active, .card-list-leave-active { transition: all 0.35s ease; }
.card-list-enter-from, .card-list-leave-to { opacity: 0; transform: scale(0.92); }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ════════════════════════════════════════════
   MOBILE
════════════════════════════════════════════ */
@media (max-width: 640px) {
  .hero { height: 80vh; }
  .stats-row { gap: 1.5rem; }
  .services { padding: 2rem 1rem 3rem; }
  .grid { grid-template-columns: 1fr; }
  .filter-bar { gap: 7px; }
}
</style>