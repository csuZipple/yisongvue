import animated from 'animate.css'

let Toast = {};
Toast.install = function(Vue,options){
    let opt ={
      type:"text",
      text:"这是一条默认的toast",
      position:"middle",
      duration:2500
    };

    if(options){
      console.log("exist options");
      Object.keys(options).forEach(key =>{
        opt[key] = options[key];
      });
    }

    Vue.prototype.$toast = op=>{
      let temp = "";
      if(typeof op ==='string'){
        temp = `<div class="ys-toast animated fadeIn ys-toast-middle">
                        <p>${op}</p>
                    </div>`;
      }else if(typeof op ==='object'){
        temp = `<div class="ys-toast animated fadeIn ys-toast-${op.position}">
                        <p>${op.text}</p>
                    </div>`
      }

      let toastTemplate = Vue.extend({
        template: temp});
      if(document.getElementsByClassName("ys-toast").length){
        return;
      }

      let toastEle = new toastTemplate().$mount().$el;
      document.body.appendChild(toastEle);
      let duration = op.duration;//init
      if(!op.duration){
        duration = opt.duration;
      }

      setTimeout(function () {
        document.body.removeChild(toastEle);
      },duration);
    }

};

export{
  Toast
}
