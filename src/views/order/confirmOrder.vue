<template>
  <div>
    <YsHeader show-back>确认订单</YsHeader>
    <div class="ys-preview">
      <PreviewOrderInfo v-model="note" :disabled="false" :address="addressObj.address" :username="user.username" :gender="addressObj.gender" :phone="addressObj.phone" :time="confirmOrders.time" :pay-type="confirmOrders.payType"/>
    </div>
    <Product v-bind:list="confirmOrders.products"/>
    <Total v-bind:total="total" v-bind:agio="0"  @toPay="submitOrder" :btn-text="`提交订单`"/>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import { createNamespacedHelpers } from 'vuex'
  import Preview from "./components/Preview";
  import Product from "./components/Product";
  import Total from "./components/Total";
  import OrderDetailInfo from "./components/OrderDetailInfo";
  import PreviewOrderInfo from "./components/PreviewOrderInfo";
  import {POST} from "../../util/http/constant";

  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "confirmOrder",
    components: {OrderDetailInfo, Total, Product, Preview, YsHeader,PreviewOrderInfo},
    methods:{
      submitOrder(){
        console.log("buying...");
        //todo: update cart and pay it
        this.confirmOrders.note = this.note;
        let token = this.token;
        this.showLoading();
        fetch(POST.Orders, {
          headers: {
            "Content-Type": "application/json",
            'Ys-user': token
          },
          method: 'POST',
          body:  JSON.stringify(this.confirmOrders)
        }).then(res=>{
          this.hideLoading();
          console.log("get returns ",res);
          this.addOrder(res.data);
          this.$router.replace({path:`/orderDetail/${res.data.orderId}`});
        }).catch(err=>{
          console.log("err post",err);
          this.hideLoading();
        });

      },
      ...mapActions(['addOrder','showLoading','hideLoading'])
    },
    data(){
      return{
        note:""
      }
    },
    mounted(){
      if(!this.addressObj){
        this.$toast("当前页面不允许刷新...");
        this.$router.back();
      }
    },
    computed:{
      addressObj(){
        return this.user.addressList.filter(item=>{
          return item.id===this.confirmOrders.addressId;
        })[0];
      },
      total(){
        return this.confirmOrders.products.reduce((t,c)=>{
          return t + c['price']*c['quantity'];
        },0)
      },
      ...mapState(["confirmOrders","user",'token'])
    }
  }
</script>

<style scoped>
  .ys-preview{
    width: 100%;
    padding: 20px;
    border-bottom: 5px solid rgb(247,247,247);
  }
</style>
