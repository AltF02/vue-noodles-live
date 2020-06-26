import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Commands from '../views/Commands/Commands.vue'
import NotFound from '../views/404/404.vue'
import About from '../views/About/About.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/commands',
    name: 'Commands',
    component: Commands
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
