import Vue from 'vue'
import Router from 'vue-router'
import CoinComponent from '@/components/CoinComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'CoinComponent',
      component: CoinComponent
    }

  ]
})
