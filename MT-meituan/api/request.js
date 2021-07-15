// 公共路径
const publicUrl = 'https://meituan.thexxdd.cn/';

// 为你优选请求路径
const preferenceUrl =  publicUrl+'api/forshop/getprefer';

// 附近商家请求路径
const nearbyTakeOut = publicUrl + 'api/forshop/wxshop';

// 点击综合排序要求排序附近商家
const nearbyTakeOutRank = publicUrl+'api/forshop/starting';	

// 筛选多选
const multipleurl = publicUrl + 'api/forshop/multiple';



// 导出路径
module.exports = {
	preferenceUrl,
	nearbyTakeOut,
	nearbyTakeOutRank,
	multipleurl
}