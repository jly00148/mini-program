// components/Tab/Tab.js
Component({
  /**
   * 组件的属性列表
   */

  //  接收父组件传递过来的数组
  properties: {
    tabs:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabItem(ev){
      // console.log(ev.currentTarget.dataset.index) 获取点击每个view的data上的值
      this.triggerEvent('tabItemChange',{index}) //绑定自定义事件，然后在父组件中触发
    }
  }
})
