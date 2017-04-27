import Vue from 'vue'
import Router from 'vue-router'

import Search from './StackOverflow/Search'
import BestAnswer from './StackOverflow/BestAnswer'
import Question from './StackOverflow/Question'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Search
    },
    {
      path: '/best-answer',
      component: BestAnswer
    },
    {
      path: '/question/:question',
      name: 'question',
      component: Question
    }
  ]
})
