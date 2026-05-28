import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/home.vue'
import About from '../views/about.vue'
import service from '../views/service.vue'
import contact from '../views/contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/About',
    name: 'About',
    component:About
  },
   {
    path: '/contact',
    name: 'contact',
    component:contact
  },
   {
    path: '/service',
    name: 'service',
    component:service
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router