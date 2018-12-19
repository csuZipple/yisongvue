<template>
  <div class="ys-total">
    <div>
      <span>{{totalText}}<span style="color: #f00;">￥{{total}}</span></span>
      <span>已优惠:￥{{agio}}</span>
    </div>
    <a href="javascript:;" @click="onClicked">{{btnText}}</a>
  </div>
</template>

<script>
  export default {
    name: "Total",
    methods:{
      onClicked(){
        this.$emit("toPay");
      }
    },
    props:{
      btnText:{
        type:String,
        default:"去支付"
      },
      total:{
        type:[String,Number],
        default:'16.00'
      },
      totalText:{
        type:String,
        default:'合计：'
      },
      agio:{
        type:[String,Number],
        default:"2.3"
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-total{
    width: 100%;
    height: 80px;
    padding: 8px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;

    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
      font-size: 4vw;
      display: flex;
      justify-content: space-around;
      align-items: center;

      &>span{
        padding: 5px;
      }

      &>span:last-child{
        color: #999999;
        font-size: 2vw;

        position: relative;
      }

      &>span:last-child:before{
        content: '';
        background: #999999;
        width: 1px;
        height: 60%;
        position: absolute;
        left:0;
        top: 50%;
        transform: translateY(-50%);
      }

    }

    a{
      background: #FFDF5C;
      border-radius:6vw;
      font-size: 4.5vw;
      color: #333333;
      padding: 8px 20px;
    }
  }
</style>
