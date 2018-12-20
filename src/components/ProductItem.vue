<template>
  <div class="ys-search-item" @click="getDetail">
    <img :src="image" alt="旺仔小馒头">
    <div :class="['info',{'small':small}]">
      <p class="title">{{title}}</p>
      <p class="sales">售量：{{sales}}</p>
      <p class="price">￥{{price}}</p>
    </div>

    <div class="btn-wrapper">
      <a href="javascript:;" @click.stop="addToCart" v-if="!quantity">
        +
      </a>
      <div class="ys-number" v-else>
        <a href="javascript:;" @click.stop="handleQuantity('-')">-</a>
        <div>{{this.quantity}}</div>
        <a href="javascript:;" @click.stop="handleQuantity" >+</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ProductItem",
    props:{
      id:[String,Number],
      title:{
        type:String,
        default:"旺仔小馒头"
      },
      sales:{
        type:Number,
        default:1
      },
      keyword:String,
      price:[String,Number],
      image:{
        type:String,
        default:require("../assets/image/product_wangzai.svg")
      },
      small:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      addToCart(){
        this.$emit("add",[this.id,++this.quantity]);//add 1 each time
      },
      handleQuantity(type){
        type==='-'?this.quantity&&this.$emit("sub",[this.id,--this.quantity]):this.$emit("add",[this.id,++this.quantity])
      },
      getDetail(){
        this.$router.push({
          path:`/productDetail/${this.id}`
        })
      }
    },
    data(){
      return{
        quantity:0
      }
    }
  }
</script>

<style lang="less" scoped>
  .margin(){
    margin: 8px;
  }
  .ys-search-item{
    height: 65px;
    margin: 8px 12px;
    display: flex;
    justify-content: space-around;
    img{
      width: 65px;
      height: 100%;
      object-fit: contain;
      .margin();
      background: #ffffff;
      border: 1px solid #eee;
      padding: 3px 0;
    }
    .info{
      height: 100%;
      font-size: 4vw;
      .margin();
      p{
        margin: 3px 0;
      }

      .title{
        color: #4A4A4A;
      }

      .sales{
        color: rgba(0,0,0,.5);
        font-size: 3vw;
      }
      .price{
        color: #ff0000;
        font-size: 3vw;
      }
    }

    .small{
      font-size: 3vw;
    }

    .btn-wrapper{
      width: 60px;
      .margin();
      align-self: flex-end;
      display: flex;
      justify-content: flex-end;
      &>a{
        color: #ffffff;
        width: 20px;
        height: 20px;
        border-radius:50%;
        background: #FFE900;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow:1px 1px 3px 0 rgba(186,186,186,0.3);
      }


      .ys-number{
        width: 100%;
        height: 20px;
        align-self: flex-end;
        background: #FFE900;
        box-shadow:1px 1px 3px 0 rgba(186,186,186,0.3);
        border-radius: 10px;


        display: flex;

        div{
          width: 50%;
          color: #555555;
          background: transparent;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        a{
          width: 20px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }
      }
    }

  }
</style>
