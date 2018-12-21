<template>
  <div>
    <YsHeader>帮助中心</YsHeader>
    <div class="ys-cell-wrapper">
      <Cell v-for="(item ,index) in mockData" @onCellClicked="onCellClicked(index)" v-bind:key="index" >{{item.title}}</Cell>
    </div>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import Cell from "./components/Cell";
  export default {
    name: "HelpList",
    components: {Cell, YsHeader},
    methods:{
      onCellClicked(i){
        this.$router.push({path:`/helpDetail/${i}`})
      }
    },
    data(){
      return{
        mockData:[
          {
            id:0,
            title:"用户协议"
          },{
            id:0,
            title:"手机定位失败怎么办?"
          },{
            id:0,
            title:"支付订单如何取消?"
          },{
            id:0,
            title:"如何申请退款?"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .ys-cell-wrapper{
    margin: 30px ;
  }
</style>
