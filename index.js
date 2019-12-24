import Main from './src/components/Main'
import Main2 from './src/components/Main2'
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('xcom-practice', Main)
}

const Components = {
    Main,
    Main2
}

Main.install = function(Vue){
    Object.keys(Components).forEach(name => {
        Vue.component(name, Components[name])
    })
}

export default {
    Main
}

