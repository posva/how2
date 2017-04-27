export const QUESTION = state => state.question
export const QUESTIONS = state => state.questions
export const BEST_ANSWER = state => state.bestAnswer
export const SELECTED_QUESTION = ({
  questions,
  selectedQuestion
}) => questions.find(
  ({ link }) => link.includes(selectedQuestion)
)
