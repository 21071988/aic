import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAgile from 'vue-agile'
import YmapPlugin from 'vue-yandex-maps'
import VueSocialSharing from 'vue-social-sharing'


const settings = {
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.config.productionTip = false
Vue.use(VueAgile)
Vue.use(YmapPlugin, settings)
Vue.use(VueSocialSharing);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


         