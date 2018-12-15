<template>
    <span v-text="text" class="ys-badge"></span>
</template>

<script>
    export default {
        name: "Badge",
        props:{
          text:[String,Number]
        }
    }
</script>

<style scoped>
    .ys-badge{
      width: 16px;
      display: inline-block;
      text-align: center;
      background: #f74c31;
      color: #fff;
      font-size: 12px;
      height: 16px;
      line-height: 16px;
      border-radius: 8px;
      padding: 0;
      background-clip: padding-box;
      vertical-align: middle;
    }
</style>
