import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import(/* webpackChunkName: "hello" */ './views/Hello.vue')
    }
  ]
})
