<template>
  <nav class="bg-green-800 text-white p-4 flex justify-between items-center relative">

    <img :src="logo" alt="logo" class="w-12 h-12 rounded-full object-cover">

    <div class="flex gap-6 items-center">

      <a href="/" class="hover:text-yellow-300"></a>
        <a href="/About" class="hover:text-yellow-300">
        About us
      </a>

      <a href="/service" class="hover:text-yellow-300">
        Services
      </a>
  
      <div
        class="relative"
        @mouseenter="galleryOpen = true"
        @mouseleave="galleryOpen = false"
      >
        <button
          type="button"
          @click.prevent="galleryOpen = !galleryOpen"
          class="hover:text-yellow-300 focus:outline-none"
        >
          Gallery  ▼
        </button>

        <div
          v-show="galleryOpen"
          class="absolute right-0 top-full w-40 rounded-md bg-white text-black shadow-lg ring-1 ring-black/10 z-10"
        >
          <a href="#photo" class="block px-4 py-2 text-sm hover:bg-gray-500">
            Photo
          </a>

          <a href="#video" class="block px-4 py-2 text-sm hover:bg-gray-500">
            Video
          </a>
        </div>

      </div>

     
      <div
        class="relative"
        @mouseenter="destinationOpen = true"
        @mouseleave="destinationOpen = false"
      >
        <button
          type="button"
          @click.prevent="destinationOpen = !destinationOpen"
          class="hover:text-yellow-300 focus:outline-none"
        >
          Destinations  ▼
        </button>

        <div
          v-show="destinationOpen"
          class="absolute right-0 top-full w-48 rounded-md bg-white text-black shadow-lg ring-1 ring-black/10 z-10"
        >
          <a href="#kigali" class="block px-4 py-2 text-sm hover:bg-gray-500">
            Kigali
          </a>

          <a href="#north" class="block px-4 py-2 text-sm hover:bg-gray-500">
            Northern Province
          </a>

          <a href="#south" class="block px-4 py-2 text-sm hover:bg-gray-500">
            Southern Province
          </a>

          <a href="#east" class="block px-4 py-2 text-sm hover:bg-gray-500">
            Eastern Province
          </a>

          <a href="#west" class="block px-4 py-2 text-sm hover:bg-gray-500">
            Western Province
          </a>
        </div>
      </div>

      <a href="/contact" class="hover:text-yellow-500">
        Contact
      </a>

    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/images/img.png'

const galleryOpen = ref(false)
const destinationOpen = ref(false)
</script>