import marked from 'marked3'

const Markdown = {
  props: {
    content: String
  },

  computed: {
    compiled () {
      return marked(this.content, { sanitize: true })
    }
  },

  render (createElement) {
    return createElement('div', {
      staticClass: 'content',
      domProps: {
        innerHTML: this.compiled
      }
    })
  }
}

export default function install (Vue) {
  Vue.component('Markdown', Markdown)
}
