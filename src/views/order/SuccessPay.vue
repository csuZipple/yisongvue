<template>
  <div class="ys-success-pay">
    <YsHeader>订单详情</YsHeader>
    <main>
      <img src="../../assets/image/logo.svg" alt="壹送">
      <p class="status">{{statusText}}</p>
      <p class="desc">{{desc}}</p>
    </main>

    <a class="btn" href="javascript:;" @click="go">查看订单</a>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  export default {
    name: "SuccessPay",
    components: {YsHeader},
    props:['orderId'],
    mounted(){
      if(!this.orderId){
        this.$toast("当前页面不支持直接访问...")
      }
    },
    methods:{
      go(){
        this.$router.push({path:`/orderDetail/${this.orderId}`})
      }
    },
    data(){
      return{
        statusText:"支付成功",
        desc:"感谢您对壹送的信任，请耐心等待20分钟左右送达."
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-success-pay{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    main{
      padding: 12px 30px ;
      margin: 50px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img{
        width: 80px;
        object-fit: contain;
        border-radius: 50%;
      }
      p{
        margin: 5px 0;
      }
      .status{
        color: #333333;
        font-size:5vw;
      }
      .desc{
        color: #666666;
        font-size:3vw;
      }
    }

    .btn{
      width: 68%;
      font-size: 5vw;
      padding: 8px 0;
      background:rgba(255,223,92,1);
      color: #000;
      border-radius:23px;

      display: flex;
      justify-content: center;
      align-items: center;

    }
  }

</style>
