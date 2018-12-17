<template>
  <ul class="ys-select">
    <li v-for="item in storeList" v-bind:key="item.id" @click="select(item.storeId,item.storeName)">
      <div class="wrapper">
        <div class="storeName">
          <img src="../../../assets/icon/shop.svg" alt="icon"/>
          <span>
              {{item['storeName']}}
           </span>
          <span style="color: #333;">
             3.5 km
          </span>
        </div>
        <div class="address">
             {{item['address']}}
        </div>
      </div>
      <img src="../../../assets/icon/right.svg" alt="icon">
    </li>
  </ul>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  const { mapActions } = createNamespacedHelpers('data');
  export default {
    name: "Store",
    props:{
      storeList:Array,
      longitude:String,
      latitude:String
    },
    methods:{
      select(id,storeName){
        this.setStoreId(id);
        this.setStoreName(storeName);
        this.$router.push({
          name:"index"
        })
      },
      ...mapActions(['setStoreId','setStoreName'])
    },

  }
</script>

<style lang="less" scoped>
  .ys-select{
    width: 100%;
    padding: 10px 16px;
    border-bottom: 1px solid #cccccc;
    overflow: hidden;

    li{
      list-style: none;
      padding: 8px 0;
      font-size: 1.8rem;
      font-weight: 400;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .wrapper{
        min-width: 85%;
      }
    }

    img{
      width: 30px;
      height: 30px;
      object-fit: contain;
    }

    .storeName{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .address{
      color: #333333;
      font-size: 1.1rem;
      margin-top: 5px;
    }
  }
</style>
