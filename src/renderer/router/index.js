import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'asanas' }
    },
    {
      path: '/asanas',
      name: 'asanas',
      component: require('@/components/Asanas').default
    },
    {
      path: '/cycles',
      name: 'cycles',
      component: require('@/components/Cycles').default
    },
    {
      path: '/options',
      name: 'options',
      component: require('@/components/Options').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
