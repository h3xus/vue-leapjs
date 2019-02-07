import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// import Leap from './components/Leap.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Object.defineProperty(Vue.prototype, '$Leap', {
//   value: leap
// });
