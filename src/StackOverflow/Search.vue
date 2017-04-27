<template>
  <div class="container">
    <h1 class="title">
      How to...
    </h1>
    <form @submit.prevent="search">
      <div class="field">
        <label class="label"></label>
        <p class="control">
          <input class="input is-medium"
                 type="text"
                 :value="question"
                 @input="setQuestion({ question: $event.target.value })"
                 placeholder="do permutations in python">
        </p>
      </div>
      <div class="field has-addons has-addons-centered">
        <p class="control">
          <button class="button is-primary is-large">
            Search
          </button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { getBestAnswer } from './service'
import { mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      searching: false
    }
  },

  computed: {
    ...mapGetters('stackoverflow', {
      question: 'QUESTION'
    })
  },

  methods: {
    search () {
      getBestAnswer(this.question).then(console.log)
    },
    ...mapMutations('stackoverflow', {
      setQuestion: 'SET_QUESTION'
    })
  }
}
</script>
