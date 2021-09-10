<template>
	<view class="wrap">
		<!-- 未登录 -->
		<view v-if="wxlogin">
			<view class="top"></view>
			<view class="content">
				<view class="title">欢迎登录MT外卖</view>
				
				<!-- 验证手机号是否符合规范 -->
				<view class="testTelNum">
					<u-alert-tips type='error' :description="errMsg" :show="show" show-icon=true></u-alert-tips>
					<u-alert-tips type='success' :description="succMsg" :show="!show" show-icon=true></u-alert-tips>
				</view>
				
				<input class="u-border-bottom" type="number" v-model="tel" placeholder="请输入手机号" />
				<view class="tips">未注册的手机号验证后自动创建美团账号</view>

				<button @tap="submit" :style="[inputStyle]" class="getCaptcha">获取短信验证码</button>
				<view class="alternative">
					<view class="password">密码登录</view>
					<view class="issue">遇到问题</view>
				</view>
			</view>
			<view class="buttom">
				<view class="loginType">
					<view class="wechat item">
						<view class="icon"><u-icon size="70" name="weixin-fill" color="rgb(83,194,64)" @click="userLoginMsg"></u-icon></view>
						微信
					</view>
					<view class="QQ item">
						<view class="icon"><u-icon size="70" name="qq-fill" color="rgb(17,183,233)"></u-icon></view>
						QQ
					</view>
				</view>
			</view>
		</view>
		
		<!-- 已登录 -->
		<view v-if="!wxlogin">
			<view>
				<u-navbar :is-back="false" title="　" :border-bottom="false">
					<view class="u-flex u-row-right" style="width: 100%;">
						<view class="camera u-flex u-row-center">
							<u-icon name="camera-fill" color="#000000" size="48"></u-icon>
						</view>
					</view>
				</u-navbar>
				<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
					<view class="u-m-r-10">
						<u-avatar :src="avatarUrl" size="140"></u-avatar>
					</view>
					<view class="u-flex-1">
						<view class="u-font-18 u-p-b-20">{{nickName}}</view>
						<view class="u-font-14 u-tips-color">微信号:johnny57350</view>
					</view>
					<view class="u-m-l-10 u-p-10">
						<u-icon name="scan" color="#969799" size="28"></u-icon>
					</view>
					<view class="u-m-l-10 u-p-10">
						<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
					</view>
				</view>
				
				<view class="u-m-t-20">
					<u-cell-group>
						<u-cell-item icon="rmb-circle" title="支付"></u-cell-item>
					</u-cell-group>
				</view>
				
				<view class="u-m-t-20">
					<u-cell-group>
						<u-cell-item icon="star" title="收藏"></u-cell-item>
						<u-cell-item icon="photo" title="相册"></u-cell-item>
						<u-cell-item icon="coupon" title="卡券"></u-cell-item>
						<u-cell-item icon="heart" title="关注"></u-cell-item>
					</u-cell-group>
				</view>
				
				<view class="u-m-t-20">
					<u-cell-group>
						<u-cell-item icon="setting" title="设置"></u-cell-item>
					</u-cell-group>
				</view>
				<view class="u-m-t-20">
					<u-cell-group>
						<u-cell-item icon="close" title="退出登录" @click="userLogout"></u-cell-item>
					</u-cell-group>
				</view>
			</view>
		</view>
		<globalLoading v-if="loadingShowOrHide"></globalLoading>
	</view>
</template>

<script>
import allApi from  '../../api/api.js';
import { wxLoginUrl } from '../../api/request.js';
const packLogin = require('../../login/login.js')

export default {
	data() {
		return {
			tel: '',
			wxlogin:true,
			nickName:'',
			avatarUrl:'',
			description:'',
			show:true,
			loadingShowOrHide:false,
			errMsg:'请输入正确手机号',
			succMsg:'手机号输入正确'
		}
	},
	computed: {
		inputStyle() {
			let style = {};
			if(this.tel) {
				style.color = "#fff";
				style.backgroundColor = this.$u.color['primary'];
			}
			return style;
		}
	},
	watch:{
		tel(tel){
			if(this.$u.test.mobile(this.tel)) this.show = false;
			else this.show = true;
		}
	},
	methods: {
		submit() {
			if(this.$u.test.mobile(this.tel)) {
				this.$u.route({
					url: 'pages/code/code?tel=' + this.tel
				})
			}
		},
		userLoginMsg(){
			uni.getUserProfile({
				desc:'登录',
				success:(res)=>{
					let userInfo = res.userInfo;
					
						this.nickName = userInfo.nickName;
						this.avatarUrl = userInfo.avatarUrl;
					
					// 实例化后调用原型对象上的方法
					const casePackLogin = new packLogin(this.nickName,this.avatarUrl)
					casePackLogin.wxCode()
					
					// 登录成功后立即切换组件
					this.loadingShowOrHide = true;
					setTimeout(()=>{
						this.wxlogin = false;
						this.loadingShowOrHide = false;
					},400)
					
				},
				fail:(err)=>{ 
					console.log(err)
				}
		})},
		checkUserInfo(){
			// 取出本地缓存的用户信息
			let cacheUserInfo = uni.getStorageSync('usermen');
			
			if(!cacheUserInfo){
				// 用户未登录
				this.wxlogin = true;
			}else{
				// 用户已登录
				this.wxlogin = false;
				this.nickName = cacheUserInfo.nickName;
				this.avatarUrl = cacheUserInfo.avatarUrl;
			}
		},
		userLogout(){
			uni.removeStorageSync('usermen')
			this.wxlogin = true;
		}
	},
// 生命周期函数onShow(每次显示这个页面都会执行的函数)
	onShow(){
		// 每次显示这个页面的时候调用这个检查本地缓存的用户信息的函数
		this.checkUserInfo()
	},
};
</script>

<style lang="scss" scoped>
// 未登录
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 80rpx auto 0;
		.title {
			text-align: left;
			font-size: 50rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
		}
		.testTelNum{
			height: 60upx;
		}
		.u-border-bottom{
			margin-top:20upx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.tips {
			color: $u-type-info;
			margin-bottom: 60rpx;
			margin-top: 8rpx;
		}
		.getCaptcha {
			background-color: rgba(0, 0, 255,0.1);
			color: $u-tips-color;
			border-radius: 40upx;
			font-size: 30rpx;
			padding: 12rpx 0;
			
			&::after {
				border: none;
			}
		}
		.alternative {
			color: $u-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $u-content-color;
				font-size: 28rpx;
			}
		}
	}
}

</style>