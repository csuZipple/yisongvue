<template>
  <div class="ys-number-input" :class="{'error':error}">
    <input type="text" :value="value" v-focus title="" @input="handleInput" @blur="validate" maxlength="11" placeholder="请输入十一位手机号码...">
    <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <img @click="clear" v-if="showClose" src="../assets/icon/close.png" alt="close">
    </transition>
  </div>
</template>

<script>
  import animated from 'animate.css'
  import {validatePhone} from "../util/util";

  export default {
    name: "RegisterPhoneInput",
    directives: {
      focus: {
        inserted: function (el) {
          el.focus();
        }
      }
    },
    props:{
      value:[Number,String]
    },
    methods:{
      handleInput(e){
        e.target.value = this.validateNumber(e.target.value);
        this.$emit('input',e.target.value); //for v-model
        if(!this.showClose){
          this.showClose = true;
        }
        if(e.target.value===''){
          this.showClose = false;
        }
        this.error = false;
      },
      clear(){
        this.$emit("onClear");
        this.showClose = false;
      },
      validateNumber(val){
        return val.replace(/\D/g,'');
      },
      validate(e){
        this.error = !validatePhone(e.target.value);
        this.error && e.target.focus();
      }
    },
    data(){
      return{
        showClose:false,
        error:false
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-number-input{
    padding: 12px 9px;
    margin: 12px 0;
    box-sizing: content-box;
    border-bottom: 1px solid #D6D6D6;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    input{
      color: #4A4A4A;
      font-size: 5vw;
      margin-left: 12px;
    }

    input::placeholder{
      font-size: 3vw;
    }

    img{
      width: 20px;
      height: 20px;
      object-fit: contain;
    }

    &:after{
      content: '请输入有效的手机号码';
      transition: all 0.3s;
      padding: 5px 12px;
      background: #ffffff;
      font-size: 3vw;
      border: 1px solid #eee;
      box-shadow:0 2px 10px 4px rgba(227,227,227,0.5);
      position: absolute;
      bottom: 0;
      right: 0;
      opacity: 0;
    }

  }
  .error{
    border-bottom: 1px solid #f00;

    &:after{
      opacity: 1;
      transform: translateY(100%);
    }
  }
</style>
