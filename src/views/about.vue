<template>
  <div>

    <!-- HERO BANNER -->
    <section class="hero">
      <div class="overlay" />
      <div class="hero-text">
        <span class="badge">What We Offer</span>
        <h1>Our Services</h1>
        <p>Everything you need for the perfect Rwanda adventure</p>
      </div>
    </section>

    <!-- SERVICES CARDS -->
    <section class="services">
      <div
        class="card"
        v-for="(s, i) in services"
        :key="s.title"
        :style="{ animationDelay: `${i * 0.1}s` }"
      >
        <div class="card-img" :style="{ backgroundImage: `url(${s.img})` }">
          <span class="icon">{{ s.icon }}</span>
        </div>
        <div class="card-body">
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const services = [
  {
    icon: '🦍',
    title: 'Gorilla Trekking',
    desc:  'Guided permits and expert trackers into Volcanoes National Park to meet mountain gorillas.',
    img:   'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80',
  },
  {
    icon: '🏕️',
    title: 'Safari Camps',
    desc:  'Comfortable and scenic camps in the heart of Rwanda\'s wild national parks.',
    img:   'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80',
  },
  {
    icon: '🚐',
    title: 'Private Transfers',
    desc:  'Safe and comfortable private transport between all destinations in Rwanda.',
    img:   'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
  },
  {
    icon: '🎒',
    title: 'Custom Tours',
    desc:  'We build your itinerary around your interests, timeline and budget.',
    img:   'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
  },
  {
    icon: '📸',
    title: 'Photo Safaris',
    desc:  'Capture Rwanda\'s stunning wildlife, landscapes and vibrant culture.',
    img:   'https://images.unsplash.com/photo-1611348586755-53ade86c1b38?w=600&q=80',
  },
  {
    icon: '🍃',
    title: 'Eco Tourism',
    desc:  'Sustainable community-led trips that protect nature and support locals.',
    img:   'https://images.unsplash.com/photo-1500759285222-a95626964dd1?w=600&q=80',
  },
]
</script>

<style scoped>

/* ── HERO BANNER ───────────────────────────── */
.hero {
  position: relative;
  height: 55vh;
  min-height: 340px;
  background-image: url('https://images.unsplash.com/photo-1611348586755-53ade86c1b38?w=1600&q=80');
  background-size: cover;
  background-position: center;
  background-color: #1b4332;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 30, 18, 0.58);
}

.hero-text {
  position: relative;
  z-index: 2;
  color: white;
  animation: fadeUp 0.8s ease both;
}

.badge {
  display: inline-block;
  border: 1px solid rgba(255,255,255,0.3);
  color: #d4a853;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.3rem 1rem;
  border-radius: 50px;
  margin-bottom: 1rem;
}

.hero-text h1 {
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-family: Georgia, serif;
  margin-bottom: 0.8rem;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
}

.hero-text p {
  opacity: 0.82;
  font-size: 1rem;
}

/* ── SERVICES GRID ─────────────────────────── */
.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.8rem;
  padding: 4rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* ── CARD ──────────────────────────────────── */
.card {
  background: white;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.09);
  transition: transform 0.25s, box-shadow 0.25s;
  animation: fadeUp 0.6s ease both;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.14);
}

/* image area */
.card-img {
  height: 200px;
  background-size: cover;
  background-position: center;
  background-color: #1b4332;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
}

/* dark gradient on image bottom */
.card-img::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.45), transparent 60%);
}

.icon {
  position: relative;
  z-index: 1;
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
}

/* text area */
.card-body {
  padding: 1.3rem 1.4rem 1.6rem;
}

.card-body h3 {
  font-size: 1.1rem;
  font-family: Georgia, serif;
  color: #1b4332;
  margin-bottom: 0.5rem;
}

.card-body p {
  font-size: 0.88rem;
  color: #666;
  line-height: 1.65;
}

/* ── ANIMATION ─────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── MOBILE ────────────────────────────────── */
@media (max-width: 600px) {
  .services { padding: 2.5rem 1rem; }
  .hero { height: 40vh; }
}
</style>