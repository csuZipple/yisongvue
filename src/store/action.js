import {
  SET_TOKEN,
  SET_SWIPER_LIST,
  SET_LOCATION,
  SET_INDEX_PRODUCTS,
  SET_CATEGORIES,
  SET_STOREID,
  SET_STORENAME,
  SET_NOTICES,
  SET_CART_ITEM_LIST,
  SET_ORDER_LIST,
  SET_USER_INFO,
  SET_SHOW_LOADING,
  SET_CONFIRM_ORDER
} from "../util/state/constant";
import {_get,_fetch} from "../util/http/util";
import {GET} from "../util/http/constant";
import {registerWeixin} from "../util/http/util";

const dataActions = {
  async setToken({commit,dispatch},obj){
      await dispatch('setUserInfo',obj.userId);
      commit(SET_TOKEN,obj.token);
  },
  setStoreId({commit},storeId){
    commit(SET_STOREID,storeId);
  },
  setStoreName({commit},storeName){
    commit(SET_STORENAME,storeName)
  },
  setSwiper({commit,state},context){
    let xhr = _get({
      url:`${GET.Slides}${state.storeId}`
    });
    xhr.then(res=>res.json()).then(data=>{
      let list = [];
      if(data['data']&&data['data'].length){
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
    state.requests.push(xhr);
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
  },
  setNotices({commit,state},context){
    let xhr = _get({url:`${GET.Notice}${state.storeId}`});
    xhr.then(res=>res.json()).then(data=>{
      let list =[];
      if(data['data']&&data['data'].length){
        let id = 0;
        data['data'].forEach(item=>{
          let notices = [];
          let size = 20;
          let len = item['content'].length;
          for(let i=0;i<( item['content'].length/size);i++){
            if((i+1)*size > len){
              notices.push(item['content'].substring(i*size,len));
            }else{
              notices.push(item['content'].substring(i*size,(i+1)*size));
            }
          }
          notices.forEach(n=>{
            list.push({
              id:id++,
              notice:n,
            });
          });
        });
        commit(SET_NOTICES,list);
      }else{
        context.$toast(`can't get notices because it is null`);
        console.warn(`can't get notices because it is null`)
      }
    }).catch(err=>{
      context.$toast(`network err, ${err}`);
      console.error("failed to get notice."+err);
    });
    state.requests.push(xhr);
  },
  setIndexProducts({commit,state},context){
    const req = GET.Hot(state.storeId);
    let xhr = _get({url:req});
    xhr.then(res=> res.json()).then(data=>{
      commit(SET_INDEX_PRODUCTS,data['data'])
    }).catch(err=>{
      console.warn("failed get index products:"+err)
    });
    state.requests.push(xhr);
  },

  initCartItemList({commit}){
    let list = JSON.parse(localStorage.getItem("cartItemList"))||[];
    console.log("init cart item");
    console.log(list);
    commit(SET_CART_ITEM_LIST,list);
  },

  setCartItemList({commit,dispatch},list){
    commit(SET_CART_ITEM_LIST,list);
    dispatch('saveCart')
  },

  addToCart({state,dispatch},product){
    let flag = false;
    state.cartItem.filter(item=>{
      if(item.id===product.id){
        item.quantity++;
        flag = true;
      }
    });
    if(!flag){
      let p = JSON.parse(JSON.stringify(product));
      p.selected = p.selected ||false;
      p.quantity = p.quantity || 1;
      state.cartItem.push(p);
    }
    dispatch('saveCart');
  },

  subToCart({state,dispatch},product){
    let i = -1;
    state.cartItem.filter((item,index)=>{
      if(item.id === product.id){
        if(item.quantity>1){
          item.quantity--;
        }else{
          i = index;
        }
      }
    });
    if(i>0){
      state.cartItem.splice(i,1);
    }
    dispatch('saveCart');
  },

  saveCart({state}){
    console.log("save cart!");
    localStorage.setItem("cartItemList",JSON.stringify(state.cartItem))
  },

  setOrderList({state,commit}){
    console.log("request order list..");
    let url = GET.Orders(state.user.userId);
    let xhr = _fetch(url);
    xhr.then(res=>res.json()).then(data=>{
      console.log("get order:",data);
      commit(SET_ORDER_LIST,data.data)
    }).catch(err=>{
      console.log("get order list failed! ",err)
    });
    state.requests.push(xhr);
  },

  setUserInfo({state,commit},userId){
    //don't need abort,because it has already await this result when it be called
    let url = GET.UserInfo(userId);
    fetch(url).then(res=>res.json()).then(data=>{
      console.log("get user info ",data);
      commit(SET_USER_INFO,data.data);
    }).catch(err=>{
      console.log("failed to get user info ",err)
    })
  },

  hideLoading({commit}){
    commit(SET_SHOW_LOADING,false);
  },
  showLoading({commit}){
    commit(SET_SHOW_LOADING,true);
  },
  setConfirmOrders({commit},obj){
    commit(SET_CONFIRM_ORDER,obj);
  }

};
export {
  dataActions
} ;
