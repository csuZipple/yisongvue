import Vue from 'vue'
import Vuex from 'vuex'
import {data,status} from './state'
import {dataMutations} from './mutation'
import {dataActions} from './action'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
      data:{
        namespaced:true,
        state:data,
        mutations:dataMutations,
        actions:dataActions,
        getters:{

        }
      },
      status:{
        namespaced:true,
        state:status
      }
    }
})
