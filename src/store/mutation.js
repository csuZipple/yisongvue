import{SET_STOREID,SET_TOKEN,SET_SWIPER_LIST,SET_LOCATION,SET_INDEX_PRODUCTS,SET_CATEGORIES,SET_STORENAME,SET_NOTICES,
        SET_CART_ITEM_LIST,SET_USER_INFO,SET_ORDER_LIST
} from "../util/state/constant";

const dataMutations = {
  [SET_STOREID](state,storeId){
       state.storeId = storeId;
    },
  [SET_STORENAME](state,storeName){
       state.storeName = storeName;
    },
  [SET_NOTICES](state,list){
    state.notices = list;
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
  [SET_CART_ITEM_LIST](state,list){
    state.cartItem = list;
  },
  [SET_USER_INFO](state,obj){
    state.user = obj;
  },
  [SET_ORDER_LIST](state,list){
    state.orderList = list;
  }

};
const statusMutations = {

};
export {
  dataMutations,statusMutations
};
