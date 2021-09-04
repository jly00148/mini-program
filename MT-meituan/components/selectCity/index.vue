<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<view class="u-demo-area">
				<city-select v-model="value" @city-change="cityChange"></city-select>
				<view class="u-demo-result-line">{{ input ? input : '地址:' }}</view>
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-item">
				<u-button @click="value = true">选择地址</u-button>
			</view>
		</view>
	</view>
</template>

<script>
import citySelect from './u-city-select.vue';
export default {
	components: {
		citySelect
	},
	data() {
		return {
			height: 30,
			bgColor: this.$u.color.bgColor,
			marginTop: 30,
			marginBottom: 30,
			value: false,
			input: '',
		};
	},
	methods: {
		cityChange(e) {
			this.input = e.province.label + '-' + e.city.label + '-' + e.area.label;
		}
	}
};
</script>

<style scoped>
	.u-demo{
		margin-top: 30upx;
	}
	.u-demo-result-line{
		font-size: 32upx;
		margin-bottom: 30upx;
	}
	.btn-wrap {
		margin: 100rpx 30rpx;
	}
</style>