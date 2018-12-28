<template>
  <div class="ys-register">

    <div style="width: 100%;">
      <div class="wrapper" v-if="!showMessageCode">
        <h1>欢迎注册壹送便利店</h1>
        <RegisterPhoneInput class="phone" v-model="phone" @onClear="phone=''"/>
        <p class="desc">未注册的手机号验证后自动创建壹送账户</p>
        <button class="btn" @click="getVerificationCode">获取短信验证码</button>
      </div>
      <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <div class="wrapper code" v-if="showMessageCode">
          <h1>请输入验证码</h1>
          <p class="desc">验证码已发送至 {{phone}}</p>
          <VerificationCodeInput class="verification" @onCompleted="submit"/>
          <a href="javascript:;" v-if="!isStartTime" @click="startTimer">
            收不到验证码点这里
          </a>
          <a href="javascript:;" style="color: #333333;" v-else>
            {{time}}秒后重新获取验证码
          </a>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
  import animated from 'animate.css'
  import {setToken} from "../util/http/util";
  import {POST} from "../util/http/constant";
  import {getQueryString} from "../util/util";
  import { createNamespacedHelpers } from 'vuex'
  import RegisterPhoneInput from "../components/RegisterPhoneInput";
  import {validatePhone} from "../util/util";
  import VerificationCodeInput from "../components/VerificationCodeInput";

  const { mapActions } = createNamespacedHelpers('data');

  export default {
    name: "register",
    components: {VerificationCodeInput, RegisterPhoneInput},
    methods:{
      submit(code){
        this.showLoading("注册中...");
        let formData = new FormData();
        formData.append("code",getQueryString("code"));
        formData.append("messageCode",code);
        formData.append("phone",this.phone);
        fetch(POST.BindPhone,{
          method:"POST",
          body:formData
        }).then(res=>res.json()).then(res=>{
          console.log("获取服务端响应..",res);
          if(res.code===200){
            this.$router.push({path:"/login"});
          }
        }).catch(err=>{
          console.log("绑定手机失败",err);
          this.hideLoading();
        })
      },
      getVerificationCode(){
        if(!validatePhone(this.phone)){
          this.$toast("请输入合法的手机号");
        }else{
          if(this.hasClick){
            return ;
          }
          this.hasClick = true;
          this.showLoading("请求验证码...");
          let formData = new FormData();
          formData.append("phone",this.phone);
          fetch(POST.VerificationCode,{
            method:"POST",
            body: formData
          }).then(res=>res.json()).then(res=>{
            console.log("验证码信息 ",res);
            if(res.code===200){
              this.$toast("验证码成功发送，有效期60s");
              this.hideLoading();
              this.showMessageCode = true;
              this.hasClick = false;
            }else{
              console.error("验证码发送失败");
              this.hideLoading();
              this.$toast("验证码发送失败"+ res.message);
              this.hasClick = false;
            }
          }).catch(err=>{
            console.log("error in get verification code.",err);
            this.hideLoading();
            this.hasClick = false;
          });
        }
      },
      startTimer(){
        this.getVerificationCode();
        this.isStartTime = true;
        let timer = setInterval(()=>{
          if(this.time === 0){
            clearInterval(timer);
            this.isStartTime = false;
          }else{
            this.time--
          }
        },1000);
      },
      ...mapActions(["setToken","showLoading","hideLoading"])
    },
    data(){
      return{
        phone:"",
        showMessageCode:false,
        time:60,
        isStartTime:false,
        hasClick:false
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

    .code{
      .desc{
        color: #333333;
        margin: 12px 0;
        letter-spacing: 1px;
      }

      .verification{
        margin-top: 25px;
      }

      a{
        align-self: flex-start;
        color: #E9C11D;
        font-size: 3vw;
        padding: 5px;
        margin: 24px 0;
      }
    }
  }
</style>
