<template>
  <transition-group class="ys-notices" tag="ul" enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight" >
      <li class="item" v-show="index === currentIndex" v-for="(item,index) in notices" :key="item.id">
        公告：{{item.notice}}
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
        default(){
          return [{
            id:1,
            notice:"下单闪电配送，平均20分钟送达!"
          },{
            id:2,
            notice:"这是第二条测试数据"
          },{
            id:3,
            notice:"这是第3条测试数据"
          },{
            id:4,
            notice:"这是第4条测试数据"
          }]
        }
      }
    },
    data(){
      return {
        timer:null,
        currentIndex:0
      }
    },
    computed:{

    },
    mounted(){
      if(this.notices.length>1){
        this.timer = setInterval(this.updateNotices,3000);
      }
    },
    beforeDestroy(){
      this.timer && clearInterval(this.timer);
    },

    methods:{
      updateNotices(){
        this.notices.push(this.notices.shift());
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
