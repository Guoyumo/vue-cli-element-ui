import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import plus from './views/plus.vue'
import minus from './views/minus.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/minus',
      name: 'minus',
      component: minus
    },
    {
      path: '/plus',
      name: 'plus',
      component: plus
    }
  ]
})
