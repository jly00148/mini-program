// index.js
// 获取应用实例
const app = getApp()
const regeneratorRuntime = require('../../lib/regeneratorRuntime/regeneratorRuntime.js')
const api = require('../../api/index.js')
const { async } = require('../../lib/regeneratorRuntime/regeneratorRuntime.js')

Page({
  // 初始化数据绑定:
  data: {
    ads:[],
    categoryList:[],
    floorList:[]
  },

  onLoad:async function(){
    // const adsPromise = api.getPositionAds({
    //   position:2
    // })

    // const adsResult = await adsPromise

    // console.log(adsResult)

    this.setData({
      ads:[
        {_id:1,url:'../../iconfont/home.png'},
        {_id:2,url:'../../iconfont/cart.png'}
      ],
      categoryList:[
        {_id:1,url:'../../iconfont/home.png',mobileName:'首页'},
        {_id:2,url:'../../iconfont/cart.png',mobileName:'购物车'}
      ],
      floorList:[
        {
          key:1,
          floor:[{index:1,title:'首页',_id:4,name:'asd',price:47},{index:2,title:'购物车',_id:6,name:'asd',price:47}]
        },
        {
          key:2,
          floor:[{index:3,title:'首页',_id:5,name:'asd',price:47},{index:4,title:'购物车',_id:8,name:'asd',price:47}]
        },
      ]
    })
  }
})
