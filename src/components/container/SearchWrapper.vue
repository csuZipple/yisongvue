<template>
  <div class="yisong-search">
    <Search
      placeholder="想吃点啥呢..干脆面怎么样"
      v-model="value"
      :results="results"
      auto-scroll-to-top
      position="absolute"

      @on-submit="onSearch"
      @on-cancel="onCancel"
      @on-change="onChange"
      @on-result-click="onResultClicked"
    />
  </div>

</template>

<script>
  import Search from "vux/src/components/search/index";
  import {_get} from "../../util/http/util";
  import {GET} from "../../util/http/constant";

  export default {
        name: "SearchWrapper",
    components: {Search},
    data(){
      return{
        value:"",
        results:[],//search results
      }
    },
    methods:{
      onSearch(value){
        console.log(`go to ${value} pages`)
      },
      onChange(value){
        this.results=this.getStaticResults(value);
      },
      getSearchResults(value){
        const vue = this;
        _get({
          url:GET.SearchResult(1,value)//params 为null
        },function (data) {
          this.results=data?data:[];// [{title: 'hello', otherData: otherValue}],
        },function (err) {
          vue.$vux.toast.show({
            type: 'warn',
            position: 'top',
            text: "请求失败，请检查您的网络环境！"+JSON.stringify(err),
            time:"1000"
          })
        })
      },
      onResultClicked(item){
        this.onSearch(item.title);
      },
      onCancel(){
        this.$vux.toast.show({
          type: 'cancel',
          position: 'top',
          text: 'cancel',
          time:"800"
        })
      },
      getStaticResults(val){
        let rs = [];
        for (let i = 0; i < 20; i++) {
          rs.push({
            title: `${val} result: ${i + 1} `,
            other: i
          })
        }
        return rs
      }
    }
    }
</script>

<style>
  .yisong-search .weui-search-bar{
    padding: 8px 50px;
}
  .yisong-search .weui-search-bar:before{
    border: 0;
  }
  .yisong-search .weui-search-bar:after{
    border: 0;
  }
</style>
