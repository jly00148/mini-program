const Koa = require('koa')
const router = require('koa-router')()
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const app = new Koa()

// 指定静态文件
app.use(bodyParser())
// app.use(static('./views/static')) //与下相同
app.use(static(__dirname+'/views/static')) 

router.get('/',async (ctx)=>{
    await ctx.render('index')
})


router.get('/carousel/list',async (ctx)=>{
    ctx.body="新闻页面"; 
})

// 启动路由:
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(8080,()=>{
	console.log('启动成功')
})