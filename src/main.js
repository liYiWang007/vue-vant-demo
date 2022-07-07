import Vue from 'vue'
import { useVant } from '@/util/useVant'

import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js' //移动端尺寸兼容
import axios from 'axios' //引入axios
// // 引入轮播插件和样式表
// import VueAwesomeSwiper  from 'vue-awesome-swiper'
import 'swiper/css/swiper.css' 

axios.defaults.baseURL='http://localhost:8080/data/'
Vue.prototype.$axios = axios //把axios挂载到vue上

Vue.config.productionTip = false

Vue.use(useVant)

new Vue({
  router,
  store,
  useVant,
  render: (h) => h(App),
}).$mount('#app')
