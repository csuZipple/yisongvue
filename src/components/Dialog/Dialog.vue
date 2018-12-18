<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <div class="ys-mask">
      <div class="dialog">
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
    </div>
  </transition>
</template>

<script>
  import animated from 'animate.css'
  export default {
    name: "Dialog",
    props:{
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

  display: flex;
  justify-content: center;
  align-items: center;

  .dialog{
    background: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      padding: 8px;
    }

    p{
      color: #000;
      font-size: 5vw;
    }

    .describe{
      color: #999999;
      font-size: 3vw;
    }

    .btn-wrapper{

    }
  }
}
</style>
