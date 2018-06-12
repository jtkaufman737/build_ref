<<<<<<< HEAD
0import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
=======
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
>>>>>>> 721a294ef01eaa83c2ffd4177b8e0549120a6312
})
