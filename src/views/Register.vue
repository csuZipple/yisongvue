<template>
  <div class="ys-register">
    <label >请输入手机号：<input v-model="phone"/></label><button @click="getVerificationCode">获取验证码</button>
    <label >请输入验证码：<input v-model="validateCode"/></label>

    <button @click="submit">确定</button>
  </div>
</template>

<script>
  import {setToken} from "../util/http/util";
  import httpConfig from "../util/http/constant";
  import {getQueryString} from "../util/util";
  import { createNamespacedHelpers } from 'vuex'

  const { mapActions } = createNamespacedHelpers('data');

  export default {
    name: "register",
    methods:{
      submit(){
        //todo: check type and judge it is null?
        //todo: 绑定手机 -- 回调给登陆
        let formData = new FormData();
        formData.append("code",getQueryString("code"));
        formData.append("validate",this.validateCode);
        formData.append("phone",this.phone);

      },
      getVerificationCode(){
        //todo:get verification code
      },
      ...mapActions(["setToken"])
    },
    data(){
      return{
        phone:"",
        validateCode:""
      }
    }
  }
</script>

<style scoped>

</style>
