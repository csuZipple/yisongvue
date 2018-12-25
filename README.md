# yisong_vue

> A wx h5 project for electronic commerce
需要微信認證的開發者賬號以及相應的scope權限

有一些css样式可以抽取出来放入全局css 比如居中 flex
首页返回顶部
     
ys-number 这个样式可以抽成组件-- 现在不好抽了
路由异步加载
首屏优先加载
购物车结算  用户登录 获取用户id 创建订单--支付
鉴权 - 判断token是否为空 因为setToken之后会同步user信息
购物车如何去支付，如何展示订单-更新订单
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
