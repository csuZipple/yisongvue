<template>
  <div>
    <YsHeader>商品详情</YsHeader>
    <div class="wrapper">
      <div class="img-block">
        <img :src="product.image" :alt="product.alt">
      </div>
      <div class="card">
        <div class="product-info">
          <p class="title">{{product.title}}</p>
          <p class="sales">售量：{{product.sales}}</p>
          <p class="price">￥{{product.price}}</p>
        </div>
        <div class="product-operation">
          <a class="contact" :href="'tel:' + product.contact">联系商家</a>
          <a class="btn" href="javascript:;" @click.stop="addCart" v-if="!product.quantity">
            + 加入购物车
          </a>
          <div class="ys-number" v-else>
            <a href="javascript:;" @click.stop="handleQuantity('-')">-</a>
            <div>{{product.quantity}}</div>
            <a href="javascript:;" @click.stop="handleQuantity" >+</a>
          </div>
        </div>
      </div>
      <p class="info" style="padding: 20px"><span>配送</span> <span>现在下单,预计{{new Date().getHours()}}分钟后送达</span></p>
    </div>
    <div class="info-wrapper">
      <p class="product-header">商品信息</p>
      <p class="info"><span>品牌</span> <span>{{product.brand}}</span></p>
      <p class="info"><span>产地</span> <span>{{product.location}}</span></p>
      <p class="info"><span>单位</span> <span>{{product.unit}}</span></p>
    </div>

    <div class="fixed">
      <FloatingCart/>
    </div>

  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import FloatingCart from "../../components/FloatingCart/FloatingCart";
  import { createNamespacedHelpers } from 'vuex'

  const {mapActions,mapState} = createNamespacedHelpers('data');
  export default {
    name: "ProductDetail",
    components: {FloatingCart, YsHeader},
    props:['productId'],
    methods:{
      addCart(){
        ++this.product.quantity;//add 1 each time
        this.addToCart(this.product);//todo:构造一个product 对象
      },
      handleQuantity(type){
        if(type === '-'){
          this.product.quantity&&--this.product.quantity;
          this.subToCart(this.product);
        }else{
          ++this.product.quantity;
          this.addToCart(this.product);
        }
      },
      ...mapActions(['addToCart','subToCart'])
    },
    data(){
      return{
        product:{
          id:this.productId,
          title:"旺仔小馒头原味16g",
          sales:48,
          price:"1.00",
          contact:18373151083,
          image:require("../../assets/image/bitmap.png"),
          alt:"旺仔小馒头~",
          unit:"袋",
          location:"中国",
          brand:"旺仔小馒头",
          quantity:0,
        }
      }
    }
  }
</script>

<style lang="less" scoped>

  @import "../../assets/style/ys.css";
  .wrapper{
    padding: 12px 20px;

    .img-block{
      position: relative;
      width: 100%;
      height: 180px;
      img{
        position: absolute;
        width: 100%;
        max-height: 100%;
        object-fit: contain;
        z-index: -1;
      }
    }
    .card{
      margin-top: -30px;
      padding: 12px;
      box-shadow:2px 2px 13px 0 rgba(0,0,0,0.1);
      background: #ffffff;
      border-radius:6px;

      display: flex;
      justify-content: space-between;

      &>div{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .product-info{

        p{
          padding: 8px 12px;
        }

        .title{
          font-size: 5vw;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space:nowrap;
        }

        .sales{
          font-size: 3vw;
          color: rgba(0,0,0,.5);
        }

        .price{
          color: #ff0000;
          font-size: 4vw;
        }

      }

      .product-operation{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .contact{
          /*border-left: 1px solid #eee;*/
          color: #333333;
          padding: 0 30px;
          margin: 10px 0;

          display: flex;
          align-items: center;

          position: relative;
          &:before{
            content: '';
            width: 20px;
            height: 20px;
            background: url("../../assets/icon/contact-store.svg") center no-repeat;
            background-size:80%;
            position: absolute;
            left: 0;
          }
        }

        .ys-number{
          width: 80%;
          padding: 5px;
          background: #FFE900;
          box-shadow:1px 1px 3px 0 rgba(186,186,186,0.3);
          border-radius: 15px;


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

        .btn{
          padding: 5px 8px;
          background: #FFDF5C;
          border-radius:13px;
          color: #333;
          font-size: 3vw;

          display: flex;
          justify-content: center;
          align-items: center;
        }

      }
    }
  }
  .info-wrapper{
    padding: 12px 30px;
    .product-header{
      border-top: 1px solid #eeeeee;
      padding: 12px 0 0 0;
      font-size:5vw;
      color: #333333;
    }
  }
  .info{
    padding: 8px 0;
    font-size: 3vw;
    display: flex;
    align-items: center;
    span:first-child{
      color: #666666;
    }
    span:last-child{
      margin-left: 15px;
      color: #333;
    }
  }
</style>
