import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        roomList: []
      }
    },
    getters: {
      roomList(state) {
        return state.roomList
      }
    },
    mutations: {
      addRoom(state, newText, newTextInfo, isDelete){
        if (newText !== '') {
          newText = newText[0][0].toUpperCase() + newText.substr(1, newText.length)
          state.roomList.push({
            id: state.roomList.length + 1,
            text: newText,
            info: newTextInfo,
            isTodoDelete: isDelete
          })
      }
    }
  }})

  export default store;