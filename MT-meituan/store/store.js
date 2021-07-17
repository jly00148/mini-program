import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const screendata = {
	// 存储筛选出来的数据
	screenarr:[{}]
}

// 数据仓库
const state = {
	screendata,
}

const store = new Vuex.Store({
	state,
	// 同步存储
	mutations:{
		screenmuta(state,listdata){
			// // console.log(listdata)
			if(typeof listdata === 'string'){
				listdata = [{notice:listdata}];
				state.screendata = {
					screenarr:listdata
				}
			}else{
				state.screendata = {
					screenarr:listdata
				}
			}
		}
	}
})

export default store;