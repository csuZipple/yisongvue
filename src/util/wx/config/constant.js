import httpConfig from '../../http/constant'

const wx = {
   appID:  "wx542b343e4c584351",
   scope:"snsapi_userinfo",
};
const AUTH =`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wx.appID}&redirect_uri=${httpConfig.login}&response_type=code&scope=${wx.scope}&state=STATE#wechat_redirect`;
export {
  AUTH
};
