<script setup>
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { useUserStore } from '../stores/user';
import { isApplicationError } from '../mixing/errorMessageMixing'


const userStore = useUserStore()
const identifier = ref("")
const password = ref("")
const router = useRouter()
const route = useRoute()

const validated = ref(false)
const validationMessage = ref("")

let msg = ref("")

function validateEmail(){
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(identifier.value)) {
        msg.value = "email inválido"
    } else {
        msg.value = ""
    }
}

async function authenticate(event){
    event.preventDefault()
    event.stopPropagation()
    validated.value = true
    if(identifier.value && password.value) {
        const result = await userStore.authenticate(identifier.value, password.value)
        if(result){
            validationMessage.value = ""
            let redirect = "/"
            /*if(store.isAdmin) {
                redirect = route.query.redirect ? route.query.redirect: "/sunglasses"
            }*/
            router.push(redirect)
        }
        if(isApplicationError(result)) {
            validationMessage.value = result.message
        } else {
            
        }
    }
}



</script>


<template>
    <div class="background-screen">
        <div class="card card-login container" style="width: 26rem;">
            <form class="form-login needs-validation" novalidate>
                <img src="../assets/cool-glasses.png" width="48" alt="imagem do twitter" />
                <h4>Entre Na Óptica Store agora mesmo</h4>
                <div class="form-floating mb-3">
                    <input type="email" v-model="identifier" class="form-control" id="Email"
                        placeholder="name@example.com" required @change="validateEmail">
                    <label for="Email"><strong>Email:</strong></label>
                    <div v-if="msg.length > 0">
                        {{msg}}
                    </div>
                </div>
                <div class="form-floating">
                    <input type="password" v-model="password" class="form-control" id="Password" placeholder="Password"
                        minlength="6" required>
                    <label for="Password"><strong>Senha:</strong></label>
                </div>
                <div class="d-flex row">
                    <a class="mb-4" href="#">Esqueceu a senha?</a>
                    <button type="submit" class="btn btn-doLogindanger btn-sm mb-2"
                        id="btn-submitForm" @click="authenticate">Entrar</button>
                    <h6>Não tem uma conta? <router-link to="/SingUp">Inscreva-se</router-link></h6>
                </div>
            </form>
        </div>
        </div>
</template>


<style>
.tzeet {
    text-align: center;
}

a {
    color: #FF0011;
}

.card-login {
    display: flex;
    align-items: center;
    position: relative;
    
}

.card-login {
    margin-top: 15px;
    margin-bottom: 20px;
}

.form-login img {
    padding-top: 15px;
    margin: auto;
    display: block;
}

.form-login button {
    margin-top: 20px;
    margin-left: 1rem;
    border-radius: 15px;
    width: 24rem;
}

.form-login h6 {
    padding-bottom: 15px;
}

.fundo {
    background-color: rgb(36, 35, 35);
}

button {
    padding: 10px 8px;
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
    height: 35px;
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
