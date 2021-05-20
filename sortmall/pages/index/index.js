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
      console.log('update done')
    })
  }
})
