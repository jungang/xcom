import Vue from 'vue'
import App from './App.vue'

import xcom from './components/index'

console.log(xcom)
Vue.use(xcom);

import Button from '../packages/button/index.js';
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app')
