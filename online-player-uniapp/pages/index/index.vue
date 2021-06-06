<template>
	<view>
		<!-- 搜索框 -->
		<view class="flex align-center search">
			
			<view class="search-box flex align-center">
				<!-- 放大镜icon -->
				<text class="iconfont icon-sousuo1"></text>
				<!-- placeHolder -->
				<text class="text">搜索今日新闻...</text>
			</view>
		
			<text class="flex align-center">分类</text>
		</view>
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
