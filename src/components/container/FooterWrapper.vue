<template>
  <tabbar @on-index-change="change">
    <tabbar-item selected  link="home">
      <img slot="icon" src="../../assets/home.png">
      <span slot="label">首页</span>
    </tabbar-item>

    <tabbar-item show-dot link="cart">
      <img slot="icon" src="../../assets/home.png">
      <span slot="label">购物车</span>
    </tabbar-item>

    <tabbar-item  link="order">
      <img slot="icon" src="../../assets/home.png">
      <span slot="label">订单</span>
    </tabbar-item>

    <tabbar-item  link="user" badge="3">
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
    methods:{
      change(v){
        console.log(v)
      }
    }

  }
</script>

<style scoped>

</style>
