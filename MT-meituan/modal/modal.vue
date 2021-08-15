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
						
						this.wxCode(this.avatarUrl,this.nickName)
					},
					fail:(err)=>{
						console.log(err)
					}
				})
			},
			// 获取头像和code(code:调用接口获取凭证。同过凭证进而换取用户登录信息，包括用户的唯一识别码openid以及本次登录的会话密匙session_key等)
			// 用户数据的加解密通讯需要依赖会话密匙完成。code凭证有效期为5分钟，开发者需要在开发者服务器后台调用auth.code2Session,使用code换取openid和会话密匙session_key
			wxCode(avatarUrl,nickName){
				wx.login({
					success:res=>{
						let code = res.code;
						this.wxLogin(avatarUrl,nickName,code)
					},
					fail:err=>{
						throw err
					}
				})
			},
			
			// 请求后段后端登录
			wxLogin(avatarUrl,nickName,code){
				let data = {
					appid:'wx7f1e12062dd459a1',
					secret:'2bf8c70dde7a49b1dfcc37ba5fb3f940',
					code,
					nickName,
					avatarUrl
				}
				
				allApi(wxLoginUrl,'POST',data)
				.then((res)=>{
					if(res[1].data.msg == 'success'){
						// 存入本地
						uni.setStorageSync('usermen',res[1].data.datas)
						this.showOrHide = false;
						this.HMmessages.show('用户已登录',{icon:'success',background:'#e5f7ff',duration:3000})
					}
				})
				.catch((err)=>{
					console.log(err)
				})
			},
	
		},
		
		
		// 生命周期函数onShow(每次显示这个页面都会执行的函数)
		onShow(){
			// 每次显示这个页面的时候调用这个检查本地缓存的用户信息的函数
			// this.checkUserInfo()
		},
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
