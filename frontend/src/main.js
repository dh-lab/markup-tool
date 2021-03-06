import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import store from './store';

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.SERVER_URL || 'http://localhost:3000';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
