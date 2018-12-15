<template>
  <div v-text="placeholder" class="ys-search" @click="onSearchClicked"></div>
</template>

<script>
  export default {
    name: "Search",
    props:{
      placeholder:String,
      link:String
    },
    methods:{
      onSearchClicked(){
        console.log(this.link);
        this.$router.push(this.link);
      }
    }
  }
</script>

<style lang="less" scoped>
  @height:50px;
  .ys-search{
    width: 80%;
    height: @height;
    border-radius:25px;
    background: rgba(255,255,255,.9);
    position: relative;
    color: rgb(199,199,199);
    line-height: @height;
    padding-left: 94px;
    border: 1px solid #eee;

    &:after{
      content: '';
      width: 22px;
      height: 22px;
      background: url("../../../assets/icon/search.svg") center no-repeat;
      background-size:contain;
      position: absolute;
      left: 40px;
      top: 50%;
      transform:translateY(-50%);
    }
  }
</style>
