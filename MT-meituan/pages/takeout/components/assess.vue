<!-- 评论 -->
<template>
	<view class="message-view">
		<!-- 分类 -->
		<view v-if="!showAndHide">
			<view class="menu-block">
				<block v-for="(item,index) in tabmessage" :key="index">
					<view :class="{activetext: index == num}" @click="menubtn(index,item)">{{item}}</view>
				</block>	
			</view>
			
			<!-- 用户评价 -->
			<block v-for="(item,index) in leaveword" :key="index">
				<view class="message-dist">
					<view class="users-message">
						<view class="cont-name">
							<image :src="item.avatarUrl" mode="widthFix"></image>	
							<text>{{item.nickName}}</text>
						</view>
						<!-- 时间 -->
						<view class="message-time">
							{{item.time}}
						</view>
					</view>	
					<view class="cont-name-text">
						<text>{{item.usermess}}</text>
					</view>
				</view>
			</block>
		</view>
		<Tips v-if="showAndHide" :tipText="tipText"></Tips>
	</view>
</template>

<script>
	import Tips from '../../../tips/tips.vue';
	
	export default{
		components:{
			Tips:Tips
		},
		props:{
			messagedata:Array,
			sonComponentClassIndex:Number
		},
		data(){
			return {
				num:0,
				tabmessage:[
				],
				leaveword:[
				],
				showAndHide:false,
				tipText:'暂时没有人对此商家评论'
			}
		},
		watch:{
			messagedata(newValue,oldVlue){
				// 没有评论
				if(newValue.length == 0){
					this.showAndHide = true;
				}
				// 一：处理评论
				let leaveword = newValue.map(item=>{
					return item.messagedata
				})
				this.leaveword = leaveword;
				
				// --------------------------------------------------------------------------------
				
				// 二：处理标签(标签去重和去空值)：
				
				// 1.提取标签(空标签不会被筛选出来)
				let messageWord = newValue.map(item=>{
					return item.classmessage
				})
				
				// 2.标签去重(比如两个相同的标签：味道不错)
				let newarr = Array.from(new Set(messageWord))
				
				// 3.标签去空值(比如评论为感叹号或者句号而分不出好评差评的的时候回返回空字符串，不去除空标签的话会显示在评论区)
				var newArr = newarr.filter(item=>item)
				
				// 这一步说明：页面初始化加载完成后就会全部显示标签的分类的，当点其他标签时并不会覆盖this.tabmessage,达到更改评论分页即可
				if(this.sonComponentClassIndex == 0){
					// 4.数组合并(评价分类：速度快、味道...)
					this.tabmessage = ['全部',...newArr]
				}
			}
		},
		methods:{
			// 点击评论分类切换css和发送请求
			menubtn(index,item){
				this.num = index;
				this.$parent.assessClassMethod(index,item)
			}
		}
	}
</script>

<style scoped>
	.message-view{margin: 0 20upx 100upx 20upx;}
	.activetext{color: #4CD964; background: #ffdd00 !important; border: 1px solid #ffdd00 !important;}
	.menu-block view {
		background: #ffffff;
		border: 1px solid #c2c5cc;
		border-radius: 6upx;
		font-size: 25upx;
		color: #292c33;
		font-weight: bold;
		text-align: center;
		padding: 15upx;
		margin: 10upx 15upx 5upx 0;
	}
	
	.menu-block {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		/* margin-bottom: 20upx; */
	}
	/* 评价 */
	 .users-message{display: flex; justify-content: space-between; height: 50upx; align-items: center; margin-bottom: 15upx;}
	 .message-time{font-size: 25upx; color: #a8a8a8;}
	 .cont-name image{width: 50upx !important; height: 50upx !important; border-radius: 50%; margin-right: 9upx;}
	 .cont-name text{font-size: 30upx; color: #a8a8a8;}
	 .cont-name{display: flex; align-items: center; height: 50upx;}
	 .cont-name-text text{font-size: 27upx; color: #333333; line-height: 1.5;
	 display: -webkit-box;
	 -webkit-box-orient: vertical;
	 -webkit-line-clamp: 2;
	 overflow: hidden;}
	 .message-dist{margin-top: 30upx; border-bottom: 1rpx solid #f8f8f8;
	 padding-bottom: 25upx;}
	 /* 没有评价 */
	 .claenpty{font-size: 30upx; color: #cccccc; text-align: center;
	 padding-top: 40upx;}	
</style>