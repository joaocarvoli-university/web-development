<template>
  <div class="image-box">
    <div class="text-main">
      <h1><strong>Seja bem vido(a)</strong></h1>
      <p>ao lugar onde se preocupamos com a <br> sua visão!</p>
    </div>
    <router-link to="/login">
      <button type="button" class="login-button btn btn-danger">Fazer login <i class="bi bi-arrow-right"></i></button>
    </router-link>
      
    

    <img class="constumer-photo" src="../assets/diadoconsumidor.png">
  </div>
</template>

<style>
.social {
  margin-left: 33px;
}

.image-box {
  width: 1400px;
  height: 500px;
  top: 87px;
  background: #F3F3F3;
  border-radius: 15px;
}

.constumer-photo {
  position: absolute;
  width: 450px;
  height: 450px;
  left: 850px;
  top: 110px;
  border-radius: 45px;
}

.text-main {
  position: absolute;
  width: 473px;
  height: 147px;
  left: 86px;
  top: 213px;
}

.login-button {
  position: absolute;
  width: 140px;
  height: 50px;
  left: 86px;
  top: 380px;
}
</style>