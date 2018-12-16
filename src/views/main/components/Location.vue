<template>
  <a href="javascript:;" class="ys-location" @click='onLocationClicked'>
    <img :src="icon" alt="">
    <span>{{location}}</span>
  </a>
</template>

<script>
  import {_get} from "../../../util/http/util";
  import {GET} from "../../../util/http/constant";
    export default {
        name: "Location",
      props:{
        icon:{
          type:String,
          default:require("../../../assets/icon/location.svg")
        },
        point:{
          type:Object,
          validator: function (value) {
            return value['latitude']&&value['longitude'] //must not be null
          }
        }
      },
      data(){
          return{
             location: "默认地址"
          }
      },
      methods:{
          onLocationClicked(){
            this.$router.push({
              path:"/selectStore",
              query: {
                latitude: this.point['latitude'],
                longitude:this.point['longitude']
              }
            })
          },
        getStores(){
          _get({
            url:GET.NearbyStores,
            params:{lat:this.point.latitude,lnt:this.point.longitude}
          }).then(res =>{
            return res.json();
          })
        }
      }
    }
</script>

<style lang="less" scoped>
.ys-location{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  color: #161616;
  font-size: 1.4rem;
  font-weight: 400;

  img{
    width: 16px;
    object-fit: contain;
  }


  span{
    padding: 0 12px;
  }

}
</style>
