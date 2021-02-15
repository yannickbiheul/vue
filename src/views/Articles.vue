<template>
  <div>
    <LesArticles msg="Liste des articles"/>
    <!-- <h3>{{ titre }}</h3>
    <div v-for="unArticle in listeArticles" v-bind:key="unArticle">
      {{ unArticle }}
    </div> -->
    <!-- <h3>{{titreJson}}</h3>
    <button v-on:click="getMyJson()">Go !</button>
    <p>{{tommy}}</p>
    <h3>Récupération json avec axios</h3>
    <div v-for="devise in info" v-bind:key="devise.id">
      <span>{{devise.rate_float.toFixed(2)}}</span>
      <span v-html="devise.symbol"></span>
    </div> -->
    <a class="lien" href="#">Ajouter un article</a>
  </div>
</template>

<script>

import LesArticles from '@/components/LesArticles.vue'

export default {
  data: function() {
    return {
      titre: "Récupération d'un tableau d'articles",
      listeArticles: ['produit1', 'produit2', 'produit3'],
      titreJson: "Récupération d'un fichier json",
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
    }
  },
  components: {
    LesArticles
  }
}
</script>

<style scoped>
h1 {
  color: red;
}

.lien {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  text-decoration: none;
  color: #000;
}
</style>