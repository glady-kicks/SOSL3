<template>
  <div class="province">
    <section class="hero">
      <div class="hero-overlay" />
      <div class="hero-content">
        <span class="eyebrow">✦ Destinations · Northern Province</span>
        <h1>Northern <em>Province</em></h1>
        <p>Land of volcanoes, mountain gorillas and ancient misty forests</p>
      </div>
      <div class="scroll-line"><div class="scroll-dot" /></div>
    </section>

    <section class="intro">
      <span class="label">Places to Visit</span>
      <h2>Top Experiences in <em>Northern Rwanda</em></h2>
      <p>Where the volcanoes meet the sky and gorillas roam free.</p>
    </section>

    <section class="featured">
      <div class="feat-card">
        <div class="feat-img" style="background-image:url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1400&q=80')">
          <div class="feat-overlay" />
          <div class="feat-text">
            <span class="tag">🏆 Must Visit</span>
            <h2>🌋 Volcanoes National Park</h2>
            <p>Rwanda's most iconic destination — home to endangered mountain gorillas, golden monkeys and five dramatic volcanoes including Mount Karisimbi (4,507m). The park is the setting for Dian Fossey's legendary gorilla research and one of Africa's greatest wildlife experiences.</p>
            <RouterLink to="/contact" class="feat-btn">Book Gorilla Trek →</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="places">
      <div class="places-grid">
        <div class="pcard" v-for="place in places" :key="place.name">
          <div class="pcard-img" :style="{ backgroundImage:`url(${place.img})` }">
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

    <section class="info-section">
      <div class="info-inner">
        <div class="info-text">
          <span class="label">Getting There</span>
          <h2>Exploring <em>the North</em></h2>
          <p>The Northern Province is 2–3 hours from Kigali. Most visitors stay in Musanze (Ruhengeri) as a base. Gorilla trekking permits must be booked in advance — we handle everything for you.</p>
          <ul class="travel-tips">
            <li>🚐 Drive from Kigali: ~2.5 hrs via scenic road</li>
            <li>🦍 Gorilla permits: book 3–6 months ahead</li>
            <li>🌤️ Best season: Jun–Sep & Dec–Feb (dry)</li>
            <li>🥾 Trek difficulty: moderate to challenging</li>
          </ul>
          <RouterLink to="/contact" class="btn-gold">Book Northern Trip ✦</RouterLink>
        </div>
        <div class="info-image">
          <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80" alt="Northern Province" />
          <div class="info-badge"><strong>4,507m</strong><span>Mt Karisimbi peak</span></div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="cta-inner">
        <span class="eyebrow-cta">✦ Ready for gorillas?</span>
        <h2>Plan Your <em>Northern Rwanda</em> Adventure</h2>
        <p>We secure your permits, arrange transfers and guide every step.</p>
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
  { icon:'🦍', name:'Gorilla Trekking', tag:'🐾 Wildlife', desc:'Trek into bamboo forest with expert rangers to spend a life-changing hour with a wild gorilla family. Rwanda has over a third of the world\'s remaining mountain gorillas.', img:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=700&q=80', details:['Permit required','Small groups','1 hour with gorillas'] },
  { icon:'🐒', name:'Golden Monkey Tracking', tag:'🐾 Wildlife', desc:'Track the rare and playful golden monkey through bamboo forests on the volcano slopes — a lighter, more energetic alternative to gorilla trekking, equally unforgettable.', img:'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=700&q=80', details:['Easier trek','Full day','Photography friendly'] },
  { icon:'🕳️', name:'Musanze Caves', tag:'🌿 Nature', desc:'Ancient lava tube caves stretching over 2km beneath the Virunga foothills, formed thousands of years ago. Walk through cathedral-like chambers with fascinating geological formations.', img:'https://images.unsplash.com/photo-1500759285222-a95626964dd1?w=700&q=80', details:['Guided cave walk','2km long','Historical site'] },
  { icon:'🏞️', name:'Twin Lakes Ruhondo & Burera', tag:'🌊 Scenic', desc:'Two stunning crater lakes nestled dramatically between volcanic peaks. Kayak on glass-calm waters, walk the shore at dawn or simply marvel at the extraordinary scenery around you.', img:'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=700&q=80', details:['Kayaking','Sunrise walks','Photography'] },
  { icon:'🌺', name:'Dian Fossey Tomb & Research Centre', tag:'🏛️ History', desc:'Hike to the grave of legendary conservationist Dian Fossey inside Volcanoes National Park, buried beside the gorillas she dedicated her life to protecting. Deeply moving.', img:'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=700&q=80', details:['Guided hike','2–3 hrs','Conservation story'] },
  { icon:'🏔️', name:'Mount Bisoke Crater Hike', tag:'⛰️ Adventure', desc:'Hike to the 3,711m summit of Mount Bisoke to discover a stunning crater lake at the top — one of the most rewarding day hikes in all of East Africa with panoramic views.', img:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80', details:['Full day hike','3,711m summit','Crater lake'] },
  { icon:'🌿', name:'Iby\'iwacu Cultural Village', tag:'🥁 Culture', desc:'An award-winning cultural experience where former poachers now welcome visitors — showcasing traditional dance, bow-and-arrow skills, banana beer brewing and Rwandan village life.', img:'https://images.unsplash.com/photo-1611348586755-53ade86c1b38?w=700&q=80', details:['Cultural dances','Traditional crafts','Community income'] },
  { icon:'🍺', name:'Musanze Town & Local Breweries', tag:'🍽️ Food & Drink', desc:'Musanze is a lively, welcoming town with great restaurants, local banana beer halls and a vibrant market. The perfect base before and after your gorilla trek.', img:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=700&q=80', details:['Local restaurants','Banana beer','Night markets'] },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
.province{font-family:'DM Sans',sans-serif;background:#faf8f4;color:#1a1a1a}
.hero{position:relative;height:75vh;min-height:500px;background:url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1800&q=80') center/cover;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(160deg,rgba(5,20,10,.65),rgba(10,40,20,.45) 50%,rgba(5,20,10,.75))}
.hero-content{position:relative;z-index:2;color:white;max-width:700px;padding:0 2rem;animation:fadeUp .9s ease both}
.eyebrow{display:inline-block;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:#d4a853;border:1px solid rgba(212,168,83,.4);padding:.3rem 1.1rem;border-radius:50px;margin-bottom:1.2rem;background:rgba(212,168,83,.08)}
.hero-content h1{font-family:'Cormorant Garamond',serif;font-size:clamp(3rem,9vw,5.5rem);font-weight:600;line-height:1.05;margin-bottom:.8rem;text-shadow:0 4px 28px rgba(0,0,0,.5)}
.hero-content h1 em{font-style:italic;color:#d4a853}
.hero-content p{font-size:1rem;color:rgba(255,255,255,.72);font-weight:300;line-height:1.7}
.scroll-line{position:absolute;bottom:2rem;left:50%;transform:translateX(-50%);width:1.5px;height:50px;background:rgba(255,255,255,.15);overflow:hidden}
.scroll-dot{width:100%;height:35%;background:#d4a853;animation:scrollAnim 2s ease-in-out infinite}
@keyframes scrollAnim{0%{transform:translateY(-100%)}100%{transform:translateY(400%)}}
.intro{text-align:center;padding:5rem 2rem 1.5rem;max-width:600px;margin:0 auto}
.label{font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:#d4a853;font-weight:500;display:block;margin-bottom:.8rem}
.intro h2{font-family:'Cormorant Garamond',serif;font-size:clamp(1.8rem,4vw,2.6rem);font-weight:600;color:#1b4332;margin-bottom:.7rem}
.intro h2 em{font-style:italic;color:#d4a853}
.intro p{font-size:.95rem;color:#888;font-weight:300}
.featured{padding:2.5rem 2rem 0;max-width:1100px;margin:0 auto}
.feat-card{border-radius:20px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.15)}
.feat-img{height:460px;background-size:cover;background-position:center;position:relative;display:flex;align-items:flex-end}
.feat-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,.1) 55%)}
.feat-text{position:relative;z-index:2;padding:2.5rem;color:white;max-width:600px}
.feat-text h2{font-family:'Cormorant Garamond',serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:600;margin-bottom:.7rem}
.feat-text p{font-size:.95rem;color:rgba(255,255,255,.78);font-weight:300;line-height:1.8;margin-bottom:1.5rem}
.feat-btn{display:inline-block;background:#d4a853;color:#111;padding:.75rem 1.8rem;border-radius:4px;text-decoration:none;font-size:.87rem;font-weight:500;transition:background .2s,transform .2s}
.feat-btn:hover{background:#e8bc60;transform:translateY(-2px)}
.tag{display:inline-block;font-size:.65rem;letter-spacing:.12em;text-transform:uppercase;background:rgba(212,168,83,.92);color:#111;padding:3px 10px;border-radius:50px;font-weight:600;margin-bottom:.8rem}
.places{padding:2.5rem 2rem 4rem;max-width:1100px;margin:0 auto}
.places-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1.8rem}
.pcard{background:white;border-radius:18px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.07);transition:transform .28s cubic-bezier(.34,1.56,.64,1),box-shadow .28s}
.pcard:hover{transform:translateY(-8px);box-shadow:0 16px 40px rgba(0,0,0,.13)}
.pcard-img{height:200px;background-size:cover;background-position:center;position:relative}
.pcard-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.45),transparent 60%)}
.pcard-img .tag{position:absolute;bottom:10px;left:10px}
.pcard-body{padding:1rem 1.3rem 1.5rem;position:relative}
.pcard-icon{position:absolute;top:-20px;right:14px;width:42px;height:42px;background:white;border-radius:10px;box-shadow:0 4px 14px rgba(0,0,0,.12);display:flex;align-items:center;justify-content:center;font-size:1.3rem}
.pcard-body h3{font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:600;color:#1b4332;margin-bottom:.5rem}
.pcard-body p{font-size:.86rem;color:#666;line-height:1.7;font-weight:300;margin-bottom:1rem}
.pcard-details{display:flex;flex-wrap:wrap;gap:6px}
.detail-pill{background:#eaf4ee;color:#1b4332;font-size:.7rem;font-weight:600;padding:3px 10px;border-radius:50px}
.info-section{background:#1b4332;padding:5rem 2rem}
.info-inner{display:grid;grid-template-columns:1fr 1fr;gap:4rem;max-width:1100px;margin:0 auto;align-items:center}
.info-text .label{color:rgba(212,168,83,.8)}
.info-text h2{font-family:'Cormorant Garamond',serif;font-size:clamp(1.8rem,3.5vw,2.5rem);font-weight:600;color:white;margin-bottom:1rem}
.info-text h2 em{font-style:italic;color:#d4a853}
.info-text p{font-size:.92rem;color:rgba(255,255,255,.65);font-weight:300;line-height:1.85;margin-bottom:1.5rem}
.travel-tips{list-style:none;margin-bottom:2rem;display:flex;flex-direction:column;gap:10px}
.travel-tips li{font-size:.88rem;color:rgba(255,255,255,.75);font-weight:300}
.info-image{position:relative;border-radius:18px;overflow:hidden}
.info-image img{width:100%;height:380px;object-fit:cover;display:block;border-radius:18px}
.info-badge{position:absolute;bottom:1.2rem;left:1.2rem;background:rgba(255,255,255,.1);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:10px 16px;color:white}
.info-badge strong{display:block;font-family:'Cormorant Garamond',serif;font-size:1.4rem;color:#d4a853}
.info-badge span{font-size:.68rem;opacity:.65;letter-spacing:.1em}
.cta{background:#0f2b1f;padding:5rem 2rem;text-align:center}
.cta-inner{max-width:560px;margin:0 auto}
.eyebrow-cta{display:inline-block;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:#d4a853;border:1px solid rgba(212,168,83,.35);padding:.3rem 1rem;border-radius:50px;margin-bottom:1.2rem;background:rgba(212,168,83,.07)}
.cta-inner h2{font-family:'Cormorant Garamond',serif;font-size:clamp(1.8rem,4vw,2.6rem);font-weight:600;color:white;margin-bottom:.8rem}
.cta-inner h2 em{font-style:italic;color:#d4a853}
.cta-inner p{color:rgba(255,255,255,.6);font-size:.95rem;font-weight:300;margin-bottom:2rem}
.cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.btn-gold{display:inline-block;background:#d4a853;color:#111;padding:.9rem 2rem;border-radius:4px;text-decoration:none;font-weight:500;font-size:.9rem;transition:background .22s,transform .2s;box-shadow:0 4px 20px rgba(212,168,83,.35)}
.btn-gold:hover{background:#e8bc60;transform:translateY(-2px)}
.btn-outline{display:inline-block;border:1px solid rgba(255,255,255,.3);color:white;padding:.9rem 2rem;border-radius:4px;text-decoration:none;font-size:.9rem;font-weight:300;background:rgba(255,255,255,.05);transition:background .22s}
.btn-outline:hover{background:rgba(255,255,255,.12)}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:768px){.info-inner{grid-template-columns:1fr;gap:2rem}.feat-img{height:320px}.places{padding:2rem 1rem 3rem}.featured{padding:2rem 1rem 0}}
</style>