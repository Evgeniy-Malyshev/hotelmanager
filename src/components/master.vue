<template>
  <div id="app">
    <div class="index">
      <h2>Список комнат</h2>
    <input type="text" v-model="newText" placeholder="Имя комнаты...">
    <button @click="textPush">Добавить</button>
    <masterHelper :persons = persons :i = i :isTodoDelete = isTodoDelete @deleteEmit="deleteEmit"/>
    <hr>
    <p>Всего комнат: {{ persons.length }}</p>
    <router-view/>
    </div>
  </div>
</template>

<script>
import masterHelper from './masterHelper'

export default {
  name: 'app',
  data () {
    return {
      persons: [],
      newText: '',
      i: 1,
      isDelete: false,
    }
  },

  methods: {
    textPush () {
      if (this.newText !== '') {
        this.newText = this.newText[0][0].toUpperCase() + this.newText.substr(1, this.newText.length)
        this.persons.push({
          id: this.persons.length + 1,
          text: this.newText,
          isTodoDelete: this.isDelete
        })
        this.$emit("pushpersons", this.newText)
        this.newText = ''
        this.i = this.i + 1
      }
    },
    deleteEmit(deleteEm){
      this.$emit("deleteEmit", deleteEm)
    }
  },
  components: {
    masterHelper
  }
}
</script>

<style>
li {
  list-style-type: decimal;
}
.index {
  background-color: #e2ffe0;
  width: 30%;
  border: 1px solid black;
  text-align: center;
  min-height: 500px;
}
</style>
