/* constant for http request*/
// const domain="https://project.sumixer.com/yisong/api";
const domain="http://10.0.0.16:8889";
const host = "http://wechat.yisongbld.com";
const mapAk = "MChiGQjAWZk8vdQ2S8F1MKzoEO9P4jni";
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
  login:host+"/login",
  auth:domain+"/auth/weixin/",
  refreshToken:domain+"/auth",
};

export {
  GET
}
