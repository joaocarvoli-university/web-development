<script setup>
import { store } from '../router/statesControl.js'
import { doLogout } from '../router/logout.js'
</script>

<template>
  <div>
    <button class="btn btn-danger btn-sm logout" type="reset" v-if="store.state.authenticated">Logout</button>
  <div class="text">
    <h1>404</h1>
    <h2>Recurso não encontrado.</h2>
  </div>
  </div>
</template>

<style>
.text {
  height: 50%
}
</style>