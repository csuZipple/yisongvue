<template>
  <div class="ys-cell" @click="$emit('onCellClicked')">
    <span><slot></slot></span>
    <img src="../../../assets/icon/right.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "Cell"
  }
</script>

<style lang="less" scoped>
  .ys-cell{
    padding: 12px 5px;
    border-bottom:1px solid #eee;
    font-size: 4.5vw;
    color: #161616;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
      max-width: 400px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    img{
      width: 20px;
      object-fit: contain;
    }
  }
</style>
