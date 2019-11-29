import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LogSurveillance from './views/menu/LogSurveillance.vue'
import SensitiveWord from './views/menu/SensitiveWord.vue'
import LangdingType from './views/menu/LandingType.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: 'LogSurveillance',
        component: LogSurveillance
      },
      {
        path: 'SensitiveWord',
        component: SensitiveWord
      },
      {
        path: 'LangdingType',
        component: LangdingType
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
