<template>
  <div class="ys-select-store">

    <ys-header>选择门店</ys-header>

    <div class="ys-avatar">
         <figure>
           <img src="../../assets/image/logo.svg" alt="壹送便利店">
           <figcaption>
             壹送便利店
           </figcaption>
         </figure>
    </div>

    <Store :storeList="nearbyStoreList" :latitude="latitude" :longitude="longitude"/>

    <p>
      location:{{latitude}},{{longitude}},current StoreId:{{storeId}}
    </p>
  </div>

</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  import {_get} from "../../util/http/util";
  import {GET} from "../../util/http/constant";
  import YsHeader from "../../components/Header";
  import Store from "./components/Store";

  const { mapState, mapActions } = createNamespacedHelpers('data');
    export default {
        name: "SelectStore",
      components: {Store, YsHeader},
      props:["latitude","longitude"],
        created(){
          this.getStores();
        },
        computed:{
          ...mapState(['storeId'])
        },
        methods:{
          getStores(){
               const vm = this;
               //todo:112.326786,28.583499
              // _get({url:GET.NearbyStores,params:{lat:vm.latitude,lnt:vm.longitude}}).then(res =>res.json()).then(res=>{
              _get({url:GET.NearbyStores,params:{lnt:112.326790,lat:28.583499}}).then(res =>res.json()).then(res=>{
                 if(res['data'] instanceof Array){
                    this.nearbyStoreList = res['data'];
                 }
              }).catch(err=>{
                console.error("Failed getting near store data."+err);
              })
          },
        ...mapActions(['setStoreId'])
      },
      data(){
          return{
            nearbyStoreList:[]
          }
      }
    }
</script>

<style lang="less" scoped>
 .ys-avatar{
   width: 100%;
   height: 180px;
   padding: 20px 50px;
   border-bottom: 1px solid #cccccc;


   figure{
     width: 100%;
     height: 100%;

     color: #161616;
     font-size: 1.8rem;
     font-weight: 400;

     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
   }
   img{
     width: 90px;
     height: 90px;
     object-fit: cover;

     border-radius:50%;
   }


 }
</style>
