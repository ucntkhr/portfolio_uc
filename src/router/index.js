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
  },

]

const router = new VueRouter({
  routes
})

export default router
