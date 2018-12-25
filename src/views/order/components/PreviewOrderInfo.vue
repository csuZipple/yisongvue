<template>
  <div class="ys-preview-order-info">
    <div class="info">
      <p>订单配送至</p>
      <div class="address" @click="goMap">
        <p>{{address}}</p>
        <img src="../../../assets/icon/right.svg" alt="">
      </div>
      <p>{{username}} （{{sex[gender]}}）{{phone}}</p>
    </div>
    <p>
      <span>送达时间</span>
      <span>尽快送达 ({{time.slice(-5)}})</span>
    </p>
    <p>
      <span>支付方式</span>
      <span>{{pay[payType]}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "PreviewOrderInfo",
    props:{
      address:String,
      username:String,
      gender:Number,
      phone:[String,Number],
      time:String,
      payType:Number
    },
    methods: {
      goMap() {
        console.log("see map detail! and modify address maybe@");//todo: map detail
      },
    },
    data(){
      return{
        sex:["先生","女士"],
        pay:["在线支付","货到付款","钱包支付"],
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-preview-order-info{
    width: 100%;
    .info{
      color: #161616;
      p{
        padding: 3px 0;
      }

      .address{
        padding: 3px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p{
          width: 90%;
          color: #000;
          font-size: 5vw;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space:nowrap;
        }

        img{
          width: 20px;
          height: 20px;
          object-fit: contain;
        }
      }
    }
    &>p{
      padding: 10px 0;
      border-bottom:1px solid rgba(216,216,216,0.8);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size:4vw;

      span:last-child{
        color: #F5AC00;
        padding: 3px;
      }
    }
    &>p:last-child{
      border-bottom: none;
    }
  }

</style>
