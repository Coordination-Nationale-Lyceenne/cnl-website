import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lien1',
      name: 'Lien1',
      component: () =>
        import(/* webpackChunkName: "liens" */ './views/Lien1')
    },
    {
      path: '/lien2',
      name: 'Lien2',
      component: () =>
        import(/* webpackChunkName: "liens" */ './views/Lien2')
    }
  ]
})

export default router
