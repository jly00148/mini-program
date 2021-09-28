# 简介：uni-app外卖微信小程序

## 起步：
> 运行->运行到小程序模拟器->微信开发者工具

## 技术栈：
* uView框架布局UI界面、后台基于nodejs+koa框架开发后台管理系统；
* 界面采用flex布局，less/sass编写css；
* 使用vuex作为状态管理工具；
* uni-app路由语法实现页面之间的跳转；

## uView配置：
- 1.在main.js文件中中配置uView之引入uView主JS库:import uView from "view-ui/uview-ui";Vue.use(uView);
- 2.在uni.scss文件中配置uView之在项目根目录的uni.scss中引入此文件:@import 'view-ui/uview-ui/theme.scss';
- 3.在App.vue文件中配置uView之引入uView基础样式:@import "view-ui/uview-ui/index.scss";
- 4.在pages.json文件中配置easycom组件模式"^u-(.*)":"@/view-ui/uview-ui/components/u-$1/u-$1.vue"

## 项目优化：
* 封装全局共同组件和本地缓存数据以便在不同的业务场景下调用；
* 使用对象封装登录逻辑，promise封装api接口，减少代码冗余；
* 页面初始化loading加载、图片懒加载，关注用户体验；

## 相关链接：
* [uView](https://www.uviewui.com/)
* [uni-app](https://uniapp.dcloud.io/)
* [vuex](https://vuex.vuejs.org/zh/guide/)