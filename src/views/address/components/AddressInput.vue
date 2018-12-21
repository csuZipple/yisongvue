<template>
  <div class="ys-address-input" :class="{'short':shorter}">
      <span>{{label}}</span>
      <input type="text" :value="value" @input="$emit('input',$event.target.value)" title="" required :placeholder="placeHolder">
  </div>
</template>

<script>
  export default {
    name: "AddressInput",
    props:{
      label:String,
      placeHolder:String,
      shorter:{
        type:Boolean,
        default:false
      },
      value:[String,Number]
    }
  }
</script>

<style lang="less" scoped>
  .ys-address-input{
    margin: 15px 0;
    border-bottom: 1px solid #D8D8D8;
    display: flex;
    span{
      width: 60px;
      margin-left:5px;
      font-size: 17px;
      font-weight:500;
    }

    input{
      padding-left:20px;
    }
  }
  .short{
    border-bottom: none;
    input{
      border-bottom: 1px solid #D8D8D8;
    }
  }
</style>
