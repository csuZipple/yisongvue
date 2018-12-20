<template>
  <div class="ys-search">
    <YsHeader class="header"  :show-right-text="true" :right-text="rightText" @onRightClicked="onSearch">
      <div class="ys-search-input-wrapper">
        <img src="../../assets/icon/search.svg" alt="search">
        <input v-model="keyword" placeholder="小浣熊"/>
        <img @click="keyword=''" v-show="keyword!==''" src="../../assets/icon/close.svg" alt="close">
      </div>
    </YsHeader>
    <div v-if="keyword===''">
      <SearchTips title="热门搜索" v-bind:data="mockData"/>
      <SearchTips v-if="showHistory" title="历史记录" :show-delete="true" @delete="showHistory = !showHistory"/>
    </div>
    <div class="tips-wrapper" v-else>
      <div class="tips">
        <SearchItem v-for="(item,index) in searchTips" v-bind:key="index" v-bind="item" @add="addToCart" @sub="subToCart"/>
      </div>
      <FloatingCart v-bind:total="currentTotal" @checkout="checkOut"/>
    </div>
  </div>
</template>

<script>
  import animated from 'animate.css'
  import SearchTips from "./components/SearchTips";
  import YsHeader from "../../components/Header";
  import {throttle} from "../../util/util";
  import SearchItem from "./components/SearchItem";
  import FloatingCart from "../../components/FloatingCart/FloatingCart";

  export default {
    name: "Search",
    components: {FloatingCart, SearchItem, YsHeader, SearchTips},
    methods:{
      onSearch(){
        console.log("search---",this.keyword);
        this.keyword = '';
      },
      onInputSearch(keyword){
        console.log("throttle input search:",keyword);
        //todo:change this.searchTips to update search item
      },
      addToCart(item){
        this.handleTotalChanges(0,item);
      },
      subToCart(item){
        this.handleTotalChanges(1,item);
      },
      handleTotalChanges(type,item){
        this.currentTotal = this.searchTips.reduce((total,cur)=>{
          if(cur['id']===item[0]){
            return total = !type?total+(+cur['price']):total-cur['price'];
          }
          return total;
        },this.currentTotal);
        this.updateCart(item);
      },
      updateCart(item){//item[id,quantity]
        //todo:update cart (add or sub) quantity.
        console.log("update cart next time!");
      },
      checkOut(){
        console.log("check out!");
        //todo:check out current item
      }
    },
    data(){
      return{
        showHistory:true,
        rightText:"搜索",
        keyword:"",
        mockData:[
          {
            productId:1,
            name:'和成天下'
          },
          {
            productId:2,
            name:'卫龙'
          },
          {
            productId:3,
            name:'雪花'
          },
          {
            productId:4,
            name:'统一老坛酸菜'
          },
          {
            productId:5,
            name:'芙蓉王'
          },
          {
            productId:6,
            name:'汤达人'
          }
        ],
        searchTips:[
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
        currentTotal:0
      }
    },
    watch:{
      keyword(cur){
        if(cur!==''){
          throttle(this.onInputSearch,null,[cur])
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-search{
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    .header{
      border-bottom:none;
      height: 80px;
      flex: 0 0 auto;
    }
    .ys-search-input-wrapper {
      width: 68%;
      height: 50%;
      background: rgba(0, 0, 0, .06);
      border-radius: 20px;
      display: flex;
      align-items: center;

      img{
        width: 22px;
        height: 22px;
        padding: 3px;
        margin: 0 8px;
        object-fit: contain;
      }

      input{
        background: transparent;
      }
      input:focus{
        border: none;
        outline: none;
      }
    }

    .tips-wrapper{
      padding: 8px 12px;
      flex: 1 0 auto;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .tips{
        overflow: scroll hidden;
        min-height: 400px; //prevent the soft keyboard from blocking
      }
    }
  }

</style>
