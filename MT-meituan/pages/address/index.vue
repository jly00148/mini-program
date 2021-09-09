<template>
	<view>
		<u-empty text="地址列表为空" mode="address" v-show="showEmptyResult"></u-empty>
		<block v-for="(item,index) in siteList" :key="index">
			<view class="item" v-show="!showEmptyResult">
				<view class="top">
					<view class="name">{{ item.name }}</view>
					<view class="phone">{{ item.phone }}</view>
					<view class="tag">
						<text>{{ item.tagText }}</text>
						<text :class="{red:item.default=='默认'}" class="default">{{ item.default }}</text>
					</view>
				</view>
				<view class="bottom">
					{{item.site}}
					<u-icon name="edit-pen" :size="40" color="#999999"></u-icon>
				</view>
			</view>
			<view class="addSite" @click="toAddSite">
				<view class="add">
					<u-icon name="plus" color="#ffffff" class="icon" :size="30"></u-icon>新建收货地址
				</view>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showEmptyResult:false,
			siteList: [],
			showOrNot:false
		};
	},

	methods: {
		getData() {
			this.siteList = uni.getStorageSync('siteArray') || [{}];

			// 无任何地址显示空组件的反馈
			if(JSON.stringify(this.siteList[0]) === '{}') this.showEmptyResult = true;
			
			
		},
		toAddSite(){
			uni.navigateTo({
			    url: '/pages/address/addSite'
			});
		}
	},
	onShow() {
		this.getData();
	},
	
	// onLoad 和 mounted一样，不过接受参数必须是onload
	onLoad(defaultObj) {
		this.getData();
	}
};

</script>
<style lang="scss" scoped>

.item {
	border-bottom: 1px solid #f2f2f2;
	padding: 40rpx 20rpx;
	.top {
		display: flex;
		font-weight: bold;
		font-size: 34rpx;
		.phone {
			margin-left: 60rpx;
		}
		.tag {
			display: flex;
			font-weight: normal;
			align-items: center;
			text {
				display: block;
				width: 60rpx;
				height: 34rpx;
				line-height: 34rpx;
				color: #ffffff;
				font-size: 20rpx;
				border-radius: 6rpx;
				text-align: center;
				margin-left: 30rpx;
				background-color:rgb(49, 145, 253);
			}
			.red{
				background-color:red;
				display: block!important;
			}
			.default{
				display: none;
			}
		}
	}
	.bottom {
		display: flex;
		margin-top: 20rpx;
		font-size: 28rpx;
		justify-content: space-between;
		color: #999999;
	}
}
.addSite {
	display: flex;
	justify-content: space-around;
	width: 600rpx;
	line-height: 100rpx;
	position: absolute;
	bottom: 30rpx;
	left: 80rpx;
	background-color: red;
	border-radius: 60rpx;
	font-size: 30rpx;
	.add{
		display: flex;
		align-items: center;
		color: #ffffff;
		.icon{
			margin-right: 10rpx;
		}
	}
}
</style>