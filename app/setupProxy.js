const { createProxyMiddleware } = require('http-proxy-middleware')
const proxy = require('http-proxy-middleware')


module.exports = function (app) {
    // proxy第一个参数为要代理的路由
    // 第二参数中target为代理后的请求网址，changeOrigin是否改变请求头，其他参数请看官网
    app.use(
        proxy('/api', {
            // http://localhost:4000/ 地址只是示例，实际地址以项目为准
            target: 'http://localhost:8000',
            // 跨域时一般都设置该值 为 true
            changeOrigin: true,
            // 重写接口路由
            pathRewrite: {
                '^/api': '' // 这样处理后，最终得到的接口路径为： http://localhost:8080/xxx
            }
        })
    )
}
