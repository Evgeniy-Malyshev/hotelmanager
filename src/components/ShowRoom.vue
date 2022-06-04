<template>
  <v-app v-bind:class="{ reverse: showAddRoo }">
    <router-view></router-view>
  <v-row>
    <v-col
      cols="12"
      sm="10"
      offset-sm="1"
    >
      <v-card height="1200px">
        <v-card-title class="blue white--text">
          <span class="text-h5">Список номеров</span>

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
              <span class="text-subtitle-4"><router-link to="/" class="text-decoration-none">Главная</router-link></span>
              </v-btn>
              <v-btn
                elevation="2"
                v-bind="attrs"
                v-on="on"
                @click="showAddRoom()"
                color="white blue--text"
                class="mx-3"
              >
              <span class="text-subtitle-4">Редактор</span>
              </v-btn>
            </template>
          </v-menu>
        </v-card-title>
        
        
        
        
        
        <v-card-text>
          <v-card
    class="mx-auto my-12 mr-5 float-left"
    max-width="315"
    v-for="persons in $store.getters.roomList" :key="persons.i"
  >

    <v-img
      height="250"
      src="../assets/testRoomPic.jpg"
    ></v-img>

    <v-card-title>{{persons.text}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="persons.rateRoom"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{persons.rateRoom}} 
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        Этаж: {{persons.floorNumber}} • Комнат: {{persons.roomsNumber}}
      </div>

      <div>{{persons.info}}</div>
      <div
    align="right"
    >
    <v-btn
    @click="addDelete(persons)"
    v-bind:class="{ showButtonDelete: !showAddRoo }"
    color="red white--text"
    elevation="2"
    >Удалить</v-btn>
    </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="blue lighten-2"
        text
        @click="reserve"
      >
        Забронировать
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

        

  <div v-show="this.showAddRoo === true" class="addRoomMenu">


    <v-card
  >
    <v-card-title class="blue white--text my-5">
      <span class="text-h5">Редактор</span>
    </v-card-title>
    <v-text-field
    label="Имя номера"
    outlined
    type="text" v-model="newText"
    />

    <v-text-field
        label="Оценка"
        outlined
        type="text" v-model="rateRoom"
    />

    <v-text-field
        label="Этаж"
        outlined
        type="text" v-model="floorNumber"
    />

    <v-text-field
        label="Количество комнат"
        outlined
        type="text" v-model="roomsNumber"
    />

    <v-text-field
        label="Описание"
        outlined
        type="text" v-model="newTextInfo"
    />
    <v-btn
    @click="addRoomActive"
    color="blue white--text"
    elevation="2"
    >Добавить</v-btn>
    <v-btn
    @click="showAddRoom()"
    color="red white--text"
    class="float-right"
    elevation="2"
    >Закрыть</v-btn>
    </v-card>
  </div>
  </v-app>
</template>



<script>
export default {
  name: 'App',
  data: () => ({
      loading: false,
      selection: 1,
      showAddRoo: false,
      persons: [],
      newText: '',
      newTextInfo: '',
      floorNumber: '',
      roomsNumber: '',
      rateRoom: '',
      i: 1,
      isDelete: false,
      payload: []
    }),
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      showAddRoom(){
        return this.showAddRoo = !this.showAddRoo
      },
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
    },
};

</script>

<style lang="sass">
  .addRoomMenu
    position: fixed
    top: 5%
    left: 1%
    width: 20%
    height: 50%
  .reverse
    margin-left: 20%
  .showButtonDelete
    z-index: -1
</style>