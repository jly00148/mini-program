<template>
	<view>
		<view class="wrap" v-if="showOrHide">
			<view class="wrap-view">
				<view class="wrap-text">请登录后再操作</view>
				<view class="wrap-flex">
					<button @click="messcancel()" plain="true">取消</button>
					<button @click="userLoginMsg">登录</button>
				</view>
			</view>
		</view>
		<HMmessages ref="HMmessages" @complete="HMmessages = $refs.HMmessages" @clickMessage="clickMessage"></HMmessages>
	</view>
</template>
<script>
	
	import allApi from '../api/api.js';
	import { wxLoginUrl } from '../api/request.js';
	import HMmessages from "@/components/HM-messages/HM-messages.vue";
	const packLogin = require('../login/login.js')
	
	export default{
		components:{
			HMmessages
		},
		data(){
			return {
				showOrHide:false
			}
		},
	
	methods: {
			messcancel(){
				this.showOrHide = false;
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
						this.showOrHide = false;
						this.HMmessages.show('登录成功',{icon:'success',background:'#9FF781',duration:3000})
					},
					fail:(err)=>{ 
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style scoped>
	/* 模态弹窗布局 */
	.wrap{
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: rgba(0,0,0,0.6);
		z-index: 9999;
	}
	.wrap-view{
		width: 500upx;
		height: 200upx;
		background: #FFFFFF;
		margin: auto;
		position: absolute;
		-webkit-position:absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		border-radius: 10upx;
		overflow: hidden;
	}
	.wrap-text{
		text-align: center;
		margin-top: 30upx;
		font-size: 34upx;
		color: #666666;
	}		
	.wrap-flex{
		display: flex;
		justify-content: space-around;
		border-top: 1upx solid #EEEEEE;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 80upx;
		line-height: 80upx;
	}
	.wrap-flex button{
		border: none;
		font-size: 30upx;
	}
</style>
