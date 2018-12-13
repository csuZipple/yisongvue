import {AUTH} from '../wx/config/constant'

//call when the user needs to place an order(in addition to adding goods to the shopping cart)
//before this method must be {if{state.token}{}}
function wxAuth(){
  //save the current state of the page first
  localStorage.setItem("currentUrl",window.location.href);
  window.location.href = AUTH;
}


/**
 * Returning token in the background according to the code or token
 * @param url
 * @param formData :code or old token.
 * @param callback
 */
function setToken(url,formData,callback) {
  fetch(url, {
    method: 'POST',
    body: formData
  }).then(res=> {
    if (res.ok) {
      res.json().then(result=>{
        switch(result.code){
          case 200:
            //set token and expireTime in  localStorage
            console.log("get token success from http");
            localStorage.setItem("token",result.data.token);
            localStorage.setItem("expireTime",result.data.expireTime);
            if(typeof callback==="function"){
               callback(result.data.token);
            }
            break;
          case 400:
            //Re-register the user when using the token as a parameter request to return 400 in the background.
            wxAuth();
            break;
          default:
        }
      })
    }
  }).catch((res) => {
    console.log(res);
  });
}

export{
  setToken,wxAuth
}
