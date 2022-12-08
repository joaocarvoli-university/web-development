import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import SingUp from '../views/SingUp.vue'
import Home from '../views/Home.vue'
import SunGlasses from '../views/SunGlasses.vue'
import PrescriptionGlasses from '../views/PrescriptionGlasses.vue'
import Cart from '../views/CartPage.vue'
import AboutUs from "../views/Aboutus.vue"
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
    path: "/profile/:id",
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
    path: "/prescriptionGlasses",
    component: PrescriptionGlasses,
    nome: 'prescriptionGlasses'
  },
  {
    path: "/cart/:id",
    component: Cart,
    nome: 'cart'
  },
  {
    path: "/aboutus",
    component: AboutUs,
    nome: 'aboutus'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

