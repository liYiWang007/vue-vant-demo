import Vue from 'vue'
import { useVant } from '@/util/useVant'

import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js' //移动端尺寸兼容
import axios from 'axios' //引入axios
Vue.prototype.$axios = axios //把axios挂载到vue上

Vue.config.productionTip = false

Vue.use(useVant)

new Vue({
  router,
  store,
  useVant,
  render: (h) => h(App),
}).$mount('#app')
