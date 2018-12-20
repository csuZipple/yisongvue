<template>
  <div class="bottom">
    <div>
      ￥1.00 <!--todo:compute current total-->
    </div>
    <div>
      去结算
    </div>
  </div>
</template>

<script>
  export default {
    name: "FloatingCart"
  }
</script>

<style lang="less" scoped>

  .bottom{
    height: 50px;
    padding: 0 12px;
    margin: 12px 0;

    display: flex;
    justify-content: space-between;

    :first-child{
      width: 70%;
      background: rgba(51,51,51,0.6);
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
      color: #ffffff;
      justify-content: flex-end;
      padding: 0 12px;

      position: relative;
      &:before{
        content: '';
        width: 80px;
        height: 70px;
        background: url("../../assets/icon/shopping-cart.svg") center no-repeat;
        background-size: 100%;
        position: absolute;
        left: 5%;
        top: -50%;
      }
    }
    :last-child{
      width: 30%;
      background: #FFDF5C;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;
    }
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 5vw;
    }
  }
</style>
