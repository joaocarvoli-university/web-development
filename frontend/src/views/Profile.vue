<script setup>
import NameForms from '../components/Profile/NameForms.vue';
import PhoneForms from '../components/Profile/PhoneForms.vue';
import EmailForms from '../components/Profile/EmailForms.vue';
import Location from '../components/Profile/Location.vue';
import Password from '../components/Profile/Password.vue';
import { onBeforeMount, ref } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter, useRoute } from 'vue-router';
const route = useRoute()

const items = ref([])
const userStore = useUserStore()

async function getUser(){
    let idUser = route.fullPath.split("/users/")
    const result = await userStore.getByUserId(idUser[0])
    if(result){
        items.value = result
    }
}
onBeforeMount(async() => getUser())
</script>

<template>
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
              <NameForms> </NameForms>
              <PhoneForms></PhoneForms>
              <EmailForms></EmailForms>
              <Location></Location>
              <Password></Password>
              <div class="form-group">
                <div class="col-xs-12">
                  <br />
                  <button class="btn btn-sm btn-success" type="submit">
                    <i class="glyphicon glyphicon-ok-sign"></i> Save
                  </button>
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

