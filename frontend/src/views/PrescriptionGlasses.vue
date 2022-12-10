<script setup>
import Card from '../components/Glasses/Card.vue'
import { onBeforeMount } from 'vue'
import { useGlassesStore } from '../stores/glasses.js'
import { ref } from 'vue'
import { store } from '../stores/loggedUser.js'
import { doLogout } from '../mixing/logout.js'

const items = ref([])
const glassesStore = useGlassesStore()

async function getGlassesUpdate(){
    const result = await glassesStore.all("prescriptionGlasses")
    if(result){
        items.value = result
    }
}

onBeforeMount(async() => getGlassesUpdate())
</script>

<template>
<div>
    <button class="btn btn-danger btn-sm logout" type="reset" v-if="store.state.authenticated" @click="doLogout">Logout</button>
  <section class="section-products">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-md-8 col-lg-6">
          <div class="header">
            <h1>Óculos de grau</h1>
          </div>
        </div>
        <div class="row">
        <Card v-for="item in items" :key="item.id"
        :id="item.id"
        :name="item.attributes.name"
        :price="item.attributes.price"
        :description="item.attributes.description"
        >
        </Card>
        </div>
      </div>
    </div>
  </section>
</div>
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
    background-size: cover;
    transition: all 0.3s;
    /*
background: url("https://specials-images.forbesimg.com/imageserve/6287a5e14dc845aa4bc60506/Prescription-glasses-online--Gucci-GG0675O-Eyeglasses/960x0.jpg?cropX1=165&cropX2=1288&cropY1=0&cropY2=748") no-repeat center;
*/
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