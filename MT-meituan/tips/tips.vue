<template>
	<view>
		<view class="tips">
			<image src="../static/coen/meoyopu.png" mode="aspectFill" class="img"></image>
			<view>
				{{tipText}}
			</view>
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
		margin-top: 160upx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.img{
		width: 200upx;
		height: 200upx;
	}
</style>
