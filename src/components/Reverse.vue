<template>
  <div class="hello">
  
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>POSTS</h3>

   <input v-model="message" />
    <p>processed value : <span>{{computed_message}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'Reverse',
  data: function() {
    return {
        message: 'default value set in DATA',
    };
  },
  computed:{
      computed_message:function(){
          return this.message.split('').reverse().join('')
      }
  },

}
</script>


