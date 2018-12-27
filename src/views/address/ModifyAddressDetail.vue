<template>
  <div>
    <YsHeader>修改收货地址</YsHeader>
    <wrapper @onOkClicked="submit" v-bind="address"/>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import Wrapper from "./components/Wrapper";
  import {PUT} from "../../util/http/constant";
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "AddressDetail",
    components: {YsHeader,Wrapper},
    props:['id'],
    methods:{
      submit(info){
        this.showLoading("保存中...");
        let shouldUpdateAddress = {};
         Object.keys(info).forEach(item=>{
          if(info[item] !== this.address[item]){
            shouldUpdateAddress[item] = info[item]
          }
        });
         console.log("应修改的属性",shouldUpdateAddress);
        if(Object.keys(shouldUpdateAddress).length){
          let url = PUT.Address(this.user.userId,this.address.id);
          let token = this.token;
          fetch(url,{
            headers:{
              "Content-Type": "application/json",
              'Ys-user': token
            },
            method:"PUT",
            body:JSON.stringify(shouldUpdateAddress)
          }).then(res=>res.json()).then(res=>{
            console.log("修改地址成功.",res.code);
            if(res.code===200){
              let address = this.address;
              this.address = {address,...shouldUpdateAddress};
              console.log("修改本地地址...");
              this.afterModified("保存成功")
            }
          }).catch(err=>{
            console.log('修改地址失败.',err);
            this.afterModified("修改地址失败."+err);
          })
        }else{
          this.afterModified("未修改.");
        }
      },
      afterModified(text){
        this.$toast(text);
        this.hideLoading();
        this.$router.back();
      },
      ...mapActions(['showLoading','hideLoading'])
    },
    data(){
      return{
        address:null
      }
    },
    created(){
      this.address = this.user.addressList.filter(item=>{
        return item.id === Number(this.id)
      })[0];
    },
    computed:{
      ...mapState(['user','token'])
    }
  }
</script>

<style scoped>

</style>
