<template>
  <a href="javascript:;" class="ys-location" @click='onLocationClicked'>
    <img :src="icon" alt="">
    <span>{{storeName}}</span>
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
      latitude:[String,Number],
      longitude:[String,Number],
      storeName:[String]
    },
    methods:{
      onLocationClicked(){
        let vm = this;
        this.$router.push({
          path:`/selectStore/${vm.latitude}/${vm.longitude}`
        })
      },
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
