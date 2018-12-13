<template>

</template>

<script>
  import {setToken} from "../util/http/util";
  import httpConfig from "../util/http/constant";
  import {getQueryString} from "../util/util";
  import {mapActions} from "vuex"

  export default {
        name: "register",
        mounted(){
           let formData = new FormData();
           formData.append("code",getQueryString("code"));
           setToken(httpConfig.auth,formData, token=>{
                this.setToken(token);//'this' is for ?
           });
        },
        methods:{
          ...mapActions(["setToken"])
        }
    }
</script>

<style scoped>

</style>
