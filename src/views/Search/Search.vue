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
      <SearchTips v-if="historySearch.length!==0" title="历史记录" v-bind:data="historySearch" show-delete @delete="deleteHistorySearch" @onHistoryClicked="onHistoryClicked"/>
    </div>
    <div class="tips-wrapper" v-else>
      <div class="tips" v-if="searchTips.length!==0">
        <SearchItem :keyword="keyword" v-for="(item,index) in searchTips" v-bind:key="index" v-bind="item" @add="addCart($event,item)" @sub="subCart($event,item)"/>
      </div>
      <div class="tips"  v-else>
        <p style="text-align: center">
          未查询到此商品信息，请检查您输入的关键词
        </p>
      </div>
      <FloatingCart/>
    </div>
  </div>
</template>

<script>
  import animated from 'animate.css'
  import SearchTips from "./components/SearchTips";
  import YsHeader from "../../components/Header";
  import {throttle} from "../../util/util";
  import SearchItem from "../../components/ProductItem";
  import FloatingCart from "../../components/FloatingCart/FloatingCart";
  import {GET} from "../../util/http/constant";
  import { createNamespacedHelpers } from 'vuex'

  const {mapActions,mapState} = createNamespacedHelpers('data');
  export default {
    name: "Search",
    components: {FloatingCart, SearchItem, YsHeader, SearchTips},
    methods:{
      onSearch(){
        console.log("search---",this.keyword);//todo: whether search button is useful or not.
        this.keyword = '';
      },
      onInputSearch(keyword){
        console.log("throttle input search:",keyword);
        let url = GET.Search(keyword);
        fetch(url).then(res=>res.json()).then(res=>{
          console.log("获取搜索提示,",res.data);
          this.searchTips = res.data;
        }).catch(err=>{
          console.log("搜索商品失败 ",err);
          this.$toast("搜索商品失败",err);
        });
        this.saveSearchKeyWord(keyword);
      },
      saveSearchKeyWord(keyword){
        let old = JSON.parse(localStorage.getItem("searchKeyword"))||[];
        let flag = false;
        for (let i = 0; i < old.length; i++) {
          if(keyword.startsWith(old[i])){
            old[i] = keyword;
            flag = true;
            break;
          }
          if(old[i].startsWith(keyword)){
            flag = true;
            break;
          }
        }
        if(!flag){
          old.push(keyword);
        }
        this.historySearch = old;
        localStorage.setItem("searchKeyword",JSON.stringify(old));
      },
      deleteHistorySearch(){
        this.historySearch = [];
        localStorage.setItem("searchKeyword",JSON.stringify([]));
      },
      onHistoryClicked(item){
        this.keyword = item;
      },
      addCart(item,product){
        this.addToCart(product);
      },
      subCart(item,product){
        this.subToCart(product);
      },
      getHotSearch(){
        fetch(GET.HotSearch).then(res=>res.json()).then(res=>{
          console.log("获取热搜商品 ",res.data);
          this.mockData = res.data;
        }).catch(err=>{
          this.$toast("获取热搜商品失败，请检查您的网络情况.",err)
        })
      },
      getHistorySearch(){
        this.historySearch = JSON.parse(localStorage.getItem("searchKeyword"))||[];
      },
      ...mapActions(['addToCart','subToCart'])
    },
    mounted(){
      this.getHotSearch();
      this.getHistorySearch();
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
         /* {
            id:"123",
            title:"旺仔小馒头原味16g",
            price:"1.5",
            image:require("../../assets/image/product_wangzai.svg"),
            alt:"旺仔小馒头",
          },
          {
            id:"321",
            title:"牛肉泡面老婆饼",
            price:"1.00",
            image:"",
            alt:"旺仔小馒头",
          }*/
        ],
        historySearch:[]
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
    }

    .tips-wrapper{
      padding: 8px 0;
      flex: 1 0 auto;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .tips{
        padding: 0 12px;
        overflow: scroll hidden;
        min-height: 400px; //prevent the soft keyboard from blocking
      }
    }
  }

</style>
