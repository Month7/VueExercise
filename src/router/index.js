import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import about from '@/components/about'
import cart from '@/components/cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      name:'home',
      component:home
    },
    {
      path:'/about',
      name:'about',
      component:about
    },
    {
      path:'/cart',
      name:'cart',
      component:cart
    }
  ]
})
