<template>
  <div class="item">
    <p class="title">{{title}} <span>{{extra}}</span></p>
    <p class="address">{{address}}</p>
  </div>
</template>

<script>
  export default {
    name: "AddressItem",
    props:{
      title:String,
      address:String,
      extra:String
    }
  }
</script>

<style lang="less" scoped>
  .item{
    border-bottom: 1px solid #eee;
    padding: 5px 0;

    span{
      font-size: 3vw;
    }

    .title{
      font-size: 4vw;
      color: #333;
    }

    .address{
      font-size: 3vw;
      color: #999;
    }
  }
</style>
