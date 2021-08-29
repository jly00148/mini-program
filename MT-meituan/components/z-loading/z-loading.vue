<template>
	<div style="position: relative;;" :style="{'height': hw + 'rpx', 'width': hw + 'rpx'}">
		<div v-for="(item, index) in data" style="position: absolute" :style="{'left': item.left, 'top': item.top, 'transform': item.rotate, 'border-radius': item.corners,'width': item.width, 'height': item.height, 'animation': item.animation, 'background-color': item.color}"></div>
	</div>
</template>

<script>
	export default {
		props: {
			params: {
				type: Object,
				default: () => {
					return {
						lines: 8,
						radius: 30,
						width: 8,
						length: 20,
						scale: 1,
						corners: 20,
						color: '#808080'
					}
				}
			},
		},
		created() {
			this.init()
		},
		watch: {
			params: function(newVal, oldVal) {
				this.init()
			}
		},
		data() {
			return {
				data: [],
				hw: 0
			};
		},
		methods: {
			init() {
				this.hw = (this.params.radius + this.params.length) * 2 * this.params.scale
				let dotLeft = (this.hw - this.params.width) / 2;
				let dotTop = (this.hw - this.params.length) / 2;
				let radius = this.params.radius * this.params.scale
				let line = this.params.lines
				let avd = 360 / line
				let ahd = avd * Math.PI / 180
				let data = []
				for (var i = 0; i < line; i++) {
					data.push({
						left: Math.sin((ahd * i)) * radius + dotLeft + 'rpx',
						top: Math.cos((ahd * i)) * radius + dotTop + 'rpx',
						rotate: 'rotate(-' + 360 / line * i + 'deg) ' + 'scale(' + this.params.scale + ')',
						corners: this.params.corners + 'rpx',
						width: this.params.width + 'rpx',
						height: this.params.length + 'rpx',
						color: this.params.color,
						animation: '1s linear ' + (i * -1 / line - 1) + 's infinite normal none running spinner-line-fade'
					})
				}
				this.data = data
			}
		}
	}
</script>
