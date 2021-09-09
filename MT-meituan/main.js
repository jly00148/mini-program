import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

App.mpType = 'app';

// 引入vuex文件(为store/store.js而引入，否则delicary.vue文件的commit报错,打印不了store.js中的listdata)
import store from 'store/store.js';
Vue.prototype.$store = store;

// 注册全局组件loading
import loading from "./components/loading/index.vue";
Vue.component('globalLoading',loading)

// 1.配置uView之引入uView主JS库
import uView from "view-ui/uview-ui";
Vue.use(uView);

const app = new Vue({
    ...App,
	store:store
})
app.$mount()
