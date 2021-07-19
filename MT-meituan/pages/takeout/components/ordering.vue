<!-- 点击点菜显示的部分 -->
<template>
	<view>
			<!-- 左边 -->
		<view class="ordering-fls">
			<view class="ordering-left">
				<block v-for="(item,index) in orderList" :key="index">
					<text :class="{leftRctiveord:index == num}" @click="clickOrderList(item,index)">{{item}}</text>
				</block>
			</view>
			
			<!-- 右边 -->
			<view class="ordering-right">
				<text class="ordering-right-title">盖浇饭</text>
				<view>
					<block v-for="(item,index) in classifarr" :key="index">
						<view class="content-view">
							<!-- 左边商品图片 -->
							<view class="content-img">
								<image mode="aspectFill" src="http://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public/uploads/1583591740906.png"></image>
							</view> 
							<!-- 右边商品 -->
							<view class="content-title">
								<text class="conteng-take"></text>
								<view class="conteng-monthly">
									<block>
									<text></text>
									</block>
								</view>
								<view class="conteng-starting">
									<text>月售10</text>
								</view>
								<view class="conteng-price">
									<view class="conteng-shi">¥10</view>
									<view class="conteng-hua">¥20</view>
									<view class="ordering-price">
										<image @click="reDuce()" v-if="showOrderOrNot" src="../../../static/coen/jianhao.png" mode="widthFix"></image>
										<text class="amounting">{{portion}}</text>
										<image @click="pLus()" src="../../../static/coen/jiahao.png" mode="widthFix"></image>
									</view>
								</view>
							</view>
						</view>
					</block>
				</view>
			</view>
		</view>
		
		<!-- 总价计算区域 -->
		<view class="total">
			<!-- 骑手 -->
			<view class="qishou">
				<image v-show="!showOrderOrNot" src="../../../static/coen/weigou.png" mode="widthFix"></image>
				<image v-show="showOrderOrNot" src="../../../static/coen/yigou.png" mode="widthFix"></image>
			</view>
			<!-- 多少量 -->
			<view class="Numbering">{{portion}}</view>
			<!-- 金额 -->
			<view class="total-dis">
				<view class="total-left">
					<view class="Cost-mony">
						<text class="Total-price">¥{{allPrice}}</text>
						<text class="Delivery">另需配送费{{delivery}}元</text>
					</view> 
				</view>
				<view class="total-right">
					<text>30元起送</text>，
					<text>还差元</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		 data(){
			 return {
				orderList:['盖浇饭','小吃','鸡鸭','小炒'],
				num:0,
				portion:0,
				price:10,
				delivery:2,
				showOrderOrNot:false,
				classifarr:[
					{
						
					}
				]
			 }
		 },
		 methods:{
			 clickOrderList(item,index){
				 this.num = index;
			 },
			 reDuce(){
				 this.portion = this.portion - 1;
				 if(this.portion <= 0){
					 this.portion = 0;
					 this.delivery = 0;
					 this.showOrderOrNot = false;
				 }
			 },
			 pLus(){
				 this.portion = this.portion + 1;
				 this.delivery = 2;
				 this.showOrderOrNot = true;
				 if(this.portion > 99){
					 this.portion = 99;
				 }
			 }
		 },
		 computed:{
			 allPrice(){
				return this.portion * this.price;
			 }
		 },
		 mounted() {
			 // 因为初始化页面订单份数为0，因此加载完页面没有点击加号或者减号进而并不会触发让其delivery为0
		 	this.reDuce()
		 }
	}
</script>

<style scoped>
	.ordering-fls{display: flex; justify-content: space-between;}
	/* 左边商品分类 */
	.ordering-left{width: 190upx; background: #F0F0F0;
	overflow-y: auto;
	height: 100%;
	}
	.ordering-left text{
	color: #a8a8a8;
	display: block;
	font-size: 28upx;
	height: 80upx;
	line-height: 80upx;
	text-align: center;}
	.leftRctiveord{background-color: #fafafa !important; font-weight: bold !important;}
	
	/* 右边 */
	.ordering-right{width: 100%;
	padding: 9upx 9upx 9upx 9upx;
	overflow: hidden;
	overflow-y: auto;
	}
	.ordering-right-title{font-size: 28upx;
	height: 60upx;
	line-height: 60upx;}
	
	.content-view{
	display: flex; justify-content: space-between;
	height: 200upx !important; overflow: hidden;
	margin: 30upx 0;
	color: #898989;
	}
	.content-img{width: 180rpx !important; height: 200rpx !important;
	overflow: hidden;
	}
	.content-img image{width: 100%; height: 100%; border-radius: 10upx;
	overflow: hidden;}
	.content-title{
	/* width: 100%; */
	padding-left: 10upx;
	font-size: 24upx;
	}
	
	.conteng-take{
	color: #333333;
	height: 50upx; font-size: 33upx;
	font-weight: bold;
	line-height: 50upx;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	overflow: hidden;}
	.conteng-monthly{display: flex;
	}
	.conteng-monthly text{background: #f1f1f1;
	margin-right: 9upx;
	padding: 4upx 13upx;
	border-radius: 7upx;
	display: block;
	}
	.conteng-starting{display: flex;
	align-items: center;
	height: 50upx;
	line-height: 50upx;}
	.conteng-price image{width: 60upx; height: 60upx;}
	.conteng-price{display: flex; align-items: center;width:346.32upx ;}
	.ordering-price{display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-right: 20upx;
	width: 100%;
	}
	/* 数量 */
	.amounting{
	width: 50upx;
	text-align: center;}
	.conteng-hua{text-decoration: line-through;font-size: 33upx;
	}
	.conteng-shi{color: #fb4e44; font-size: 33upx;
	width: 180upx;
	overflow: hidden;
	}
	
	/* 购物车 */
	.total{position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	}
	.total-left{
	height: 130upx;
	background: #000000; flex-grow: 2;
	border-top-left-radius: 50upx;
	border-bottom-left-radius: 50upx;
	}
	.total-right{
	height: 130upx;
	line-height: 130upx;
	font-size: 30upx;
	color: #7f7f7f;
	text-align: center;
	background: #000000; flex-grow: 1;
	border-top-right-radius: 50upx;
	border-bottom-right-radius: 50upx;}
	.total-dis{display: flex;
	height: 130upx;
	margin: 0 20upx;
	}
	.qishou{width: 120upx; height: 150upx;
	position: fixed;
	bottom: 0upx;
	left: 50upx;
	}
	.qishou image{width: 120upx; height: 150upx !important;}
	/* 定位 */
	.Delivery{color: #999999;
	font-size: 28upx;
	height: 65upx;}
	.total-left text{display: block;}
	.Total-price{font-size: 40upx; color: #FFFFFF;
	height: 65upx;
	line-height: 65upx;
	}
	.Cost-mony{padding-left: 170upx; color: #4CD964;
	height: 130upx;
	}
	/* 数量 */
	.Numbering{
	background: red;
	width: 40upx;
	height: 40upx;
	border-radius: 50%;
	font-size: 20upx;
	color: #FFFFFF;
	text-align: center;
	line-height: 40upx;
	position: fixed;
	bottom: 50upx;
	left: 130upx;}
	
	/* 选中菜品 */
	.shoppactive{background: #ffd300 !important;
	color: #000000 !important;}
</style>
