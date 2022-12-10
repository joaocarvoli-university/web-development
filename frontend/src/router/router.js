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
import { store } from './statesControl.js'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    name: 'Login'
  },
  {
    path: "/profile",
    component: Profile,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false) next({path:"/login"});
      else next()
    }
  },
  {
    path: "/singup",
    component: SingUp,
  },
  {
    path: "/sunglasses",
    component: SunGlasses,
  },
  {
    path: "/prescriptionGlasses",
    component: PrescriptionGlasses,
  },
  {
    path: "/cart",
    component: Cart,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false) next("/login");
      else next()
    }
  },
  {
    path: "/aboutus",
    component: AboutUs,
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

