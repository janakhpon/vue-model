<template>
  <div class="hello">
  
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>POSTS</h3>

    <select v-model="message">
        <option v-for="item in list_info" v-bind:key="item" v-bind:value="item.value">
            {{item.text}}
        </option>
    </select>
    <p>You selected : <span>{{message}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'Generator',
  data: function() {
    return {
        message: 'default value set in DATA',
       list_info:[
      {
          value : 'apple', text:'apple'
      },
      {
          value : 'peach', text:'peach'
      },
      {
          value: 'orange', text:'orange'
      },
      {
          value: 'pear', text: 'pear'
      }
    ]
    };
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
