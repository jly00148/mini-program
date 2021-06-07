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
		
		
		<!-- 屏幕宽度设置为750rpx,仿小程序的话用ps测量像素的话在Photoshop中的图像->图像大小->宽度设置为750 -->
		<!-- 轮播图组件,其中circular是循环播放，重新回第一张图片 -->
		<view>
			<swiper 
			:indicator-dots="true" 
			:autoplay="true" :interval="3000" 
			:duration="1000" 
			circular
			>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/swperImg/ad1.png" mode="scaleToFill"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/swperImg/ad2.jpg" mode="scaleToFill"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="../../static/swperImg/ad3.jpg" mode="scaleToFill"></image>
					</view>
				</swiper-item>
				
			</swiper>
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
