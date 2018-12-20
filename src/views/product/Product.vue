<template>
  <div class="ys-product-list">
    <YsHeader show-right-icon="" @onRightClicked="search">产品列表</YsHeader>

    <Tab v-model="currentCategory" custom-bar-width="35px" prevent-default @on-before-index-change="switchTabItem">
      <TabItem :selected="index===0" @on-item-click="onItemClick" v-for="(item,index) in mockData.types" v-bind:key="index">{{item.text}}</TabItem>
    </Tab>

    <div class="content">

      <div class="tab-wrapper">

      </div>

      <div class="item-wrapper">

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
  import SearchItem from "../../components/ProductItem";
  export default {
    name: "Product",
    components: {SearchItem, FloatingCart, TabItem, Tab, YsHeader},
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

        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-product-list{
    background: #F4F4F4;
    height: 100%;

    .content{
      display: flex;
    }

    .fixed{
      position: fixed;
      bottom: 20px;
      width: 100%;
    }
  }
</style>
