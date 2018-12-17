<template>
  <div class="ys-swiper">
    <transition-group tag="ul" class="swiper-item" enter-active-class="animated bounceIn" leave-active-class="animated fadeOut">
      <li v-for="(item,index) in list" v-show="index === currentIndex" :key="item.id">
        <img :src="item.src" :alt="item.alt">
      </li>
    </transition-group>
    <ul v-if="showDot" class="dot-list">
      <li v-for="(dot,index) in list.length" class="dot" :class="{'dot-active':index===currentIndex}"></li>
    </ul>
  </div>
</template>

<script>
  import animated from 'animate.css'
  export default {
    name: "Swiper",
    data(){
      return{
        timer:null,
        currentIndex:0
      }
    },
    props:{
      list:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    computed:{
      showDot(){
        return this.list.length>1;
      }
    },
    beforeDestroy(){
      this.timer && clearInterval(this.timer);
    },

    methods:{
      animation(){
        console.log("Switch!@");
        // this.list.push(this.list.shift()); -- error: will call the watcher!
        this.currentIndex = (this.currentIndex+1)%this.list.length;
      }
    },
    watch:{
      list:function (n,o) {
        console.log(n);
        if(n.length>1){
          this.timer = setInterval(this.animation,3000);
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @dot-color:#d0cdd1;
  @dot-color-active:#FF9900;
  .ys-swiper{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    ul{
      li{
        list-style: none;
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .swiper-item{
      width: 100%;
      height: 100%;
      position: relative;
      li{
        position: absolute;
      }
    }

    .dot-list{
      padding: 10px;
      position: absolute;
      right: 0;
      bottom: 0;

      .dot{
        display: inline-block;
        vertical-align: middle;
        width: 6px;
        height: 6px;
        margin: 3px;
        border-radius: 3px;
        background-color: @dot-color;
      }
      .dot-active{
        background-color: @dot-color-active;
      }
    }
  }
</style>
