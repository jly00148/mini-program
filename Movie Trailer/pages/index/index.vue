<template>
	<view>
		<!-- 轮播图 -->
		<swiper 
		:indicator-dots="true" 
		:autoplay="true" 
		:interval="3000" 
		:duration="1000" 
		:circular="true"
		class="carousel"
		>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/carousel/xjcy1.jpg" class="carousel"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/carousel/mwdy1.jpg" class="carousel"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/carousel/jgdzgsl1.jpg" class="carousel"></image>
				</view>
			</swiper-item>
		</swiper>
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

		}
	}
</script>

<style>

</style>
