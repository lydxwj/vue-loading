import Vue from 'vue';
import App from './App.vue';

import Loading from './components/index';
Vue.use(Loading);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');