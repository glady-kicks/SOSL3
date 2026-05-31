<template>
  <div class="province">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-overlay" />
      <div class="hero-content">
        <span class="eyebrow">✦ Destinations · Eastern Province</span>
        <h1>Eastern <em>Province</em></h1>
        <p>Big five safaris, wide savannahs and tranquil lakeside escapes</p>
      </div>
      <div class="scroll-line"><div class="scroll-dot" /></div>
    </section>

    <!-- INTRO -->
    <section class="intro">
      <span class="label">Places to Visit</span>
      <h2>Top Experiences in <em>Eastern Rwanda</em></h2>
      <p>From wildlife safaris to serene lakes — the East has it all.</p>
    </section>

    <!-- FEATURED PLACE -->
    <section class="featured">
      <div class="feat-card">
        <div class="feat-img" style="background-image: url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1400&q=80')">
          <div class="feat-overlay" />
          <div class="feat-text">
            <span class="tag">🏆 Must Visit</span>
            <h2>🦁 Akagera National Park</h2>
            <p>Rwanda's only savannah park — home to the Big Five including lions, elephants, rhinos, buffalos and leopards. A conservation success story set against breathtaking open plains and shimmering lakes.</p>
            <RouterLink to="/contact" class="feat-btn">Plan a Visit →</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- PLACES GRID -->
    <section class="places">
      <div class="places-grid">

        <div class="pcard" v-for="place in places" :key="place.name">
          <div class="pcard-img" :style="{ backgroundImage: `url(${place.img})` }">
            <div class="pcard-overlay" />
            <span class="tag">{{ place.tag }}</span>
          </div>
          <div class="pcard-body">
            <div class="pcard-icon">{{ place.icon }}</div>
            <h3>{{ place.name }}</h3>
            <p>{{ place.desc }}</p>
            <div class="pcard-details">
              <span v-for="d in place.details" :key="d" class="detail-pill">{{ d }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- MAP HINT -->
    <section class="map-section">
      <div class="map-inner">
        <div class="map-text">
          <span class="label">Getting There</span>
          <h2>How to <em>Explore</em> the East</h2>
          <p>The Eastern Province is roughly 2–3 hours from Kigali by road. Most visitors base themselves in Kayonza or inside Akagera. We offer private transfers, guided park drives and full safari packages.</p>
          <ul class="travel-tips">
            <li>🚐 Private transfer from Kigali: ~2.5 hrs</li>
            <li>🦁 Best time for wildlife: June – September</li>
            <li>🐦 Birding: year-round, peak Nov – April</li>
            <li>🌅 Sunrise boat safaris available daily</li>
          </ul>
          <RouterLink to="/contact" class="btn-gold">Book Eastern Safari ✦</RouterLink>
        </div>
        <div class="map-image">
          <img src="https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800&q=80" alt="Eastern Province landscape" />
          <div class="map-badge">
            <strong>2.5 hrs</strong>
            <span>from Kigali</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta-inner">
        <span class="eyebrow-cta">✦ Ready for the East?</span>
        <h2>Plan Your <em>Eastern Rwanda</em> Adventure</h2>
        <p>Our guides know every corner of this remarkable province.</p>
        <div class="cta-btns">
          <RouterLink to="/contact" class="btn-gold">Get in Touch</RouterLink>
          <RouterLink to="/service" class="btn-outline">All Services</RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const places = [
  {
    icon: '🚤',
    name: 'Lake Ihema Boat Safari',
    tag: '🌊 Wildlife',
    desc: 'Glide across Lake Ihema at golden hour spotting hippo pods, Nile crocodiles, African fish eagles and thousands of waterbirds in one of Rwanda\'s most scenic settings.',
    img: 'https://images.unsplash.com/photo-1500759285222-a95626964dd1?w=700&q=80',
    details: ['Sunrise & sunset tours', 'Hippos & crocodiles', 'Bird watching'],
  },
  {
    icon: '🦏',
    name: 'Rhino Tracking',
    tag: '🏕️ Adventure',
    desc: 'Track the Eastern black rhino on foot with armed rangers inside Akagera — one of Africa\'s most thrilling wildlife encounters after Rwanda\'s successful rhino reintroduction.',
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=700&q=80',
    details: ['Small guided groups', 'On foot experience', 'Conservation story'],
  },
  {
    icon: '🌅',
    name: 'Nyagatare Cattle Country',
    tag: '🐄 Culture',
    desc: 'Explore Rwanda\'s cattle heartland where the famous long-horned Ankole cows roam. Visit local farms, learn about Rwandan cattle culture and enjoy endless open plains at sunset.',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80',
    details: ['Ankole cattle farms', 'Cultural visits', 'Open savannah views'],
  },
  {
    icon: '🐦',
    name: 'Birding in Akagera',
    tag: '🔭 Birding',
    desc: 'Over 500 bird species call Akagera home. Spot the rare shoebill stork, papyrus gonolek and African openbill on specialised morning birding drives with expert ornithologist guides.',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80',
    details: ['500+ species', 'Shoebill stork', 'Morning drives'],
  },
  {
    icon: '⛺',
    name: 'Bush Camping in Akagera',
    tag: '🏕️ Overnight',
    desc: 'Fall asleep to the sounds of lions roaring and hippos splashing at one of Akagera\'s exclusive bush camps — an unforgettable night completely immersed in wild Rwanda.',
    img: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=700&q=80',
    details: ['Tented camps', 'Night game walks', 'Fully catered'],
  },
  {
    icon: '🤝',
    name: 'Gishali Community Walk',
    tag: '🌿 Community',
    desc: 'Walk through villages bordering Akagera, meet local families, learn how communities and wildlife coexist, taste home-cooked food and hear stories straight from the people of the East.',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=700&q=80',
    details: ['Village homestay', 'Local cuisine', 'Wildlife coexistence'],
  },
  {
    icon: '🏊',
    name: 'Lake Muhazi',
    tag: '🌊 Leisure',
    desc: 'A long, winding freshwater lake east of Kigali perfect for kayaking, swimming and picnicking. Popular with locals on weekends and a peaceful escape from the city.',
    img: 'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=700&q=80',
    details: ['Kayaking', 'Swimming', '45 min from Kigali'],
  },
  {
    icon: '🦒',
    name: 'Game Drives at Sunrise',
    tag: '🌄 Safari',
    desc: 'Wake before dawn for Akagera\'s legendary sunrise game drives when lions are active, elephants move to water and the golden light transforms the savannah into something truly magical.',
    img: 'https://images.unsplash.com/photo-1611348586755-53ade86c1b38?w=700&q=80',
    details: ['4x4 game drives', 'Big Five sightings', 'Expert ranger guides'],
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
.province { font-family: 'DM Sans', sans-serif; background: #faf8f4; color: #1a1a1a; }

/* ══ HERO ══ */
.hero {
  position: relative; height: 75vh; min-height: 500px;
  background: url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1800&q=80') center/cover;
  display: flex; align-items: center; justify-content: center; text-align: center;
  overflow: hidden;
}
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(160deg, rgba(5,20,10,0.65) 0%, rgba(10,40,20,0.45) 50%, rgba(5,20,10,0.75) 100%);
}
.hero-content {
  position: relative; z-index: 2; color: white;
  max-width: 700px; padding: 0 2rem;
  animation: fadeUp 0.9s ease both;
}
.eyebrow {
  display: inline-block; font-size: 0.7rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: #d4a853;
  border: 1px solid rgba(212,168,83,0.4); padding: 0.3rem 1.1rem;
  border-radius: 50px; margin-bottom: 1.2rem; background: rgba(212,168,83,0.08);
}
.hero-content h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3rem, 9vw, 5.5rem); font-weight: 600;
  line-height: 1.05; margin-bottom: 0.8rem;
  text-shadow: 0 4px 28px rgba(0,0,0,0.5);
}
.hero-content h1 em { font-style: italic; color: #d4a853; }
.hero-content p { font-size: 1rem; color: rgba(255,255,255,0.72); font-weight: 300; line-height: 1.7; }
.scroll-line {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  width: 1.5px; height: 50px; background: rgba(255,255,255,0.15); overflow: hidden;
}
.scroll-dot { width: 100%; height: 35%; background: #d4a853; animation: scrollAnim 2s ease-in-out infinite; }
@keyframes scrollAnim { 0% { transform: translateY(-100%); } 100% { transform: translateY(400%); } }

/* ══ INTRO ══ */
.intro {
  text-align: center; padding: 5rem 2rem 1.5rem;
  max-width: 600px; margin: 0 auto;
}
.label {
  font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: #d4a853; font-weight: 500; display: block; margin-bottom: 0.8rem;
}
.intro h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 600; color: #1b4332; margin-bottom: 0.7rem;
}
.intro h2 em { font-style: italic; color: #d4a853; }
.intro p { font-size: 0.95rem; color: #888; font-weight: 300; }

/* ══ FEATURED ══ */
.featured { padding: 2.5rem 2rem 0; max-width: 1100px; margin: 0 auto; }
.feat-card { border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
.feat-img {
  height: 460px; background-size: cover; background-position: center;
  position: relative; display: flex; align-items: flex-end;
  transition: transform 0.5s ease;
}
.feat-card:hover .feat-img { transform: scale(1.01); }
.feat-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 55%);
}
.feat-text { position: relative; z-index: 2; padding: 2.5rem; color: white; max-width: 600px; }
.feat-text h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 600; margin-bottom: 0.7rem;
}
.feat-text p { font-size: 0.95rem; color: rgba(255,255,255,0.78); font-weight: 300; line-height: 1.8; margin-bottom: 1.5rem; }
.feat-btn {
  display: inline-block; background: #d4a853; color: #111;
  padding: 0.75rem 1.8rem; border-radius: 4px; text-decoration: none;
  font-size: 0.87rem; font-weight: 500; letter-spacing: 0.03em;
  transition: background 0.2s, transform 0.2s;
}
.feat-btn:hover { background: #e8bc60; transform: translateY(-2px); }

/* ══ TAG ══ */
.tag {
  display: inline-block; font-size: 0.65rem; letter-spacing: 0.12em;
  text-transform: uppercase; background: rgba(212,168,83,0.92);
  color: #111; padding: 3px 10px; border-radius: 50px;
  font-weight: 600; margin-bottom: 0.8rem;
}

/* ══ PLACES GRID ══ */
.places { padding: 2.5rem 2rem 4rem; max-width: 1100px; margin: 0 auto; }
.places-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.8rem;
}
.pcard {
  background: white; border-radius: 18px; overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.07);
  transition: transform 0.28s cubic-bezier(.34,1.56,.64,1), box-shadow 0.28s;
}
.pcard:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(0,0,0,0.13); }
.pcard-img {
  height: 200px; background-size: cover; background-position: center;
  position: relative;
}
.pcard-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 60%);
}
.pcard-img .tag { position: absolute; bottom: 10px; left: 10px; }
.pcard-body { padding: 1rem 1.3rem 1.5rem; position: relative; }
.pcard-icon {
  position: absolute; top: -20px; right: 14px;
  width: 42px; height: 42px; background: white;
  border-radius: 10px; box-shadow: 0 4px 14px rgba(0,0,0,0.12);
  display: flex; align-items: center; justify-content: center; font-size: 1.3rem;
}
.pcard-body h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem; font-weight: 600; color: #1b4332; margin-bottom: 0.5rem;
}
.pcard-body p { font-size: 0.86rem; color: #666; line-height: 1.7; font-weight: 300; margin-bottom: 1rem; }
.pcard-details { display: flex; flex-wrap: wrap; gap: 6px; }
.detail-pill {
  background: #eaf4ee; color: #1b4332; font-size: 0.7rem;
  font-weight: 600; padding: 3px 10px; border-radius: 50px; letter-spacing: 0.03em;
}

/* ══ MAP SECTION ══ */
.map-section { background: #1b4332; padding: 5rem 2rem; }
.map-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 4rem; max-width: 1100px; margin: 0 auto; align-items: center;
}
.map-text .label { color: rgba(212,168,83,0.8); }
.map-text h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 600; color: white; margin-bottom: 1rem;
}
.map-text h2 em { font-style: italic; color: #d4a853; }
.map-text p { font-size: 0.92rem; color: rgba(255,255,255,0.65); font-weight: 300; line-height: 1.85; margin-bottom: 1.5rem; }
.travel-tips { list-style: none; margin-bottom: 2rem; display: flex; flex-direction: column; gap: 10px; }
.travel-tips li { font-size: 0.88rem; color: rgba(255,255,255,0.75); font-weight: 300; padding-left: 4px; }
.map-image { position: relative; border-radius: 18px; overflow: hidden; }
.map-image img { width: 100%; height: 380px; object-fit: cover; display: block; border-radius: 18px; }
.map-badge {
  position: absolute; bottom: 1.2rem; left: 1.2rem;
  background: rgba(255,255,255,0.1); backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.2); border-radius: 12px;
  padding: 10px 16px; color: white;
}
.map-badge strong { display: block; font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; color: #d4a853; }
.map-badge span { font-size: 0.68rem; opacity: 0.65; letter-spacing: 0.1em; }

/* ══ CTA ══ */
.cta { background: #0f2b1f; padding: 5rem 2rem; text-align: center; }
.cta-inner { max-width: 560px; margin: 0 auto; }
.eyebrow-cta {
  display: inline-block; font-size: 0.7rem; letter-spacing: 0.2em;
  text-transform: uppercase; color: #d4a853;
  border: 1px solid rgba(212,168,83,0.35); padding: 0.3rem 1rem;
  border-radius: 50px; margin-bottom: 1.2rem; background: rgba(212,168,83,0.07);
}
.cta-inner h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 4vw, 2.6rem); font-weight: 600; color: white; margin-bottom: 0.8rem;
}
.cta-inner h2 em { font-style: italic; color: #d4a853; }
.cta-inner p { color: rgba(255,255,255,0.6); font-size: 0.95rem; font-weight: 300; margin-bottom: 2rem; }
.cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-gold {
  display: inline-block; background: #d4a853; color: #111;
  padding: 0.9rem 2rem; border-radius: 4px; text-decoration: none;
  font-weight: 500; font-size: 0.9rem; letter-spacing: 0.04em;
  transition: background 0.22s, transform 0.2s;
  box-shadow: 0 4px 20px rgba(212,168,83,0.35);
}
.btn-gold:hover { background: #e8bc60; transform: translateY(-2px); }
.btn-outline {
  display: inline-block; border: 1px solid rgba(255,255,255,0.3); color: white;
  padding: 0.9rem 2rem; border-radius: 4px; text-decoration: none;
  font-size: 0.9rem; font-weight: 300; background: rgba(255,255,255,0.05);
  transition: background 0.22s;
}
.btn-outline:hover { background: rgba(255,255,255,0.12); }

@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 768px) {
  .map-inner { grid-template-columns: 1fr; gap: 2rem; }
  .feat-img { height: 320px; }
  .places { padding: 2rem 1rem 3rem; }
  .featured { padding: 2rem 1rem 0; }
}
</style>