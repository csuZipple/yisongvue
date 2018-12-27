<template>
  <div>
    <YsHeader>新增收货地址</YsHeader>
    <wrapper @onOkClicked="submit"/>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import Wrapper from "./components/Wrapper";
  import {POST} from "../../util/http/constant";
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "AddressDetail",
    components: {Wrapper, YsHeader},
    methods:{
      submit(info){
        let url = POST.Address(this.user.userId);
        let token = this.token;
        this.showLoading("保存中...");
        fetch(url,{
          headers:{
            "Content-Type": "application/json",
            'Ys-user': token
          },
          method:"POST",
          body:JSON.stringify(info)
        }).then(res=>res.json()).then(res=>{
          console.log("增加地址成功.",res.code);
          if(res.code===200){
            this.user.addressList.push(res.data);
            let beforeUrl  = JSON.parse(localStorage.getItem('currentUrl')||"");
            if(beforeUrl!==''){
              localStorage.removeItem('currentUrl');
              window.location.href = beforeUrl;
            }
          }
          this.hideLoading();
        }).catch(err=>{
          console.log('增加地址失败.',err);
          this.hideLoading();
        })
      },
      ...mapActions(['showLoading','hideLoading'])
    },
    computed:{
      ...mapState(['user','token'])
    }
  }
</script>

<style scoped>

</style>
