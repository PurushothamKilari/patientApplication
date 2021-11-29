import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'
import './axios'
import vuetify from './plugins/vuetify'

import axios from 'axios'
// import VueAxios from 'Vue-axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:8000/'
new Vue({
  router,
  axios,
  vuetify,
  render: h => h(App)
}).$mount('#app')
