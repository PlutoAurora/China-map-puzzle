import Vue from 'vue'
import Vuex from 'vuex'

import result from './result'
import visit from './visit'
import pass from './pass'


Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    result,
    visit,
    pass
  },
  state: {

  },
  mutations: {

  },
  actions: {}
})