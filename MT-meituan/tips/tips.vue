<template>
	<view>
		<view class="text">
			{{tipText}}
		</view>
		<image src="../static/coen/meoyopu.png" mode="aspectFill"></image>
	</view>
</template>

<script>
	export default{
		props:{
			tipText:String
		}
	}
</script>

<style>
	.text{
		text-align: center;
	}
	image{
		width: 200upx;
		height: 200upx;
	}
</style>
