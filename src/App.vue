<template>
  <div id="app">
    <router-view/> <!-- root router == '\/'-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "assets/style/reset.css";
  @import "assets/style/ys.css";
  #app{
    height: 100%;
  }
</style>
