import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// Глобальная регистрация кнопки
import ButtonComp from './components/ButtonComp.vue'
Vue.component('ButtonComp', ButtonComp)

new Vue({
  render: h => h(App),
}).$mount('#app')
