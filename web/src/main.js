import Vue from 'vue'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import App from './App.vue'
import router from './routers'
import Core from './shared/core'
Vue.use(Core);
import store from './shared/store'
import { i18n } from './lang/i18n'
import SearchBox from './components/SearchBox.vue'
Vue.component('SearchBox', SearchBox);
Vue.config.productionTip = false
new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')