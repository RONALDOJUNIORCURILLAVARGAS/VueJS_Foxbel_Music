import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    //Direcciones implementadas en router
    path: '/',
    name: 'Home',
    component: Home
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
