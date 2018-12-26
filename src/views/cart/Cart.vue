<template>
  <div class="ys-cart-wrapper">
    <YsHeader class="header" :show-back="false" :show-right-text="true" :right-text="rightText[currentRightIndex]" @onRightClicked="manage">购物车</YsHeader>

    <div class="cart">
      <ul v-if="!isNull">
        <CartItem  v-for="(item,index) in cartItem" v-bind:key="index" v-bind="item" @handleSelect="onItemSelected" @handleQuantity="onQuantityChange" ></CartItem>
      </ul>
      <NoData v-else pageName="index">购物车空空如也~</NoData>
    </div>
    <CartBottom :checked="selectedAll" v-bind:total="getTotal" class="bottom" :show-delete="showDelete" @selectAll="handleSelectAll" @checkOut="checkOut" @delete="confirm"/>

    <Dialog v-show="showDialog" :isShow="showDialog" title="大人，三思而后行啊~" left-btn-text="我再想想" right-btn-text="确认" @cancel="cancel" @ok="ok" @maskClicked="maskClicked"/>

  </div>
</template>

<script>
  import YsHeader from "../../components/Header";
  import CartItem from "./components/CartItem";
  import CartBottom from "./components/CartBottom";
  import { createNamespacedHelpers } from 'vuex'
  import Dialog from "../../components/Dialog/Dialog";
  import NoData from "../../components/NoData/NoData";
  import{wxAuth} from "../../util/http/util";

  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "Cart",
    components: {NoData, Dialog, CartBottom, CartItem, YsHeader},
    methods:{
      manage(){
        if(this.cartItem.length){
          this.currentRightIndex = (this.currentRightIndex+1)%this.rightText.length;
          if(this.currentRightIndex){
            this.handleSelectAll(false);
            this.selectedAll = false
          }
          this.showDelete = !this.showDelete;
        }
      },
      checkOut(){
        if(this.cartItem.length){
          const list = this.getSelectedCartItemList();
          if(list.length){
            if(Object.keys(this.user).length){
              if(this.user.addressList.length){
                this.confirmOrders.userId = this.user.userId;
                this.confirmOrders.addressId = this.user.addressList.filter(item=>{
                  return item.default
                })[0].id;
                this.confirmOrders.products = list;
                this.confirmOrders.storeId = this.storeId;
                this.setConfirmOrders(this.confirmOrders);
                this.$router.push({path:`/confirmOrder`});
              }else{
                console.log("当前未绑定地址");
                this.$toast("您当前未保存地址，请先增加地址~");
                this.$router.push({path:`/addressDetail/new`});
              }
            }else{
              console.log("当前是未登陆状态");
              wxAuth();
            }
          }else{
            this.$toast("You need to select the item before checkOut.");
          }
        }else{
          this.$toast("Nothing to check out!");
        }
      },
      maskClicked(){
        this.showDialog = false;
      },
      cancel(){
        this.showDialog = false;
        this.$toast({
          text:"取消删除~",
          position:"bottom",
          duration:1000
        });
      },
      ok(){
        this.onDelete();
        this.showDialog = false;
      },
      confirm(){
        const list = this.getSelectedCartItemList();
        if(list.length){
          this.showDialog = true;
        }else{
          this.$toast("You need to select the item before deleting.");
        }
      },
      onDelete(){
        const list = this.cartItem.filter(item=>{
          return !item['selected'];
        });
        this.setCartItemList(list);
        if (!list.length) {
          this.currentRightIndex = 0;
          this.selectedAll = false;
        }
      },
      onQuantityChange(item){//id=item[0] quantity=item[1];
        this.updateCartItemList(item,'quantity');
      },
      onItemSelected(item){
        this.updateCartItemList(item,'selected');
      },
      handleSelectAll(isSelectAll){
        if(this.cartItem.length){
         this.updateCartItemList(isSelectAll,'selected');
        }
        this.selectedAll = isSelectAll;
      },
      getSelectedCartItemList(){
        return this.cartItem.filter(item=>{
          return item['selected'];
        });
      },
      updateCartItemList(item,key){
        if(Object.prototype.toString.call(item)==='[object Array]'){
          this.cartItem.filter(res=>{//Modify the original array with a reference type
            if(res['id']===item[0]){
              res[`${key}`] = item[1];
            }
          })
        }else{
          this.cartItem.filter(res=>{
            res[`${key}`]=item;//item must be boolean;
          })
        }
        this.setCartItemList(this.cartItem);
      },
      ...mapActions(['setCartItemList','setConfirmOrders'])
    },
    data(){
      return{
        rightText:["管理","完成"],
        currentRightIndex:0,
        showDelete:false,
        showDialog:false,
        selectedAll:false
      }
    },
    computed:{
      isNull(){
        return this.cartItem.length===0;
      },
      getTotal(){
        return this.cartItem.reduce((total,current)=>{
          if(current['selected']){
            return total+current['price']*current['quantity'];
          }else{
            return total;
          }
        },0)//set init to 0 allows the array index to start at 0.
      },
      ...mapState(['cartItem','user','confirmOrders','storeId'])
    }
  }
</script>

<style lang="less" scoped>
  .ys-cart-wrapper{
    height: 100%;
    display: flex;
    flex-direction: column;
    .header{
      flex: 0 0 auto;
    }
    .cart{
      padding: 8px 0;
      flex: 1 0 auto;


      display: flex;
      flex-direction: column;
      align-items: center;

    }
    .bottom{
      flex: 0 0 auto;
    }
  }
</style>
