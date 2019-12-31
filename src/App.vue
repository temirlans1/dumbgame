<template>
  <div id="app">
    <StartPage v-if="currentLevel==0"/>
    <Level1 v-if="currentLevel==1"/>
  </div>
</template>

<script>
import StartPage from './components/StartPage'
import Level1 from './components/Level1'

export default {
  name: 'app',
  components: {
    StartPage,
    Level1
  },
  data() {
    return {
      level: 0
    }
  },
  methods: {
    increaseLevel() {
      this.level ++
    }
  },
  computed: {
    currentLevel() {
      return this.level
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
