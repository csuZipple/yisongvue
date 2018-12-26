<template>
  <div class="ys-preview">
    <PreviewOrderInfo v-if="status===2" :address="address" :username="username" :gender="gender" :phone="phone" :time="time" :pay-type="payType"/>
    <template v-else>
      <div class="wrapper">
        <div>
          <span>{{statusText[status]}}</span>
          <a class="yellow-btn" href="javascript:;" @click="getOneMore">再来一单</a>
        </div>
        <div v-if="status===0">
           <span>
               预计 <span style="color: #F1C616;">{{time.slice(-5)}}</span> 送达
           </span>

          <div class="btn">
            <a href="javascript:;" @click="applySaleAfter">申请售后</a>
            <a href="tel:10086">致电商家</a>
          </div>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
  import PreviewOrderInfo from "./PreviewOrderInfo";
  export default {
    name: "Preview",
    components: {PreviewOrderInfo},
    methods:{
      goMap(){
        console.log("see map detail! and modify address maybe@");//todo: map detail
      },
      getOneMore(){
        this.$emit("getOneMore");
      },
      applySaleAfter(){
        this.$emit("callSaleAfter")
      }
    },
    props:{
      status:Number,
      address:String,
      username:String,
      gender:Number,
      phone:[String,Number],
      time:String,
      payType:Number
    },
    data(){
      return{
        statusText:['卖家已接单','订单已完成']
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

    .wrapper{
      padding: 0 12px;
      color: #161616;
      font-size: 5vw;
      &>div{
        padding: 12px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &>div:last-child{
        font-size: 4vw;
      }


      .btn{
        a{
          padding: 5px;
          margin: 0 5px;
          border: 1px solid rgb(176,176,176);
          font-size: 3vw;
          color: #000000;
          border-radius:5px;
        }
      }
    }
    .yellow-btn{
      background: #FFDF5C;
      border-radius:6vw;
      font-size: 4.5vw;
      color: #333333;
      padding: 8px 20px;
    }
  }
</style>
