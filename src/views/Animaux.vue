<template>
  <div>
    <!-- <h3>{{ titre }}</h3>
    <div v-for="unArticle in listeArticles" v-bind:key="unArticle">
      {{ unArticle }}
    </div> -->
    <h3>{{titreJson}}</h3>
    {{ getMyAnimaux() }}
    <div v-for="animal in animaux" v-bind:key="animal.id">
    <p>{{ animal.name }} : {{ animal.weight }}kg</p>
    </div>
    <div class="ajout">
      <h3>Ajouter un animal</h3>
        <input type="text" placeholder="Name" v-model="name">  
        <input type="number" placeholder="weight" v-model="weight">
        <input type="text" placeholder="Gender" v-model="gender"> 
        <button @click="ajouter">Ajouter</button>
    </div>
    <!-- <h3>Récupération json avec axios</h3>
    <div v-for="devise in info" v-bind:key="devise.id">
      <span>{{devise.rate_float.toFixed(2)}}</span>
      <span v-html="devise.symbol"></span>
    </div> -->
    <!-- <a class="lien" href="#">Ajouter un animal</a> -->
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      animaux: {},
      titreJson: "Animaux",
      name: null,
      weight: null,
      gender: null
    }
  },
  methods: {
    getMyAnimaux: function() {
      this.http.get('http://localhost:8085/animaux').then(response => {
        this.animaux = response.data;
      })
    },
    ajouter: function() {
      this.http.post('http://localhost:8085/insertAnimal', {name: this.name, weight: this.weight, gender: this.gender}).then(response => {
        let number = response.data.length - 1;
        console.log(response.data[number].name + " ajouté !");
      })
      this.name = null;
      this.weight = null;
      this.gender = null;
    }
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

.ajout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>