<script setup>
import { ref } from 'vue'


const identifier = ref("")
const password = ref("")


</script>

<template>
    <div class="d-flex title">
        <h4 class="flex-fill">Criar conta</h4>
        <button class="btn btn-sm rounded"><router-link to="/">X</router-link></button>
    </div>
    <div class="form-floating mb-2">
        <input type="text" class="form-control" id="floatingInput" placeholder="name" required v-model="identifier">
        <label for="floatingInput"><strong>Nome:</strong></label>
    </div>
    <div class="form-floating mb-2">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
        <label for="floatingInput"><strong>Email:</strong></label>
    </div>
    <div class="form-floating mb-2">
        <input type="password" class="form-control" id="senha" placeholder="Password" minlength="6" required>
        <label for="floatingInput"><strong>Senha:</strong></label>
    </div>
    <div class="form-floating mb-2">
        <input type="password" class="form-control" id="confirmPassword" placeholder="Password" minlength="6" required>
        <label for="floatingPassword"><strong>Confirmação da senha:</strong></label>
    </div>
</template>

