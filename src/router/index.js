import Vue from 'vue'
import store from '../store/index'
import Router from 'vue-router'
import Container from '../views/Container'
import Home from '../views/main/Home'
import Cart from '../views/cart/cart'
// import Order from '../views/order/Order'
import Group from '../views/group/Group'
import Product from '../views/product/Product'
import ProductDetail from '../views/product/ProductDetail'
import User from '../views/user/User'
import Search from '../views/Search/Search'
import SelectStore from '../views/SelectStore/SelectStore'
import OrderDetail from "../views/order/orderDetail"
import SuccessPay from "../views/order/SuccessPay"
import ConfirmOrder from "../views/order/ConfirmOrder"
import Address from '../views/address/Address'
import ModifyDetail from '../views/address/ModifyAddressDetail'
import AddDetailContainer from '../views/address/AddAddressDetail'
import Help from '../views/help/HelpList'
import HelpDetail from '../views/help/HelpDetail'
import Login from '../views/Login'
import Register from '../views/Register'

Vue.use(Router);
const Order = ()=> import('../views/order/Order');
const router =  new Router({
  mode: 'history',
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
      path:"/address/",
      name:"address",
      props:true,
      component:Address
    },{
      path:"/addressDetail/modify/:id",
      name:"modifyAddress",
      props:true,
      component:ModifyDetail,
    },{
      path:"/addressDetail/new",
      name:"addAddress",
      component:AddDetailContainer
    },{
      path:"/help",
      name:"help",
      component:Help
    },{
      path:"/helpDetail/:id",
      name:"helpDetail",
      component:HelpDetail,
      props:true
    },{
      path:"/login",
      name:"login",
      component:Login,
    },{
      path:"/register",
      name:"register",
      component:Register,
    },{
      path:"/confirmOrder",
      name:"confirmOrder",
      component:ConfirmOrder,
    },{
      path:"/success/pay",
      name:"SuccessPay",
      props:true,
      component:SuccessPay,
    },{
      path:"/*",
      redirect:{
        name:"index"
      }
    }
  ]
});


router.beforeEach(function (to, from, next) {
  store.dispatch('data/hideLoading');
  store.state.data.requests.forEach(xhr=>xhr.abort());
  store.state.data.requests =[];
  next();
});


export default router;
