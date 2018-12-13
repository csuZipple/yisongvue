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
  import {mapActions} from "vuex"
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
              /*for test --testing register
              wxAuth()*/
              console.log("for testing : init initToken with :a ");
              initToken = "a";
              if(initToken){
                  console.log("init token with action");
                  this.setToken(initToken);//=> this.$store.dispatch("setToken",initToken)
              }
          },
        ...mapActions(["setToken"])
      }
    }
</script>

<style scoped>
  .footer{
    position: fixed;
    bottom: 0;
  }
</style>
