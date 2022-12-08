<script setup>
import Cart from '../components/Cart.vue'
import { onBeforeMount, ref } from 'vue'
import { useGlassesStore } from '../stores/cart'
import { useRouter, useRoute } from 'vue-router';
const route = useRoute()

const items = ref([])
const cartStore = useGlassesStore()

async function getCartItems(){
    let idUser = route.fullPath.split("/cart/")
    const result = await cartStore.getByUserId(idUser[1])
    if(result){
        items.value = result
    }
}

onBeforeMount(async() => getCartItems())
</script>

<template>
  <section class="section-products">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-lg-6">
          <div class="header">
            <h1>Carrinho</h1>
          </div>
        </div>
        <div class="row">
            <Cart v-for="item in items[0].attributes.glassesId.data" :key="item.id"
            :id="item.id"
            :name="item.attributes.name"
            :price="item.attributes.price"
            :description="item.attributes.description">
            </Cart> 
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
    /* Ver como trabalhar com imagens*/
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