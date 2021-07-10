<template>
	<view class="home-container">
		<view>
			<Search></Search>
		</view>
		<view>
			<Preference></Preference>
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
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.home-container{
		margin: 2upx 10upx;
	}
		
</style>
