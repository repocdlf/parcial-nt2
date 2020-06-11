import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import './httpClient'
import './form'
import './bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
