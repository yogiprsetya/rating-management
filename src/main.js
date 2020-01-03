// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'Vuetify'
import axios from 'axios'

Vue.prototype.$axios = axios
import('vuetify/dist/vuetify.min.css')
Vue.use(Vuetify)

Vue.mixin({
  data: () => ({
    serverUrl: process.env.API_ADDRESS,
    urlParams: ''
  }),

  mounted () {
    this.urlParams = window.location.href.split('/')[window.location.href.split('/').length - 1]
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
  components: { App },
  template: '<App/>'
})
