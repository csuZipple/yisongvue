<template>
  <div>
    <YsHeader>收货地址</YsHeader>
    <div class="item-wrapper">
      <AddressItem :selected="currentAddress === index" @click.native="selectAddress(index)" @onModified="modifyAddress" v-for="(item,index) in addressList" v-bind:key="index" v-bind="item"/>
    </div>
    <FloatingButton @onFloatBtnClicked="addAddress"/>
  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import AddressItem from "./components/AddressItem";
  import FloatingButton from "../../components/FloatingButton";
  export default {
    name: "Address",
    components: {FloatingButton, AddressItem, YsHeader},
    methods:{
      selectAddress(index){
        console.log(index);
        this.currentAddress = index;
        this.$toast("已选中当前地址~");
      },
      modifyAddress(id){
        this.$router.push({path:`/addressDetail/modify/${id}`})
      },
      addAddress(){
        console.log("to add address!");
        this.$router.push({path:`/addressDetail/new`})
      }
    },
    data(){
      return{
        addressList:[
          {
            id:1,
            username:"凌莫莫",
            phone:"18945671256",
            address:"长沙市雨花区万家丽南路960号 长沙理工大学云塘校区 凌宝宝收",
            addressDetail:"",
            gender:1
          },
          {
            id:2,
            username:"漠叹尘",
            phone:"18337151083",
            address:"长沙市天心区韶山南路 中南大学铁道学院 邹博收",
            addressDetail:"",
            gender:1
          }
        ],
        currentAddress:0
      }
    }
  }
</script>

<style scoped>
.item-wrapper{
  margin: 20px 0;
}
</style>
