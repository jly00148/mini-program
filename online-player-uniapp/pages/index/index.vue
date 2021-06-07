<template>
	<view>
		<!-- 搜索框 -->
		<!-- 兼容微信小程序，只有微信小程序才执行 -->
		<!-- #ifdef MP -->
		<view class="search">
			
			<view class="search-box">
				<!-- 放大镜icon -->
				<text class="iconfont icon-sousuo1"></text>
				<!-- placeHolder -->
				<text>搜索今日新闻...</text>
			</view>
		
			<text  class="search-btn">搜索</text>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		},
		// uni-app官网->生命周期->页面生命周期函数
		onNavigationBarSearchInputChanged(){
			console.log('搜索框内容变化')
		},
		onNavigationBarButtonTap(){
			console.log('点击了按钮')
		}
	}
</script>

<style>

</style>
