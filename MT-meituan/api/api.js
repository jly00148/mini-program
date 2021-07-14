 // 封装接口
 const allApi = function(url,method,data){
	 return new Promise((resolve,reject)=>{
		 uni.request({
		 	url:url,
			method:method,
			data:data
		 })
		 .then(res=>{
			 resolve(res)
		 })
		 .catch(err=>{
			 reject(err)
		 })
	 })
 }
 module.exports = allApi