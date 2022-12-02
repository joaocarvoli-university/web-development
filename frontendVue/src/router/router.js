import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import SingUp from '../views/SingUp.vue'

const routes = [
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

