<template>
  <tabbar>
    <tabbar-item :selected="selected===0"  link="home">
      <img slot="icon" src="../../assets/home.png">
      <span slot="label">首页</span>
    </tabbar-item>

    <tabbar-item :selected="selected===1" show-dot link="cart">
      <img slot="icon" src="../../assets/home.png">
      <span slot="label">购物车</span>
    </tabbar-item>

    <tabbar-item :selected="selected===2" link="order">
      <img slot="icon" src="../../assets/home.png">
      <span slot="label">订单</span>
    </tabbar-item>

    <tabbar-item :selected="selected===3" link="user" badge="3">
      <img slot="icon" src="../../assets/home.png">
      <img slot="icon-active" src="../../assets/logo.png">
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import {Tabbar ,TabbarItem} from 'vux'

  export default {
    name: "Footer",
    components: {Tabbar,TabbarItem},
    computed:{
      selected(){
          const path = this.$route.path;
          let index = 0;
          switch(path){
            case "/yisong/home":
              break;
            case "/yisong/cart":
              index = 1;
              break;
            case "/yisong/order":
              index = 2;
              break;
            case "/yisong/user":
              index = 3;
              break;
            default:
          }
          return index;
      }
    }
  }
</script>

<style scoped>

</style>
