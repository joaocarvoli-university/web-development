<script setup>
import { useGlassesStore } from "../../stores/glasses.js";
import { useRouter } from "vue-router";
import { store } from "../../stores/loggedUser.js";
const router = useRouter();
const useGlasses = useGlassesStore();

const props = defineProps({
  id: Number,
  name: String,
  price: Number,
  description: String,
});

async function addInCart() {
  try {
    if (store.state.authenticated == true) {
      store.commit("putOnQueue", props.id);
    } else {
      router.push("/login");
    }
  } catch (err) {
    return err
  }
}

async function removeFromTheStorage() {
  try {
    const removedGlasses = await useGlasses.remove(props.id);
    if (removedGlasses) {
      return removedGlasses;
    }
  } catch (err) {
    return err;
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
          <li>
            <a
              @click="removeFromTheStorage"
              v-if="store.state.role == 'Admin User'"
              ><i class="fas fa-solid fa-trash"></i
            ></a>
          </li>
        </ul>
      </div>
      <div class="part-2">
        <h3 class="product-title">{{ name }}</h3>
        <h4 class="product-price">Price: {{ price }}</h4>
      </div>
    </div>
  </div>
</template>
