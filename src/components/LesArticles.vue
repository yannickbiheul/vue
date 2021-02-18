<template>
  <div class="lesArticles">
    <h1>{{ msg }}</h1>
    <!-- <button v-on:click="getMyArticles()">Articles</button> -->
    <!-- {{getMyArticles()}} -->
    <div v-for="art2 in articles" v-bind:key="art2.id">
        <a href="#">{{art2.description}}</a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'LesArticles',
  props: {
    msg: String
  },
  data: function() {
      return {
          articles: {}
      }
  },
  methods: {
      getMyArticles: function() {
      this.http.get('http://localhost:8081/datajson').then(response => {
        this.articles = response.data.articles
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