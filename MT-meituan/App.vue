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

<style lang="scss">
	/*每个页面公共css */
	@import "./node_modules/animate.css/animate.css";
	
	 // 3.配置uView之引入uView基础样式
	@import "view-ui/uview-ui/index.scss";
</style>
