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
      <RouterLink to="/" @click="menuOpen = false">Home</RouterLink>
      <RouterLink to="/about" @click="menuOpen = false">About Us</RouterLink>
      <RouterLink to="/service" @click="menuOpen = false">Services</RouterLink>

      <!-- Gallery Dropdown -->
      <div class="dropdown" @mouseenter="galleryOpen = true" @mouseleave="galleryOpen = false">
        <button class="dropbtn" @click="galleryOpen = !galleryOpen">
          Gallery <span class="arrow" :class="{ rotated: galleryOpen }">▾</span>
        </button>
        <transition name="fade-drop">
          <div class="dropdown-content" v-if="galleryOpen">
            <RouterLink to="/photos" @click="close">📷 Photos</RouterLink>
            <RouterLink to="/videos" @click="close">🎬 Videos</RouterLink>
          </div>
        </transition>
      </div>

      <!-- Destinations Dropdown -->
      <div class="dropdown" @mouseenter="destOpen = true" @mouseleave="destOpen = false">
        <button class="dropbtn" @click="destOpen = !destOpen">
          Destinations <span class="arrow" :class="{ rotated: destOpen }">▾</span>
        </button>
        <transition name="fade-drop">
          <div class="dropdown-content" v-if="destOpen">
            <RouterLink to="/kigali" @click="close">🏙️ Kigali</RouterLink>
            <RouterLink to="/north" @click="close">🏔️ Northern Province</RouterLink>
            <RouterLink to="/south" @click="close">🌿 Southern Province</RouterLink>
            <RouterLink to="/east" @click="close">🌅 Eastern Province</RouterLink>
            <RouterLink to="/west" @click="close">🦍 Western Province</RouterLink>
          </div>
        </transition>
      </div>

      <RouterLink to="/contact" @click="menuOpen = false">Contact</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/images/logos.png'

const menuOpen = ref(false)
const galleryOpen = ref(false)
const destOpen = ref(false)

function close() {
  menuOpen.value = false
  galleryOpen.value = false
  destOpen.value = false
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

.fade-drop-enter-active { transition: opacity 0.2s, transform 0.2s; }
.fade-drop-leave-active { transition: opacity 0.15s, transform 0.15s; }
.fade-drop-enter-from  { opacity: 0; transform: translateY(-6px); }
.fade-drop-leave-to    { opacity: 0; transform: translateY(-6px); }

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
}
</style>