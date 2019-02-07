<template>
  <div id="app">
    <h1>{{title}}</h1>
    <LeapComponent :power="0"></LeapComponent>
  </div>
</template>

<script>
import LeapComponent from './components/Leap.vue'

export default {
  name: 'app',
  components: {
    LeapComponent
  },
  data: function () {
    return {
      title: "Vue leap"
    }
  },
  methods: {
    
  },
  computed:{

  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
