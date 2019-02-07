<template>
  <div class="leap">
    <div>
      <h1>{{count}}</h1>
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
      content: "action here",
      count: Number
    }
  },
  methods: {
    startrunner: function() {
        this.count = 0;
        // eslint-disable-next-line
        // console.log(this);
        leapjs.loop({      
        hand: (frame) => {
            // eslint-disable-next-line
            // console.log(this);
          if( frame.frame.gestures.length > 0 ){
            // eslint-disable-next-line            
           this.increase();
            this.content = frame;
            // eslint-disable-next-line
            // console.log( frame );
          }
            // eslint-disable-next-line
            // console.log( frame);          
        }      
      });           
    },
    increase: function(){
      this.count++;
    }
  }, 
  created() {
      this.startrunner()
  }
}
</script>

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
