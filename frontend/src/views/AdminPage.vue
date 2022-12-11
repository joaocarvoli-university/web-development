<script setup>
import NameForms from "../components/Glasses/NameForms.vue";
import DescriptionForms from "../components/Glasses/Description.vue";
import BrandForms from "../components/Glasses/BrandForms.vue";
import ColorForms from "../components/Glasses/ColorForms.vue";
import PriceForms from "../components/Glasses/PriceForms.vue";
import AmountForms from "../components/Glasses/AmountForms.vue";
import TypeForms from "../components/Glasses/TypeForms.vue";

import { ref } from "vue";
import { useGlassesStore } from "../stores/glasses";
import { useRoute, useRouter } from "vue-router";
import { store } from "../stores/loggedUser.js";
import { doLogout } from "../mixing/logout.js";

const route = useRoute();
const router = useRouter();
const glassStore = useGlassesStore();

const Glass = {
  name: String,
  brand: String,
  color: String,
  type: String,
  price: Number,
  amount: Number,
  description: String,
};
const glass = ref(Glass);

function handleName(s) {
  glass.value.name = s;
}
function handleBrand(s) {
  glass.value.brand = s;
}
function handleColor(s) {
  glass.value.color = s;
}
function handleType(s) {
  glass.value.type = s;
}
function handleAmount(s) {
  glass.value.amount = s;
}
function handlePrice(s) {
  glass.value.price = s;
}
function handleDescription(s) {
  glass.value.description = s;
}

async function createGlass() {
  try {
    const result = await glassStore.create(glass.value);
  } catch (err) {
    return err;
  }
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
    <div class="container bootstrap snippet">
      <div class="row">
        <div class="col-sm-12">
          <ul class="nav nav-tabs">
            <h1>Cadastre seu óculos</h1>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="home">
              <hr />
              <form
                class="form"
                action="##"
                method="post"
                id="registrationForm"
              >
                <NameForms @custom-change="handleName"> </NameForms>
                <p hidden>{{ glass.name }}</p>
                <BrandForms @custom-change="handleBrand"></BrandForms>
                <p hidden>{{ glass.brand }}</p>
                <TypeForms @custom-change="handleType"></TypeForms>
                <p hidden>{{ glass.type }}</p>
                <PriceForms @custom-change="handlePrice"></PriceForms>
                <p hidden>{{ glass.price }}</p>
                <ColorForms @custom-change="handleColor"></ColorForms>
                <p hidden>{{ glass.color }}</p>
                <AmountForms @custom-change="handleAmount"></AmountForms>
                <p hidden>{{ glass.amount }}</p>
                <DescriptionForms
                  @custom-change="handleDescription"
                ></DescriptionForms>
                <p hidden>{{ glass.description }}</p>
                <div class="form-grobtn-successup">
                  <div class="col-xs-12">
                    <br />
                    <router-link to="/">
                      <button
                        class="btn btn-sm btn-success"
                        type="submit"
                        @click="createGlass"
                      >
                        <i class="glyphicon glyphicon-ok-sign">Save</i>
                      </button>
                    </router-link>
                    <button class="btn btn-sm" type="reset">
                      <i class="glyphicon glyphicon-repeat"></i> Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container-fluid {
  font-family: "Poppins";
  border-bottom: 3px solid #ff0011;
}

#glasses {
  display: flex;
  align-content: left;
  margin-top: -20px;
}

#titlle {
  color: #ff0011;
  margin-top: -5px;
}

li a:hover {
  text-decoration: 2px underline #ff0011;
}

.products {
  margin-left: 550px;
}

.actions {
  margin-left: 920px;
}
</style>
