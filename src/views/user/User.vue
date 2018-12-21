<template>
  <div>
    <Avatar v-bind:username="user.username" v-bind:phone="user.phone"/>
    <div class="ys-card">
      <Card v-for="(item,index) in cardList" v-bind:key="index" v-bind="item" @itemClick="handleCardClick(index)"/>
    </div>
  </div>
</template>

<script>
  import Avatar from "./components/Avatar";
  import {createNamespacedHelpers} from 'vuex'
  import Card from "./components/Card";
  const {mapState,mapActions} = createNamespacedHelpers("data");
  export default {
    name: "User",
    components: {Card, Avatar},
    computed:{
      ...mapState(['user'])
    },
    methods:{
      handleCardClick(index){
        switch(index){
          case 0:
            break;
          case 1:
            break;
          case 2:
            this.$router.push({path:"/address"});
            break;
          case 3:
            this.$router.push({path:"/help"});
            break;
        }
      }
    },
    data(){
      return{
        cardList:[
          {
            icon:require("../../assets/icon/member.svg"),
            title:"会员充值",
            desc:"余额：￥16.8<br/>积分：2087"
          },
          {
            icon:require("../../assets/icon/setting.svg"),
            title:"修改密码",
            desc:"密码修改，保护资金安全"
          },
          {
            icon:require("../../assets/icon/address.svg"),
            title:"地址管理",
            desc:"中南大学铁道学院 通泰梅岭苑"
          },
          {
            icon:require("../../assets/icon/notice.svg"),
            title:"帮助中心",
            desc:"您有三条消息未读"
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-card{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3vw;
    grid-row-gap: 3vw;

    padding: 20px;
  }
</style>
