<template>
  <a href="javascript:;" class="ys-tab-item" :class="{'active':isActive}" @click="onItemClick(true)">
    <div class="ys-tab-item-icon" :class="{'showDot':showDot}" v-if="!simple">
      <slot name="icon" v-if="!simple && !(hasActiveIcon && isActive)"></slot>
      <slot name="icon-active" v-if="!simple && hasActiveIcon && isActive"></slot>
      <sup v-if="badge"><Badge :text="badge"></Badge></sup>
    </div>
    <p class="ys-tab-item-label" :class="{'active':isActive}">
      <slot name="label"></slot>
    </p>
  </a>
</template>

<script>
  import {childMixin} from "../../mixins/multi-items";
  import Badge from "./Badge";

  export default {
    name: "tabbar-Item",
    components: {Badge},
    props:{
      showDot:{
        type:Boolean,
        default:false
      },
      badge:String,
      link:String,
    },
    mounted(){
      if(!this.$slots.icon){
        this.simple = true;
      }
      if(this.$slots['icon-active']){
        this.hasActiveIcon = true;
      }
    },
    mixins:[childMixin],
    computed:{
      isActive(){
        return this.$parent.index === this.currentIndex;
      }
    },
    data(){
      return {
        simple:false,
        hasActiveIcon:false
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/color.less";
  .ys-tab-item{
    display: block;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    padding: 5px 0 0;
    font-size: 0;
    color: #999;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  .active{
    color: @ys-theme-color !important;
  }
  .ys-tab-item-icon{
    position: relative;/*for dot position*/
    display: inline-block;
    width: 27px;
    height: 27px;
    img{
      width: 100%;
      height: 100%;
    }
    &>sup{
    position: absolute;
    top: -8px;
    left: 100%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 101;
    }
  }

  .ys-tab-item-label{
    text-align: center;
    color: #999;
    font-size: 10px;
    line-height: 1.8;
  }
  .showDot:after{
    content: "";
    position: absolute;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background-clip: padding-box;
    background-color: #f74c31;
    right: -3px;
    top: -3px;
  }
</style>
