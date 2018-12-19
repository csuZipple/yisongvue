<template>
  <div class="ys-order-info">
    <p class="title">
      订单信息
    </p>
    <p>
      <span>订单号码</span>
      <span>{{orderId}}</span>
    </p>
    <p>
      <span>下单时间</span>
      <span>{{createTime}}</span>
    </p>
    <p>
      <span>支付方式</span>
      <span>{{pay[payType]}}</span>
    </p>
    <p>
      <span>配送地址</span>
      <span>{{address}}</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "OrderDetailInfo",
    props:{
      orderId:[Number,String],
      createTime:String,
      payType:Number,
      address:String
    },
    data(){
      return{
        pay:["在线支付","货到付款","钱包支付"]
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-order-info{
    padding: 20px;
    .title{
      font-size: 4vw;
      border-bottom: 2px solid rgb(237,237,237);
    }
    p{
      padding: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 3vw;
      :first-child{
        color: #161616;
      }
      :last-child{
        text-align: right;
        max-width: 60%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
      }
    }
  }
</style>
