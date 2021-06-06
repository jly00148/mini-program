<!-- 此文件为应用配置，用来配置App全局样式、监听以及应用生命周期 -->
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	/* 引入官方样式库,在hello-uni-app-20210604文件中 */
	@import url('./common/uni.css');
	
	/* 引入animate自定义图标库 */
	@import url('./common/animate.css');	
	
	/* 引入free样式库 */
	@import url('./common/free.css');	
	
	/* 引入全局样式库 */
	@import url('./common/common.css');	
	
	/* 引入icon自定义图标库 */
	@import url('./common/icon/iconfont.css');	
	
</style>
