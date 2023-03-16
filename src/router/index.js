/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage";
import Article from '@/components/Article';
import store from "@/store";

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
    props: (route) => store.state.articles.find(x => x.id == route.params.id)
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
