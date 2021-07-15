<template>
	<view>
		<block v-for="(item,index) in takeShopDate" :key="index">
			<view v-if="takeShopDate[0].hasOwnProperty('notice')">
				<view>乐手</view>
			</view>
			<view v-else class="content-view">
				<view class="content-img">
					<image :src="item.logo" mode="aspectFill"></image>
				</view>
				<view class="content-title">
					<text class="conteng-take">{{item.shop}}</text>
					<view class="conteng-monthly">
						<text>月售200</text>
						<text>约{{item.duration}}分钟</text>
					</view>
					<view class="conteng-starting">
						<text>起送¥{{item.delivering}}</text>
						<text>配送¥{{item.physical}}</text>
						<text>人均¥{{item.capita}}</text>
					</view>
					<view class="conteng-starting">
						<image src="../../../static/coen/liwu.svg" mode="widthFix"></image>
						<text>{{item.types}}</text>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			takeShopDate:Array
		},
		data(){
			return {
				// takeshop:this.takeshop
				// takeshop:[
					// {
					// 	'logo':'https://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public/uploads/1583591740906.png',
					// 	'shop':'酸菜鱼',
					// 	'duration':20,
					// 	'delivering':13,
					// 	'physical':4,
					// 	'capita':20,
					// 	'types':'川菜'
					// },
					// {
					// 	'logo':'https://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public/uploads/1583591740906.png',
					// 	'shop':'酸菜鱼',
					// 	'duration':20,
					// 	'delivering':13,
					// 	'physical':4,
					// 	'capita':20,
					// 	'types':'川菜'
					// },
					// {
					// 	'logo':'https://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public/uploads/1583591740906.png',
					// 	'shop':'酸菜鱼',
					// 	'duration':20,
					// 	'delivering':13,
					// 	'physical':4,
					// 	'capita':20,
					// 	'types':'川菜'
					// },
					// {
					// 	'logo':'https://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public/uploads/1583591740906.png',
					// 	'shop':'酸菜鱼',
					// 	'duration':20,
					// 	'delivering':13,
					// 	'physical':4,
					// 	'capita':20,
					// 	'types':'川菜'
					// },
					// {
					// 	'logo':'https://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public/uploads/1583591740906.png',
					// 	'shop':'酸菜鱼',
					// 	'duration':20,
					// 	'delivering':13,
					// 	'physical':4,
					// 	'capita':20,
					// 	'types':'川菜'
					// },
					// {
					// 	'logo':'https://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public/uploads/1583591740906.png',
					// 	'shop':'酸菜鱼',
					// 	'duration':20,
					// 	'delivering':13,
					// 	'physical':4,
					// 	'capita':20,
					// 	'types':'川菜'
					// },
					// {
					// 	'logo':'https://lstkk.oss-cn-beijing.aliyuncs.com/meituan/public/uploads/1583591740906.png',
					// 	'shop':'酸菜鱼',
					// 	'duration':20,
					// 	'delivering':13,
					// 	'physical':4,
					// 	'capita':20,
					// 	'types':'川菜'
					// }
				// ]
			}
		}
	}
	
</script>

<style scoped>
	@import url("../../../common/meituan.css");
</style>
