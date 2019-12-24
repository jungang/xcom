import XcomPractices from './Main2.vue'
import XcomPractice from './Main.vue'
import XcomButton from '../../packages/button/index.js';

/* istanbul ignore next */
/*
XcomPractice.install = function(Vue) {
    Vue.component(XcomPractice.name, XcomPractice);
};
export default XcomPractice;

*/


const Components = {
    XcomPractice,
    XcomPractices,
    XcomButton
};


Components.install = function(Vue) {
    Object.keys(Components).forEach(name => {
        console.log("name:", name)
        Vue.component(name, Components[name])
    })
};


export default Components
