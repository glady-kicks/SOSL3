<template>
  <section class="services">
    <h2>Our Services</h2>
    <p class="subtitle">Everything we offer to make your Rwanda trip perfect</p>

    <div class="cards">
      <div class="card" v-for="s in services" :key="s.title">
        <span class="icon">{{ s.icon }}</span>
        <h3>{{ s.title }}</h3>
        <p>{{ s.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { icon: '🦍', title: 'Gorilla Trekking',  desc: 'Guided permits and expert trackers into Volcanoes National Park.' },
  { icon: '🏕️', title: 'Safari Camps',      desc: 'Comfortable and scenic camps in the heart of the wild.' },
  { icon: '🚐', title: 'Private Transfers', desc: 'Safe and comfortable transport between all destinations.' },
  { icon: '🎒', title: 'Custom Tours',      desc: 'We build your itinerary around your interests and budget.' },
  { icon: '📸', title: 'Photo Safaris',     desc: 'Capture Rwanda\'s stunning wildlife and landscapes.' },
  { icon: '🍃', title: 'Eco Tourism',       desc: 'Sustainable trips that support local communities.' },
]
</script>

<style scoped>
.services {
  min-height: 100vh;
  background: #f4f9f6;
  padding: 5rem 2rem;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  color: #1b4332;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  margin-bottom: 3rem;
  font-size: 1rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: transform 0.2s;
}
.card:hover { transform: translateY(-4px); }

.icon { font-size: 2.2rem; display: block; margin-bottom: 0.8rem; }

h3 { color: #1b4332; margin-bottom: 0.5rem; font-size: 1.1rem; }

p { color: #666; font-size: 0.9rem; line-height: 1.6; }
</style>