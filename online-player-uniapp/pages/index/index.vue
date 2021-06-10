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
				:autoplay="true" 
				:interval="3000" 
				:duration="1000" 
				circular
				:current="current"
				@change="changeSwiper"
				>	
				<!-- 绑定current，代表当前swiper,监听change事件，current改变会触发change事件，event.derail={current:current,source:source} -->
					<swiper-item 
					v-for="(item,index) in swipers"
					:key="index">
						<image :src="item.url" mode="scaleToFill"></image>
						<view class="title">
							{{ swipers[current].title }}
						</view>
					</swiper-item>
			</swiper>
		</view>
		
		<!-- 卡片组件 -->
		<Card title="为你推荐"></Card>
	</view>
</template>

<script>
	import Card from '@/components/card.vue';
	
	export default {
		components:{
			Card
		},
		data() {
			return {
				current:0,
				swipers:[
					{	title:"新闻1",
						url:'../../static/swperImg/ad1.png'
					},
					{
						title:"新闻2",
						url:'../../static/swperImg/ad2.jpg'
					},
					{
						title:"新闻3",
						url:'../../static/swperImg/ad3.jpg'
					}
					
					
				]
			}
		},
		onLoad() {

		},
		methods: {
			changeSwiper(e){
				// console.log(e) 一个对象，对象下有detail对象，detail有个current属性值，代表当前轮播图图片
				
				// 赋值给current，就拿到轮播图每个图片的current
				this.current = e.detail.current
			}
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
