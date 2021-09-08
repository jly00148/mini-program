<template>
	<view>
		<view class="search-cont">
			
			<!-- 			
				<view class="search">
				<input 
				type="text"
				focus="true"
				confirm-type="search"
				v-model="keyword"
				@confirm="onKeyInput"
				placeholder="请输入关键字"
				/>
				<view class="search-code" @click="searchBtn()">
					搜索
				</view>
			</view> -->
			<u-search
				@confirm="onKeyInput"
				placeholder="请输入关键字"
				v-model="keyword" 
				class="search"
				shape="square"
				:show-action="true"
				@custom="custom(keyword)"
				action-text="搜索" 
				:animation="false"
				>
			  </u-search>
	
		</view>
		
		<!-- 搜索历史 -->
		<view class="search-history">
			<view class="search-title">
				<view>搜索历史</view>
				<image src="../../static/coen/searchend.svg" mode="widthFix" @click="clearSearchHistory()"></image>
			</view>
			<!-- tab -->
			<view class="menu-block">
				<block v-for="(items,index) in searchHistory" :key="index">
					<view class="menu-block-items" @click="clickHistory(items)"><view>
						{{items}}
					</view></view>
				</block>
			</view>
		</view>
		
		
		<!-- 内容展示 -->
		<view class="content-left">
			<view class="empty" v-show="showEmptyResult">
				<!-- <Tip :tipText="tipText" ref="tips"></Tip> -->
			</view>
			<block v-for="(items,index) in searchResult" :key="index">
				<view class="content-view"  v-show="!showEmptyResult" @click="choiceShop(items.openid)">
					<view class="content-img">
						<!-- <image :src="items.logo" mode="aspectFill" class="img"></image> -->
						<u-lazy-load :image="items.logo" threshold="-100"></u-lazy-load>
					</view>
					<view class="content-title">
						<text class="conteng-take">{{items.shop}}</text>
						<view class="conteng-monthly">
							<text>月售200</text>
							<text>约{{items.duration}}分钟</text>
						</view>
						<view class="conteng-starting">
							<text>起送{{items.delivering}}¥</text>
							<text>配送{{items.physical}}¥</text>
							<text>人均{{items.capita}}¥</text>
						</view>
						<view class="conteng-starting">
							<image src="../../static/coen/liwu.svg" mode="widthFix" class="img"></image>
							<text class="text">类型：{{items.types}}</text>
						</view>
					</view>
				</view>
			</block>
		</view>
		
		<!-- 反馈组件 -->
		<u-empty text="搜索商家列表为空" mode="list" v-show="showEmptyResult"></u-empty>
	</view>
</template>

<script>
	import allApi from '../../api/api.js';
	import { srarchUrl } from '../../api/request.js';
	import Tip from '../../tips/tips.vue';
	
	export default {
		components:{
			Tip:Tip
		},
		
		data() {
			return {
				keyword:'',
				searchHistory:[],
				searchResult:[],
				showEmptyResult:false,
				tipText:''
			}
		},
		methods: {
			custom(keyword){
				this.searchData(this.keyword)
			},
			// 一：点击右边搜索触发搜索
			// searchBtn(){
			// 	//获取搜索框输入的关键字：this.searchdata 双向数据绑定
			// 	this.searchData(this.searchdata)
			// },
			
			// 二：不点击右边搜索按钮，按回车键触或者手机键盘完成键盘触发搜索
			onKeyInput(e){
				//  获取搜索框输入的关键字：e.detail.value
				this.searchData(e.detail.value)
			},
			
			searchData(keyWord){
				// 输入搜索关键字后使其输入框清空;
				this.searchdata = '';
				
				// 三L:判断是否为空字符串,是的话停止执行 (一个或多个空格键)
				if(keyWord.trim() === ''){
					return;
				}
				
				// 四：同步存储
				this.handleStorage(keyWord);
				
				var data = {
					searchdata:keyWord
				}
				allApi(srarchUrl,'POST',data)
				.then(result=>{
					// 未搜索到目标
					if(typeof result[1].data === 'string'){
						/*
							this.tipText = '未搜索到'; 注销掉，现在使用的是uVidw UI框架搭建
						*/
					   this.showEmptyResult = true;
					   this.searchResult = [];
						
						// 记住：
						// this.$refs.tips:获取组件
						// this.$refs.tips.init()调用组件上的方法
					}else{
					// 搜索到目标
						this.showEmptyResult = false;
						this.searchResult = result[1].data;
					}
				})
				.catch(err=>{
					console.log(err)
				})
			},
			handleStorage(storageWord){
				// 五：获取local storege中存储的数组，没有的话设置为空数组
				let localArr = uni.getStorageSync('search_key') || [];
				
				// 六：将搜索的关键字存入数组
				localArr.unshift(storageWord);
				
				// 七：数组去重：不加Array.from方法返回的对象
				const newLocalArr = Array.from(new Set(localArr)) 
				
				// 八：让获取的数组等于this.searchHistory，输入搜索即可出现搜索历史记录
				this.searchHistory = newLocalArr;
				
				// 九：数组存入本地storage
				uni.setStorageSync('search_key',newLocalArr);
			},
			
			// 清除本地缓存
			clearSearchHistory(){
				// 清除本地缓存
				uni.removeStorageSync('search_key');
				
				// 删除搜索记录，令其等于空数组
				this.searchHistory = [];
				
				this.showEmptyResult = false;
			},
			
			// 点击搜索记录再次搜索
			clickHistory(items){
				// 使其再回到输入框内
				this.keyword = items;
			},
			choiceShop(shopOpenid){
				uni.navigateTo({
					//openid在/pages/takeout/takeout页面内用onload接收
					url:'/pages/takeout/takeout?openid=' + shopOpenid
				})
			}
		},
		mounted(){
			// 页面一加载即从本地获取搜索存入的关键字
			this.searchHistory = uni.getStorageSync('search_key') || [];
		}
	}
	

</script>

<style>
	@import "../../common/meituan.css";
	.empty{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.content-left{margin: 0 20upx;}
	.search{
		background-color: #f2f2f2;
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		border-radius: 20upx;
		margin-left: 20upx;
		margin-right: 20upx;
		}
	.search input{
			height: 70upx;
			line-height: 70upx;
			width: 100%;
			font-size: 30upx;
			color: #666666; 
			padding-left: 30upx;
			  } 
	.search-cont{display: flex; justify-content: space-between; height: 70upx; align-items: center;
				padding: 30upx 0;
				margin-top: 20upx;
				}
	.search-code{width: 150upx; height: 50upx; text-align: center; font-size: 30upx;}
	/* 搜索历史 */
	.search-history{margin: 20upx;}
	.search-title{font-size: 30upx; font-weight: bold;
				display: flex;
				justify-content:space-between;
				align-items: center;
				height: 60upx;
				line-height: 60upx;}
	.search-title image{width: 36upx; height: 36upx; display: block;}
	.menu-block-items{
		display: flex;
		justify-content: center;
		background: #f7f8fa;
		border-radius: 6upx;
		font-size: 27upx;
		color: #292c33;
		text-align: center;
		padding: 10upx;
		margin: 10upx;
	}
	
	.menu-block {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		overflow: hidden;
	}
</style>
