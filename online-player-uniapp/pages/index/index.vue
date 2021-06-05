<template>
	<view class="content">
		<image class="logo" src="/static/tabbar/logo.png"></image>
		<view class="text-area">
			<text class="title animated" hover-class="flash">{{title}},uniapp</text>
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
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
