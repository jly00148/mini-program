<template>
	<view class="introduce-back">
		<view class="introduce-view">
			<view>
				<image src="../../../static/coen/dizhi.png" mode="widthFix"></image>
			</view>
			<view>
				<text>{{thebusi.address}}</text>
			</view>
		</view>
		<view class="introduce-view">
			<view>
				<image src="../../../static/coen/dangan.png" mode="widthFix"></image>
			</view>
			<view>
				<text>查看食品安全档案</text>
			</view>
		</view>
		<view class="introduce-view">
			<view>
				<image src="../../../static/coen/shijian.png" mode="widthFix"></image>
			</view>
			<view>
				<text>配送时间:{{thebusi.duration}}分钟</text>
			</view>
		</view>
		<view class="introduce-view">
			<view>
				<image src="../../../static/coen/fuwu.png" mode="widthFix"></image>
			</view>
			<view>
				<text>商家服务: 到店自取(享优惠)</text>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入vuex的mapState;
	import { mapState } from 'vuex';
	
	export default{
		data() {
			return {
				
			}
		},
		methods:{

		},
		computed:{
			...mapState(['screendata']),
			thebusi(){
				const busidata = this.screendata.busidataarr[0];
				return busidata
			}
		}

	}
</script>

<style scoped>
	.introduce-back{background: #fafafa; height: 100%; overflow-y: auto;}
	image{width: 38upx !important; height: 38upx !important;
	}
	text{display: block; font-size: 30upx;}
	.introduce-view{
	background: #ffffff;
	display: flex;
	align-items: center;
	height: 110upx;
	margin: 20upx 0;
	padding: 0 20upx;}
	.introduce-view view:nth-child(1){width: 38upx; height: 38upx;
	padding-right: 20upx;}
</style>