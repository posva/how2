import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export default {
  namespaced: true,
  state: {
    question: '',
    bestAnswer: null,
    questions: [],
    selectedQuestion: null
  },
  actions,
  mutations,
  getters
}
