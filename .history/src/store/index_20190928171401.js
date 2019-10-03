import Vue from 'vue'
import Vuex from 'vuex'

import result from './result'
import pass from './pass'


Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    result,
    pass
  },
  state: {

  },
  mutations: {

  },
  actions: {}
})