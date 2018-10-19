// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueFire from 'vuefire' //  -ddjOlgaF
 // https://github.com/gdg-tangier/vue-firestore
import VueFirestore from 'vue-firestore'
// import Firebase from 'firebase'
// require('firebase/firestore')
Vue.use(VueFirestore)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueFire) // -ddjOlgaF
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
