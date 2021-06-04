1.创建uniapp:文件->新建项目->选中uniapp->起名称和保存路径->创建
2.在微信开发工具中打开:在微信开发工具中点击设置->安全设置->打开服务端口
3.编译:回到HBuilderX->运行->运行到小程序模拟器->点击微信开发者工具，随后自动在打开
4.不建议直接在微信开发者工具中修改代码
5.目录结构:
	一个uni-app工程，默认包含如下目录及文件：
	┌─uniCloud              云空间目录，阿里云为uniCloud-aliyun,腾讯云为uniCloud-tcb（详见uniCloud）
	│─components            符合vue组件规范的uni-app组件目录
	│  └─comp-a.vue         可复用的a组件
	├─hybrid                App端存放本地html文件的目录，详见
	├─platforms             存放各平台专用页面的目录，详见
	├─pages                 业务页面文件存放的目录
	│  ├─index
	│  │  └─index.vue       index页面
	│  └─list
	│     └─list.vue        list页面
	├─static                存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
	├─uni_modules           存放[uni_module](/uni_modules)规范的插件。
	├─wxcomponents          存放小程序组件的目录，详见
	├─main.js               Vue初始化入口文件
	├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
	├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
	└─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见