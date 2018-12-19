<template>
  <div class="ys-product">
    <p>
      商品列表
    </p>
    <ul>
      <li v-for="(item,index) of list" v-bind:key="index">
        <div>
          <img src="../../../assets/image/products-mini.png" :alt="item.alt">
          <span>{{item.title}}</span>
          <span>* {{item.quantity}}</span>
        </div>
        <span>￥{{item.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Product",
    props:{
      list:{
        type:Array
      }
    }
  }
</script>

<style lang="less" scoped>
.ys-product{
  padding: 20px;
  margin: 10px 0;

  p{
    padding: 10px;
    font-size:4vw;
    border-bottom: 2px solid rgb(237,237,237);
  }

  ul{
    padding:10px 20px;

    li{
      display: flex;
      justify-content: space-between;
      align-items: center;

      div{
        display: flex;
        justify-content: space-around;
        align-items: center;

       img{
         max-width: 55px;
         object-fit: contain;
         padding: 8px;
       }
        span{
          padding: 8px;
          color: #4A4A4A;
          font-size: 3.5vw;
        }
      }
      &>span{
        color: #FF0000;
      }
    }
  }
}
</style>
