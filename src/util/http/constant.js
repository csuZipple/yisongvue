/* constant for http request*/
// const domain="https://project.sumixer.com/yisong/api";
const domain="http://10.0.0.16:8889";
const host = "http://wechat.yisongbld.com";
const GET = {
  Signature:domain+'/wechat/jssdk/signature?url=',
  NearbyStores:domain+'/stores/near',//?lnt=&lat='
  Notice:domain+"/stores/notices/",//?storeId
  Menus:domain+"/stores/menus/",//?storeId
  FirstCategory:domain+"/categories/rank/first/",
  Slides:domain+"/stores/slides/",//?storeId
  /**
   * @return {string}
   */
  Hot:function (storeId) {
    return domain+`/store/${storeId}/goods/hot`
  }
};
export default {
  whitelist:"wechat.yisongbld.com",
  register:host+"/register",
  auth:domain+"/auth/weixin/",
  refreshToken:domain+"/auth",

};

export {
  GET
}
