<template>
  <div>
    <YsHeader :show-back="showBack">订单详情</YsHeader>
    <Preview v-bind="list"/>
    <Product v-bind:list="product"/>
    <Total v-bind:total="list.payPrice" v-bind:agio="list.price-list.payPrice"/>
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
        return this.orderList.filter(res => {
          return res['orderId'] === Number(this.orderId);
        })[0];
      },
      product(){
        return this.list.products;
      },
      ...mapState(['orderList'])
    }
  }
</script>

<style scoped>

</style>
