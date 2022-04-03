import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingHtml from "../views/DataBindingHtml.vue"
import DataBindingInputText from "../views/DataBindingInputText.vue"
import DataBindingList2 from '../views/DataBindingList2.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
import Calculator from '../views/Calculator.vue'
import CompositionAPI from '../views/CompositionAPI.vue'
import KakaoLogin from '../views/KakaoLogin.vue'
import StoreAccess from '../views/StoreAccess.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path : '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path : '/databindinghtml',
    name : 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path : '/databindinginputtext',
    name : 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/databindinglist2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/nestedcomponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/parentcomponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/compositionapi',
    name: 'CompositionAPI',
    component: CompositionAPI
  },
  {
    path: '/kakaologin',
    name: 'KakaoLogin',
    component: KakaoLogin
  },
  {
    path: '/storeaccess',
    name: 'StoreAccess',
    component: StoreAccess
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
