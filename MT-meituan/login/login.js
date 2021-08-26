// 登录公用(面向对象)
import allApi from  '../api/api.js';
import { wxLoginUrl } from '../api/request.js';

class packLogin {
	constructor(nickName,avatarUrl) {
		this.nickName = nickName;
		this.avatarUrl = avatarUrl;
	}
	wxCode(){
		wx.login({
			success:res=>{
				let code = res.code;
				this.wxLogin(this.avatarUrl,this.nickName,code)
			},
			fail:err=>{
				throw err
			}
		})
	}
	
	wxLogin(avatarUrl,nickName,code){
		// 请求后段后端登录
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
			}
		})
		.catch((err)=>{
			console.log(err)
		})
	}
}

module.exports = packLogin;