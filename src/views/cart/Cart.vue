<template>
   <div>
     <div class="ys-cart-header">
       购物车
     </div>
   </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: "Cart",
        methods:{
          checkOut(){

           },
          auth(success,failed){
              //Check whether the user logs in before the shopping cart settles or not
              if(this.token){
                  if(typeof success==='function') success(this.token);
              }else{
                 //expired or first enter in this application.
                //Check whether the local cache has a token or not
                if(typeof failed==='function') failed();
              }
           }
          },
        computed:{
          ...mapState(["token"])
        }
    }
</script>

<style scoped>

</style>
