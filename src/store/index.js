import Vue from 'vue'
import Vuex from 'vuex'

import articleModule from './articlesModule'
import errorsModule from './errorsModule'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    articleModule,
    errorsModule
  }
})
