<template>
  <div>
    <YsHeader>修改收货地址</YsHeader>
    <wrapper @onOkClicked="submit" v-bind="address"/>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import Wrapper from "./components/Wrapper";
  export default {
    name: "AddressDetail",
    components: {YsHeader,Wrapper},
    props:['addressId'],
    methods:{
      submit(info){
        console.log("submit modify!");
        console.log(info);
      }
    },
    data(){
      return{
        address: { //get data from mapState by id
          id:2,
          username:"漠叹尘",
          phone:"18337151083",
          address:"长沙市天心区韶山南路 中南大学铁道学院 邹博收",
          addressDetail:"铁一舍 405",
          gender:1
        }
      }
    }
  }
</script>

<style scoped>

</style>
