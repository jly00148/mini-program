<template>
	<view>
		<!-- 筛选区 -->
		<view class="prefer-posi">
			<view class="delica-view">
				<!-- 综合排序 -->
				<view class="delica-list delica-grow"  @click="multiple()">
					<text>{{synthesize}}</text>
					<image src="../../../static/coen/paixu.png" mode="widthFix"></image>
				</view>
				<view class="delica-grow">销量高</view>
				<view class="delica-grow">速度快</view>
				<view class="delica-grow">津贴联盟</view>
				<view class="delica-list delica-right">
					<text @click="choice()">筛选</text>
					<image src="../../../static/coen/shaixuan.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		
		<!-- 综合排序筛选:定位1。v-if="drop"是隐藏这部分不显示 -->
		<view class="sortlist sortliteltle" v-if="drop">
			<block v-for="(item,index) in sortlist" :key="index">
				<!-- sortClick(item.name,index)传递参数 -->
				<text :class="{activeb:index == num}" @click="sortClick(index,item.name,item.screen,item.nums)">{{item.name}}</text>
			</block>
		</view>
		
		<!-- 多个筛选区定位2 -->
		<view class="sortlist sortlist-view" v-if="sortmen">
			<!-- 多选：商家特色 -->
			<block v-for="(item,index) in screendata" :key="index">
				<view>
					<view class="sortlist-title">{{item.title}}</view>
					<view class="sortlist-flex">
						<block v-for="(itemdata,indexs) in item.datas" :key="indexs">
							<text class="Choice" :class="{scractive: itemdata.id === 1}" @click="choiceClick(itemdata.id,indexs,itemdata.sign)">{{itemdata.name}}</text>
						</block>
					</view>
				</view>
			</block>
			
			<!-- 单选：人均价 -->
			<block v-for="(item,index) in person" :key="index">
				<view>
					<view class="sortlist-title">{{item.title}}</view>
					<view class="sortlist-flex">
						<block v-for="(itemdata,indexs) in item.datas" :key="indexs">
							<text class="Choice" :class="{scractive:indexs === pnum}" @click="personClick(indexs,pnum,itemdata.per)">{{itemdata.name}}</text>
						</block>
					</view>
				</view>
			</block>
			
			<!-- 清空和完成选择 -->
			<view class="sortlist-bottom">
				<text @click="clearAllSelect()">清空</text>
				<!-- submitBtn：布尔值true是可以发送请求，反之禁止发送请求 -->
				<text @click="submitBtn && complete()" class="bgColor" :class="{btnSelectedColor:submitBtn}">完成{{judegeSelected}}</text>
			</view>
		</view>
		<view class="mask" v-if="mask" @click="hideMask">
		</view>
	</view>
</template>

<script>
	// 引入api接口和请求地址
	import allApi from '../../../api/api.js';
	import errMsg from '../../../api/errmsg.js';
	import { nearbyTakeOutRank,multipleurl } from '../../../api/request.js';
	
	export default{
		data(){
			return {
				drop:false,
				sortmen:false,
				mask:false,
				synthesize:'综合排序',
				num:0,
				pnum:-1,
				multiObj:{},
				// submitBtn值为false为禁止
				submitBtn:false,
				sortlist:[	
					{
						"name":"综合排序",
						"screen":"_id",
						"nums":1
					},
					{
						"name":"起送价最低",
						"screen":"delivering",
						"nums":1
					},
					{
						"name":"配送费最低",
						"screen":"physical",
						"nums":1
					},
					{
						"name":"人均高到低",
						"screen":"capita",
						"nums":-1
					},
					{
						"name":"人均低到高",
						"screen":"capita",
						"nums":1
					}					
				],
				
				// 多选
				screendata:[
					{
						"title":"商家特色(可多选)",
						"datas":[
							{
								"id":0,
								"sign":'duration',
								"name":'配送最快'
							},
							{
								"id":0,
								"sign":'deliver',
								"name":'0元起送'
							},
							{
								"id":0,
								"sign":'physi',
								"name":'免配送费'
							}
						],
					}		
				],
				// 人均价筛选
				person:[
					{
						"title":"人均价格",
						"datas":[
							{
							"name":"20元以下",
							"per":{
								"$lt":20
								},
							},
							{
							"name":"20-40元",
							"per":{
								"$lte":40,
								"$gte":20
								},
							},
							{
							"name":"40元以上",
							"per":{
								"$gt":40
								},
							},
						]
					}
				]			
			}
		},
		methods:{
			// 点击最左方的综合排序显示或者隐藏蒙版
			multiple(){
				if(this.drop){
					this.drop = false;
					this.mask = false;
				}else{
					this.drop = true;
					this.mask = true;
					this.sortmen = false;
				}
			},
			// 点击最有方筛选显示或者隐藏蒙版
			choice(){
				if(this.sortmen){
					this.sortmen = false;
					this.mask = false;
				}else{
					this.sortmen = true;
					this.mask = true;
					this.drop = false;
				}

			},
			// 点击蒙版隐藏蒙版
			hideMask(){
				this.mask = false;
				this.drop = false;
				this.sortmen = false;
			},
			
			// 选好综合排序后自动隐藏蒙版(screen,nums是商家排序需要的参数)
			sortClick(index,name,screen,nums){
				// 综合排序替换
				this.synthesize = name;
				this.num = index;
				this.drop = false;
				this.mask = false;
				this.sortmen = false;
				
				const data = {
					screen,
					nums
				}
				
				// 调用api返回按照条件排序的数据
				allApi(nearbyTakeOutRank,'POST',data)
				.then(result=>{
					// 	存储到vuex数据仓库(store/store.js)
					this.$store.commit('screenmuta',result[1].data)
				})
				.catch(err=>{
					console.log(err)
				})
			},
			
			// 多选商家特色
			choiceClick(id,indexs,sign){
				// console.log(this.screendata[0].datas[id].id)
				if(id === 1){
					// 让其不选中
					this.screendata[0].datas[indexs].id = 0;
					
					// 选中后又选择选择取消选中
					this.$delete(this.multiObj,sign);
				}else{
					
					// 让其选中
					this.screendata[0].datas[indexs].id = 1;
					
					// this.$set()：往传递数据对象里添加属性，添加后的对象是例如：
					// {
						// "a":a,
						// "b":b,
					// }
					
					// 选中
					this.$set(this.multiObj,sign,sign);
				}
			},
			
			// 选择人均价
			personClick(indexs,pnum,per){
				if(indexs === pnum){
					// 不选中
					this.pnum = -1;
					
					// 从对象里删除
					this.$delete(this.multiObj,'capita');
				}else{
					// 选中
					this.pnum = indexs;
					// 添加到对象
					this.$set(this.multiObj,'capita',per);
				}
			},
			
			// 清空选择
			clearAllSelect(){
				this.$delete(this.multiObj,'capita');
				this.$delete(this.multiObj,'deliver');
				this.$delete(this.multiObj,'duration');
				this.$delete(this.multiObj,'physi');
				
				this.sortClick(0,"综合排序","_id",1)
				
					for(var i = 0;i<this.screendata[0].datas.length;i++){
						this.screendata[0].datas[i].id = 0;
					}
				this.pnum = -1;
			},
			
			// 选择完后点击完成发送请求
			complete(){
				allApi(multipleurl,'POST',this.multiObj)
				.then(result=>{
						this.$store.commit('screenmuta',result[1].data)
				})
				.catch(err=>{
					errMsg.errlist('服务器错误，请稍后再试！');
				})
				this.sortmen = false;
				this.mask = false;
			}
		},
		computed:{
			judegeSelected(){
				// 判断是对象是否为空
				// 对象为空
				if(JSON.stringify(this.multiObj) == '{}'){
					this.submitBtn = false;
				}else{
				// 对象不为空
					this.submitBtn = true;
				}
				
			}
		}
	}
</script>

<style scoped>
	/* 筛选区 */
	.delica-view image{width: 30upx; height: 30upx; display: block;
		}
	.delica-view{
	width: 702upx;
	font-size: 30upx; display: flex; align-items: center;
	margin: 0 auto;
	color: #666666;
	height: 70upx;
	background-color: #F1F1F1;
	} 
	.delica-list{display: flex; align-items: center;width: 180upx;
	}
	.delica-right{justify-content: flex-end; flex-grow: 5;}
	.delica-grow{flex-grow: 1;}
	.prefer-posi{position: absolute; left: 0; right: 0;
		width: 100%;
		z-index: 99;}
	/* 排序 */

	.sortlist{
		background: #ffffff;
		position: relative;
		top: 70upx;
		border-bottom: 1rpx solid #ededed;
		z-index: 99;
		border-radius: 10upx;
	}
	.sortliteltle text{
		padding: 0 25upx;
		display: block;
		font-size: 1%;
		height: 70upx;
		line-height: 70upx;
		border-top: 1rpx solid #ededed;
	}
	.activeb {
		color: #f89903 !important;
	}
	/* 选择 */
	/*相对定位*/
	.sortlist-view{height: 700upx; overflow: hidden;
	overflow-y: scroll;
	position: relative;
	top:70upx;
	}
	.sortlist-title{padding: 0 15upx;
	font-size: 30upx;
	height: 60upx;
	line-height: 60upx;}
	.Choice{font-size: 28upx; background: #f8f8f8;
	height: 55upx;
	line-height: 55upx;
	color: #666666;
	width: calc((100% / 3) - 15px) !important;
	margin: 7.5px;
	text-align: center;
	display: block;
	border-radius: 5upx;
	}
	.sortlist-flex{
		display: flex; flex-wrap: wrap;
		align-items: center;
		margin-bottom: 30upx;
	}
	.sortlist-bottom{background: #ffffff; height: 80upx;
	border: 1upx solid #e4e4e4;
	display: flex; justify-content: space-around;
	align-items: center;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;}
	.sortlist-bottom text{flex-grow: 1; height: 80upx;
	line-height: 80upx;
	text-align: center;}
	.bgColor{background: #F1F1F1;}
	.btnSelectedColor{background: #FFD100!important;}
	.mask{background: rgba(0,0,0,0.3); position: fixed; top: 0; left: 0; right: 0; bottom: 0;z-index: 1;}
	/* 商家特色加样式 */
	.scractive{background: #fef6df !important; color: #f29909 !important;}

</style>
