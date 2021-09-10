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
								
								<!-- <image mode="aspectFill" :src="item.image"></image> -->
								<u-lazy-load :image="item.image" mode="aspectFill"></u-lazy-load>
								
							</view> 
							<!-- 右边商品 -->
								<view class="content-title">
									<text class="conteng-take">{{item.input}}</text>
									<view class="conteng-monthly">
										<block v-for="(tagItem,index) in item.tags" :key="index">
											<text>{{tagItem}}</text>
										</block>
									</view>
									<view class="conteng-starting">
										<text>月售10</text>
									</view>
									<view class="conteng-price">
										<view class="conteng-shi">¥{{item.Discount}}</view>
										<view class="conteng-hua">¥{{item.Price}}</view>
										<view class="ordering-price">
											<image 
												src="../../../static/coen/jianhao.png" 
												mode="widthFix" 
												@click="reduce(
													item.amount,
													index,
													item.id,
													-1,
													item.Discount,
													item.image,
													item.input
												)"
											>
											</image>
												<text class="amounting">{{item.amount}}</text>
											<image 
											src="../../../static/coen/jiahao.png" 
											mode="widthFix" 
											@click="add(
												item.amount,
												index,
												item.id,
												1,
												item.Discount,
												item.image,
												item.input
											)"
											></image>
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
				<image src="../../../static/coen/weigou.png" v-show="showOrHide" mode="widthFix"></image>
				<image src="../../../static/coen/yigou.png" v-show="!showOrHide" mode="widthFix"></image>
			</view>
			<!-- 多少量 -->
			<view class="Numbering">{{allNums}}</view>
			<!-- 金额 -->
			<view class="total-dis">
				<view class="total-left">
					<view class="Cost-mony">
						<text class="Total-price">¥{{eachCounts}}</text>
						<text class="Delivery">另需配送费{{initBottomData.delivering}}元</text>
					</view> 
				</view>
				<view class="total-right">
					<text class="capita">{{initBottomData.capita}}元起送</text>
					<text>还差{{priceDifer}}元</text>
				</view>
				<view class="pay" :class="{changePayClsss:changePayClsss==true}" @click="settleMent()">
					<text>总计:{{payMoney}}</text>
				</view>				
			</view>
		</view>
		<!-- 弹出登录提示框 -->
		<modal ref="mod"></modal>
		
		<!-- loading -->
		<homeload v-if="loadingload"></homeload>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	import modal from '../../../modal/modal.vue'
	
	export default{
		components:{
			modal
		},
		props:{
			orderingdata:Array,
			busidata:Array
		},
		 data(){
			 return {
				 // 左边分类
				orderList:[],
				
				// 点击左边分类后右边展示的数据
				newRightArr:[],
				
				// 初始化使其显示分类的盖浇饭部分
				leftItemChange:'盖浇饭',
				
				// 初始化使其第一项(点菜)添加css
				num:0,
				
				delivering:0,
				physical:null,
				capita:null,
				
				// 一种菜品的单价x份数(初始值为0)
				eachCounts:0,
				
				// 点击添加或者减少把数组存入数组
				allOrderPrice:[],
				
				// 当选择的份数是否为0切换图片
				showOrHide:true,
				
				// 显示的总份数
				allNums:0,
				
				// 满足起送价改变颜色
				changePayClsss:false,
				
				// 总价包括运送费+食物价格
				payMoney:0,
				
				// 商家名字
				shopname:null,
				
				// 商家logo
				logo:null,
				
				// 商家标识
				merchantId:null,
				
				// 去重后的数组
				uniqueArr:[{}],
				
				// loading控制
				loadingload:true
				
			 }
		 },
		 methods:{
			 // 点击上边相应切换点菜。评价等商家
			clickOrderList(item,index){
				
				// 点击切换左边(点菜、评论以及商家)的分类添加样式
				this.num = index;
				
				// 右边切换相应的分类(比如盖浇饭、小吃等等小词条)
				this.leftItemChange = item;
				
				// 将词条传递给rightItemChange函数，方便watch监听数据变化后立即有个默认的数据展示，
				// 没有用mounted原因是mounted在watch执行之前，获取不到watch监听的数据，所以在watch监听数据变化后
				// 立即调用rightItemChange函数
				this.rightItemChange(item);
			},
			// 点击左边相应切换右边
			rightItemChange(item){
				var newRightarr = [];
				
				// nums值是点击加号或者减号产生的份数,给数组this.orderingdata中的每个对象添加一个属性amount,值为nums,0意味初始化点餐份数为0
				var nums = 0;
				for(var i = 0;i<this.orderingdata.length;i++){
					
					this.orderingdata[i].objdis.amount = nums;
					this.orderingdata[i].objdis.id = this.orderingdata[i]._id;
					// 点击左边并且把item参数(盖浇饭小吃等)传进来和this.orderingdata[i].optidata是否相等去重相关多余的(左边)
					if(this.orderingdata[i].optidata == item){
						newRightarr.push(this.orderingdata[i].objdis)
					}
				}
				this.newRightArr = newRightarr;
			},
			// 点击+号增加份数
			// 点击左边和页面初始化共通调用函数
			clickOrInitLoad(newValue){
				let classifdata = newValue.map(item=>{
					// 将数组中的对象下的optidata属性对象返回成一个新数组
					return item.optidata;
				})
				// 左边分类去重
				this.orderList = Array.from(new Set(classifdata))
				
				
				this.rightItemChange(this.orderList[0])
				// 立即调用rightItemChange函数使其默认展示默认第一的数据
				
				this.leftItemChange = this.orderList[0]
			},
			// initBottomData(delivering,physical,capita){
			// 	this.delivering = delivering;
			// 	this.physical = physical;
			// 	this.capita = capita;
			// },
			add(amount,index,id,state,price,image,input){
				this.addOrReduce(amount,index,id,state,price,image,input)
				// 方法一：更改this.newRightArr[index].amount中的amount值;
				// 限制购买10份：
				// amount < 10 ? amount++ : amount = 10;
				// this.newRightArr[index].amount = amount;
				// var findArr = this.newRightArr.map(item=>{
				// 	return item;
				// })
				// 注意点：必需要有一个新数组赋值给this.newRightArr，直接在this.newRightArr中更改无效
				// this.newRightArr = findArr;
				
				// ----------------------------------------------------------------------------------------------------------
				
				// 方法二：需要在add中传递参数amount和input值
				// 	let findArr = this.newRightArr.filter(item=>{
				// 		if(item.input == input){
				// 			if(amount < 0){
				// 				return item.amount = 0;
				// 			}else{
				// 				return item.amount = amount+1;
				// 			}
				// 		}
				// 	})
				// 	this.newRightArr = findArr;
			},
			// 点击-号减少份数(与点击增加相同，可以封装一个函数：addOrReduce)
			reduce(amount,index,id,state,price,image,input){
				this.addOrReduce(amount,index,id,state,price,image,input)
				// 防重复点击：
				// if(amount == this.clickReduce){
				// 	return;
				// }else{
				// 	this.clickReduce = 
				;
				// }
				// // 判断份数是否为0
				// amount <= 0 ? amount = 0  : amount--;
				// this.newRightArr[index].amount = amount;
				// var findArr = this.newRightArr.map(item=>{
				// 	return item;
				// })
				// this.newRightArr = findArr;
				
			},
			// 封装点击增加和减少函数
			addOrReduce(amount,index,id,state,price,image,input){
				/*
				*state=1 点击的是增加
				*state：-1 点击的是减少
				*/
			   
			   // 点的是加号
				if(state == 1){
					amount++;
					
					//份数x单价:
					// parseFloat() 函数可解析一个字符串(这里传的是数字也可以)，并返回一个浮点数，浮点数有toFixed方法，保留小数点后几位
					var TotalPrice = parseFloat(amount*price).toFixed(2);
					
// =======================================================点击+号把商品的信息存放到对象并且去重push到数组中======================================
					// 定义的空对象：放点击或者删除后生成的数据存入该对象
					const deleteObjInArr = {
						TotalPrice,
						id,
						amount,
						image,
						input,
						price
					};
					
					this.allOrderPrice.push(deleteObjInArr);
					
					let newAllOrderPrice =  this.allOrderPrice.map(item=>{
						return item.id == id ? deleteObjInArr : item;
					})
					this.allOrderPrice = newAllOrderPrice;
					
					
// =====================================================================点击+号结尾=============================================================
				}else{
					/*	备注：
						*点的是-号
						*减少数量amount不能小于0
					*/
					// 判断amount是否小于0
					amount < 1 ? amount = 0 : amount--;
					
					var TotalPrice = amount * price
					
// =======================================================点击-号把商品的信息存放到对象并且去重push到数组中======================================
					
					// 定义的空对象：放点击或者删除后生成的数据存入该对象
					const deleteObjInArr = {
						TotalPrice,
						id,
						amount,
						image,
						input,
						price
					};
					
					this.allOrderPrice.push(deleteObjInArr);
					
					let newAllOrderPrice =  this.allOrderPrice.map(item=>{
						return item.id == id ? deleteObjInArr : item;
					})
					this.allOrderPrice = newAllOrderPrice;
// ================================================================点击-号结尾===================================================================
				}
				
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++加减公共部分++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
					// 
					// 点的商家里的第几个商品,将其属性amount并且属性值改为amount经过计算后的赋值
					this.newRightArr[index].amount = amount;
					
					// 变更amount后重新遍历数组返回新的数组findArr
					var findArr = this.newRightArr.map(item=>{
						return item;
					})
					
					// 遍历完成后赋值给 this.newRightAr,然后遍历到内容中
					this.newRightArr = findArr;
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++公共部分++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			},
			
			// 去结算
			settleMent(){
				// 支付框为灰色禁止支付
				if(this.changePayClsss == false){
					return;
				}else{
					let setdata = uni.getStorageSync('usermen')
					if(setdata){
						// 有本地缓存代表用户已登录，去支付,支付传的参数
						
						/*	
							-参数一一对应以下-
							
							* 商品的总价
							* 配送费
							* 用户openid
							* 商家标识
							* 商家logo
							* 点的商品个数
							* 商家标识
							* 点餐需要渲染的数据
						*/
					   let orderList = {
						   payment:this.eachCounts,
						   delivering:this.delivering,
						   openid:setdata.openid,
						   shopname:this.shopname,
						   logo:this.logo,
						   allNums:this.allNums,
						   merchantId:this.merchantId,
						   uniqueArr:this.uniqueArr
					   }
					   
					   let orderListString = JSON.stringify(orderList)
					   
					   uni.navigateTo({
						   /*注意点：
							*1.路径带参数不能带对象、数组，只能带字符串
							*2.非tabBar页面可以通过绝对路径进行页面的跳转
							*3.跳转tabBar页面，需要uni.switchTab进行跳转
							*4.传递参数必需是字符串
						   */
						  
						   url:'/pages/placeorder/placeorder?ide=' + orderListString
					   })
					   
					}else{
						// 反之未登录，需要弹出模拟登录框
						this.$nextTick(()=>{
							this.$refs.mod.showOrHide = true
						})
					}
				}
			}
		 },
		 watch:{
			// 用户进入页面默认展示第一个tab键上(盖浇饭),并且展示第一个tab键下的内容
			orderingdata(newValue){
				this.clickOrInitLoad(newValue)
				this.loadingload = false;
			},
			
			// 监听allOrderPrice
			allOrderPrice(){
				// 监听总价
				 // 数组对象去重：累加器reduce()
					let testObj = {}
					let uniqueArr = this.allOrderPrice.reduce((pre,cur)=>{
						// console.log(pre)
						// console.log(cur)
						
						// 下面中三元判断说明：
						// 1).? '' 代表testObj对象中能找到index的值，不需要push到数组中的，因此不做任何改变保持原样
						// 2:testObj[cur.index] = true 代表testObj不能找到index的值，因此需要push到数组中testObj[cur.index] = true &&
						
						// 方法一：testObj[cur.id] ? '' :  testObj[cur.id] = true && pre.push(cur)
						// 方法二：(判断重复也是不变的上次pre，一下是push改变后的pre)
						if(!testObj[cur.id]){
							testObj[cur.id]=cur.id;
							pre.push(cur)
						}
						return pre;
		
					},[])
					
					this.uniqueArr = uniqueArr;
					
					// ------------------------------------------------------------------------------------------------------------------------
					// 为获取最终结果预设的值
					var temp = 0;
					
					// 外卖旗手旁边的累计数
					var allNums = 0;
					
					// 计算商品总价：
					for(var i = 0;i<uniqueArr.length;i++){
						temp = temp + Number(uniqueArr[i].TotalPrice)
						allNums = allNums + Number(uniqueArr[i].amount)
					}
					
					// 只赋值最终结果,浮点数修正(toFixed(1)参数1代表保留的小数点后1位)
					this.eachCounts = parseFloat(temp).toFixed(1);
					
					//每种商品选择的份数总和
					this.allNums = allNums;
					
					if(parseFloat(this.eachCounts) == 0){
						
						// 当价格为0时，显示不保留的小数点后几位
						this.eachCounts = 0;
						
						// 所有商品选择份数为0时显示的图片
						this.showOrHide = true;
					}else{
						// 所有商品选择份数不为0时显示的图片
						this.showOrHide = false;
					}
			}
		 },
		 computed:{
			 ...mapState(['screendata']),
			 
			 priceDifer(){
				 // 差价allPrice
				let allPrice = parseFloat(Number(this.capita) - Number(this.eachCounts)).toFixed(1);
				
				// 差价为0时令其差价为0
				if(allPrice <= 0){
					allPrice=0
					// 黄色
					this.changePayClsss=true
				}else{
					// 灰色
					this.changePayClsss=false
					this.allMoneys = false;
				}
				
				this.eachCounts = Number(this.eachCounts);
				this.delivering = Number(this.delivering);
				
				this.payMoney = parseFloat(this.eachCounts + this.delivering).toFixed(1);
				this.payMoney == this.delivering ? this.payMoney = 0 : ''
				return allPrice;
			 },
			 
			 initBottomData(){
				 const { delivering='',physical='',capita='', shop,logo,openid} = this.screendata.busidataarr[0];
				 const  initBottomDataObj = {
					 delivering:delivering,
					 physical:physical,
					 capita:capita
				 }
				 this.delivering = delivering;
				 this.physical = physical;
				 this.capita = capita;
				 this.shopname = shop;
				 this.logo = logo;
				 this.merchantId = openid;
				 
				 return initBottomDataObj;
			 }
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
	.total-dis{
		display: flex;
		height: 130upx;
		margin: 0 20upx;
	}
	.total-left{
		flex-grow: 1;
		height: 130upx;
		background: #000000; 
		border-top-left-radius: 50upx;
		border-bottom-left-radius: 50upx;
	}
	.total-right{
		display: flex;
		width: 200upx;
		flex-wrap: wrap;
		flex-grow: 1;
		height: 130upx;
		line-height: 130upx;
		font-size: 30upx;
		color: #7f7f7f;
		text-align: center;
		background: #000000; 
	}
	.total-dis text{
		font-size: 25upx;
	}
	.total-right .capita{
		color: #FFD100;
	}
	.pay{
		width: 100upx;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		flex-grow: 1;
		border-top-right-radius: 50upx;
		border-bottom-right-radius: 50upx;
		background-color: grey;
		align-items: center;
	}
	.changePayClsss{
		background-color: #FFD100 !important;
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
	height: 100upx;
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