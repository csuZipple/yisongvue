<template>
  <div class="ys-header">
    <a href="javascript:;" @click="onBackClicked" v-show="showBack">
    </a>
    <p>
      <slot></slot>
    </p>
    <a href="javascript:;" @click="onRightClicked" v-show="showRightText"></a>
  </div>
</template>

<script>
  export default {
    name: "ys-header",
    methods:{
      onBackClicked(){
        this.$router.go(-1);
      },
      onRightClicked(){
        this.showRightText && this.emit("onRightClicked")
      }
    },
    props:{
      showBack:{
        type:Boolean,
        default:true
      },
      showRightText:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-header{
    width: 100%;
    height: 53px;
    background: #fff;
    border-bottom: 1px solid #cccccc;

    position: relative;

    a{
      width: 30px;
      height: 30px;
      background: url("../assets/icon/back.svg") center no-repeat;
      background-size: contain;
      z-index: 10;
      position: absolute;
      left: 8px;
      top: 50%;
      transform: translateY(-50%);
    }
    p{
      padding: 5px 10px;
      height: 100%;
      color: #161616;
      font-size: 1.8rem;
      font-weight: 400;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
