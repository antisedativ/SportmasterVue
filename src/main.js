import Vue from 'vue'
import App from './App.vue'
import router from './router'


// Глобальная регистрация кнопки
import ButtonComp from './UI/ButtonComp.vue'

import store from './store'
import vuetify from './plugins/vuetify'

Vue.component('ButtonComp', ButtonComp)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
