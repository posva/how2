import { SELECTED_QUESTION } from './getters'
import Vue from 'vue'

export function SET_QUESTION (state, { question }) {
  state.question = question
}

export function SET_BEST_ANSWER (state, { bestAnswer }) {
  state.bestAnswer = bestAnswer
}

export function SET_QUESTIONS (state, { questions }) {
  state.questions = questions
}

export function SET_SELECTED_QUESTION (state, { question }) {
  state.selectedQuestion = question
}

export function SET_QUESTION_ANSWERS (state, { question, answers }) {
  const quest = SELECTED_QUESTION({
    questions: state.questions,
    selectedQuestion: question
  })
  // We must tell Vue we are adding a new property
  quest && Vue.set(quest, 'answers', answers)
}
