import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import("../view/Login.vue")
    },
    {
      path: '/diary',
      component: () => import("../view/Diary.vue")
    }
  ]
})
