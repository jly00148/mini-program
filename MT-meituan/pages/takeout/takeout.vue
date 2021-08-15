<template>
	<view>
		<!-- 商家介绍 -->
		<Introduce></Introduce>
		
		<!-- tab切换 -->
		<Tabs class="tabs"></Tabs>
		
		<view class="ordering-sceate">
			<!-- 点菜 -->
			<Ordering :class="[hideOrShow === 0 ? 'show' : 'hide' ]" :orderingdata="orderingdata"></Ordering>
			<!-- 评论 -->
			<Assess :class="[hideOrShow === 1 ? 'show' : 'hide' ]" :messagedata="messagedata" :sonComponentClassIndex="sonComponentClassIndex"></Assess>
			<!-- 商家详情 -->
			<Details :class="[hideOrShow === 2 ? 'show' : 'hide' ]" ></Details>
		</view>
	</view>
</template>

<script>
	import Introduce from './components/introduce.vue';
	import Tabs from './components/tabs.vue';
	import Ordering from './components/ordering.vue';
	import Assess from './components/assess.vue';
	import Details from './components/details.vue';
	
	import allApi from '../../api/api.js';
	import { commentUrl,shopUrl,getdishesUrl,AllAndAiAssessUrl } from '../../api/request.js';
	
	
	export default {
		components:{
			Introduce:Introduce,
			Tabs:Tabs,
			Ordering:Ordering,
			Assess:Assess,
			Details:Details
		},
		data() {
			return {
				// 0：默认显示点菜这个组件以及该组件下的返回的信息
				hideOrShow:0,
				
				orderingdata:[],
				messagedata:[],
				sonComponentClassIndex:0,
				
				openId:''
			}
		},
		methods: {
			fatherMethod(index){
				this.hideOrShow = index;
			},
			takeFn(){
				let data = {},disdata = {}
				
				// 令data对象和disdata对象添加一个属性参数
				data.openid = this.openId
				disdata.merchantid = this.openId
				
				Promise.all(
					[
						allApi(shopUrl,'POST',data),
						allApi(getdishesUrl,'POST',data),
						allApi(commentUrl,'POST',disdata)
					]
				)
				.then(result=>{

					// 商家介绍.不用父传子组件传递数据传，采用vuex。result[0][1].data返回的数据是每家店铺的详细信息
					this.$store.commit('busidata',result[0][1].data)
					
					// 商品数据 result[0][1].data返回的数据是店铺每种商品的详细信息
					this.orderingdata = result[1][1].data;
					
					// 评论(result[2][1].data返回的包括分类评论和标签)
					this.messagedata = result[2][1].data;
				})
				.catch(err=>{
					console.log(err)
				})
			},
			
			assessClassMethod(index,item){
				// 参数data对象
				let data = {
					merchantid:this.openId
				}
				
				// 看index下标是否点击全部还是非全部分类，否则data对象添加一个属性classmessage
				index != 0 ? data.classmessage = item : data
				
				//全部评论和AI评论发送请求
				allApi(AllAndAiAssessUrl,'POST',data)
				.then(result=>{
					this.messagedata = result[1].data
					this.sonComponentClassIndex = index;
				})
				.catch(err=>{
					console.log('err',err)
				})
			}
		},
		onLoad(shopOpenid) {//只能用onload才能接受店铺的openid
			this.openId = shopOpenid.openid;
			this.takeFn()
		}
	}
</script>

<style scoped>
	.show{
		display: block;
		height: 1500upx;
	}
	.hide{
		display: none;
	}
	.ordering-sceate{
		position: relative;
		top: 175upx;
	}
</style>
