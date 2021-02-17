import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import Vsession from 'vue-session'

Vue.use(Vsession)

Vue.config.productionTip = false

Vue.prototype.http = Axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
