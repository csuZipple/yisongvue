<template>
  <div class="ys-cart-wrapper">
    <YsHeader class="header" :show-back="false" :show-right-text="true" :right-text="rightText" @onRightClicked="manage">购物车</YsHeader>

    <div class="cart">
      <ul v-if="!isNull">
        <CartItem  v-for="(item,index) in cartItem" v-bind:key="index" v-bind="item" @handleSelect="onItemSelected" @handleQuantity="onQuantityChange" ></CartItem>
      </ul>
      <template v-else>
        <figure>
          <img src="../../assets/image/no-goods.png" alt="购物车空空如也~">
          <figcaption>
            购物车空空如也
          </figcaption>
        </figure>
        <a href="javascript:;" @click="goIndex">前往购买</a>
      </template>
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
  const { mapState, mapActions } = createNamespacedHelpers('data');
  export default {
    name: "Cart",
    components: {Dialog, CartBottom, CartItem, YsHeader},
    methods:{
      manage(){
        if(this.cartItem.length){
          if(this.rightText==='管理'){
            this.rightText = '完成';
            this.handleSelectAll(false);
            this.selectedAll = false;
          }else{
            this.rightText = '管理';
          }
          this.showDelete = !this.showDelete;
        }
      },
      checkOut(){
        if(this.cartItem.length){
          //todo:go to checkOut
          const list = this.cartItem.filter(item=>{
            return !(item['selected']);
          });
          if(list.length!==this.cartItem.length){
            this.$toast("check out!");
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
        const list = this.cartItem.filter(item=>{
          return !(item['selected']);
        });
        if(list.length!==this.cartItem.length){
          this.showDialog = true;
        }else{
          this.$toast("You need to select the item before deleting.");
        }
      },
      onDelete(){
        const list = this.cartItem.filter(item=>{
          return !(item['selected']);
        });
        this.setCartItemList(list);
        if (!list.length) {
          this.rightText = '管理';
          this.selectedAll = false;
        }
      },
      onQuantityChange(item){//id=item[0] quantity=item[1];
        this.cartItem.filter(res=>{//Modify the original array with a reference type
          if(res['id']===item[0]){
            res['quantity'] = item[1];
          }
        })
      },
      onItemSelected(item){
        this.cartItem.filter(res=>{
          if(res['id']===item[0]){
            res['selected'] = item[1];
          }
        })
      },
      handleSelectAll(isSelectAll){
        if(this.cartItem.length){
          this.cartItem.filter(res=>{
            res['selected']=isSelectAll;
          })
        }
        this.selectedAll = isSelectAll;
      },
      goIndex(){
        this.$router.push({
          name:"index"
        })
      },
      ...mapActions(['setCartItemList'])
    },
    data(){
      return{
        rightText:"管理",
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
      ...mapState(['cartItem'])
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

      figure{
        padding: 30px;

        figcaption{
          padding: 8px;
          text-align: center;

          font-weight: 500;
          font-size:4.5vw;
          color: #666666;
        }
      }
      a{
        background: #FFDF5C;
        color: #333333;
        font-size: 4.5vw;
        padding: 8px 30px;
        border-radius:30px;
      }
    }
    .bottom{
      flex: 0 0 auto;
    }
  }
</style>
