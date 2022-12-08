<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '../stores/user';
import { isApplicationError } from '../mixing/errorMessageMixing'

const name = ref('')
const city = ref('')
const lastName = ref('')
const phone = ref('')
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

const months = [{1:'Janeiro'}, {2:'Fevereiro'}, {3:'Março'}, {4:'Abril'}, {5:'Maio'}, {6:'Junho'},
 {7:'Julho'}, {8:'Agosto'}, {9:'Setembro'}, {10:'Outubro'}, {11:'Novembro'}, {12:'Dezembro'}]
const month = ref('')
const day = ref('')
const year = ref('')
const licenseTerms = ref(null)

const User = {
    email: String,
    password:String,
    username: String,
    lastname: String,
    bornDate: String,
    city: String,
    phone: String,
}

const user = ref(User)

// validar o ano

const validationMessage = ref("")
const router = useRouter()
const userStore = useUserStore()


async function registerUser(){
  user.value.username = name.value + " " + lastName.value
  user.value.email = email.value
  user.value.password = password.value
  user.value.city = city.value
  user.value.phone = phone.value
  user.value.bornDate = `${year.value + 1984}-${month.value + 1}-${day.value}`
  if(user.value.username && user.value.password && user.value.email){
        const result = await userStore.post(user.value)
    if (result) {
      validationMessage.value = ""
      let redirect = "/"
      router.push(redirect)
     }
  }
}
</script>

<template>
  <div class="alignment">
    <div class="card card-login container" style="width: 26rem;">
      <div class="d-flex">
        <h4 class="flex-fill">Criar conta</h4>
        <button class="btn btn-sm rounded inline-block"><router-link to="/">X</router-link></button>
      </div>
      <div class="form-floating mb-2 name">
        <input type="text" v-model="name" class="form-control" id="floatingInput" placeholder="nome" required>
        <label for="floatingInput"><strong>Nome:</strong></label>
      </div>
      <div class="form-floating mb-2 name">
        <input type="text" v-model="lastName" class="form-control" id="floatingInput" placeholder="sobrenome" required>
        <label for="floatingInput"><strong>sobrenome:</strong></label>
      </div>
       <div class="form-floating mb-2">
        <input type="text" v-model="city" class="form-control" id="city" placeholder="cidade" 
          required>
        <label for="floatingInput"><strong>cidade:</strong></label>
      </div>
      <div class="form-floating mb-2">
        <input type="text" v-model="phone" class="form-control" id="phone" placeholder="celular" minlength="6"
          required>
        <label for="floatingInput"><strong>telefone:</strong></label>
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
          <select v-model="month" class="form-select" id="meses" required>
            <option v-for="(value, key) in months" :value="key">{{ months[key][key+1] }}</option>
          </select>
          <label for="meses">Mês</label>
          <div class="invalid-feedback">
            Campo obrigatório.
          </div>
        </div>
        <div class="form-floating">
          <select class="form-select" v-model="day" id="dias" required>
            <option selected></option>
            <option v-for="eachDay in 32" :value="eachDay" >{{eachDay}}</option>
          </select>
          <label for="dias">Dia</label>
        </div>
        <div class="form-floating">
          <select class="form-select years" v-model="year" id="SelectYears" required>
            <option selected></option>
            <option v-for="eachDay in 39" :value="eachDay">{{eachDay + 1984}}</option>
          </select>
          <label for="SelectYear">Ano</label>
          
        </div>
      </div>
      <div>
        <h6>Você concorda com nossos Termos, com a Política de privacidade e com o Uso de Cookies?</h6>
        <input type="radio" name="concordar" id="sim" v-model="licenseTerms">
        <label for="sim">Sim</label>
        <input type="radio" name="concordar" id="nao">
        <label for="nao">Não</label>
      </div>
      <div class="register">
        <button type="submit" class="btn btn-danger btn-sm mb-2" id="btn-submitForm" @click="registerUser">Se inscrever</button>
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

