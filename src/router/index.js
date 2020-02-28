import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import register from '../components/register.vue'
import inputinfo from '../components/inputinfo.vue'
import signUpDone from '../components/signUpDone.vue'
import SignUp from '../views/SignUp.vue'

//延时加载 当组件过多时 一些组件需要用户切换路由时再加载 
const GoodsList = (resolve) => requestAnimationFrame(['@/components/GoodsList'], resolve)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/SignUp',
    name:'SignUp',
    component:SignUp,
    children:[
      {
        path:'/',
        name:'register',
        component:register,
      },
      {
        path:'register',
        name:'register',
        component:register,
      },
      {
        path:'inputinfo',
        name:'inputinfo',
        component:inputinfo,
      },      {
        path:'signUpDone',
        name:'signUpDone',
        component:signUpDone,
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //延时加载 另一种写法
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/GoodsList',
    name:'GoodsList',
    component:GoodsList
  }
]

const router = new VueRouter({
  routes
})

export default router
