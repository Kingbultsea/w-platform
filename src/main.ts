import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Axios from 'axios'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: any,
    load: boolean
  }
}

const axios = Axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_TITLE : 'http://127.0.0.1:3002' // process.env.VUE_APP_TITLE
})

Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$axios = axios

new Vue({
  data () {
    return {
      load: false
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
