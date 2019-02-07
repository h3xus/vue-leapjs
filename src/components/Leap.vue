<template>
  <div class="leap">
  </div>
</template>

<script>
import leapjs from 'leapjs';

export default {
  name: 'LeapComp',
  props: {
    power: String
  },
  
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    startrunner: function(){
      if (leapjs) {
        leapjs.loop({      
        hand: function(frame){
          // eslint-disable-next-line
          console.log( frame );
        }      
      });
      } else {
                 // eslint-disable-next-line
          console.log('no leap controller' );
      }
    }
  }, 
  mounted: {
      
  },
  created: function() {
    // start: {
      this.startrunner()
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
