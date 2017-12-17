import Vue from 'vue'
import Router from 'vue-router'
import MainPageFrame from '@/components/MainPageFrame'
import Element from 'element-ui'

Vue.use(Router)
Vue.use(Element)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPageFrame',
      component: MainPageFrame
    }
  ]
})
