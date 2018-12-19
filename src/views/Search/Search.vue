<template>
  <div>
    <YsHeader style="border-bottom:none;height: 80px;" :show-right-text="true" :right-text="rightText" @onRightClicked="onSearch">
       <div class="ys-search-input-wrapper">
         <img src="../../assets/icon/search.svg" alt="search">
         <input v-model="keyword" placeholder="小浣熊"/>
       </div>
    </YsHeader>
    <SearchTips title="热门搜索" v-bind:data="mockData"/>
    <transition leave-active-class="animated fadeOutLeft">
      <SearchTips v-if="showHistory" title="历史记录" :show-delete="true" @delete="showHistory = !showHistory"/>
    </transition>
  </div>
</template>

<script>
  import animated from 'animate.css'
  import SearchTips from "./components/SearchTips";
  import YsHeader from "../../components/Header";
  import {throttle} from "../../util/util";

  export default {
    name: "Search",
    components: {YsHeader, SearchTips},
    methods:{
      onSearch(){
        console.log("search---",this.keyword);
        this.keyword = '';
      },
      onInputSearch(keyword){
        console.log("throttle input search:",keyword);
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
        ]
      }
    },
    watch:{
      keyword(cur){
        throttle(this.onInputSearch,null,[cur])
      }
    }
  }
</script>

<style lang="less" scoped>
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
</style>
