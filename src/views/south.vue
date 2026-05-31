<template>
  <div class="province">
    <section class="hero">
      <div class="hero-overlay" />
      <div class="hero-content">
        <span class="eyebrow">✦ Destinations · Southern Province</span>
        <h1>Southern <em>Province</em></h1>
        <p>Ancient rainforests, royal palaces and Rwanda's cultural heartland</p>
      </div>
      <div class="scroll-line"><div class="scroll-dot" /></div>
    </section>

    <section class="intro">
      <span class="label">Places to Visit</span>
      <h2>Top Experiences in <em>Southern Rwanda</em></h2>
      <p>Where chimpanzees roam, tea fills the hills and history comes alive.</p>
    </section>

    <section class="featured">
      <div class="feat-card">
        <div class="feat-img" style="background-image:url('https://images.unsplash.com/photo-1500759285222-a95626964dd1?w=1400&q=80')">
          <div class="feat-overlay" />
          <div class="feat-text">
            <span class="tag">🏆 Must Visit</span>
            <h2>🌳 Nyungwe Forest National Park</h2>
            <p>One of Africa's oldest and most biodiverse rainforests — over 1,000 plant species, 75 mammal species including chimpanzees and 13 primate species. Walk the famous canopy bridge 160 metres above the forest floor for a view you will never forget.</p>
            <RouterLink to="/contact" class="feat-btn">Explore Nyungwe →</RouterLink>
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
          <h2>Exploring <em>the South</em></h2>
          <p>The Southern Province is 2–5 hours from Kigali depending on your destination. Huye (Butare) is the main hub. Nyungwe is best accessed from Huye or Gisakura village.</p>
          <ul class="travel-tips">
            <li>🚐 Kigali to Huye: ~2 hrs by road</li>
            <li>🌿 Kigali to Nyungwe: ~4.5 hrs</li>
            <li>🐒 Chimpanzee permits: book in advance</li>
            <li>🌧️ Forest is lush year-round; dry Jun–Sep best</li>
          </ul>
          <RouterLink to="/contact" class="btn-gold">Book Southern Tour ✦</RouterLink>
        </div>
        <div class="info-image">
          <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80" alt="Nyungwe Forest" />
          <div class="info-badge"><strong>970km²</strong><span>Nyungwe Forest area</span></div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="cta-inner">
        <span class="eyebrow-cta">✦ Explore the South</span>
        <h2>Plan Your <em>Southern Rwanda</em> Journey</h2>
        <p>Forests, history and culture — we craft every detail for you.</p>
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
  { icon:'🌿', name:'Canopy Walk', tag:'⛵ Adventure', desc:'Walk 160m above the forest floor on a thrilling suspension bridge over Nyungwe\'s ancient tree canopy — the views over Rwanda\'s oldest rainforest are absolutely breathtaking.', img:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80', details:['160m high','Guided walk','Stunning views'] },
  { icon:'🐒', name:'Chimpanzee Tracking', tag:'🐾 Wildlife', desc:'Track habituated chimpanzee communities through the dense forest with expert rangers. Rwanda\'s Nyungwe is home to some of East Africa\'s most accessible chimp groups.', img:'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=700&q=80', details:['Permit required','Small groups','Half or full day'] },
  { icon:'🏛️', name:'Huye National Museum', tag:'🏛️ Culture', desc:'Rwanda\'s finest museum — an extraordinary collection of ethnographic objects, traditional royal regalia, historical artefacts and exhibits tracing Rwanda\'s long pre-colonial history.', img:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=700&q=80', details:['Free entry','All ages','2–3 hr visit'] },
  { icon:'👑', name:'Nyanza Royal Palace', tag:'👑 History', desc:'The beautifully reconstructed palace of Mwami Mutara III Rudahigwa — explore the grand thatched royal residence, the sacred royal cattle enclosure and a fascinating museum of Rwandan royalty.', img:'https://images.unsplash.com/photo-1611348586755-53ade86c1b38?w=700&q=80', details:['Guided tours','Royal history','Traditional architecture'] },
  { icon:'🍵', name:'Gisakura Tea Plantations', tag:'🌱 Scenic', desc:'Walk through seemingly endless emerald rows of tea at the edge of Nyungwe Forest, visit a working tea factory and sip freshly processed Rwandan tea with a view over the hills.', img:'https://images.unsplash.com/photo-1500759285222-a95626964dd1?w=700&q=80', details:['Tea factory tour','Photo walks','Scenic viewpoints'] },
  { icon:'🦜', name:'Bird Watching in Nyungwe', tag:'🔭 Birding', desc:'Nyungwe hosts 322 bird species including 29 Albertine Rift endemics. Spot the rare African green broadbill, Grauer\'s swamp warbler and spectacular sunbirds on specialist birding walks.', img:'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=700&q=80', details:['322 species','Endemic birds','Dawn walks'] },
  { icon:'⛲', name:'Kamiranzovu Waterfall', tag:'🌊 Nature', desc:'Hike through Nyungwe to this hidden waterfall and surrounding swamp — one of the most serene and magical spots in the entire forest, rarely visited and utterly beautiful.', img:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80', details:['Hidden waterfall','Swamp ecosystem','Half day hike'] },
  { icon:'🌄', name:'Lake Kivu Southern Shore', tag:'🏖️ Leisure', desc:'The southern shore of Lake Kivu near Rusizi offers peaceful beaches, kayaking and sundowner spots far from the crowds — a perfect end to a day in Nyungwe Forest.', img:'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=700&q=80', details:['Lake views','Kayaking','Sunset spot'] },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
.province{font-family:'DM Sans',sans-serif;background:#faf8f4;color:#1a1a1a}
.hero{position:relative;height:75vh;min-height:500px;background:url('https://images.unsplash.com/photo-1500759285222-a95626964dd1?w=1800&q=80') center/cover;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden}
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
.intro h2 em,.feat-text h2 em,.info-text h2 em,.cta-inner h2 em{font-style:italic;color:#d4a853}
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
.cta-inner p{color:rgba(255,255,255,.6);font-size:.95rem;font-weight:300;margin-bottom:2rem}
.cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.btn-gold{display:inline-block;background:#d4a853;color:#111;padding:.9rem 2rem;border-radius:4px;text-decoration:none;font-weight:500;font-size:.9rem;transition:background .22s,transform .2s;box-shadow:0 4px 20px rgba(212,168,83,.35)}
.btn-gold:hover{background:#e8bc60;transform:translateY(-2px)}
.btn-outline{display:inline-block;border:1px solid rgba(255,255,255,.3);color:white;padding:.9rem 2rem;border-radius:4px;text-decoration:none;font-size:.9rem;font-weight:300;background:rgba(255,255,255,.05);transition:background .22s}
.btn-outline:hover{background:rgba(255,255,255,.12)}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:768px){.info-inner{grid-template-columns:1fr;gap:2rem}.feat-img{height:320px}.places{padding:2rem 1rem 3rem}.featured{padding:2rem 1rem 0}}
</style>