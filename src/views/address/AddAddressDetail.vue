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
        //新增收货地址之后应该返回原地址
        window.location.href = JSON.parse(localStorage.getItem('currentUrl'));
      }
    }
  }
</script>

<style scoped>

</style>
