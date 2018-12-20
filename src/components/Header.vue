<template>
  <div class="ys-header">
    <a href="javascript:;" class="left" @click="onBackClicked" v-show="showBack"></a>
    <p>
      <slot></slot>
    </p>
    <a href="javascript:;" class="right" :class="{'active':showRightIcon}" @click="onRightClicked" v-if="showRightText||showRightIcon">{{rightText}}</a>

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
        (this.showRightText||this.showRightIcon) && this.$emit("onRightClicked")
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
      },
      rightText:String,
      showRightIcon:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-header{
    width: 100vw;
    height: 7vh;
    background: #fff;
    border-bottom: 1px solid #cccccc;

    position: relative;

    // Q：设计稿是IOS，测试机是android，两者的viewport本来就不相同 因此按照比例实现的效果图与UI不符
    a{
      min-width: 4.8vw;
      height: 4vh;
      z-index: 10;
      position: absolute;

      top: 50%;
      transform: translateY(-50%);
    }
    a.left{
      left: 4.3vw;
      background: url("../assets/icon/back.svg") center no-repeat;
      background-size: contain;
    }
    a.right{
      right: 4vw;
      color: #333333;
      font-size: 3.4vw;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .active{
      background: url("../assets/icon/product-list-search.svg") center no-repeat;
      background-size: contain;
    }

    p{
      height: 100%;
      color: #161616;
      font-size: 4vw;
      font-weight: 400;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
