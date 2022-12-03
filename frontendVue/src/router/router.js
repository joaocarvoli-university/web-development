import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import SingUp from '../views/SingUp.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    component: Home,
    nome: 'home'
  },
  {
    path: "/login",
    component: Login,
    nome: 'login'
  },
  {
    path: "/profile",
    component: Profile,
    nome: 'profile'
  },
  {
    path: "/singup",
    component: SingUp,
    nome: 'singup'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

