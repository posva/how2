import Vue from 'vue'
import Vuex from 'vuex'

import stackoverflow from './StackOverflow/module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    stackoverflow
  }
})

export default store
