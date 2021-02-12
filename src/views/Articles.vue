<template>
  <div>
    <h1>{{ titre }}</h1>
    <div v-for="unArticle in listeArticles" v-bind:key="unArticle">
      {{ unArticle }}
    </div>
    <div v-for="devise in info" v-bind:key="devise.id">
      <span>{{devise.rate_float.toFixed(2)}}</span>
      <span v-html="devise.symbol"></span>
    </div>
    <button v-on:click="getMyJson()">Go !</button>
    <p>{{tommy}}</p>
    <button v-on:click="getMyArticles()">Articles</button>
    <ul>
      <li v-for="art2 in articles" v-bind:key="art2.id">
        {{art2.description}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titre: "Articles",
      listeArticles: ['produit1', 'produit2', 'produit3'],
      info: {},
      tommy: {},
      articles: {}
    }
  },
  mounted: function() {
    this.http.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(response => {
      this.info = response.data.bpi
    })
  },
  methods: {
    getMyJson: function() {
      this.http.get('http://localhost:9000/tommy').then(response => {
        this.tommy = response.data
      })
    },
    getMyArticles: function() {
      console.log("Articles");
      this.http.get('http://localhost:8082/datajson').then(response => {
        console.log(response.data.articles);
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
h1 {
  color: red;
}
</style>