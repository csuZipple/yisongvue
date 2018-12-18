<template>
  <div>
    <Tab class="tab"/>
    <div class="ys-order" v-if="orderList.length!==0">
      <OrderItem v-for="(item,index) in orderList" v-bind="item" v-bind:key="index" @getMore="getMore"/>
    </div>
    <NoData v-else pageName="index">
      <p style="color: #666666; font-size: 3vw;font-weight: 500;">您当前还没有点餐</p>
      <p style="color: #666666; font-size: 3vw;font-weight: 500;">先逛逛看?</p>
    </NoData>

  </div>
</template>

<script>
  import Tab from "./components/Tab";
  import OrderItem from "./components/OrderItem";
  import { createNamespacedHelpers } from 'vuex'
  import NoData from "../../components/NoData/NoData";
  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "Order",
    components: {NoData, OrderItem, Tab},
    computed:{
      ...mapState(['orderList'])
    },
    methods:{
      getMore(orderId){
        //todo: jump to order detail page
      }
    }
  }
</script>

<style lang="less" scoped>
  .tab{
    padding: 30px 0 30px 30px;
  }
  .ys-order{
    padding: 3px 5vw;
  }
</style>
