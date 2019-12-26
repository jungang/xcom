// import XcomButton from '../packages/button/index.js';
import XcomButton from '../packages/button/index';
import XcomPractice from "./components/Main";
import XcomPractices from "./components/Main2";

const components = [
    XcomButton,
    XcomPractice,
    XcomPractices,
];


const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}




export default {
    install,
    XcomButton,
    XcomPractice,
    XcomPractices,
}

export const XcomButton2 = {
    com:XcomButton
};
export const XcomPractice2 = {
    com:XcomPractice
};
export const XcomPractices2 = {
    com:XcomPractices
};