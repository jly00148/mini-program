<template>
	<view>
		<view class="tips">
			<view>
				{{tipText}}
			</view>
			<image src="../static/coen/meoyopu.png" mode="aspectFill"></image>
		</view>
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
	.tips{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	image{
		width: 200upx;
		height: 200upx;
	}
</style>
