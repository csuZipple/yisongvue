<template>
  <a href="javascript:;" @click="onClicked">+</a>
</template>

<script>
  export default {
    name: "FloatingButton",
    methods:{
      onClicked(){
        this.$emit("onFloatBtnClicked");
      }
    }
  }
</script>

<style scoped>
  a{
    width: 50px;
    height: 50px;
    color: #ffffff;
    font-size: 8vw;
    background:rgba(255,223,92,1);
    box-shadow:2px 2px 10px 0 rgba(255,230,173,1);
    border-radius:50%;
    z-index: 20;

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 40px;
    bottom: 40px;
  }
</style>
