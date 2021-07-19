<template>
	<view>
		<!-- 商家介绍 -->
		<Introduce></Introduce>
		<!-- tab切换 -->
		<Tabs></Tabs>
		<!-- 商品下单 -->
		<Ordering></Ordering>
		<!-- 用户评论 -->
		<Assess></Assess>
		<!-- 商家详情 -->
		<Details></Details>
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
				
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
