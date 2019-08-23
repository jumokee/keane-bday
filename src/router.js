import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RSVP from './views/RSVP.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: RSVP,
      props: true
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },

  ]
})
