<script setup>
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'
import 'https://code.jquery.com/jquery-3.6.0.js'
import SingUpForms from '../components/Singup/SingUpForms.vue';
import BornDate from '../components/Singup/BornDate.vue';
import UserTerms from '../components/Singup/UserTerms.vue';


</script>

<template>

  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
  </head>
  <div class="alignment">
    <div class="card card-login container" style="width: 26rem;">
      <SingUpForms></SingUpForms>
      <BornDate></BornDate>
      <UserTerms></UserTerms>
      <div class="register">
        <button type="submit" class="btn btn-danger btn-sm mb-2" id="btn-submitForm">Se inscrever</button>
      </div>
    </div>
  </div>
</template>

<style>
.alignment {
  display: flex;
  align-items: center;
  height: 100%;
  background-color: rgb(80, 80, 80);
}

.form-cadastro {
  font-size: small;
}

.form-cadastro button {
  border-radius: 15px;
  margin-top: 20px;
  width: 24rem;
}

.selects {
  margin-top: 8px;
  margin-bottom: 8px;
}

.register {
  border-top: 1 solid;
}

.alignment {
  background-color: aliceblue;
}

#comment {
  font-size: 12px;
  color: rgb(80, 80, 80);
}

.title {
  border-bottom: 1px solid;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.title a {
  text-decoration: none;
  font-size: large;
  margin-top: 15px;
  color: rgb(24, 24, 24);
}

button {
  padding: 10px 5px;
  border: none;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #FF0011;
  min-width: 50px;
  color: #FF0011;
  z-index: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s;
  font-weight: 600;
}

button {
  margin-left: auto;
  margin-top: auto;
  padding: 8px;
  height: 30px;
}

button::before {
  content: " ";
  position: absolute;
  display: block;
  top: 0;
  left: -50px;
  width: 70%;
  height: 100%;
  background: linear-gradient(98deg, transparent);
  transition: all 1s;
  z-index: -1;
  transform: translatex(-120px) skew(-20deg)
}

button:hover::before {
  transform: translatex(300px) skew(-20deg);
}

button:hover::before {
  background-color: goldenrod
}
</style>

