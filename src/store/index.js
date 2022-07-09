import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
     upLv:100,
     initInfo:{}//up本人数据
  },
  getters: {
  },
  mutations: {
    InitUserInfo:(state,val)=>{
      state.initInfo=val
    },
    getCurLv:(state)=>{
      state.upLv+1
    }
    
  },
  actions: {
  },
  modules: {
  },
});
