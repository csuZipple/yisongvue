<template>
  <div class="ys-cart-wrapper">
    <YsHeader class="header" :show-back="false" :show-right-text="true" :right-text="rightText" @onRightClicked="manage">购物车</YsHeader>

    <div class="cart">
      <ul>
        <CartItem  v-for="(item,index) in cartItem" v-bind:key="index" v-bind="item" @handleSelect="onItemSelected" @handleQuantity="onQuantityChange" ></CartItem>
      </ul>
    </div>

    <CartBottom class="bottom" @selectAll="handleSelectAll"/>

  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import CartItem from "./componets/CartItem";
  import CartBottom from "./componets/CartBottom";
  import { createNamespacedHelpers } from 'vuex'
  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "Cart",
    components: {CartBottom, CartItem, YsHeader},
    methods:{
      manage(){
        if(this.rightText==='管理'){
          this.rightText = '完成'
        }else{
          this.rightText = '管理'
        }
      },
      checkOut(){

      },
      onQuantityChange(item){//id=item[0] quantity=item[1];
        this.cartItem.filter(res=>{//Modify the original array with a reference type
          if(res['id']===item[0]){
            res['quantity'] = item[1];
          }
        })
      },
      onItemSelected(item){
        console.log(item);
        this.cartItem.filter(res=>{
          if(res['id']===item[0]){
            res['selected'] = item[1];
            console.log(res);
          }
        })
      },
      handleSelectAll(isSelectAll){
        this.cartItem.filter(res=>{
          res['selected']=isSelectAll;
        })
      }
    },
    data(){
      return{
        rightText:"管理",
      }
    },
    computed:{
      ...mapState(['cartItem'])
    }
  }
</script>

<style lang="less" scoped>
  .ys-cart-wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
      flex: 0 0 auto;
    }
    .cart{
      padding: 8px 0;
      flex: 1 0 auto;
    }
    .bottom{
      flex: 0 0 auto;
    }
  }
</style>
