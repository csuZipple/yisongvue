<template>
  <div class="ys-product-list">
    <YsHeader show-right-icon="" @onRightClicked="search">产品列表</YsHeader>

    <Tab v-model="currentCategory" custom-bar-width="35px" prevent-default @on-before-index-change="switchTabItem">
      <TabItem :selected="index===0"  v-for="(item,index) in mockData.types" v-bind:key="index">{{item.text}}</TabItem>
    </Tab>

    <div class="content">

      <div class="tab-wrapper">
          <div v-for="(item,index) in mockData.subTypes" :class="{'active':index===currentSubType}" @click="onSubTypeClicked(item,index)">{{item}}元特惠</div>
      </div>

      <div class="item-wrapper">
        <div style="background: #ffffff;overflow: hidden">
          <ProductItem class="item" small v-for="(item,index) in mockData.products" v-bind:key="index" v-bind="item" @add="addCart($event,item)" @sub="subCart($event,item)"/>
        </div>

        <Divider style="color: #666666;">这是我的底线</Divider>

      </div>

    </div>
    <div class="fixed">
      <FloatingCart/>
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
  import {GET} from "../../util/http/constant";
  import { createNamespacedHelpers } from 'vuex'

  const {mapActions,mapState} = createNamespacedHelpers('data');
  export default {
    name: "Product",
    components: {Divider, ProductItem, FloatingCart, TabItem, Tab, YsHeader},
    mounted(){
       this.requestData();
    },
    methods:{
      async requestData(){
         let category = await this.getProductTypes();
         if(category&&category.length){
           this.getSubProductTypes(category[0].id);
         }else{
           console.log("requestData err");
           this.$toast("获取数据异常，刷新试试");
         }
      },
      async getProductTypes(){
        let url = GET.FirstCategory;
        fetch(url).then(res=>res.json()).then(res=>{
          console.log("获取第一分类",res);
          if(res.data){
            this.mockData.types = res.data;
            return res.data;//todo: maybe error!
          }else{
            console.log("获取分类失败..使用Mock数据");
          }

        }).catch(err=>{
          console.log("get first category failed!",err);
        })
      },
      getSubProductTypes(id,callback,fail){
        let url = GET.SecondCategory(id);
        fetch(url).then(res=>res.json()).then(res=>{
          this.mockData.subTypes = res.data;
          typeof callback==='function'&&callback();
        }).catch(err=>{
          console.log("get second category error ",err);
          this.$toast("获取子级分类失败，刷新试试");
          typeof fail==='function'&&fail();
        })
      },
      search(){
        this.$router.push({
          path:`/search`
        })
      },
      switchTabItem(index){
        //todo:show loading
        if(this.mockData.types.length){
          this.showLoading();
          this.getSubProductTypes(this.mockData.types[index].id,()=>{
            console.log("switch to ",index);
            this.currentCategory = index;
            this.hideLoading();
          },()=>{
            this.hideLoading();
          });
        }else{
          console.log("数据未加载完成..")
        }

      },
      addCart(item,product){
        this.addToCart(product);
      },
      subCart(item,product){
        this.subToCart(product);
      },
      onSubTypeClicked(item,index){
        this.showLoading();
        let url = GET.CategoryProduct(item.id);
        fetch(url).then(res=>res.json()).then(res=>{
          console.log("获取商品信息成功 ",res.data);
          this.mockData.products = res.data;
          this.currentSubType = index;
          this.hideLoading();
        }).catch(err=>{
          console.log("获取商品信息失败.",err);
          this.hideLoading();
        });
      },
      ...mapActions(['addToCart','subToCart','hideLoading','showLoading'])
    },
    data(){
      return{
        currentCategory:0,
        currentSubType:1,
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
          subTypes:[],
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
    },
    computed:{
      ...mapState(['isLoading'])
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/style/ys.css";
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
  }
</style>
