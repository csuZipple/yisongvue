/* constant for http request*/
// const domain="https://project.sumixer.com/yisong/api";
const domain="http://10.0.0.2:8889";
const host = "http://wechat.yisongbld.com";
export default {
  whitelist:"wechat.yisongbld.com",
  register:host+"/register",
  auth:domain+"/auth/weixin/",
  refreshToken:domain+"/auth",
  signature:domain+'/wechat/jssdk/signature?url=',
  near:domain+'/stores/near',//?lnt=&lat='
};
