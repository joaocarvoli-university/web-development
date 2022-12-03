<script setup>
import NavBar from './components/NavBar.vue'
import FootBar from './components/FootBar.vue'
import Profile from './views/Profile.vue'
</script>

<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <FootBar></FootBar>
</template>


