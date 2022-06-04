<template>
  <v-app>
    <router-view></router-view>
    <v-card-title class="justify-space-around mt-12">
      <span class="text-h2">Добро пожаловать</span>
      </v-card-title>
      <v-card-title class="justify-space-around">
      <router-link to="/showroom" class="text-decoration-none">Начнём</router-link>
      </v-card-title>
  </v-app>
</template>



<script>
export default {
  name: 'App'
};
</script>
