<template>
  <div class="ys-no-data">
    <figure>
      <img src="../../assets/image/no-goods.png" alt="购物车空空如也~">
      <figcaption>
        <slot></slot>
      </figcaption>
    </figure>
    <a href="javascript:;" @click="jump">{{btnText}}</a>
  </div>

</template>

<script>
  export default {
    name: "NoData",
    props:{
      pageName:String,
      btnText:{
        type:String,
        default:"去逛逛"
      }
    },
    methods:{
      jump(){
        const vm =this;
        this.$router.push({
          name:vm.pageName
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-no-data{
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

</style>
