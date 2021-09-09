<template>
	<view>
		<view class="loading-mask">
			<u-loading mode="circle" :show="true" class="loading"></u-loading>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	// loading
	.loading-mask{
		position: fixed;
		left:0;
		right:0;
		top:0;
		bottom:0;
		background-color: rgba(0,0,0,0.3);
		z-index: 9999;
	}
	.loading{
		position: absolute;
		left: 50%;
		top: 450upx;
		margin-left: -18upx;
	}
</style>
