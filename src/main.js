import Vue from 'vue'
import App from './App.vue'

import xcom from './index'
// Vue.use(xcom);
console.log(xcom);

import {
  XcomButton,
  XcomButton2,
  XcomPractice2,
  XcomPractices2,
} from './index'

// import XcomButton from "../packages/button";

console.log(XcomButton);
console.log(XcomButton2);
console.log(XcomButton2.com);
console.log(XcomPractice2);
console.log(XcomPractices2);

Vue.component(XcomButton2.com.name, XcomButton2.com)
Vue.component(XcomPractice2.com.name, XcomPractice2.com)
Vue.component(XcomPractices2.com.name, XcomPractices2.com)


Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app')
