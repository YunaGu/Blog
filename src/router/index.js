import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bio from '../views/Bio.vue'
import Works from '../views/Works.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Bio',
    name: 'Bio',
    component: Bio
  },
  {
    path: '/Works',
    name: 'Works',
    component: Works
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
