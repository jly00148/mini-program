<template>
	<view class="home-container">
		<view>
			<Search></Search>
		</view>
		<view>
			<Preference :preferData='preferData'></Preference>
		</view>
		<view>
			<Title></Title>
		</view>
		<view>
			<view id="boxFixed" :class="{'is_Fixed' : isFixed}" @click="poll">
				<Delicary></Delicary>
			</view>
		</view>
		<view>
				<Takeout class="takeout"></Takeout>
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
	import { preferenceUrl } from '../../api/request.js';
	
	// 引入调用成功、失败和loading等接口
	import { errMsg } from '../../api/errmsg.js';
	
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
				isFixed:false,
				// 初始化默认渲染空数组
				preferData:[]
			}
		},

		methods: {
			// 为你优选调用接口初始化数据
			preference(){
				allApi(preferenceUrl,'GET')
				.then(result=>{
					// 返回的目标数组data在result数组中
					this.preferData = result[1].data;
				})
				.catch(err=>{
					errMsg.errlist('服务端错误，请稍后再试！')
					console.log(err)
				})
			},
			
			// 回到顶部
			poll(){
				wx.pageScrollTo({
					// 不同手机this.getTop不同，必需动态添加getTop
					scrollTop:this.getTop,
					duration:100
				})
			}
		},
		
		// 监听页面滚动的距离:微信小程序提供接口
		onPageScroll(e){
			this.reac = e.scrollTop;

		},
		
		mounted(){
			this.preference();
			// 监听筛选组件滚动的距离,组件地址：https://developers.weixin.qq.com/miniprogram/dev/api/wxml/wx.createSelectorQuery.html
			const query = wx.createSelectorQuery();
			// #boxFixed点的上边界坐标
			query.select('#boxFixed').boundingClientRect();
			query.selectViewport().scrollOffset();
			query.exec(res=>{
				// console.log('res::',res)
				this.getTop = res[0].top;
			})
		},
		
		// 计算属性侦听器：时刻监听数据变化，现在监听组件置顶和不置顶
		watch:{
			reac(){
				if(this.reac > this.getTop){
					// 置顶
					this.isFixed = true;
				}else{
					// 不置顶
					 this.isFixed = false;
				}
			}
		}
	}
</script>

<style scoped>
	.home-container{
		padding: 25upx;
	}
	.is_Fixed{
		position: fixed;
		top: 88upx;
		left: 0upx;
		right: 0upx;
		bottom: 73upx;
	}

</style>
