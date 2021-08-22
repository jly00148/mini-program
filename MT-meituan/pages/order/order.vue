<template>
	<view>
		<view class="page"  v-if="!showOrHide">
			<block>
				<view class="order-back">
					<view class="order-view">
						<view class="order-img">
							<image src="http://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public/uploads/1583592653889.png" mode="aspectFill"></image>
						</view>
						<view class="goods-commodity">
							肯德基
						</view>
						<view class="order-succ">
							付款成功
						</view>
						<view class="order-succ">
							待付款
						</view>
					</view>
				</view>
			</block>
			
			<!-- 2 -->
			<view>
				<block>
					<view class="order-dishes">
						<text>盖浇饭</text>
						<text>X2</text>
					</view>
				</block>
			</view>
			
			<!-- 3 -->
			<view class="order-total">
				<view class="order-left">
					<text></text>
				</view>
				<view class="order-tright">
					<text>去评论</text>
					<text>共件商品合计</text>
				</view>
			</view>
		</view>
		<Tips v-if="showOrHide" :tipText="tipText"></Tips>
	</view>
</template>

<script>
	import modal from '../../modal/modal.vue';
	import Tips from '../../tips/tips.vue';
	import allApi from '../../api/api.js';
	import { wxOrderUrl } from '../../api/request.js';
	
	
	export default {
		components:{
			Tips:Tips
		},
		data() {
			return {
				showOrHide:false,
				tipText:'',
				openid:''
			}
		},
		methods: {
			ordering(){
				// 发送请求
				let data = {
					type:'myorder',
					openid:this.openid
				}
				
				allApi(wxOrderUrl,'POST',data)
				.then(res=>{
					console.log(res)
				})
				.catch(err=>{
					console.log(err)
				})
			}
		},
		onShow() {
			// 取出本地缓存的用户信息
			let cacheUserInfo = uni.getStorageSync('usermen');
			
			// 用户未登录
			if(!cacheUserInfo){
				// 暂存opendi,以便发送请求传参
				this.openid = cacheUserInfo.openid;
				
				this.showOrHide = true;
				this.tipText = '用户未登录，请登录后操作'
			}else{
				// 用户已登录
				this.showOrHide = false;
			}
		},
		mounted() {
			this.ordering()
		}
	}
</script>

<style>
	.page{
		background-color: #f2f3f4;
		margin: 10upx;
		padding: 10upx;
		border-radius: 10upx;
	}
	.oroder-back{
		background-color: #FFFFFF;
		margin: 10upx;
		padding: 20upx 10upx;
		border-radius: 9upx;
	}
	.order-img {
		width: 100upx;
		height: 100upx;
		padding-right: 20upx;
	}
	.order-view image{
		width: 100upx;
		height: 100upx;
		border-radius: 10upx;
	}
	.order-view{
		height: 106upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
	}
	.goods-commodity{
		flex-grow: 1;
		font-size: 30upx;
		font-weight: bold;
	}
	.order-succ{
		font-size: 28upx;
		color: #666666;
	}
	.order-dishes{
		display: flex;
		justify-content: space-between;
		font-size: 28upx;
		color: #666666;
	}
	.order-tright{
		display: flex;
		justify-content: space-between;
		font-size: 28upx;
		color: #666666;
	}
</style>
