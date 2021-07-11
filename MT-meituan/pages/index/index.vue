<template>
	<view class="home-container">
		<view>
			<Search></Search>
		</view>
		<view>
			<Preference :preferData='preferData'></Preference>
		</view>
		<view>
			<Delicary></Delicary>
		</view>
		<view>
			<Title></Title>
		</view>
		<view>
			<Takeout></Takeout>
		</view>
	</view>
</template>

<script>
	// 引入子组件(必须相对路径):
	import Search from './components/search.vue';
	import Preference from './components/preference.vue';
	import Delicary from './components/delicary.vue';
	import Title from './components/title.vue';
	import Takeout from './components/takeout.vue';
	
	// 引入接口
	import allApi from '../../api/api.js';
	// 引入请求路径
	import { preferenceUrl } from '../../api/request.js';
	
	// 引入调用成功、失败和loading等接口
	import { errMsg } from '../../api/errmsg.js';
	
	export default {
		components:{
			Search,
			Preference,
			Delicary,
			Title,
			Takeout,
		},
		data() {
			return {
				title: 'Hello',
				
				// 初始化默认渲染空数组
				preferData:[]
			}
		},

		methods: {
			// 为你优选调用接口初始化数据
			preference(){
				allApi(preferenceUrl,'GET')
				.then(result=>{
					// 返回的目标数组data在result数组中
					this.preferData = result[1].data;
				})
				.catch(err=>{
					errMsg.errlist('服务端错误，请稍后再试！')
					console.log(err)
				})
			}
		},
		onLoad() {
			this.preference()
		}
	}
</script>

<style scoped>
	.home-container{
		margin: 2upx 10upx;
	}
		
</style>
