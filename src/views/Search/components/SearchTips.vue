<template>
  <div class="ys-search-tips">
    <p>
      <span>{{title}}</span>
      <img v-if="showDelete" src="../../../assets/icon/delete.svg" @click="handleDeleteClicked" alt="删除">
    </p>
    <div class="wrapper">
      <a class="item" href="javascript:;" @click="search(item)" v-for="(item,index) of data" v-bind:key="index">
        {{item.name||item}}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SearchTips",
    props:{
      showDelete:{
        type:Boolean,
        default:false
      },
      title:String,
      data:{
        type:Array,
        default(){
          return[
            {
              productId:1,
              name:'统一老坛酸菜牛肉面'
            }
          ]
        }
      }
    },
    methods:{
      handleDeleteClicked(){
        this.$emit("delete",!this.showDelete)
      },
      search(item){
        if(item.productId){
          this.$router.push({path:`/productDetail/${productId}`})
        }else{
          this.$emit("onHistoryClicked",item);
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-search-tips{
    padding: 8px 12px;

    p{
      padding: 8px;
      color: #999999;
      font-size: 4vw;

      display: flex;
      justify-content: space-between;
      align-items: center;

      img{
        width: 5vw;
        height: 5vw;
        object-fit: contain;
      }
    }

    .wrapper{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .item{
        padding: 5px 8px;
        margin: 5px 8px;
        background: rgba(0,0,0,.06);
        border-radius:3px;
        color: #333333;
        font-size: 4vw;
      }
    }
  }
</style>
