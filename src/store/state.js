const data = {
  token:"testToken",
  location:{latitude:"28",longitude:"112"},//lat and lnt
  storeId:"",//1535356045336
  storeName:"",
  notices:[
    {
    id:0,
    notice:"下单闪电配送，平均20分钟送达!"
  },{
    id:1,
    notice:"这是第二条测试数据"
  }],
  swiperList:[
    {
      id:0,
      src:require("../assets/image/banner.svg"),
      alt:"轮播图"
  }],
  categories:[
    {
    id:0,
    image:require("../assets/icon/optimal.svg"),
    text:"壹送优选",
    link:"/optimal"
  }],
  indexProducts:[
    {
    id:0,
    type:"热销小吃",
    products:[
      {
        id:0,
        image:require("../assets/image/product_wangzai.svg"),
        alt:"旺仔小馒头",
        title:"旺仔小馒头原味16g",
        sales:48,
        price:1.5
      }]
  },{
    id:1,
    type:"今日推荐",
    products:[
      {
        id:0,
        image:require("../assets/image/product_wangzai.svg"),
        alt:"旺仔小馒头",
        title:"旺仔小馒头原味16g",
        sales:48,
        price:1.5
      }]
  }],
  cartItem:[
    {
      id:"123",
      title:"旺仔小馒头原味16g",
      price:"1.00",
      quantity:1,
      image:"",
      alt:"旺仔小馒头",
      selected:false
    },
    {
      id:"321",
      title:"旺仔小馒头原味16g",
      price:"1.00",
      quantity:1,
      image:"",
      alt:"旺仔小馒头",
      selected:false
    }
  ],//cart items will be stored locally -- localStorage
  orderList:[
    {
      shopName:"壹送便利店（全丰小区店）",
      status:0,//['订单交易中','交易完成','未付款'],
      shopPhone:"13500879965",
      products:[
        {
          id:"123",
          title:"旺仔小馒头原味16g",
          price:"1.00",
          quantity:1,
          image:require('../assets/image/products-mini.png'),
          alt:"旺仔小馒头",
        },
        {
          id:"321",
          title:"旺仔小馒头原味16g",
          price:"1.00",
          quantity:1,
          image:require('../assets/image/products-mini.png'),
          alt:"旺仔小馒头",
        }
      ],
      orderId:458975574253689,
      time:'2018-11/17 11:10',
      address:"长沙市雨花区万家丽南路960号 长沙理工大学",
      username:"凌宝",
      gender:1,//[0 for man,1 for woman]
      phone:"15366302980",
      payType:0,//[1线上,2货到付款,3钱包]
      payPrice:"16.00",//actual price
      price:18.5,//original price
      createTime:"2018-12-19 16:17:31"
    },
    {
      shopName:"壹送便利店（全丰小区店）",
      shopPhone:"13500879965",
      status:2,
      products:[
        {
          id:"123",
          title:"旺仔小馒头原味16g",
          price:"1.00",
          quantity:1,
          image:require('../assets/image/products-mini.png'),
          alt:"旺仔小馒头",
        },
        {
          id:"321",
          title:"旺仔小馒头原味16g",
          price:"1.00",
          quantity:1,
          image:require('../assets/image/products-mini.png'),
          alt:"旺仔小馒头",
        }
      ],
      orderId:458975574253688,
      time:'2018-11/17 11:10',
      address:"长沙市雨花区万家丽南路960号 长沙理工大学",
      username:"凌宝",
      gender:1,//[0 for man,1 for woman]
      phone:"15366302980",
      payType:0,//[1线上,2货到付款,3钱包]
      payPrice:"16.00",//actual price
      price:18.5,//original price
      createTime:"2018-12-19 16:17:31"
    }
  ],

  user:{
    userId:1,
    username:"Zipple",
    avatar:"",
    addressList:[
      {
        id:0,
        phone:"18373151083",
        gender:0,
        address:"长沙通泰梅岭苑",
        lat:"",
        lnt:"",
        addressDetail:"2单元604",
        default:true,//must have a default address.
        username:"漠叹尘",
      }, {
        id:1,
        phone:"18945671256",
        gender:1,
        address:"长沙市雨花区万家丽南路960号 长沙理工大学云塘校区 凌宝宝收",
        lat:"",
        lnt:"",
        default:false,//must have a default address.
        username:"凌莫莫",
        addressDetail:"2单元604 凌莫莫",
      }
    ]
  },


  requests:[],
  isLoading:false,
  loadingText:"",

  confirmOrders:{
    userId:"",
    addressId:"",
    storeId:"",
    time:"",
    products:[
      {
        id:1,
        quantity:3,
        //other info
      }
    ],
    note:"",
    payType:1
  }
};

const status={

};
export{
  data,status
};
