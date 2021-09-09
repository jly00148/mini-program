<template>
	<view class="wrap">
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages" @clickMessage="clickMessage"></HMmessages>
		<view class="top">
			<view class="item">
				<view class="left"><u-icon :name="accountFill" size="30" color="#909399"></u-icon>收货人:</view>
				<input type="text" placeholder-class="line" v-model="name" placeholder="请填写收货人姓名" />
			</view>
			<view class="item">
				<view class="left"><u-icon :name="phone" size="30" color="#909399"></u-icon>手机号码:</view>
				<input type="text" placeholder-class="line"  v-model="tel" placeholder="请填写收货人手机号" />
			</view>
			<SelectCity></SelectCity>
			<view class="item address">
				<view class="left">详细地址</view>
				<textarea type="text" placeholder-class="line" v-model="detailSite" placeholder="街道、楼牌等" />
			</view>
		</view>
		<view class="bottom">
			<view class="tag">
				<view class="left">标签</view>
				<view class="right">
					<block v-for="(item,index) in tags" :key="index">
						<text class="tags" @click="selectTag(item,index)" :class="{activeb:index === num}">{{item}}</text>
					</block>
					<u-popup v-model="showPopup" mode="bottom" border-radius="15"  height="30%">
						<u-alert-tips type="warning" :title="title" :show="show" class="tips" :description="description"></u-alert-tips>
						<!-- <view>出淤泥而不染，濯清涟而不妖</view> -->
						<u-input v-model="addNewTag" :border="border" input-align="center" clearable=false />
						<u-button type="primary" :plain="true" @click="addTag">添加标签</u-button>
					</u-popup>
					<view class="tags plus" @click="showPopup = true"><u-icon size="22" name="plus"></u-icon></view>
				</view>
			</view>
			<view class="default">
					<view class="left">
						<view class="set">设置默认地址</view>
					</view>
					<view class="right">
						<u-modal 
							v-model="Modalshow" 
							:content="content" 
							mask-close-able="true"
							:title-style="{color: 'red'}"
						>
						</u-modal>
						<u-switch v-model="checked" @change="swithBth"></u-switch>
					</view>
			</view>
		</view>
		<u-button type="success" :plain="true" @click="addSite">添加地址</u-button>
		<!-- <u-picker mode="region" ref="uPicker" v-model="show" /> -->
	</view>
</template>

<script>
	import SelectCity from '../../components/selectCity/index.vue';
	import HMmessages from "@/components/HM-messages/HM-messages.vue";
	
	
export default {
	components:{
		HMmessages,
		SelectCity
	},
	data() {
		return {
			name:'',
			tel:'',
			selectedCity:'',
			detailSite:'',
			tag:'',
			tags:'',
			addNewTag:'',
			phone: 'phone',
			accountFill:'account-fill',
			description:'',
			num:'',
			sites:[],
			checked: false,
			showPopup: false,
			Modalshow:false,
			show:false,
			content:'设置默认地址'
		};
	},
	methods: {
		swithBth(status) {
			this.Modalshow = status
		},
		setDefault() {
		},
		fatherMethod(selectedCity){
			this.selectedCity = selectedCity
		},
		addTag(){
			// 标签去重
			for(var i = 0;i<this.tags.length;i++){
				if(this.tags[i] == this.addNewTag){
					// 标签已存在
					this.description = '标签已存在';
					this.show = true;
					return;
				}
			};
			
			if(this.addNewTag == '') {
				this.description = '标签不能为空';
				this.show = true;
				return;
			};
			
			// 标签无重复
			this.show = false;
			this.showPopup = false;
			this.tags.push(this.addNewTag)
			uni.setStorageSync('tags',this.tags)
		},
		selectTag(item,index){
			this.num = index;
			this.tag = item;
		},
		addSite(){
			const siteObj = {};
			siteObj.name = this.name;
			siteObj.phone = this.tel;
			siteObj.site = this.selectedCity + ' ' + this.detailSite;
			
			// 选默认地址:this.checked代表siwtch打开，值为true
			if(this.checked){
				
				// 添加默认标签
				siteObj.default = '默认';
				for(var i = 0;i<this.sites.length;i++){
					if(this.sites[i].default == '默认'){
						// 删除之前存在的默认标签，整个收获地址只能有一个默认标签
						delete this.sites[i].default;
					}
				}
			} 
			siteObj.tagText = this.tag;
			
			// 新增的地址信息push到数组中，然后本地存储
			this.sites.push(siteObj)
			uni.setStorageSync('siteArray',this.sites);
			
			// 提示反馈
			this.HMmessages.show('添加成功',{icon:'success',background:'#9FF781',duration:3000})
			
			uni.navigateTo({
				url:'/pages/address/index?defaultOrNot=' + siteObj.default
			})
		}
	},
	mounted(){
		this.tags = uni.getStorageSync('tags')  || ['家','公司','学校'];
		this.sites = uni.getStorageSync('siteArray') || [];
	}
};
</script>

<style lang="scss" scoped>
/deep/ .line {
	color: $u-light-color;
	font-size: 28rpx;
}
.tips{
	z-index: 999;
}
.activeb{
	background-color: #F5A9A9;
}
.wrap {
	background-color: #f2f2f2;
	.top {
		background-color: #ffffff;
		border-top: solid 2rpx $u-border-color;
		padding: 22rpx;
		.item {
			display: flex;
			font-size: 32rpx;
			line-height: 100rpx;
			align-items: center;
			border-bottom: solid 2rpx $u-border-color;
			.left {
				width: 180rpx;
			}
			input {
				text-align: left;
			}
		}
		
		.address {
			padding: 20rpx 0;
			textarea {
				// width: 100%;
				height: 150rpx;
				background-color: #f7f7f7;
				line-height: 60rpx;
				margin: 40rpx auto;
				padding: 20rpx;
			}
		}
		.site-clipboard {
			padding-right: 40rpx;
			textarea {
				// width: 100%;
				height: 150rpx;
				background-color: #f7f7f7;
				line-height: 60rpx;
				margin: 40rpx auto;
				padding: 20rpx;
			}
			.clipboard {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 26rpx;
				color: $u-tips-color;
				height: 80rpx;
				.icon {
					margin-top: 6rpx;
					margin-left: 10rpx;
				}
			}
		}
	}
	.bottom {
		margin-top: 20rpx;
		padding: 40rpx;
		padding-right: 0;
		background-color: #ffffff;
		font-size: 28rpx;
		.tag {
			display: flex;
			.left {
				width: 160rpx;
			}
			.right {
				display: flex;
				flex-wrap: wrap;
				.tags {
					width: 140rpx;
					padding: 16rpx 8rpx;
					border: solid 2rpx $u-border-color;
					text-align: center;
					border-radius: 50rpx;
					margin: 0 10rpx 20rpx;
					display: flex;
					font-size: 28rpx;
					align-items: center;
					justify-content: center;
					color: $u-content-color;
					line-height: 1;
				}
				.plus {
					//padding: 10rpx 0;
				}
			}
		}
		.default {
			margin-top: 50rpx;
			display: flex;
			justify-content: space-between;
			border-bottom: solid 2rpx $u-border-color;
			line-height: 64rpx;
			.tips {
				font-size: 24rpx;
			}
			.right {
			}
		}
	}
}
</style>