/* constant for http request*/
// const domain="https://project.sumixer.com/yisong/api";
// const domain="http://10.0.0.16:8889";
const domain="http://10.0.0.14:8888/manager";
const host = "http://wechat.yisongbld.com";
const mapAk = "MChiGQjAWZk8vdQ2S8F1MKzoEO9P4jni";
const GET = {
  Signature:domain+'/wechat/jssdk/signature?url=',
  NearbyStores:domain+'/stores/near',//?lnt=&lat='
  Notice:domain+"/stores/notices/",//?storeId
  Menus:domain+"/stores/menus/",//?storeId
  FirstCategory:domain+"/category/first/",
  /**
   * @return {string}
   */
  SecondCategory(firstId) {
    return domain+`/category/${firstId}/second`;
  },
  /**
   * @return {string}
   */
  CategoryProduct(categoryId){
    return domain+`/category/${categoryId}/products`;
  },
  Slides:domain+"/stores/slides/",//?storeId
  /**
   * @return {string}
   */
  Hot(storeId) {
    return domain+`/store/${storeId}/products/hot`
  },
  /**
   * @return {string}
   */
  Orders(userId) {
    return domain+`/users/${userId}/orders`;
  },
  /**
   * @return {string}
   */
  OrderById(userId, orderId) {
    return domain+`/users/${userId}/orders/${orderId}`;
  },
  /**
   * @return {string}
   */
  UserInfo(userId){
    return domain+`/users/${userId}`;
  },

  HotSearch:domain+"/products/hot",
  /**
   * @return {string}
   */
  ProductDetail(id){
    return domain+`/products/${id}`
  },

  /**
   * @return {string}
   */
  Search(keyword) {
    return domain+`/search/${keyword}`;
  }
};

const POST = {
  VerificationCode:domain+"/messages/wechat",
  BindPhone:domain+"/users/weixin",
  Orders:domain+"/orders",
  WxPay:domain+"/payments/orders/wepay",
  WxPayFail:domain+"/payments/orders/wepay/fail/",
};

const PUT = {
  /**
   * @return {string}
   */
  AddressDefault(userId,addressId){
    return domain+`/users/${userId}/address/${addressId}/default`
  }
};
export default {
  whitelist:"wechat.yisongbld.com",
  login:host+"/login",
  auth:domain+"/auth/weixin/",
  refreshToken:domain+"/auth",
};

export {
  GET,POST,PUT
}
