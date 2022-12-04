<script setup lang="ts">

defineProps<{
  id: number,
  name: string,
  price: number,
  description: string
}>()

</script>

<template>
  <div class="col-md-6 col-lg-4 col-xl-3">
    <div id="product-1" class="single-product">
      <div class="part-1 rounded">
        <ul>
          <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
          <li><a href="#"><i class="fas fa-heart"></i></a></li>
        </ul>
      </div>
      <div class="part-2">
        <h3 class="product-title">{{name}}</h3>
        <h4 class="product-price">Price: {{price}}</h4>
      </div>
    </div>
  </div>
</template>