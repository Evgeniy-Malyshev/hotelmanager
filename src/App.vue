<template>
  <div id="app">
    <p v-show="shownumber === 1">Выберите опцию</p>
    <master v-show="shownumber === 2" @pushpersons="pushpersons" @deleteEmit="deleteEmit"/>
    <show v-show="shownumber === 3" :card="card" :deleteCard="deleteCard" />
    <button @click="showmaster()">Изменение комнат</button>
    <button @click="showshow()">Просмотр комнат</button>
  </div>
</template>

<script>
import master from './components/master.vue'
import show from './components/show.vue'

export default {
  name: 'App',
  
  data() {
    return{
      shownumber: 1,
      card: [],
      deleteCard: []
    }
  },
  components: {
    master,
    show
  },
  methods: {
      showmaster (){
        this.shownumber=2
      },
      showshow(){
        this.shownumber=3
      },
      pushpersons(persons) {
      this.card.push({
          id: persons.length + 1,
          text: persons,
          isTodoDelete: this.isDelete
        })
    },
    deleteEmit(deleteEm){
      this.deleteCard.push({
        deleteEm
      })
    }
  }
}
</script>

<style lang="sass">

</style>
