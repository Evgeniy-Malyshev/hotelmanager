<template>
  <v-app>
    <router-view></router-view>
  <v-row>
    <v-col
      cols="12"
      sm="10"
      offset-sm="1"
    >
      <v-card max-height="500px">
        <v-card-title class="blue white--text">
    <span class="text-h5">Редактор номеров</span>

          <v-spacer></v-spacer>

          <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                elevation="2"
                v-bind="attrs"
                v-on="on"
              >
              <span class="text-subtitle-4"><router-link to="/" class="text-decoration-none">Вернутся к просмотру</router-link></span>
              </v-btn>
            </template>
          </v-menu>
    </v-card-title>
        <v-card class="d-flex pa-2">
          <v-col
      sm="3"
    >
          <div>
          <v-text-field
        label="Имя номера"
        outlined
        type="text" v-model="newText"
    ></v-text-field>
    <v-text-field
        label="Оценка"
        outlined
        type="text" v-model="rateRoom"
    ></v-text-field>

    <v-text-field
        label="Этаж"
        outlined
        type="text" v-model="floorNumber"
    ></v-text-field>

    <v-text-field
        label="Количество комнат"
        outlined
        type="text" v-model="roomsNumber"
    ></v-text-field>

    <v-text-field
        label="Описание"
        outlined
        type="text" v-model="newTextInfo"
    ></v-text-field>
    <v-btn
    @click="addRoomActive"
    color="blue white--text"
    elevation="2"
    >Добавить</v-btn>
    </div>
    </v-col>
    <div>
    <v-card v-for="persons in $store.getters.roomList" :key="persons.i" width="250" class="mx-1 my-4 float-left">
    <v-card-text>
      <div class="my-4 text-subtitle-2">
         {{"Имя: " + persons.text}}
         <br>
         {{"Оценка: " + persons.rateRoom}}
         <br>
         {{'Этаж: '+ persons.floorNumber}}
         <br>
         {{'Комнат: ' + persons.roomsNumber}}
         <br>
         {{'Описание: ' + persons.info}}
      </div>
    </v-card-text>
    <div
    align="right"
    >
    <v-btn
    @click="addDelete(persons)"
    color="red white--text"
    elevation="2"
    >Удалить</v-btn>
    </div>
    </v-card>
    </div>
</v-card>
</v-card>
    </v-col>
  </v-row>
  </v-app>
</template>




<script>

export default {
  name: 'app',
  data () {
    return {
      persons: [],
      newText: '',
      newTextInfo: '',
      floorNumber: '',
      roomsNumber: '',
      rateRoom: '',
      i: 1,
      isDelete: false,
      payload: []
    }
  },

  methods: {
    addRoomActive(){
      this.$store.dispatch('addRoom', {newText: this.newText, newTextInfo: this.newTextInfo, isDelete: this.isDelete, floorNumber: this.floorNumber, roomsNumber: this.roomsNumber, rateRoom: this.rateRoom}),
      this.newText = '',
      this.newTextInfo = '',
      this.floorNumber = '',
      this.roomsNumber = '',
      this.rateRoom = '',
      this.i = this.i + 1
    },
    addDelete (persons) {
      this.$store.getters.roomList.splice(this.$store.getters.roomList.indexOf(persons), 1)
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