<template>
  <div class="container">
    <h1 v-show="question" class="title is-4">
      {{ question }}
    </h1>
    <pre>{{ bestAnswer.body_markdown }}</pre>
    <!-- <Markdown v-if="bestAnswer" -->
    <!-- :content="bestAnswer.body_markdown"/> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('stackoverflow', {
      bestAnswer: 'BEST_ANSWER',
      question: 'QUESTION'
    })
  }
}
</script>
