<template>
  <div class="ys-mask">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div v-show="isShow" class="dialog">
        <slot name="icon" v-show="!simple"></slot> <!--todo: set icon -->
        <p>
          {{title}}
        </p>
        <slot name="describe" v-show="hasDesc"></slot>
        <div class="btn-wrapper">
          <a href="javascript:;" @click="handleClick('cancel')">{{leftBtnText}}</a>
          <a href="javascript:;" @click="handleClick">{{rightBtnText}}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import animated from 'animate.css'
  export default {
    name: "Dialog",
    props:{
      isShow:Boolean,
      title:String,
      leftBtnText:String,
      rightBtnText:String
    },
    mounted(){
      if(this.$slots.icon){
        this.simple = false;
      }
      if(this.$slots.describe){
        this.hasDesc = true;
      }
    },
    methods:{
      handleClick(type){
        type==='cancel'?this.$emit("cancel"):this.$emit("ok");
      }
    },
    data(){
      return{
        simple:true,
        hasDesc:false
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-mask{
    position: fixed;
    width: 100vw;
    height: 100vh;

    background: rgba(0,0,0,.2);
    z-index: 20;

    display: flex;
    justify-content: center;
    align-items: center;

    .dialog{
      background: #ffffff;
      border-radius:12px;

      display: flex;
      flex-direction: column;
      align-items: center;

      img{
        padding: 8px;
      }

      p{
        color: #333333;
        font-size: 5vw;
        padding: 9vw;
      }

      .describe{
        color: #999999;
        font-size: 3vw;
      }

      .btn-wrapper{
        background: rgb(255,223,92);
        width: 100%;
        height: 45px;
        display: flex;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;

        a{
          width: 50%;
          height: 100%;
          color: #000;
          font-size: 4vw;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
</style>
