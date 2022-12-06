import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import SingUp from '../views/SingUp.vue'
import Home from '../views/Home.vue'
import SunGlasses from '../views/SunGlasses.vue'
import Cart from '../views/CartPage.vue'

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
  },
  {
    path: "/sunglasses",
    component: SunGlasses,
    nome: 'sunglasses'
  },
  {
    path: "/cart",
    component: Cart,
    nome: 'cart'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

