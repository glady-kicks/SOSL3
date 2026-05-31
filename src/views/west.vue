<template>
  <div class="province">
    <section class="hero">
      <div class="hero-overlay" />
      <div class="hero-content">
        <span class="eyebrow">✦ Destinations · Western Province</span>
        <h1>Western <em>Province</em></h1>
        <p>Lake Kivu's shimmering shores, rainforests and Congo border adventures</p>
      </div>
      <div class="scroll-line"><div class="scroll-dot" /></div>
    </section>

    <section class="intro">
      <span class="label">Places to Visit</span>
      <h2>Top Experiences in <em>Western Rwanda</em></h2>
      <p>Dramatic lake scenery, volcanic islands and wild forest adventures.</p>
    </section>

    <section class="featured">
      <div class="feat-card">
        <div class="feat-img" style="background-image:url('https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=1400&q=80')">
          <div class="feat-overlay" />
          <div class="feat-text">
            <span class="tag">🏆 Must Visit</span>
            <h2>🌊 Lake Kivu</h2>
            <p>One of Africa's Great Rift Valley lakes — 2,700km² of crystal-clear blue water dotted with forested islands, peninsulas and fishing villages. Kayak between islands, take a sunset cruise, swim in warm fresh water or simply sit on the shore and watch life unfold.</p>
            <RouterLink to="/contact" class="feat-btn">Plan Lake Kivu Trip →</RouterLink>
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
          <h2>Exploring <em>the West</em></h2>
          <p>The Western Province stretches along Lake Kivu from Rubavu in the north to Rusizi in the south. Rubavu (Gisenyi) is the most popular base, just 3 hours from Kigali on a scenic mountain road.</p>
          <ul class="travel-tips">
            <li>🚐 Kigali to Rubavu (Gisenyi): ~3 hrs</li>
            <li>🚐 Kigali to Karongi (Kibuye): ~2.5 hrs</li>
            <li>⛵ Island boat trips: daily from Rubavu & Karongi</li>
            <li>🌤️ Best time: June–September (dry season)</li>
          </ul>
          <RouterLink to="/contact" class="btn-gold">Book Western Tour ✦</RouterLink>
        </div>
        <div class="info-image">
          <img src="https://images.unsplash.com/photo-1500759285222-a95626964dd1?w=800&q=80" alt="Lake Kivu" />
          <div class="info-badge"><strong>2,700km²</strong><span>Lake Kivu surface area</span></div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="cta-inner">
        <span class="eyebrow-cta">✦ Discover the West</span>
        <h2>Plan Your <em>Western Rwanda</em> Escape</h2>
        <p>Lakes, islands, forest and adventure — all in one incredible province.</p>
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
  { icon:'🏖️', name:'Rubavu (Gisenyi) Beach', tag:'🌅 Leisure', desc:'Rwanda\'s most popular beach town sits right on Lake Kivu\'s northern shore — swim, relax on the sand, eat fresh lake tilapia at lakeside restaurants and enjoy spectacular Congo border sunsets.', img:'https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=700&q=80', details:['Swimming','Fresh fish','Sunset views'] },
  { icon:'⛵', name:'Karongi (Kibuye) Islands', tag:'🏝️ Adventure', desc:'Karongi is arguably the most scenic town on Lake Kivu — a maze of peninsulas, hidden bays and forested islands. Take a wooden boat to Napoleon Island to see thousands of fruit bats at dusk.', img:'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=700&q=80', details:['Boat trips','Napoleon Island','Fruit bats at dusk'] },
  { icon:'🚵', name:'Congo Nile Trail', tag:'🥾 Adventure', desc:'A legendary 227km multi-day hiking and cycling trail running the entire length of Lake Kivu between Rubavu and Rusizi — one of the most spectacular trails in all of Africa.', img:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80', details:['227km trail','Cycling or hiking','Multi-day option'] },
  { icon:'🐒', name:'Cyamudongo Chimpanzees', tag:'🐾 Wildlife', desc:'A small isolated forest patch near Nyungwe where wild chimpanzee families roam — a quieter and more intimate chimp tracking experience than the main forest, with very high sighting rates.', img:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80', details:['High chimp sightings','Small groups','Morning treks'] },
  { icon:'🛶', name:'Lake Kivu Kayaking', tag:'🌊 Water Sports', desc:'Paddle between fishing villages, rest on rocky shores and explore secret coves on a guided kayaking adventure across the blue waters of Lake Kivu — the perfect way to see the lake up close.', img:'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=700&q=80', details:['Half & full day','Island stop','Snorkelling spots'] },
  { icon:'🍺', name:'Primus Brewery Tour', tag:'🏭 Culture', desc:'Visit Rwanda\'s iconic Primus beer factory in Rubavu — one of the largest breweries in East Africa — for a guided tour of the brewing process and, of course, a cold tasting session afterwards.', img:'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=700&q=80', details:['Factory tour','Beer tasting','Local culture'] },
  { icon:'🌋', name:'Nyiragongo Volcano View', tag:'🌋 Scenic', desc:'From Rubavu on a clear morning, the smoking summit of Congo\'s Mount Nyiragongo is dramatically visible across the lake — the closest you can get to one of Africa\'s most active volcanoes.', img:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=700&q=80', details:['Congo border view','Active volcano','Best at sunrise'] },
  { icon:'🎣', name:'Fishing Village Experience', tag:'🤝 Community', desc:'Join local fishermen at dawn as they haul their nets on Lake Kivu, visit the lakeside fish market and enjoy a community breakfast of fresh tilapia with a Rwandan family.', img:'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=700&q=80', details:['Dawn fishing','Fish market','Community breakfast'] },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
.province{font-family:'DM Sans',sans-serif;background:#faf8f4;color:#1a1a1a}
.hero{position:relative;height:75vh;min-height:500px;background:url('https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=1800&q=80') center/cover;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(160deg,rgba(5,18,30,.7),rgba(10,30,50,.45) 50%,rgba(5,18,30,.75))}
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