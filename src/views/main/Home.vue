<template>
    <div>
      <div class="ys-banner">
        <div class="wrapper search">
          <Search link="/search" placeholder="干脆面"/>
        </div>
        <div class="wrapper swiper">
          <swiper :list='swiperList'/>
        </div>
      </div>

      <div class="ys-store">
        <img :src ='logo' alt="yisong" class="ys-logo">
        <div class="wrapper" style="padding-left: 20%" >
          <Location v-bind="location" :storeName="storeName"/>
        </div>
        <div class="wrapper">
          <Notice :notices="notices"/>
        </div>
      </div>

      <div class="ys-classification">
          <CategoryCard v-for="item in categories" :link="item.link" :image="item.image" :key="item.id">{{item.text}}</CategoryCard>
      </div>

      <div v-for="(indexProduct,index) in indexProducts" v-bind:key="index">
        <Divider>{{indexProduct.type}}</Divider>
        <div class="ys-products">
          <Product v-for="item in indexProduct.products"  :image="item.image" :key="item.name+item.id" :title="item.title" :alt="item.alt" :sales="item.sales" :price="item.price"/>
        </div>
      </div>

      <Divider>我也是有底线的</Divider>


    </div>
</template>

<script>
    import Search from "./components/Search";
    import Swiper from "./components/Swiper";
    import Location from "./components/Location";
    import Notice from "./components/Notice";
    import CategoryCard from "./components/CategoryCard";
    import Divider from "./components/Divider";
    import Product from "./components/Product";

    import { createNamespacedHelpers } from 'vuex'

    const { mapState, mapActions } = createNamespacedHelpers('data');
    export default {
        name: "Home",
        components: {Product, Divider, Notice, Location, Swiper, Search,CategoryCard},
      data(){
          return{
            logo:require("../../assets/image/logo.svg"),//todo: check whether the logo is returned from the server or not
            categories:[
              {
              id:0,
              image:require("../../assets/icon/optimal.svg"),
              text:"壹送优选",
              link:"/optimal"
            },{
              id:1,
              image:require("../../assets/icon/sale.svg"),
              text:"团购",
              link:"/group"
            },{
              id:2,
              image:require("../../assets/icon/category.svg"),
              text:"全部产品",
              link:"/product"
            }],
          }
      },
      created(){
          this.requestData();//async
      },
      methods:{
          async requestData(){
            console.log("Have I chosen a store? ",Boolean(this.storeId));
              if(!Boolean(this.storeId)){
                const{latitude,longitude} = await this.setLocation(this);
                this.$router.push({
                  path:`/selectStore/${latitude}/${longitude}`
                })
              }else{
                console.log("yes, I have! continue requesting data..");
                this.setSwiper(this);
                this.setNotices(this);
                this.setIndexProducts(this);
              }
          },
        ...mapActions(["setSwiper",'setLocation','setNotices','setIndexProducts'])
      },
      mounted(){

      },
      computed:{
        ...mapState(['swiperList','location','storeId','storeName','notices','indexProducts'])
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
    height: 90px;
    padding:5px 20px ;

    .ys-logo{
      width: 80px;
      height: 80px;
      position: absolute;
      top: -50%;
      z-index: 10;
      padding: 5px;
      background: #fff;
    }

    .wrapper{
      display: flex;
    }
  }

  .ys-classification{
    padding: 5px 30px;
    display: flex;
    justify-content: space-around;
  }

  .ys-products{
    padding:0 20px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap:5px;
    grid-row-gap:5px;
    /*grid-template-rows: auto*/
  }
</style>
