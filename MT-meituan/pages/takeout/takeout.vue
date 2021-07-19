<template>
	<view>
		<!-- 商家介绍 -->
		<Introduce></Introduce>
		<!-- tab切换 -->
		<Tabs></Tabs>
		<!-- 点菜 -->
		<Ordering :class="[hideOrShow === 0 ? 'show' : 'hide' ]"></Ordering>
		<!-- 用户评论 -->
		<Assess :class="[hideOrShow === 1 ? 'show' : 'hide' ]"></Assess>
		<!-- 商家详情 -->
		<Details :class="[hideOrShow === 2 ? 'show' : 'hide' ]"></Details>
	</view>
</template>

<script>
	import Introduce from './components/introduce.vue';
	import Tabs from './components/tabs.vue';
	import Ordering from './components/ordering.vue';
	import Assess from './components/assess.vue';
	import Details from './components/details.vue';
	
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
				hideOrShow:0
			}
		},
		methods: {
			fatherMethod(index){
				this.hideOrShow = index;
			}
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
