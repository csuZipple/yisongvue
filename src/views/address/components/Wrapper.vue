<template>
  <div class="ys-wrapper">
      <AddressInput v-model="info.username" :label="'联系人'" shorter :place-holder="'请输入用户名'"/>
      <GenderRadio  @onSelect="onSelect"/>
      <AddressInput v-model="info.phone" :label="'电话'" :place-holder="'18373151083'"/>
      <AddressInput v-model="info.address" :label="'地址'" shorter :place-holder="'地址'"/>
      <AddressInput v-model="info.addressDetail" :label="'门牌号'" :place-holder="'2单元603'"/>

    <div class="btn-wrapper">
      <div :class="['btn',{'active':isActive}]" @click="onOkClicked">确定</div>
    </div>
  </div>
</template>

<script>
  import AddressInput from "./AddressInput";
  import GenderRadio from "./GenderRadio";
  export default {
    name: "Wrapper",
    components: {GenderRadio, AddressInput},
    props:{
      username:String,
      phone:[String,Number],
      address:String,
      addressDetail:String,
      gender:Number,
    },
    methods:{
      onOkClicked(){
        this.isActive&&this.validate()&&this.$emit("onOkClicked",this.info);
      },
      onSelect(gender){
        console.log(gender);
        this.info.gender = gender;
      },
      validate(){
        const phoneTest = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
        let flag =  phoneTest.test(this.info.phone);
        if(!flag) this.$toast("请输入合法的手机号");
        return flag;
      }
    },
    data(){
      return {
        //data 和 props 在created 方法里创建 暂时还不清楚谁先谁后
        info:{
          username:this.username||"default",
          phone:this.phone||"",
          address:this.address||"",
          addressDetail:this.addressDetail||"",
          gender:this.gender||0,
        }
      }
    },
    computed:{
      isActive(){
        return this.info.username!==''&&this.info.phone!==''&&this.info.address!==''&&this.info.addressDetail!=='';
      }
    },
  }
</script>

<style lang="less" scoped>
  .ys-wrapper{
    padding: 12px 30px;

    display: flex;
    flex-direction: column;

    .btn-wrapper{
      margin: 80px 0;

      display: flex;
      justify-content: center;
    }
    .btn{
      width: 80%;
      height:50px;
      background:rgba(51,51,51,0.3);
      border: 1px solid rgba(51,51,51,0.2);
      border-radius:23px;
      font-size: 5vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active{
      background:rgba(255,223,92,1);
      border: 1px solid rgba(255,223,92,1);
    }
  }
</style>
