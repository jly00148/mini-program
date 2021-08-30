<template>
	<view>
		<Tip :tipText="tipText" v-show="showEmpty"></Tip>
			<block v-for="(item,index) in takeShopDate" :key="index">
				<view  class="content-view" @click="choiceShop(item.openid)">
					<view class="content-img" v-show="!showEmpty">
						<!--  mode为widthFix即图片高度自适应时要设置占位图默认高度  -->
							<image :src="item.logo" mode="aspectFill" class="img"></image>
					</view>
					<view class="content-title" v-show="!showEmpty">
						<text class="conteng-take">{{item.shop}}</text>
						<view class="conteng-monthly">
							<text>月售200</text>
							<text>约{{item.duration}}分钟</text>
						</view>
						<view class="conteng-starting">
							<text class="text">起送¥{{item.delivering}}</text>
							<text class="text">配送¥{{item.physical}}</text>
							<text class="text">人均¥{{item.capita}}</text>
						</view>
						<view class="conteng-starting">
							<image src="../../../static/coen/liwu.svg" mode="widthFix" class="img"></image>
							<text class="text">{{item.types}}</text>
						</view>
					</view>
				</view>
			</block>
	</view>
</template>

<script>
	
	import Tip from '../../../tips/tips.vue';
	
	export default {
		components:{
			Tip
		},
		props:{
			takeShopDate:Array
		},
		data(){
			return {
				tipText:'',
				showEmpty:false,
				scrollTop:100
			}
		},
		methods:{
			choiceShop(shopOpenid){
				uni.navigateTo({
					//openid在/pages/takeout/takeout页面内用onload接收
					url:'/pages/takeout/takeout?openid=' + shopOpenid
				})
			}
		},
		onPageScroll({scrollTop}) {
			console.log('aa')
						// 传入scrollTop值并触发所有easy-loadimage组件下的滚动监听事件
						this.scrollTop = scrollTop;
					},
		watch:{
			// 每次点击(delicary.vue文件中sortClick和personClick方法)后返回的result传递到父组件中的fatherMethod方法,
			// 然后把得到的数组通过监听takeShopDate得到的数组赋值给takeShopDate综合排序和筛选时
			takeShopDate:function(takeShopDate){
				if(takeShopDate.length == 0){
					this.showEmpty = true;
					this.tipText = '商家未找到'
				}else{
					this.showEmpty = false;
					this.takeShopDate = takeShopDate;
				}
			}
		}
	}

</script>

<style scoped>
	@import url("../../../common/meituan.css");
</style>
