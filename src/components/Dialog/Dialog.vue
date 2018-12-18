<template>
  <div class="ys-mask">
    <div class="dialog">
      <slot name="icon" v-show="!simple"></slot> <!--todo: set icon -->
      <p>
        {{title}}
      </p>
      <slot name="describe" v-show="hasDesc"></slot>
      <div>
        <a href="javascript:;" @click="handleClick('cancel')">{{leftBtnText}}</a>
        <a href="javascript:;" @click="handleClick">{{rightBtnText}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Dialog",
    props:{
      icon:String,
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

  }
}
</style>
