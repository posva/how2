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

export function prepareSelectedQuestion ({ commit, state }, { question }) {
  return api.getQuestionAnswers(question)
    .then(answers => {
      commit('SET_SELECTED_QUESTION', {
        question
      })
      commit('SET_QUESTION_ANSWERS', {
        question,
        answers
      })
      return answers
    })
}
