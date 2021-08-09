<template>
	<view>
		<view class="myhome">
			<!-- 已登录 -->
			<block>
				<view class="wx-name" v-if="!wxlogin">
					<view>
						<image></image>	
					</view>
					<view class="wx-text">
						<text>{{usering.nickName}}</text>
					</view>
				</view>
			</block>
			
			<!-- 未登录 -->
			<view class="wx-button" v-if="wxlogin">
				<view class="wx-button-view">登录每天外卖，开启吃货旅程</view>
				<view>
					<!-- getuserinfo的有效值getuserinfo,获取用户信息，可以从@getuserinfo回调中获取到用户信息，包括头像、昵称等信息-->
					<button open-type="getUserInfo" @getuserinfo="getUserInfo">去登录</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import allApi from  '../../api/api.js';
	import { wxLoginUrl } from '../../api/request.js';
	
	export default {
		data() {
			return {
				wxlogin:true,
				usering:{}
			}
		},
		methods: {
			// 获取event
			getUserInfo (event){
				if(event.detail.userInfo){
					let wxing = event.detail.userInfo;
					this.wxCode(wxing.avatarUrl,wxing.nickName)
				}
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
					secret:'9fc11f2a4ce8aa5e38ee5625d903ff40',
					avatarUrl,
					nickName,
					code
				}
				
				allApi(wxLoginUrl,'POST',data)
				.then(res=>{
					if(res[1].data.msg == 'success'){
						// 存入本地
						uni.setStorageSync('userInfo',res[1].data.datas)
					}
					
					this.checkUserInfo()
				})
				.catch(err=>{
					console.log(err)
				})
			},
			
			checkUserInfo(){
				// 取出本地缓存的用户信息
				let cacheUserInfo = uni.getStorageSync('userInfo');
				
				if(!cacheUserInfo){
					// 用户未登录
					this.wxlogin = true;
				}else{
					// 用户已登录
					this.wxlogin = false;
					this.usering = cacheUserInfo;
				}
			}
		},
		
		
		// 生命周期函数onShow(每次显示这个页面都会执行的函数)
		onShow(){
			// 每次显示这个页面的时候调用这个检查本地缓存的用户信息的函数
			this.checkUserInfo()
		},
		mounted(){

		}
	}
</script>

<style scoped>
	.myhome{
		background: linear-gradient(to top, #ffe566 10%, #ffd300 100%); 
		height: 350upx; 
		display: flex; 
		align-items: center;
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
