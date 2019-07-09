<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Reverse/>
  </div>
</template>

<script>
import Reverse from './components/Reverse.vue'

export default {
  name: 'app',
  components: {
    Reverse
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
