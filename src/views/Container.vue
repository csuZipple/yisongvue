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
  import {_get, setToken} from "../util/http/util";
  import {mapActions} from "vuex"
  import {registerWeixin,getNearbyStores} from "../util/http/util";
  import {GET} from "../util/http/constant";
  //Check if the local cache needs to restore the previously crashed page
    export default {
        name: "Container",
       created(){
            registerWeixin(function (wx) {
              wx.getLocation({
                type: 'gcj02',
                success(res) {
                  const {latitude,longitude} = res;
                  _get({
                    url:GET.NearbyStores,
                    params:{lat:latitude,lnt:longitude}
                  },res=>{
                    //todo: Save nearby stores to vuex
                  },err=>{
                    //todo: error
                  })
                },
                cancel(res){
                    console.warn("open your GPS to get nearby store list.")
                },
                fail(err){
                  console.error("failed to get location.")
                }
              });
            })
       },
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
