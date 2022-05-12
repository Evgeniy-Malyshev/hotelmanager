import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        room: []
      }
    }
  })

  export default store;