<template>
  <div class="hello">
    <Componentone :parentData="myData" v-on:childToParent="onChildClick" v-on:increment="counter++">
  </div>
</template>

<script>
import Componentone from './Componentone.vue'
export default {
  name: 'Component',
   data () {
    return {
      counter: 0,
      fromChild: '', // This value is set to the value emitted by the child
    }
  },
  props: {
    msg: String
  },
  components: {
    Componentone
  },
  methods:{
        // Triggered when `childToParent` event is emitted by the child.
    onChildClick (value) {
      this.fromChild = value
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
