<template>
  <div class="ys-cart-item" @click="handleClick">
    <img :src="icon" alt="icon">
    <div>
      <p>{{title}}</p>
      <p v-html="desc"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props:{
      icon:{
        type:String,
        default:"../../../assets/icon/member.svg"
      },
      title:String,
      desc:String
    },
    methods:{
      handleClick(){
        this.$emit("itemClick")
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-cart-item{
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    box-shadow:0 2px 10px 4px rgba(227,227,227,0.5);
    border-radius:10px;

    img{
      width: 30px;
      height: 30px;
      object-fit:contain;
    }

    div{
      padding: 8px 0;
    }

    p{
      color: #000;
      font-size: 5vw;
      font-weight:500;
      padding: 3px;
    }

    p:last-child{
      color: #666666;
      font-size: 3vw;
    }
  }
</style>
