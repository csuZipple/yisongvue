<template>
  <div class="ys-preview">
    <div class="info">
      <p>订单配送至</p>
      <div class="address" @click="goMap">
        <p>长沙市雨花区万家丽南路960号 长沙理工大学</p>
        <img src="../../../assets/icon/right.svg" alt="">
      </div>
      <p>凌宝 （女士）15366302980</p>
    </div>
    <p>
      <span>送达时间</span>
      <span>尽快送达 (17:14 送达)</span>
    </p>
    <p>
      <span>支付方式</span>
      <span>在线支付</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: "Preview",
    methods:{
      goMap(){
        console.log("see map detail!");//todo: map detail
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-preview{
    width: 100%;
    padding: 20px;
    border-bottom: 5px solid rgb(247,247,247);
    /*box-shadow:0 0 30px 2px #e2e2e2;*/
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
