import Vue from 'vue'
import Router from 'vue-router'
import Container from '../views/Container'
import Home from '../views/main/Home'
import Cart from '../views/cart/cart'
import Order from '../views/order/Order'
import Group from '../views/group/Group'
import Product from '../views/product/Product'
import ProductDetail from '../views/product/ProductDetail'
import User from '../views/user/User'
import Search from '../views/Search/Search'
import SelectStore from '../views/SelectStore/SelectStore'
import OrderDetail from "../views/order/orderDetail"

Vue.use(Router);
export default new Router({
  routes: [
    {
      path:"/nav",//包含底部导航栏
      name:"nav",
      component:Container,
      children:[
        {
          path:"index",
          name:"index",
          component:Home
        },{
          path:"cart",
          name:"cart",
          component:Cart
        },{
          path:"order",
          name:"order",
          component:Order
        },{
          path:"user",
          name:"user",
          component:User
        }
      ]
    },{
      path:"/search",
      name:"search",
      component:Search
    },{
      path:"/selectStore/:latitude/:longitude",//lnt and lat
      name:"select",
      component:SelectStore,
      props:true
    },{
      path:"/group",
      name:"group",
      component:Group
    },{
      path:"/product",
      name:"product",
      component:Product
    },{
      path:"/productDetail/:productId",
      name:"productDetail",
      component:ProductDetail,
      props:true
    },{
      path:"/orderDetail/:orderId",
      name:"orderDetail",
      props:true,
      component:OrderDetail
    },{
      path:"/*",
      redirect:{
        name:"index"
      }
    }
  ]
})
