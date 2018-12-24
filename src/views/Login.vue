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
    mounted(){
      let formData = new FormData();
      let code = getQueryString("code");
      formData.append("code",code);
      setToken(httpConfig.auth,formData, token=>{
        this.setToken(token);
        //todo: get user info

        //todo: return the last page.
        window.location.href = JSON.parse(localStorage.getItem('currentUrl'));
      },()=>{
        this.$router.push({path:`/register?code=${code}`})
      });
    },
    methods:{
      ...mapActions(["setToken"])
    },
  }
</script>

<style scoped>

</style>
