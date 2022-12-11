<script setup>
import NameForms from '../components/Glasses/NameForms.vue'
import DescriptionForms from '../components/Glasses/Description.vue'
import BrandForms from '../components/Glasses/BrandForms.vue'
import ColorForms from '../components/Glasses/ColorForms.vue'
import PriceForms from '../components/Glasses/PriceForms.vue'
import AmountForms from '../components/Glasses/AmountForms.vue'
import TypeForms from '../components/Glasses/TypeForms.vue'

import { onBeforeMount, ref } from 'vue'
import { useGlassesStore } from '../stores/glasses'
import { useRoute, useRouter } from 'vue-router';
import { store } from '../stores/loggedUser.js'
import { doLogout } from '../mixing/logout.js'

const route = useRoute()
const router = useRouter()
const glassStore = useGlassesStore()

const name = ref('')
const brand = ref('')
const color = ref('')
const type = ref('')
const price = ref('')
const amount = ref('')
const description = ref('')

const Glass = {

    name ,
    brand ,
    color ,
    type ,
    price ,
    amount ,
    description ,

}
const glass = ref(Glass)

function handleName(s) { name.value = s }
function handleBrand(s) { brand.value = s }
function handleColor(s) { color.value = s }
function handleType(s) { type.value = s }
function handleAmount(s) { amount.value = s }
function handlePrice(s) { price.value = s }
function handleDescription(s) { description.value = s }


async function createGlass() {
    if(name.value.length > 0) glass.value.name = name.value
    if(brand.value.length > 0) glass.value.brand = brand.value
    if(color.value.length > 0) glass.value.color = color.value
    if(type.value.length > 0) glass.value.type = type.value
    if(price.value.length > 0) glass.value.price = price.value
    if(description.value.length > 0) glass.value.description = description.value
    if(amount.value.length > 0) glass.value.amount = amount.value
    const result = await glassStore.create(glass)
    if (result) {
      validationMessage.value = ""
      let redirect = `/`
      router.push(redirect)
    }
}
</script>

<template>
    <div>
        <button class="btn btn-danger btn-sm logout" type="reset" v-if="store.state.authenticated"
            @click="doLogout">Logout</button>
        <div class="container bootstrap snippet">
            <div class="row">
                <div class="col-sm-12">
                    <ul class="nav nav-tabs">
                        <h1>Cadastre seu óculos</h1>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="home">
                            <hr />
                            <form class="form" action="##" method="post" id="registrationForm">
                                <NameForms @custom-change="handleName"> </NameForms>
                                <p hidden>{{ name }}</p>
                                <BrandForms @custom-change="handleBrand"></BrandForms>
                                <p hidden>{{  brand }}</p>
                                <TypeForms @custom-change="handleType"></TypeForms>
                                <p hidden>{{ type }}</p>
                                <PriceForms @custom-change="handlePrice"></PriceForms>
                                <p hidden>{{ Price }}</p>
                                <ColorForms @custom-change="handleColor"></ColorForms>
                                <p hidden>{{ color }}</p>
                                <AmountForms @custom-change="handleAmount"></AmountForms>
                                <p hidden>{{ Amount }}</p>
                                <DescriptionForms @custom-change="handleDescription"></DescriptionForms>
                                <p hidden>{{ description }}</p>
                                <div class="form-grobtn-successup">
                                    <div class="col-xs-12">
                                        <br />
                                        <router-link to='/'>
                                            <button class="btn btn-sm btn-success" type="submit" @click="createGlass">
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
    font-family: 'Poppins';
    border-bottom: 3px solid #FF0011;
}

#glasses {
    display: flex;
    align-content: left;
    margin-top: -20px
}

#titlle {
    color: #FF0011;
    margin-top: -5px;
}

li a:hover {
    text-decoration: 2px underline #FF0011;
}

.products {
    margin-left: 550px;
}

.actions {
    margin-left: 920px;
}
</style>

