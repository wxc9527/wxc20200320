import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info000041:{},
    info070012:{},
    info202801:{},
    info377016:{},
    info160314:{},
    info519039:{}
  },
  mutations: {
    datahtml000041(state,data){
      state.info000041=data;
    },
    datahtml070012(state,data){
      state.info070012=data;
    },
    datahtml202801(state,data){
      state.info202801=data;
    },
    datahtml377016(state,data){
      state.info377016=data;
    },
    datahtml160314(state,data){
      state.info160314=data;
    },
    datahtml519039(state,data){
      state.info519039=data;
    },
    
  },
  actions: {
  },
  modules: {
  }
})
