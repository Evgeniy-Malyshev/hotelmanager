<template>
    <div>
      <ul>
      <li v-for="card in card" :key="card.i">
        <span> {{card.text}}</span>
      </li>
    </ul>
    </div>
</template>

<script>

export default {
  props: ['card', 'isDelete', 'i', 'deleteCard'],
  components: {
  },
  methods: {
    addDelete (card) {
      this.card.splice(this.card.indexOf(card), 1)
    }
  }
}
</script>

<style>
li {
  text-align: left;
  margin-left: 5%;
}
.button__delete{
  border-radius: 50%;
  background-color: rgb(250, 95, 95);
  font-style: bold;
  border: 0.4px solid rgb(54, 54, 54);
}
</style>