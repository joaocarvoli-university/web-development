<script setup>
import { useCartStore } from '../../stores/cart.js'
import { useRoute, useRouter } from 'vue-router';
import { store } from '../../stores/loggedUser.js'
const route = useRoute()
const useGlasses = useCartStore()

const props = defineProps({
  id: Number,
  name: String,
  price: Number,
  description: String
})

async function addInCart() {
  try {
    store.commit("putOnQueue", props.id)
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="col-md-6 col-lg-4 col-xl-3">
    <div id="product-1" class="single-product">
      <div class="part-1 rounded">
        <ul>
          <li>
            <a @click="addInCart"><i class="fas fa-shopping-cart"></i></a>
          </li>
        </ul>
      </div>
      <div class="part-2" >
        <h3 class="product-title" >{{name}}</h3>
        <h4 class="product-price">Price: {{price}}</h4>
      </div>
    </div>
  </div>
</template>