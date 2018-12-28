<template>
  <div class="ys-register">

    <div class="wrapper">
      <h1>欢迎注册壹送便利店</h1>
      <RegisterPhoneInput class="phone" v-model="phone" @onClear="phone=''"/>
      <p class="desc">未注册的手机号验证后自动创建壹送账户</p>
      <button class="btn" @click="getVerificationCode">获取短信验证码</button>
    </div>

<!--
    <label v-if="showMessageCode">请输入验证码：<input v-model="validateCode"/></label>

    <button @click="submit">确定</button>-->
  </div>
</template>

<script>
  import {setToken} from "../util/http/util";
  import {POST} from "../util/http/constant";
  import {getQueryString} from "../util/util";
  import { createNamespacedHelpers } from 'vuex'
  import RegisterPhoneInput from "../components/RegisterPhoneInput";
  import {validatePhone} from "../util/util";

  const { mapActions } = createNamespacedHelpers('data');

  export default {
    name: "register",
    components: {RegisterPhoneInput},
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
        if(validatePhone(this.phone)){
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
        showMessageCode:false,
        number:""
      }
    },
    watch:{
      number(b){
        console.log("change",b)
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-register{
    width: 100%;
    height: 100%;

    .wrapper{
      padding: 80px 30px;

      display: flex;
      flex-direction: column;
      align-items: center;

      h1{
        color: #4A4A4A;
        font-size: 7vw;
        letter-spacing: 2px;
        font-weight: 400;
      }

      .phone{
        margin-top: 50px;
      }

      .desc{
        color: #A5A5A5;
        font-size: 3vw;
        letter-spacing: 2px;
      }

      .btn{
        margin-top: 50%;
        padding: 12px 50px;
        background:rgb(255,223,92);
        border: 1px solid rgb(255, 215, 125);
        border-radius:45px;
        color: #333333;
        font-size: 4vw;
        letter-spacing: 2px;
      }
    }
  }
</style>
