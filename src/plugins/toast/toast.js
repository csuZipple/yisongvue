import animated from 'animate.css'

let Toast = {};
Toast.install = function(Vue,options){
    let opt ={
      type:"text",
      text:"这是一条默认的toast",
      position:"middle",
      duration:"2500"
    };

    if(options){
      console.log("exist options");
      Object.keys(options).forEach(key =>{
        opt[key] = options[key];
      });
    }

    Vue.prototype.$toast = op=>{

      if(typeof op ==='string'){
        opt.text = op;
      }else if(typeof op ==='object'){
        Object.keys(op).forEach(key =>{
          opt[key] = op[key];
        });
      }


      if(document.getElementsByClassName("ys-toast").length){
        return;
      }

      let toastTemplate = Vue.extend({
        template: `<div class="ys-toast animated fadeIn ys-toast-${opt.position}">
                        <p>${opt.text}</p>
                    </div>`
      });
      let toastEle = new toastTemplate().$mount().$el;
      document.body.appendChild(toastEle);
      setTimeout(function () {
        document.body.removeChild(toastEle);
      },opt.duration);
    }

};

export{
  Toast
}
