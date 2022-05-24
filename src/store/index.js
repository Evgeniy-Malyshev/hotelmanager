import Vuex from 'vuex'
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store({
    state () {
      return {
        roomList: [],
        roomAction: []
      }
    },
    getters: {
      roomList(state) {
        return state.roomList
      }
    },
    mutations: {
      addRoomPush(state){
        state.roomList = state.roomAction
    },
    deleteRoomMutation(){

    }
  },
  actions: {
    addRoom(context, payload){
      if (payload.newText !== '') {
        payload.newText = payload.newText[0][0].toUpperCase() + payload.newText.substr(1, payload.newText.length)
        context.state.roomAction.push({
          id: context.state.roomList.length + 1,
          text: payload.newText,
          info: payload.newTextInfo,
          isTodoDelete: payload.isDelete,
          floorNumber: payload.floorNumber,
          roomsNumber: payload.roomsNumber,
          rateRoom: payload.rateRoom
        })
    }
      context.commit('addRoomPush')
    }
  },
})

  export default store;
