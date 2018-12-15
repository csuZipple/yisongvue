import {AUTH} from '../wx/config/constant'
import httpConfig ,{GET}from './constant'
import {createGetRequest} from '../util'
import wx from 'weixin-jsapi'

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

/**
 * register weixin js-api
 * @param callback
 */
function registerWeixin(callback){
  fetch(GET.Signature+ window.location.href.split("#")[0]).then(res => {
    if (res.ok) {
      res.json().then(result=> {
        if (result.code === 200) {
          let data = result.data;
          wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: [
              'openLocation',
              'getLocation',
              'showOptionMenu',
              'closeWindow',
              'chooseWXPay',
              'openProductSpecificView',
              'addCard',
              'chooseCard',
              'openCard'
            ]
          });
          wx.ready(()=>{
            //config success
            callback(wx);
          });
          wx.error(res=>{
            console.table(res)
          })
        }
      })
    }
  }).catch(err => {
    console.log(err);
  });
}


/**
 * Optimized simple get request
 * _get({url:"",param:{}},()=>{})
 * @param request
 * @param success
 * @param failed
 * @private
 */
function _get(request, success, failed) {
  const req = createGetRequest(request);
  fetch(req).then(res => {
    if (res.ok) {
      res.json().then(result=>{
        if(typeof success==='function') success(result.data);
      })
    }else{
      if(typeof failed ==='function') failed(res);
    }
  }).catch(res => {
    if(typeof failed ==='function') failed(res);
  })
}


export{
  setToken,wxAuth,registerWeixin,_get
}
