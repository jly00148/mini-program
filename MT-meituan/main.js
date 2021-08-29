import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

App.mpType = 'app';

// 引入vuex文件(为store/store.js而引入，否则delicary.vue文件的commit报错,打印不了store.js中的listdata)
import store from 'store/store.js';
Vue.prototype.$store = store;


import comsFn from './components/wholeComponents/index.js';

// 调用全局组件(在component/wholeComponents组件中已注册好)
comsFn()

const app = new Vue({
    ...App,
	store:store
})
app.$mount()
