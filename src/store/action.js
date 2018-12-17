import {
  SET_TOKEN,
  SET_SWIPER_LIST,
  SET_LOCATION,
  SET_INDEX_PRODUCTS,
  SET_CATEGORIES,
  SET_STOREID,
  SET_STORENAME, SET_NOTICES
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
    _get({url:`${GET.Notice}${state.storeId}`}).then(res=>res.json()).then(data=>{
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
    })
  },
  setIndexProducts({commit,state},context){
    const req = GET.Hot(state.storeId);
      _get({url:req}).then(res=> res.json()).then(data=>{
         commit(SET_INDEX_PRODUCTS,data['data'])
      }).catch(err=>{
        console.warn("failed get index products:"+err)
      })
  }
};
export {
  dataActions
} ;
