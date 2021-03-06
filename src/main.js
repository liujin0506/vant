import Vue from 'vue';

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import '@/styles/font.scss'; // global css

Vue.use(Vant);

import { Lazyload } from 'vant';
Vue.use(Lazyload);

import App from './App';
import router from './router';
import store from './store';
import '@/auth';

import * as filters from './filters';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
