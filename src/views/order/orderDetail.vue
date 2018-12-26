<template>
  <div>
    <YsHeader :show-back="showBack">订单详情</YsHeader>
    <Preview v-bind="order"/>
    <Product v-bind:list="product"/>
    <Total @toPay="pay" v-bind:total="order.payPrice" v-bind:agio="order.price-order.payPrice" v-if="order.status===2"/>
    <OrderDetailInfo v-bind="order" v-else/>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import { createNamespacedHelpers } from 'vuex'
  import Preview from "./components/Preview";
  import Product from "./components/Product";
  import Total from "./components/Total";
  import OrderDetailInfo from "./components/OrderDetailInfo";
  import {POST} from "../../util/http/constant";
  import wx from 'weixin-jsapi'

  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "orderDetail",
    components: {OrderDetailInfo, Total, Product, Preview, YsHeader},
    props:['orderId'],
    methods:{
      pay(){
        console.log("to pay..");
        switch(this.order.payType){
          case 0 :
            this.wxPay();
            break;
          case 1:
            this.walletPay();
            break;
          case 2:
            this.cashOnDelivery();
            break;
        }
      },
      wxPay(){
        let formData = new FormData();
        let orderId = this.order.orderId;
        let token = this.token;
        formData.append('orderId', orderId+"");
        let vm = this;
        fetch(POST.WxPay,{
          headers: {
            'Ys-user': token
          },
          method: 'POST',
          body: formData
        }).then(res=>res.json()).then(res=>{
          let data = res.data;
          wx.ready(()=>{
            wx.chooseWXPay({
              // appId: data.appId,
              timestamp: data.timeStamp,
              nonceStr: data.nonceStr,
              package: data.package,
              signType: 'MD5',
              paySign: data.paySign,
              success(res) {
                if (res.errMsg === 'chooseWXPay:ok') {
                  message.success('支付成功');
                  vm.$router.replace({path:`/success/pay/${orderId}`})
                } else {
                 vm.$toast("支付失败!");
                }
              },
              fail(err) {
                console.log('err');
                vm.$toast("支付错误!",err);
              },
              cancel(res) {
                vm.$toast('订单取消');
                let formData = new FormData();
                formData.append('orderId', orderId+"");
                fetch(POST.WxPayFail,{
                    method: 'POST',
                    headers: {
                      'Ys-user': token
                    },
                    body: formData
                  }
                ).then(res => {
                    if (res.ok) {
                      res.json().then(function (result) {
                        console.log("取消订单",result);
                        if (result.code === 200) {
                          vm.$toast('订单成功关闭');
                        }
                      });
                    }
                  }).catch(res => {
                    console.log(res);
                  });
              }
            })
          })
        })
      },
      walletPay(){

      },
      cashOnDelivery(){

      }
    },
    data(){
      return{
        showBack:true
      }
    },
    computed:{
      order(){
        return this.orderList.filter(res => {
          return res['orderId'] === Number(this.orderId);
        })[0];//must be unique
      },
      product(){
        return this.order.products;
      },
      ...mapState(['orderList','token'])
    }
  }
</script>

<style scoped>

</style>
