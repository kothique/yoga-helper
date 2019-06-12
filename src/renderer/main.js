import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import db from './db'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.db = Vue.prototype.$db = db
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
})

vm.$mount('#app')

vm.$store.dispatch('asanas/$init')
