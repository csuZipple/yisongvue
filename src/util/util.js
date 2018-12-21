/**
 *
 * @param name :the key
 * @returns {*}
 */
function getQueryString(name){
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  return unescape(r[2]);
}

//get token in localStorage and determine whether the token has expired or not,y and then set token in store.n and do nothing.
function getToken(){
  let date = new Date().getTime();
  let expireTime = localStorage.getItem("expireTime");
  if(!expireTime){
    if (parseInt(expireTime, 10) <= date) {
      console.warn("old token has been expired!");
    }else{
      return localStorage.getItem("token");
    }
  }else{
    console.warn("old token not found!");
  }
}


function createGetRequest({url,params}){
  //Todo:check url and param type
  let req = url+"?";
  let query = [];
  if(params){
    Object.keys(params).forEach((key)=>{
      query.push(encodeURI(key)+"="+encodeURI(params[key]));
    });
  }
  return req+query.join("&");
}

function throttle(fn,context,param=[],delay=500,mustApplyTime=1000){
  fn.timer&&clearTimeout(fn.timer);
  fn._cur=Date.now();
  fn._start =fn._start||fn._cur;
  if(fn._cur-fn._start>mustApplyTime){
    fn.apply(context,param);
    fn._start=fn._cur;
  }else{
    fn.timer=setTimeout(function(){
      fn.apply(context,param);
    },delay);
  }
}

function removeHtmlTag(str){
  str = str.replace(/<\/?[^>]*>/g,'');
  str = str.replace(/[ | ]*\n/g,'\n');
  str=str.replace(/&nbsp;/ig,'');
  return str;
}

export{
  getQueryString,getToken,createGetRequest,throttle,removeHtmlTag
}
