<template>
  <nav class="navbar">
    <!-- Logo -->
    <RouterLink to="/" class="logo-link">
      <img :src="logo" alt="Tembera Urwanda Logo" class="logo" />
    </RouterLink>

    <!-- Brand name (center) -->
    <span class="brand">TEMBERA URWANDA</span>

    <!-- Hamburger (mobile) -->
    <button class="hamburger" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>

    <!-- Navigation Links -->
    <div class="links" :class="{ 'mobile-open': menuOpen }">
      <RouterLink to="/" @click="menuOpen = false">{{ t.home }}</RouterLink>
      <RouterLink to="/about" @click="menuOpen = false">{{ t.about }}</RouterLink>
      <RouterLink to="/service" @click="menuOpen = false">{{ t.services }}</RouterLink>

      <!-- Gallery Dropdown -->
      <div class="dropdown" @mouseenter="galleryOpen = true" @mouseleave="galleryOpen = false">
        <button class="dropbtn" @click="galleryOpen = !galleryOpen">
          {{ t.gallery }} <span class="arrow" :class="{ rotated: galleryOpen }">▾</span>
        </button>
        <transition name="fade-drop">
          <div class="dropdown-content" v-if="galleryOpen">
            <RouterLink to="/photos" @click="close">📷 {{ t.photos }}</RouterLink>
            <RouterLink to="/videos" @click="close">🎬 {{ t.videos }}</RouterLink>
          </div>
        </transition>
      </div>

      <!-- Destinations Dropdown -->
      <div class="dropdown" @mouseenter="destOpen = true" @mouseleave="destOpen = false">
        <button class="dropbtn" @click="destOpen = !destOpen">
          {{ t.destinations }} <span class="arrow" :class="{ rotated: destOpen }">▾</span>
        </button>
        <transition name="fade-drop">
          <div class="dropdown-content" v-if="destOpen">
            <RouterLink to="/kigali" @click="close">🏙️ Kigali</RouterLink>
            <RouterLink to="/north" @click="close">🏔️ {{ t.north }}</RouterLink>
            <RouterLink to="/south" @click="close">🌿 {{ t.south }}</RouterLink>
            <RouterLink to="/east" @click="close">🌅 {{ t.east }}</RouterLink>
            <RouterLink to="/west" @click="close">🦍 {{ t.west }}</RouterLink>
          </div>
        </transition>
      </div>

      <RouterLink to="/contact" @click="menuOpen = false">{{ t.contact }}</RouterLink>

      <!-- Login Link -->
      <RouterLink to="/login" class="auth-link login-link" @click="menuOpen = false">Login</RouterLink>

      <!-- Language Switcher -->
      <div class="dropdown lang-dropdown" @mouseenter="langOpen = true" @mouseleave="langOpen = false">
        <button class="dropbtn lang-btn" @click="langOpen = !langOpen">
          <span class="lang-flag">{{ currentLang.flag }}</span>
          {{ currentLang.label }}
          <span class="arrow" :class="{ rotated: langOpen }">▾</span>
        </button>
        <transition name="fade-drop">
          <div class="dropdown-content lang-content" v-if="langOpen">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="setLang(lang.code)"
              :class="{ active: locale === lang.code }"
              class="lang-option"
            >
              <span class="lang-flag">{{ lang.flag }}</span>
              {{ lang.label }}
              <span v-if="locale === lang.code" class="lang-check">✓</span>
            </button>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import logo from '@/assets/images/logos.png'

const menuOpen = ref(false)
const galleryOpen = ref(false)
const destOpen = ref(false)
const langOpen = ref(false)

// ── Language data ───────────────────────────────────────────────
const locale = ref('en')

const languages = [
  { code: 'en', label: 'English',    flag: '🇬🇧' },
  { code: 'fr', label: 'Français',   flag: '🇫🇷' },
  { code: 'rw', label: 'Kinyarwanda', flag: '🇷🇼' },
]

const translations = {
  en: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    gallery: 'Gallery',
    photos: 'Photos',
    videos: 'Videos',
    destinations: 'Destinations',
    north: 'Northern Province',
    south: 'Southern Province',
    east: 'Eastern Province',
    west: 'Western Province',
    contact: 'Contact',
  },
  fr: {
    home: 'Accueil',
    about: 'À Propos',
    services: 'Services',
    gallery: 'Galerie',
    photos: 'Photos',
    videos: 'Vidéos',
    destinations: 'Destinations',
    north: 'Province du Nord',
    south: 'Province du Sud',
    east: 'Province de l\'Est',
    west: 'Province de l\'Ouest',
    contact: 'Contact',
  },
  rw: {
    home: 'Ahabanza',
    about: 'Abo Turibo',
    services: 'Serivisi',
    gallery: 'Galeri',
    photos: 'Amafoto',
    videos: 'Amavidewo',
    destinations: 'Aho Ujya',
    north: 'Intara y\'Amajyaruguru',
    south: 'Intara y\'Amajyepfo',
    east: 'Intara y\'Iburasirazuba',
    west: 'Intara y\'Iburengerazuba',
    contact: 'Twandikire',
  },
}

const t = computed(() => translations[locale.value])
const currentLang = computed(() => languages.find(l => l.code === locale.value))

function setLang(code) {
  locale.value = code
  langOpen.value = false
  menuOpen.value = false
}

function close() {
  menuOpen.value = false
  galleryOpen.value = false
  destOpen.value = false
  langOpen.value = false
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Lato:wght@400;700&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

.navbar {
  display: flex;
  align-items: center;
  background-color: #1b4332;
  padding: 0 40px;
  height: 72px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
  gap: 20px;
}

.logo-link { display: flex; align-items: center; flex-shrink: 0; }
.logo {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 215, 0, 0.6);
  transition: border-color 0.3s;
}
.logo:hover { border-color: gold; }

.brand {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  font-weight: 600;
  color: gold;
  letter-spacing: 2px;
  white-space: nowrap;
  flex: 1;
  text-align: center;
}

.links {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.links > a,
.dropbtn {
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #e8f5e9;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 6px;
  letter-spacing: 0.5px;
  transition: color 0.25s, background 0.25s;
  white-space: nowrap;
}

.links > a:hover,
.dropbtn:hover,
.links > a.router-link-active {
  color: gold;
  background: rgba(255, 215, 0, 0.1);
}

.dropdown { position: relative; }

.arrow {
  display: inline-block;
  transition: transform 0.25s;
  font-size: 12px;
  margin-left: 3px;
}
.arrow.rotated { transform: rotate(180deg); }

.dropdown-content {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  background: #fff;
  min-width: 200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
  border-top: 3px solid #1b4332;
}

.dropdown-content a {
  display: block;
  padding: 11px 16px;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: #1b4332;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s, padding-left 0.2s;
  border-bottom: 1px solid #f0f0f0;
}
.dropdown-content a:last-child { border-bottom: none; }
.dropdown-content a:hover {
  background: #e8f5e9;
  padding-left: 22px;
  color: #1b4332;
}

/* ── Language switcher ─────────────────────────────────────── */
.lang-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid rgba(255, 215, 0, 0.35);
  border-radius: 20px;
  padding: 6px 14px;
  color: gold !important;
  font-size: 13px;
}
.lang-btn:hover {
  border-color: gold;
  background: rgba(255, 215, 0, 0.12) !important;
  color: gold !important;
}

/* ── Auth Links (Login & Register) ───────────────────────── */
.auth-link {
  color: gold !important;
  font-weight: 700 !important;
  border: 2px solid gold;
  border-radius: 6px;
  padding: 6px 16px !important;
  transition: all 0.25s;
  background: rgba(255, 215, 0, 0.05);
}

.auth-link:hover {
  background: rgba(255, 215, 0, 0.15) !important;
  color: white !important;
  border-color: gold;
}

.login-link { margin-left: 8px; }
.register-link { margin-left: 4px; }

.lang-flag { font-size: 16px; line-height: 1; }

.lang-content {
  min-width: 160px;
  padding: 4px 0;
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 16px;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1b4332;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s, padding-left 0.2s;
  border-bottom: 1px solid #f0f0f0;
}
.lang-option:last-child { border-bottom: none; }
.lang-option:hover {
  background: #e8f5e9;
  padding-left: 22px;
}
.lang-option.active {
  color: #1b4332;
  font-weight: 700;
}
.lang-check {
  margin-left: auto;
  color: #1b4332;
  font-weight: 700;
}

/* ── Transitions ─────────────────────────────────────────────── */
.fade-drop-enter-active { transition: opacity 0.2s, transform 0.2s; }
.fade-drop-leave-active { transition: opacity 0.15s, transform 0.15s; }
.fade-drop-enter-from  { opacity: 0; transform: translateY(-6px); }
.fade-drop-leave-to    { opacity: 0; transform: translateY(-6px); }

/* ── Hamburger ───────────────────────────────────────────────── */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: auto;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile ──────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .navbar { flex-wrap: wrap; height: auto; padding: 12px 20px; }
  .brand { font-size: 13px; letter-spacing: 1px; }
  .hamburger { display: flex; }

  .links {
    display: none;
    flex-direction: column;
    width: 100%;
    padding: 10px 0 16px;
    gap: 4px;
    align-items: flex-start;
  }
  .links.mobile-open { display: flex; }

  .dropdown-content {
    position: static;
    box-shadow: none;
    border-top: none;
    border-left: 3px solid #1b4332;
    border-radius: 0;
    margin-left: 16px;
    background: #f9f9f9;
  }

  .lang-btn { font-size: 12px; padding: 5px 12px; }
  
}
</style>
