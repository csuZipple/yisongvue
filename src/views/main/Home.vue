<template>
    <div>
      <div class="ys-banner">
        <div class="wrapper">
          <Search link="/search" placeholder="干脆面"/>
        </div>

      </div>
    </div>
</template>

<script>
    import Search from "./components/Search";
    export default {
        name: "Home",
        components: {Search}
    }
</script>

<style lang="less" scoped>
  .ys-banner{
    .wrapper{
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
</style>
