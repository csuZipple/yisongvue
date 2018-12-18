<template>
  <div class="ys-tab">
    <a :class="['ys-tab-item',{'active':currentIndex===index}]" href="javascript:;" v-for="(item,index) in text" @click="changeTab(index)">{{item}}</a>
  </div>
</template>

<script>
  export default {
    name: "Tab",
    methods:{
      changeTab(index){
        if(index!==this.currentIndex){
          this.currentIndex = index;
          this.$emit('changeTab',index);
        }
      }
    },
    data(){
      return{
        text:["待取","全部"],
        currentIndex:0
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-tab{
    display: flex;
    .ys-tab-item{
      border: 1px solid #FFE0AD;
      color: #666666;
      font-size:4.5vw;
      padding: 5px 35px;
      border-radius:20px;

      &:not(:first-child){
        margin-left: -30px;
      }
    }
    .active{
      background: #FFDF5C;
      color: #333333;
    }
  }
</style>
