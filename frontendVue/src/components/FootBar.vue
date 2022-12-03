<script setup>
  import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js'
  import Payment from './FootBar/Payment.vue'
  import Contact from './FootBar/Contact.vue'
  import SocialMedia from './FootBar/SocialMedia.vue'
</script>

<template>
  <head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
  <!--<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>  -->
</head>
  <div class="footer row">
    <Contact></Contact>
    <Payment></Payment>
    <SocialMedia></SocialMedia>
  </div>
</template>

<style>
.footer {
  background-color: rgba(26, 46, 53, 0.18);
  font-family: 'Poppins';
}

ul {
    list-style-type: none;
}
</style>

