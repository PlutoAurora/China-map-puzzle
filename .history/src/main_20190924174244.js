import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ApiService from './common/service/api'

import './assets/styles/common.css'
import './assets/font/font.css'

// Vue.prototype.$axios = axios;
Vue.config.productionTip = false

ApiService.init()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')