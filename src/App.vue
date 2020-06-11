<template>
  <div id="app">
    <Navbar/>
    <Login/>
    <Formulario/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Login from './components/Login.vue'
import Formulario from './components/Formulario.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Login,
    Formulario
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
