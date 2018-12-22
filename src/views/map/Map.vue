<template>
  <!--todo: return address to AddAddressDetail and ModifyAddressDetail by using vuex.-->
  <div class="ys-map">

    <div id="map"></div>

    <div id="tips">
      <AddressItem :title="'当前位置'" :address="currentAddress" :extra="'(以图上标记位置为准)'"/>
      <AddressItem v-for="(item,index) in potentialLocation" v-bind:key="index" :title="item.title" :address="item.address" @click.native="selectAddress(item)"/>
      <div v-if="potentialLocation.length===0">{{point.lng}},{{point.lat}}</div>
    </div>

    <div class="ys-search-address">
      <div class="ys-search-wrapper">
        <img src="../../assets/icon/search.svg" alt="search">
        <input type="text" title="" id="suggestId" placeholder="定位不准确？试试手动输入">
        <img src="../../assets/icon/close.svg" alt="">
      </div>
    </div>

    <div class="search-tips" id="result">
      tips
    </div>
  </div>
</template>

<script>
  import AddressInput from "../address/components/AddressInput";
  import AddressItem from "./AddressItem";
  export default {
    name: "Map",
    components: {AddressItem},
    mounted(){
      this.$nextTick(()=>{
        this.initMaps();
        this.locate();
      })
    },
    methods:{
      initMaps(){
        this.map = new BMap.Map("map");
        let mPoint = new BMap.Point(116.404, 39.915);//Tiananmen Square
        this.map.centerAndZoom(mPoint,17);
      },
      locate(){
        let map = this.map;
        let geolocation = new BMap.Geolocation();
        const vm = this;
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() === BMAP_STATUS_SUCCESS){
            let mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            console.log("获取到的定位：",r);
            vm.analyze(r.point);
          }
          else {
            console.log('failed ',this.getStatus());
          }
        });
        //loading--
      },
      getAroundPOI(keyword){
        let map = this.map;
        let mPoint = new BMap.Point(this.point.lng, this.point.lat);//h5 112.983323,28.141431
        let vm = this;
        let local =  new BMap.LocalSearch(map, {
          onSearchComplete(results){
            if (local.getStatus() === BMAP_STATUS_SUCCESS){
              let temp = [];
              results.forEach(item=>{
                temp = temp.concat(item.Ar);
              });
              vm.potentialLocation = temp;
            }else{
              console.warn("get poi error ,code -> ",local.getStatus());
            }
          }
        });
        local.searchNearby(keyword,mPoint,1000);
      },
      analyze(point){//point:{lat:"",lng:""}
        const geoc = new BMap.Geocoder();
        const vm = this;
        //解析地址会有异常--有时候会解析正确，有时候只会解析到区
        /*point.lng = 112.995443;//梅岭苑
        point.lat = 28.143792;*/
        geoc.getLocation(point, function(rs){
          console.log("逆地址解析:",rs.address);
          vm.point = rs.point;//===r.point
          vm.currentAddress = rs.address;
          vm.poiKeyword = rs.street||rs.address;
        });
      },

      getSuggestion(){

      },
      selectAddress(item){
        console.log("select",item);
      }
    },
    data(){
      return {
        map:null,
        currentAddress:"",
        point:{},
        poiKeyword:"",
        potentialLocation:[],
      }
    },
    watch:{
      poiKeyword(n){
        this.getAroundPOI(["栋","店","小区","学校","餐饮",n]);
      }
    }
  }
</script>

<style lang="less" scoped>
  .ys-map{
    height: 100%;
    overflow: hidden;
    position: relative;
    #map{
      height: 50%;
    }
    #tips{
      width: 100%;
      height: 50%;
      overflow-y: scroll;
      position: relative;
      padding: 1px 12px;

    }
    .ys-search-address{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 50px;

      background: #f2f2f2;
      padding: 8px 0;
      display: flex;
      justify-content: center;

      .ys-search-wrapper{
        width: 68%;
        padding: 8px 12px;
        background: rgba(0, 0, 0, .06);
        border-radius: 20px;

        display: flex;
        align-items: center;
        input{
          background: transparent;
        }

        img{
          width: 22px;
          height: 22px;
          padding: 3px;
          margin: 0 5px;
          object-fit: contain;
        }
      }
    }
    .search-tips{
      position: absolute;
      left: 0;
      top: 50px;
      background: rgba(255,255,255,.8);
      border:1px solid #C0C0C0;
      height:auto;
      display:none;
    }
  }
</style>
