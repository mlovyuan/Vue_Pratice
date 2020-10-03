import Vue from 'vue'
import App from './App.vue'
import channelServ from './services/channel'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
