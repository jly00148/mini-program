<template>
	<view class="ordering">
		<block v-for="(item,index) in order" :key="index">
			<text :class="{activetext:index == num}" @click="menubtn(index)">{{item}}</text>
		</block>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				num:0,
				_index:0,
				order: ['点菜','评价','商家']
			}
		},
		methods:{
			menubtn(index){
				// 重复点击，防重复调用父组件方法
				if(this._index == index){
					return;
				}else{
				// 非重复点击
					this.num = index;
					
					// 保存index值,方便点击判断
					this._index = index;
					
					// 子组件调试父组件方法 ：parent;
					this.$parent.$parent.fatherMethod(index);
				}
			}
		}
	}
</script>

<style scoped>
	.ordering{margin: 20upx;
	display: flex;
	}
	.ordering text{
	margin-right: 60upx;
	display: block;
	height: 60upx;
	line-height: 60upx;
	font-size: 33upx;
	color: #666666;}
	.activetext{color: #333333 !important;
	font-weight: bold !important;
	border-bottom: 5upx solid #ffd161;}
</style>
