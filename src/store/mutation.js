import{SET_STOREID,SET_TOKEN,SET_SWIPER_LIST,SET_LOCATION,SET_INDEX_PRODUCTS,SET_CATEGORIES} from "../util/state/constant";

const dataMutations = {
  [SET_STOREID](state,storeId){
       state.storeId = storeId;
    },
  [SET_TOKEN](state,newToken){
       state.token = newToken;
    },
  [SET_SWIPER_LIST](state,list){
       state.swiperList = list;
    },
  [SET_LOCATION](state,newToken){
       state.categories = newToken;
    },
  [SET_INDEX_PRODUCTS](state,newToken){
       state.token = newToken;
    },
  [SET_CATEGORIES](state,newToken){
       state.token = newToken;
    },
};
const statusMutations = {

};
export {
  dataMutations,statusMutations
};
