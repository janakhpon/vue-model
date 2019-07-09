<template>
  <div class="hello">
  
      <textarea v-bind:class="{warning:!remain}" v-model="message" v-on:input="check" cols="30" rows="10"></textarea>
      <p>{{remain}}/{{limit}}</p>
    
  </div>
</template>

<script>
export default {
  name: 'Limiter',
  data: function() {
    return {
        message: '  ',
        limit:9,
    };
  },
  computed:{
      remain:function(){
          return this.limit - this.message.length
      }
  },
  methods:{
      check:function(){
          if(this.remain<0){
              this.message = this.message.substr(0, this.limit)
          }
      }
  },

}
</script>


<style>
.warning{
    border: red solid 3px;
    box-shadow: 5px 8px 4px blue;
}
</style>
