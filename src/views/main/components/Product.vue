<template>
  <div class="ys-card">
    <figure>
      <img :src="image" :alt="alt">
      <figcaption>
        <p class="title">
          {{title}}
        </p>
        <p class="sales">
          售量：{{sales}}
        </p>
      </figcaption>
      <p class="bottom">
        <span class="price">￥: {{price}}</span>
        <span class="add"></span>
      </p>
    </figure>
  </div>
</template>

<script>
  export default {
    name: "Product",
    props:{
      image:String,
      alt:String,
      title:String,
      sales:Number,// >0
      price:Number
    }
  }
</script>

<style lang="less" scoped>
 .ys-card{
   width:100%;
   padding: 0 5px;

   display: inline-block;
   background:rgba(255,255,255,1);
   box-shadow:0 2px 5px 2px rgba(190,190,190,0.24);
   border-radius:6px;


   figure{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     align-items: center;
     align-content: center;
     img{
       width: 100%;
       object-fit: contain;
     }
     figcaption{
       color: #4A4A4A;
       font-size:0.8rem;
     }
     .bottom{
       width: 100%;
       display: flex;
       padding: 0 3px;
       justify-content: space-between;

       .price{
         color: #f00;
       }

       .add{
         width: 12px;
         height: 12px;
         line-height: 12px;
         border-radius:50%;
         color: #fff;
         background: #FFE900 url("../../../assets/icon/add.svg") center no-repeat;
         background-size:contain;
         /*padding: 3px;*/
         text-align: center;
       }
     }
   }


 }
</style>
