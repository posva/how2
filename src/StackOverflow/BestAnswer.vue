<template>
  <div class="container">
    <h1 v-show="question" class="title is-4">
      {{ question }}
    </h1>
    <Markdown v-if="bestAnswer"
              :content="bestAnswer.body_markdown"/>

    <hr/>

    <h2 class="title is-5">Looking for something else?</h2>
    <ul v-if="questions.length > 1">
      <li v-for="question in questions">
        <router-link
            :to="questionLink(question)"
        >{{ question.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('stackoverflow', {
      bestAnswer: 'BEST_ANSWER',
      question: 'QUESTION',
      questions: 'QUESTIONS'
    })
  },

  methods: {
    questionLink (question) {
      return {
        name: 'question',
        params: {
          question: parseQuestionId(question.link)
        }
      }
    }
  }
}

const questionRE = /^https?:\/\/(?:www)?stackoverflow.com\/questions\/(\d+)/
function parseQuestionId (link) {
  const match = link.match(questionRE)
  return match && match[1]
}
</script>
