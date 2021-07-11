// 错误提示
const errMsg = {
	errlist(err){
		uni.showToast({
			icon:'none',
			title:err, //提示的内容
			duration:3000,
			mask:true
		})
	}
}
 module.exports={errMsg}