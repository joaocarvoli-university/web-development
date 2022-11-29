app.component("payment", {
  template:
  /*html*/
  `<div class="col-4 footer-half d-flex flex-column align-items-center">
  <span class="payment">Formas de pagamento</span>
  <ul class="d-flex flew-row align-items-center">
      <li>
          <a href=""><img src="../assets/mastercard-2.svg" width="30" height="30" alt=""></a>
      </li>
      <li>
          <a href=""><img src="../assets/visa.svg" width="30" height="30" alt=""></a>
      </li>
      <li>
          <a href=""><img src="../assets/pix-106.svg" width="50" height="35" alt=""></a>
      </li>
  </ul>
</div>`
})

module.exports = { payment }