<template>
  <div class="ys-avatar">
    <img :src="avatar" alt="avatar">
    <div>
      <p>{{username}}</p>
      <p>{{phone}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Avatar",
    props:{
      avatar:{
        type:String,
        default:require("../../../assets/image/default_avatar.png")
      },
      username:String,
      phone:[String,Number]
    }
  }
</script>

<style lang="less" scoped>
  .ys-avatar{
    padding: 20px;

    display: flex;
    align-items: center;

    img{
      width: 90px;
      height: 90px;
      object-fit: contain;
      border-radius:50%;
    }

    div{
      margin-left: 20px;
      p:first-child{
        font-size: 7vw;
        color: #000;
        font-weight: 500;
      }

      p{
        color: #666666;
        font-size:4vw;
        padding: 7px;
      }
    }
  }
</style>
