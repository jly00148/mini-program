// index.js
// 获取应用实例
const app = getApp()

Page({
  // 初始化数据绑定:
  data: {
    message:"hello 你好",
    list:[
      {
        id:1,task:'learn vue'
      },
      {
        id:2,task:'learn react'
      }
    ],
    show:true
  },

  // 方法:
  // 对应的事件处理函数，参数是event,通过event.currentTarget.dataset上的参数获取
  tapView(event){
    console.log(event) //是一个对象
    // 获取参数id：
    console.log(event.currentTarget.dataset.id)

    // 获取参数age：
    console.log(event.currentTarget.dataset.age)    
  },

  handtap1(){
      console.log('handtap1')
  },

  handtap2(){
      console.log('handtap2')
  },
  
  handtap3(){
    // this是page实例与下相同
    console.log(this)
      console.log('handtap3')
  },
  handleUpdate(){
    // console.log(this) this是page实例与上相同

    // this.setData就是react中的setState,setDate用于从逻辑层发送到视图层(异步)，同时改变对应的this.data的值(同步)
    this.setData({
      message:'在吗'
    },()=>{
      // console.log('update done')
    })
  },
  go2cart(){
  
      // 用wx的api形式跳转页面
      wx.switchTab({
        url: '/pages/cart/index',
        // url: '../cart/index',
      })
  },
  go2detail(){
    // 不允许跳转到tabBar，跳转到应用内某个页面并且关闭当前页面
    wx.redirectTo({
      url: '/pages/detail/index?name=jly&age=18',
    })
  },
  go2detail2(){
    // 与redirectTo不同，区别在于不允许跳转到tabBar，同样跳转到应用内某个页面但是保留不关闭当前页面，
    wx.navigateTo({
      url: '/pages/detail/index?name=jly&age=18',
    })
  }  
})
