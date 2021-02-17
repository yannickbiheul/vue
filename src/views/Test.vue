<template>
  <div>
    <h3>Test Session</h3>
    <button v-on:click="sessions()">SESSIONS</button>
    <button v-on:click="quelName()">Quel nom ?</button>
    <p>{{named}}</p>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            named: null
        }
    },
    methods: {
        sessions: function() {
            this.$session.start();
            this.$session.set('name', 'Litamesbourg')
            console.log(this.$session.getAll())
        },
        quelName: function() {
            this.named = this.$session.get('name')
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