<script setup>
import img1 from '@/assets/images/img1.jpg'
import img2 from '@/assets/images/img2.jpg'
import img3 from '@/assets/images/img3.jpg'
import img4 from '@/assets/images/img4.jpg'

const photos = [img1, img2, img3, img4]
</script>

<template>
  <div class="gallery">
    <h1 class="text-green-800 text-bold text-3xl mb-4">rwandan photo</h1>

    <div class="grid">
      <img
        v-for="(photo,index) in photos"
        :key="index"
        :src="photo"
      />
    </div>
  </div>
</template>

<style scoped>
.gallery{
  padding:40px;
}

.grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
  gap:20px;
}

img{
  width:100%;
  height:250px;
  object-fit:cover;
  border-radius:10px;
}
</style>