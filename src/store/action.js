import {
  SET_TOKEN,
  SET_SWIPER_LIST,
  SET_LOCATION,
  SET_INDEX_PRODUCTS,
  SET_CATEGORIES,
  SET_STOREID,
  SET_STORENAME
} from "../util/state/constant";
import {_get} from "../util/http/util";
import {GET} from "../util/http/constant";
import {registerWeixin} from "../util/http/util";

const dataActions = {
  setToken({commit},token){
    commit(SET_TOKEN,token);
  },
  setStoreId({commit},storeId){
    commit(SET_STOREID,storeId);
  },
  setStoreName({commit},storeName){
    commit(SET_STORENAME,storeName)
  },
  setSwiper({commit,state},context){
    _get({
      url:`${GET.Slides}${state.storeId}`
    }).then(res=>res.json()).then(data=>{
      let list = [];
      if(data['data'].length){
        data['data'].forEach((item,index)=>{
          list.push({
            id:index,
            src:item["slideUrl"],
            alt:item['slideId']
          });
        });
        commit(SET_SWIPER_LIST,list);
      }else{
        context.$toast(`can't get the swiper data! data is null!`);
        console.warn("swiper list is null!");
      }
    }).catch(err=>{
       context.$toast(`Failed get swiperList! err: ${err}`);
       console.error("Failed get swiperList!",err)
    });
  },
  setLocation({commit},context){
    return new Promise((resolve,reject)=>{
      registerWeixin(function (wx) {
        wx.getLocation({
          type: 'gcj02',
          success(res) {
            const{latitude,longitude} = res;
            commit(SET_LOCATION,{latitude,longitude});
            resolve(res);
          },
          cancel(res){
            context.$toast(`open your GPS to get nearby store list.`);
            console.warn("open your GPS to get nearby store list.");
            reject(res);
          },
          fail(err){
            context.$toast(`network err, ${err}`);
            console.error("failed to get location.");
            reject(err);
          }
        });
      })
    })

  }
};
export {
  dataActions
} ;
