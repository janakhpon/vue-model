<template>
  <div class="hello">
       <!-- Simplest - call `$emit()` inline-->
    <button type="button" name="button" v-on:click="$emit('increment')">Click me to increment!</button>

    <!-- set a variable then trigger a method which calls `$emit()` -->
    <label for="child-input">Child input: </label>
    <input id="child-input" type="text" name="msg" v-model="childMessage" v-on:keyup="emitToParent">
  </div>
</template>

<script>
export default {
  data() {
    return {
      childMessage: ''
    }
  },
  name: 'Componentone',
  methods: {
    // Define the method that emits data to the parent as the first parameter to `$emit()`.
    // This is referenced in the <template> call in the parent. The second parameter is the payload.
    emitToParent (event) {
      this.$emit('childToParent', this.childMessage)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
