<template>
  <transition-group class="ys-notices" tag="ul" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight" >
      <li class="item" v-show="index === currentIndex" v-for="(item,index) in notices" :key="item.id">
        {{item.notice}}
      </li>
  </transition-group>
</template>

<script>

  import animated from 'animate.css'
  export default {
    name: "Notice",
    props:{
      notices:{
        type: Array,
      }
    },
    data(){
      return {
        currentIndex:0
      }
    },
    mounted(){
      if(this.notices.length>1){
        let timer = setInterval(this.updateNotices,3000);
        this.$once('hook:beforeDestroy',()=>{
          clearInterval(timer);
        })
      }
    },
    methods:{
      updateNotices(){
        this.currentIndex = (this.currentIndex+1)%this.notices.length;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url("../../../assets/style/color");
  @height:30px;
  .ys-notices{
    position: relative;
    width: 100%;
    height: @height;
    /*overflow-y: hidden;*/

    color: @notice-color;
    font-size:1.4rem;
    font-weight: 300;
    background: rgba(216,216,216,0.2);
    border-radius: 22px;

    li{
      position: absolute;
      list-style: none;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
