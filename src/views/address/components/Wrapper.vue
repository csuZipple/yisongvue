<template>
  <div class="ys-wrapper">
      <AddressInput v-model="info.username" :label="'联系人'" :place-holder="'请输入用户名'"/>
      <GenderRadio  @onSelect="onSelect"/>
      <AddressInput v-model="info.phone" :label="'电话'" :place-holder="'18373151083'"/>
      <AddressInput v-model="info.address" :label="'地址'" shorter @onImgBtnClicked="onLocateClicked" :place-holder="'地址'"/>
      <AddressInput v-model="info.addressDetail" :label="'门牌号'" :place-holder="'2单元603'"/>

    <div class="btn-wrapper">
      <div :class="['btn',{'active':isActive}]" @click="onOkClicked">确定</div>
    </div>

    <Map v-if="showMap" @cancel="showMap = !showMap" @onMapSelected="onMapSelected"/>
  </div>
</template>

<script>
  import AddressInput from "./AddressInput";
  import GenderRadio from "./GenderRadio";
  import Map from "../../map/Map";
  import{validatePhone} from "../../../util/util";

  export default {
    name: "Wrapper",
    components: {GenderRadio, AddressInput,Map},
    props:{
      username:String,
      phone:[String,Number],
      address:String,
      addressDetail:String,
      gender:Number,
      lat:String,
      lnt:String
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
        let flag =  validatePhone(this.info.phone);
        if(!flag) this.$toast("请输入合法的手机号");
        return flag;
      },
      onLocateClicked(){
        this.showMap = true;
      },
      onMapSelected(position){
        this.showMap = false;
        Object.keys(position).forEach(item=>{
          item === 'lng'?this.info['lnt'] = position[item]:this.info[item] = position[item]; //Attention: 不要使用对象解构，会覆盖原对象导致失去响应式.
        })
      }
    },
    data(){
      return {
        info:{
          username:this.username||"",
          phone:this.phone||"",
          address:this.address||"",
          addressDetail:this.addressDetail||"",
          gender:this.gender||0,
          lat:this.lat||"",
          lnt:this.lnt||"",
        },
        showMap:false
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
