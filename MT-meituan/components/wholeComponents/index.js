import Vue from 'vue';

// 引入全局组件:
// import globalComponent from '../../loading/loading.vue';
import wLoading from "../w-loading/w-loading.vue";

const compos = [
	{
		value:'homeload',
		// component:globalComponent
	},
	{
		value:'w-loading',
		component:wLoading
	}
]

const comsFn = () =>
	compos.map((item)=>{
		return Vue.component(item.value,item.component)
	})

export default comsFn;