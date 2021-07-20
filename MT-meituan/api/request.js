// 公共路径
const publicUrl = 'https://meituan.thexxdd.cn/';
// 为你优选请求路径
const preferenceUrl =  publicUrl+'api/forshop/getprefer';
// 附近商家请求路径
const nearbyTakeOut = publicUrl + 'api/forshop/wxshop';
// 排序附近商家
const nearbyTakeOutRank = publicUrl+'api/forshop/starting';	
// 筛选多选
const multipleurl = publicUrl + 'api/forshop/multiple';
// 搜索：
const srarchUrl = publicUrl + 'api/forshop/search';
// 评论
const commentUrl = publicUrl + 'api/message/discuss';
// 商家介绍
const shopUrl = publicUrl + 'api/forshop/shop';
// 商品数据
const getdishesUrl = publicUrl + 'api/forshop/getdishes';

// 导出路径
module.exports = {
	preferenceUrl,
	nearbyTakeOut,
	nearbyTakeOutRank,
	multipleurl,
	srarchUrl,
	commentUrl,
	shopUrl,
	getdishesUrl
}