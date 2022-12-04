<script setup>
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
import Card from '../components/Glasses/Card.vue'
import { ref, onBeforeMount } from 'vue'
import { api } from '../baseConfig'

let items = {}

async function allGlasses(){
    try {
        const { data, status } = await api.get("/many-glasses")
        const response = data.data
        if(status == 200){
            items = response
        }
    }
    catch(error){
        console.log(error)
    }
}

onBeforeMount(async() => allGlasses())



</script>

<template>
  <head>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
  </head>
  <section class="section-products">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-lg-6">
          <div class="header">
            <h1>Óculos de sol</h1>
          </div>
        </div>
        <div class="row">
        <Card v-for="item in items"
        :id="item.atributes.id"
        :name="item.atributes.name"
        :price="item.atributes.price"
        :description="item.atributes.description"
        >
        </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

a,
a:hover {
    text-decoration: none;
    color: inherit;
}

.section-products {
    padding: 80px 0 54px;
}

.section-products .header {
    margin-bottom: 50px;
}

.section-products .header h3 {
    font-size: 1rem;
    color: #fe302f;
    font-weight: 500;
}

.section-products .header h2 {
    font-size: 2.2rem;
    font-weight: 400;
    color: #444444;
}

.section-products .single-product {
    margin-bottom: 26px;
}

.section-products .single-product .part-1 {
    position: relative;
    height: 290px;
    max-height: 290px;
    margin-bottom: 20px;
    overflow: hidden;
}

.section-products .single-product .part-1::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all 0.3s;
}

.section-products .single-product:hover .part-1::before {
    transform: scale(1.2, 1.2) rotate(5deg);
}

.section-products #product-1 .part-1::before {
    background: url("https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") no-repeat center;
    background-size: cover;
    transition: all 0.3s;
}

.section-products .single-product .part-1 ul {
    position: absolute;
    bottom: -41px;
    left: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
    opacity: 0;
    transition: bottom 0.5s, opacity 0.5s;
}

.section-products .single-product:hover .part-1 ul {
    bottom: 30px;
    opacity: 1;
}

.section-products .single-product .part-1 ul li {
    display: inline-block;
    margin-right: 4px;
}

.section-products .single-product .part-1 ul li a {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: #ffffff;
    color: #444444;
    text-align: center;
    box-shadow: 0 2px 20px rgb(50 50 50 / 10%);
    transition: color 0.2s;
}


.section-products .single-product .part-2 .product-title {
    font-size: 1rem;
}

.section-products .single-product .part-2 h4 {
    display: inline-block;
    font-size: 1rem;
}

</style>