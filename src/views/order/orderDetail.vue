<template>
  <div>
    <YsHeader :show-back="showBack">订单详情</YsHeader>
    <Preview/>
    <Product/>
    <Total/>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import { createNamespacedHelpers } from 'vuex'
  import Preview from "./components/Preview";
  import Product from "./components/Product";
  import Total from "./components/Total";
  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "orderDetail",
    components: {Total, Product, Preview, YsHeader},
    props:['orderId'],
    data(){
      return{
        showBack:true
      }
    },
    computed:{
      list(){
        return this.orderList.filter(res=>{
          return res['orderId']===this.orderId;
        })
      },
      ...mapState(['orderList'])
    }
  }
</script>

<style scoped>

</style>
