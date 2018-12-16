<template>
  <div class="ys-index">
    <router-view style="padding-bottom: 53px"/>
    <tabbar>
      <tabbar-item link="/nav/index" :selected="$route.path === '/nav/index'">
        <img slot="icon" src="../assets/icon/index.svg">
        <img slot="icon-active" src="../assets/icon/index-selected.svg">
        <span slot="label">首页</span>
      </tabbar-item>

      <tabbar-item badge="3" link="/nav/cart" :selected="$route.path === '/nav/cart'">
        <img slot="icon" src="../assets/icon/cart.svg">
        <img slot="icon-active" src="../assets/icon/cart-selected.svg">
        <span slot="label">购物车</span>
      </tabbar-item>

      <tabbar-item link="/nav/order" :selected="$route.path === '/nav/order'">
        <img slot="icon" src="../assets/icon/order.svg">
        <img slot="icon-active" src="../assets/icon/order-selected.svg">
        <span slot="label">订单</span>
      </tabbar-item>

      <tabbar-item show-dot link="/nav/user" :selected="$route.path === '/nav/user'">
        <img slot="icon" src="../assets/icon/user.svg">
        <img slot="icon-active" src="../assets/icon/user-selected.svg">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>

</template>

<script>
  import {getToken} from "../util/util";
  import {setToken} from "../util/http/util";
  import {mapActions} from "vuex"
  import Tabbar from "../components/Tabbar/Tabbar";
  import TabbarItem from "../components/Tabbar/TabbarItem";
  //Check if the local cache needs to restore the previously crashed page
    export default {
        name: "Container",
        components: {TabbarItem, Tabbar},
        mounted(){
          this.initToken();
        },
      methods:{
          //if the locally cached token has not expired,use it to initialize the state
          initToken(){
              let initToken =getToken();
              console.assert(initToken,"old token not found!");
              /*for test --testing register
              wxAuth()*/
              if(initToken){
                  console.log("init token with action");
                  this.setToken(initToken);//=> this.$store.dispatch("setToken",initToken)
              }
          },
        ...mapActions(["setToken"])
      }
    }
</script>

<style scoped>

</style>
