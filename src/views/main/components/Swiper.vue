<template>
  <div class="ys-swiper">
    <ul>
      <li v-for="item in list">
        <img :src="item.src" :alt="item.alt">
      </li>
    </ul>
    <ul v-if="showDot" class="dot-list">
      <li v-for="dot in list.length" class="dot"></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
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
        return this.length>1;
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
    ul{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
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
        border-radius: 3px;
        background-color: @dot-color;
      }
    }
  }
</style>
