<template>
  <a href="javascript:;" class="ys-location" @click='onLocationClicked'>
    <img :src="icon" alt="">
    <span>{{location}}</span>
  </a>
</template>

<script>
    export default {
        name: "Location",
      props:{
        icon:{
          type:String,
          default:require("../../../assets/icon/location.svg")
        }
      },
      data(){
          return{
             location: "世纪大厦店"
          }
      },
      methods:{
          onLocationClicked(){
            console.log("clicked!")
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
