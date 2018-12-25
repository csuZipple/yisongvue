<template>
  <div class='ys-loading-wrapper' v-if="show">
    <div class='loading'>
            <span
              :style='{
                padding: "0 3px",
                animationDuration: duration.indexOf("s") === -1 ? duration + "s" : duration ,
                animationDelay: parseInt(duration)/text.length*index +"s"
              }'
              v-for="(char,index) in text">
              {{char}}
            </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Loading",
    props: {
      show: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default:"加载中..."
      },
      duration: {
        type: String,
        default: '1s'
      }
    }
  }
</script>

<style scoped>
  .ys-loading-wrapper{
    min-width: 140px;
    height: 80px;
    background: rgba(0,0,0,0.8);
    color: #ffffff;
    border-radius:10px;

    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%,-50%);

    display: flex;
    justify-content: center;
  }
  .ys-loading-wrapper .loading {
    display: flex;
    text-align: center;
    padding-top: 30px;
    height: 50px;
    justify-content: space-between;
  }
  .ys-loading-wrapper .loading span {
    margin-top: 0;
    animation: ease infinite move;
    display: block;
  }
  @keyframes move {
    0% {
      margin-top: -8px;
    }
    50% {
      margin-top: 8px;
      border-bottom: none;
    }
    100% {
      margin-top: -8px;
    }
  }
</style>
