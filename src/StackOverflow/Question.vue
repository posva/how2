<template>
  <div class="container">
    <a href="#" @click.prevent="$router.go(-1)">Go Back</a>
    <template v-if="selectedQuestion">
      <h1 class="title is-4">
        {{ selectedQuestion.title }}
      </h1>
      <ul>
        <li v-for="answer in selectedQuestion.answers"
            class="answer columns is-mobile"
        >
          <div class="column is-narrow">({{ answer.score }})</div>
          <Markdown class="column" :content="answer.body_markdown"/>
        </li>
      </ul>
    </template>
    <p v-else class="content">Loading...</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('stackoverflow', {
      selectedQuestion: 'SELECTED_QUESTION'
    })
  },

  methods: {
    ...mapActions('stackoverflow', [
      'prepareSelectedQuestion'
    ])
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      const question = to.params.question
      vm.prepareSelectedQuestion({ question })
    })
  }
}
</script>

<style>
.answer {
  max-width: 100%;
  overflow: auto;
}
</style>
