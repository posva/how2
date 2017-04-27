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

// Hot module replacement for better DX
if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept([
    './StackOverflow/module'
  ], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const stackoverflow = require('./StackOverflow/module').default
    // swap in the new module
    store.hotUpdate({
      modules: {
        stackoverflow
      }
    })
  })
}
