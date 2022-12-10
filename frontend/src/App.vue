<script setup>
import { store } from './router/statesControl.js'
</script>
  
  
<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" aria-current="page" to="/">HUB</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" to="/profile">Perfil</router-link>
        </li>
        <li class="nav-item ">
          <router-link class="nav-link active" to="/cart">Carrinho</router-link>
        </li>
        <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Produtos
          </a>
          <ul class="dropdown-menu">
            <li class="items nav-item">
                <router-link class="nav-link active" aria-current="page" to="/sunglasses">Óculos de sol</router-link>
            </li>
            <li class="items nav-item">
              <router-link class="nav-link active" to="/prescriptionGlasses">Óculos de grau</router-link>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li class="items nav-item">
              <router-link class="nav-link active" to="/aboutus">Sobre nós</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<main>
  <router-view>
  </router-view>
</main>

<footer>
  <div class="footer row">
    <div class="col-4 footer-left d-flex flex-column align-items-center">
        <span class="payment">Fale conosco!</span>
        <a><img src="./assets/whatsapp.png" width="20" height="20" alt="Whatsapp link"></a>
    </div>
    <div class="col-4 footer-right d-flex flex-column align-items-center">
    <span class="payment">Formas de pagamento</span>
    <ul class="d-flex flex-row align-items-center">
      <li><a href=""><img src="./assets/mastercard-2.svg" width="30" height="30" alt=""></a></li>
      <li><a href=""><img src="./assets/visa.svg" width="30" height="30" alt=""></a></li>
      <li><a href=""><img src="./assets/pix-106.svg" width="50" height="35" alt=""></a></li>
    </ul>
  </div>
  <div class="col-4 footer-right d-flex flex-column align-content-center">
    <div class="d-flex flex-row align-items-center justify-content-around">
      <span class="social">Nossas redes sociais</span>
    </div>
    <ul class="d-flex flex-row align-items-center justify-content-center">
      <li><a href=""><img src="./assets/youtube.png" width="35" alt=""></a></li>
      <li><a href=""><img src="./assets/twitter-sign.png" width="25" alt=""></a></li>
      <li><a href=""><img src="./assets/facebook.png" width="25" alt=""></a></li>
      <li><a href=""><img src="./assets/instagram.png" width="25" alt=""></a></li>
    </ul>
  </div>
  </div>
</footer>
</template>

<style>
.logout {
  display: grid;
  position: relative;
}
div {
    font-family: 'Poppins';
}
.footer {
  background-color: rgba(26, 46, 53, 0.18);
  font-family: 'Poppins';
  position: fixed;
  bottom: 0;
  width: 100%;
}

ul {
    list-style-type: none;
}
</style>