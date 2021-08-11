<template>
	<view>
		<view class="place-view">
			<view class="place-addres" @click="addAddress()">
				+ 新增收货地址
			</view>
			<!-- 已选中收货地址 -->
			<view class="goods-address" @click="addAddress()">
				<view class="goods-address-box">
					<view class="goods-address-left">
						<image src="../../static/coen/address.png" mode="widthFix"></image>
					</view>
					<view class="goods-address-in">
						<view></view>
						<view class="goods-address-name">
							<text>{{address}}</text>
							<text>{{username +' '+ tel}}</text>
						</view>
					</view>
					<view class="goods-address-right">
						<image src="../../static/coen/jiantou.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="place-time">
				<image src="../../static/coen/times.png" mode="widthFix"></image>
				<text>立即送出</text>
			</view>
		</view>
		
		<!-- 菜单 -->
		<view class="place-view">
			<view>
				<block v-for="(item,index) in uniqueArr" :key="index">
					<view class="order-view">
						<view class="order-img">
							<image  :src="item.image" mode="aspectFill"></image>
						</view>
						<view class="order-title">
							<text>{{item.TotalPrice}}</text>
							<text>x{{item.amount}}</text>
						</view>
						<view class="order-price">
							单价:¥{{item.price}}
						</view>
					</view>
				</block>
			</view>
		</view>
		<!-- 配送费 -->
		<view class="place-view">
			<view class="Delivery">配送费：{{delivering}}¥</view>
		</view>
		<!-- 高度 -->
		<view style="height: 140upx;"></view>
		<!-- 支付 -->
		<view class="payment">
			<view class="payment-left">
				<text>合计¥:{{payment+delivering}}</text>
			</view>
			<view class="payment-right" @click="toPay()">
				去支付
			</view>
		</view>
		<!-- 提示组件 -->
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages" @clickMessage="clickMessage"></HMmessages>
		</view>
</template>

<script>
	export default{
		data(){
			return {
				payment:'',
				delivering:'',
				openid:'',
				merchantId:'',
				log:'',
				allNums:'',
				uniqueArr:[],
				// 收货地址
				address:'深圳市龙华区民治大道',
				username:'你的名字',
				tel:'20210814',
				shopname:''
			}
		},
		onLoad(obj) {
			const ideObj = JSON.parse(obj.ide);
			
			// 商品的总价
			this.payment=ideObj.payment;
			// 配送费
			this.delivering=ideObj.delivering;
			// 用户openid
			this.openid=ideObj.openid;
			// 商家标识
			this.merchantId=ideObj.merchantId;
			// 商家logo
			this.logo = ideObj.logo;
			// 点的商品份数
			this.allNums=ideObj.allNums;
			// 商家标识
			this.merchantId = ideObj.merchantId
			// 需要渲染的数据(已去重)
			this.uniqueArr = ideObj.uniqueArr;
			// 商家名称
			this.shopname = ideObj.shopname;
		},
		methods:{
			addAddress(){
				wx.chooseAddress({
					success:res=>{
							this.address = res.cityName + res.countyName + res.detailInfo
							this.username = res.userName;
							this.tel = res.telNumber;
					}
				})
			},
			
			// 发起微信支付：
			toPay(){
				
				// 发起微信支付的数据
				/*
					*1.下单客户信息
					*2.商家信息
				*/
			   
				// 	1.下单客户信息
				let peopleobj = {
					address:this.address,
					name:this.username,
					iphone:this.tel
				}
				// ------------------------------------------------------------------------------
				// 2.商家信息
				// 商家标识
				let merchantid =this.merchantId;
				
				// 截取商家标识字符串
				let ide = this.merchantId.slice(0,7)
				
				// 商家名称
				let commod = this.shopname
				
				// 商家logo
				let logo = this.logo;
				// -----------------------------------------------------------------------------
				
				// 把发送给后台的数据以对象的形式存储
				let Paymentinfor = {
					type:'placeOrder',
					peopleobj,
					arrinfo:this.uniqueArr,
					merchantid,
					ide,
					commod,
					logo,
					useropenid:this.openid,
					// 支付的总价：
					payment:this.payment+this.delivering
				}
				console.log(Paymentinfor)
			}
		}
	}
</script>

<style>
	page{background: #F4f4f4;}
	.place-view{background: #FFFFFF;
	margin: 20upx;
	border-radius: 9upx;
	padding: 35upx 15upx;}
	.place-addres{
	border: 1rpx solid #ffb000;
	width: 400upx;
	height: 80upx;
	line-height: 80upx;
	border-radius: 50upx;
	text-align: center;
	color: #ffb000;
	margin: 0 auto;
	font-size: 30upx;
	}
	.place-time image{width: 40upx; height: 40upx; padding-right: 20upx;}
	.place-time{display: flex; align-items: center; font-size: 30upx;
	border-top: 1rpx solid #F4f4f4;
	padding-top: 35upx;
	margin-top: 35upx;
	}
	/* 菜单 */
	.order-view{display: flex;
	height: 150upx !important; overflow: hidden;
	margin-bottom: 15upx;
	font-size: 30upx;
	}
	.order-view text{display: block;}
	.order-img{width: 200upx !important; height: 150upx !important;
	padding-right: 15upx;
	}
	.order-img image{width: 100%; height: 100%;
	}
	.order-title{flex-grow: 1;}
	.order-title text:nth-child(2){color: #999999; font-size: 25upx;}
	.Delivery{
	display: flex;
	justify-content: flex-end;
	font-size: 30upx;}
	/* 支付 */
	.payment{background: #FFFFFF;
	height: 120upx;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30upx;}
	.payment-left{display: flex; align-items: center;
	font-size: 30upx;}
	.payment-left text:nth-child(2){
		font-weight: bold; 
		font-size: 32upx;
	}
	.payment-right{
		background: #FFD100; color: #FFFFFF;
		padding: 20upx 60upx;
		font-size: 30upx;
		border-radius: 7upx;
	}
	/* 收货地址 */
	.goods-address{
		margin-top: 20upx;
		border-top: 1rpx solid #F4f4f4;
	}
	.goods-address-box{
		display: flex;
		align-items: center;
		padding-top: 30upx;
	}
	.goods-address-left{
		width: 40upx; 
		height: 40upx; 
		padding-right: 20upx;
	}
	.goods-address-left image{
		width: 40upx;
		height: 40upx;
	}
	
	.goods-address-right{
		flex-grow: 5;
		display: flex;
		justify-content: flex-end;
		width: 40upx;
		height: 40upx;
	}
	.goods-address-right image{
		width: 40upx; 
		height: 40upx;
	}

	.goods-address-in{
		flex-grow: 1;
	}
	.goods-address-name{
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
