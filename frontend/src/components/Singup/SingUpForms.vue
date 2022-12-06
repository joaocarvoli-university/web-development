<template>
    <div class="d-flex title">
        <h4 class="flex-fill">Criar conta</h4>
        <a href="../index.html">X</a>
    </div>
    <div class="form-floating mb-2">
        <input type="text" class="form-control" id="floatingInput" placeholder="name" required>
        <label for="floatingInput"><strong>Nome:</strong></label>
        <div class="invalid-feedback">Por favor, informe um nome de usuário.</div>
    </div>
    <div class="form-floating mb-2">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
        <label for="floatingInput"><strong>Email:</strong></label>
        <div class="invalid-feedback">Informe um email válido.</div>
    </div>
    <div class="form-floating mb-2">
        <input type="password" class="form-control" id="senha" placeholder="Password" minlength="6" required>
        <label for="floatingInput"><strong>Senha:</strong></label>
        <div class="invalid-feedback">A senha é obrigatória e deve ter pelo menos 6 caracteres.</div>
    </div>
    <div class="form-floating mb-2">
        <input type="password" class="form-control" id="confirmPassword" placeholder="Password" minlength="6" required>
        <label for="floatingPassword"><strong>Confirmação da senha:</strong></label>
        <div class="invalid-feedback">A confirmação de senha deve ser igual a senha, e deve ter pelo menos 6 caracteres.</div>
    </div>
</template>