import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Buefy from 'buefy'

Vue.use(Router)
Vue.use(Buefy)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
