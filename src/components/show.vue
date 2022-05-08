<template>
  <div id="app">
    <div class="index">
      <h2>Список комнат</h2>
    <showHelper  :card = card :i = i :isTodoDelete = isTodoDelete :deleteCard = deleteCard />
    <hr>
    <p>Всего комнат: {{ card.length }}</p>
    <router-view/>
    </div>
  </div>
</template>

<script>
import showHelper from './showHelper'

export default {
  props: ['card', 'deleteCard'],
  name: 'app',
  data () {
    return {
      i: 1,
      isDelete: false
    }
  },

  methods: {
  },
  components: {
    showHelper
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

