import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

// Глобальная регистрация кнопки
import store from './store/index'
import ButtonComp from './UI/ButtonComp.vue'

Vue.component('ButtonComp', ButtonComp)
Vue.config.productionTip = false

new Vue({
  router,
  data: store.state,
  render: h => h(App)
}).$mount('#app')
