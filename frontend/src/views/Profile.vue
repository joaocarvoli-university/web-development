<script setup>
import NameForms from '../components/Profile/NameForms.vue';
import PhoneForms from '../components/Profile/PhoneForms.vue';
import EmailForms from '../components/Profile/EmailForms.vue';
import Location from '../components/Profile/Location.vue';
import Password from '../components/Profile/Password.vue';
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useRoute, useRouter } from 'vue-router';
import { store } from '../stores/loggedUser.js'
import { doLogout } from '../mixing/logout.js'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const name = ref('')
const phone = ref('')
const city = ref('')
const email = ref('')
const password = ref('')

function handleName(s) { name.value = s }
function handlePhone(s) { phone.value = s }
function handleCity(s) { city.value = s }
function handleEmail(s) { email.value = s }
function handlePassword(s) { password.value = s }

async function updateUser() {
    if(name.value.length > 0) user.value.username = name.value
    if(email.value.length > 0) user.value.email = email.value
    if(phone.value.length > 0) user.value.phone = phone.value
    if(city.value.length > 0) user.value.city = city.value
    if(password.value.length > 0) user.value.password = password.value
    let idUser = route.fullPath.split("/profile/")
    const result = await userStore.put(idUser[1])
    if (result) {
      validationMessage.value = ""
      let redirect = `/profile/${idUser[1]}`
      router.push(redirect)
    }
}
</script>

<template>
  <div>
    <button class="btn btn-danger btn-sm logout" type="reset" v-if="store.state.authenticated" @click="doLogout">Logout</button>
  <div class="container bootstrap snippet">
    <div class="row">
      <div class="col-sm-12">
        <ul class="nav nav-tabs">
          <li class="active"><a data-toggle="tab" href="#home">Personal settings</a></li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane active" id="home">
            <hr/>
            <form class="form" action="##" method="post" id="registrationForm">
              <NameForms @custom-change="handleName"> </NameForms>
              <p hidden>{{name}}</p>
              <PhoneForms @custom-change="handlePhone"></PhoneForms>
              <p hidden>{{phone}}</p>
              <EmailForms @custom-change="handleEmail"></EmailForms>
              <p hidden>{{city}}</p>
              <Location @custom-change="handleCity"></Location>
              <p hidden>{{email}}</p>
              <Password @custom-change="handlePassword"></Password>
              <p hidden>{{password}}</p>
              <div class="form-grobtn-successup">
                <div class="col-xs-12">
                  <br />
                  <router-link to='/'>
                    <button class="btn btn-sm btn-success" type="submit" @click="updateUser">
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

