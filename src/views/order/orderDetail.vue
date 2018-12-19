<template>
  <div>
    <YsHeader :show-back="showBack">订单详情</YsHeader>
    <Preview v-bind="list"/>
    <Product v-bind:list="product"/>
    <Total v-bind:total="list.payPrice" v-bind:agio="list.price-list.payPrice" v-if="list.status===2"/>
    <OrderDetailInfo v-bind="list" v-else/>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import { createNamespacedHelpers } from 'vuex'
  import Preview from "./components/Preview";
  import Product from "./components/Product";
  import Total from "./components/Total";
  import OrderDetailInfo from "./components/OrderDetailInfo";
  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "orderDetail",
    components: {OrderDetailInfo, Total, Product, Preview, YsHeader},
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
        })[0];//must be unique
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
