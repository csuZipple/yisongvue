import Vue from 'vue'
import Router from 'vue-router'
import Container from '../views/Container'
import Home from '../views/main/Home'
import Cart from '../views/cart/cart'
import Group from '../views/group/Group'
import Order from '../views/order/Order'
import User from '../views/user/User'
import Register from '../views/Register'

Vue.use(Router);
const routerList = [];//
const mockRouterList = [
  {
    path: "home",
    name: "home",
    component:Home
  },
  {
    path: "cart",
    name: "cart",
    component:Cart
  },
  {
    path: "group",
    name: "group",
    component:Group
  },
  {
    path: "order",
    name: "order",
    component:Order
  },
  {
    path: "user",
    name: "user",
    component:User
  },
  {
    path: "register",
    name: "register",
    component:Register
  }];
export default new Router({
  routes: [
    {
      path:"/yisong",
      name:"yisong",
      component:Container,
      children:mockRouterList
    },{
      path:"/*",
      redirect:{
        name:"home"
      }
    }
  ]
})
