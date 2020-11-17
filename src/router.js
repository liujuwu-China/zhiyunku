import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    
    {
      path: '/zhiyun',
      name: 'zhiyun',
      component: () => import( './views/Zhiyun.vue'),
      children:[{
        path:'zhu',
        component: () => import( './components/workbench/Dataoverview.vue'),
      },
      {
        path:'zhu2',
        component: () => import( './components/workbench/Ruku.vue'),
      },
      {
        path:'zhu3',
        component: () => import( './components/workbench/Chuku.vue')
      },
      {
        path:'zhu4',
        component: () => import( './components/workbench/pandian.vue')
      },
      {
        path:'zhu5',
        component: () => import( './components/workbench/Taizhang.vue')
      },
      {
        path:'insert',
        component:()=> import('./components/zsgc/Insert.vue')
      },
      
    ]
    },
    {
      path:'/Dataoverview',
      component: () => import( './components/workbench/Dataoverview.vue')
    }
  ]
})
