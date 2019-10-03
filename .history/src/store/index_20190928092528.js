import Vue from 'vue'
import Vuex from 'vuex'

import result from './result'
import visit from './visit'


Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    result,
    visit,
  },
  state: {

  },
  mutations: {

  },
  actions: {}
})