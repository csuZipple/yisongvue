<template>
  <figure class="ys-page-loading">
    <img src="../assets/image/loading.png" alt="loading">
    <figcaption>
      <p>
        努力加载中
        <span v-for="i in 3" :style='{
                animationDuration: "1s",
                animationDelay:i/3+"s"
              }'>.
      </span>
      </p>
    </figcaption>
  </figure>
</template>

<script>
  export default {
    name: "PageLoading",
  }
</script>

<style lang="less" scoped>
  .ys-page-loading{
    height: 100%;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;

    img{
      margin-top: 100px;
    }
    p{
      margin: 30px 0 ;
      color: #666666;
      font-size: 4vw;
      span {
        text-align: center;
        animation: ease infinite move;
        opacity: 0;
      }
    }

    @keyframes move {
      0% {
      }
      50%{
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }
  }
</style>
