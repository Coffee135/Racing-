import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'
import Greyhound from '@/components/Greyhound'
import Harness from '@/components/Harness'
import Horse from '@/components/Horse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/helloworld/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/greyhound/',
      name: 'Greyhound',
      component: Greyhound
    },
    {
      path: '/harness/:name',
      name: 'Harness',
      component: Harness
    },
    {
      path: '/horse/:name',
      name: 'Horse',
      component: Horse
    }
  ]
})
