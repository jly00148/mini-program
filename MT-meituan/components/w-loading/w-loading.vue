<template>
  <view class="mask" :class= "mask == 'true' || mask == true ? 'mask-show' : ''" @click="Mclose" v-if="show" @touchmove.stop.prevent="preventTouchMove">
		<!-- 加载动画开始 -->    <!-- loading1~loading30挑选任意一个替换下方html 且替换对应css -->
	<view class="mask">
		 <view class="container loading2">
			<view class="shape shape1"></view>
			<view class="shape shape2"></view>
			<view class="shape shape3"></view>
			<view class="shape shape4"></view>
		</view>
	</view>
		<!-- 加载动画结束 -->
  </view>
  <!-- 遮罩层-->
</template>

<script scoped="true">
export default {
  name: "w-loading",
	props:{
		text: String,
		mask: Boolean | String,
		click: Boolean | String,
	},
  data() {
    return {
			show: false
		};
  },
	methods:{
		preventTouchMove(){
			console.log('stop user scroll it!');
			return;
		},
		Mclose(){
			if(this.click == 'false' || this.click == false){
				this.show = false
			}
		},
		open(){
			this.show = true
    },
    close(){
      this.show = false
    }
	}
};
</script>

<style scoped="true">
.mask{
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.3);
	z-index: 99;
}
.container {
  width: 30px;
  height: 30px;
  position: relative;
  left: 50%;
  margin-left: -30upx;
  top:50%;
  z-index: 999;
}
.container.loading2 {
  -webkit-transform: rotate(10deg);
          transform: rotate(10deg);
}
.container.loading2 .shape {
  border-radius: 5px;
}
.container.loading2{
  -webkit-animation: rotation 1s infinite;
          animation: rotation 1s infinite;
}

.container .shape {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 1px;
}
.container .shape.shape1 {
  left: 0;
  background-color: #5C6BC0;
}
.container .shape.shape2 {
  right: 0;
  background-color: #8BC34A;
}
.container .shape.shape3 {
  bottom: 0;
  background-color: #FFB74D;
}
.container .shape.shape4 {
  bottom: 0;
  right: 0;
  background-color: #F44336;
}


.loading2 .shape1 {
  -webkit-animation: animation2shape1 0.5s ease 0s infinite alternate;
          animation: animation2shape1 0.5s ease 0s infinite alternate;
}

@-webkit-keyframes animation2shape1 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(20px, 20px);
            transform: translate(20px, 20px);
  }
}

@keyframes animation2shape1 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(20px, 20px);
            transform: translate(20px, 20px);
  }
}
.loading2 .shape2 {
  -webkit-animation: animation2shape2 0.5s ease 0s infinite alternate;
          animation: animation2shape2 0.5s ease 0s infinite alternate;
}

@-webkit-keyframes animation2shape2 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(-20px, 20px);
            transform: translate(-20px, 20px);
  }
}

@keyframes animation2shape2 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(-20px, 20px);
            transform: translate(-20px, 20px);
  }
}
.loading2 .shape3 {
  -webkit-animation: animation2shape3 0.5s ease 0s infinite alternate;
          animation: animation2shape3 0.5s ease 0s infinite alternate;
}

@-webkit-keyframes animation2shape3 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(20px, -20px);
            transform: translate(20px, -20px);
  }
}

@keyframes animation2shape3 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(20px, -20px);
            transform: translate(20px, -20px);
  }
}
.loading2 .shape4 {
  -webkit-animation: animation2shape4 0.5s ease 0s infinite alternate;
          animation: animation2shape4 0.5s ease 0s infinite alternate;
}

@-webkit-keyframes animation2shape4 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(-20px, -20px);
            transform: translate(-20px, -20px);
  }
}

@keyframes animation2shape4 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(-20px, -20px);
            transform: translate(-20px, -20px);
  }
}

</style>


