<template>
  <div>
    <Tab class="tab" @changeTab="switchTabs"/>
    <div class="ys-order" v-if="list.length!==0">
        <OrderItem v-for="(item,index) in list" v-bind="item" v-bind:key="index" @getMore="getMore"/>
    </div>
    <NoData v-else pageName="index">
      <p style="color: #666666; font-size: 3vw;font-weight: 500;">您当前还没有点餐</p>
      <p style="color: #666666; font-size: 3vw;font-weight: 500;">先逛逛看?</p>
    </NoData>

    <div class="ys-status animated tada" v-if="currentIndex===0&&list.length!==0" @click="getMore(list[currentIndex]['orderId'])">
      <div>
        <p>商家已接单</p>
        <p>预计送达：<span style="color: #Ff0000;">12:15</span></p>
      </div>
      <img class="" src="../../assets/icon/angle-double-right.svg" alt="">
    </div>

  </div>
</template>

<script>
  import animated from 'animate.css'
  import Tab from "./components/Tab";
  import OrderItem from "./components/OrderItem";
  import { createNamespacedHelpers } from 'vuex'
  import NoData from "../../components/NoData/NoData";
  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "Order",
    components: {NoData, OrderItem, Tab},
    computed:{
      list(){
        if(this.currentIndex){
          return this.filterOrderList();
        }else{
          return this.filterOrderList(this.currentIndex);
        }
      },
      ...mapState(['orderList'])
    },
    methods:{
      getMore(orderId){
        //todo: jump to order detail page
        console.log("jum page!")
      },
      switchTabs(index){
        this.currentIndex = index;
      },
      filterOrderList(status){
        if(status===0){
          return this.orderList.filter(res=>{
            return res.status===status;
          })
        }else{
          return this.orderList;
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    }
  }
</script>

<style lang="less" scoped>
  .tab{
    padding: 30px 0 30px 30px;
  }
  .ys-order{
    padding: 3px 5vw;
  }

  .ys-status{
    position: fixed;
    right: 3vw;
    bottom: 80px;
    background: #FFDF5C;
    box-shadow:0 2px 4px 1px rgba(178,178,178,0.5);
    border-radius:20px;
    padding: 3px 8px;

    display: flex;
    justify-content: space-around;
    align-items: center;


    font-size: 3vw;

    /*animation-iteration-count:infinite;*/
    animation-duration: 3s;
    animation-direction: alternate;

    img{
      width: 20px;
      height: 20px;
      object-fit: contain;

    }

  }
</style>
