<template>
	<view>
		<!-- 商家介绍 -->
		<Introduce></Introduce>
		<!-- tab切换 -->
		<Tabs></Tabs>
		<!-- 点菜 -->
		<Ordering :class="[hideOrShow === 0 ? 'show' : 'hide' ]"></Ordering>
		<!-- 评论 -->
		<Assess :class="[hideOrShow === 1 ? 'show' : 'hide' ]" :messagedata="messagedata" :sonComponentClassIndex="sonComponentClassIndex"></Assess>
		<!-- 商家详情 -->
		<Details :class="[hideOrShow === 2 ? 'show' : 'hide' ]" ></Details>
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
				hideOrShow:0,
				busidata:[],
				orderingdata:[],
				messagedata:[],
				sonComponentClassIndex:0
			}
		},
		methods: {
			fatherMethod(index){
				this.hideOrShow = index;
			},
			takeFn(){
				let data = {
					openid:'5dfcf328da83f620e4077112'
				},
				disdata = {
					merchantid:'5dfcf328da83f620e4077112'
				}
				
				Promise.all([allApi(shopUrl,'POST',data),allApi(getdishesUrl,'POST',data),allApi(commentUrl,'POST',disdata)])
				.then(result=>{
					// 商家介绍
					this.busidata = result[0][1].data
					// 商品数据
					this.orderingdata = result[1][1].data
					// 评论(包括分类标签和评论)
					this.messagedata = result[2][1].data
				})
				.catch(err=>{
					console.log(err)
				})
			},
			assessClassMethod(index,item){
				// 参数data对象
				let data = {
					merchantid:'5dfcf328da83f620e4077112'
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
					console.log(err)
				})
				
			}
		},
		mounted() {
			this.takeFn()
		}
	}
</script>

<style>
	.show{
		display: block;
	}
	.hide{
		display: none;
	}
</style>
