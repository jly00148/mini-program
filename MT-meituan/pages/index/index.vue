<template>
	<view class="home-container">
		<!-- <w-loading text="加载中.." mask="true" click="true" ref="loading"></w-loading> -->
		<view class="loading-mask" v-if="showOrHide">
			<u-loading mode="circle" :show="true" class="loading"></u-loading>
		</view>
		<view>
			<Search></Search>
		</view>
		<view>
			<Preference :preferData='preferData'></Preference>
		</view>
		<view>
				<Title></Title>
		</view>
		<view class="isFixedBox">
			<view id="boxFixed" :class="{'is_Fixed' : isFixed}" @click="poll">
				<Delicary></Delicary>
			</view>
		</view>
		<view>
			<Takeout class="takeout" :takeShopDate="takeShopDate"></Takeout>
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
	import { preferenceUrl,nearbyTakeOut } from '../../api/request.js';
	
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
				getTop: '',
				reac:'',
				isFixed:false,
				// 初始化默认渲染空数组
				preferData:[],
				takeShopDate:[],
				showOrHide:true,
				
				more:'more'
			}
		},

		methods: {
			preference(){
				Promise.all(
					[	
						// 为你优选横向轮播图初始化数据接口
						allApi(preferenceUrl,'GET'),
						
						// 附近商家接口初始化接口
						allApi(nearbyTakeOut,'GET')
					]
				)
				.then(result=>{
					// 返回为你优选的横向轮播图数据
					this.preferData = result[0][1].data;
					
					// 附近商家的数据
					this.takeShopDate = result[1][1].data;
					
					// loading消失
					this.showOrHide = false;
					// this.$refs.loading.close()
				})
				.catch(err=>{
					console.log('err',err)
				})
			},
			
			// 回到顶部
			poll(){
				const backToTop = this.getTop;
				wx.pageScrollTo({
					// 不同手机this.getTop不同，必需动态添加getTop
					scrollTop:backToTop,
					duration:300
				})
			},
			
			//点击综合排序后子组件调用父组件
			fatherMethod(updateShopArr){
				this.takeShopDate = updateShopArr;
			},
		},
	
		// 监听页面滚动的距离:微信小程序提供接口
		onPageScroll(e){
			this.reac = e.scrollTop;
		},
		

		
		// 计算属性侦听器：时刻监听数据变化，现在监听组件置顶和不置顶
		watch:{
			reac(){
				// 滚动距离大于该组件距离上边的距离
				if(this.reac > this.getTop){
					// 置顶
					this.isFixed = true;
				}
				// 滚动距离大于该组件距离上边的距离
				else{
					// 不置顶
					 this.isFixed = false;
				}
			}
		},

		mounted(){
			this.preference();
			
			// 获取筛选组件距离顶部的距离,组件地址：https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html
			const query = wx.createSelectorQuery();
			// #boxFixed点的上边界坐标
			query.select('#boxFixed').boundingClientRect();
			query.selectViewport().scrollOffset();
			query.exec(res=>{
				this.getTop = res[0].top;
			})
		},
		onReady() {
			// this.$refs.loading.open()
		}
	}
</script>

<style scoped>
	.home-container{
		padding: 25upx;
	}
	#boxFixed{
		width: 702upx;
		margin: 0 auto;
	}
	.loading-mask{
		position: fixed;
		left:0;
		right:0;
		top:0;
		bottom:0;
		background-color: rgb(0,0,0,0.3);
		z-index: 9999;
	}
	.loading{
		position: absolute;
		left: 50%;
		top: 450upx;
		margin-left: -18upx;
	}
	.isFixedBox{
		height: 70upx;
		width: 100%;
	}
	.is_Fixed{
		position: fixed;
		top: 0upx;
		left: 0upx;
		right: 0upx;
		z-index: 99;
	}

</style>
