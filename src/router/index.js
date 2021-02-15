import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Articles from '../views/Articles.vue'
import AjoutArticle from '../views/AjoutArticle.vue'
import Crypt from '../views/Crypt.vue'

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
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/ajoutArticle',
    name: 'AjoutArticle',
    component: AjoutArticle
  },
  {
    path: '/crypt',
    name: 'Crypt',
    component: Crypt
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
