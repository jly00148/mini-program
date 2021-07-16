<template>
	<view>
		<view class="search-cont">
			<view class="search">
				<input 
				type="text"
				focus="true"
				confirm-type="search"
				v-model="searchdata"
				@confirm="onKeyInput"
				placeholder="请输入关键字"
				/>
			</view>
			<view class="search-code" @click="searchBtn()">
				搜索
			</view>
		</view>
		
		<!-- 搜索历史 -->
		<view class="search-history">
			<view class="search-title">
				<view>搜索历史</view>
				<image src="../../static/coen/searchend.svg" mode="widthFix"></image>
			</view>
			<!-- tab -->
			<view class="menu-block">
				<block>
					<view></view>
				</block>
			</view>
		</view>
		
		
		<!-- 内容展示 -->
		<view class="content-left">
			<view class="empty" v-show="showEmptyResult">
				<view class="emptyMsg">
					搜索为空
				</view>
				<image src="../../static/coen/empty.png" mode="aspectFill"></image>
			</view>
			<block v-for="(items,index) in searchResult" :key="index">
				<view class="content-view"  v-show="showResult">
					<view class="content-img">
						<image :src="items.logo" mode="aspectFill"></image>
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
							<image src="../../static/coen/liwu.svg" mode="widthFix"></image>
							<text>类型：{{items.types}}</text>
						</view>
					</view>
				</view>
			</block>
		</view>
		
		<!-- 反馈组件 -->
	</view>
</template>

<script>
	import allApi from '../../api/api.js';
	import { srarchUrl } from '../../api/request.js';
	
	export default {
		data() {
			return {
				searchdata:'',
				searchResult:[],
				showEmptyResult:false,
				showResult:false,
			}
		},
		methods: {
			// 一：点击右边搜索触发搜索
			searchBtn(){
				//获取搜索框输入的关键字：this.searchdata
				this.searchData(this.searchdata)
			},
			
			// 二：不点击右边搜索按钮，按回车键触或者手机键盘完成键盘触发搜索
			onKeyInput(e){
				//  获取搜索框输入的关键字：e.detail.value
				this.searchData(this.searchdata)
			},
			
			searchData(keyWord){
				var data = {
					searchdata:keyWord
				}
				
				allApi(srarchUrl,'POST',data)
				.then(result=>{
					console.log(result)
					if(typeof result[1].data === 'string'){
						this.showEmptyResult = true;
						this.showResult = false;
					}else{
						this.showEmptyResult = false;
						this.showResult = true;
						this.searchResult = result[1].data;
					}
					
				})
				.catch(err=>{
					console.log(err)
				})
			}
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
	.empty image{
		width: 100upx;
		height: 100upx;
	}
	.content-left{margin: 0 20upx;}
	.search{
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		background:#f8f8f8;
		border-radius: 20upx;
		margin-left: 20upx;
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
	.menu-block view {
		background: #f7f8fa;
		border-radius: 6upx;
		font-size: 27upx;
		color: #292c33;
		text-align: center;
		padding: 10upx;
		margin: 20upx 20upx 0 0;
	}
	
	.menu-block {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
</style>
