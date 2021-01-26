import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '@/components/Profile.vue'
import Skillset from '@/components/Skillset.vue'
import Project from '@/components/Project.vue'
import Contact from '@/components/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/skillset',
    name: 'Skillset',
    component: Skillset
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }

]

const router = new VueRouter({
  routes
})

export default router
