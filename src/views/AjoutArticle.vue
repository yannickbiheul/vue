<template>
  <div>
    <h3>Ajout Article</h3>
    <div class="form-group">
        <input name="nom" v-model="nom" placeholder="Nom">
        <input name="description" v-model="description" placeholder="Description">
    </div>
    <button type="submit" @click="addArticle">Post
    </button>
  </div>
</template>

<script>
export default {

    data: function() {
        return {
            nom: null,
            description: null
        }
    },

    methods: {
        addArticle: function() {
            this.http.post('http://localhost:8081/addArticle2', {nom:this.nom, description: this.description}).then(response => {
                console.log(response.data);
            })
        }
    }
    
}        

</script>

<style>
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

input {
    width: 300px;
    height: 50px;
    margin: 10px;
}

textarea {
    width: 300px;
    margin: 10px;
}
</style>