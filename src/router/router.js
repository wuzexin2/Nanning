import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Historic from '@/components/Historic'
import Beautiful from '@/components/Beautiful'
import Tourism from '@/components/Tourism'
import Delicacy from '@/components/Delicacy'
import New from '@/components/New'
import Leave from '@/components/Leave'
import About from '@/components/About'
import Connection from '@/components/Connection'
import Introduce from '@/components/Introduce'
import Culture from '@/components/Culture'
import Newest from '@/components/Newest'
import Special from '@/components/Special'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/historic',
      name: 'Historic',
      component: Historic
    },
    {
      path: '/beautiful',
      name: 'Beautiful',
      component: Beautiful
    },
    {
      path: '/tourism',
      name: 'Tourism',
      component: Tourism
    },
    {
      path: '/delicacy',
      name: 'Delicacy',
      component: Delicacy
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/leave',
      name: 'Leave',
      component: Leave
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/connection',
      name: 'Connection',
      component: Connection
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/culture',
      name: 'Culture',
      component: Culture
    },
    {
      path: '/newest',
      name: 'Newest',
      component: Newest
    },
    {
      path: '/special',
      name: 'Specialt',
      component: Special
    }   
  ]
})
