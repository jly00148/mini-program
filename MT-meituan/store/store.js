import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const screendata = {
	// 存储筛选出来的数据
	busidataarr:[{}]
	
}

// 数据仓库
const state = {
	screendata
}

const store = new Vuex.Store({
	state,
	// 同步存储
	mutations:{
		busidata(state,busidatalist){
			state.screendata = {
				busidataarr:busidatalist
			}
		},

	}
})

export default store;