import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Bio from '../views/Bio.vue'
import Works from '../views/Works.vue'
import WorkDetails from '../views/WorkDetails.vue'
import NotFound from '../views/NotFound.vue'

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
  },
  {
    path: '/WorkDetails/:title',
    name: 'WorkDetails',
    // component: () => import('./views/WorkDetails')
    component: WorkDetails
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
