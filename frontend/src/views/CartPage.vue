<script setup>
import Cart from "../components/Cart.vue";
import { onBeforeMount } from "vue";
import { useCartStore } from "../stores/cart";
import { useRoute } from "vue-router";
import { store } from "../stores/loggedUser.js";
import { doLogout } from "../mixing/logout.js";
import Cookies from 'js-cookie'

const route = useRoute();
const cartStore = useCartStore();

async function getCartItems() {
  try {
    const loadingItems = await cartStore.getByUserId();
    if(typeof loadingItems[0] !== "undefined"){
      store.commit("setCartId", loadingItems[0].id);
      if(loadingItems[0].attributes.glassesId.data.length > 0){
        if (new Set(store.state.cartToBeAdded).size > 0) {
          const newItems = Array.from(new Set(store.state.cartToBeAdded));
          const oldItems = [];
          for (const index in loadingItems[0].attributes.glassesId.data) {
            oldItems.push(
              loadingItems[0].attributes.glassesId.data[index].id
            );
          }
          const items = Array.from(new Set(oldItems.concat(newItems)));
          const UpdatingGlasses = await cartStore.put(store.state.cartId, items);
          if (UpdatingGlasses) {
            const loadingItemsSecond = await cartStore.getByUserId();
            if (loadingItemsSecond) {
              store.commit("loadCart", loadingItemsSecond);
              store.commit("clearQueue");
            }
          }
        } else {
          store.commit("loadCart", loadingItems);
        }
      } else {
          if (new Set(store.state.cartToBeAdded).size > 0) {
            const itemsFirstA = Array.from(new Set(store.state.cartToBeAdded));
            const updatingItemsA = await cartStore.put(store.state.cartId, itemsFirstA);
            if (updatingItemsA) {
              const loadingItemsSecondTwoA = await cartStore.getByUserId();
              if (loadingItemsSecondTwoA) {
                store.commit("loadCart", loadingItemsSecondTwoA);
                store.commit("clearQueue");
              }
            }
          } else {
            store.commit("loadCart", []);
          }
        }
    }
    else {
      if (new Set(store.state.cartToBeAdded).size > 0) {
        const itemsFirst = Array.from(new Set(store.state.cartToBeAdded));
        const updatingItems = await cartStore.post(itemsFirst);
        if (updatingItems) {
          const loadingItemsSecondTwo = await cartStore.getByUserId();
          if (loadingItemsSecondTwo) {
            store.commit("loadCart", loadingItemsSecondTwo);
            store.commit("clearQueue");
          }
        }
      } else {
        store.commit("loadCart", []);
      }
    }
  } catch (err) {
    return err
  }
}

onBeforeMount(async () => getCartItems());

async function removeCart() {
  const result = await cartStore.removeCart(store.state.cart[0].id);
  store.commit("removeCart");
}
</script>

<template>
  <div>
    <button
      class="btn btn-danger btn-sm logout"
      type="reset"
      v-if="store.state.authenticated"
      @click="doLogout"
    >
      Logout
    </button>
    <section class="section-products">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-8 col-lg-6">
            <div class="header">
              <h1>Carrinho</h1>
            </div>
          </div>
          <button
            class="btn btn-danger btn-sm mb-2"
            type="reset"
            v-if="store.state.cart[0]"
            @click="removeCart"
          >
            Reset
          </button>
          <h1 v-else>Você não possui nenhum produto no carrinho</h1>
          <div class="row" v-if="store.state.cart[0]">
            <Cart
              v-for="item in store.state.cart[0].attributes.glassesId.data"
              :key="item.id"
              :id="item.id"
              :name="item.attributes.name"
              :price="item.attributes.price"
              :description="item.attributes.description"
            >
            </Cart>
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
  /* Ver como trabalhar com imagens*/
  background: url("https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
    no-repeat center;
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
