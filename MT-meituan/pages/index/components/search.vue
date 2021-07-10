<template>
	<view>
		<!-- 收外卖地址 -->
		<view class="search-view themeColor">
			<image src="../../../static/coen/dingwei.svg" mode="w"></image>
			<text class="search-text">深圳市龙华区民治大道</text>
			<text>></text>
		</view>
		
		<!-- 搜索 -->
		<view class="search-box ">
			<view class="search" @click="seaRch()">
				<image src="../../../static/coen/sousuo.svg" mode="widthFix" class="search-img"></image>
				<input type="text" placeholder="椒盐牛排" />
			</view>
		</view>
		
		<!-- 轮播图 -->
		<view class="swiper-view">
			<swiper 
			:autoplay="true" 
			:interval="3000" 
			:duration="2000"
			:circular='true'
			@change="change"
			>
				<!-- 用block标签包裹循环数组，相当于template -->
				<block v-for=" (item,index) in carouselPageItem" :key="index" >
					<swiper-item>
						<view class="swiper-item">
							<block v-for=" (listItem,index) in item" :key="index">
								<view class="conteng-img">
									<image :src="listItem.img" mode="widthFix" class="uploadimg"></image>
									<text>{{listItem.title}}</text>
								</view>
							</block>
						</view>
					</swiper-item>
				</block>
			</swiper>
			<view class="indicate">
				<block v-for="(item,index) in carouselPageItem" :key="index">
					<view class="indicate-item" :class="{active:index == num}">
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				carouselPageItem:[
					[
						{
							'img':'/static/inster/baofan.png',
							'title':'美食'
						},
						{
							'img':'/static/inster/chaoshi.png',
							'title':'超市'
						},
						{
							'img':'/static/inster/dangao.png',
							'title':'蔬果'
						},
						{
							'img':'/static/inster/hanbao.png',
							'title':'汉堡'
						},
						{
							'img':'/static/inster/malatang.png',
							'title':'麻辣'
						},
						{
							'img':'/static/inster/meishi.png',
							'title':'美食'
						},
						{
							'img':'/static/inster/paotui.png',
							'title':'跑腿'
						},
						{
							'img':'/static/inster/pinping.png',
							'title':'拼拼'
						},
						{
							'img':'/static/inster/shaokao.png',
							'title':'烧烤'
						},
						{
							'img':'/static/inster/qita.png',
							'title':'其他'
						}
					],
					[
						{
							'img':'/static/inster/jiaozi.png',
							'title':'饺子'
						},
						{
							'img':'/static/inster/jintie.png',
							'title':'津贴'
						},
						{
							'img':'/static/inster/lazi.png',
							'title':'辣条'
						},
						{
							'img':'/static/inster/kuaican.png',
							'title':'快餐'
						},
						{
							'img':'/static/inster/xianhua.png',
							'title':'鲜花'
						},
						{
							'img':'/static/inster/liaoli.png',
							'title':'料理'
						},
						{
							'img':'/static/inster/meituan.png',
							'title':'美团'
						},
						{
							'img':'/static/inster/shuiguo.png',
							'title':'水果'
						},
						{
							'img':'/static/inster/xiaochi.png',
							'title':'小吃'
						},
						{
							'img':'/static/inster/yexiao.png',
							'title':'夜宵'
						}
					],
				],
				num:0
			}
		},
		onLoad() {

		},
		methods: {
			change(e){
				this.num = e.detail.current
				// console.log(e.detail.current) 轮播图循环播放打印的页码
				
			}
		}
	}
</script>

<style lang="less" scoped>
	/* scoped：css只限制在当前组件使用，避免其他组件相同class，造成影响 */
	@import url('../index.less');
</style>
