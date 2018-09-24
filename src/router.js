import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import(/* webpackChunkName: "hello" */ './views/Hello.vue')
    },
    {
      path: '/greetings',
      name: 'greetings',
      component: () => import(/* webpackChunkName: "greetings" */ './views/Greetings.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import(/* webpackChunkName: "store" */ './views/Store.vue')
    }
  ]
})
