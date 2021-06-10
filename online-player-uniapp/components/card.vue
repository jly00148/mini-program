<template>
		<view class="card flex">
			<view class="reco">
				<text>{{title}}</text>
			</view>
			
			<slot></slot>
			
			<view class="change-card" v-if="showFresh" @click="$emit(refresh)">
				<text class="iconfont icon-shuaxin ">换一批</text>
			</view>
		</view>
</template>

<script>
	export default{
		props:{
			title:String,
			showFresh:{
				type:Boolean,
				default:true
			}
		}
	}
</script>
	
<style>
</style>
