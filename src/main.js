import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import routes from './routes.js'

Vue.use(require('vue-moment'),BootstrapVue)


new Vue({
  el: '#app',
  
  render: h => h(App),
})
