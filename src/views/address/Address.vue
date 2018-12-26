<template>
  <div>
    <YsHeader>收货地址</YsHeader>
    <div class="item-wrapper">
      <AddressItem :selected="item.default" @click.native="selectAddress(index)" @onModified="modifyAddress" v-for="(item,index) in addressList" v-bind:key="index" v-bind="item"/>
    </div>
    <FloatingButton @onFloatBtnClicked="addAddress"/>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import AddressItem from "./components/AddressItem";
  import FloatingButton from "../../components/FloatingButton";
  import {PUT} from "../../util/http/constant";
  import { createNamespacedHelpers } from 'vuex';
  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "Address",
    components: {FloatingButton, AddressItem, YsHeader},
    methods:{
      selectAddress(index){
        if(!this.isClicked){
          this.setAddressDefault(index);
        }else{
          this.$toast("请不要重复点击.");
        }
        this.isClicked = true;
      },
      modifyAddress(id){
        this.$router.push({path:`/addressDetail/modify/${id}`})
      },
      addAddress(){
        console.log("to add address!");
        this.$router.push({path:`/addressDetail/new`})
      },
      setAddressDefault(index){
        this.showLoading("设置默认地址中...");
        let url = PUT.AddressDefault(this.user.userId,this.addressList[index].id);
        let token = this.token;
        fetch(url,{
          headers:{
            'Ys-user': token
          },
          method:"PUT"
        }).then(res=>res.json()).then(res=>{
          console.log("设置默认地址成功",res);
          if(res.code===200){
            this.$toast("已选中当前地址~");
          }
          this.addressList.forEach((item,i)=>{
            item.default = i === index
          });
          this.isClicked = false;
          this.hideLoading();
        }).catch(err=>{
          this.isClicked = false;
          this.$toast("设置默认地址失败"+err);
          this.hideLoading();
        });
      },
      ...mapActions(['showLoading','hideLoading'])
    },
    data(){
      return{
        currentAddress:0,
        isClicked:false
      }
    },
    computed:{
      addressList(){
        return this.user.addressList;
      },
      ...mapState(['user','token'])
    }
  }
</script>

<style scoped>
.item-wrapper{
  margin: 20px 0;
}
</style>
