import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import SingUp from '../views/SingUp.vue'
import Home from '../views/Home.vue'
import SunGlasses from '../views/SunGlasses.vue'
import PrescriptionGlasses from '../views/PrescriptionGlasses.vue'
import Cart from '../views/CartPage.vue'
import AboutUs from "../views/Aboutus.vue"
import Page403 from '../views/Page403.vue'
import Page404 from '../views/Page404.vue'

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
    path: "/sunglasses/:id",
    component: SunGlasses,
    nome: 'sunglasses'
  },
  {
    path: "/prescriptionGlasses/:id",
    component: PrescriptionGlasses,
    nome: 'prescriptionGlasses'
  },
  {
    path: "/cart",
    component: Cart,
    nome: 'cart'
  },
  {
    path: "/aboutus",
    component: AboutUs,
    nome: 'aboutus'
  },
  {
    path: '/forbiden',
    component: Page403,
  },
  {
    path: '/notfound',
    component: Page404,
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

