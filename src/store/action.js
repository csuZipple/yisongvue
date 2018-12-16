import{SET_TOKEN,SET_SWIPER_LIST,SET_LOCATION,SET_INDEX_PRODUCTS,SET_CATEGORIES} from "../util/state/constant";
import {_get} from "../util/http/util";
import {GET} from "../util/http/constant";

const dataActions = {
  setToken({commit},token){
    commit(SET_TOKEN,token);
  },
  setSwiper({commit,state}){
    _get({
      url:`${GET.Slides}${state.storeId}`
    }).then(res=>res.json()).then(data=>{
      let list = [];
      if(data['data']){
        data['data'].forEach((item,index)=>{
          list.push({
            id:index,
            src:item["slideUrl"],
            alt:item['slideId']
          });
        });
        commit(SET_SWIPER_LIST,list);
      }else{
        console.warn("swiper list is null!");
      }
    }).catch(err=>{
      console.error("Failed get swiperList!",err)
    });
  }
};
export {
  dataActions
} ;
