import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import goods from '@/pages/goods'
import order from '@/pages/order'
import saleAfter from '@/pages/saleAfter'
import address from '@/pages/address'
import user from '@/pages/user'
import lbimg from '@/pages/lbimg'
import sendGoods from '@/pages/sendGoods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/goods',
          name: 'goods',
          component: goods
        },
        {
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/saleAfter',
          name: 'saleAfter',
          component: saleAfter
        },
        {
          path: '/address',
          name: 'address',
          component: address
        },
        {
          path: '/user',
          name: 'user',
          component: user
        },
        {
          path: '/lbimg',
          name: 'lbimg',
          component: lbimg
        },
        {
          path: '/sendGoods',
          name: 'sendGoods',
          component: sendGoods
        }
      ]
    }
  ]
})
