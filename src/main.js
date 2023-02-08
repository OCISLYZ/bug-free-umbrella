import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'

//全局css
import './assets/css/base.css'
import 'remixicon/fonts/remixicon.css'

//按需导入elementUI和导入UI样式
import element from './config/elememtConfig'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(element)


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
