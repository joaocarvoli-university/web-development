<script setup>
import { store } from '../stores/loggedUser.js'
import { doLogout } from '../mixing/logout.js'
</script>

<template>
<div>
  <button class="btn btn-danger btn-sm logout" type="reset" v-if="store.state.authenticated" @click="doLogout">Logout</button>
  <div class="container">
  <div class="row">
    <div class="col-2 text-main">
      <h1><strong>Sobre nós</strong></h1>
      <p>Somos uma empresa especializada em fornecer um atendimento de qualidade para os nossos clientes</p>
      <p>Temos mais de 28 anos de experiência no mercado óptico e 9 anos como HUB</p>
    </div>
    <div class="col">
      <img class="constumer-photo" src="../assets/diadoconsumidor.png">
    </div>
  </div>
</div>
</div>
    
</template>

<style>
.social {
  margin-left: 33px;
}

body {
  background-color: rgb(255, 255, 255);
}

.constumer-photo {
  position: absolute;
  width: 450px;
  height: 450px;
  left: 70%;
  top: 20%;
  border-radius: 45px;
}

.text-main {
  position: absolute;
  width: 50%;
  height: 70%;
  left: 10%;
  top: 40%;
}
</style>