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
				preferData:[]
			}
		},

		methods: {
			preference(){
				uni.request({
					url:'https://meituan.thexxdd.cn/api/forshop/getprefer',
					method:'GET'
				})
				.then(res=>{
					// 返回的目标数组data在res数组中
					this.preferData = res[1].data
				})
				.catch(err=>{
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
