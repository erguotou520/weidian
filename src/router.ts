import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      component: {
        render: h => h('router-view')
      },
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/product/:id',
          name: 'product',
          component: () => import(/* webpackChunkName: "views/product" */ './views/Product.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router