import Vue from 'vue';

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.use(Vant);

import { Lazyload } from 'vant';
Vue.use(Lazyload);

import App from './App';
import router from './router';
import store from './store';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
