<template>
  <div class="ys-order-item">
    <p class="title">
      <span style="font-weight: 500;">{{shopName}}</span>
      <span style="color: #FFB93D;font-size:3vw;">{{state[status]}}</span>
    </p>
    <div class="product-wrapper">
      <div class="product">
        <figure class="item" :class="{'expired':status!==1}" v-for="(item,index) in products" v-bind:key="index">
          <img :src="item.image" :alt="item.alt">
          <figcaption>
            {{item.title}}
          </figcaption>
        </figure>
      </div>
      <a class="link" href="javascript:;" @click="">

      </a>
    </div>
    <p class="desc">订单号：{{orderId}}</p>
    <p class="desc">送餐时间：{{time}}</p>
  </div>
</template>

<script>
  export default {
    name: "OrderItem",
    props:{
      shopName:String,
      status:Number,
      state:{
        type:Array,
        default(){
          return ['订单交易中','交易完成','未付款'];
        }
      },
      products:Array,
      orderId:[String,Number],
      time:String
    }
  }
</script>

<style lang="less" scoped>
  @width:2vw;
  @beforeWidth:1vw;
  .ys-order-item{
    border-radius:8px;
    box-shadow:0 0 20px 0 rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 0 12px ;

    p{
      padding: 1vw @width;
      color: #262626;
    }

    .product-wrapper{

      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0 2vw;
      padding: 10px 0;
      background: rgba(245,245,245,1);

      .link{
        width: 30px;
        height: 30px;
        background: url("../../../assets/icon/order-link.svg") no-repeat center;
        background-size:50%;
        margin-top: -20px;
      }
    }
    .product{
      display: flex;
      min-height: 100px;
      justify-content: space-around;

      .item{
        padding-right: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img{
          width: 12vw;
          object-fit: contain;
          margin-bottom:6px;
        }

        figcaption{
          margin-top:  6px;
        }

        &:after{
          content: '+';
          position: absolute;
          font-size: 24px;
          width: 30px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          color: #AEA9AA;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          margin-top: -10px;
        }
        &:last-child{
          padding-right: 0;
          &:after{
            content: '';
          }
        }
      }

    }
    .title{
      height: 8vw;
      font-size:4vw;
      display:flex;
      align-items: center;
      justify-content: space-between;
      color: #333333;
      position: relative;
      &:before{
        content: '';
        background: #FFB93D;
        width: @beforeWidth;
        height: 70%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .desc{
      padding-left: 3vw;
      &:last-child{
        padding-bottom: 10px;
      }
    }
    .expired{
      img{
        filter: grayscale(100%);
      }
    }
  }
</style>
