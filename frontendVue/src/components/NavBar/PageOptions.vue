<script setup>

import Cart from "./Cart.vue"

</script>

<template>
  <li class="nav-item">
    <router-link class="items nav-link active" aria-current="page" to="/">Home</router-link>
  </li>
  <li class="items nav-item">
    <router-link class="nav-link active" aria-current="page" to="/profile">Profile</router-link>
  </li>
  <li class="items nav-item">
    <Cart></Cart>
  </li>
</template>

<style>
li {
   display: inline-block;
}
</style>