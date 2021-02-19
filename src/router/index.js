import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questionnaire',
    name: 'Questionnaire',
    component: () => import(/* webpackChunkName: "Questionnaire" */ '../views/questionnaire.vue')
  },
  {
    path: '/Success',
    name: 'Success',
    component: Success
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
