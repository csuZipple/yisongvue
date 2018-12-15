<template>
    <div>
      <div class="ys-banner">
        <div class="wrapper search">
          <Search link="/search" placeholder="干脆面"/>
        </div>
        <div class="wrapper swiper">
          <swiper :list='imgList'/> <!--todo: finish the component-->
        </div>
      </div>

      <div class="ys-store">
        <img :src ='logo' alt="yisong" class="ys-logo">
        <div class="wrapper" style="padding-left: 30%" >
          <Location />
        </div>
        <div class="wrapper">
          <Notice/>
        </div>
      </div>
    </div>
</template>

<script>
    import Search from "./components/Search";
    import Swiper from "./components/Swiper";
    import Location from "./components/Location";
    import Notice from "./components/Notice";
    export default {
        name: "Home",
        components: {Notice, Location, Swiper, Search},
      data(){
          return{
            logo:require("../../assets/image/logo.svg"),
            imgList:[{
              src:require("../../assets/image/banner.svg"),
              alt:"default"
            }]
          }
      }
    }
</script>

<style lang="less" scoped>
  @height:180px;
  .ys-banner{
    position: relative;
    height: @height; /**/
    .wrapper{
      width: 100%;
      display: flex;
      justify-content: center;
      position: absolute;
    }
    .search{
      z-index: 10;
      top: 14px;
    }
    .swiper{
      height: @height;
      z-index: 1;
    }
  }

  .ys-store{
    position: relative;
    height: 140px;
    padding:5px 20px ;

    .ys-logo{
      width: 80px;
      height: 80px;
      position: absolute;
      top: -50%;
      z-index: 10;
      transform:translateY(50%);

      padding: 5px;
      background: #fff;
    }

    .wrapper{
      display: flex;
    }
  }
</style>
