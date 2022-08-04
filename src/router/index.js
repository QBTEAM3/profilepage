import Vue from 'vue'
import Router from 'vue-router'
import ProfileDropdown from '@/components/ProfileDropdown/ProfileDropdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/ProfileDropdown',
      component: ProfileDropdown
    }
  ]
})
