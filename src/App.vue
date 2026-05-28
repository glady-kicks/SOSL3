<script setup>
import Navbar from './component/ui/Navbar.vue'
import Footer from './component/ui/footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />

  <RouterView />

  <Footer />
</template>