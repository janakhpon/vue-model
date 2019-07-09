<template>
  <div class="hello">
  
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
   

  <div>
      <p>MESSAGE</p>
      <input v-model="message">
      <br>
      <hr>
      <br>
    <p>MESSAGE 1</p>
      <input v-model="message1">
  </div>
    <p>processed value : <span>{{computed_message}}</span></p>
  </div>
</template>

<script>
export default {
  name: 'Multireverse',
  data: function() {
    return {
        message: 'LION',
        message1:'GEEK',
    };
  },
  computed:{
      computed_message:{
          get:function(){
              return this.message+' '+this.message1
          },
          set:function(v){
              var arrary = v.split(' ')
              this.message = arrary[0]
              this.message1 = arrary[arrary.length-1]
          },
      }
  },

}
</script>


