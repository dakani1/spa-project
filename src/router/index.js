import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')
const children1 = () => import('@/components/children1.vue')
const children2 = () => import('@/components/children2.vue')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        name: 'napier 111'
      }
    },
    {
      path: '/children1',
      name: 'children1',
      component: children1,
      meta: {
        name: 'napier'
      }
    },
    {
      path: '/children2',
      name: 'children2',
      component: children2
    }
  ]
})
