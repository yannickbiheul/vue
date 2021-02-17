<template>
  <div>
    <h3>Connexion</h3>
    <div class="form-group">
        <input name="name" v-model="name" placeholder="Name">
        <input name="password" v-model="password" placeholder="Password">
    </div>
    <button type="submit" @click="connexion">OK
    </button>
    <div v-if="nameUser">
        <h3>Bienvenue, {{name}} !</h3>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            name: null,
            nameUser: false,
            password: null
        }
    },
    methods: {
        connexion: function() {
            this.http.post('http://localhost:8081/connexion', {name: this.name, password: this.password}).then(response => {
                this.name = response.data.name;
                this.nameUser = true;
                console.log(response);
                console.log(req.session.name);
            })
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
</style>