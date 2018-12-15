<template>
   <a class="ys-card" href="javascript:;" @click="onItemClicked" >
     <figure>
       <img :src="image" :alt="alt">
       <figcaption>
         <slot></slot>
       </figcaption>
     </figure>
   </a>
</template>

<script>
    export default {
        name: "Card",
        props:{
          image:String,
          alt:{
            type:String,
            default:"card alt"
          },
          link:{
            type:String,
          }
      },
      methods:{
          onItemClicked(){
            this.$router.push({
              path:this.link,//todo: optimal page is not defined!
            })
          }
      }
    }
</script>

<style lang="less" scoped>
    .ys-card{

      width: 80px;
      height: 80px;

      display: inline-block;
      padding: 8px;
      border-radius:10px;
      box-shadow:2px 2px 16px 0 rgba(0,0,0,.1);

      figure{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        align-content: center;

        img{
          width: 30px;
          height: 30px;
          object-fit: contain;
        }

        figcaption{
          color: #161616;
        }
      }
    }
</style>
