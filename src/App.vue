<template>
  <div id="app">
    <router-view/> <!-- root router == '\/'-->
    <Loading :show="isLoading"/>
  </div>
</template>

<script>
import Loading from "./components/Loading/Loading";
import { createNamespacedHelpers } from 'vuex'
const {mapState} = createNamespacedHelpers('data');
export default {
  name: 'App',
  components: {Loading},
  computed:{
    ...mapState(['isLoading'])
  }
}
</script>

<style>
  @import "assets/style/reset.css";
  @import "assets/style/ys.css";
  #app{
    height: 100%;
  }
</style>
