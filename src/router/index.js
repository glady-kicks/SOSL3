import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'
import Service from '../views/service.vue'
import Contact from '../views/contact.vue'

import Photos from '../views/photos.vue'
import Videos from '../views/video.vue'

import Kigali from '../views/kigali.vue'
import Northern from '../views/north.vue'
import Southern from '../views/south.vue'
import Eastern from '../views/east.vue'
import Western from '../views/west.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/kigali',
      name: 'kigali',
      component: Kigali
    },
    {
      path: '/north',
      name: 'north',
      component: Northern
    },
    {
      path: '/south',
      name: 'south',
      component: Southern
    },
    {
      path: '/east',
      name: 'east',
      component: Eastern
    },
    {
      path: '/west',
      name: 'west',
      component: Western
    }
  ]
})

export default router