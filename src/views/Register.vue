<template>

</template>

<script>
  import {setToken} from "../util/http/util";
  import httpConfig from "../util/http/constant";
  import {getQueryString} from "../util/util";

  export default {
        name: "register",
        mounted(){
           let formData = new FormData();
           formData.append("code",getQueryString("code"));
           setToken(httpConfig.auth,formData);
        }
    }
</script>

<style scoped>

</style>
