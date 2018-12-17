<template>
  <div class="ys-cart-bottom">
    <a class="ys-select-all" :class="{'active':selected}" @click="selectAll" href="javascript:;">全选</a>
    <div class="checkOut" v-show="!showDelete">
      <span style="margin-right: 3vw;">合计：<span style="color: #f00;">￥16.00</span></span>
      <a href="javascript:;" @click="checkOut" class="btn"></a>
    </div>
    <div class="delete" v-show="showDelete" @click="onDeleteClicked">删除</div>
  </div>
</template>

<script>
  export default {
    name: "CartBottom",
    methods:{
      selectAll(){
        this.selected = !this.selected;
        this.$emit("selectAll");
      },
      onDeleteClicked(){
         this.$emit("delete")
      },
      checkOut(){
        this.$emit("checkOut");
      }
    },
    props:{
      showDelete:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        selected:false
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-cart-bottom{
    height: 58px;
    border-top:1px solid #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .ys-select-all{
      width: 16vw;
      color: #303030;
      height: 100%;
      font-size: 4vw;

      display: flex;
      align-items: center;

      position: relative;
      &:before{
        content: '';
        width: 20px;
        height: 20px;
        border-radius:50%;
        background: #ffffff;
        border: 1px solid #eee;

        position: absolute;
        left: -50%;
      }
    }

    .active{
      &:before{
        background: #FFDF5C url('../../../assets/icon/check_right.svg') no-repeat center;
        background-size:contain;
        border: none;
      }
    }
  }

  .checkOut{
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 4.1vw;

    .btn{
      width: 10vw;
      height: 10vw;
      border-radius:50%;
      background: #FFDF5C url('../../../assets/icon/check_right.svg') no-repeat center;
      background-size:60%;
      border: none;
    }
  }

  .delete{
    background: #FFDF5C;
    border-radius:6vw;
    font-size: 4.5vw;
    color: #333333;
    padding: 8px 20px;
  }
</style>
