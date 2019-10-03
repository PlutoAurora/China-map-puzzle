import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ApiService from './common/service/api'

import './assets/styles/common.css'
import './assets/font/font.css'

Vue.config.productionTip = false

ApiService.init()

// 注册全局频繁使用组件
import backButton from '@/components/backButton.vue'
Vue.component('backButton', backButton)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
