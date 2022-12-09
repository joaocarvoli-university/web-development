import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router/router.js'
import { api } from './baseConfig.js'
import { useUserStore } from './stores/user.js'
import App from './App.vue'

/*api.interceptors.response.use(response => response, error => {
  const { response } = error
  if (response) {
    if (response.status === 403) {
      router.replace('/forbiden')
    } else if (response.status === 404) {
      router.replace('/notfound')
    } 
  }
  return Promise.reject(error)
});*/

/*router.beforeEach((to, from) => {
  if(to.meta.requiresAdmin) {
    const store = useUserStore()
    if(!store.isAdmin) {
      return '/login'
    }
  }
})*/
const app = createApp(App)

app.use(createPinia())

app.use(router)

app.mount('#app')