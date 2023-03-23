/* eslint-disable */
import Article from '@/components/Article'
import MainPage from "@/pages/MainPage"
import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/AboutPage')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/pages/FormPage')
  },
  {
    path: '/article/:id',
    component: Article,
    props: (route) => store.state.articleModule.articles.find(x => x.id == route.params.id)
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
