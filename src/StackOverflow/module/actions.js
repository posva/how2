import * as api from '../service'

export function fetchBestAnswer ({ commit, state }) {
  return api.getBestAnswer(state.question).then(bestAnswer => {
    commit('SET_BEST_ANSWER', { bestAnswer })
    return bestAnswer
  })
}

export function fetchQuestions ({ commit, state }) {
  return api.getQuestions(state.question).then(questions => {
    commit('SET_QUESTIONS', { questions })
    return questions
  })
}
