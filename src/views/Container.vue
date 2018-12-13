<template>
  <footer>
    <router-view/>
    <p class=".footer">
      I'm footer container!
    </p>
  </footer>

</template>

<script>
  import {getToken} from "../util/util";
  import {setToken, wxAuth} from "../util/http/util";
  import httpConfig from '../util/http/constant'
  //Check if the local cache needs to restore the previously crashed page
    export default {
        name: "Container",
        mounted(){
          this.initToken();
        },
      methods:{
          //if the locally cached token has not expired,use it to initialize the state
          initToken(){
              let initToken =getToken();
              console.assert(initToken,"old token not found!");
              //for test --testing register
              wxAuth()
          }
      }
    }
</script>

<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
  }
</style>
