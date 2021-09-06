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
		<view class="myhome" v-if="!wxlogin">
			<view class="wx-name">
				<view>
					<image :src="avatarUrl"></image>
				</view>
				<view class="wx-text">
					<text>{{nickName}}</text>
				</view>
				<view class="logout" @click="userLogout">
					<text>用户退出</text>
				</view>
			</view>
		</view>
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
					const casePackLogin = new packLogin(this.nickName,this.avatarUrl)
					casePackLogin.wxCode()
					
					// 登录成功后立即切换组件
					this.wxlogin = false;
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
.wrap {
	// 未登录
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

// 已登录
.myhome{
	background: linear-gradient(to top, #ffe566 10%, #ffd300 100%); 
	height: 350upx; 
	display: flex; 
	align-items: center;
	position: relative;
}
.wx-name image{
	width: 120upx !important;
	 height: 120upx !important;
	 border-radius: 50%;
	 margin-right: 20upx;
	border: 10rpx solid #999999;
}
text{
	display: block; 
	margin: 10upx 0; 
	color: #999999;
}
.wx-name{
	display: flex; 
	align-items: center; 
	padding: 0 30upx; 
	align-content: center;
	height: 200upx;
}
.wx-text text{
	font-size: 35upx;
}
.logout{
	position: absolute;
	top: 250upx;
	right: 10upx;
	font-size: 35upx;
}
/* 登录 */
.wx-button button{
	border: none;font-size: 30upx; 
	background: linear-gradient(to right, #28a6f1 10%, #0e8dd7 80%);
	 border-radius: 50upx;
	color: #FFFFFF;
}							
.wx-button-view{
	font-size: 35upx; 
	color: #FFFFFF; 
	margin-bottom: 25upx;
}
.wx-button{
	margin: 0 auto;
}
</style>