import Vue from 'vue'
import Router from 'vue-router'

import Search from './StackOverflow/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Search
    }
  ]
})
