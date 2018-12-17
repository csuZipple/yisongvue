const data = {
  token:"testToken",
  location:{latitude:"28",longitude:"112"},//lat and lnt
  storeId:"",//1535356045336
  storeName:"",
  swiperList:[{
      id:0,
      src:require("../assets/image/banner.svg"),
      alt:"轮播图"
  }],
  categories:[{
    id:0,
    image:require("../assets/icon/optimal.svg"),
    text:"壹送优选",
    link:"/optimal"
  }],
  indexProducts:[{
    id:0,
    title:"默认数据",
    products:[
      {
        id:2,
        image:require("../assets/image/product_wangzai.svg"),
        alt:"旺仔小馒头",
        title:"旺仔小馒头原味16g",
        sales:48,
        price:1.5
      }]
  }],
};

const status={

};
export{
  data,status
};
