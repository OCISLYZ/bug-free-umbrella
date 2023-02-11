import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/bill'
    },
    {
      path: '/login',
      component: () => import("../view/Login.vue"),
      meta: {
        hideNavbar: true
      }
    },
    {
      path: '/diary',
      component: () => import("../view/Diary.vue")
    },
    {
      path: '/bill',
      component: () => import("../view/Bill.vue")
    }
  ]
})
