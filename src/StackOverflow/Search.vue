<template>
  <div class="container">
    <h1 class="title">
      How to...
    </h1>
    <form @submit.prevent="search">
      <fieldset :disabled="searching">
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
            <button class="button is-primary is-large"
                    :class="searchingClasses"
            >
              Search
            </button>
          </p>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      searching: false
    }
  },

  computed: {
    searchingClasses () {
      return {
        'is-loading': this.searching
      }
    },
    ...mapGetters('stackoverflow', {
      question: 'QUESTION'
    })
  },

  methods: {
    search () {
      this.searching = true
      // TODO check if the data is non null and display error
      this.fetchBestAnswer(this.question).then(() => {
        this.searching = false
        // navigation
      }).catch(err => {
        console.error(err)
        this.searching = false
      })
    },
    ...mapMutations('stackoverflow', {
      setQuestion: 'SET_QUESTION'
    }),
    ...mapActions('stackoverflow', [ 'fetchBestAnswer' ])
  }
}
</script>

<style>
/* remove default fieldset border */
fieldset {
  border: 0;
  padding: 0.01em 0 0 0;
  margin: 0;
  min-width: 0;
}
</style>
