const path = require('path'); // 引入python的path模块，功能一样
function resolve (dir) {
    return path.join(__dirname, dir); //__dirname 是node的一个全局变量，即获得当前文件所在目录的完整目录名
}

const isProduction = process.env.NODE_ENV === "production";// 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)

module.exports = {
    // 是否需要二级域名访问资源
    publicPath: "./",
    // 输出文件目录 // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
    outputDir: "dist",
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。区别public/static第三方文件
    assetsDir: "assets",
    // 是否开启eslint保存检测
    lintOnSave: false,
    // 生产环境是否生成 sourceMap 文件，打包时不生成.map文件
    productionSourceMap: false,
    // webpack配置
    chainWebpack: (config) => {
    　　config.resolve.alias  // 为指定目录设置全局别名
    　　.set('@', resolve('src'))
    　　.set('@public', resolve('public'))
    　　　　},
    // 跨域配置https://t-op.vistel.cn/do
    devServer: {
        // 本地ip地址
        port: 9526,
        open: false, // 自动开启浏览器
        compress: true, // 开启压缩
        overlay: {
            warnings: false, // 错误、警告在页面弹出
            errors: true
    },
    disableHostCheck: true,
    // 跨域代理
    proxy: {
        "/mock": {
        target: "http://localhost:3040", // 目标代理服务器地址 
        changeOrigin: true, // 允许跨域
        ws: true,
        pathRewrite: {
            "^/mock": ""
          }
        },
        "/api": {
        target: "http://localhost:3040",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            "^/api": ""
        }
      }
    }
  }
};