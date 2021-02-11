<template>
  <div>
    <h1>{{ titre }}</h1>
    <div v-for="unArticle in listeArticles" v-bind:key="unArticle">
      {{ unArticle }}
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titre: "Articles",
      listeArticles: ['produit1', 'produit2', 'produit3']
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>