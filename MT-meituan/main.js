import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

App.mpType = 'app';

// 引入vuex文件(为store/store.js而引入，否则delicary.vue文件的commit报错,打印不了store.js中的listdata)
import store from 'store/store.js';
Vue.prototype.$store = store;

const app = new Vue({
    ...App
})
app.$mount()
