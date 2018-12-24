<template>
  <div class="ys-register">
    <label >请输入手机号：<input v-model="phone"/></label><button @click="getVerificationCode">获取验证码</button>
    <label v-if="showMessageCode">请输入验证码：<input v-model="validateCode"/></label>

    <button @click="submit">确定</button>
  </div>
</template>

<script>
  import {setToken} from "../util/http/util";
  import {POST} from "../util/http/constant";
  import httpConfig from "../util/http/constant";
  import {getQueryString} from "../util/util";
  import { createNamespacedHelpers } from 'vuex'

  const { mapActions } = createNamespacedHelpers('data');

  export default {
    name: "register",
    methods:{
      submit(){
        if(this.validateCode===''||this.validateCode.length!==4){
          this.$toast("请输入有效的验证码")
        }else{
          let formData = new FormData();
          formData.append("code",getQueryString("code"));
          formData.append("messageCode",this.validateCode);
          formData.append("phone",this.phone);
          fetch(POST.BindPhone,{
            method:POST,
            body:formData
          }).then(res=>res.json()).then(res=>{
            if(res.code===200){
              this.$router.push({path:"/login"});
            }
          }).catch(err=>{
            console.log("绑定手机失败",err)
          })
        }
      },
      getVerificationCode(){
        const phoneTest = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
        if(!phoneTest.test(this.phone)){
         this.$toast("请输入合法的手机号");
        }else{
          let formData = new FormData();
          formData.append("phone",this.phone);
          fetch(POST.VerificationCode,{
            method:POST,
            body: formData
          }).then(res=>res.json()).then(res=>{
            console.log("验证码信息 ",res);
            if(res.code===200){
              this.$toast("验证码成功发送，有效期60s");
              this.showMessageCode = true;
            }else{
              console.error("验证码发送失败")
            }
          })
        }
      },
      ...mapActions(["setToken"])
    },
    data(){
      return{
        phone:"",
        validateCode:"",
        showMessageCode:false
      }
    }
  }
</script>

<style scoped>

</style>
