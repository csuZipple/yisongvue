import httpConfig from '../../http/constant'

const wx = {
   appID:  "wxe80557e8ca49c4b9",
   scope:"snsapi_userinfo",
};
const AUTH =`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wx.appID}&redirect_uri=${httpConfig.login}&response_type=code&scope=${wx.scope}&state=STATE#wechat_redirect`;
export {
  AUTH
};
