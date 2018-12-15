<template>
  <div class="ys-tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  import {parentMixin} from "../../mixins/multi-items";

  export default {
    name: "tabbar",
    mixins:[parentMixin]
  }
</script>

<style lang="less" scoped>
  .ys-tab-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid rgba(200,200,200,0.36);
  }
</style>
