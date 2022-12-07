<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const passwordValidation = ref('')
const msgEmail = ref("")
const msgPassword = ref("")


function validateEmail() {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) msgEmail.value = "email inválido" 
  else msgEmail.value = ""
}

function validatePassword() {
  if (password != passwordValidation) msgPassword.value = "senha inválida"
  else msgPassword.value = ""
}

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Novembro', 'Dezembro']
const month = ref('')
const day = ref('')
const year = ref('')

/*function year () {
  if (month.value === "02" && days.value === "29") {
    for (let index = 1985; index <= 2022; index++) {
      if (index % 4 == 0 && (index % 100 != 0 || index % 400 == 0)) {
        years.options[years.options.length] = new Option(index, index);
      }
    }
  } else {
    for (let index = 1985; index <= 2022; index++) {
      years.options[years.options.length] = new Option(index, index);
    }
  }
}*/

// validar o ano
</script>

<template>
  <div class="alignment">
    <div class="card card-login container" style="width: 26rem;">
      <div class="d-flex">
        <h4 class="flex-fill">Criar conta</h4>
        <button class="btn btn-sm rounded inline-block"><router-link to="/">X</router-link></button>
      </div>
      <div class="form-floating mb-2 name">
        <input type="text" v-model="name" class="form-control" id="floatingInput" placeholder="name" required>
        <label for="floatingInput"><strong>Nome:</strong></label>
      </div>
      <div class="form-floating mb-2">
        <input type="email" v-model="email" class="form-control" id="Email" placeholder="name@example.com" required
          @change="validateEmail">
        <label for="Email"><strong>Email:</strong></label>
        <div v-if="msgEmail.length > 0">
          {{ msgEmail }}
        </div>
      </div>
      <div class="form-floating mb-2">
        <input type="password" v-model="password" class="form-control" id="senha" placeholder="Password" minlength="6"
          required>
        <label for="floatingInput"><strong>Senha:</strong></label>
      </div>
      <div class="form-floating mb-2">
        <input @change="validatePassword" type="password" v-model="passwordValidation" class="form-control" id="confirmPassword" placeholder="Password" minlength="6" required>
        <label for="floatingPassword"><strong>Confirmação da senha:</strong></label>
        <div v-if="msgPassword.length > 0">
          {{ msgPassword }}
        </div>
      </div>
      <div class="selects d-flex justify-content-between">
        <div class="form-floating">
          <select class="form-select" id="meses" required>
            <option selected v-model="month"></option>
            <option v-for="eachMonth in months">{{eachMonth}}</option>
          </select>
          <label for="meses">Mês</label>
          <div class="invalid-feedback">
            Campo obrigatório.
          </div>
        </div>
        <div class="form-floating">
          <select class="form-select" id="dias" required>
            <option selected></option>
            <option v-for="eachDay in 32">{{eachDay}}</option>
          </select>
          <label for="dias">Dia</label>
        </div>
        <div class="form-floating">
          <select class="form-select years" id="SelectYears" required>
            <option selected></option>
            <option v-for="eachDay in 39">{{eachDay + 1984}}</option>
          </select>
          <label for="SelectYear">Ano</label>
          
        </div>
      </div>
      <div class="d-flex">
        <h6>Receba e-mails sobre sua atividade no Tzeet e recomendações.</h6>
        <input type="checkbox" id="confirm">
      </div>
      <div>
        <h6>Você concorda com nossos Termos, com a Política de privacidade e com o Uso de Cookies?</h6>
        <input type="radio" name="concordar" id="sim">
        <label for="sim">Sim</label>
        <input type="radio" name="concordar" id="nao">
        <label for="nao">Não</label>
      </div>
      <div class="register">
        <button type="submit" class="btn btn-danger btn-sm mb-2" id="btn-submitForm">Se inscrever</button>
      </div>
    </div>
  </div>
</template>

<style>
.form-floating {
  width: 100%;
}

.alignment {
  display: flex;
  align-items: center;
  height: 100%;
}

.form-floating {
  font-size: small;
}

.form-floating button {
  border-radius: 15px;
  margin-top: 20px;
}

.selects {
  margin-top: 8px;
  margin-bottom: 8px;
}

.register {
  border-top: 1 solid;
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

