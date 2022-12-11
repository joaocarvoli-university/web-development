<script setup>
import { store } from '../stores/loggedUser.js'
import { useCartStore } from '../stores/cart.js'

const cartStore = useCartStore()

const props = defineProps({
  id: Number,
  name: String,
  price: Number,
  description: String
})

async function toRemove(){
  try {
    const items = []
    for (const index in store.state.cart[0].attributes.glassesId.data) items.push(store.state.cart[0].attributes.glassesId.data[index].id)
    let diference = items.filter(x => !([props.id]).includes(x)).concat([props.id].filter(x => !items.includes(x)))
    const updatingItems = await cartStore.put(store.state.cartId, diference)
    if(updatingItems) {
        const loadingItems = await cartStore.getByUserId()
        if(loadingItems){
            store.commit("loadCart", loadingItems)
        }
    }
  } catch (err){
    return err
  }
}


</script>

<template>
  <div class="col-md-6 col-lg-4 col-xl-3">
    <div id="product-1" class="single-product">
      <div class="part-1 rounded">
        <ul>
          <li><a @click="toRemove"><i class="fas fa-solid fa-trash"></i></a></li>
        </ul>
      </div>
      <div class="part-2">
        <h3 class="product-title">{{name}}</h3>
        <h4 class="product-price">Price: {{price}}</h4>
      </div>
    </div>
  </div>
</template>