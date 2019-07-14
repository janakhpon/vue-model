<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>POSTS</h3>

    <div v-for="item in info_set" v-bind:key="item">
        <img v-bind:src='item.url' alt="image" />
        <h2> {{item.title}} </h2>
        <p>{{item.summary}}</p>
        <h4>{{item.category}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
       info_set:[
      {
        url:'https://media2.giphy.com/media/1Mng0gXC5Tpcs/giphy.gif?cid=790b76115d22f5b5664f77537789eb22&rid=giphy.gif',
        title:'dancing robot',
        summary : 'recently this crazy idiot robot turned out to be a big star for a while',
        category: 'science',
      },
      {
        url:'https://media.giphy.com/media/N8wR1WZobKXaE/giphy.gif',
        title:'heart broken robot',
        summary : 'Oh man that is so much pain! ... I ... can ..not take it ',
        category: 'science',
      },
      {
        url:'https://media3.giphy.com/media/yPnvBQhJbS7WU/giphy.gif?cid=790b76115d22f6497633457963011094&rid=giphy.gif',
        title:'emotional robot',
        summary : 'recently this crazy idiot robot turned out to be a big star for a while',
        category: 'science',
      },
      {
        url:'https://media2.giphy.com/media/znFqUjxjw6WAM/giphy.gif?cid=790b76115d22f9893651784a458b2f9b&rid=giphy.gif',
        title:'dumbed face robot',
        summary : 'Oh man that is so much pain! ... I ... can ..not take it ',
        category: 'science',
      }
    ]
    };
  },
  props: {
    msg: String
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
