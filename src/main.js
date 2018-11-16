import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'


import planning from './views/Planning.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(require('vue-moment'));

export const EventBus = new Vue();

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'planning',
      component: planning
    }
  ]
})

new Vue({
  el: '#app',
  router,
  template:"<App/>",
  components: { App }
})
