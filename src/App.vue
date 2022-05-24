<template>
  <v-app>
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
              <span class="text-subtitle-4"><router-link to="/master" class="text-decoration-none">Редактор номеров</router-link></span>
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
      src="./assets/testRoomPic.jpg"
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
  </v-app>
</template>



<script>
export default {
  name: 'App',
  data: () => ({
      loading: false,
      selection: 1,
    }),
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
};
</script>
