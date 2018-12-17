<template>
  <div>
    <YsHeader :show-back="false" :show-right-text="true" :right-text="rightText" v-on:onRightClicked="manage">购物车</YsHeader>
    <ul>
      <CartItem  v-for="(item,index) in list" v-bind:key="index" v-bind="item"></CartItem>
    </ul>

  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import CartItem from "./componets/CartItem";
  export default {
    name: "Cart",
    components: {CartItem, YsHeader},
    methods:{
      manage(){
        console.log("clicked! cart")
      },
      checkOut(){

      }
    },
    data(){
      return{
        rightText:"管理",
        list:[
          {
            title:"卫龙辣条原味150g-我是这条街最亮的星",
            price:2.5,
            quantity:2,
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
