<template>
  <div class="ys-radio">
    <a href="javascript:;" :class="{'active':index===currentIndex}" v-for="(item,index) in text" v-bind:key="index" @click="onItemClick(index)">{{item}}</a>
  </div>
</template>

<script>
  export default {
    name: "GenderRadio",
    props:{
      text:{
        type:Array,
        default(){
          return ["男士","女士"];
        }
      }
    },
    methods:{
      onItemClick(item){
        this.currentIndex = item;
        this.$emit('onSelect',item);
      }
    },
    data(){
      return{
        currentIndex:0
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-radio{
    padding-bottom:5px;
    border-bottom:1px solid #eee;
    display: flex;

    a:first-child{
      margin-left: 70px;
    }
    a{
      padding: 3px 12px;
      margin: 0 12px;
      background: #ffffff;
      border:1px solid rgba(151,151,151,1);
      border-radius:5px;
      color: #999999;
    }
    a.active{
      background:rgba(255,223,92,1);
      color: #333333;
      border:1px solid rgba(255,223,92,1);
    }
  }
</style>
