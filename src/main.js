import Vue from 'vue'
import 'bulma/css/bulma.css'
import marked from './plugins/marked'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(marked)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
