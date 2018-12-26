<template>
  <div id="app">
    <router-view/> <!-- root router == '\/'-->
    <Loading :show="isLoading" :text="loadingText"/>
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
    ...mapState(['isLoading','loadingText'])
  },
  mounted(){
    window.ononline = function() {
      this.$toast("成功连接网络")
    };
    window.onoffline = ()=> {
     this.$toast("网络已断开，请检查您的网络设置")
    }
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
