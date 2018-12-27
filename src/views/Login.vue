<template>
  <div>
    正在登陆中---
  </div>
</template>

<script>
  import {setToken} from "../util/http/util";
  import httpConfig from "../util/http/constant";
  import {getQueryString} from "../util/util";
  import { createNamespacedHelpers } from 'vuex'

  const { mapActions } = createNamespacedHelpers('data');
  export default {
    name: "login",
    mounted: function () {
      let code = getQueryString("code");
      if(code&&code!==''){
        console.log("开始请求后台服务器获取用户信息");
        let formData = new FormData();
        formData.append("code", code);
        setToken(httpConfig.auth, formData, async data => {
          await this.setToken({token:data.token,userId:data.userId});
          let url = JSON.parse(localStorage.getItem('currentUrl'));
          localStorage.removeItem('currentUrl');//clean
          window.location.href = url;
        }, () => {
          this.$router.push({path: `/register?code=${code}`})
        });
      }else{
        this.$toast('error path');
      }

    },
    methods:{
      ...mapActions(["setToken"])
    },
  }
</script>

<style scoped>

</style>
