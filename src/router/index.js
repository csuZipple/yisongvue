import Vue from 'vue'
import Router from 'vue-router'
import Container from '../views/Container'
import Home from '../views/main/Home'
import Cart from '../views/cart/cart'
import Order from '../views/order/Order'
import User from '../views/user/User'
import Search from '../views/Search/Search'

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
      path:"/*",
      redirect:{
        name:"index"
      }
    }
  ]
})
