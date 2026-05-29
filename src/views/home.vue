<template>
  <section class="hero" :style="{ backgroundImage: `url(${bg})` }">
    <div class="overlay" />

    <div class="content">
      <span class="badge">🇷🇼 Welcome to Rwanda</span>
      <h1>Tembera <em>Urwanda</em></h1>
      <p>Experience the Land of a Thousand Hills — gorillas, lakes, forests & vibrant culture.</p>
      <div class="buttons">
        <RouterLink to="/service" class="btn-main">Our Services</RouterLink>
        <RouterLink to="/about"   class="btn-ghost">Learn More</RouterLink>
      </div>
    </div>

    <div class="scroll-hint">
      <span>Scroll Down</span>
      <div class="line" />
    </div>

    <div class="stats">
      <div class="stat"><strong>500+</strong><span>Happy Travelers</span></div>
      <div class="stat"><strong>12+</strong><span>Destinations</span></div>
      <div class="stat"><strong>5 ★</strong><span>Rated Guides</span></div>
    </div>
  </section>
</template>

<script setup>
// ✅ Change 'tour1.jpg' below to whatever name appears when you run:
// ls C:\Users\USER\Desktop\staaaaa\stage\src\assets\images

</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  background-color: #1b4332;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 30, 18, 0.55) 0%,
    rgba(10, 30, 18, 0.30) 50%,
    rgba(10, 30, 18, 0.75) 100%
  );
}
.content {
  position: relative;
  z-index: 2;
  color: white;
  padding: 1rem 1.5rem;
  max-width: 700px;
  animation: fadeUp 0.9s ease both;
}
.badge {
  display: inline-block;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  backdrop-filter: blur(6px);
  color: #f5d98a;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  padding: 0.35rem 1rem;
  border-radius: 50px;
  margin-bottom: 1.4rem;
}
h1 {
  font-size: clamp(2.8rem, 8vw, 5.5rem);
  font-family: Georgia, serif;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  text-shadow: 0 2px 20px rgba(0,0,0,0.4);
}
h1 em { font-style: italic; color: #d4a853; }
p {
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  opacity: 0.88;
  line-height: 1.7;
  margin-bottom: 2.2rem;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}
.buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-main {
  display: inline-block;
  background: #d4a853;
  color: #111;
  padding: 0.85rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s, transform 0.15s;
}
.btn-main:hover { background: #c49540; transform: translateY(-2px); }
.btn-ghost {
  display: inline-block;
  border: 1.5px solid rgba(255,255,255,0.55);
  color: white;
  padding: 0.85rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.95rem;
  transition: background 0.2s;
}
.btn-ghost:hover { background: rgba(255,255,255,0.1); }
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255,255,255,0.55);
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.line {
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.5), transparent);
  animation: pulse 2s ease-in-out infinite;
}
.stats {
  position: absolute;
  bottom: 2.5rem;
  right: 2rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.stat {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: white;
  text-align: right;
}
.stat strong { display: block; font-size: 1.2rem; font-family: Georgia, serif; color: #d4a853; }
.stat span { font-size: 0.68rem; opacity: 0.7; }
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 1; }
}
@media (max-width: 600px) {
  .stats { display: none; }
  .scroll-hint { display: none; }
}
</style>