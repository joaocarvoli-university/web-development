<script>
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
import NavBar from '../components/NavBar.vue'
// Missing validation
</script>


<template>
  <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
  </head>
  <div class="alignment">
      <div class="card card-login container" style="width: 26rem;">
          <form class="form-login needs-validation" novalidate>
              <img src="../assets/cool-glasses.png" width="48" alt="imagem do twitter" />
              <h4>Entre Na Óptica Store agora mesmo</h4>
              <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="Email" placeholder="name@example.com" required>
                  <label for="Email"><strong>Email:</strong></label>
                  <div class="invalid-feedback">
                      Informe um e-mail válido.
                  </div>
              </div>
              <div class="form-floating">
                  <input type="password" class="form-control" id="Password" placeholder="Password" minlength="6" required>
                  <label for="Password"><strong>Senha:</strong></label>
              </div>
              <div class="d-flex row">
                  <a class="mb-4" href="#">Esqueceu a senha?</a>
                  <button type="submit" class="btn btn-danger btn-sm mb-2" id="btn-submitForm">Entrar</button>
                  <h6>Não tem uma conta?<a href="singup.html">Inscreva-se</a></h6>
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

.alignment {
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: aliceblue
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
