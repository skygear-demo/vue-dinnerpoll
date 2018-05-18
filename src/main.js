// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import skygear from 'skygear'
import App from './App'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

skygear.config({
  'endPoint': 'https://reactdinnerpoll.skygeario.com/',
  'apiKey': '8b05aba14a3e4b53a93277ae93a53c13'
}).then(() => {
  console.log('skygear container is now ready for making API calls.')
}, (error) => {
  console.error(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
