<template>
  <li>
    <div class="ys-product"  @click="handleCheck">
      <a href="javascript:;" class="check" :class="{'check-active':selected}"></a>
      <img :src="image" :alt="alt">
      <div>
        <p class="title">{{title}}</p>
        <p class="price">￥ {{price}}</p>
      </div>
    </div>

    <div class="ys-number">
      <a href="javascript:;" @click="handleQuantity('-')">-</a>
      <input type="text" disabled v-bind:value="quantity" title=""/>
      <a href="javascript:;" @click="handleQuantity" >+</a>
    </div>
  </li>
</template>

<script>
  export default {
    name: "CartItem",
    props:{
      id:String,
      image:{
        type:String,
        default(){
          return require("../../../assets/image/product_wangzai.svg")
        }
      },
      title:String,
      price:Number,
      quantity:Number,
      selected:Boolean,
      alt:String
    },
    methods:{
      handleCheck(){
        this.$emit("handleSelect",[this.id,!this.selected]);
      },
      handleQuantity(type){
        if(type==='-')this.quantity>1&&this.$emit("handleQuantity",[this.id,this.quantity-1]);
        else this.$emit("handleQuantity",[this.id,this.quantity+1]);
      }
    }
  }
</script>

<style lang="less" scoped>
  li{
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1vw;

    .check{
/*      width: 5vw;
      height: 5vw;*/
      display: inline-block;
      width: 18px;
      height: 18px;//If  don't set the unit to px, the display on android will not be round.because vw or rem will get a float number.
      border-radius:50%;
      border: 1px solid #CCCCCC;
      margin: 3vw;
    }

    .check-active{
      background: #FFDF5C url('../../../assets/icon/check_right.svg') no-repeat center;
      background-size:contain;
      border: none;
    }

    .ys-number{
      align-self: flex-end;
      width: 17vw;
      height: 20px;
      border: 1px solid #cecece;


      display: flex;

      input{
        width: 50%;
        text-align: center;
        color: #555555;
        background: transparent;
      }

      a{
        width: 20px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #979797;
      }
      a:first-child{
        border-right: 1px solid #eee;
      }
      a:last-child{
        border-left: 1px solid #eee;
      }
    }

    .ys-product{
      display: flex;
      align-items: center;
      justify-content: space-around;

      div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        font-size: 3vw;
        color: #4A4A4A;
      }

      p{
        padding: 3px;
      }

      .title{
        color: #4A4A4A;
      }

      .price{
        color: #f00000;
      }

      img{
        width: 18vw;
        height: 18vw;
        border: 1px solid #eee;
        padding: 2px 3px;
        margin: 3px;
        object-fit: contain;
        background: #ffffff;
      }
    }
  }
</style>
