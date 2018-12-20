<template>
  <div class="ys-product-list">
    <YsHeader show-right-icon="" @onRightClicked="search">产品列表</YsHeader>

    <Tab v-model="currentCategory" custom-bar-width="35px" prevent-default @on-before-index-change="switchTabItem">
      <TabItem :selected="index===0" @on-item-click="onItemClick" v-for="(item,index) in mockData.types" v-bind:key="index">{{item.text}}</TabItem>
    </Tab>

    <div class="content">

      <div class="tab-wrapper">
          <div v-for="item in 100" :class="{'active':item===2}">{{item}}元特惠</div>
      </div>

      <div class="item-wrapper">
        <div style="background: #ffffff;overflow: hidden">
          <ProductItem class="item" small v-for="(item,index) in mockData.products" v-bind:key="index" v-bind="item" @add="addToCart" @sub="subToCart"/>
        </div>

        <Divider style="color: #666666;">这是我的底线</Divider>

      </div>

    </div>
    <div class="fixed">
      <FloatingCart v-bind:total="0"/>
    </div>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import Tab from "../../components/Tab/Tab";
  import TabItem from "../../components/Tab/TabItem";
  import FloatingCart from "../../components/FloatingCart/FloatingCart";
  import ProductItem from "../../components/ProductItem";
  import Divider from "../../components/Divider";
  export default {
    name: "Product",
    components: {Divider, ProductItem, FloatingCart, TabItem, Tab, YsHeader},
    methods:{
      search(){
        console.log("go to search!")
      },
      onItemClick(i){
        console.log("clicked at ",i);
      },
      switchTabItem(index){
        console.log("switch to ",index);
        //todo:fetch data!
        this.currentCategory = index;
      },
      addToCart(){

      },
      subToCart(){

      }
    },
    data(){
      return{
        currentCategory:0,
        mockData:{
          types:[
            {
              id:0,
              text:"团购"
            },{
              id:1,
              text:"壹送优选"
            },{
              id:2,
              text:"槟榔"
            },{
              id:3,
              text:"烟酒"
            },{
              id:4,
              text:"饮料"
            },{
              id:5,
              text:"生活用品"
            },{
              id:6,
              text:"辣条"
            }
          ],
          products:[
            {
              id:"123",
              title:"旺仔小馒头原味16g",
              price:"1.5",
              image:require("../../assets/image/product_wangzai.svg"),
              alt:"旺仔小馒头",
            },
            {
              id:"321",
              title:"旺仔小馒头原味16g",
              price:"1.00",
              image:"",
              alt:"旺仔小馒头",
            }
          ],
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-product-list{
    background: #F4F4F4;
    min-height: 100%;

    .content{
      margin: 3px 0;
      display: flex;
      justify-content: space-between;

      .tab-wrapper{
        width: 100px;
        font-size: 4vw;
        color: #333333;

        &>div{
          height: 50px;
          padding: 8px;

          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
        }

        .active{
          background: transparent;
          font-weight: 500;
        }
      }
      .item-wrapper{
        margin: 0 9px;

        .item{
          margin: 20px 8px;
        }
        .item:first-child{
          margin-top: 10px;
        }
      }
    }

    .fixed{
      position: fixed;
      bottom: 20px;
      width: 100%;
    }
  }
</style>
