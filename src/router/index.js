import Vue from 'vue'
import Router from 'vue-router'
import MainPageFrame from '@/components/MainPageFrame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPageFrame',
      component: MainPageFrame
    }
  ]
})
