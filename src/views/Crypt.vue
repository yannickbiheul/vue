<template>
  <div>
    <h3>Inscription</h3>
    <div class="form-group">
        <input name="name" v-model="name" placeholder="Name">
        <input name="password" v-model="password" placeholder="Password">
    </div>
    <button type="submit" @click="inscription">Post
    </button>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            name: null,
            password: null
        }
    },
    methods: {
        inscription: function() {
            this.http.post('http://localhost:8081/inscription', {name: this.name, password: this.password}).then(response => {
                console.log(response.data);
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