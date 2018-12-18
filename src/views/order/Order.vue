<template>
  <div>
      <Tab class="tab"/>
  </div>
</template>

<script>
  import Tab from "./components/Tab";
  export default {
    name: "Order",
    components: {Tab}
  }
</script>

<style lang="less" scoped>
.tab{
  padding: 20px 0 20px 30px;
}
</style>
