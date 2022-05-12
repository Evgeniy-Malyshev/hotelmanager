<template>
  <div class="index">
    <h1>Редактор комнат</h1>
    <input type="text" v-model="newText" placeholder="Имя комнаты...">
    <br>
    <input type="text" v-model="newTextInfo" placeholder="Описание">
    <br>
    <button @click="textPush">Добавить</button>
    <ul>
      <li v-for="persons in $store.state.room" :key="persons.i">
        <span> {{persons.text}}</span>
        <br>
        <span> {{persons.info}}</span>
        <button class="button__delete" @click="addDelete(persons)">x</button>
      </li>
    </ul>
    <p><button> <a href="#/">Вернутся к просмотру</a> </button></p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      persons: [],
      newText: '',
      newTextInfo: '',
      i: 1,
      isDelete: false,
    }
  },

  methods: {
    textPush () {
      if (this.newText !== '') {
        this.newText = this.newText[0][0].toUpperCase() + this.newText.substr(1, this.newText.length)
        this.$store.state.room.push({
          id: this.$store.state.room.length + 1,
          text: this.newText,
          info: this.newTextInfo,
          isTodoDelete: this.isDelete
        })
        this.newText = '',
        this.newTextInfo = '',
        this.i = this.i + 1
      }
    },
    addDelete (persons) {
      this.$store.state.room.splice(this.$store.state.room.indexOf(persons), 1)
    }
  }
}
</script>

<style>
li {
  text-align: left;
  margin-left: 5%;
   list-style-type: decimal;
   background-color: #acff;
   margin-bottom: 1%;
   width: 85%;
}
.button__delete{
  background-color: rgb(250, 95, 95);
  font-style: bold;
  border: 0.4px solid rgb(54, 54, 54);
  float: right;
}
</style>