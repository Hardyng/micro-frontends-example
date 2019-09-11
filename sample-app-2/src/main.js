import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueCustomElement from 'vue-custom-element'

Vue.config.productionTip = false

Vue.use(vueCustomElement)

App.store = store
App.router = router
Vue.customElement('sample-app-2', App)
