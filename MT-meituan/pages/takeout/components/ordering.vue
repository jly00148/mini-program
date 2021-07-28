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
				<text class="ordering-right-title">{{leftItemChange}}</text>
				<view>
					<block v-for="(item,index) in newRightArr" :key="index">
						<view class="content-view">
							<!-- 左边商品图片 -->
							<view class="content-img">
								<image mode="aspectFill" :src="item.image"></image>
							</view> 
							<!-- 右边商品 -->
								<view class="content-title">
									<text class="conteng-take">{{item.input}}</text>
									<view class="conteng-monthly">
										<block v-for="(tagItem,index) in item.tags" key="index">
											<text>{{tagItem}}</text>
										</block>
									</view>
									<view class="conteng-starting">
										<text>月售10</text>
									</view>
									<view class="conteng-price">
										<view class="conteng-shi">¥{{item.Price}}</view>
										<view class="conteng-hua">¥{{item.Discount}}</view>
										<view class="ordering-price">
											<image src="../../../static/coen/jianhao.png" mode="widthFix" @click="reduce()"></image>
												<text class="amounting">{{amounting}}</text>
											<image src="../../../static/coen/jiahao.png" mode="widthFix" @click="add(item.Price)"></image>
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
				<image src="../../../static/coen/weigou.png" mode="widthFix"></image>
				<image src="../../../static/coen/yigou.png" mode="widthFix"></image>
			</view>
			<!-- 多少量 -->
			<view class="Numbering"></view>
			<!-- 金额 -->
			<view class="total-dis">
				<view class="total-left">
					<view class="Cost-mony">
						<text class="Total-price">¥</text>
						<text class="Delivery">另需配送费元</text>
					</view> 
				</view>
				<view class="total-right">
					<text>30元起送</text>
					<text>还差元</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			orderingdata:Array
		},
		 data(){
			 return {
				orderList:[],
				newRightArr:[],
				num:0,
				leftItemChange:'盖浇饭',
				// 防重复点击
				clickState:0,
				// 总价格
				amounting:null
			 }
		 },
		 methods:{
			clickOrderList(item,index){
				// 防重复点击
				if(index == this.clickState){
					return;
				}else{
					this.clickState = index;
				}
				
				// 点击切换左边的分类添加样式
				this.num = index;
				
				// 右边切换相应的分类(比如盖浇饭、小吃等等词条)
				this.leftItemChange = item;
				
				// 将词条传递给rightItemChange函数，方便watch监听数据变化后立即有个默认的数据展示，
				// 没有用mounted原因是mounted在watch执行之前，获取不到watch监听的数据，所以在watch监听数据变化后
				// 立即调用rightItemChange函数
				this.rightItemChange(item);
			},
			rightItemChange(item){
				var newRightarr = [];
				for(var i = 0;i<this.orderingdata.length;i++){
					if(this.orderingdata[i].optidata == item){
						newRightarr.push(this.orderingdata[i].objdis)
					}
				}
				
				this.newRightArr = newRightarr;
			},
			add(price){
				this.amounting = price
			}
		 },
		 watch:{
			// 用户进入页面默认展示第一个tab键上(盖浇饭),并且展示第一个tab键下的内容
			orderingdata(newValue){
				let classifdata = newValue.map(item=>{
					return item.optidata;
				})
				
				// 左边分类去重
				this.orderList = Array.from(new Set(classifdata))
				
				// 调用rightItemChange函数使其默认展示盖浇饭的数据
				this.rightItemChange(this.leftItemChange)
			}
				
			
		 },
		 mounted() {
			 
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
