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

export{
  getQueryString,getToken
}
