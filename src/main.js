import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDQaM_FAQKogM3eJYQo--JHOyBe-RXlqeI',
      authDomain: 'vue-meetup-6aed0.firebaseapp.com',
      databaseURL: 'https://vue-meetup-6aed0.firebaseio.com',
      projectId: 'vue-meetup-6aed0',
      storageBucket: 'vue-meetup-6aed0.appspot.com'
    })
  }
})
