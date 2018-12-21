<template>
  <div class="ys-address-item">
    <div class="info">
      <img v-if="selected" src="../../../assets/icon/locate-active.svg" alt="locate"/>
      <img v-else src="../../../assets/icon/locate-inactive.svg" alt="locate"/>
      <div class="address">
        <p>
          <span>{{username}}</span>
          <span>{{phone}}</span>
        </p>
        <p>
          {{address}}
        </p>
      </div>

    </div>
    <img src="../../../assets/icon/locate-modify.svg" alt="locate" @click.stop="onModifiedClicked"/>
  </div>
</template>

<script>
  export default {
    name: "AddressItem",
    props:{
      selected:Boolean,
      id: Number,
      username: String,
      phone: String,
      address:String,
      gender:Number
    },
    methods:{
      onModifiedClicked(){
        this.$emit("onModified",this.id)
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-address-item{
    padding: 12px 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;


    img{
      width: 20px;
      height: 20px;
      object-fit:contain;
    }

    .info{
      display: flex;
      margin: 0 12px;
      img{
        width: 12px;
        margin:0 8px 0 0;
      }
      .address{
        font-size: 3vw;
        color: #333333;
        p{
          margin: 8px 0;
        }
        p:first-child{
          margin-top: 0;
          font-size: 4vw;
          font-weight: 500;
          color: #000;

          span:last-child{
            margin-left: 20px;
          }
        }
      }
    }
  }
</style>
