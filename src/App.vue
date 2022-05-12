<template>
  <div class="index">
    <h1 class="head">Список комнат</h1>
      <div v-for="persons in $store.state.room" :key="persons.i" class="card">
        <div class="header"> {{persons.text}}</div>
        <div class="info"> {{persons.info}}</div>
      </div>
    <p><button><a href="#/master">Редактор комнат</a></button></p>
  </div>
  <router-view></router-view>
</template>

<script>


export default {
  
}
</script>

<style lang="sass">
  .index 
   width: 800px
   margin-left: 20%
   border: 1px solid #808080
   background-color: #dcffeb
   color: #262626
   text-align: center
  a
   text-decoration: none
   color: #262626
  .info
   color: grey
   text-align: left
   position: absolute
   top: 25px
   left: 3px
   right: 3px
  .card
   border: 1px solid #808080
   width: 200px
   height: 150px
   display: inline-block
   margin: 20px
   position: relative
  .header
   color: #262626
</style>
