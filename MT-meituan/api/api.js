 // 封装接口
 const allApi = function(url,method){
	 return new Promise((resolve,reject)=>{
		 uni.request({
		 	url:url,
			method:method
		 })
		 .then(res=>{
			 resolve(res)
		 })
		 .catch(err=>{
			 reject(err)
		 })
	 })
 }
 module.exports=allApi