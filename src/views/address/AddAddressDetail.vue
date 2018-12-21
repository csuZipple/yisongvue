<template>
  <div>
    <YsHeader>新增收货地址</YsHeader>
    <wrapper @onOkClicked="submit"/>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import Wrapper from "./components/Wrapper";
  export default {
    name: "AddressDetail",
    components: {Wrapper, YsHeader},
    methods:{
      submit(info){
        console.log("submit!");
        console.log(info);
      }
    }
  }
</script>

<style scoped>

</style>
