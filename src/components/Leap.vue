<template>
  <div class="leap">
    <div>
      <h1>{{power}}</h1>
      <p>{{content}}</p>
    </div>
  </div>
</template>

<script>
import leapjs from 'leapjs';

export default {
  name: 'LeapComponent',
  props: {
    power: Number
  },  
  data: function() {
    return {
      content: "content"
    }
  },
  methods: {
    startrunner: function() {
        // eslint-disable-next-line
        // console.log(this);
        leapjs.loop({      
        hand: (frame) => {
            // eslint-disable-next-line
            console.log(this);
          if( frame.frame.gestures.length > 0 ){
            // eslint-disable-next-line            
           this.increase();
            this.content = frame;
            // eslint-disable-next-line
            console.log( frame );
          }

            // eslint-disable-next-line
            console.log( frame);          
        }      
      });           
    },
    increase: function(){
      this.power++;
    }
  }, 
  created() {
    // start: {
      this.startrunner()
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.square{
  width: 100px;
  height: 100px;
}

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
