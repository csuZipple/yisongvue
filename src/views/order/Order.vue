<template>
  <div>
      <Tab class="tab"/>
      <div class="ys-order">
        <OrderItem v-for="(item,index) in orderList" v-bind="item" v-bind:key="index"/>
      </div>
  </div>
</template>

<script>
  import Tab from "./components/Tab";
  import OrderItem from "./components/OrderItem";
  import { createNamespacedHelpers } from 'vuex'
  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "Order",
    components: {OrderItem, Tab},
    computed:{
      ...mapState(['orderList'])
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
