<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Limiter/>
  </div>
</template>

<script>
import Limiter from './components/Limiter.vue'

export default {
  name: 'app',
  components: {
    Limiter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
