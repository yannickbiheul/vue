<template>
  <div class="lesAnimaux">
    <h1>{{ msg }}</h1>
    {{getMyAnimaux()}}
    <div v-for="animal in animaux" v-bind:key="animal.id">
        <a href="#">{{animal.name}}</a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'LesAnimaux',
  props: {
    msg: String
  },
  data: function() {
      return {
          animaux: {}
      }
  },
  methods: {
      getMyAnimaux: function() {
      this.http.get('http://localhost:8085/animaux').then(response => {
        this.animaux = response.data.animaux;
        console.log(response.data.animaux);
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: #000;
}
</style>