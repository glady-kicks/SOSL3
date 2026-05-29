import { createRouter, createWebHistory } from 'vue-router'
import Home    from '../views/home.vue'
import About   from '../views/about.vue'
import Contact from '../views/contact.vue'
import Service from '../views/service.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',        component: Home    },
    { path: '/about',   component: About   },
    { path: '/contact', component: Contact },
    { path: '/service', component: Service },
  ]
})

export default router