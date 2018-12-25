<template>
  <div class="bottom">
    <div v-if="isActive">
      <div class="active" @click="onCartClicked">
        ￥{{total}} <!--todo:compute current total-->
      </div>
      <div @click="checkOut">
        去结算
      </div>
    </div>
    <div v-else>
      <div style="font-size: 3vw; justify-content:center;">
        未选购商品
      </div>
      <div style="background: rgba(51,51,51,0.6); font-size: 3vw;color: #ffffff;">
        还差{{tip}}元起送
      </div>
    </div>

  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'

  const {mapActions,mapState} = createNamespacedHelpers('data');
  export default {
    name: "FloatingCart",
    methods:{
      checkOut(){
        this.$router.push({path:"/nav/cart"});//todo: check out directly or go to cart page?
      },
      onCartClicked(){
        this.$router.push({path:"/nav/cart"})
      }
    },
    computed:{
      isActive(){
        console.log(Boolean(this.total));
        return this.total-this.tips>0
      },
      tip(){
        return this.total-this.tips<0?this.tips-this.total:this.tips;
      },
      total(){
        return this.cartItem.reduce((t,c)=>{
          return t+c['price']*c['quantity']
        },0)
      },
      ...mapState(['cartItem'])
    },
    data(){
      return {
        tips:1
      }
    }
  }
</script>

<style lang="less" scoped>

  .active{
    &:before{
      background-image: url("../../assets/icon/shopping-cart.svg") !important;
    }
  }

  .bottom{

    &>div{
      height: 50px;
      padding: 0 12px;
      margin: 12px 0;
      display: flex;
      justify-content: space-between;

      :first-child{
        width: 70%;
        background: rgba(51,51,51,0.6);
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
        color: #ffffff;
        justify-content: flex-end;
        padding: 0 12px;

        position: relative;
        &:before{
          content: '';
          width: 80px;
          height: 70px;
          background: url("../../assets/icon/shopping-cart-nothing.svg") center no-repeat;
          background-size: 100%;
          position: absolute;
          left: 5%;
          top: -50%;
        }
      }
      :last-child{
        width: 30%;
        background: #FFDF5C;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
      }
      div{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5vw;
      }
    }

  }
</style>
