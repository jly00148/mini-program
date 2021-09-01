<template>
	<view>
		<!-- 标题 -->
		<view class="prefer-title">
			为你优选
		</view>
		
		<!-- 滚动轮播图(备注: scroll-with-animation:在设置滚动条时使用动画过度)-->
		<view>
			<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
				<view class="prefer-dis">
					<block v-for="(item,index) in preferData" :key="index">
						<view class="prefer-view">
							<image :src="item.image" mode="aspectFill" class="img"></image>
							<text class="text">{{item.title}}</text>
							<text class="text">{{item.label}}</text>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			preferData:Array
		},
		data(){
			return {
				// 以下测试固定的数据
				// preferData:[
				// 	{
				// 		'image':'http://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public%5Cuploads%5C1583523592580.png',
				// 		'title':'特别推荐',
				// 		'label':'晚餐必备'
				// 	},
				// 	{
				// 		'image':'http://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public%5Cuploads%5C1583523592580.png',
				// 		'title':'特别推荐',
				// 		'label':'晚餐必备'
				// 	},
				// 	{
				// 		'image':'http://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public%5Cuploads%5C1583523592580.png',
				// 		'title':'特别推荐',
				// 		'label':'晚餐必备'
				// 	}
				// ]
// =======================================================================================================================				
			}
		}
	}
</script>

<style scoped>
	.prefer-content{
		margin: 30upx 0;
	}
	.prefer-title{
		font-size: 35upx;  height: 50upx; line-height: 50upx;
		margin-top: 15upx;
	}
	.scroll{
		white-space: nowrap;
		width: 100%;
		height: 300upx;
	}
	.prefer-dis{
		display: flex; justify-content: space-between;
		}	
	.prefer-view {
		height: 300upx; width: 300upx;
		padding:8upx;
	}
	.prefer-view .img{
		width: 300upx; height: 200upx; border-radius: 15upx;
	}	
	.prefer-view .text{
		height: 45upx;
		line-height: 45upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		text-align: center;
	}
	.prefer-view .text:nth-child(2){
		font-size: 30upx;
		}
	.prefer-view .text:nth-child(3){
		font-size: 27upx; color: #9c9c9c;
		}
/* 	.prefer-dis view:nth-child(2){
		padding: 0 7upx !important;
		} */
</style>
