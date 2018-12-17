import{SET_STOREID,SET_TOKEN,SET_SWIPER_LIST,SET_LOCATION,SET_INDEX_PRODUCTS,SET_CATEGORIES,SET_STORENAME} from "../util/state/constant";

const dataMutations = {
  [SET_STOREID](state,storeId){
       state.storeId = storeId;
    },
  [SET_STORENAME](state,storeName){
       state.storeName = storeName;
    },
  [SET_TOKEN](state,newToken){
       state.token = newToken;
    },
  [SET_SWIPER_LIST](state,list){
       state.swiperList = list;
    },
  [SET_LOCATION](state,location){
       state.location = location;
    },
  [SET_INDEX_PRODUCTS](state,products){
       state.indexProducts = products;
    },
  [SET_CATEGORIES](state,categories){
       state.categories = categories;
    },
};
const statusMutations = {

};
export {
  dataMutations,statusMutations
};
